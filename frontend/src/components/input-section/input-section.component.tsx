import {
  Button, InputLabel, MenuItem, Select, TextField,
} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import React, { useState } from 'react';
import { SearchTypes } from '../../models/search-types';
import './input-section.styles.scss';

type ownProps = {
  type: SearchTypes,
  onSearch: (type: SearchTypes, searchTerm: string, searchValue: string) => Promise<void>,
  searchTerms: string[]
}

const InputSection = ({ type, onSearch, searchTerms }: ownProps) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchValue, setSearchValue] = useState<string>('');

  const handleSearchTerm = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSearchTerm(event.target.value as string);
  };

  return (
    <Paper className="input-section">
      <h3>{type.toUpperCase()}</h3>
      <div className="input-fields">
        <div className="input-field">
          <InputLabel id="select-term-label">Select search term</InputLabel>
          <Select
            labelId="select-term-label"
            id="select-term"
            value={searchTerm}
            fullWidth
            onChange={handleSearchTerm}
          >
            {searchTerms.map((term) => <MenuItem key={term} value={term}>{term}</MenuItem>)}
          </Select>
        </div>
        <div className="input-field">
          <InputLabel id="search-term">Input search value</InputLabel>
          <TextField
            fullWidth
            id="search-term"
            size="small"
            variant="outlined"
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
          />
        </div>
      </div>
      <div className="search-button">
        <Button
          fullWidth
          variant="outlined"
          onClick={() => onSearch(type, searchTerm, searchValue)}
        >
          Search
        </Button>
      </div>
    </Paper>
  );
};

export default InputSection;
