import React from 'react';
import RegionFilter from '../components/RegionFilter';
import SearchInput from '../components/SearchInput';
import Layout from './Layout';

const HomePage = () => {
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
        <SearchInput placeholder='Search for a country…' searchFunction={handleSearch}/>
        <RegionFilter options={mockOptions} onSelectionChanged={handleFilter} />
      </div>
    </Layout>
  );
};

export default HomePage;
