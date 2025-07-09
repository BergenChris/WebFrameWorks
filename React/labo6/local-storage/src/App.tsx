import { useEffect, useState } from 'react'

interface DadJoke{
  id:string;
  joke:string;
  status:number;
}

const DadJoke = () => {
  const [currentjoke,setCurrentJoke] = useState("");
  const [recentJoke,setRecentJoke] =useState("");
  const [jokes,setJokes] = useState<string[]>([]);
  

  const loadJoke = async()=> {
    let response = await fetch("https://icanhazdadjoke.com/",{
      headers:{
        "Accept":"application/json"
      }
    });
    let joke:DadJoke= await response.json();
    setCurrentJoke(joke.joke);
    console.log(joke.joke)
  }

  const saveJoke = ()=>{
    setRecentJoke(currentjoke);
    setJokes([...jokes,currentjoke]);
    loadJoke();
  }

  useEffect(()=>{
    
     loadJoke()
  },[])

  return(
    <>
      <h1>Random Joke</h1>
      <div>
          {currentjoke}
        </div> 
      <button value={currentjoke} onClick={saveJoke}>Save</button>
      <button onClick={loadJoke}>Refresh</button>
      <h2>Meest recent opgeslagen Joke</h2>
      <div>
        {recentJoke}
      </div>
      <div>
        {jokes.length > 0 ? (
          <ul>
            {jokes.map((joke, index) => (
              <li key={index}>{joke}</li>
            ))}
          </ul>
        ) : (
          <p>No saved jokes yet.</p>
        )}
      </div>
    </>
  )
};
           
          
        

function App() {


  return (
    <>
      <DadJoke/>
    </>
  )
}

export default App;
