import styled from 'styled-components';
import TopBarAction from './TopBarAction';
import TopBarSearch from './TopBarSearch';

const StyledBar = styled.header`
	align-items: center;
	background-color: var(--background-primary);
	border-bottom: 1px solid var(--divider-primary);
	display: flex;
	height: var(--top-bar-height);
	left: 0;
	padding: 0 1.2rem;
	position: fixed;
	right: 0;
	top: 0;
	z-index: 200;
	@media (min-width: 62em) {
		left: var(--sidebar-width);
		min-width: 77rem;
		padding: 0 2.4rem;
	}
`;

function TopBar() {
	return (
		<StyledBar>
			<TopBarSearch />
			<TopBarAction />
		</StyledBar>
	);
}

export default TopBar;
