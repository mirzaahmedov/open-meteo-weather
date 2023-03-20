import { useState, useEffect, ImgHTMLAttributes } from "react";
import Loader from "@/assets/Loader";

type Props = ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
}

const LazyLoadingImage = ({ src, ...props }: Props) => {
  const [imgSrc, setImgSrc] = useState<null | string>(null);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setImgSrc(src);
  }, [src]);

  return imgSrc !== null ? (
      <img src={imgSrc} {...props} />
    ) : (
      <Loader style={{ fontSize: 24 }} />
    ) 
};

export default LazyLoadingImage;
