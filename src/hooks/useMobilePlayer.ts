import * as React from 'react';

const useMobilePlayer = (
	initialExpanded = false
): [boolean, () => void, () => void, () => void] => {
	const [isExpanded, setExpanded] = React.useState(initialExpanded);

	const contract = () => setExpanded(false);

	const expand = () => setExpanded(true);

	const toggleExpanded = () => setExpanded(!isExpanded);

	return [isExpanded, contract, expand, toggleExpanded];
};

export default useMobilePlayer;
