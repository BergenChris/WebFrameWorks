



function App() {
 
  let arrayNumbers:number[] =[1,1,2,3,3,4,4,5,6];

  interface Student {
    id:number,
    naam:string,
    leeftijd:number
  }
  let students:Student[] = [
    { id: 1, naam: "Emma Jansen", leeftijd: 20 },
    { id: 2, naam: "Liam Peeters", leeftijd: 22 },
    { id: 3, naam: "Noah Willems", leeftijd: 19 },
    { id: 4, naam: "Olivia Maes", leeftijd: 21 },
    { id: 5, naam: "Lucas De Smet", leeftijd: 23 },
    { id: 6, naam: "Sophie Vermeulen", leeftijd: 20 }
  ]



  return (
    <>
      <h1>Lijsten</h1>
      <h2>Getallenlijst</h2>
      <ul>
        {arrayNumbers.map((x, index) => <li key={index}>{x}</li> )}
      </ul>
      <h2>Studentenlijst</h2>
      <ol>
        {students.map(student => <li key={student.id}>{student.naam}</li>)}
      </ol>
      <h2>Studentenlijst + 20j</h2>
      <ol>
        {students.filter(student=>student.leeftijd >20).map(student => <li key={student.id}>{student.naam}</li>)}
      </ol>
      <h2>Selecteer een student</h2>
      <select>
        {students.map(student => (
          <option key={student.id} value={student.id}>
            {student.naam}
          </option>
        ))}
      </select>
      <h2>Studenten tabel</h2>
      <table border={1} cellPadding={5}>
        <thead>
          <tr>
            <th>Naam</th>
            <th>Leeftijd</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.id}>
              <td>{student.naam}</td>
              <td>{student.leeftijd}</td>
            </tr>
          ))}
        </tbody>
      </table>
     
      
    </>
  )
}

export default App
