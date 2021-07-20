import * as React from 'react';
import styled from 'styled-components';
import Slider from 'components/ui/Slider';

const StyledWrapper = styled.div`
	align-items: center;
	display: flex;
	flex: 1;
	margin: 0 8rem;
`;

const PlayerProgressBar = styled(Slider)`
	flex: 1;
	margin: 0 4rem;
`;

function PlayerProgress() {
	const [progress, setProgress] = React.useState(0);

	return (
		<StyledWrapper className="player__progress">
			<span className="player__progress-time">0:00</span>
			<PlayerProgressBar
				onChange={({ currentTarget }) =>
					setProgress(+currentTarget.value)
				}
				value={progress}
				progress={progress}
				min="0"
				max="100"
				step="0.1"
				type="range"
			/>

			<span className="player__duration">3:21</span>
		</StyledWrapper>
	);
}

export default PlayerProgress;
