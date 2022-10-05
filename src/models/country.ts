import { ICurrency } from "./currency";

export class Country {
  name: string;
  nativeName: string;
  topLevelDomain: string;
  population: number;
  currencies: ICurrency[];
  region: string;
  subRegion: string;
  languages: string[];
  capital: string;
  borderCountries: string[];

  constructor(
    name: string,
    nativeName: string,
    topLevelDomain: string,
    population: number,
    currencies: ICurrency[],
    region: string,
    subRegion: string,
    languages: string[],
    capital: string,
    borderCountries: string[]
    ) {
      this.name = name;
      this.nativeName = nativeName;
      this.topLevelDomain = topLevelDomain;
      this.population = population;
      this.currencies = currencies;
      this.region = region;
      this.subRegion = subRegion;
      this.languages = languages;
      this.capital = capital;
      this.borderCountries = borderCountries;
  }
}