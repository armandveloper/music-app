import styled from 'styled-components';

const AccountItem = styled.li`
	align-items: center;
	background-color: transparent;
	border-radius: 0.4rem;
	color: var(--text-primary);
	cursor: pointer;
	display: flex;
	font-size: 1.4rem;
	margin: 0 0.4rem;
	padding: 1.2rem 0.6rem;
	user-select: none;
	transition-duration: 0.15s;
	transition-property: background-color;
	&:hover {
		background-color: var(--background-contrast);
	}
	@media (min-width: 62em) {
		margin: 0 0.8rem;
		padding: 1.2rem;
	}
`;

export default AccountItem;
