import styled from 'styled-components';
import { PlayerProps } from './Player';
import PlayerMediaThumbnail from './PlayerMediaThumbnail';

const PlayerSongArtist = styled.span`
	grid-column: 2;
	grid-row: 2;
	margin-right: 8rem;
`;

function PlayerMediaInfo({ album, artist, title }: PlayerProps) {
	return (
		<>
			<PlayerMediaThumbnail
				circle={true}
				src={album.cover}
				alt={album.title}
			/>
			<span>{title}</span>
			<PlayerSongArtist>{artist.name}</PlayerSongArtist>
		</>
	);
}

export default PlayerMediaInfo;
