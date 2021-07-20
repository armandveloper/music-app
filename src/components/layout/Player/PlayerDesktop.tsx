import styled from 'styled-components';
import BasePlayer, { BasePlayerProps } from './BasePlayer';
import PlayerLeft from './PlayerLeft';
import PlayerProgress from './PlayerProgress';
import PlayerRight from './PlayerRight';

const StyledPlayerDesktop = styled(BasePlayer)`
	align-items: center;
	border-top: 1px solid var(--divider-primary);
	display: flex;
	grid-column: 1 / -1;
	justify-content: space-between;
	padding: 2rem 2.4rem;
	position: unset;
`;

function PlayerDesktop(props: BasePlayerProps) {
	return (
		<StyledPlayerDesktop>
			<PlayerLeft {...props} />
			<PlayerProgress />
			<PlayerRight />
		</StyledPlayerDesktop>
	);
}

export default PlayerDesktop;
