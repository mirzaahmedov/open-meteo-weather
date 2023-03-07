import axios from "axios";

type CountriesResponseType = {
  name: {
    common: string;
  };
  flags: {
    svg: string;
  };
  latlng: number[];
  capital: string[];
}[];

export const searchCountryByNameQuery = async (name: string) => {
  const { data } = await axios.get<CountriesResponseType>(
    `https://restcountries.com/v3.1/name/${name}`
  );
  return data;
};
