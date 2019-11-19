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

export const AppIcon = (props) => {
	const [startPos, setStartPos] = useState([0, 0]);
	const [deltaPos, setDeltaPos] = useState([0, 0]);
	const imgStyle = {
		transform: `translate(${deltaPos[0]}px, ${deltaPos[1]}px)`
	};
	return (
		<AppEl>
			<img
				style={ imgStyle }
				src={ galaxyImg }
				onTouchMove={ fp.flow([
					(event) => [event.touches[0].clientX, event.touches[0].clientY],
					mapWithIndex((coord, index) => coord - startPos[index]),
					setDeltaPos
				]) }
				onTouchStart={ fp.flow([
					(event) => [event.touches[0].clientX, event.touches[0].clientY],
					setStartPos
				]) }
				onTouchEnd={ fp.flow([
					() => setStartPos([0, 0]),
					() => setDeltaPos([0, 0])
				]) }
			/>
			<div>
				<h3>ХАОС</h3>
				<span>Древнейшая Греция</span>
			</div>
		</AppEl>
	);
};
