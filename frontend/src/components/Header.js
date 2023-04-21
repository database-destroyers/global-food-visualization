import React from "react"
import { Flex, Heading, IconButton } from "@chakra-ui/react"
import { InfoIcon } from "@chakra-ui/icons";

const Header = ({ handleInfoClick }) => {

    return (
        <Flex pos='fixed' justifyContent='space-between' bg='white' w='100%' h='fit-content' p={4} color='gray.500' borderBottom='1px' borderColor='gray.200' zIndex='banner'>
            <Heading variant='title' ml={2}>Global Food Economics Visualization Tool</Heading>
            <IconButton onClick={handleInfoClick} colorScheme='teal' aria-label='Get tuple count' icon={<InfoIcon />} borderRadius={10} size='lg' />
        </Flex>
    )
}

export default Header;