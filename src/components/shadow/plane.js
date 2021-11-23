import { React } from 'react';
import { RoundedBox } from '@react-three/drei';

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

export default Plane;
