import { IBasePlayer, usePlayerContext } from 'context/PlayerContext';
import PlayerDesktop from './PlayerDesktop';
import PlayerMobileExpanded from './PlayerMobileExpanded';
import PlayerMobileTiny from './PlayerMobileTiny';

export interface PlayerProps extends IBasePlayer {}

function Player() {
	const player = usePlayerContext();

	const {
		contract,
		expand,
		isDesktop,
		isExpanded,
		toggleExpanded,
		...baseProps
	} = player;

	return isDesktop ? (
		<PlayerDesktop {...baseProps} />
	) : isExpanded ? (
		<PlayerMobileExpanded {...baseProps} contract={contract} />
	) : (
		<PlayerMobileTiny {...baseProps} expand={expand} />
	);
}

export default Player;
