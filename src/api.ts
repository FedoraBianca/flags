import axios from "axios";
import { Country } from "./models/country";

const parseCountryResponse = (response: any): Country => {
  return new Country(
    response.name.common,
    (Object.values(response.name.nativeName) as any).official,
    response.tld[0],
    response.population,
    [],
    //response.currencies
    response.region,
    response.subregion,
    [],
    //Object.values(response.languages),
    response.capital[0],
    response.borders,
    ''
  );
};

export const getCountryByName = async (countryName: string): Promise<any> => {
  const options = {
    method: 'GET',
    url: `https://restcountries.com/v3.1/name/${countryName}`,
    headers: {
      'x-rapidapi-host': 'ajayakv-rest-countries-v1.p.rapidapi.com',
      'x-rapidapi-key': 'cJvLRNK0GfdM9WSMbQe3inU7REn8JVy5'
    }
  };

  return await axios.request(options).then((response) => {
    console.log('Response: ', parseCountryResponse(response.data[0]));
    return parseCountryResponse(response.data[0]);
  }).catch((error) => {
    console.error(error);
  });
};