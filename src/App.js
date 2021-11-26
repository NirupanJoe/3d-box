import { React } from 'react';
import './App.scss';
import FlightCanvas from './components/flight/flightCanvas';

const App = (context) => {
	const { patchState, state } = context;

	return (
		<div
			tabIndex="0"
			className="App"
			role="App"
			onKeyUp={ (evt) => patchState({ text: state.text + evt.key }) }
		>
			{ FlightCanvas(context) }
		</div>);
};

export default App;
