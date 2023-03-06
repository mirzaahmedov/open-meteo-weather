import { useOutletContext } from "react-router-dom"

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
    </div>
  )
}

export default Home
