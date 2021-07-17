import styled from 'styled-components';
import { MdHome } from 'react-icons/md';
import SidebarNavList from 'components/ui/SidebarNavList';
import SidebarNavItem from 'components/ui/SidebarNavItem';

const StyledSidebar = styled.aside`
	background-color: var(--sideabr-background-color);
	padding: 0 1.2rem;
`;

function Sidebar() {
	return (
		<StyledSidebar>
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
