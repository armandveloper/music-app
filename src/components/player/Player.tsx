import styled from 'styled-components';

const StyledPlayer = styled.div`
	grid-column: 1 / -1;
	background-color: var(--background-secondary);
	border-top: 1px solid var(--divider-primary);
	padding: 0 2.4rem;
`;

function Player() {
	return (
		<StyledPlayer>
			<h2>Player</h2>
		</StyledPlayer>
	);
}

export default Player;
