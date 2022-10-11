import React, { useContext, useState } from 'react';
import { ThemeContext } from 'styled-components';
import { IOption } from '../../models/option';
import { themes } from '../../styles/Theme.style';
import Icon from '../Icon';
import { RegionFilterWrapper } from './RegionFilter.style';

export interface IRegionFilter {
  options: IOption[];
  onSelectionChanged?: (option: IOption) => void;
  className?: string;
}

const RegionFilter: React.FC<IRegionFilter> = ({
  options,
  onSelectionChanged,
  className = ''
}) => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedKeyValue, setSelectedKeyValue] = useState({
    id: 0, name: ''
  });
  const theme = useContext(ThemeContext);

  const handleOptionClick = (option: IOption) => () => {
    setSelectedKeyValue({
      id: option.id,
      name: option.name,
    });

    if (onSelectionChanged) {
      onSelectionChanged(option);
    }

    setShowOptions(false);
  };

  const handleClick = () => {
    setShowOptions(!showOptions);
  };

  return (
    <RegionFilterWrapper className={className}>
      <div className='d-flex flex-row align-items-center justify-content-between value-box' onClick={handleClick}>
        {!selectedKeyValue.name && <div className='placeholder'>Filter by Region</div>}
        {selectedKeyValue.name && <div>{selectedKeyValue.name}</div>}
        <Icon
          icon='arrow'
          size='12px'
          color={theme === themes.light ? '#000000' : '#FFFFFF'}
          className={showOptions ? 'down-arrow' : 'up-arrow'}
        />
      </div>
      {showOptions && <div  className='list'>
        {options.map((option: IOption) => (
          <div className='option' key={option.id} onClick={handleOptionClick(option)}>
            {option.name}
          </div>
        ))}
      </div>}
    </RegionFilterWrapper>
  );
};

export default RegionFilter;