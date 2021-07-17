import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';
import { MdClear } from 'react-icons/md';
import { TopBarSearchClear, TopBarSearchSubmit } from './TopBarSearchButton';

const StyledSearch = styled.div`
	margin-right: auto;
	width: 60%;
`;

const TopBarSearchForm = styled.form`
	display: flex;
	align-items: center;
`;

function TopBarSearch() {
	return (
		<StyledSearch>
			<TopBarSearchForm>
				<TopBarSearchSubmit title="Search">
					<FiSearch color="currentColor" size="16" />
				</TopBarSearchSubmit>
				<TopBarSearchClear title="Clear">
					<MdClear color="currentColor" size="12" />
				</TopBarSearchClear>
			</TopBarSearchForm>
		</StyledSearch>
	);
}

export default TopBarSearch;
