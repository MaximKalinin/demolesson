// @flow
import React from 'react';
import styled from 'styled-components';
import { useDrag } from 'react-dnd';
import galaxyImg from '../../img/galaxy.svg';

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
	const [{isDragging}, drag] = useDrag({
		item: { type: 'AppIcon' },
		collect: monitor => {
			console.log(monitor.isDragging());
			return ({isDragging: false})
		}
	});
	return (
		<AppEl>
			<img src={galaxyImg} ref={drag} />
			<div>
				<h3>ХАОС</h3>
				<span>Древнейшая Греция</span>
			</div>
		</AppEl>
	);
};
