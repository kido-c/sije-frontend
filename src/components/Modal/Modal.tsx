import styled from "styled-components";
import { useEffect } from "react";
import { useModal } from "../../contexts/ModalProvider";

interface Props {
  children: React.ReactNode;
}

function Modal({ children }: Props) {
  const { closeModal } = useModal();

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  });

  return (
    <>
      <Overlay
        onClick={(e) => {
          closeModal();
          e.preventDefault();
        }}
      />
      <ModalWrap>
        <Contents>{children}</Contents>
      </ModalWrap>
    </>
  );
}

export default Modal;

export const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.45);
  z-index: 11;
`;

export const ModalWrap = styled.div`
  width: 100%;
  max-width: 600px;
  height: 400px;
  border-radius: 15px;
  background-color: ${(props) => props.theme.defaultColor.white};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 12;
`;

export const Contents = styled.div``;
