import { React, useState } from 'react';
import { button, useControls } from 'leva';

import Terrain from './terrain';

const TerrainManager = () => {
	const [seed, setSeed] = useState(Date.now());

	const { resolution, height, levels, scale } = useControls({
		generate: button(() => setSeed(Date.now())),
		resolution: { value: 300, min: 10, max: 1000, step: 1 },
		height: { value: 0.02, min: 0, max: 1 },
		levels: { value: 8, min: 1, max: 16, step: 1 },
		scale: { value: 100, min: 1, max: 1000, step: 1 },
	});

	return (
		<Terrain
			seed={ seed }
			size={ resolution }
			height={ height }
			levels={ levels }
			scale={ scale }
		/>
	);
};

export default TerrainManager;
