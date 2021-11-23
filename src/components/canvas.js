/* eslint-disable no-magic-numbers */
import { React } from 'react';
import { Canvas as CanvasComponent } from '@react-three/fiber';
import ShadowDemo from './shadow/shadowDemo';

const Canvas = (context) =>
	<CanvasComponent shadows={ true }>
		<ambientLight/>
		<directionalLight
			position={ [-10, 8, -5] }
			castShadow={ true }
		/>
		<ShadowDemo context={ context }/>
	</CanvasComponent>;

export default Canvas;
