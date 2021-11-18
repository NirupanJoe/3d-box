/* eslint-disable no-magic-numbers */
import React, { useMemo, useRef } from 'react';
import { extend, useLoader } from '@react-three/fiber';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';

extend({ TextGeometry });

const TextDemo = ({ text, size = 1.5 }) => {
	const font = useLoader(FontLoader, `${ process.env.PUBLIC_URL }/roboto-Medium.json`);
	// eslint-disable-next-line object-shorthand
	const config = useMemo(() => ({
		font,
		size: 40, height: 30,
		curveSegments: 32,
		bevelEnabled: true, bevelThickness: 6,
		bevelSize: 2.5, bevelOffset: 0, bevelSegments: 8,
	}),
	[font]);
	const mesh = useRef();

	return (
		<group scale={ [0.1 * size, 0.1 * size, 0.1] }>
			<mesh ref={ mesh }>
				<textGeometry args={ [text, config] }/>
				<meshNormalMaterial/>
			</mesh>
		</group>);
};

export default TextDemo;
