
interface ColorSquareProps 
{
 
  height:number,
  width:number,
  color:string
}

const ColorSquare = ({height = 100,width=100,color="white"}:ColorSquareProps) => 
{
  return (
    <div style={{width:width,height:height,backgroundColor:color}}></div>
  )
}

export default ColorSquare ;
