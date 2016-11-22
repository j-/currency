import React, { Component } from 'react';

import {
	FormInput,
} from 'elemental';

const PLACEHOLDER_INTERVAL = 3000;

const examples = [
	'100 aud in usd',
	'€50 to JPY',
	'CNY1000 in EUR',
];

const getExampleByIndex = (index) => (
	examples[index % examples.length]
);

export default class Command extends Component {
	constructor (props) {
		super(props);
		this.state = {
			input: '',
			placeholder: '',
			placeholderIndex: 0,
		};
		this.interval = null;
		this.handleChangeInput = this.handleChangeInput.bind(this);
	}

	componentDidMount () {
		this.updatePlaceholder();
		this.interval = setInterval(
			() => this.updatePlaceholder(),
			PLACEHOLDER_INTERVAL
		);
	}

	componentWillUnmount () {
		clearInterval(this.interval);
		this.interval = null;
	}

	updatePlaceholder () {
		this.setState((state) => ({
			placeholder: getExampleByIndex(state.placeholderIndex + 1),
			placeholderIndex: state.placeholderIndex + 1,
		}));
	}

	handleChangeInput (e) {
		this.setState({
			input: e.target.value,
		});
	}

	render () {
		const { input, placeholder } = this.state;
		return (
			<FormInput
				{ ...this.props }
				value={ input }
				placeholder={ placeholder }
				onChange={ this.handleChangeInput }
			/>
		);
	}
}
