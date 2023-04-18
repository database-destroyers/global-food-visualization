import { Button, Checkbox, Container, Heading, Stack } from "@chakra-ui/react";
import {RangeSlider, RangeSliderTrack, RangeSliderFilledTrack, RangeSliderThumb } from '@chakra-ui/react'
import { Box,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react'
  import { Text } from '@chakra-ui/react'
  import { Input } from '@chakra-ui/react'
  
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
            
                <Accordion  allowToggle>
                <AccordionItem>
               
                    <h2>
                    <AccordionButton>
                        <Box as="span" flex='1' textAlign='left' >
                        <Heading variant='heading'fontSize='2xl'>Country/Region</Heading> 
                        
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                    <Input placeholder='Search' />
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
                    </AccordionPanel>
                    
                </AccordionItem>          

               
                
                
    

                <AccordionItem>
                    <h2>
                    <AccordionButton>
                        <Box as="span" flex='1' textAlign='left'>
                        <Heading variant='heading'fontSize='2xl'> Food Item</Heading> 
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={1} textAlign='left'>
                    <Input placeholder='Search' />
                    
                    <Checkbox defaultunChecked>food item 1</Checkbox>
                    <br>
                    </br>
                    <Checkbox defaultunChecked>food item 2</Checkbox>
                    <br>
                    </br>
                    <Checkbox defaultunChecked>food item 3</Checkbox>
                    <br>
                    </br>
                    <Checkbox defaultunChecked>food item 1</Checkbox>
                    <br>
                    </br>
                    <Checkbox defaultunChecked>food item 2</Checkbox>
                    <br>
                    </br>
                    <Checkbox defaultunChecked>food item 3</Checkbox>
                    <br>
                    </br>

                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                    <AccordionButton>
                        <Box as="span" flex='1' textAlign='left' >
                        <Heading variant='heading'fontSize='2xl'>Year Range</Heading> 
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                    <RangeSlider defaultValue={[120, 240]} min={0} max={300} step={30}>
                    <RangeSliderTrack bg='blue.100'>
                    <RangeSliderFilledTrack bg='teal' />
                    </RangeSliderTrack>
                    <RangeSliderThumb boxSize={6} index={0} />
                    <RangeSliderThumb boxSize={6} index={1} />
                    </RangeSlider>
                    </AccordionPanel>
                </AccordionItem>


                <AccordionItem>
                    <h2>
                    <AccordionButton>
                        <Box as="span" flex='1' textAlign='left'>
                        <Heading variant='heading'fontSize='2xl'> Analysis</Heading> 
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={1} textAlign='left'>
                   
                    <Checkbox defaultunChecked>analysis 1</Checkbox>
                    <br>
                    </br>
                 
                    <Checkbox defaultunChecked>analysis 2</Checkbox>
                    <br>
                    </br>
                    </AccordionPanel>

                    <AccordionPanel pb={1} textAlign='center'>
                    <Checkbox defaultunChecked > Aggregate data?</Checkbox>
                    <br>
                    </br>
                                
                 

                    </AccordionPanel>
                </AccordionItem>

                </Accordion>

                <Button onClick={onSubmit}>Submit</Button>
            </Stack>
        </Container>

        
    )
}

export default Menu;