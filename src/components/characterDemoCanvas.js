/* eslint-disable no-magic-numbers */
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import CharacterDemo from './characterDemo';
import Plane from './shadow/plane';

// eslint-disable-next-line max-lines-per-function
const CharacterDemoCanvas = () =>
	<Canvas
		shadows={ true }
		camera={ { position: [0, 1.5, 3], fov: 50 } }
	>
		<ambientLight/>
		<directionalLight
			position={ [-5, 5, 5] }
			castShadow={ true }
			shadow-mapSize-width={ 1024 }
			shadow-mapSize-height={ 1024 }
		/>
		<group position={ [0, -1, 0] }>
			<Suspense fallback={ null }>
				<Plane
					color="hotPink"
					rotation-x={ Math.PI / 2 }
					scale={ [5.5, 5, 0.1] }
					position={ [0, -0.5, 0] }
				/>
				<CharacterDemo/>
			</Suspense>
		</group>
		<mesh
			rotation={ [-0.5 * Math.PI, 0, 0] }
			position={ [0, -1, 0] }
			receiveShadow={ true }
		>
			<planeBufferGeometry args={ [10, 10, 1, 1] }/>
			<shadowMaterial transparent={ true } opacity={ 0.2 }/>
		</mesh>
	</Canvas>;

export default CharacterDemoCanvas;
