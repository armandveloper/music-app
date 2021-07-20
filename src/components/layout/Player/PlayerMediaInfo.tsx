import styled from 'styled-components';
import { BasePlayerProps } from './BasePlayer';
import PlayerMediaThumbnail from './PlayerMediaThumbnail';

const PlayerSongArtist = styled.span`
	grid-column: 2;
	grid-row: 2;
	margin-right: 8rem;
`;

function PlayerMediaInfo({
	albumTitle,
	artistName,
	cover,
	mediaTitle,
}: BasePlayerProps) {
	return (
		<>
			<PlayerMediaThumbnail circle={true} src={cover} alt={albumTitle} />
			<span>{mediaTitle}</span>
			<PlayerSongArtist>{artistName}</PlayerSongArtist>
		</>
	);
}

export default PlayerMediaInfo;
