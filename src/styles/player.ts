import { css } from 'styled-components';
import {
	contractPlayerAnimation,
	expandPlayerAnimation,
} from 'animations/player';

export const toggleMobilePlayerMixin = css<{ isActive: boolean }>`
	animation-duration: 0.18s;
	animation-name: ${({ isActive }) =>
		isActive ? expandPlayerAnimation : contractPlayerAnimation};
	animation-timing-function: ease-in;
	animation-fill-mode: forwards;
`;
