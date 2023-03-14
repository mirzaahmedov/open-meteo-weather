import axios from "axios"
import { useState, useEffect } from "react"
import { ImgHTMLAttributes } from "react"

const LazyLoadingImage = ({ src, placeholder, alt, ...props }: ImgHTMLAttributes<HTMLImageElement>) => {
  const [imageSrc, setImageSrc] = useState<string | undefined>(placeholder)

  useEffect(() => {
    if (!src) return
  
    axios.get<Blob>(src, { responseType: "blob" }).then(({ data }) => {
      const url = URL.createObjectURL(data)
      setImageSrc(url)
    })
  }, [src])

  return (
    <img {...props} src={imageSrc} alt={alt} />
  )
}

export default LazyLoadingImage
