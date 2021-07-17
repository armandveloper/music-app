import styled from 'styled-components';

const StyledSidebar = styled.aside`
	background-color: var(--sideabr-background-color);
	height: 100%;
`;

function Sidebar() {
	return (
		<StyledSidebar>
			<h2>Sidebar</h2>
		</StyledSidebar>
	);
}

export default Sidebar;
