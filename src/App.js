import { React } from 'react';
import './App.scss';
import CharacterDemoCanvas from './components/characterDemoCanvas';

const App = (context) => {
	const { patchState, state } = context;

	return (
		<div
			tabIndex="0"
			className="App"
			role="App"
			onKeyUp={ (evt) => patchState({ text: state.text + evt.key }) }
		>
			{ CharacterDemoCanvas() }
		</div>);
};

export default App;
