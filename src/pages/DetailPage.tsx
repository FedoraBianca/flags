import React, { useEffect } from 'react';
import Button from '../components/Button';
import Layout from './Layout';
import Icon from '../components/Icon';
import { useNavigate, useParams } from 'react-router-dom';
import Details from '../components/Details';
import { useQuery } from 'react-query';
import { getCountryByName } from '../api';

const DetailPage = () => {
  const navigate = useNavigate();
  const params = useParams<{ countryName: string }>();
  const { countryName } = params;
  let { data: country, error, isLoading, refetch } = useQuery('country', () => getCountryByName(countryName || ''));

  useEffect(() => {
    refetch();
    console.log(countryName, country);
  }, [countryName]);

  const handleClick = (e: React.MouseEvent) => {
    navigate('/');
  };

  return (
    <Layout>
      <>
      <div>
        <Button onClick={handleClick}>
          <Icon
            icon='back-arrow'
            color='#848484'
            size='15px'
            className='mt-2'
          />
          <span className='ml-2 pb-2'>
            Back
          </span>
        </Button>
      </div>

      {error &&
        <div className='text-danger'>
          Something went wrong! Please try again later!
        </div>}

      {!error && <>
        {isLoading && <span>Loading...</span>}

        {!isLoading && country && <div className='d-flex flex-row details-wrapper'>
          <div className='image-wrapper'>
            <img src={country.flag} alt={`${country.commonName} flag`} />
          </div>
          <Details country={country} />
        </div>}
      </>}
      </>
    </Layout>
  );
};

export default DetailPage;
