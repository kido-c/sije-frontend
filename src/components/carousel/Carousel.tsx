import React, { PropsWithChildren, useEffect } from "react";
import right_arrow from "../../assets/icons/right_arrow.png";
import left_arrow from "../../assets/icons/left_arrow.png";

import styled from "styled-components";
import Dots from "./components/Dots";

interface Props {
  infinite?: boolean;
  speed?: number;
  autoPlay?: boolean;
  dots?: boolean;
  style?: {
    width: string;
    height: string;
  };
}

export default function Carousel({
  children,
  style,
  autoPlay = false,
  speed = 3000,
}: PropsWithChildren<Props>) {
  const wrapperRef = React.useRef<HTMLDivElement>(null);

  const [currentIdx, setCurrentIdx] = React.useState(0);
  const [startX, setStartX] = React.useState(0);
  const [dragging, setDragging] = React.useState(false);
  const [offset, setOffset] = React.useState(0);

  const totalSlides = React.Children.count(children);

  const maxLeft = totalSlides - 1; // 마지막 슬라이드에 대한 계산

  const nextSlide = () => {
    setCurrentIdx((prev) => (prev >= maxLeft ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIdx((prev) => (prev <= 0 ? maxLeft : prev - 1));
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!dragging) return;
    e.preventDefault();
    const moveX = e.clientX - startX;
    setOffset(moveX);
  };

  const handleMouseUp = () => {
    if (!dragging) return;

    const containerWidth = wrapperRef.current?.offsetWidth ?? 1; // 컨테이너 너비 가져오기
    if (Math.abs(offset) > containerWidth / 2) {
      // 드래그한 거리가 슬라이드 너비의 1/4 이상이면 슬라이드 전환
      if (offset < 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    setDragging(false);
    setOffset(0);
  };

  useEffect(() => {
    if (autoPlay) {
      const interval = setInterval(() => {
        nextSlide();
      }, speed);
      return () => clearInterval(interval); // 컴포넌트가 언마운트되거나 드래그가 시작되면 클리어
    }
  }, []);

  return (
    <Container>
      <InnerContainer>
        <ArrowButton onClick={prevSlide}>
          <img src={left_arrow} width={15} />
        </ArrowButton>
        <Viewer width={style?.width ?? "100%"} height={style?.height ?? "100%"}>
          <Wrapper
            ref={wrapperRef}
            left={
              -currentIdx * 100 +
              (offset / (wrapperRef.current?.offsetWidth || 1)) * 100
            }
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            isDragging={dragging}
          >
            {children}
          </Wrapper>
        </Viewer>
        <ArrowButton onClick={nextSlide}>
          <img src={right_arrow} width={15} />
        </ArrowButton>
      </InnerContainer>
      <DotWrapper>
        <Dots length={totalSlides} currentIdx={currentIdx} />
      </DotWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

const Viewer = styled.div<{ width: string; height: string }>`
  width: 100%;
  height: 350px;
  border-radius: 3px;
  overflow: hidden;
  position: relative;
`;

const Wrapper = styled.div<{ left?: number; isDragging: boolean }>`
  position: absolute;
  top: 50%;
  left: ${(props) => props.left}%;
  transform: translateY(-50%);
  display: flex;
  width: 100%;
  transition: ${(props) =>
    props.isDragging ? "none" : "0.5s ease-in-out all"};
  cursor: grab;
  user-select: none;
`;

const ArrowButton = styled.button`
  width: 30px;
  height: 30px;
  background-color: ${({ theme }) => theme.colorPallte.gray200};
  opacity: 0.5;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DotWrapper = styled.div`
  margin-top: 20px;
`;
