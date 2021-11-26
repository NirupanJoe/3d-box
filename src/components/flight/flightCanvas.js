import { Canvas } from '@react-three/fiber';
import { React, Suspense } from 'react';
import Flight from './flight';

const FlightCanvas = () =>
	<Canvas>
		<ambientLight intensity={ 0.6 }/>
		<directionalLight intensity={ 0.5 }/>
		<Suspense fallback={ null }>
			<Flight/>
		</Suspense>
	</Canvas>;

export default FlightCanvas;
