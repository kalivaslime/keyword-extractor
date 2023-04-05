import {Box, Text, Image, Flex} from '@chakra-ui/react'
import logo from '../assets/openai.svg'

function Footer() {
  return (
    <Box marginTop={50}>
      <Flex justifyContent='center' alignItems='center'>
        <Image src={logo} height={7} marginRight={3} />
        <Text>Powered By Open AI</Text>
      </Flex>
    </Box>
  )
}
export default Footer
