import styled from 'styled-components';

const StyledPlayer = styled.div`
	background-color: var(--background-secondary);
	border-top: 1px solid var(--divider-primary);
	bottom: 0;
	grid-column: 1 / -1;
	left: 0;
	padding: 0 2.4rem;
	position: fixed;
	right: 0;
	@media (min-width: 62em) {
		position: unset;
	}
`;

function Player() {
	return (
		<StyledPlayer>
			<h2>Player</h2>
		</StyledPlayer>
	);
}

export default Player;
