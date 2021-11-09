
import { React, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Scene from './scene';

const SceneCanvas = () =>
	<Canvas>
		<Suspense fallback={ null }>
			<Scene/>
			<OrbitControls autoRotate={ true }/>
		</Suspense>
	</Canvas>;

export default SceneCanvas;
