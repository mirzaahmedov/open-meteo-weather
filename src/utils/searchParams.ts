import { useSearchParams } from "react-router-dom";

export function useSetSearchParam() {
  const [searchParams, setSearchParams] = useSearchParams();

  const setParam = (values: Record<string, string>) => {
    const newParams = new URLSearchParams(searchParams.toString());
    Object.entries(values).forEach(([key, value]) => {
      if (value) {
        newParams.set(key, value);
      }
    });
    setSearchParams(newParams);
  };

  return setParam;
}
