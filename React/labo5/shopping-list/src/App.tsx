import { useState } from 'react'
import styles from "./App.module.css";

interface SoppingListItem {
  name:string;
  quantity:number;
}

const ShoppingList = () => {

  const [shoppingList,setShoppingList] = useState<SoppingListItem[]>([]);
  const [name,setName] = useState<string>("");
  const [quantity,setQuantity] = useState<number>(0);
  const [successMessage,setSuccessMessage] = useState("");
  const [errorMessage,setErrorMessage] = useState("");

  function addShoppingItem() {
    if (quantity <1) {  setErrorMessage("Quantity should be over 0.")}
    else {
      setShoppingList([...shoppingList,{name,quantity}]);
      setSuccessMessage(`Item "${name}" added to shopping list.`);
      setErrorMessage("");
    }
    
  }
  function removeShoppingItem(index:number){
    let newShoppingList = shoppingList.filter((item,i)=> i !== index);
    setShoppingList(newShoppingList);
    setSuccessMessage(`Item "${name}" removed from shopping list.`);
    setErrorMessage("");
  }

  return(
    <div>
        {errorMessage  && <div className={styles.error}>
          {errorMessage}
        </div>}
        {successMessage && <div className={styles.success}>
          {successMessage}
        </div> }
        <div className={styles.shoppingAddForm}>
          <label>Name:</label>
          <input type="text" placeholder='Name' value={name} onChange={e=>setName(e.target.value)}/>
          <label>Quantity</label>
          <input type="number" placeholder='Quantity' value={quantity} onChange={e=>setQuantity(parseInt(e.target.value))}/>
        </div>
        <button onClick={addShoppingItem}>Add</button>
        <table>
          <thead>
            <th>Name</th>
            <th>Quantity</th>
            <th></th>
          </thead>
          <tbody>
           { 
            shoppingList.map((item,index)=>
              <tr>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td><button onClick={()=>{removeShoppingItem(index)}}>Remove</button></td>
            </tr>
           )}
          </tbody>
        </table>
    </div>
  )
}

function App() {
  const [count, setCount] = useState(0)

return (
    <>
     <ShoppingList />
    </>
  )
}

export default App
