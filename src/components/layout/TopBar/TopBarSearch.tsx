import * as React from 'react';
import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';
import { MdClear } from 'react-icons/md';
import { TopBarSearchClear, TopBarSearchSubmit } from './TopBarSearchButton';
import TopBarSearchInput from './TopBarSearchInput';

const StyledSearch = styled.div`
	margin-right: auto;
	width: 60%;
`;

const TopBarSearchForm = styled.form`
	display: flex;
	align-items: center;
`;

function TopBarSearch() {
	const [term, setTerm] = React.useState('');

	const clearTerm = () => setTerm('');

	const handleSearch = (e: React.SyntheticEvent) => {
		e.preventDefault();
		console.log('Searching...');
	};

	return (
		<StyledSearch>
			<TopBarSearchForm onSubmit={handleSearch}>
				<TopBarSearchSubmit disabled={term.length === 0} title="Search">
					<FiSearch color="currentColor" size="16" />
				</TopBarSearchSubmit>
				<TopBarSearchInput
					aria-label="Search"
					onChange={({ currentTarget }) =>
						setTerm(currentTarget.value)
					}
					placeholder="Search"
					type="search"
					value={term}
				/>
				<TopBarSearchClear
					isActive={term.length > 0}
					onClick={clearTerm}
					title="Clear"
				>
					<MdClear color="currentColor" size="12" />
				</TopBarSearchClear>
			</TopBarSearchForm>
		</StyledSearch>
	);
}

export default TopBarSearch;
