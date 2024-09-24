import { styled } from "styled-components";
import default_image from "../../../assets/img/default_sije.png";

interface Props {
  src: string;
  closeModal: () => void;
}

export default function ImageModal({ src, closeModal }: Props) {
  const onError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.src = default_image;
  };

  return (
    <Container>
      <ModalHeader>
        <CloseButton onClick={closeModal}>x</CloseButton>
      </ModalHeader>
      <Wrapper>
        <Content src={src} alt="" onError={onError} />
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  border-radius: 10px;
  width: 100%;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.defaultColor.white};
`;

const ModalHeader = styled.div`
  height: 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const CloseButton = styled.button`
  width: 40px;
  height: 40px;
  color: ${({ theme }) => theme.defaultColor.black};
  font-size: ${({ theme }) => theme.fontSize.large};
`;

const Wrapper = styled.div`
  overflow: hidden;
  height: 380px;
  display: flex;
`;

const Content = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  &:hover {
    transform: scale(1.3);
    transition: transform 0.3s;
  }
`;
