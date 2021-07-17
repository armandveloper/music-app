import * as React from 'react';
import styled from 'styled-components';

interface SidebarNavItemProps {
	icon?: React.ReactElement;
	label: string;
}

const StyledItem = styled.li`
	color: var(--text-primary);
	cursor: pointer;
	font-size: 1.8rem;
	font-weight: 700;
	letter-spacing: 0.1rem;
	margin-bottom: 1.6rem;
	padding: 0 1.2rem;
	position: relative;
	display: flex;
	align-items: center;
	user-select: none;
	&:hover {
		color: var(--color-accent);
	}
	> * {
		transition: background-color 0.15s ease, color 0.15s ease,
			fill 0.15s ease, stroke 0.15s ease;
	}
	svg {
		margin-right: 1.2rem;
	}
	&.is-active {
		color: var(--color-accent);
		font-weight: 600;
	}
	&.is-active::before {
		background-color: var(--color-accent);
		content: '';
		height: 2.5rem;
		left: -1.2rem;
		pointer-events: none;
		position: absolute;
		top: 0;
		width: 4px;
	}
`;

const SidebarNavLabel = styled.span`
	flex: 1;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
`;

function SidebarNavItem({ icon, label }: SidebarNavItemProps) {
	return (
		<StyledItem>
			{icon}
			<SidebarNavLabel>{label}</SidebarNavLabel>
		</StyledItem>
	);
}

export default SidebarNavItem;
