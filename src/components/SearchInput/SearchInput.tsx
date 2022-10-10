import React, { useState } from 'react';
import Icon from '../Icon';
import { SearchInputWrapper } from './SearchInput.style';

export interface ISearchInput {
  placeholder: string;
  searchFunction: (searchValue: string) => void;
  theme?: 'dark' | 'light';
  className?: string;
}

const SearchInput: React.FC<ISearchInput> = ({
  placeholder,
  searchFunction,
  theme = 'light',
  className = ''
}) => {
  const [searchValue, setSearchValue] = useState<string>('');

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(e.currentTarget.value);
    searchFunction(e.currentTarget.value);
  };

  return (
    <SearchInputWrapper className={`${theme} ${className}`}>
      <Icon
        icon='magnifier'
        size='18px'
        color={theme === 'light' ? '#848484' : '#FFFFFF'}
        className='search-icon'
      />
      <input
        id='search-input'
        key='search-input'
        type='text'
        placeholder={placeholder}
        onChange={changeHandler}
        value={searchValue}
      />
    </SearchInputWrapper>
  );
};

export default SearchInput;