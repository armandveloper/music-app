import * as React from 'react';
import { IPlayerContext, usePlayerContext } from 'context/PlayerContext';
import PlayerDesktop from './PlayerDesktop';
import PlayerMobileCollapsed from './PlayerMobileCollapsed';

export interface PlayerProps extends IPlayerContext {}

function Player() {
	const player = usePlayerContext();

	return player.isDesktop ? (
		<PlayerDesktop {...player} />
	) : (
		<PlayerMobileCollapsed {...player} />
	);
}

export default Player;
