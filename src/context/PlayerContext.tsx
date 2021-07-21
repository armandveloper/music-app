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

	const [isExpanded, setExpanded] = React.useState(false);

	const contract = () => setExpanded(false);

	const expand = () => setExpanded(true);

	const toggleExpanded = () => setExpanded(!isExpanded);

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
