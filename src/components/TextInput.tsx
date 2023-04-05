import {useState} from 'react'
import {Button, Textarea} from '@chakra-ui/react'
import {useToast} from '@chakra-ui/react'

function TextInput({
  extractKeywords = console.log,
}: {
  extractKeywords?: (text: string) => void
}): JSX.Element {
  const [text, setText] = useState('')
  const toast = useToast()

  const submitText = () => {
    if (!text) {
      toast({
        title: 'No text to submit',
        description: 'Yo doge, you gotta paste in some text first',
        status: 'error',
        duration: 5000,
        isClosable: true,
        containerStyle: {
          bg: 'red',
          color: 'white',
        },
      })
      return
    }

    extractKeywords(text)
  }

  return (
    <>
      <Textarea
        bg='dark'
        color='light'
        border='none'
        // borderColor='pink'
        // _hover={{borderColor: 'pink'}}
        padding={4}
        marginTop={6}
        height={200}
        value={text}
        onChange={e => setText(e.target.value)}
      />

      <Button
        bg='dark'
        color='light'
        marginTop={4}
        width='100%'
        _hover={{bg: '#52556c'}}
        onClick={submitText}
      >
        Extract Keywords
      </Button>
    </>
  )
}

// function TextInput() {
//   const [text, setText] = useState('')
//   const submitText = () => {
//     console.log('submitting text', text)

//     return (
//       <>
//         <Textarea
//           bg='dark'
//           color='light'
//           padding={4}
//           marginTop={6}
//           height={200}
//           value={text}
//           onChange={e => setText(e.target.value)}
//         />

//         <Button
//           bg='pink'
//           color='light'
//           marginTop={4}
//           width='100%'
//           _hover={{bg: 'purple'}}
//           onClick={submitText}
//         >
//           Extract Keywords
//         </Button>
//       </>
//     )
//   }
// }

export default TextInput
