import { React } from 'react';
import { Canvas as CanvasComponent } from '@react-three/fiber';
import Audio from './audio';

const Canvas = () =>
	<CanvasComponent shadows={ true }>
		<Audio/>
	</CanvasComponent>;

export default Canvas;
