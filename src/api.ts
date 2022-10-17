import axios from "axios";
import { Country } from "./models/country";
import { ICurrency } from "./models/currency";

const parseCountryResponse = (response: any): Country => {
  let commonName: string = response.name.common;
  let nativeName: string = response && response.name && response.name.nativeName ? (Object.values(response.name.nativeName)[0] as any).official : 'Unknown';
  let topLevelDomain: string = response && response.tld ? response.tld[0] : 'Unknown';
  let population: number = response.population;
  let currencies: ICurrency[] = response && response.currencies ? Object.values(response.currencies) : [];
  let region: string = response.region;
  let subRegion: string = response.subregion;
  let languages: string[] = response && response.languages ? Object.values(response.languages) : ['Unknown'];
  let capital: string = response && response.capital ? response.capital[0] : 'Unknown';
  let borderCountries: string[] = response.borders;
  let flag: string = (Object.values(response.flags) as string[])[0];

  return new Country(
    commonName,
    nativeName,
    topLevelDomain,
    population,
    currencies,
    region,
    subRegion,
    languages,
    capital,
    borderCountries,
    flag);
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
    return parseCountryResponse(response.data[0]);
  }).catch((error) => {
    console.error(error);
  });
};

export const getCountryList = async (): Promise<any> => {
  const options = {
    method: 'GET',
    url: `https://restcountries.com/v3.1/all`,
    headers: {
      'x-rapidapi-host': 'ajayakv-rest-countries-v1.p.rapidapi.com',
      'x-rapidapi-key': 'cJvLRNK0GfdM9WSMbQe3inU7REn8JVy5'
    }
  };

  return await axios.request(options).then((response) => {
    return response.data.map(parseCountryResponse);
  }).catch((error) => {
    console.error(error);
  });
};