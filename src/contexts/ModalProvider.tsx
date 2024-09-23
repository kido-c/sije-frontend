import React, { createContext, useContext, useState } from "react";

// Context 생성
const ModalContext = createContext({
  imgSrc: "",
  isOpen: false,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  openModal: (src: string) => {},
  closeModal: () => {},
});

export const useModal = () => useContext(ModalContext);

interface Props {
  children: React.ReactNode;
}

export const ModalProvider = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [imgSrc, setImgSrc] = useState("");

  const openModal = (src: string) => {
    setImgSrc(src);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setImgSrc("");
  };

  return (
    <ModalContext.Provider value={{ isOpen, imgSrc, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};