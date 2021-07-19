import * as React from 'react';
import styled from 'styled-components';
import { MdHome } from 'react-icons/md';
import SidebarNavList from './SidebarNavList';
import SidebarNavItem from './SidebarNavItem';
import SidebarToggle from './SidebarToggle';

interface SidebarProps {
	isActive: boolean;
}

const StyledSidebar = styled.aside<SidebarProps>`
	background-color: var(--sideabr-background-color);
	border-right: 1px solid var(--divider-primary);
	bottom: 0;
	left: 0;
	padding: 0 1.2rem;
	position: fixed;
	top: 0;
	width: var(--sidebar-width);
	transform: ${({ isActive }) =>
		isActive
			? 'translate3d(0, 0, 0)'
			: `translate3d(calc(var(--sidebar-width) * -1), 0, 0)`};
	z-index: 1000;
	transition-duration: 0.15s;
	transition-property: transform;
	transition-timing-function: ease-out;
	@media (min-width: 62em) {
		position: unset;
		transform: none;
		z-index: unset;
	}
`;

function Sidebar() {
	const [isActive, setActive] = React.useState(false);

	const toggleSidebar = () => setActive(!isActive);

	return (
		<StyledSidebar isActive={isActive}>
			<SidebarToggle isActive={isActive} onClick={toggleSidebar} />
			<h2>Sidebar</h2>

			<SidebarNavList>
				<SidebarNavItem
					icon={<MdHome color="currentColor" size="24" />}
					label="Explore"
				/>
				<SidebarNavItem
					icon={<MdHome color="currentColor" size="24" />}
					label="Explore"
				/>
				<SidebarNavItem
					icon={<MdHome color="currentColor" size="24" />}
					label="Explore"
				/>
				<SidebarNavItem
					icon={<MdHome color="currentColor" size="24" />}
					label="Explore"
				/>
				<SidebarNavItem
					icon={<MdHome color="currentColor" size="24" />}
					label="Explore"
				/>
			</SidebarNavList>
		</StyledSidebar>
	);
}

export default Sidebar;
