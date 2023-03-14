import { useState, useEffect } from "react";
import { ImgHTMLAttributes } from "react";

type Props = ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
  placeholder: string
}

const LazyLoadingImage = ({ src, placeholder, ...props }: Props) => {
  const [imgSrc, setImgSrc] = useState(placeholder);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setImgSrc(src);
  }, [src]);

  return (
    <img src={imgSrc} {...props} />
  );
};

export default LazyLoadingImage;
