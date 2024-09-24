import { styled } from "styled-components";
import Header from "./components/Header";
import GalleryList from "./components/gallery/GalleryList";
import { useModal } from "./contexts/ModalProvider";
import Carousel from "./components/carousel/Carousel";
import GalleryItem from "./components/gallery/GalleryItem";
import { useState } from "react";
import { PhotoAPI } from "./components/apis/photo";
import { GetPhotoDTO, PhotoItem } from "./components/types/photo";
import useIntersect from "./hooks/useIntersect";

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
    PhotoAPI.getRandomPhotos({ count: 30 }).then((data) => {
      seperatePhotos(data);
    });
  };

  const inifiniteRef = useIntersect({
    onIntersect: async (entry, observer) => {
      // 50 request / 1hour 를 조절하기 위해서 5회 요청 후에는 무한 스크롤 멈춤
      if (galleryPhotos.length >= 30 * 5) {
        // observer 와 target element 연결 해제
        observer.unobserve(entry.target);
      } else {
        getRandomPhotos();
      }
    },
  });

  return (
    <Container>
      <Header />
      <Warpper>
        <Carousel autoPlay={true}>
          {carouselPhotos.map((img) => (
            <GalleryItem key={img.title} src={img.src} alt={img.alt} />
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
        <LastColumn ref={inifiniteRef} />
      </Warpper>
    </Container>
  );
}

export default App;

const Container = styled.div``;

const Warpper = styled.div`
  width: 100%;

  padding: 0 30px;
`;

const ListWrapper = styled.div`
  margin-top: 20px;
`;

const LastColumn = styled.div`
  height: 10px;
`;
