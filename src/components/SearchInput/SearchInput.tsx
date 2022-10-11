import React, { useContext, useState } from 'react';
import { ThemeContext } from 'styled-components';
import { themes } from '../../styles/Theme.style';
import Icon from '../Icon';
import { SearchInputWrapper } from './SearchInput.style';

export interface ISearchInput {
  placeholder: string;
  searchFunction: (searchValue: string) => void;
  className?: string;
}

const SearchInput: React.FC<ISearchInput> = ({
  placeholder,
  searchFunction,
  className = ''
}) => {
  const [searchValue, setSearchValue] = useState<string>('');
  const theme = useContext(ThemeContext);
  
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(e.currentTarget.value);
    searchFunction(e.currentTarget.value);
  };

  return (
    <SearchInputWrapper className={className}>
      <Icon
        icon='magnifier'
        size='18px'
        color={theme === themes.light ? '#848484' : '#FFFFFF'}
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