import styled from 'styled-components';
import MainContent from './MainContent';
import Player from '../player/Player';
import Sidebar from './Sidebar';

const StyledLayput = styled.div`
	height: 100vh;
	display: grid;
	grid-template-columns: var(--sidebar-width) 1fr;
	grid-template-rows: calc(100vh - var(--player-height)) var(--player-height);
`;

function Layout() {
	return (
		<StyledLayput>
			<Sidebar />
			<MainContent />
			<Player />
		</StyledLayput>
	);
}

export default Layout;
