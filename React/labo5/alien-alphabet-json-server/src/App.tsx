import { useState,useEffect } from 'react'


interface Alphabet{
    human:string;
    alien:string;
  }
interface AlienAlphabet{
    letters:Alphabet[];
  }

function App() {

  
// //   const alienAlphabet:AlienAlphabet = {
//     "letters": [
//         {
//             "human": "0",
//             "alien": "https://raw.githubusercontent.com/slimmii/alien-alphabet/master/0.png"
//         },
//         {
//             "human": "1",
//             "alien": "https://raw.githubusercontent.com/slimmii/alien-alphabet/master/1.png"
//         },
//         {
//             "human": "2",
//             "alien": "https://raw.githubusercontent.com/slimmii/alien-alphabet/master/2.png"
//         },
//         {
//             "human": "3",
//             "alien": "https://raw.githubusercontent.com/slimmii/alien-alphabet/master/3.png"
//         },
//         {
//             "human": "4",
//             "alien": "https://raw.githubusercontent.com/slimmii/alien-alphabet/master/4.png"
//         },
//         {
//             "human": "5",
//             "alien": "https://raw.githubusercontent.com/slimmii/alien-alphabet/master/5.png"
//         },
//         {
//             "human": "6",
//             "alien": "https://raw.githubusercontent.com/slimmii/alien-alphabet/master/6.png"
//         },
//         {
//             "human": "7",
//             "alien": "https://raw.githubusercontent.com/slimmii/alien-alphabet/master/7.png"
//         },
//         {
//             "human": "8",
//             "alien": "https://raw.githubusercontent.com/slimmii/alien-alphabet/master/8.png"
//         },
//         {
//             "human": "9",
//             "alien": "https://raw.githubusercontent.com/slimmii/alien-alphabet/master/9.png"
//         },
//         {
//             "human": "a",
//             "alien": "https://raw.githubusercontent.com/slimmii/alien-alphabet/master/A.png"
//         },
//         {
//             "human": "b",
//             "alien": "https://raw.githubusercontent.com/slimmii/alien-alphabet/master/B.png"
//         },
//         {
//             "human": "c",
//             "alien": "https://raw.githubusercontent.com/slimmii/alien-alphabet/master/C.png"
//         },
//         {
//             "human": "d",
//             "alien": "https://raw.githubusercontent.com/slimmii/alien-alphabet/master/D.png"
//         },
//         {
//             "human": "e",
//             "alien": "https://raw.githubusercontent.com/slimmii/alien-alphabet/master/E.png"
//         },
//         {
//             "human": "f",
//             "alien": "https://raw.githubusercontent.com/slimmii/alien-alphabet/master/F.png"
//         },
//         {
//             "human": "g",
//             "alien": "https://raw.githubusercontent.com/slimmii/alien-alphabet/master/G.png"
//         },
//         {
//             "human": "h",
//             "alien": "https://raw.githubusercontent.com/slimmii/alien-alphabet/master/H.png"
//         },
//         {
//             "human": "i",
//             "alien": "https://raw.githubusercontent.com/slimmii/alien-alphabet/master/I.png"
//         },
//         {
//             "human": "j",
//             "alien": "https://raw.githubusercontent.com/slimmii/alien-alphabet/master/J.png"
//         },
//         {
//             "human": "k",
//             "alien": "https://raw.githubusercontent.com/slimmii/alien-alphabet/master/K.png"
//         },
//         {
//             "human": "l",
//             "alien": "https://raw.githubusercontent.com/slimmii/alien-alphabet/master/L.png"
//         },
//         {
//             "human": "m",
//             "alien": "https://raw.githubusercontent.com/slimmii/alien-alphabet/master/M.png"
//         },
//         {
//             "human": "n",
//             "alien": "https://raw.githubusercontent.com/slimmii/alien-alphabet/master/N.png"
//         },
//         {
//             "human": "o",
//             "alien": "https://raw.githubusercontent.com/slimmii/alien-alphabet/master/O.png"
//         },
//         {
//             "human": "p",
//             "alien": "https://raw.githubusercontent.com/slimmii/alien-alphabet/master/P.png"
//         },
//         {
//             "human": "q",
//             "alien": "https://raw.githubusercontent.com/slimmii/alien-alphabet/master/Q.png"
//         },
//         {
//             "human": "r",
//             "alien": "https://raw.githubusercontent.com/slimmii/alien-alphabet/master/R.png"
//         },
//         {
//             "human": "s",
//             "alien": "https://raw.githubusercontent.com/slimmii/alien-alphabet/master/S.png"
//         },
//         {
//             "human": "t",
//             "alien": "https://raw.githubusercontent.com/slimmii/alien-alphabet/master/T.png"
//         },
//         {
//             "human": "u",
//             "alien": "https://raw.githubusercontent.com/slimmii/alien-alphabet/master/U.png"
//         },
//         {
//             "human": "v",
//             "alien": "https://raw.githubusercontent.com/slimmii/alien-alphabet/master/V.png"
//         },
//         {
//             "human": "w",
//             "alien": "https://raw.githubusercontent.com/slimmii/alien-alphabet/master/W.png"
//         },
//         {
//             "human": "x",
//             "alien": "https://raw.githubusercontent.com/slimmii/alien-alphabet/master/X.png"
//         },
//         {
//             "human": "y",
//             "alien": "https://raw.githubusercontent.com/slimmii/alien-alphabet/master/Y.png"
//         },
//         {
//             "human": "z",
//             "alien": "https://raw.githubusercontent.com/slimmii/alien-alphabet/master/Z.png"
//         }
//     ]
//   }
//optie 2 is met lokale json-server

  const [alphabet, setAlphabet] = useState<Alphabet[]>([]);
  const [code, setCode] = useState<Alphabet[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/letters')
      .then((res) => res.json())
      .then((data: Alphabet[]) => {
        setAlphabet(data);
      })
      .catch((err) => console.error('Fout bij ophalen:', err));
  }, []);

  return (
    <>
      {alphabet.map((letter) => (
        <button key={letter.human} onClick={() => setCode((prev) => [...prev, letter])}>
          <img src={letter.alien} alt={letter.human} width={30} />
        </button>
      ))}

      <button onClick={() => setCode((prev) => prev.slice(0, -1))}>⌫</button>
      <button onClick={() => setCode([])}>🗑</button>

      <div style={{ marginTop: '20px', fontSize: '40px',fontWeight:"bold" }}>
        {code.map((letter, idx) => (
          <span key={idx}>{letter.human}</span>
        ))}
      </div>
    </>
  );
}

export default App;