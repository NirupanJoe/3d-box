import { React } from 'react';
import './App.scss';
import SceneCanvas from './components/sceneCanvas';

const App = () =>
	<div className="App" role="App">
		{ SceneCanvas() }
	</div>;

export default App;
