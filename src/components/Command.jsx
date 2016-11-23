import React, { Component, PropTypes } from 'react';
import { parse } from '../parse';
import placeholders from './placeholders';
import examples from '../data/example-commands';

import {
	FormInput,
} from 'elemental';

class Command extends Component {
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
		}, () => this.parseInput());
	}

	parseInput () {
		const { onChangeValues } = this.props;
		const { input } = this.state;
		const { value, fromCode, toCode } = parse(input);
		onChangeValues({ value, fromCode, toCode });
	}

	render () {
		const { onChangeValues, ...props } = this.props;
		return (
			<FormInput
				{ ...props }
				onChange={ this.handleChangeInput }
			/>
		);
	}
}

Command.propTypes = {
	onChangeValues: PropTypes.func,
};

Command.defaultProps = {
	onChangeValues: () => {},
};

export default placeholders(Command, {
	placeholders: examples,
	interval: 3000,
});
