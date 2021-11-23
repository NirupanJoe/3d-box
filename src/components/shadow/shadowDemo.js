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
		<group ref={ ref } position={ [0, -1.5, -2.5] }>
			<Plane
				color="hotPink"
				rotation-x={ Math.PI / 2 }
				position-z={ 3 }
				scale={ [8, 4, 0.1] }
			/>
			<Box context={ context } position={ [-1, 0.6, 3] } xRotation={ 0 }/>
			<Sphere
				context={ context }
				position={ [0.3, 0.6, 3.5] }
				xRotation={ 0 }
			/>
		</group>);
};

export default ShadowDemo;
