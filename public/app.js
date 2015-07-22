var React = require('react');
var MaskInput = require('../dist/react-mask');

var App = React.createClass({

	getInitialState() {
		return {
			mask: "(99) 9999-9999"
		};
	},

	onClick() {
		this.setState({
			mask: "(999) 99999-9999"
		});
	},

	render() {
		return (
			<div>
				<a href="https://github.com/andrevvalle/react-mask">
					<img className="fork" src="./githubfork.png" />
				</a>
				<div className="section no-pad-bot">
					<div className="container">
						<br/><br/>
						<h1 className="header center teal-text text-lighten-2">React Mask Demo</h1>
						<div className="row center">
							<h5 className="header col s12 light">A Modern Component Mask Input with React.JS</h5>
						</div>
						<div className="row center">
							<MaskInput mask={this.state.mask} placeholder={this.state.mask} />
							<button className="btn-large waves-effect waves-light teal lighten-1" onClick={this.onClick}>Click</button>
						</div>
						<br/><br/>
					</div>
				</div>
				<div className="container">
					<div className="section">
						<div className="row">
							<div className="col s12 m4">
							  <div className="icon-block">
								<h2 className="center teal-text text-lighten-2">What is this</h2>
								<p className="light center">
									React MaskInput is a Component<br/> built on top of <a href="https://github.com/BankFacil/vanilla-masker">vanilla-masker</a>.
								</p>
							  </div>
							</div>

							<div className="col s12 m4">
							  <div className="icon-block">
								<h2 className="center teal-text text-lighten-2">Mask</h2>
								<p className="light center">Pattern mask changes are<br/> immediately reflected.</p>
							  </div>
							</div>

							<div className="col s12 m4">
							  <div className="icon-block">
								<h2 className="center teal-text text-lighten-2">License</h2>
								<p className="light center">MIT License: <br/><a href="https://github.com/andrevvalle/react-mask/blob/master/LICENSE">ANDRÉVALLE</a></p>
							  </div>
							</div>
						</div>
					</div>
				</div>
				<footer className="page-footer teal">
					<div className="footer-copyright">
						<div className="container center">
							Created by <a className="brown-text text-lighten-3" href="http://andrevalle.co" target="_blank">André Valle</a>
						</div>
					</div>
				</footer>
			</div>
		);
	}

});

React.render(<App />, document.body);
