import { h, Component } from 'preact';
//import { Router } from 'preact-router';

import Header from './header/Header';
import Home from '../routes/home/Home';
// import Home from 'async!../routes/home';

export default class App extends Component {

	render() {
		return (
			<div id="app">
				<Header />
				<Home />
			</div>
		);
	}
}
