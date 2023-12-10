import { Box, Container, Heading } from '@chakra-ui/react';
import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Image } from '@chakra-ui/react';
import { Stack } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.jpg';

const headingOptions = {
    pos:'absolute',
    left :'50%',
    top :'50%',
    transform : 'translate(-50%, -50%)',
    textTransform : 'uppercase',
    p:'4',
    size : "3xl"

}

const Home = () => {
  return <Box>
        
        <MyCarousel/>
            <Container maxW={'container.xl'} minH={'100vh'}>
                        <Heading 
                        textTransform={'uppercase'} 
                        py="2" w={'fit-content'} 
                        borderBottom={"2px solid"} 
                        m={'auto'}>
                        Services
                        </Heading>

                        <Stack
                        h="full"
                        alignItems={"center"}
                        direction={['column','row']}
                        >
                                <Image src={img5} h={['40','400']} filter={'hue-rotation(-130deg)'}/>
                                <Text letterSpacing={'widest'} lineHeight={"190%"} p={["4","16"]} textAlign={"center"}>
                                Embrace the next level of gaming with our cutting-edge services that redefine the future of interactive entertainment. We are passionate about delivering unparalleled gaming experiences that immerse players in a world where innovation knows no bounds. The future of gaming is evolving, and we invite you to be a part of it. Join us on this extraordinary journey where the lines between reality and imagination blur, and gaming becomes an unparalleled adventure.

                                Ready to redefine your gaming experience? Explore our services and step into the future of gaming.
                                </Text>
                        </Stack>
            </Container>
  </Box> ;
}

export default Home

const MyCarousel = () => (

    <Carousel autoPlay infiniteLoop showStatus={false} interval={1000} showThumbs={false} showArrows={false}>
        
        <Box w="full" h={'100vh'}>
                <Image src={img1}/>
                <Heading bgColor={"blackAlpha.600"} color={'white'}{...headingOptions}>Watch The Future</Heading>
        </Box>
        
        <Box w="full" h={'100vh'}>
                <Image src={img2}/>
                <Heading bgColor={"blackAlpha.600"} color={'white'} {...headingOptions}>Future is Gaming</Heading>
        </Box>

        <Box w="full" h={'100vh'}>
                <Image src={img3}/>
                <Heading bgColor={"blackAlpha.600"} color={'white'} {...headingOptions}>Gaming on Console</Heading>
        </Box>

        <Box w="full" h={'100vh'}>
                <Image src={img4}/>
                <Heading bgColor={"blackAlpha.600"} color={'white'} {...headingOptions}>Night LA</Heading>
        </Box>

        </Carousel>
)