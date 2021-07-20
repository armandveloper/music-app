import styled from 'styled-components';
import { BasePlayerProps } from './BasePlayer';
import PlayerControls from './PlayerControls';
import PlayerMediaInfo from './PlayerMediaInfo';

const StyledWrapper = styled.div`
	align-items: center;
	display: grid;
	grid-template-columns: repeat(5, auto);
	grid-template-rows: repeat(2, auto);
`;

function PlayerLeft(props: BasePlayerProps) {
	return (
		<StyledWrapper>
			<PlayerMediaInfo {...props} />
			<PlayerControls />
		</StyledWrapper>
	);
}

export default PlayerLeft;
