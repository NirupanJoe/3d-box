/* eslint-disable no-magic-numbers */
import { React } from 'react';
import { Canvas as CanvasComponent } from '@react-three/fiber';
import Box from './box';
import { RoundedBox } from '@react-three/drei';
import Sphere from './sphere';

const Plane = ({ color, ...props }) =>
	<RoundedBox
		receiveShadow={ true }
		castShadow={ true }
		smoothness={ 10 }
		radius={ 0.015 }
		{ ...props }
	>
		<meshStandardMaterial color={ color } envMapIntensity={ 0.5 }/>
	</RoundedBox>;

// eslint-disable-next-line max-lines-per-function
const Canvas = (context) =>
	<CanvasComponent shadows={ true }>
		<ambientLight/>
		<directionalLight
			position={ [-10, 5, -2] }
			castShadow={ true }
		/>
		<pointLight position={ [10, 10, 10] }/>
		<group position={ [0, -1.5, -2.5] }>
			<Plane
				color="hotPink"
				rotation-x={ Math.PI / 2 }
				position-z={ 3 }
				scale={ [10, 4, 0.1] }
			/>
			<Box context={ context } position={ [0, 0.6, 3] } xRotation={ 0 }/>
			<Sphere
				context={ context }
				position={ [-2, 64, 64] }
				xRotation={ 0 }
			/>
		</group>
	</CanvasComponent>;

export default Canvas;
