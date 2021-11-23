/* eslint-disable no-magic-numbers */
import { useFrame } from '@react-three/fiber';
import { React, useRef } from 'react';
import Box from '../box';
import Sphere from '../sphere';
import Plane from './plane';

const ShadowDemo = ({ context }) => {
	const ref = useRef();

	useFrame(() => (ref.current.rotation.y += 0.01));

	return (
		<group ref={ ref } position={ [0, 0, 0] }>
			<Plane
				color="hotPink"
				rotation-x={ Math.PI / 2 }
				scale={ [5.5, 5, 0.1] }
				position={ [0, -0.5, 0] }
			/>
			<Box context={ context } position={ [-0.6, 0, 0] } xRotation={ 0 }/>
			<Sphere
				context={ context }
				position={ [0.6, 0.1, 0] }
				xRotation={ 0 }
			/>
		</group>);
};

export default ShadowDemo;
