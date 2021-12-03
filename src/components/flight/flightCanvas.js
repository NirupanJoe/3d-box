/* eslint-disable no-magic-numbers */
import { Canvas } from '@react-three/fiber';
import { React } from 'react';
import Flight from './flight';

const FlightCanvas = () =>
	<Canvas>
		<color attach="background" args={ ['lightblue'] }/>
		<ambientLight color="black" intensity={ 0.3 }/>
		<directionalLight position={ [-1, 2, 10] } intensity={ 2 }/>
		<Flight/>
	</Canvas>;

export default FlightCanvas;
