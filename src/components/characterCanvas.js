import React, { Suspense, useEffect } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Character from './character.js';

const CameraController = () => {
	const { camera, gl } = useThree();

	useEffect(() => {
		const controls = new OrbitControls(camera, gl.domElement);

		controls.minDistance = 3;
		controls.maxDistance = 20;
		return () => {
			controls.dispose();
		};
	},
	[camera, gl]);
	return null;
};

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
