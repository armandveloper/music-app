import styled from 'styled-components';
import * as sliderStyle from 'styles/slider';

export interface SliderProps {
	progress: number;
}

const Slider = styled.input.attrs(() => ({
	type: 'range',
}))<SliderProps>`
	-webkit-appearance: none;
	background-color: transparent;
	height: var(--slider-height);
	width: 100%;

	&:focus {
		outline: none;
	}

	&::-webkit-slider-runnable-track {
		${sliderStyle.sliderTrack};
	}

	&::-moz-range-track {
		${sliderStyle.sliderTrack};
	}

	&::-moz-focus-outer {
		border: 0;
	}

	&::-ms-track {
		${sliderStyle.hideTrack};
	}

	&::-ms-fill-lower {
		${sliderStyle.sliderTrackLower};
	}

	&::-ms-fill-upper {
		${sliderStyle.sliderTrackUpper};
	}
	&::-ms-tooltip {
		display: none;
	}
	&::-webkit-slider-thumb {
		${sliderStyle.sliderThumb};
		-webkit-appearance: none;
		margin-top: -0.6rem;
	}
	&:hover::-webkit-slider-thumb {
		opacity: 1;
	}

	&::-moz-range-thumb {
		${sliderStyle.sliderThumb};
	}
	&:hover::-moz-range-thumb {
		opacity: 1;
	}
	&::-ms-thumb {
		${sliderStyle.sliderThumb};
	}
	&:hover::-ms-thumb {
		opacity: 1;
	}
`;

export default Slider;
