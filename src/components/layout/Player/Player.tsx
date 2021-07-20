import * as React from 'react';
import { BasePlayerProps } from './BasePlayer';
import PlayerDesktop from './PlayerDesktop';
import PlayerMobileCollapsed from './PlayerMobileCollapsed';

function Player(props: BasePlayerProps) {
	const mql: MediaQueryList = window.matchMedia('(min-width: 62em)');
	const [isDesktop, setDesktop] = React.useState(mql.matches);

	React.useEffect(() => {
		const updateScreenType = (e: MediaQueryListEvent) =>
			setDesktop(e.matches);
		mql.addEventListener('change', updateScreenType);

		return () => mql.removeEventListener('change', updateScreenType);
	}, [mql]);

	return isDesktop ? (
		<PlayerDesktop {...props} />
	) : (
		<PlayerMobileCollapsed {...props} />
	);
}

export default Player;
