// @flow
import React, { useState } from 'react';
import styled from 'styled-components';
import fp from 'lodash/fp';
import { useDrag } from 'react-dnd';
import galaxyImg from '../../img/galaxy.svg';

const mapWithIndex = fp.map.convert({ 'cap': false });

const AppEl = styled.div`
	display: flex;
	> div {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		position: relative;
	}
	> img {
		padding-right: 25px;
	}
	h3 {
		font-size: 20px;
		font-weight: 300;
		margin: 0;
	}
	span {
		font-size: 12px;
		font-weight: 300;
		color: #898989;
		position: absolute;
		bottom: 0;
	}
`;

const getTouch = fp.get('touches[0]');

const ghostImg = new Image();
ghostImg.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=';

export const AppIcon = (props) => {
	const [startPos, setStartPos] = useState([0, 0]);
	const [deltaPos, setDeltaPos] = useState([0, 0]);
	const imgStyle = {
		transform: `translate(${deltaPos[0]}px, ${deltaPos[1]}px)`
	};
	const onMouseMove = fp.flow([
		(event) => [event.clientX, event.clientY],
		fp.cond([
			[fp.matches([0, 0]), fp.identity],
			[fp.stubTrue, mapWithIndex((coord, index) => coord - startPos[index])]
		]),
		setDeltaPos
	]);
	const onMouseStart = fp.flow([
		(event) => [event.clientX, event.clientY],
		setStartPos
	]);
	const onMouseEnd = fp.flow([
		() => setStartPos([0, 0]),
		() => setDeltaPos([0, 0])
	]);
	return (
		<AppEl>
			<img
				style={ imgStyle }
				src={ galaxyImg }
				onTouchMove={ fp.flow([
					getTouch,
					onMouseMove
				]) }
				onTouchStart={ fp.flow([
					getTouch,
					onMouseStart
				]) }
				onTouchEnd={ onMouseEnd }
				onDragStart={ fp.flow([
					fp.tap((event) => event.dataTransfer.setDragImage(ghostImg, 0, 0)),
					onMouseStart
				]) }
				onDragCapture={ onMouseMove }
				onDragEnd={ onMouseEnd }
			/>
			<div>
				<h3>ХАОС</h3>
				<span>Древнейшая Греция</span>
			</div>
		</AppEl>
	);
};
