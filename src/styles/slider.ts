import { css } from 'styled-components';
import { SliderProps } from 'components/ui/Slider';

export const sliderThumb = css`
	background-color: #fff;
	border: 1px solid #c2c2ca;
	border-radius: 50%;
	box-shadow: 0 0 1px 0 rgba(25, 25, 34, 0.48);
	cursor: pointer;
	height: 1.2rem;
	opacity: 0;
	padding: 2px;
	position: relative;
	width: 1.2rem;
`;

export const sliderTrack = css<SliderProps>`
	background: var(--text-secondary);
	cursor: pointer;
	background-image: ${({ progress }) => `linear-gradient(
		to right,
		var(--color-accent) ${progress}%,
		var(--text-secondary) 0%
	)`};
	height: 100%;
	width: 100%;
`;

export const hideTrack = css`
	background-color: transparent;
	border-color: transparent;
	color: transparent;
	cursor: pointer;
	height: 100%;
	width: 100%;
`;

export const sliderTrackLower = css`
	background-color: var(--text-secondary);
`;

export const sliderTrackUpper = css<SliderProps>`
	background-color: var(--color--accent);
	width: ${({ progress }) => `${progress}%`};
`;
