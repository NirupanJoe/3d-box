/* eslint-disable no-magic-numbers */
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';

const Flight = () => {
	const { viewport } = useThree();
	const ref = useRef();
	const { scene } = useGLTF(`${ process.env.PUBLIC_URL }/paperPlane.glb`);

	useFrame(({ mouse }) => {
		const x = (mouse.x * viewport.width) / 2;

		ref.current.position.set(
			x, -3, 0
		);
	});

	return (
		<group
			ref={ ref }
			dispose={ null }
			rotation={ [0, 0, 0] }
			scale={ 0.1 }
		>
			<primitive object={ scene }/>
		</group>);
};

export default Flight;
