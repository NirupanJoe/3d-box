import { React } from 'react';
import './App.scss';
import Canvas from './components/canvas';

const App = (context) =>
	<div className="App" role="App">
		{ Canvas(context) }
	</div>;

export default App;
