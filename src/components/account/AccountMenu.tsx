import styled from 'styled-components';
import AccountHeader from './AccountHeader';
import AccountMenuList from './AccountMenuList';

interface MenuProps {
	isActive: boolean;
}

const Menu = styled.div`
	padding-top: 1rem;
	position: absolute;
	will-change: transform;
	top: 0;
	left: 0;
	transform: translate3d(-20rem, 3.2rem, 0);
	z-index: 1;
	@media (min-width: 62em) {
		transform: translate3d(-34.3rem, 3.2rem, 0);
	}
`;

const MenuContent = styled.div`
	background-color: var(--background-secondary);
	border-radius: 1rem;
	box-shadow: var(--menu-shadow);
	color: var(--text-intermediate);
	position: relative;
	width: 24rem;
	@media (min-width: 62em) {
		width: 37.5rem;
	}
`;

function AccountMenu({ isActive }: MenuProps) {
	if (!isActive) return null;

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
