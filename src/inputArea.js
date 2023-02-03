import React,{useState} from 'react'


const InputArea = ({addItem}) => {
    const [inputText, setInputText] = useState("")

    function handelChange(event) {
        setInputText(event.target.value)
    }

    function handelAdd() {
        if(inputText===""){
            alert("please Enter Something..")
            return; 
        }
        addItem(inputText)
        setInputText("")  
    }

    return (
    <div className='inputField'>
    <input
    value={inputText}
    type="text"
    placeholder='What You Want To Do ?'
    onChange={handelChange}
    />
    <button onClick={handelAdd}>Add</button>



      
    </div>
  )
}

export default InputArea
