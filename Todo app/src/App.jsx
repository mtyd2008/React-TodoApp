import { useRef , useState } from 'react'
import React from 'react'


function App() {

  const title = useRef('')
  const description = useRef('')

  const [todo , setTodo] = useState([])


  function addTodo(event) {
    event.preventDefault();
    console.log(title.current.value);
    console.log(description.current.value);

    
    setTodo([...todo , {
      title: title.current.value,
      description: description.current.value,
      id: Date.now(),
    }])

    title.current.value = ''
    description.current.value = ''

  }

  function deleteTodo(index){
    // console.log('delete', index);
    todo.splice(index , 1)
    setTodo([...todo])
  }

  function editTodo(index){
    // console.log('edit' , index);
    const updatedTitle = prompt('enter updated title')
    const updatedDesc = prompt('enter updated description')

    if(updatedTitle && updatedDesc === ''){
      alert("please enter updated value")
      return
    }

    todo[index].title = updatedTitle
    todo[index].description =updatedDesc
    setTodo([...todo])
    
  }

  return (
    <>
     <form style={{
        textAlign : 'center',
      }} onSubmit={addTodo}>
      <h1>Todo App</h1>
     <input type="text" placeholder='enter title' ref={title}/>
     <br /><br />
     <input type="text" placeholder='enter description' ref={description} />
     <br /><br />
     <button type="submit">Add todo</button>
     </form>

     <div style={{
      textAlign:'center',
     }}>
      {todo.length > 0 ? todo.map((item , index)=>{
        return <div key={item.id} style={{
          border: "1px solid black",
          padding:"15px",
          margin:"10px",
          borderRadius:"20px",
          
        }}>
          <h3>Title:{item.title}</h3>
          <h3>Desc: {item.description}</h3><br />
          <button onClick={()=> deleteTodo(index)}>delete</button>
          <button onClick={()=> editTodo(index)}>edit</button>
        </div>
      }): <h3>No todo...</h3>
    }
     </div>
    </>
  )
}

export default App
