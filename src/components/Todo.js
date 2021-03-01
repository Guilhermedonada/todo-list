import React from 'react'

const Todo = ({text, todo, todos, setTodos}) => {

  // caso o elemento clicado seja igual o da lista de todos, entao é deletado
  const deleteHandler = () => {
    setTodos(todos.filter(el => el.id !== todo.id))
  }

  // se completa a atividade muda o o status completed para true
  const completeHandler = () => {
    setTodos(todos.map(item => {
      if(item.id === todo.id){
        return {
          ...item, completed: !item.completed
        }
      }
      return item
    }))
  }

  return(
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""} `} >{text}</li>
      <button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button> 
      <button className="trash-btn" onClick={deleteHandler}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  )
}

export default Todo