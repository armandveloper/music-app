import styled from 'styled-components';
import PlayerLeft from './PlayerLeft';

const StyledPlayer = styled.div`
	background-color: var(--background-secondary);
	border-top: 1px solid var(--divider-primary);
	bottom: 0;
	grid-column: 1 / -1;
	left: 0;
	padding: 2rem 2.4rem;
	position: fixed;
	right: 0;
	@media (min-width: 62em) {
		position: unset;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
`;

function Player() {
	return (
		<StyledPlayer>
			<PlayerLeft />

			{/* <div className="player__progress">
				<span className="player__progress-time">
					{minutesProg}:
					{secondsProg < 10 ? '0' + secondsProg : secondsProg}
				</span>
				<input
					className="player__progress-bar"
					type="range"
					name="progressSong"
					min="0"
					max="100"
					step="0.1"
					value={progressSong}
					onChange={handleProgressSong}
				/>

				<span className="player__duration">
					{minutes}:{seconds}
				</span>
			</div>
			<div className="player__right">
				<button
					className="player__btn"
					title={
						isFavorite ? 'Delete from favorite' : 'Add to favorite'
					}
					onClick={handleFavorite}
				>
					<Heart
						style={{
							stroke: isFavorite ? 'none' : '#fff',
							fill: isFavorite ? '#e94267' : 'none',
						}}
					/>
				</button>
			</div> */}
		</StyledPlayer>
	);
}

export default Player;
