import { useState } from 'react'

const Filtering =()=>{

  interface Student {
    name:string;
    age:number;
    year:number;
  }

  const students: Student[] = [
  { name: "Jacob", age: 21, year: 2 },
  { name: "Jan", age: 20, year: 1 },
  { name: "Joris", age: 22, year: 3 },
  { name: "Korneel", age: 23, year: 4 },
  { name: "Mathias", age: 22, year: 3 },
  { name: "Muhammad", age: 20, year: 1 },
  { name: "Perneel", age: 22, year: 3 },
  { name: "Piet", age: 21, year: 2 },
  { name: "Joris", age: 22, year: 3 },
];

  const [searchTerm, setSearchTerm] = useState<string>("");
  const [sortColumn, setSortColumn] = useState<'name' | 'age' | 'year' | null>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  const filteredStudents = students.filter(student => 
  {
    const search = searchTerm.toLowerCase();
    return (
      student.name.toLowerCase().includes(search) 
    );
   });

  const handleSort = (column: 'name' | 'age' | 'year') => 
  {
    if (column === sortColumn) {
      setSortDirection(prev => (prev === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  const sortedStudents = [...filteredStudents].sort((a, b) => 
  {
    if (!sortColumn) return 0; // geen sortering
    const aValue = a[sortColumn];
    const bValue = b[sortColumn];

    if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
    if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
    return 0;
  });

  return(
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Studentenlijst</h2>
      <input
        type="text"
        placeholder="Zoek op naam, leeftijd of jaar..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        style={{ padding: '8px', fontSize: '16px', width: '300px', marginBottom: '10px' }}
      />
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th  onClick={() => handleSort('name')}>
              Naam{sortColumn === 'name' ? (sortDirection === 'asc' ? ' ▲' : ' ▼') : ''}
            </th>
            <th onClick={() => handleSort('age')}>
              Leeftijd{sortColumn === 'age' ? (sortDirection === 'asc' ? ' ▲' : ' ▼') : ''}
            </th>
            <th  onClick={() => handleSort('year')}>
              Jaar{sortColumn === 'year' ? (sortDirection === 'asc' ? ' ▲' : ' ▼') : ''}
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedStudents.map((student, index) => (
            <tr key={index}>
              <td >{student.name}</td>
              <td >{student.age}</td>
              <td >{student.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function App() {
 

  return (
    <>
      <Filtering />
    </>
  )
}

export default App
