import React, { useState } from 'react';
import { IOption } from '../../models/option';
import Icon from '../Icon';
import { RegionFilterWrapper } from './RegionFilter.style';

export interface IRegionFilter {
  options: IOption[];
  onSelectionChanged?: (option: IOption) => void;
  theme?: 'dark' | 'light';
  className?: string;
}

const RegionFilter: React.FC<IRegionFilter> = ({
  options,
  onSelectionChanged,
  theme = 'light',
  className = ''
}) => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedKeyValue, setSelectedKeyValue] = useState({
    id: 0, name: ''
  });

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
    <RegionFilterWrapper className={`${theme} ${className}`}>
      <div className='d-flex flex-row align-items-center justify-content-between value-box' onClick={handleClick}>
        {!selectedKeyValue.name && <div className='placeholder'>Filter by Region</div>}
        {selectedKeyValue.name && <div>{selectedKeyValue.name}</div>}
        <Icon
          icon='arrow'
          size='12px'
          color={theme === 'light' ? '#000000' : '#FFFFFF'}
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