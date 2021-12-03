/* eslint-disable no-magic-numbers */
import React, { useRef } from 'react';
import { Cone } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { useSpring, a } from '@react-spring/three';

// eslint-disable-next-line max-lines-per-function
const Flight = () => {
	const { viewport } = useThree();
	const ref = useRef();
	// const { scene } = useGLTF(`${ process.env.PUBLIC_URL }/paperPlane.glb`);
	const { rotation } = useSpring({
		loop: true,
		from: { rotation: [0, 360, 0] },
		rotation: [0, 0, 0],
		config: {
			mass: 1,
			tension: 170,
			friction: 12,
			precision: 0.01,
			duration: 10000,
			easing: (t) => t,
		},
	});

	useFrame(({ mouse }) => {
		const x = (mouse.x * viewport.width) / 2;

		ref.current.position.set(
			x, -3, 0
		);
	});

	return (
		<a.group
			ref={ ref }
			scale={ 0.1 }
			rotation={ rotation }
		>
			<mesh>
				<Cone args={ [0.35, 2, 8] } scale={ 6 }>
					<meshStandardMaterial color="royalblue"/>
				</Cone>

			</mesh>
		</a.group>
	);
};

export default Flight;
