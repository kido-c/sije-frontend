import React, { useMemo } from "react";
import styled from "styled-components";

interface Props {
  length: number;
  currentIdx: number;
}

export default function Dots({ length, currentIdx }: Props) {
  const dots = useMemo(() => Array.from({ length }, (_, i) => i), []);

  return (
    <Container>
      {dots.map((_, idx) => (
        <Dot isActive={currentIdx === idx} />
      ))}
    </Container>
  );
}

const Dot = styled.div<{ isActive: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ theme, isActive }) =>
    isActive ? theme.colorPallte.gray200 : theme.defaultColor.white};
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;
