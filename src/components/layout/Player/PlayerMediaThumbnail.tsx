import styled from 'styled-components';

type Sizes = 'sm' | 'md' | 'lg';

interface PlayerMediaThumbnailProps {
	circle?: boolean;
	size?: Sizes;
}

const sizes = {
	sm: '3rem',
	md: 'var(--player-mobile-height)',
	lg: '7rem',
};

const PlayerMediaThumbnail = styled.img<PlayerMediaThumbnailProps>`
	border-radius: ${({ circle = false }) => (circle ? '50%' : '0')};
	grid-row: 1 / -1;
	height: ${({ size = 'md' }) => sizes[size]};
	margin-right: 2rem;
	object-fit: cover;
	width: ${({ size = 'md' }) => sizes[size]};
`;

export default PlayerMediaThumbnail;
