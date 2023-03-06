import { useState } from "react";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query"
import { queryCountriesByName } from "@/services/countries/search";

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

const CountrySelect = () => {
  const [name, setName] = useState("");
  const [value, setValue] = useState("");

  const { data: countries, isLoading } = useQuery({
    queryKey: ["countries", name],
    queryFn: () => queryCountriesByName(name),
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setName(value);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <input value={value} onChange={e => setValue(e.target.value)} type="text" name="search" />
        {isLoading ? <div>Loading...</div> : null}
        {Array.isArray(countries) ? countries.map((country, id) => (
          <div key={id}>
            {country.name.common}
          </div>
        )) : null}
      </form>
    </Container>
  );
};

export default CountrySelect;
