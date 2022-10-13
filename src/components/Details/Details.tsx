import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Country } from '../../models/country';
import Button from '../Button';
import { DetailsWrapper } from './Details.style';

export interface IDetails {
  country: Country;
  className?: string;
}

const Details: React.FC<IDetails> = ({
  country,
  className = ''
}) => {
  const navigate = useNavigate();

  const handleCountryClick = (countryName: string) => () => {
    navigate(`/${countryName}`);
  };

  return (
    <DetailsWrapper className={`d-flex flex-column ${className}`}>
      <h4>{country.commonName}</h4>

      <div className='d-flex flex-row'>
        <div className='mr-5'>
          <div>
            <span className='card-label'>Native Name:</span>
            <span>{country.nativeName}</span>
          </div>

          <div>
            <span className='card-label'>Population:</span>
            <span>{country.population}</span>
          </div>

          <div>
            <span className='card-label'>Region:</span>
            <span>{country.region}</span>
          </div>

          <div>
            <span className='card-label'>Sub Region:</span>
            <span>{country.subRegion}</span>
          </div>

          <div>
            <span className='card-label'>Capital:</span>
            <span>{country.capital}</span>
          </div>
        </div>

        <div className='ml-5'>
          <div>
            <span className='card-label'>Top level domain:</span>
            <span>{country.topLevelDomain}</span>
          </div>

          <div>
            <span className='card-label'>Currencies:</span>
            <span>{country.getDisplayCurrencyList()}</span>
          </div>

          <div>
            <span className='card-label'>Languages:</span>
            <span>{country.getDisplayLanguageList()}</span>
          </div>
        </div>
      </div>

      <div>
        <div className='card-label mt-4 mb-2'>Border Countries:</div>
        {country.borderCountries.map((countryName: string) => (
          <Button onClick={handleCountryClick(countryName)} className='mr-3 mb-3'>{countryName}</Button>
        ))}
      </div>
    </DetailsWrapper>
  );
};

export default Details;