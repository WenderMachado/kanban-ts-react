import { PlusIcon } from "@radix-ui/react-icons"
import { Box, Button, Flex, Heading } from "@radix-ui/themes"

function App() {


  return (
    <Box maxWidth= "80-rem" mx="auto">
      <Box height="4rem">
        <Flex align= "center" gap="4" height="100%">
          <Heading as="h1" size="8" weight="light">React Kanban</Heading>
          <Button> 
            <PlusIcon/>Nova Tarefa
          </Button>
        </Flex>
      </Box>

      <Box>
        <Heading as="h2" >Quadro de Tarefas</Heading>
      </Box>

    </Box>
  )
}

export default App
