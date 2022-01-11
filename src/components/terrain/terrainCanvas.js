import { React, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';

import TerrainManager from './terrainManager';

// eslint-disable-next-line max-lines-per-function
const TerrainCanvas = () =>
	<Canvas
		// eslint-disable-next-line no-undef
		dpr={ window.devicePixelRatio }
		shadows={ true }
		onCreated={ ({ camera }) => camera.lookAt(
			0, 0, 0
		) }
		// eslint-disable-next-line no-magic-numbers
		camera={ { position: [0.75, 0.75, 0.75] } }
	>
		<OrbitControls/>
		<Suspense fallback={ null }>
			<Stage
				shadows={ true }
				intensity={ 1 }
				environment="city"
				preset="rembrandt"
			>
				<TerrainManager/>
			</Stage>
		</Suspense>;
	</Canvas>;

export default TerrainCanvas;
