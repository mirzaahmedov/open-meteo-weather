import { FormEvent, useState } from "react";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query"
import { querySearchCitiesByName } from "@/services/countries/search";
import Text from "@/components/Text";

const Container = styled.div`
  overflow: auto;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background: #fff;
  color: #000;
`
const SearchBox = styled.form`
  width: 100%;
  padding: 20px;
`
const SearchInput = styled.input`
  width: 100%;
  height: 38px;
  padding: 7px 14px;
  background: #EFF6FF;
  border: 2px solid #93C5FD;
  border-radius: 100px;
`
const Countries = styled.ul`
  padding: 20px;
`
const Country = styled.li`
  display: flex;
  align-items: center;
  gap: 30px;
  padding: 10px 10px;
`
const Flag = styled.img`
  width: 30px;
`

const CountrySelect = () => {
  const [name, setName] = useState("");
  const [value, setValue] = useState("");

  const { data: cities, isLoading } = useQuery({
    queryKey: ["cities", name],
    queryFn: () => querySearchCitiesByName(name),
    enabled: name.length > 0,
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setName(value);
  };

  return (
    <Container>
      <SearchBox onSubmit={handleSubmit}>
          <SearchInput value={value} onChange={e => setValue(e.target.value)} type="text" name="search" />
      </SearchBox>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <Countries>
          {Array.isArray(cities) ? cities.map((city, id) => (
            <Country key={id}>
              <Flag src={`https://flagsapi.com/${city.countryCode}/flat/64.png`} alt={city.country} />
              <Text color="blue-400" as="h3" variant="bs-normal">
                {city.name},{city.country}
              </Text>
            </Country>
          )) : null}
        </Countries>
      )}
    </Container>
  );
};

export default CountrySelect;
