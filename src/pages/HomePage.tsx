import React, { useEffect, useState } from 'react';
import RegionFilter from '../components/RegionFilter';
import SearchInput from '../components/SearchInput';
import Layout from './Layout';
import { useQuery } from 'react-query';
import FlagCard from '../components/FlagCard';
import { Country } from '../models/country';
import { getCountryList } from '../api';
import { IOption } from '../models/option';

const HomePage = () => {
  let { data, error, isLoading } = useQuery('countryList', () => getCountryList());
  const [countryList, setCountryList] = useState<Country[]>([]);
  const mockOptions: IOption[] = [
    {
      id: 1,
      name: 'Africa'
    },
    {
      id: 2,
      name: 'Americas'
    },
    {
      id: 3,
      name: 'Asia'
    },
    {
      id: 4,
      name: 'Europe'
    },
    {
      id: 5,
      name: 'Oceania'
    },
  ];

  useEffect(() => {
    setCountryList(data);
  }, [data]);

  const handleSearch = (searchValue: string) => {
    setCountryList(data.filter((country: Country) => country.commonName.includes(searchValue)));
  };

  const handleFilter = (option: IOption) => {
    setCountryList(data.filter((country: Country) => country.region === option.name));
  };

  return (
    <Layout>
      <>
        <div className='w-100 d-flex flex-row justify-content-between'>
          <SearchInput placeholder='Search for a country…' searchFunction={handleSearch} />
          <RegionFilter options={mockOptions} onSelectionChanged={handleFilter} />
        </div>

        {error &&
          <div className='text-danger'>
            Something went wrong! Please try again later!
          </div>}

        {!error &&
          <div className='d-flex justify-content-between flex-wrap mt-5'>
            {isLoading && <span>Loading...</span>}
            {!isLoading && countryList && countryList.map((country: Country) => (
              <FlagCard country={country} key={country.commonName} className='mr-5 mb-5' />
            ))}
          </div>}
      </>
    </Layout>
  );
};

export default HomePage;
