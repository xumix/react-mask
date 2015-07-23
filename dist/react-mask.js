'use strict';

var React = require('react');
var Mask = require('vanilla-masker');

var MaskInput = React.createClass({

	propTypes: {
		type: React.PropTypes.string,
		id: React.PropTypes.string,
		mask: React.PropTypes.string,
		placeholder: React.PropTypes.string
	},

	getInitialState() {
		return {
			mask: this.props.mask,
			placeholder: this.props.placeholder
		};
	},

	getDefaultProps() {
		return {
			type: 'text',
			id: 'maskInput',
		};
	},

	componentDidMount() {
		Mask(React.findDOMNode(this.refs.maskInput))
		.maskPattern(this.state.mask);
	},

	componentWillReceiveProps(nextProps) {
		this.setState({
			mask: nextProps.mask,
			placeholder: nextProps.placeholder
		});
		Mask(React.findDOMNode(this.refs.maskInput))
		.maskPattern(nextProps.mask);
	},

	render() {
		return (
			<div>
				<input
					ref='maskInput'
					type={this.props.type}
					id={this.props.id}
					placeholder={this.state.placeholder} />
			</div>
		);
	}

});

module.exports = MaskInput;
