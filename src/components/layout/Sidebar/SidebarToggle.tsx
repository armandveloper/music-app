import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { MdClear, MdMenu } from 'react-icons/md';
import styled from 'styled-components';

interface SidebarToggleProps {
	isActive: boolean;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const StyledToggle = styled.button`
	background-color: var(--background-elevation);
	border: none;
	border-radius: 50%;
	color: #fff;
	cursor: pointer;
	height: 3rem;
	left: 1rem;
	margin: 0;
	padding: 0;
	position: fixed;
	top: 1rem;
	width: 3rem;
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
				<MdClear color="currentColor" size="20" />
			) : (
				<MdMenu color="currentColor" size="20" />
			)}
		</StyledToggle>,
		window.document.getElementById('sidebar-button')!
	);
}

export default SidebarToggle;
