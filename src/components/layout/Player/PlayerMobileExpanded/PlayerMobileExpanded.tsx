import * as React from 'react';
import {
	MdChevronLeft,
	MdChevronRight,
	MdExpandMore,
	MdPause,
	MdPlayArrow,
} from 'react-icons/md';
import styled from 'styled-components';
import { PlayerProps } from '../Player';
import Slider from 'components/ui/Slider';
import { textEllipsis } from 'styles/typography';

const StyledPlayerExpanded = styled.div`
	background-color: var(--background-elevation);
	bottom: 0;
	color: #fff;
	left: 0;
	overflow: hidden;
	padding: 1rem 2rem;
	position: fixed;
	right: 0;
	top: 0;
	z-index: 100000;
`;

const Content = styled.div`
	overflow-y: auto;
`;

const PlayerTop = styled.div`
	align-items: center;
	display: flex;
	margin-bottom: 2rem;
	svg {
		flex-shrink: 0;
	}
`;

const TopTextWrapper = styled.div`
	margin: 0 auto;
	overflow: hidden;
	padding: 0 1rem;
	text-align: center;
`;

const TopText = styled.span`
	color: var(--text-primary);
	display: block;
	font-size: 1.2rem;
	text-transform: uppercase;
	letter-spacing: 0.1em;
`;

const TopTextBold = styled(TopText)`
	text-transform: none;
	font-size: 1.4rem;
	font-weight: 700;
	${textEllipsis};
`;

const AlbumCover = styled.img`
	border-radius: 1rem;
	display: block;
	height: auto;
	margin: auto;
	margin-bottom: 3rem;
	width: 100%;
`;

const MediaInfo = styled.div`
	margin-bottom: 2rem;
	padding: 0 1.5rem;
`;

const MediaTitle = styled.h2`
	font-size: 2.2rem;
	margin: 0;
`;

const MediaArtist = styled.h2`
	color: (--text-primary);
	font-size: 1.8rem;
	font-weight: 500;
	margin: 0;
	opacity: 0.79;
`;

const ProgressWrapper = styled.div`
	padding: 0 1.5rem;
`;

const PlayerProgressTimestampsWrapper = styled.div`
	align-items: center;
	display: flex;
	justify-content: space-between;
`;

const Controls = styled.div`
	align-items: center;
	display: flex;
	justify-content: center;
`;

function PlayerMobileExpanded({
	album,
	artist,
	duration,
	isPlaying,
	title,
}: PlayerProps) {
	const [progress, setProgress] = React.useState(0);

	return (
		<StyledPlayerExpanded>
			<Content>
				<PlayerTop>
					<MdExpandMore color="var(--text-primary)" size="24" />
					<TopTextWrapper>
						<TopText>Playing song from album</TopText>
						<TopTextBold>{album.title}</TopTextBold>
					</TopTextWrapper>
				</PlayerTop>
				<AlbumCover src={album.coverMedium} alt={album.title} />
				<MediaInfo>
					<MediaTitle>{title}</MediaTitle>
					<MediaArtist>{artist.name}</MediaArtist>
				</MediaInfo>
				<ProgressWrapper>
					<Slider
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
					<PlayerProgressTimestampsWrapper>
						<span>0:00</span>
						<span>{duration}</span>
					</PlayerProgressTimestampsWrapper>
				</ProgressWrapper>
				<Controls>
					<MdChevronLeft color="var(--text-primary)" size="36" />
					{isPlaying ? (
						<MdPause
							style={{
								margin: '0 2rem',
							}}
							color="var(--text-primary)"
							size="48"
						/>
					) : (
						<MdPlayArrow
							style={{
								margin: '0 2rem',
							}}
							color="var(--text-primary)"
							size="48"
						/>
					)}

					<MdChevronRight color="var(--text-primary)" size="36" />
				</Controls>
			</Content>
		</StyledPlayerExpanded>
	);
}

export default PlayerMobileExpanded;
