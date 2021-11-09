/* eslint-disable no-magic-numbers */
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const Box = (props) => {
	const { position, context: { patchState, state }} = props;
	const ref = useRef();

	useFrame(() => (ref.current.rotation.x += 0.01));
	return (
		<mesh
			ref={ ref }
			position={ position }
			scale={ state.clicked ? 1.5 : 1 }
			onClick={ () =>
				patchState({ clicked: !state.clicked }) }
			onPointerOver={ () => patchState({ hover: true }) }
			onPointerOut={ () => patchState({ hover: false }) }
		>
			<sphereBufferGeometry args={ [1, 60, 60] }/>
			<meshStandardMaterial color={ state.hover ? 'red' : 'orange' }/>
		</mesh>
	);
};

export default Box;
