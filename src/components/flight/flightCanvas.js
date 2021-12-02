import { Canvas } from '@react-three/fiber';
import { React } from 'react';
import Flight from './flight';

const FlightCanvas = () =>
	<Canvas>
		<ambientLight intensity={ 0.6 }/>
		<directionalLight intensity={ 0.5 }/>
		<Flight/>
	</Canvas>;

export default FlightCanvas;
