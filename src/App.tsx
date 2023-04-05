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
    if (latitude && longitude) {
      return
    }
    
    const newParams = new URLSearchParams()
    if (!latitude || !longitude) {
      if (window.navigator.geolocation) {
        window.navigator.geolocation.getCurrentPosition((position) => {
          newParams.set("latitude", JSON.stringify(position.coords.latitude))
          newParams.set("longitude", JSON.stringify(position.coords.longitude))
          setSearchParams(newParams)
        }, (error) => {
          if (error.code === error.PERMISSION_DENIED) {
            setError("Please enable geolocation.")
          } else if (error.code === error.POSITION_UNAVAILABLE) {
            setError("Unable to determine your location.")
          } else if (error.code === error.TIMEOUT) {
            setError("Unable to determine your location.")
          } else {
            setError(error.message)
          }
        })
      } else {
        setError("Please enable geolocation.")
      }
    } else {
      setSearchParams(newParams)
    }
  }, [latitude, longitude])
  useEffect(() => {
    const date = Number(time || Date.now())
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
  if (!latitude || !longitude) {
    return null
  }

  return (
    <Outlet context={{ time: time || Date.now(), latitude, longitude }} />
  )
}

export default App
