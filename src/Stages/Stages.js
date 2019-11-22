import React from 'react';
import './Stages.css';
import Stage from "./Stage/Stage.js";


class Stages extends React.Component {
	render() {
		return (
			<div className='Stages'>
				{this.props.stages.map((stage, i) => {
					return <Stage stage={stage} pushTask={() => this.props.pushTask(i)}/>
				})}
			</div>
		)
	}
}

export default Stages;