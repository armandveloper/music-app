import * as React from 'react';
import useMatchMedia from 'hooks/useMacthMedia';

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
	const isDesktop = useMatchMedia('(min-width: 62em)');

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
