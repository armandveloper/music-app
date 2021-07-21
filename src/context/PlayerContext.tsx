import * as React from 'react';

interface IPlayerContext {
	album: {
		cover: string;
		coverMedium: string;
		title: string;
	};
	artist: {
		name: string;
	};
	isPlaying: boolean;
	duration: number;
	title: string;
}

interface PlayerProviderProps {
	children?: React.ReactNode;
	currentMedia: IPlayerContext;
}

const PlayerContext = React.createContext({} as IPlayerContext);

export const PlayerProvider = ({
	currentMedia,
	children,
}: PlayerProviderProps) => {
	return (
		<PlayerContext.Provider value={currentMedia}>
			{children}
		</PlayerContext.Provider>
	);
};

export const usePlayerContext = (): IPlayerContext =>
	React.useContext(PlayerContext);
