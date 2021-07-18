import styled from 'styled-components';

const Input = styled.input`
	background-color: rgba(0, 0, 0, 0);
	border: none;
	color: var(--text-primary);
	flex: 1;
	font-family: inherit;
	font-size: 1.6rem;
	height: 3.2rem;
	padding: 0 1.4rem;
	transition-duration: 0.15s;
	transition-property: background-color, border-color, box-shadow;
	&:focus {
		outline: 0;
	}
	&::-webkit-search-cancel-button,
	&::-webkit-search-decoration {
		appearance: none;
	}
`;

function TopBarSearchInput() {
	return <Input type="search" aria-label="Search" placeholder="Search" />;
}

export default TopBarSearchInput;
