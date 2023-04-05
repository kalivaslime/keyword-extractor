import {Box, Container} from '@chakra-ui/react'
import Header from './components/Header'
import Footer from './components/Footer'
import TextInput from './components/TextInput'

function App() {
  const extractKeywords = (text: string) => {
    console.log(text)
  }

  return (
    <Box bg='darker' color='light' height='100vh' paddingTop={130}>
      <Container maxW='3xl' centerContent>
        <Header />
        <TextInput extractKeywords={extractKeywords} />
        <Footer />
      </Container>
    </Box>
  )
}

export default App
