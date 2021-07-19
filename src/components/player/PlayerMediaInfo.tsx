import styled from 'styled-components';

interface PlayerMediaInfoProps {
	albumTitle: string;
	artistName: string;
	cover: string;
	mediaTitle: string;
}

const AlbumCover = styled.img`
	border-radius: 50%;
	grid-row: 1 / -1;
	height: 5rem;
	margin-right: 2rem;
	object-fit: cover;
	width: 5rem;
`;

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
}: PlayerMediaInfoProps) {
	return (
		<>
			<AlbumCover src={cover} alt={albumTitle} />
			<span>{mediaTitle}</span>
			<PlayerSongArtist>{artistName}</PlayerSongArtist>
		</>
	);
}

export default PlayerMediaInfo;
