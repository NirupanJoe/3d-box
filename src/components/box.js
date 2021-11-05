import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const Box = (props) => {
	const { position, context: { patchState, state }} = props;
	// This reference gives us direct access to the THREE.Mesh object
	const ref = useRef();

	// Subscribe this component to the render-loop, rotate the mesh every frame
	useFrame(() => (ref.current.rotation.x += 0.01));
	// Return the view, these are regular Threats elements expressed in JSX
	return (
		<mesh
			ref={ ref }
			position={ position }
			// eslint-disable-next-line no-magic-numbers
			scale={ state.clicked ? 1.5 : 1 }
			onClick={ () =>
				patchState({ clicked: !state.clicked }) }
			onPointerOver={ () => patchState({ hover: true }) }
			onPointerOut={ () => patchState({ hover: false }) }
		>
			<boxGeometry args={ [1, 1, 1] }/>
			<meshStandardMaterial color={ state.hover ? 'red' : 'orange' }/>
		</mesh>
	);
};

export default Box;
