import React, { useEffect } from "react";
import right_arrow from "../../assets/icons/right_arrow.png";
import left_arrow from "../../assets/icons/left_arrow.png";

import styled from "styled-components";
import Dots from "./components/Dots";

interface Props {
  infinite?: boolean;
  speed?: number;
  autoPlay?: boolean;
  dots?: boolean;
  children: React.ReactNode;
}

export default function Carousel({
  children,
  autoPlay = false,
  speed = 2000,
}: Props) {
  const wrapperRef = React.useRef<HTMLDivElement>(null);

  const [currentIdx, setCurrentIdx] = React.useState(0);
  const [startX, setStartX] = React.useState(0);
  const [dragging, setDragging] = React.useState(false);
  const [offset, setOffset] = React.useState(0);

  const totalSlides = React.Children.count(children);

  const maxLeft = totalSlides - 1;

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

    const containerWidth = wrapperRef.current?.offsetWidth ?? 1;
    if (Math.abs(offset) > containerWidth / 2) {
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
      return () => clearInterval(interval);
    }
  }, [autoPlay, speed, nextSlide]);

  return (
    <Container>
      <InnerContainer>
        <ArrowButton onClick={prevSlide}>
          <img src={left_arrow} width={15} alt="이전 이미지 버튼" />
        </ArrowButton>
        <Viewer>
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
            $isDragging={dragging}
          >
            {React.Children.map(children, (child) => (
              <ImageWrapper>
                {child} {/* 자식 요소가 이미지일 경우 렌더링 */}
              </ImageWrapper>
            ))}
          </Wrapper>
        </Viewer>
        <ArrowButton onClick={nextSlide}>
          <img src={right_arrow} width={15} alt="다음 이미지 버튼" />
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
  align-items: center;
`;

const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

const Viewer = styled.div`
  position: relative;
  width: 100%;
  height: 350px;
  border-radius: 3px;
  overflow: hidden;
`;

const Wrapper = styled.div<{ left?: number; $isDragging: boolean }>`
  position: relative;
  width: 100%;
  left: ${(props) => props.left}%;
  display: flex;
  transition: ${(props) =>
    props.$isDragging ? "none" : "0.5s ease-in-out all"};
  cursor: grab;
  user-select: none;
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 350px;
  flex: 0 0 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const ArrowButton = styled.button`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colorPallte.gray200};
  opacity: 0.5;
  border-radius: 50%;
`;

const DotWrapper = styled.div`
  margin-top: 20px;
`;
