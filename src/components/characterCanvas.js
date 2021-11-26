import { React, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Character from './character.js';
import CameraController from './cameraController.js';

const CharacterCanvas = () =>
	<Canvas>
		<CameraController/>
		<ambientLight intensity={ 0.6 }/>
		<directionalLight intensity={ 0.5 }/>
		<Suspense fallback={ null }>
			<Character/>
		</Suspense>
	</Canvas>;

export default CharacterCanvas;
