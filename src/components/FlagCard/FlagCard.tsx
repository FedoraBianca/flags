import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Country } from '../../models/country';
import { FlagCardWrapper } from './FlagCard.style';

export interface IFlagCard {
  country: Country;
  className?: string;
}

const FlagCard: React.FC<IFlagCard> = ({
  country,
  className = '',
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${country.commonName}`);
  };

  return (
    <FlagCardWrapper className={`d-flex flex-column ${className}`} onClick={handleClick}>
      <div className='image-container'>
        <img src={country.flag} alt={`${country.commonName} flag`} />
      </div>

      <div className='d-flex flex-column w-100 px-4 py-4'>
        <h3 className='mb-3'>{country.commonName}</h3>
        <div>
          <div>
            <span className='card-label'>Population:</span>
            <span>{country.population}</span>
          </div>

          <div>
            <span className='card-label'>Region:</span>
            <span>{country.region}</span>
          </div>

          <div>
            <span className='card-label'>Capital:</span>
            <span>{country.capital}</span>
          </div>
        </div>
      </div>
    </FlagCardWrapper>
  );
};

export default FlagCard;