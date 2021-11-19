/* eslint-disable no-magic-numbers */
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import CharacterDemo from './characterDemo';

const CharacterDemoCanvas = () =>
	<Canvas
		camera={ { position: [0, 1.5, 3], fov: 50 } }
	>
		<ambientLight/>
		<group position={ [0, -1, 0] }>
			<Suspense fallback={ null }>
				<CharacterDemo/>
			</Suspense>
		</group>
	</Canvas>;

export default CharacterDemoCanvas;
