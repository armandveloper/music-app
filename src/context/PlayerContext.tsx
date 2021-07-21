import * as React from 'react';

export interface IBasePlayer {
	album: {
		cover: string;
		coverMedium: string;
		title: string;
	};
	artist: {
		name: string;
	};
	id: number;
	isPlaying: boolean;
	duration: number | string;
	title: string;
}

export interface IPlayerContext extends IBasePlayer {
	isDesktop: boolean;
}

interface PlayerProviderProps {
	children?: React.ReactNode;
	currentMedia: IBasePlayer;
}

const PlayerContext = React.createContext({} as IPlayerContext);

export const PlayerProvider = ({
	currentMedia,
	children,
}: PlayerProviderProps) => {
	const mql: MediaQueryList = window.matchMedia('(min-width: 62em)');
	const [isDesktop, setDesktop] = React.useState(mql.matches);

	React.useEffect(() => {
		const updateScreenType = (e: MediaQueryListEvent) =>
			setDesktop(e.matches);
		mql.addEventListener('change', updateScreenType);

		return () => mql.removeEventListener('change', updateScreenType);
	}, [mql]);

	const value = {
		...currentMedia,
		isDesktop,
	};

	return (
		<PlayerContext.Provider value={value}>
			{children}
		</PlayerContext.Provider>
	);
};

export const usePlayerContext = (): IPlayerContext =>
	React.useContext(PlayerContext);
