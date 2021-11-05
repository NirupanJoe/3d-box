/* eslint-disable no-magic-numbers */
import { React } from 'react';
import { Canvas as CanvasComponent } from '@react-three/fiber';
import Box from './box';

const Canvas = (context) =>
	<CanvasComponent>
		<ambientLight/>
		<pointLight position={ [10, 10, 10] }/>
		<Box context={ context } position={ [-1.2, 0, 0] }/>
		<Box context={ context } position={ [1.2, 0, 0] }/>
	</CanvasComponent>;

export default Canvas;
