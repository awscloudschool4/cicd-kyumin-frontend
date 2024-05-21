"use client";
import React, { useEffect, useState } from "react";
import { getImage } from "./action";
import { Image } from "@nextui-org/react";

interface ImageComponentProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

const ImageComponent: React.FC<ImageComponentProps> = ({
  src,
  alt,
  width,
  height,
}) => {
  const [imageData, setImageData] = useState<string>("");

  useEffect(() => {
    async function fetchImage() {
      const base64Image = await getImage(src);
      if (base64Image !== "no image") {
        setImageData(base64Image);
      }
    }

    fetchImage();
  }, [src]);

  return imageData ? (
    <Image src={imageData} alt={alt} width={width} height={height} />
  ) : (
    <p></p>
  );
};

export default ImageComponent;
