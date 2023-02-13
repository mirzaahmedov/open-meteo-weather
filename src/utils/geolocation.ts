import { useEffect, useState } from "react";
import axios from "axios";

type IPInfoResponseType = {
  loc: `${number},${number}`;
};
type LocationType = {
  latitude: number;
  longitude: number;
};

const useGeolocation = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [location, setLocation] = useState<LocationType | null>(null);

  useEffect(() => {
    const geolocation = window.navigator.geolocation;

    setIsLoading(true);

    if (geolocation) {
      geolocation.getCurrentPosition(
        ({ coords }) => {
          const { latitude, longitude } = coords;
          setLocation({ latitude, longitude });
          setIsLoading(false);
        },
        async () => {
          const { data } = await axios.get<IPInfoResponseType>(
            "https://ipinfo.io/json?token=bf873547ee7f13"
          );
          const [latitude, longitude] = data.loc.split(",").map(Number);
          setLocation({ latitude, longitude });
          setIsLoading(false);
        }
      );
    } else {
      setError("Can not get your current location");
    }
  }, []);

  return { location, isLoading };
};

export default useGeolocation;
