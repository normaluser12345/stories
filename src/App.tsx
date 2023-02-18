import styled from "styled-components";
import { AppRouter } from "./components/AppRouter";

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
`

function App() {

  return (
    <AppContainer>
      <AppRouter />
    </AppContainer>
  );
}

export default App;
