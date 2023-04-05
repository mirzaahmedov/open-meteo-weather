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
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      newParams.set("time", JSON.stringify(today.getTime()))
    }
    if (!latitude || !longitude) {
      window.navigator.geolocation.getCurrentPosition((position) => {
        newParams.set("latitude", JSON.stringify(position.coords.latitude))
        newParams.set("longitude", JSON.stringify(position.coords.longitude))
        setSearchParams(newParams)
      }, (error) => {
        alert(error.message)
        if (error.code === error.PERMISSION_DENIED) {
          setError("ERROR, Please allow location access to use this app.")
        } else if (error.code === error.POSITION_UNAVAILABLE) {
          setError("ERROR, Location information is unavailable.")
        } else if (error.code === error.TIMEOUT) {
          setError("ERROR, The request to get user location timed out.")
        } else {
          setError("Error, An unknown error occurred.")
        }
      })
    } else {
      setSearchParams(newParams)
    }
  }, [time, latitude, longitude])
  useEffect(() => {
    if (!time) {
      return
    }

    const date = Number(time)
    const today = new Date()

    today.setHours(0, 0, 0, 0)

    if (date - today.getTime() > 7 * 24 * 3600 * 1000) {
      setError("Please select a date within the next 7 days.")
    } else {
      setError(null)
    }
  }, [time])

  
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
