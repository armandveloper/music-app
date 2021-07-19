import styled from 'styled-components';
import PlayerControls from './PlayerControls';
import PlayerMediaInfo from './PlayerMediaInfo';

const StyledWrapper = styled.div`
	align-items: center;
	display: grid;
	grid-template-columns: repeat(5, auto);
	grid-template-rows: repeat(2, auto);
`;

function PlayerLeft() {
	return (
		<StyledWrapper>
			<PlayerMediaInfo
				albumTitle="Austin & Ally: Turn It Up (Soundtrack from the TV Series)"
				artistName="Ross Lynch"
				cover="https://cdns-images.dzcdn.net/images/cover/ade5b912ca9ee6caa282afe55c90becd/56x56-000000-80-0-0.jpg"
				mediaTitle="Steal Your Heart"
			/>
			<PlayerControls />
		</StyledWrapper>
	);
}

export default PlayerLeft;
