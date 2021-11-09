import { React, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import Model from './model';

const ModelCanvas = () =>
	<Canvas>
		<Suspense fallback={ null }>
			<Model/>
			<OrbitControls/>
			<Environment preset="sunset" background={ true }/>
		</Suspense>
	</Canvas>;

export default ModelCanvas;
