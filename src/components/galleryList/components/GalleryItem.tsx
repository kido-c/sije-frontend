import React from "react";
import { styled } from "styled-components";
import default_image from "../../../assets/img/default_sije.png";

interface Props {
  src: string;
  alt: string;
  onClick?: () => void;
}

export default function GalleryItem({ src, alt, onClick }: Props) {
  const onError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.src = default_image;
  };

  return (
    <Container onClick={onClick}>
      <ImageRatio>
        <ImageWrapper
          src={src}
          alt={alt ? alt : "대체이미지"}
          onError={onError}
          loading="lazy"
        />
      </ImageRatio>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  height: 0;
  border-radius: 10px;
  overflow: hidden;
  padding-top: 50%;
`;

const ImageWrapper = styled.img`
  max-width: 100%;
  height: auto;
  transform: translate(-50%, -50%);
  touch-action: pan-y;
`;

const ImageRatio = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transform: translate(50%, 50%);
`;
