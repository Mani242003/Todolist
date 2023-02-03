import React,{useState,useEffect} from 'react'
import InputArea from "./inputArea";
import ToDoItems from "./ToDoItems"
import "./App.css"

const App = () => {

  useEffect(() => {
    const items=localStorage.getItem("item")
    if(items){
      const arrType=JSON.parse(items)
      setItems(arrType)
    }
  }, [])

  const [items, setItems] = useState([])

  const addItem=(item)=>{
    setItems((currentItem)=>{
     const itemsList=[...currentItem,item]
     const stingType=JSON.stringify(itemsList)
     localStorage.setItem("item",stingType)
     return(itemsList)
    })
  }

  const deleteitem=(id)=>{
    setItems((curritem)=>{
      const deleteList= curritem.filter((item,index)=>index!==id)
      const stringType=JSON.stringify(deleteList)
      localStorage.setItem("item",stringType)
      return  deleteList
    })
  }

  console.log("items",items);

  return (
    <div className='app'>
    <h1 className='appTittel'>To Do List</h1>
    <InputArea addItem={addItem} />
    <div className='itemsContainer'>
    {
      items.length===0?
      <h2 className='noItemText'>No items Added</h2> : items.map((item,index)=>{
        return(
          <ToDoItems 
          key={index} 
          itemText={item}  
          deleteitem={ ()=>deleteitem(index) }/>
          )
      })
    }</div>
  
    </div>
  )
}

export default App
