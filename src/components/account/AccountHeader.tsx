import styled from 'styled-components';
import { textEllipsis } from 'styles/typography';
import AccountThumbnail from './AccountThumbnail';

const StyledAccountHeader = styled.div`
	align-items: center;
	background-color: transparent;
	color: var(--text-primary);
	cursor: default;
	display: flex;
	padding: 1.2rem 2rem;
	user-select: none;
	transition-duration: 0.15s;
	transition-property: background-color;
	&:hover {
		background-color: var(--background-contrast);
	}
`;

const AccountHeading = styled.div`
	color: var(--text-primary);
	flex: 1;
	font-size: 1.6rem;
	margin-left: 1.2rem;
	${textEllipsis};
`;

function AccountHeader() {
	return (
		<StyledAccountHeader>
			<AccountThumbnail
				loading="lazy"
				src="https://e-cdns-images.dzcdn.net/images/user/93b60ed3ca923636b43b8869cf880be7/40x40-000000-80-0-0.jpg"
				alt="Armando Cruz Jaimes"
				width="40"
				height="40"
			/>
			<AccountHeading>
				<span>Armando Cruz Jaimes</span>
			</AccountHeading>
		</StyledAccountHeader>
	);
}

export default AccountHeader;
