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
        {Array.from({ length: max }, (_, i) => (
          <th key={i}>{i + 1}</th>
        ))}
      </tr>
    </thead>
  );
};




const App = () => {

  return (
    <>
      
      <MultiplicationTable max={5}/>
      <MultiplicationTable max={7}/>
      <MultiplicationTable max={10}/>
    
    </>
  );
};

export default App;