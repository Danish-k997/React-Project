import { Icon, Button, CloseButton, Drawer, Portal, Box } from "@chakra-ui/react"
import {TiThMenuOutline} from 'react-icons/ti'
import Sidebar from "./Sidebar"
const Sidedrop = () => {
  return (
    <Drawer.Root>
      <Drawer.Trigger asChild>
        <Button variant="outline" py="25px" size="lg" display={{
          base:"block",
          lg:"none"
        }}  >     
        <Icon size="lg" as={ TiThMenuOutline }/>  
        </Button>
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            
            <Drawer.Body>
              <Box>
             <Sidebar />
              </Box>
            </Drawer.Body>
           
            <Drawer.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  )
}
export default Sidedrop