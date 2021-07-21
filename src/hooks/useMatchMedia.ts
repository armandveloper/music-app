import * as React from 'react';

// Returns true wheter the media query matches
const useMatchMedia = (query: string): boolean => {
	const mql: MediaQueryList = window.matchMedia(query);
	const [matches, setMatches] = React.useState(mql.matches);

	React.useEffect(() => {
		const updateState = (e: MediaQueryListEvent) => setMatches(e.matches);
		mql.addEventListener('change', updateState);

		return () => mql.removeEventListener('change', updateState);
	}, [mql]);

	return matches;
};

export default useMatchMedia;
