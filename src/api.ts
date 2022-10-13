import axios from "axios";
import { Country } from "./models/country";
import { ICurrency } from "./models/currency";

const parseCountryResponse = (response: any): Country => {
  let commonName: string = response.name.common;
  let nativeName: string = (Object.values(response.name.nativeName)[0] as any).official;
  let topLevelDomain: string = response.tld[0];
  let population: number = response.population;
  let currencies: ICurrency[] = Object.values(response.currencies);
  let region: string = response.region;
  let subRegion: string = response.subregion;
  let languages: string[] = Object.values(response.languages);
  let capital: string = response.capital[0];
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