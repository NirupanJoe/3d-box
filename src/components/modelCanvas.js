import { React, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import Model from './model';
import CameraController from './cameraController';

const ModelCanvas = () =>
	<Canvas>
		<CameraController/>
		<Suspense fallback={ null }>
			<Model/>
			<Environment preset="sunset" background={ true }/>
		</Suspense>
	</Canvas>;

export default ModelCanvas;
