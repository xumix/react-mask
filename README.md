# `React Mask`

A [React](http://facebook.github.io/react/) component for `<input>` masking,
built on top of [vanilla-masker](http://bankfacil.github.io/vanilla-masker).

### npm

`React Mask` can be used on the server, or bundled for the client using an
npm-compatible packaging system such as [Browserify](http://browserify.org/).

```
npm install react-mask --save
```


## Usage

```javascript
var React = require('react')
var MaskInput = require('react-mask')

var InputTelephone = React.createClass({

  	getInitialState() {
		return {
			mask: "+99 (999) 99999-9999"
		};
	},

	render() {
		return (
			<div>
				<MaskInput
					mask={this.state.mask}
					placeholder={this.state.mask} />
			</div>
		);
	}
});

React.render(<InputTelephone />, document.body);
```
