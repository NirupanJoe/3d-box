/* eslint-disable no-magic-numbers */
import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import TextDemo from './textDemo';

const Jumbo = () => {
	const ref = useRef();

	// eslint-disable-next-line no-return-assign
	useFrame(({ clock }) => (
		// eslint-disable-next-line no-multi-assign
		ref.current.rotation.x = ref.current.rotation.y = ref.current
			.rotation.z = Math.sin(clock.getElapsedTime()) * 0.3));

	return (
		<group ref={ ref }>
			<TextDemo
				text="வணக்கம்"
				position={ [-12, 6.5, 0] }
			/>
		</group>
	);
};

const TextDemoCanvas = () =>
	<Canvas camera={ { position: [0, 0, 35] } }>
		<ambientLight intensity={ 2 }/>
		<pointLight position={ [40, 40, 40] }/>
		<Suspense fallback={ null }>
			<Jumbo/>
		</Suspense>
	</Canvas>;

export default TextDemoCanvas;
