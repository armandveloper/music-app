import * as React from 'react';
import { IPlayerContext, usePlayerContext } from 'context/PlayerContext';
import PlayerDesktop from './PlayerDesktop';
import PlayerMobileCollapsed from './PlayerMobileCollapsed';

export interface PlayerProps extends IPlayerContext {}

function Player() {
	const mql: MediaQueryList = window.matchMedia('(min-width: 62em)');
	const [isDesktop, setDesktop] = React.useState(mql.matches);

	React.useEffect(() => {
		const updateScreenType = (e: MediaQueryListEvent) =>
			setDesktop(e.matches);
		mql.addEventListener('change', updateScreenType);

		return () => mql.removeEventListener('change', updateScreenType);
	}, [mql]);

	const player = usePlayerContext();

	return isDesktop ? (
		<PlayerDesktop {...player} />
	) : (
		<PlayerMobileCollapsed {...player} />
	);
}

export default Player;
