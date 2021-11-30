/* eslint-disable no-magic-numbers */
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useSpring, config, animated } from '@react-spring/three';

// eslint-disable-next-line max-lines-per-function
const Box = (props) => {
	const {
		position,
		context: { patchState, state },
		xRotation = 0.01,
	} = props;
	const ref = useRef();
	const { scale } = useSpring({
		scale: state.clicked ? 1.5 : 1,
		config: config.wobbly,
	});

	useFrame(() => (ref.current.rotation.x += xRotation));
	return (
		<animated.mesh
			ref={ ref }
			castShadow={ true }
			receiveShadow={ true }
			position={ position }
			scale={ scale }
			onClick={ () =>
				patchState({ clicked: !state.clicked }) }
			onPointerOver={ () => patchState({ hover: true }) }
			onPointerOut={ () => patchState({ hover: false }) }
		>
			<boxGeometry args={ [1, 1, 1] }/>
			<meshStandardMaterial color={ state.hover ? 'red' : 'orange' }/>
		</animated.mesh>
	);
};

export default Box;
