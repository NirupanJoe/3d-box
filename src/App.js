import { React } from 'react';
import './App.scss';
import TextDemoCanvas from './components/textDemoCanvas';

const App = (context) => {
	const { patchState, state } = context;

	return (
		<div
			tabIndex="0"
			className="App"
			role="App"
			onKeyUp={ (evt) => patchState({ text: state.text + evt.key }) }
		>
			{ TextDemoCanvas(context) }
		</div>);
};

export default App;
