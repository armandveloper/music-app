import styled from 'styled-components';
import MainContent from './MainContent';
import Player from './Player';
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
			<Player
				albumTitle="Austin & Ally: Turn It Up (Soundtrack from the TV Series)"
				artistName="Ross Lynch"
				cover="https://cdns-images.dzcdn.net/images/cover/ade5b912ca9ee6caa282afe55c90becd/500x500-000000-80-0-0.jpg"
				mediaTitle="Steal Your Heart"
			/>
		</StyledLayput>
	);
}

export default Layout;
