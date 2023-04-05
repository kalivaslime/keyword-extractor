import {Box, Container} from '@chakra-ui/react'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <Box bg='darker' color='light' height='100vh' paddingTop={130}>
      <Container maxW='3xl' centerContent>
        <Header />
        <Footer />
      </Container>
    </Box>
  )
}

export default App
