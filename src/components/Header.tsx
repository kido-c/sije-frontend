import { styled } from "styled-components";

export default function Header() {
  return (
    <Container>
      <Title>SIJE</Title>
      <NavList>
        <li>Gallery</li>
      </NavList>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  padding: 16px 80px;
`;

const Title = styled.h1`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.large};
  flex: 1 0 0px;
`;

const NavList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.medium};
`;
