import React from "react";
import './Stage.css';

class Stage extends React.Component {
	render() {
		console.log(this.props);
		return (<div className='Stage'>
			<h2>{this.props.stage.name}</h2>
			<button onClick={() => this.props.pushTask()}>Done</button>
			<ul>
				{this.props.stage.tasks.map((task, i) => {
					return (<li key={i}>{task.toString()}</li>)
				})}
			</ul>
		</div>)
	}
}

export default Stage;