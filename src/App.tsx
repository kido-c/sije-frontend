import { styled } from "styled-components";
import Header from "./components/Header";
import GalleryList from "./components/gallery/GalleryList";
import { useModal } from "./contexts/ModalProvider";

const IMG_SOURCE = [
  {
    src: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
    alt: "A beautiful mountain landscape",
    title: "Mountain View",
  },
  {
    src: "https://cdn.pixabay.com/photo/2016/11/29/09/05/architecture-1867187_1280.jpg",
    alt: "Modern city skyline",
    title: "City Skyline",
  },
  {
    src: "https://images.unsplash.com/photo-1499346030926-9a72daac6c63",
    alt: "Calm ocean view",
    title: "Ocean at Sunset",
  },
  {
    src: "https://cdn.pixabay.com/photo/2017/08/01/08/29/people-2569234_1280.jpg",
    alt: "People walking on the street",
  },
  {
    src: "https://images.unsplash.com/photo-1531177075029-becfd7f4e818",
    alt: "A serene forest",
    title: "Forest Path",
  },
];

function App() {
  const { openModal } = useModal();

  return (
    <Container>
      <Header />
      <Warpper>
        <GalleryList
          galleryList={IMG_SOURCE.map((img) => {
            return {
              ...img,
              onClick: () => {
                console.log("hit");
                openModal(img.src);
              },
            };
          })}
        />
      </Warpper>
    </Container>
  );
}

export default App;

const Container = styled.div``;

const Warpper = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0 30px;
`;
