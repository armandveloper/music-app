import styled from 'styled-components';
import PlayerVolume from './PlayerVolume';

const StyledWrapper = styled.div`
	align-items: center;
	display: flex;
`;

function PlayerRight() {
	return (
		<StyledWrapper>
			<PlayerVolume />
		</StyledWrapper>
	);
}

export default PlayerRight;
