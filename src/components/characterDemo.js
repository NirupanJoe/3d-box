/* eslint-disable no-magic-numbers */
import { React, useState } from 'react';
import { useGLTF, useTexture } from '@react-three/drei';
import { a, useSpring } from '@react-spring/three';

// eslint-disable-next-line max-lines-per-function
const CharacterDemo = (props) => {
	const { nodes } = useGLTF(`${ process.env.PUBLIC_URL }/stacy.glb`);
	const texture = useTexture(`${ process.env.PUBLIC_URL }/stacy.jpg`);
	const [hovered, setHovered] = useState(false);
	const { color, scale } = useSpring({ scale: hovered
		? [1.15, 1.15, 1]
		: [1, 1, 1], color: hovered ? 'hotline' : 'aquamarine' });

	return (
		<group { ...props } dispose={ null }>
			<group rotation={ [Math.PI / 2, 0, 0] } scale={ 0.01 }>
				<primitive object={ nodes.mixamorigHips }/>
				<skinnedMesh
					onPointerOver={ () => setHovered(true) }
					onPointerOut={ () => setHovered(false) }
					geometry={ nodes.stacy.geometry }
					skeleton={ nodes.stacy.skeleton }
					rotation={ [-Math.PI / 2, 0, 0] }
					scale={ 100 }
				>
					<meshStandardMaterial
						map={ texture }
						map-flipY={ false }
						skinning={ true }
					/>
				</skinnedMesh>
			</group>
			<a.mesh
				position={ [0, 1, -1] }
				scale={ scale }
			>
				<circleGeometry args={ [1, 64] }/>
				<a.meshStandardMaterial color={ color }/>
			</a.mesh>
		</group>
	);
};

export default CharacterDemo;
