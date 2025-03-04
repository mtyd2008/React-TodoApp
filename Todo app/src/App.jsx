import { useRef , useState } from 'react'
import React from 'react'


function App() {

  const title = useRef('')
  const description = useRef('')

  const [todo , setTodo] = useState([])

  function addTodo(event) {
    event.preventDefault()
    console.log(title.current.value);
    console.log(description.current.value);

    todo.push({
      title: title.current.value,
      desc: description.current.value,
      id: Date.now()
    })
    setTodo([...todo])

    title.current.value = ''
    description.current.value = ''

  }
  

  return (
    <>
     <form onSubmit={addTodo}>
      <h1>Todo App</h1>
     <input type="text" placeholder='enter title' ref={title}/>
     <br /><br />
     <input type="text" placeholder='enter description' ref={description} />
     <br /><br />
     <button>Add</button>
     </form>

     <div>
      {todo.length > 0 ? todo.map((item)=>{
        <div style={{
          border: "1px solid black",
          padding:"20px",
          margin:"20px",
          borderRadius:"20px"
        }}>
          <h1>title:{item.title}</h1>
          <h1>desc: {item.description}</h1><br />
          <button>delete</button>
          <button>edit</button>
        </div>
      }): <h1>No todo...</h1>
    }
     </div>
    </>
  )
}

export default App
