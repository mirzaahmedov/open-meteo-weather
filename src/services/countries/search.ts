import axios from "@/lib/axios/countries";

type Country = {
  name: {
    common: string;
  };
  flags: {
    svg: string;
  };
  latlng: number[];
}

export const queryCountriesByName = async (name: string) => {
  const { data } = await axios.get<Country[]>(
    `https://restcountries.com/v3.1/name/${name}`
  );
  return data;
};
