import { React } from 'react';
import './App.scss';
import TerrainCanvas from './components/terrain/terrainCanvas';

const App = (context) => {
	const { patchState, state } = context;

	return (
		<div
			tabIndex="0"
			className="App"
			role="App"
			onKeyUp={ (evt) => patchState({ text: state.text + evt.key }) }
		>
			{ TerrainCanvas(context) }
		</div>);
};

export default App;
