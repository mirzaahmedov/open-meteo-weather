import axios from "@/lib/axios/countries";

type Country = {
  id: number;
  type: string
  city: string;
  name: string;
  latitude: number;
  longitude: number;
  country: string;
  countryCode: string;
}
type GeoDBResponse = {
  data: Country[];
  metadata: {
    totalCount: number;
  }
}

export const querySearchCitiesByName = async (name: string) => {
  const { data } = await axios.get<GeoDBResponse>(
    "geo/cities/",
    {
      params: {
        namePrefix: name,
        limit: 10,
      }
    }
  );
  return data;
};
