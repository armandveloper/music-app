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
	return (
		<StyledAction>
			<TopBarProfile />
			<AccountMenu />
		</StyledAction>
	);
}

export default TopBarAction;
