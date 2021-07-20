import styled from 'styled-components';
import { MdPlayArrow } from 'react-icons/md';
import BasePlayer, { BasePlayerProps } from './BasePlayer';
import PlayerMediaThumbnail from './PlayerMediaThumbnail';

const PlayerFixed = styled(BasePlayer)`
	bottom: 0;
	height: calc(var(--player-mobile-height) + var(--slider-height));
	left: 0;
	position: fixed;
	right: 0;
`;

const StyledCollapsed = styled(BasePlayer)`
	align-items: center;
	display: flex;
	height: var(--player-mobile-height);
`;

const PlayerCollapsedProgress = styled.div`
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

function PlayerMobileCollapsed(props: BasePlayerProps) {
	return (
		<PlayerFixed>
			<PlayerCollapsedProgress />
			<StyledCollapsed>
				<PlayerMediaThumbnail
					src={props.cover}
					alt={props.albumTitle}
				/>
				<MediaTextWrapper>
					<MediaTitle>{props.mediaTitle}</MediaTitle>
					<ArtistName>{props.artistName}</ArtistName>
				</MediaTextWrapper>
				<PlayerControl>
					<MdPlayArrow color="currentColor" size="28" />
				</PlayerControl>
			</StyledCollapsed>
		</PlayerFixed>
	);
}

export default PlayerMobileCollapsed;
