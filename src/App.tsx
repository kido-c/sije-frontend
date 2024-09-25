import { styled } from "styled-components";
import Header from "./components/Header/Header";
import GalleryList from "./components/galleryList/GalleryList";
import { useModal } from "./contexts/ModalProvider";
import Carousel from "./components/carousel/Carousel";
import { useEffect, useState } from "react";
import { PhotoAPI } from "./apis/photo";
import { GetPhotoDTO, PhotoItem } from "./types/photo";
import useIntersect from "./hooks/useIntersect";
import { useInfiniteQuery } from "@tanstack/react-query";
import Loading from "./components/loading/Loading";

function App() {
  const { openModal } = useModal();

  const [carouselPhotos, setCarouselPhotos] = useState<PhotoItem[]>([]);

  const [galleryPhotos, setGalleryPhotos] = useState<PhotoItem[]>([]);

  const { data, isSuccess, isLoading, fetchNextPage, error } = useInfiniteQuery(
    {
      queryKey: ["getRandomPhotos"],
      queryFn: ({ pageParam }) => getRandomPhotos(pageParam, 30),
      getNextPageParam: (_, pages) => {
        return pages.length + 1;
      },
      initialPageParam: 1,
    }
  );

  const convertPhotos = (photos: GetPhotoDTO[]): PhotoItem[] => {
    return photos.map((photo) => {
      return { src: photo.urls.regular, alt: photo.alt_description };
    });
  };

  const seperatePhotos = (photos: GetPhotoDTO[]) => {
    setCarouselPhotos(convertPhotos(photos).slice(0, 5));
    setGalleryPhotos(convertPhotos(photos).slice(5));
  };

  const getRandomPhotos = (page: number, count: number) => {
    return PhotoAPI.getRandomPhotos({ count, page });
  };

  const inifiniteRef = useIntersect({
    onIntersect: async (entry, observer) => {
      // 50 request / 1hour 를 조절하기 위해서 5회 요청 후에는 무한 스크롤 멈춤
      if (galleryPhotos.length >= 30 * 5) {
        // observer 와 target element 연결 해제
        observer.unobserve(entry.target);
      } else {
        fetchNextPage();
      }
    },
  });

  useEffect(() => {
    if (data) {
      seperatePhotos(data.pages.flat());
    }
  }, [data]);

  return (
    <Container>
      <Header />
      {isLoading && <Loading />}
      {isSuccess && (
        <Warpper>
          <Carousel autoPlay={true}>
            {carouselPhotos.map((img) => (
              <Image key={img.src} src={img.src} alt={img.alt} />
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
      )}
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

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
