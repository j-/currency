import React, { Component, PropTypes } from 'react';
import { parse } from '../parse';
import examples from '../data/example-commands';

import {
	FormInput,
} from 'elemental';

const PLACEHOLDER_INTERVAL = 3000;

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
			placeholder: examples[state.placeholderIndex % examples.length],
			placeholderIndex: state.placeholderIndex + 1,
		}));
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
		const { input, placeholder } = this.state;
		const { onChangeValues, ...props } = this.props;
		return (
			<FormInput
				{ ...props }
				value={ input }
				placeholder={ placeholder }
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
