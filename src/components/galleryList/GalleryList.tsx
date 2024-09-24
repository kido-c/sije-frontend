import GalleryItem from "./components/GalleryItem";
import { styled } from "styled-components";

interface Props {
  galleryList: {
    src: string;
    alt: string;
  }[];
}

export default function GalleryList({ galleryList }: Props) {
  return (
    <Container>
      {galleryList.map((gallery) => (
        <GalleryItem {...gallery} key={gallery.src} />
      ))}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 10px;
  column-gap: 20px;
`;
