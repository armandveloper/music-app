import styled from 'styled-components';
import AccountHeader from './AccountHeader';
import AccountMenuList from './AccountMenuList';

const Menu = styled.div`
	padding-top: 1rem;
	position: absolute;
	will-change: transform;
	top: 0;
	left: 0;
	transform: translate3d(-32.4rem, 3.2rem, 0);
	z-index: 1;
`;

const MenuContent = styled.div`
	background-color: var(--background-secondary);
	border-radius: 1rem;
	box-shadow: var(--menu-shadow);
	color: var(--text-intermediate);
	position: relative;
	/* width: 24rem; */
	width: 37.5rem;
`;

function AccountMenu() {
	return (
		<Menu role="menubar">
			<MenuContent role="menu">
				<AccountHeader />
				<AccountMenuList />
			</MenuContent>
		</Menu>
	);
}

export default AccountMenu;
