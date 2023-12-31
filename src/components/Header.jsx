import React from 'react'
import {Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, Button, useDisclosure } from "@chakra-ui/react"
import {Link} from "react-router-dom"
import {BiMenuAltLeft} from "react-icons/bi"
import { VStack } from '@chakra-ui/react'
import { HStack } from '@chakra-ui/react'


const Header = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
    <Button zIndex={"overlay"} pos={"fixed"} top={"4"} left={"4"} colorScheme={"purple"} p={"0"} w={"10"} h={'10'} borderRadius={"full"} 
    onClick={onOpen} > 
        <BiMenuAltLeft size={'20'}/>
    </Button>
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay/>
        <DrawerContent>
            <DrawerCloseButton/>
            <DrawerHeader>Video Center</DrawerHeader>
            <DrawerBody>
                <VStack alignItems={'flex-start'}>
                    <Button onClick={onClose} variant={'ghost'} colorScheme='purple'>
                        <Link to={'/'}>Home</Link>
                    </Button>

                    <Button onClick={onClose} variant={'ghost'} colorScheme='purple'>
                        <Link to={'/videos'}>Videos</Link>
                    </Button>

                    <Button onClick={onClose} variant={'ghost'} colorScheme='purple'>
                        <Link to={'/videos?category=free'}>Free Videos</Link>
                    </Button>

                    <Button onClick={onClose} variant={'ghost'} colorScheme='purple'>
                        <Link to={'/upload'}>Upload video</Link>
                    </Button>
                </VStack>

                <HStack pos={"absolute"} bottom={"10"} left={"0"} w={"full"} justifyContent={"space-evenly"}>

                    <Button colorScheme={'purple'} onClick={onClose}>
                        <Link to={'/login'}>Login in</Link>
                    </Button>

                     <Button colorScheme={'purple'} variant={'outline'} onClick={onClose}>
                        <Link to={'signup'}>Sign Up</Link>
                    </Button>

                </HStack>

            </DrawerBody>
        </DrawerContent>
    </Drawer>
    </>
  )
}

export default Header