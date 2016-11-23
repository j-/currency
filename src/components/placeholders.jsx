import React, { Component } from 'react';

export default (BaseComponent, {
	placeholders = [],
	interval = 5000,
	...rest
}) => class Command extends Component {
	constructor (props) {
		super(props);
		this.state = {
			index: 0,
		};
		this.interval = null;
	}

	componentDidMount () {
		this.interval = setInterval(
			() => this.nextPlaceholder(),
			interval
		);
	}

	componentWillUnmount () {
		clearInterval(this.interval);
		this.interval = null;
	}

	getPlaceholder () {
		const { index } = this.state;
		return placeholders[index % placeholders.length];
	}

	nextPlaceholder () {
		this.setState((state) => ({
			index: state.index + 1,
		}));
	}

	render () {
		const placeholder = this.getPlaceholder();
		const { ...props } = this.props;
		return (
			<BaseComponent
				{ ...rest }
				{ ...props }
				placeholder={ placeholder }
			/>
		);
	}
};
