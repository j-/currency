import React, { Component } from 'react';

import {
	FormInput,
} from 'elemental';

export default class Command extends Component {
	constructor (props) {
		super(props);
		this.state = {
			input: '',
		};
		this.handleChangeInput = this.handleChangeInput.bind(this);
	}

	handleChangeInput (e) {
		this.setState({
			input: e.target.value,
		});
	}

	render () {
		const { input } = this.state;
		return (
			<FormInput
				value={ input }
				onChange={ this.handleChangeInput }
			/>
		);
	}
}
