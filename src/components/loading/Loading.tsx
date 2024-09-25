import styled from "styled-components";

export default function Loading() {
  return (
    <Container className="loading-container">
      <Spinner className="spinner"></Spinner>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
`;

const Spinner = styled.div`
  border: 8px solid #f3f3f3;
  border-top: ${({ theme }) => `8px solid ${theme.colorPallte.gray200}`};
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
