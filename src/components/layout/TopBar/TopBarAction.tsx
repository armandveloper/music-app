import * as React from 'react';
import styled from 'styled-components';
import AccountMenu from 'components/account/AccountMenu';
import TopBarProfile from './TopBarProfile';

const StyledAction = styled.div`
	height: 3.2rem;
	margin-left: 1.6rem;
	position: relative;
	width: 3.2rem;
`;

function TopBarAction() {
	const [isMenuActive, setMenuActive] = React.useState(false);

	const toggleMenu = () => setMenuActive(!isMenuActive);

	return (
		<StyledAction>
			<TopBarProfile onClick={toggleMenu} />
			<AccountMenu isActive={isMenuActive} />
		</StyledAction>
	);
}

export default TopBarAction;
