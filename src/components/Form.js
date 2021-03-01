import React from 'react'


const Form = ({ setInputText, inputText , setTodos, todos, setStatus }) => {
  
  //pega o valor do input e coloca no state
  const inputTextHandler = (e) => {
    console.log(e.target.value)
    setInputText(e.target.value)
  }
  
  // monta um array(todos) com os valores armazenados no state do input
  const submitTodoHandler = (e) => {
    e.preventDefault()
    setTodos([
      ...todos, 
      {text: inputText, completed: false, id: Math.random() * 1000}
    ])
    setInputText('')
  }

  const statusHandler = (e) => {
    setStatus(e.target.value)
  }

  return(
    <form>
      <input value={inputText} type="text" className="todo-input" onChange={inputTextHandler}/>
      <button className="todo-button" type="submit" onClick={submitTodoHandler}> 
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  )
}

export default Form