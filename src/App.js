import { React } from 'react';
import './App.scss';
import CharacterCanvas from './components/characterCanvas';

const App = () =>
	<div className="App" role="App">
		{ CharacterCanvas() }
	</div>;

export default App;
