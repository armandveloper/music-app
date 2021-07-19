import styled from 'styled-components';
import HomePage from 'pages/HomePage';

const Content = styled.main`
	margin-top: var(--top-bar-height);
	overflow-y: auto;
	position: relative;
	> div:last-child {
		padding: 2.4rem;
	}
`;

function MainContent() {
	return (
		<Content>
			<HomePage />
		</Content>
	);
}

export default MainContent;
