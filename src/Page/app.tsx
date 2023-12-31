import styled from "styled-components";

import IOS from "ios";
import { Controls } from "./Components/Controls";
import { Description } from "./Components/Description";

const App = () => {
  return (
    <>
      <Container>
        <div />
        <IOS />
        <Controls />
      </Container>
      <Description />
    </>
  );
};

export default App;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  margin-top: 64px;

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, auto);
  }
`;
