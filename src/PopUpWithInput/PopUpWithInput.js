import React from 'react';
import './PopUpWithInput.css';


class PopUpWithInput extends React.Component {
	render() {
		return (
			<div className='PopUpWithInput'>
				<h2>{this.props.name}</h2>
				<input type="text" id={this.props.inputId}/>
				<button onClick={() => this.props.onClick()}>Submit</button>
			</div>
		)
	}
}

export default PopUpWithInput