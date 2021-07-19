import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { MdClear, MdMenu } from 'react-icons/md';
import styled from 'styled-components';

interface SidebarToggleProps {
	isActive: boolean;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const StyledToggle = styled.button`
	align-items: center;
	background-color: var(--background-elevation);
	border: none;
	border-radius: 50%;
	box-shadow: 0 0 1.5rem 0 #d1d1d6;
	color: #fff;
	cursor: pointer;
	display: flex;
	height: 4rem;
	justify-content: center;
	right: 2rem;
	margin: 0;
	padding: 0;
	-webkit-tap-highlight-color: transparent;
	position: fixed;
	bottom: calc(var(--player-height) + 0.5rem);
	width: 4rem;
	z-index: 10000;
	@media (min-width: 62em) {
		display: none;
	}
`;

function SidebarToggle({ isActive, onClick }: SidebarToggleProps) {
	return ReactDOM.createPortal(
		<StyledToggle
			onClick={onClick}
			title={isActive ? 'Close menu' : 'Open menu'}
		>
			{isActive ? (
				<MdClear color="currentColor" size="24" />
			) : (
				<MdMenu color="currentColor" size="24" />
			)}
		</StyledToggle>,
		window.document.getElementById('sidebar-button')!
	);
}

export default SidebarToggle;
