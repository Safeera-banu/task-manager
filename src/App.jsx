import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function App() {
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState([])
  const [showFinished, setShowfinished] = useState(true)

  useEffect(() => {
    let todostring = localStorage.getItem("todos")
    if (todostring) {
      setTodos(JSON.parse(localStorage.getItem("todos")))
    }
  }, [])

  const savetoLS = () => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const handleAdd = () => {
    if (!todo.trim()) return
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }])
    setTodo('')
    savetoLS()
  }

  const handleEdit = (id) => {
    let task = todos.find((item) => item.id === id)
    setTodo(task.todo)
    setTodos(todos.filter((item) => item.id !== id))
    savetoLS()
  }

  const handleDelete = (e) => {
    setTodos(todos.filter(item => item.id !== e))
    savetoLS()
  }

  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  const handleCheckbox = (id) => {
    setTodos(todos.map((item) =>
      item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
    ))
    savetoLS()
  }

  const toggleFinished = () => {
    setShowfinished(!showFinished)
  }

  return (
    <>
      <nav className="flex justify-center bg-rose-800 py-3 text-white">
        <div className="font-bold text-xl">Manage Your Tasks</div>
      </nav>
      <div className='bg-rose-50 md:mx-auto p-5 rounded-xl my-5 min-h-[80vh] md:w-[80%] shadow-lg mx-4'>
        <div className="flex justify-center">
          <input type="text" onChange={handleChange} value={todo} placeholder='Enter a task' className='w-3/4 px-3 rounded-md focus:outline-neutral-400' />
          <button onClick={handleAdd} className='bg-rose-800 hover:bg-rose-600 text-white px-4 py-2 rounded-md ml-3'>Save</button>
        </div>
        <div className='flex gap-3 mt-4'>
          <input type="checkbox" checked={showFinished} onChange={toggleFinished} />
          <span className='text-sm'>Show Finished Task</span>
        </div>
        <h2 className='font-bold text-xl text-rose-800 my-6'>List of Tasks</h2>
        {todos.length === 0 && <div className='mt-5 font-thin'>No tasks added yet</div>}
        {todos.map(item => {
          return (showFinished || !item.isCompleted) && <div key={item.id} className='flex'>
            <div className='md:w-1/2 w-10/12 ms:m-auto'>
              <input type="checkbox" onChange={() => handleCheckbox(item.id)} checked={item.isCompleted} id={item.id} />
              <label htmlFor={item.id} className={item.isCompleted ? "line-through text-gray-500 ml-3" : "ml-3"}>{item.todo}</label>
            </div>
            <div className='flex items-start'>
              <button onClick={() => handleEdit(item.id)} className='bg-rose-800 hover:bg-rose-600 text-white p-2 rounded-md m-2'><FaRegEdit /></button>
              <button onClick={() => handleDelete(item.id)} className='bg-rose-800 hover:bg-rose-600 text-white p-2 rounded-md m-2'><MdDelete /></button>
            </div>
          </div>
        })}

      </div>
    </>
  )
}

export default App