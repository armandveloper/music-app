import { css } from 'styled-components';
import {
	contractPlayerAnimation,
	expandPlayerAnimation,
	textMovingAnimation,
} from 'animations/player';

export const toggleMobilePlayerMixin = css<{ isActive: boolean }>`
	animation-duration: 0.18s;
	animation-name: ${({ isActive }) =>
		isActive ? expandPlayerAnimation : contractPlayerAnimation};
	animation-timing-function: ease-in;
	animation-fill-mode: forwards;
`;

export const playerMarqueeMixin = css<{
	contentWidth: number;
	pixelPerSec: number;
}>`
	animation: ${({ contentWidth, pixelPerSec }) =>
		`${
			contentWidth / pixelPerSec
		}s linear 0s infinite normal none running ${textMovingAnimation}`};
`;
