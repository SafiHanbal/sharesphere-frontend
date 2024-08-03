import { Input, SearchIcon } from './search-input.styles';

const SearchInput = ({ ...inputProps }) => {
  return (
    <>
      <SearchIcon />
      <Input {...inputProps} />
    </>
  );
};

export default SearchInput;
