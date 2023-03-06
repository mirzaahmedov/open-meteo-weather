import { useOutletContext } from "react-router-dom"
import CountrySelect from "@/features/county/CountrySelect"

type OutletContext = {
  time: number
  latitude: number
  longitude: number
}

const Home = () => {
  const { time, latitude, longitude } = useOutletContext<OutletContext>()

  return (
    <div>
      <h1>Home</h1>
      <CountrySelect />
    </div>
  )
}

export default Home
