/* eslint-disable no-magic-numbers */
import { React, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Cloud } from '@react-three/drei';

const CloudCanvas = () =>
	<Canvas camera={ { position: [0, 0, 16], fov: 75 } }>
		<ambientLight intensity={ 0.8 }/>
		<pointLight intensity={ 2 } position={ [0, 0, -1000] }/>
		<Suspense fallback={ null }>
			<Cloud
				position={ [0, 0, 0] }
				speed={ 0.1 }
				opacity={ 0.5 }
				segments={ 10 }
				depth={ 2 }
				scale={ 0.5 }
			/>
		</Suspense>
	</Canvas>;

export default CloudCanvas;
