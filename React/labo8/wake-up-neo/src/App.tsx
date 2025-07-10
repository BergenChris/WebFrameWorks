import { useState, createContext, useContext } from 'react';



// 1. Create context with default value
const TextContext = createContext<string>("");

const FourthLine = () => {
  const text = useContext(TextContext);
  return <p>{text}</p>;
};

const ThirdLine = () => <><p>Follow the white rabbit.</p><FourthLine /></>;
const SecondLine = () => <><p>The matrix has you...</p><ThirdLine /></>;
const FirstLine = () => <><p>Wake Up, Neo...</p><SecondLine /></>;


const App = () => {
  const [text, setText] = useState("Knock, Knock, Neo");

  return (
    <>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      {/* 2. Provide context value here */}
      <TextContext.Provider value={text}>
        <div
          style={{
            backgroundColor: "black",
            color: "#4AF626",
            display: "flex",
            flexDirection: "column",
            padding: 20,
            whiteSpace: 'pre-wrap'
          }}
        >
          <FirstLine />
        </div>
      </TextContext.Provider>
    </>
  );
};

export default App;
