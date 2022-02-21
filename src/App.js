import { React } from 'react';
import './App.scss';
import CloudCanvas from './components/cloud/cloudCanvas';

const App = (context) => {
	const { patchState, state } = context;

	return (
		<div
			tabIndex="0"
			className="App"
			role="App"
			onKeyUp={ (evt) => patchState({ text: state.text + evt.key }) }
		>
			{ CloudCanvas(context) }
		</div>);
};

export default App;
