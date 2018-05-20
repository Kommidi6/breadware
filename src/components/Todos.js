import React from "react";
import AddNewTask from "./AddNewTask";
import TodoList from "./TodoList";

export class Todos extends React.Component{
	constructor(props){
		super();
		var tasksList = [
			{
				'title': 'task1',
				'summary': 'Task one Summary',
				'status':'completed'
			},
			{
				'title': 'task2',
				'summary': 'Task Two Summary',
				'status':'incompleted'
			},
			{
				'title': 'task3',
				'summary': 'Task Three Summary',
				'status':'completed'
			}
		];
		this.state = { tasks: tasksList };
		this.updateList = this.updateList.bind(this);
		this.editInfo = this.editInfo.bind(this);
		this.removeTask = this.removeTask.bind(this);
	}

	updateList(text){		
		var updatedTasks = this.state.tasks;
		updatedTasks.push(text);
		this.setState({'tasks': updatedTasks})
	}

	editInfo(text){
		var updatedTasks = this.state.tasks;
		var editValue = updatedTasks[text.i]
		var n = new AddNewTask();
		n.editVal(editValue, text.i);
	}

	removeTask(no){
		var updatedTasks = this.state.tasks;
		updatedTasks.splice(no.i, 1);
		this.setState({'tasks': updatedTasks});
	}

	render(){
		return(
			<div className="todoSection">
				<h1>Todos</h1>
				<AddNewTask updateList={this.updateList} editVal={this.editValue} />
				<TodoList tasks={ this.state.tasks} remove={this.removeTask} edit={this.editInfo} />
			</div>
		);
	}
}

export default Todos;
