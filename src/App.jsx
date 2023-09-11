import styled from "@emotion/styled"

function App() {  

  return (
    <>
      <Title primary>Space tourism website</Title>
      <Title >Space tourism website</Title>
    </>
  )
}

export default App

const Title = styled.h1`
  color: ${props => (props.primary ? 'red' : 'blue')};
`