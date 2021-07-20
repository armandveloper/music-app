import * as React from 'react';
import { MdVolumeUp } from 'react-icons/md';
import Slider from 'components/ui/Slider';

function PlayerVolume() {
	const [volume, setVolume] = React.useState(5);

	return (
		<>
			<MdVolumeUp color="currentColor" size="24" />
			<Slider
				aria-label="Down / Up Volume"
				max="10"
				min="0"
				onChange={({ currentTarget }) =>
					setVolume(+currentTarget.value)
				}
				progress={volume * 10}
				type="range"
				step="1"
				value={volume}
			/>
		</>
	);
}

export default PlayerVolume;
