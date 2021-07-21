import * as React from 'react';
import useMatchMedia from 'hooks/useMatchMedia';
import useMobilePlayer from 'hooks/useMobilePlayer';

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
	isExpanded: boolean;
	contract: () => void;
	expand: () => void;
	toggleExpanded: () => void;
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

	const [isExpanded, contract, expand, toggleExpanded] =
		useMobilePlayer(false);

	const value = {
		...currentMedia,
		isDesktop,
		isExpanded,
		contract,
		expand,
		toggleExpanded,
	};

	return (
		<PlayerContext.Provider value={value}>
			{children}
		</PlayerContext.Provider>
	);
};

export const usePlayerContext = (): IPlayerContext =>
	React.useContext(PlayerContext);
