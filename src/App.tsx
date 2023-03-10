import { useState, useEffect } from "react"
import { Outlet } from "react-router-dom"
import { useSearchParams } from "react-router-dom"

const App = () => {
  const [error, setError] = useState<string | null>(null)

  const [searchParams, setSearchParams] = useSearchParams()

  const time = JSON.parse(searchParams.get("time") || "null")
  const latitude = JSON.parse(searchParams.get("latitude") || "null")
  const longitude = JSON.parse(searchParams.get("longitude") || "null")

  useEffect(() => {
    if (time && latitude && longitude) {
      return
    }
    
    const newParams = new URLSearchParams()
    if (!time) {
      newParams.set("time", JSON.stringify(Date.now()))
    }
    if (!latitude || !longitude) {
      window.navigator.geolocation.getCurrentPosition((position) => {
        newParams.set("latitude", JSON.stringify(position.coords.latitude))
        newParams.set("longitude", JSON.stringify(position.coords.longitude))
        setSearchParams(newParams)
      }, (error) => {
        if (error.code === error.PERMISSION_DENIED) {
          setError("Please allow location access to use this app.")
        } else if (error.code === error.POSITION_UNAVAILABLE) {
          setError("Location information is unavailable.")
        } else if (error.code === error.TIMEOUT) {
          setError("The request to get user location timed out.")
        } else {
          setError("An unknown error occurred.")
        }
        return
      })
    } else {
      setSearchParams(newParams)
    }
  }, [time, latitude, longitude])

  
  if (error) {
    return <div>{error}</div>
  }
  if (!time || !latitude || !longitude) {
    return null
  }

  return (
    <Outlet context={{ time, latitude, longitude }} />
  )
}

export default App
