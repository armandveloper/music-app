import styled from 'styled-components';

const StyledTopBarProfile = styled.button`
	background: none;
	border: none;
	border-radius: 50%;
	box-shadow: 0 1px 2px 0 rgb(25 25 34 / 12%);
	cursor: pointer;
	height: 100%;
	margin: 0;
	overflow: hidden;
	padding: 0;
	position: relative;
	width: 100%;
	transition-duration: 0.15s;
	transition-property: box-shadow;
	&:hover {
		box-shadow: 0 1px 2px rgb(25 25 34 / 24%);
	}
	&::after {
		background-color: #efeff2;
		bottom: 0;
		content: '';
		left: 0;
		opacity: 0;
		position: absolute;
		right: 0;
		top: 0;
		transition-duration: 0.15s;
		transition-property: opacity;
	}
	&:hover::after {
		opacity: 0.24;
	}
`;

const ProfilePicture = styled.img`
	height: 100%;
	vertical-align: top;
	width: 100%;
`;

function TopBarProfile() {
	return (
		<StyledTopBarProfile>
			<ProfilePicture
				src="https://e-cdns-images.dzcdn.net/images/user/93b60ed3ca923636b43b8869cf880be7/32x32-000000-80-0-0.jpg"
				alt="Armando Cruz Jaimes"
			/>
		</StyledTopBarProfile>
	);
}

export default TopBarProfile;
