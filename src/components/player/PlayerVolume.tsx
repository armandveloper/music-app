import { MdVolumeUp } from 'react-icons/md';

function PlayerVolume() {
	return (
		<>
			<MdVolumeUp color="currentColor" size="24" />
			<input
				aria-label="Down / Up Volume"
				max="10"
				min="0"
				step="1"
				type="range"
			/>
		</>
	);
}

export default PlayerVolume;
