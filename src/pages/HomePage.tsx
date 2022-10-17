import React from 'react';
import RegionFilter from '../components/RegionFilter';
import SearchInput from '../components/SearchInput';
import Layout from './Layout';
import { useQuery } from 'react-query';
import FlagCard from '../components/FlagCard';
import { Country } from '../models/country';
import { getCountryList } from '../api';

const HomePage = () => {
  let { data: countryList, error, isLoading, refetch } = useQuery('countryList', () => getCountryList());
  const mockOptions = [
    {
      id: 1,
      name: 'Africa'
    },
    {
      id: 2,
      name: 'America'
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

  const handleSearch = () => {

  };

  const handleFilter = () => {

  };

  return (
    <Layout>
      <div className='w-100 d-flex flex-row justify-content-between'>
        <SearchInput placeholder='Search for a country…' searchFunction={handleSearch} />
        <RegionFilter options={mockOptions} onSelectionChanged={handleFilter} />
      </div>

      <div className='d-flex justify-content-between flex-wrap mt-5'>
        {countryList && countryList.map((country: Country) => (
          <FlagCard country={country} key={country.commonName} className='mr-5 mb-5' />
        ))}
      </div>
    </Layout>
  );
};

export default HomePage;
