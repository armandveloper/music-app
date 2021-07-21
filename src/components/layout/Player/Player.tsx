import { IBasePlayer, usePlayerContext } from 'context/PlayerContext';
import PlayerDesktop from './PlayerDesktop';
import PlayerMobileExpanded from './PlayerMobileExpanded';

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
	) : (
		<PlayerMobileExpanded
			{...baseProps}
			contract={contract}
			expand={expand}
			isActive={isExpanded}
		/>
	);
}

export default Player;
