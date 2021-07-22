import * as React from 'react';
import styled from 'styled-components';
import { MdPlayArrow } from 'react-icons/md';
import { PlayerProps } from './Player';
import BasePlayer from './BasePlayer';
import PlayerMediaThumbnail from './PlayerMediaThumbnail';
import { playerMarqueeMixin } from 'styles/player';

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
	height: 100%;
`;

const MarqueeWrapper = styled.div`
	mask: linear-gradient(
		to right,
		transparent 0%,
		rgb(0, 0, 0) 10px,
		rgb(0, 0, 0) calc(100% - 10px),
		transparent 100%
	);
	overflow: hidden;
	position: relative;
	height: 50%;
`;

const MarqueeText = styled.div<{
	contentSpacing: number; // = 20
	contentWidth: number; // dynamic
	edgeMaskWidth: number; // = 10
	pixelPerSec: number; // = 30
}>`
	display: block;
	position: absolute;
	width: ${({ contentSpacing, contentWidth, edgeMaskWidth }) =>
		`${contentSpacing + contentWidth + edgeMaskWidth}px`};
	height: 100%;
	left: ${({ edgeMaskWidth }) => `${edgeMaskWidth}px`};
	padding-right: ${({ contentSpacing }) => `${contentSpacing}px`};
	${playerMarqueeMixin};
	&:last-child {
		width: ${({ contentSpacing, contentWidth }) =>
			`${contentSpacing + contentWidth}px`};
		padding-right: ${({ contentSpacing }) => `${contentSpacing}px`};
		left: ${({ contentSpacing, contentWidth, edgeMaskWidth }) =>
			`${contentSpacing + contentWidth + edgeMaskWidth}px`};
	}
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
	const titleRef = React.useRef<HTMLDivElement>(null!);
	const albumNameRef = React.useRef<HTMLDivElement>(null!);
	const [marqueeContentWidth, setContentWidth] = React.useState<number[]>([]);
	const contentSpacing: number = 20; // = 20
	const edgeMaskWidth: number = 10; // = 10
	const pixelPerSec: number = 30; // = 30

	React.useEffect(() => {
		console.log(
			titleRef.current.scrollWidth,
			albumNameRef.current.scrollWidth
		);
		setContentWidth([
			titleRef.current.scrollWidth - contentSpacing,
			albumNameRef.current.scrollWidth - contentSpacing,
		]);
	}, []);

	return (
		<PlayerFixed>
			<PlayerTinyProgress />
			<StyledTiny onClick={props.expand}>
				<PlayerMediaThumbnail
					src={props.album.cover}
					alt={props.album.title}
				/>
				<MediaTextWrapper>
					<MarqueeWrapper ref={titleRef}>
						<MarqueeText
							contentSpacing={contentSpacing}
							contentWidth={marqueeContentWidth[0]}
							edgeMaskWidth={edgeMaskWidth}
							pixelPerSec={pixelPerSec}
						>
							<MediaTitle>
								You Can Come to Me - From "Austin & Ally"
							</MediaTitle>
						</MarqueeText>
						<MarqueeText
							contentSpacing={contentSpacing}
							contentWidth={marqueeContentWidth[0]}
							edgeMaskWidth={edgeMaskWidth}
							pixelPerSec={pixelPerSec}
						>
							<MediaTitle>
								You Can Come to Me - From "Austin & Ally"
							</MediaTitle>
						</MarqueeText>
					</MarqueeWrapper>
					<MarqueeWrapper ref={albumNameRef}>
						<MarqueeText
							contentSpacing={contentSpacing}
							contentWidth={marqueeContentWidth[1]}
							edgeMaskWidth={edgeMaskWidth}
							pixelPerSec={pixelPerSec}
						>
							<ArtistName>
								You Can Come to Me - From "Austin & Ally"
							</ArtistName>
						</MarqueeText>
						<MarqueeText
							contentSpacing={contentSpacing}
							contentWidth={marqueeContentWidth[1]}
							edgeMaskWidth={edgeMaskWidth}
							pixelPerSec={pixelPerSec}
						>
							<ArtistName>
								You Can Come to Me - From "Austin & Ally"
							</ArtistName>
						</MarqueeText>
					</MarqueeWrapper>
				</MediaTextWrapper>
				<PlayerControl>
					<MdPlayArrow color="currentColor" size="28" />
				</PlayerControl>
			</StyledTiny>
		</PlayerFixed>
	);
}

export default PlayerMobileTiny;
