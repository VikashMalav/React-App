import { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';
// import './TodoList.css'

function TodoList() {
  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState([])
  const [updating, setUpdating] = useState(false)
  const [completedItems, setCompletedItems] = useState([])

  function handleChange(e) {
    setTask(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (updating === false)
      setTasks([...tasks, task])
    else {
      tasks[updating] = task;
      
      setTasks([...tasks])
    }
console.log(tasks)
    setTask('')
  }

  function handleDeletion(itemToDelete) {
    // console.log(itemToDelete)
    setTasks(tasks.filter((item, index) => {
      return index !== itemToDelete
    }))
  }

  function handleUpdation(itemToUpdate) {
    setTask(tasks[itemToUpdate])
    setUpdating(itemToUpdate)
  }

  function handleCompletion(itemToMarkComplete){
    setCompletedItems([...completedItems, itemToMarkComplete])
  }
  
  return (
    <div className='todolist'>
      <h3>ToDo List</h3>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" value={task} onChange={handleChange} />
        <input type="submit" value='Add' />
      </form>
      <ul>
        {
          tasks.map((item, index) => {
            return (
              <li 
                className={(completedItems.includes(index)) ? 'completed' : ''} 
                key={index}
              >
                {item}
                <div className="icons">
                  <CloseIcon className='cross' onClick={() => handleDeletion(index)} />
                  <EditIcon className='pencil' onClick={() => handleUpdation(index)} />
                  <DoneIcon className='complete' onClick={() => handleCompletion(index)} />
                </div>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}
export default TodoList