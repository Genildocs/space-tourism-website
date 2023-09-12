import {Outlet} from "react-router-dom";
import styled from "@emotion/styled";

function App() {  

  return (
    <Container>
        <Outlet />
    </Container>
  )
}

export default App

const Container = styled.div`
  min-height: 100vh;
`
