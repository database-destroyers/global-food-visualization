import React from "react"
import { Flex, Heading } from "@chakra-ui/react"

const Header = () => {
    return (
        <Flex pos='fixed' bg='white' w='100%' h='fit-content' p={4} color='gray.500' borderBottom='1px' borderColor='gray.200' zIndex='banner'>
            <Heading variant='title'>Global Food Economics Visualization Tool</Heading>
        </Flex>
    )
}

export default Header;