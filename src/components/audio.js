import { React, Suspense } from 'react';
import { PositionalAudio } from '@react-three/drei';
import { folder, useControls } from 'leva';

const control = () =>
	useControls({
		audio: false,
		props: folder({
			loop: true,
			autoplay: true,
			distance: 10,
		}),
	});

const Audio = () => {
	const { audio, ...props } = control();

	return (
		<Suspense fallback={ null }>
			{ audio
			&& <mesh>
				<PositionalAudio
					url={ `${ process.env.PUBLIC_URL }/sounds/engine.mp3` }
					{ ...props }
				/>
				 </mesh>}
		</Suspense>
	);
};

export default Audio;
