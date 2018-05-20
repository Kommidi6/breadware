import React from 'react';

export class TodoList extends React.Component{
	constructor(){
		super();

		this.remove = this.remove.bind(this);
		this.editinfo = this.edit.bind(this);
	};

	edit(ele){
		this.props.edit(ele);
	};

	remove(elem){
		this.props.remove(elem);
	};


	render(){
		if(this.props.tasks){			
			var items = this.props.tasks.map((elem, i) => {
				return <tr key={i}><td>{elem.title}</td><td>{elem.summary}</td><td>{elem.status}</td><td><button info={i} onClick={this.editinfo.bind(null, {i})}>Edit</button></td><td><button info={i} onClick={this.remove.bind(null, {i})}>Del</button></td></tr>
			});
		}
		return (
			<div className="todoList">
				<table>
					<thead>
						<tr><th>Title</th><th>Summary</th><th>Status</th><th></th><th></th></tr>
					</thead>
					<tbody>
						{items}
					</tbody>
				</table>
			</div>
		);
	}
}

export default TodoList;
