
import './App.css';
import React,{useState} from 'react';
import TaskList from './components/TaskList';
import MyButton from './components/UI/myButton/MyButton';
import MyInput from './components/UI/input/MyInput';

function App() {
	

	const [tasks,setTasks]=useState([{id:1,text:'go home', complited:false}])
	const[text,setText]=useState('')

	const addTask=(e)=>{
		e.preventDefault()
		const newTask={
			id:Date.now(),
			text,
			complited:false
		}
		setTasks([...tasks,newTask])
		setText('')
	}
	const deleteTask=(task)=>{
		setTasks(tasks.filter(el=> el.id!==task.id))
	}
	const changeBox=(id)=>{
		setTasks(tasks.map(item=> item.id === id ? {...item, complited: !item.complited} : item ))
	}
	console.log(tasks);
	
  return (
		  <div className='app'>
	  <form>
		  <MyInput 
		  value={text}
		  onChange={e=>setText(e.target.value)}
		  type='text' 
		  placeholder='Новое задание'
		  />
		  <MyButton onClick={addTask}>Добавить задание</MyButton>
	  </form>
	  {tasks.length!==0
	  ?<TaskList deleteTask={deleteTask} tasks={tasks} changeBox={changeBox}/>
	:<div className='taskszero'><h1>	Может добавишь еще задание!?</h1></div>
	}
  </div>	 
  )}


export default App;
