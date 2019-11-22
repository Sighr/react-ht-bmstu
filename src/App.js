import React from 'react';
import './App.css';
import Stages from './Stages/Stages.js';
import PopUpWithInput from "./PopUpWithInput/PopUpWithInput.js";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			stages: [],
			popup: null
		};
	}

	onAddTask() {
		const merde = document.getElementsByClassName('grise-merde')[0];
		merde.style = 'display: block';
		this.setState({
			...this.state,
			popup: (<PopUpWithInput name='Add Task' inputId='taskNameInputField' onClick={() => {
					const taskName = document.getElementById('taskNameInputField').value;
					if(!taskName)
						return;
					this._addTask(taskName);
					this.setState({...this.state, popup: null});
					merde.style = 'display: none';
				}
			}/>)
		});
	}

	onAddStage() {
		const merde = document.getElementsByClassName('grise-merde')[0];
		merde.style = 'display: block';
		this.setState({
			...this.state,
			popup: (<PopUpWithInput name='Add Stage' inputId='stageNameInputField' onClick={() => {
					const stageName = document.getElementById('stageNameInputField').value;
					if(!stageName)
						return;
					this._addStage(stageName);
					this.setState({...this.state, popup: null});
					merde.style = 'display: none';
				}
			}/>)
		});
	}

	_addTask(taskName) {
		let state = {...this.state};
		if(state.stages.length === 0) {
			return;
		}
		state.stages[0].tasks.unshift(taskName);
		this.setState(state);
	}

	_addStage(stageName) {
		let state = {...this.state};
		state.stages.push({
			name: stageName,
			tasks: [],
		});
		this.setState(state);
	}

	pushTask(i) {
		let state = {...this.state};
		const excluded = state.stages[i].tasks.pop();
		if(excluded && state.stages.length - 1 !== i) {
			state.stages[i + 1].tasks.unshift(excluded);
		}
		this.setState(state);
	}

	render() {
		return (
			<div className="App">
				<div className='grise-merde' style={{display: 'none'}}/>
				{this.state.popup}
				<div className='centered'>
					<button onClick={() => this.onAddStage()}>Add stage</button>
					<button onClick={() => this.onAddTask()}>Add task</button>
				</div>
				<Stages stages={this.state.stages} pushTask={(i) => this.pushTask(i)}/>
			</div>
		);
	}

	componentDidMount() {

		const merde = document.getElementsByClassName('grise-merde')[0];
		merde.addEventListener('click', () => {
			this.setState({...this.state, popup: null});
			merde.style = 'display: none';
		});
	}
}

export default App;
