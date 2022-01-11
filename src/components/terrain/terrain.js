/* eslint-disable max-lines-per-function */
/* eslint-disable no-magic-numbers */
/* eslint-disable no-mixed-operators */
import { React, useLayoutEffect, useMemo, useRef } from 'react';
import SimplexNoise from 'simplex-noise';
import { BufferAttribute } from 'three';

import MountainMaterial from './mountainMaterial';

const generateTerrain = (
	simplex, size, height, levels, scale, offset
) => {
	const noise = (
		level, x, z
	) =>
		simplex.noise2D(offset.x * scale + scale * level * x,
			offset.z * scale + scale * level * z) /	level
		+ (level > 1
			? noise(
				level / 2, x, z
			)
			: 0);

	// eslint-disable-next-line id-match
	return Float32Array.from({ length: size ** 2 * 3 }, (_, i) => {
		// eslint-disable-next-line init-declarations
		let v;

		// eslint-disable-next-line default-case
		switch (i % 3) {
		case 0:
			v = i / 3;
			return (offset.x + ((v % size) / size - 0.5)) * scale;
		case 1:
			v = (i - 1) / 3;
			return (
				noise(
					2 ** levels,
					(v % size) / size - 0.5,
					Math.floor(v / size) / size - 0.5
				) * height
			);
		case 2:
			v = (i - 2) / 3;
			return (offset.z + Math.floor(v / size) / size - 0.5) * scale;
		}
	});
};

const Terrain = ({
	seed,
	size,
	height,
	levels = 8,
	scale = 1,
	offset = { x: 0, z: 0 },
}) => {
	const simplex = useMemo(() => new SimplexNoise(seed), [seed]);
	const ref = useRef();

	useLayoutEffect(() => {
		ref.current.setAttribute('position',
			new BufferAttribute(generateTerrain(
				simplex, size, height, levels, scale, offset
			),
			3));
		ref.current.elementsNeedUpdate = true;
		ref.current.computeVertexNormals();
	}, [size, height, levels, scale, offset, simplex]);

	return (
		<mesh>
			<planeGeometry
				ref={ ref }
				args={ [undefined, undefined, size - 1, size - 1] }
				castShadow={ true }
				receiveShadow={ true }
			/>
			<MountainMaterial/>
		</mesh>
	);
};

export default Terrain;
