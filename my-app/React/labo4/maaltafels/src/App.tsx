import { useState } from "react";

interface MultiplicationTableProps{
  max:number;
}
const MultiplicationTable = ({max}:MultiplicationTableProps) => {
  return(
    <>
      <table border={1} cellPadding={5} style={{ borderCollapse: 'collapse', textAlign: 'center' }}>
        <Header max={max} />
        <tbody>
          {Array.from({ length: max }, (_, i) => (
            <MultiplicationRow key={i} factor={i + 1} max={max} />
          ))}
        </tbody>
      </table></>

  )
}

interface MultiplicationRowProps{
  factor:number;
  max:number;
}
const MultiplicationRow = ({factor,max}:MultiplicationRowProps) => {
  return(
    <>
    <tr>
      {/* New td before the row cells, showing the row number */}
      <td><strong>{factor}</strong></td>
      
      {Array.from({ length: max }, (_, i) => (
        <td key={i}>{factor * (i + 1)}</td>
      ))}
    </tr>
    </>

  )
}
interface HeaderProps {
  max: number;
}

const Header = ({ max }: HeaderProps) => {
  return (
    <thead>
      <tr>
        <th></th>
        {Array.from({ length: max }, (_, i) => (
          <th key={i}>{i + 1}</th>
        ))}
      </tr>
    </thead>
  );
};


interface InputProps {
  number: number;
  setNumber: React.Dispatch<React.SetStateAction<number>>;
}

const Input = ({ number, setNumber }: InputProps) => {
  return (
    <input
      type="number"
      value={number}
      
      onChange={(e) => setNumber(Number(e.target.value))}
      min={2}
      max={10}
    />
  );
};

const App = () => {
  const [number, setNumber] = useState<number>(5);

  return (
    <>
      <Input number={number} setNumber={setNumber} />
      <MultiplicationTable max={number} />
    </>
  );
};

export default App;
