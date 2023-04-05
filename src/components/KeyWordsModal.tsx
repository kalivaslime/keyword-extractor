import {
  Text,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  CircularProgress,
} from '@chakra-ui/react'
import {useToast} from '@chakra-ui/react'

const KeywordsModal = ({
  keywords,
  loading,
  isOpen,
  closeModal,
}: {
  keywords: string
  loading: boolean
  isOpen: boolean
  closeModal: () => void
}) => {
  const toast = useToast()
  const copyToClipboard = () => {
    navigator.clipboard.writeText(keywords)
    toast({
      title: 'Copied to clipboard',
      status: 'success',
      duration: 1000,
      isClosable: true,
      containerStyle: {
        bg: 'pink',
        color: 'white',
      },
    })
  }
  return (
    <>
      <Modal isCentered isOpen={isOpen} onClose={closeModal}>
        <ModalOverlay bg='blackAlpha.100' backdropFilter='blur(10px)' />
        <ModalContent bg='darker' color='light'>
          <ModalHeader
            fontWeight='bold'
            textAlign='center'
            fontSize='2xl'
            color='pink'
          >
            Keywords
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody display='flex' alignItems='center' justifyContent='center'>
            {loading ? (
              <CircularProgress isIndeterminate color='pink' />
            ) : (
              <Text fontWeight='bold'>{keywords}</Text>
            )}
          </ModalBody>
          <ModalFooter>
            <Button
              bg='pink'
              colorScheme='pink'
              mr={3}
              onClick={copyToClipboard}
            >
              Copy
            </Button>
            <Button bg='pink' colorScheme='pink' mr={3} onClick={closeModal}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
export default KeywordsModal
