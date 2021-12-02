/* eslint-disable no-magic-numbers */
import React from 'react';
import { useSpring, animated } from '@react-spring/three';

// eslint-disable-next-line max-lines-per-function
const Box = (props) => {
	const {
		position,
		context: { patchState, state },
	} = props;
	const { scale, rotation } = useSpring({
		scale: state.clicked ? 1.5 : 1,
		rotation: state.clicked ? [0, 0, 0] : [1, 0, 0],
		config: {
			mass: 1,
			tension: 170,
			friction: 12,
			precision: 0.01,
			easing: (t) => t,
		},
	});

	return (
		<animated.mesh
			castShadow={ true }
			receiveShadow={ true }
			position={ position }
			scale={ scale }
			rotation={ rotation }
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
