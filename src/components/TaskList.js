import React from "react";
import TaskItem from "./taskItem";
import {TransitionGroup,CSSTransition} from 'react-transition-group'

const TaskList=({tasks, deleteTask, changeBox})=>{
return <div>
	<h1 style={{textAlign:'center',color:'rgb(189, 140, 7)'}}>Список задач</h1>
	<TransitionGroup>
	{tasks.map((task,index)=>
	<CSSTransition
	key={task.id}
   timeout={500}
   classNames="task"
   >
		<TaskItem deleteTask={deleteTask} number={index+1} task={task} changeBox={changeBox} />
		</CSSTransition>
		)}
	</TransitionGroup>	 
</div>
}

export default TaskList