import { React } from 'react';
import './App.scss';
import ModelCanvas from './components/modelCanvas';

const App = () =>
	<div className="App" role="App">
		{ ModelCanvas() }
	</div>;

export default App;
