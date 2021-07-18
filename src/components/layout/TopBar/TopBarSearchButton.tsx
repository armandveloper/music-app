import styled from 'styled-components';

interface TopBarSearchButtonProps {
	isActive?: boolean;
}

const TopBarSearchButton = styled.button`
	background: none;
	border: none;
	color: var(--text-intermediate);
	cursor: pointer;
	height: 100%;
	margin: 0;
	margin-top: 3px;
	padding: 0;
	transition-duration: 0.15s;
	transition-property: background-color, color;
	&:disabled {
		cursor: default;
	}
`;

export const TopBarSearchSubmit = styled(TopBarSearchButton).attrs((props) => ({
	type: 'submit',
	title: props.title,
}))<TopBarSearchButtonProps>``;

export const TopBarSearchClear = styled(TopBarSearchButton).attrs((props) => ({
	type: 'button',
	title: props.title,
}))<TopBarSearchButtonProps>`
	align-items: center;
	background-color: var(--background-contrast);
	border-radius: 50%;
	color: var(--color-white);
	display: flex;
	height: 2.4rem;
	justify-content: center;
	margin: 0;
	opacity: ${({ isActive = false }) => (isActive ? '1' : '0')};
	visibility: ${({ isActive = false }) => (isActive ? 'visible' : 'hidden')};
	width: 2.4rem;
	transition-property: color, opacity, visibility;
	&:not(:disabled):hover {
		background-color: var(--background-elevation);
		opacity: 1 !important;
	}
`;
