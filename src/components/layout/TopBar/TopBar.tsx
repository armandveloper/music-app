import styled from 'styled-components';
import TopBarSearch from './TopBarSearch';

const StyledBar = styled.header`
	background-color: var(--background-primary);
	border-bottom: 1px solid var(--divider-primary);
	height: var(--top-bar-height);
	min-width: 77rem;
	padding: 0 2.4rem;
	display: flex;
	align-items: center;
	position: fixed;
	left: var(--sidebar-width);
	right: 0;
	top: 0;
	z-index: 200;
	.menu {
		background-color: var(--color-accent);
		border-radius: 50%;
		width: 4rem;
		height: 4rem;
	}
`;

function TopBar() {
	return (
		<StyledBar>
			<TopBarSearch />
			<div className="menu">
				<p>Mneu</p>
			</div>
		</StyledBar>
	);
}

export default TopBar;
