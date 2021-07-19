import styled from 'styled-components';
import MainContent from './MainContent';
import Player from '../player/Player';
import Sidebar from './Sidebar';
import TopBar from './TopBar';

const StyledLayput = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 1fr;
	height: 100vh;
	@media (min-width: 62em) {
		grid-template-columns: var(--sidebar-width) 1fr;
		grid-template-rows: 1fr var(--player-height);
	}
`;

function Layout() {
	return (
		<StyledLayput>
			<TopBar />
			<Sidebar />
			<MainContent />
			<Player />
		</StyledLayput>
	);
}

export default Layout;
