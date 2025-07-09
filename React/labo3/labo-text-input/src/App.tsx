import { useState } from "react";

interface TextInputProps {
  size: number;
}

const TextInput = ({ size }: TextInputProps) => {
  const [values, setValues] = useState<string[]>(Array(size).fill(""));

  const handleChange = (index: number, newValue: string) => {
    const newValues = [...values];
    newValues[index] = newValue;
    setValues(newValues);
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      alert(`Input veld nummer ${index + 1} bevat: "${values[index]}"`);
    }
  };

  // zodra je typt
  // const handleChange = (index: number, newValue: string) => {
  //   const newValues = [...values];
  //   newValues[index] = newValue;
  //   setValues(newValues);
  //   alert(`Input nummer ${index + 1} bevat nu: "${newValue}"`);
  // };

  // return (
  //   <>
  //     {Array.from({ length: size }, (_, i) => (
  //       <input
  //         key={i}
  //         type="text"
  //         value={values[i]}
  //         onChange={(e) => handleChange(i, e.target.value)}
  //         placeholder={`Input ${i + 1}`}
  //         style={{ marginRight: 8, marginBottom: 8 }}
  //       />
  //     ))}
  //   </>
  // );

  //pas na enter, meer logischer
  return (
    <>
      {Array.from({ length: size }, (_, i) => (
        <input
          key={i}
          type="text"
          value={values[i]}
          onChange={(e) => handleChange(i, e.target.value)}
          onKeyDown={(e) => handleKeyDown(i, e)}
          placeholder={`Input ${i + 1}`}
          style={{ marginRight: 8, marginBottom: 8 }}
        />
      ))}
    </>
  );
};

function App() {


  return (
    <>
      <TextInput size={17}/>
    </>
  )
}

export default App
