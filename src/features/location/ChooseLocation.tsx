import { MouseEvent as ReactMouseEvent, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query"
import { querySearchCitiesByName } from "@/services/countries/search";
import Text from "@/components/Text";
import Flex from "@/components/Flex";
import LazyLoadingImage from "@/components/LazyLoadingImage";
import Loader from "@/assets/Loader";
import { useSetSearchParam } from "@/utils/searchParams"

const Container = styled(motion.div)`
  max-width: 400px;
  width: 100%;
  height: 100vh;
  padding: 20px;
`
const Countries = styled.ul`
  padding: 20px 0;
`
const Country = styled.li`
  display: flex;
  align-items: center;
  gap: 30px;
  padding: 10px 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.white.transparent};
  cursor: pointer;

  :hover {
    background: ${({ theme }) => theme.colors.blue[400]};
  }
  :last-child {
    border-bottom: none;
  }
`
const Flag = styled(LazyLoadingImage)`
  width: 30px;
  filter: drop-shadow(0px 5px 10px rgba(255, 255, 255, 0.3));
`

type Props = {
  name: string
  close: () => void
}

const ChooseLocation = ({ name: search, close }: Props) => {
  const { data: locations, isLoading } = useQuery({
    queryKey: ["cities", search],
    queryFn: () => querySearchCitiesByName(search),
    enabled: search.length > 0,
    keepPreviousData: false,
  });

  const setParam = useSetSearchParam()

  const handleSelect = ({ latitude, longitude }: any, e: ReactMouseEvent<HTMLLIElement, MouseEvent>) => {
    e.preventDefault()
    setParam({
      latitude,
      longitude,
    })
    close()
  }
  
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    })
    
    document.body.style.overflow = "hidden"

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [])

  return (
    <Container 
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      {isLoading ? (
        <Flex justify="center">
          <Loader />
        </Flex>
      ) : (
        <Countries>
          {Array.isArray(locations?.data) ? locations?.data.map((location, id) => (
            <Country key={id} onMouseDown={(e) => handleSelect(location, e)}>
              <Flag src={`https://flagsapi.com/${location.countryCode}/flat/64.png`} alt={location.country} />
              <Text color="white-main" as="h3" variant="bs-normal">
                <Text as="span" variant="bs-bold">{location.name}</Text>, {location.country}
              </Text>
            </Country>
          )) : null}
        </Countries>
      )}
    </Container>
  );
};

export default ChooseLocation;
