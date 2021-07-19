import styled from 'styled-components';

const StyledWrapper = styled.div`
	display: flex;
	flex: 1;
	margin: 0 8rem;
`;

const PlayerProgressBar = styled.input`
	margin: 0 4rem;
	flex: 1;
`;

function PlayerProgress() {
	return (
		<StyledWrapper className="player__progress">
			<span className="player__progress-time">0:00</span>
			<PlayerProgressBar min="0" max="100" step="0.1" type="range" />

			<span className="player__duration">3:21</span>
		</StyledWrapper>
	);
}

export default PlayerProgress;
