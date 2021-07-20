import styled from 'styled-components';
import {
	MdChevronLeft,
	MdChevronRight,
	MdPause,
	MdPlayArrow,
} from 'react-icons/md';

const PlayerButton = styled.button`
	background: none;
	border: none;
	color: var(--text-primary);
	cursor: pointer;
	grid-row: 1 / -1;
`;

function PlayerControls() {
	const isPlaying = false;

	return (
		<>
			<PlayerButton title="Previous">
				<MdChevronLeft color="currentColor" size="24" />
			</PlayerButton>
			<PlayerButton title="Play">
				{!isPlaying ? (
					<MdPlayArrow color="currentColor" size="24" />
				) : (
					<MdPause color="currentColor" size="24" />
				)}
			</PlayerButton>
			<PlayerButton title="Next">
				<MdChevronRight color="currentColor" size="24" />
			</PlayerButton>
		</>
	);
}

export default PlayerControls;
