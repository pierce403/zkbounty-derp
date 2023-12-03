// SearchBar.jsx

import TextField from '@mui/material/TextField';
// ... other imports

function SearchBar({ onSearch }) {
  return (
    <TextField
      label="Search Bounties"
      variant="outlined"
      onChange={(e) => onSearch(e.target.value)}
      fullWidth
    />
  );
}

export default SearchBar;
