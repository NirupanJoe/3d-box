/* eslint-disable no-magic-numbers */
import React, { useEffect, useState } from 'react';
import { useGLTF, useTexture, useAnimations } from '@react-three/drei';
import { a, useSpring } from '@react-spring/three';

// eslint-disable-next-line max-lines-per-function
const CharacterDemo = (props) => {
	const { nodes, animations } = useGLTF(`${ process.env.PUBLIC_URL }/stacy.glb`);
	const texture = useTexture(`${ process.env.PUBLIC_URL }/stacy.jpg`);
	const { ref, actions, names } = useAnimations(animations);
	const [hovered, setHovered] = useState(false);
	const [index, setIndex] = useState(4);
	const { color, scale } = useSpring({ scale: hovered
		? [1.15, 1.15, 1]
		: [1, 1, 1], color: hovered ? 'hotline' : 'aquamarine' });

	useEffect(() => {
		actions[names[index]].reset().fadeIn(0.5)
			.play();
		return () => actions[names[index]].fadeOut(0.5);
	}, [index, actions, names]);
	return (
		<group ref={ ref } { ...props } dispose={ null }>
			<group rotation={ [Math.PI / 2, 0, 0] } scale={ 0.01 }>
				<primitive object={ nodes.mixamorigHips }/>
				<skinnedMesh
					onPointerOver={ () => setHovered(true) }
					onPointerOut={ () => setHovered(false) }
					onClick={ () => setIndex((index + 1) % names.length) }
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
