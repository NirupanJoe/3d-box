import { React, Suspense, useEffect } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Model from './model';

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
const ModelCanvas = () =>
	<Canvas>
		<CameraController/>
		<Suspense fallback={ null }>
			<Model/>
			<Environment preset="sunset" background={ true }/>
		</Suspense>
	</Canvas>;

export default ModelCanvas;
