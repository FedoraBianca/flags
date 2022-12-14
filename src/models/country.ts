import { ICurrency } from "./currency";

export class Country {
  commonName: string;
  nativeName: string;
  topLevelDomain: string;
  population: number;
  currencies: ICurrency[];
  region: string;
  subRegion: string;
  languages: string[];
  capital: string;
  borderCountries: string[];
  flag: string;

  constructor(
    commonName: string,
    nativeName: string,
    topLevelDomain: string,
    population: number,
    currencies: ICurrency[],
    region: string,
    subRegion: string,
    languages: string[],
    capital: string,
    borderCountries: string[],
    flag: string
    ) {
      this.commonName = commonName;
      this.nativeName = nativeName;
      this.topLevelDomain = topLevelDomain;
      this.population = population;
      this.currencies = currencies;
      this.region = region;
      this.subRegion = subRegion;
      this.languages = languages;
      this.capital = capital;
      this.borderCountries = borderCountries;
      this.flag = flag;
  }

  getDisplayCurrencyList(): string {
    let list = '';
    this.currencies.map((currency: ICurrency, index: number) => index === 0 ? list += currency.name : `, ${currency.name}`);
    return list;
  };

  getDisplayLanguageList(): string {
    let list = '';
    this.languages.map((language: string, index: number) => index === 0 ? list += language : `, ${language}`);
    return list;
  };
}