import { css } from 'styled-components';

export const customScrollbar = css`
	body {
		scrollbar-color: var(--divider-secondary) var(--background-intermediate);
		scrollbar-width: thin;
	}
	::-webkit-scrollbar {
		background-color: var(--background-intermediate);
		width: 1.2rem;
	}
	::-webkit-scrollbar-track {
		border-left: 1px solid var(--divider-primary);
	}
	::-webkit-scrollbar-thumb {
		background-color: var(--divider-secondary);
		border: 2px solid var(--divider-primary);
		border-radius: 1rem;
	}
`;
