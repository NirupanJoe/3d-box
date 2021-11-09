/* eslint-disable no-magic-numbers */
import React from 'react';
import { useTexture } from '@react-three/drei';
import image from '../images/image1.jpg';

const Scene = () => {
	const [colorMap] = useTexture([image]);

	return (
		<>
			<ambientLight intensity={ 0.5 }/>
			<directionalLight/>
			<mesh>
				<sphereBufferGeometry args={ [1, 100, 100] }/>
				<meshStandardMaterial
					displacementScale={ 0.2 }
					map={ colorMap }
				/>
			</mesh>
		</>
	);
};

export default Scene;
