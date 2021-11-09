import { React } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Model = () => {
	const gltf = useLoader(GLTFLoader,
		`${ process.env.PUBLIC_URL }/Poimandres.gltf`);

	return (
		<primitive object={ gltf.scene } scale={ 0.4 }/>
	);
};

export default Model;
