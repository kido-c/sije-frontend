import { styled } from "styled-components";
import Header from "./components/Header";
import GalleryList from "./components/gallery/GalleryList";
import { useModal } from "./contexts/ModalProvider";
import Carousel from "./components/carousel/Carousel";
import GalleryItem from "./components/gallery/GalleryItem";
import { useEffect, useState } from "react";
import { PhotoAPI } from "./components/apis/photo";
import { GetPhotoDTO, PhotoItem } from "./components/types/photo";

function App() {
  const { openModal } = useModal();

  const [carouselPhotos, setCarouselPhotos] = useState<PhotoItem[]>([]);

  const [galleryPhotos, setGalleryPhotos] = useState<PhotoItem[]>([]);

  const convertPhotos = (photos: GetPhotoDTO[]): PhotoItem[] => {
    return photos.map((photo) => {
      return { src: photo.urls.regular, alt: photo.description };
    });
  };

  const seperatePhotos = (photos: GetPhotoDTO[]) => {
    if (carouselPhotos.length === 0) {
      setCarouselPhotos(convertPhotos(photos).slice(0, 5));
      setGalleryPhotos(convertPhotos(photos).slice(5));
    } else {
      setGalleryPhotos((prevGalleryPhotos) => {
        return [...prevGalleryPhotos, ...convertPhotos(photos)];
      });
    }
  };

  const getRandomPhotos = () => {
    PhotoAPI.getRandomPhotos({ count: 5 }).then((data) => {
      seperatePhotos(data);
    });
  };

  useEffect(() => {
    // todo: 무한 스크롤 구현
    getRandomPhotos();
  }, []);

  return (
    <Container>
      <Header />
      <Warpper>
        <Carousel autoPlay={true}>
          {IMG_SOURCE.map((img) => (
            <GalleryItem key={img.title} src={img.src} alt="" />
          ))}
        </Carousel>
        <ListWrapper>
          <GalleryList
            galleryList={galleryPhotos.map((photo) => {
              return {
                ...photo,
                onClick: () => {
                  openModal(photo.src);
                },
              };
            })}
          />
        </ListWrapper>
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

const ListWrapper = styled.div`
  margin-top: 20px;
`;
