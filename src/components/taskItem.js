import React from "react";
import MyButton from "./UI/myButton/MyButton";

const TaskItem=({...props})=>{
return <div className='task'>
	<div className='task__content'>
<strong >{props.number}.<input type='checkbox'  
onChange={()=>props.changeBox(props.task.id)
}/>
</strong>
<div style={{textDecoration:props.task.complited ? 'line-through white': 'none'}}> {props.task.text}</div>
<div className='btn'>
	<MyButton onClick={()=>props.deleteTask(props.task)}>Удалить</MyButton>
</div>
</div>
</div>
}

export default TaskItem 