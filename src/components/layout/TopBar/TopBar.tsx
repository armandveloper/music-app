import styled from 'styled-components';
import TopBarAction from './TopBarAction';
import TopBarSearch from './TopBarSearch';

const StyledBar = styled.header`
	align-items: center;
	background-color: var(--background-primary);
	border-bottom: 1px solid var(--divider-primary);
	display: flex;
	height: var(--top-bar-height);
	margin-top: 4.5rem;
	padding: 0 1.2rem;
	@media (min-width: 92em) {
		left: var(--sidebar-width);
		margin-top: 0;
		min-width: 77rem;
		padding: 0 2.4rem;
		position: fixed;
		right: 0;
		top: 0;
		z-index: 200;
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
