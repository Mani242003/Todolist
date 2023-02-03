import React from 'react'

const ToDoItems = ({itemText,deleteitem}) => {


  return (
    <div className='toDoItem'>
    <p>{itemText}</p>
    <button onClick={deleteitem}>Delete</button>

      
    </div>
  )
}

export default ToDoItems
