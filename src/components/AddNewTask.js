import React from "react";
import removeRecordNo from "./removeRecordNo";

export class AddNewTask extends React.Component {
	constructor(props) {
		super(props);
		this.justSubmitted = this.justSubmitted.bind(this);
		this.editVal = this.editVal.bind(this);
	}


	justSubmitted(event){
		event.preventDefault();
		if(event.target.querySelector('input').value){		
			var input = event.target.querySelector('input');
			var textarea = event.target.querySelector('textarea');
			var inptValue = input.value;
			var textareaValue = textarea.value;
			input.value = '';
			textarea.value = '';
			this.props.updateList({
				'title': inptValue,
				'summary': textareaValue,
				'status':'incompleted'
			});
		}

		if(this.removeRecordNo){
			console.log('justSubmitted >>> removeNo >> 222 ', this.removeRecordNo);
		}
	}

	editVal(ele, no){
		document.getElementById('title').value = ele.title;
		document.getElementById('summary').value = ele.summary;
		this.removeRecordNo = no;
		console.log('editVal >>> removeNo >> 111 >>> ', this.removeRecordNo);
	}

	render() {
		return(
			<form className="addNewTask" onSubmit={this.justSubmitted}>
				<table>
					<tbody>
					<tr>
						<td>
						<input
							name="title"
							id="title"
							placeholder="Add New Task"
							type="text"
						/>
						</td>
					</tr>
					<tr>
						<td>
							<textarea
							name="summary"
							id="summary"
							placeholder="Add Summary"
							>
							</textarea>
							</td>
					</tr>
					<tr>
						<td align="right"><input type="submit" value="Submit" /></td>
					</tr>
					</tbody>
				</table>
			</form>
		);
	}
}

export default AddNewTask;