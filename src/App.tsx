import { styled } from "styled-components";
import Header from "./components/Header";

function App() {
  return (
    <Container>
      <Header />
      <Warpper>content</Warpper>
    </Container>
  );
}

export default App;

const Container = styled.div``;

const Warpper = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0 30px;
`;
