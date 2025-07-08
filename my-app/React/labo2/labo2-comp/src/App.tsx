interface HeaderProps{
  title:string,
  subtitle:string
}
interface ListProps{
  items:string[]
}
interface ListItemProps{
  text:string
}
interface FooterProps{
  copy: string,
  year:number
}

const Header = ({ title, subtitle }: HeaderProps) =>{
  return (
    <>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </>
  );
}

const List = ({items} : ListProps)=>{
  return(
    <ul>
      {items.map((item,index)=>(
        <ListItem key={index} text={item}/>
      ))}
    </ul>
  )
}

const ListItem = ({text}:ListItemProps)=>{
  return(
    <li>
      {text}
    </li>
  )
}

const Footer = ({ copy, year }: FooterProps) => {
  return (
    <footer>
      <p>&copy; {copy} ({year})</p>
    </footer>
  );
};


function App() {
  
  return (
    <>
      <Header title="Labo 2" subtitle="Basic Components"/>
      <List items={["item 1","item 2","item 3"]}/>
      <Footer copy="Andie Similon" year="2021"/>
    </>
  )
}

export default App
