import styled from "styled-components";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query"
import { querySearchCitiesByName } from "@/services/countries/search";
import Text from "@/components/Text";
import LazyLoadingImage from "@/components/LazyLoadingImage";
import Loader from "@/assets/Loader";
import { useSetSearchParam } from "@/utils/searchParams"

const Container = styled(motion.div)`
  max-width: 400px;
  overflow: auto;
  width: 100%;
  height: 100vh;
  padding: 20px;
`
const Countries = styled.ul`
  padding: 20px 0;
  padding-top: 40px;
`
const Country = styled.li`
  display: flex;
  align-items: center;
  gap: 30px;
  padding: 10px 10px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.slate[100]};
  cursor: pointer;

  :hover {
    background: ${({ theme }) => theme.colors.slate[100]};
    border: none;
    border-radius: 8px;
  }
`
const Flag = styled(LazyLoadingImage)`
  width: 30px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1));
`

type Props = {
  name: string
  close: () => void
}

const CountrySelect = ({ name: search }: Props) => {
  const { data: cities, isLoading } = useQuery({
    queryKey: ["cities", search],
    queryFn: () => querySearchCitiesByName(search),
    enabled: search.length > 0,
    keepPreviousData: false,
  });

  const setParam = useSetSearchParam()

  const handleSelect = ({ latitude, longitude }: any) => {
    setParam({ latitude, longitude })
    close()
  }

  return (
    <Container 
    >
      {isLoading && search.length > 0 ? (
        <Loader />
      ) : (
        <Countries>
          {Array.isArray(cities?.data) ? cities?.data.map((city, id) => (
            <Country key={id} onClick={() => handleSelect(city)}>
              <Flag placeholder="/images/flag.png" src={`https://flagsapi.com/${city.countryCode}/flat/64.png`} alt={city.country} />
              <Text color="slate-600" as="h3" variant="bs-normal">
                <Text as="span" variant="bs-bold">{city.name}</Text>, {city.country}
              </Text>
            </Country>
          )) : null}
        </Countries>
      )}
    </Container>
  );
};

export default CountrySelect;
