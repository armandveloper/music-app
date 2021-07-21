import styled from 'styled-components';
import { MdPlayArrow } from 'react-icons/md';
import { PlayerProps } from './Player';
import BasePlayer from './BasePlayer';
import PlayerMediaThumbnail from './PlayerMediaThumbnail';

interface PlayerMobileTinyProps extends PlayerProps {
	expand: () => void;
}

const PlayerFixed = styled(BasePlayer)`
	bottom: 0;
	height: calc(var(--player-mobile-height) + var(--slider-height));
	left: 0;
	position: fixed;
	right: 0;
`;

const StyledTiny = styled(BasePlayer)`
	align-items: center;
	display: flex;
	height: var(--player-mobile-height);
`;

const PlayerTinyProgress = styled.div`
	background-color: var(--color-accent);
	height: var(--slider-height);
	will-change: width;
	width: 50%;
`;

const MediaTextWrapper = styled.div`
	margin-right: auto;
	width: 60%;
`;

const MediaTitle = styled.span`
	display: block;
`;

const ArtistName = styled.span`
	display: block;
`;

const PlayerControl = styled.button`
	background: none;
	border: none;
	color: var(--text-primary);
	cursor: pointer;
	margin: 0 1rem;
	padding: 0;
	-webkit-tap-highlight-color: transparent;
`;

function PlayerMobileTiny(props: PlayerMobileTinyProps) {
	return (
		<PlayerFixed>
			<PlayerTinyProgress />
			<StyledTiny onClick={props.expand}>
				<PlayerMediaThumbnail
					src={props.album.cover}
					alt={props.album.title}
				/>
				<MediaTextWrapper>
					<MediaTitle>{props.title}</MediaTitle>
					<ArtistName>{props.artist.name}</ArtistName>
				</MediaTextWrapper>
				<PlayerControl>
					<MdPlayArrow color="currentColor" size="28" />
				</PlayerControl>
			</StyledTiny>
		</PlayerFixed>
	);
}

export default PlayerMobileTiny;
