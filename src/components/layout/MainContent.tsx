import styled from 'styled-components';
import TopBar from './TopBar';
import HomePage from 'pages/HomePage';

const Content = styled.main`
	position: relative;
	> div:last-child {
		margin-top: var(--top-bar-height);
		padding: 2.4rem;
	}
`;

function MainContent() {
	return (
		<Content>
			<TopBar />
			<HomePage />
		</Content>
	);
}

export default MainContent;
