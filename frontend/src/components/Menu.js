import { Button, Checkbox, Container, Heading, Stack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react"
import * as iso_countries from 'i18n-iso-countries';

const Menu = ({ selectedCountries, onSelect, onSubmit }) => {
    const [countries, setCountries] = useState({});

    useEffect(() => {
        setCountries(iso_countries.getNames('en'));
        console.log(countries);
    }, []);

    return (
        <Container pos='fixed' bg='white' h='100%' w='sm' paddingTop='100px' zIndex='docked' borderRight='1px' borderColor='gray.200'>
            <Stack spacing={5} overflowY='auto' h='100%'>
                <Heading variant='menu-heading'>Country</Heading>
                <Stack h='50%' overflowY='auto'>
                        {
                            Object.keys(countries).map((key) => {
                                return <Checkbox
                                    onChange={(e) => onSelect(key)}
                                    isChecked={key in selectedCountries}
                                    key={key}
                                >
                                    {countries[key]}
                                </Checkbox>
                            })
                        }
                </Stack>
                <Button onClick={onSubmit}>Submit</Button>
            </Stack>
        </Container>
    )
}

export default Menu;