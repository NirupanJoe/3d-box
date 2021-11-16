/* eslint-disable no-magic-numbers */
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

// eslint-disable-next-line max-lines-per-function
const Character = () => {
	const group = useRef();
	const { nodes, materials } = useGLTF(`${ process.env.PUBLIC_URL }/a.gltf`);

	return (
		<group ref={ group } dispose={ null }>
			<group
				rotation={ [Math.PI / 2, 0, 0] }
				scale={ [0.01, 0.01, 0.01] }
			>
				<primitive object={ nodes.mixamorigHips }/>
				<skinnedMesh
					material={ materials.Ch03_Body }
					geometry={ nodes.Ch03.geometry }
					skeleton={ nodes.Ch03.skeleton }
				/>
			</group>
		</group>
	);
};

useGLTF.preload('/a.glb');

export default Character;
