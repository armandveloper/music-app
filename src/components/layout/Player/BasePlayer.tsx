import styled from 'styled-components';

export interface BasePlayerProps {
	albumTitle: string;
	artistName: string;
	cover: string;
	mediaTitle: string;
}

const BasePlayer = styled.div`
	background-color: var(--background-secondary);
`;

export default BasePlayer;
