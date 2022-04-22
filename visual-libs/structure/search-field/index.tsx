import SearchRounded from '@mui/icons-material/SearchRounded';
import {InputAdornment, TextField} from '@mui/material';
import {KeyboardEvent} from 'react';
import styles from './search-field.module.less';

export function SearchField(
	{searchValue, handleKeyDown, handleSearch} :
	{searchValue: string, handleKeyDown: (event: KeyboardEvent<HTMLInputElement>) => void, handleSearch:(event: React.ChangeEvent<HTMLInputElement>) => void}
) {
	return (
		<TextField
			variant="standard"
			value={searchValue}
			onKeyDown={handleKeyDown}
			onChange={handleSearch}
			className={styles.search}
			size="medium"
			InputProps={{
				startAdornment: (
					<InputAdornment position="start">
						<SearchRounded />
					</InputAdornment>
				),
			}}
		/>
	);
}