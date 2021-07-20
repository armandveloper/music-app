import styled from 'styled-components';
import PlayerLeft from './PlayerLeft';
import PlayerProgress from './PlayerProgress';
import PlayerRight from './PlayerRight';

const StyledPlayer = styled.div`
	background-color: var(--background-secondary);
	border-top: 1px solid var(--divider-primary);
	bottom: 0;
	grid-column: 1 / -1;
	left: 0;
	padding: 2rem 2.4rem;
	position: fixed;
	right: 0;
	@media (min-width: 62em) {
		position: unset;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
`;

function Player() {
	return (
		<StyledPlayer>
			<PlayerLeft />
			<PlayerProgress />
			<PlayerRight />
		</StyledPlayer>
	);
}

export default Player;
