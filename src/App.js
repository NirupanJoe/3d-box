import { React } from 'react';
import './App.scss';
import TextDemoCanvas from './components/textDemoCanvas';

const App = () =>
	<div className="App" role="App">
		{ TextDemoCanvas() }
	</div>;

export default App;
