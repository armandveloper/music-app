import styled from 'styled-components';
import AccountItem from './AccountItem';

const List = styled.ul`
	list-style: none;
	margin: 0;
	padding: 0;
`;

function AccountMenuList() {
	return (
		<List>
			<AccountItem>Sign Out</AccountItem>
		</List>
	);
}

export default AccountMenuList;
