import React from "react";
import { styled } from "styled-components";
import default_image from "../../assets/img/default_sije.png";

interface Props {
  src: string;
  alt: string;
  title?: string;
  width?: number;
  height?: number;
  onClick?: () => void;
}

export default function GalleryItem({
  src,
  alt,
  title,
  width = 100,
  height = 350,
  onClick,
}: Props) {
  const onError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.src = default_image;
  };

  return (
    <Conatiner $width={width} $height={height} onClick={onClick}>
      <ImageWrapper src={src} alt={alt} onError={onError} />
      {title && <Title>{title}</Title>}
    </Conatiner>
  );
}

const Conatiner = styled.div<{ $width: number; $height: number }>`
  position: relative;
  width: ${({ $width }) => $width}%;
  height: ${({ $height }) => $height}px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.defaultColor.white};
`;

const ImageWrapper = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
`;

const Title = styled.p`
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: ${({ theme }) => theme.defaultColor.black};
`;
