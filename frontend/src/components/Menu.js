import { Box, Button, Checkbox, Container, Heading, Stack } from "@chakra-ui/react";
import React from "react"

const Menu = ({ selectedCountries, onSelect }) => {
    return (
        <Container pos='fixed' bg='white' h='100%' w='sm' paddingTop='100px' zIndex='docked' borderRight='1px' borderColor='gray.200'>
            <Stack spacing={5}>
                <Box>
                    <Heading>Country</Heading>
                    <Checkbox
                        onChange={onSelect}
                        isChecked={selectedCountries.includes('USA')}
                    >
                        USA
                    </Checkbox>
                </Box>
                <Button>Submit</Button>
            </Stack>
        </Container>
    )
}

export default Menu;