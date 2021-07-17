import styled from 'styled-components';

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
`;

export const TopBarSearchSubmit = styled(TopBarSearchButton).attrs((props) => ({
	type: 'submit',
	title: props.title,
}))``;

export const TopBarSearchClear = styled(TopBarSearchButton).attrs((props) => ({
	type: 'button',
	title: props.title,
}))`
	align-items: center;
	background-color: var(--background-contrast);
	border-radius: 50%;
	color: var(--color-white);
	display: flex;
	height: 2.4rem;
	justify-content: center;
	margin: 0;
	/* opacity: 0; */
	width: 2.4rem;
	transition-property: color, opacity;
	&:hover {
		background-color: var(--background-elevation);
	}
`;
