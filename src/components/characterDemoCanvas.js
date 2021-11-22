/* eslint-disable max-lines-per-function */
/* eslint-disable no-magic-numbers */
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import CharacterDemo from './characterDemo';

const CharacterDemoCanvas = () =>
	<Canvas
		concurrent={ true }
		shadowMap={ true }
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
