import { Radio, RadioGroup } from '@chakra-ui/react'
import {
  Button,
  Checkbox,
  Container,
  Heading,
  RangeSliderMark,
  Stack,
} from "@chakra-ui/react";
import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
} from "@chakra-ui/react";
import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

import React, { useEffect, useState } from "react";
import * as iso_countries from "i18n-iso-countries";

const Menu = ({
  countryList,
  selectedCountries,
  selectedFoodItems,
  selectedYears,
  selectedQuery,
  onSelectCountry,
  onSelectYears,
  onSelectFoodItems,
  
  onSubmit,
}) => {
  const [countries, setCountries] = useState({});
  const [foodItems, setFoodItems] = useState([]);

  useEffect(() => {
    setCountries(countryList);
    setFoodItems([
      "Maize",
      "Cassava",
      "Yams",
      "Wheat",
      "Rice",
      "Sweet Potatoes",
      "Potatoes",
      "Soybeans",
      "Plantains",
      "Sorghum",
    ]);
 
    console.log(countries);
  }, []);

  return (
    <Container
      pos="fixed"
      bg="white"
      h="100%"
      w="sm"
      paddingTop="100px"
      zIndex="docked"
      borderRight="1px"
      borderColor="gray.200"
    >
      <Stack spacing={5} overflowY="auto" h="100%">
        <Accordion allowToggle>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  <Heading variant="heading" fontSize="2xl">
                    Country/Region
                  </Heading>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Stack h="50%" overflowY="auto">
                {Object.keys(countries).map((key) => {
                  return (
                    <Checkbox
                      onChange={(e) => onSelectCountry(key)}
                      isChecked={key in selectedCountries}
                      key={key}
                    >
                      {countries[key]}
                    </Checkbox>
                  );
                })}
              </Stack>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  <Heading variant="heading" fontSize="2xl">
                    {" "}
                    Food Item
                  </Heading>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={1} textAlign="left">
              {foodItems.map((f) => (
                <>
                  <Checkbox
                    defaultunChecked
                    onChange={(e) => onSelectFoodItems(f)}
                    isChecked={selectedFoodItems.indexOf(f) !== -1}
                  >
                    {f}
                  </Checkbox>
                  <br></br>
                </>
              ))}
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  <Heading variant="heading" fontSize="2xl">
                    Year Range
                  </Heading>
                </Box>

                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={15}>
              <br></br>
              <RangeSlider
                defaultValue={[1990, 2020]}
                min={1990}
                max={2020}
                step={1}
                onChange={(val) => onSelectYears(val)}
              >
                <RangeSliderMark value={1990} mt="2" ml="-3" fontSize="sm">
                  1990
                </RangeSliderMark>
                <RangeSliderMark value={2020} mt="2" ml="-6" fontSize="sm">
                  2020
                </RangeSliderMark>
                <RangeSliderMark
                  value={selectedYears[0]}
                  textAlign="center"
                  color="teal"
                  mt="-10"
                  ml="-5"
                  w="9"
                >
                  {selectedYears[0]}
                </RangeSliderMark>
                <RangeSliderMark
                  value={selectedYears[1]}
                  textAlign="center"
                  color="teal"
                  mt="-10"
                  ml="-5"
                  w="9"
                >
                  {selectedYears[1]}
                </RangeSliderMark>
                <RangeSliderTrack bg="teal.100">
                  <RangeSliderFilledTrack bg="teal" />
                </RangeSliderTrack>
                <RangeSliderThumb boxSize={6} index={0}>
                  <Box color="teal" />
                </RangeSliderThumb>
                <RangeSliderThumb boxSize={6} index={1}>
                  <Box color="teal" />
                </RangeSliderThumb>
              </RangeSlider>
            </AccordionPanel>
          </AccordionItem>

    

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  <Heading variant="heading" fontSize="2xl">
                    {" "}
                    Analysis
                  </Heading>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={1} textAlign="left">
              <Checkbox defaultunChecked>Analysis 1</Checkbox>
              <br></br>

              <Checkbox defaultunChecked>Analysis 2</Checkbox>
              <br></br>
            </AccordionPanel>

            <AccordionPanel pb={1} textAlign="center">
              <Checkbox defaultunChecked> Aggregate data?</Checkbox>
              <br></br>
            </AccordionPanel>
          </AccordionItem>

        
        </Accordion>


        <Button onClick={onSubmit}>Submit</Button>
      </Stack>
    </Container>
  );
};

export default Menu;
