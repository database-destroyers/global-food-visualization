import { useState } from 'react';
import { Box, ChakraProvider, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Stack } from '@chakra-ui/react';
import * as iso_countries from 'i18n-iso-countries';
import axios from 'axios';

import './App.css';
import World from './components/World';
import Header from './components/Header';
import Menu from './components/Menu';
import theme from './theme';
import Graph from './components/Graph';

iso_countries.registerLocale(require("i18n-iso-countries/langs/en.json"));

const baseURL = "http://localhost:5000/";

function App() {
  const [countries, setCountries] = useState({});
  const [displayGraph, setDisplayGraph] = useState(false);

  const updateCountries = (key) => {
    console.log(key);
    if (key in countries) {
      let newCountries = {
        ...countries
      };
      delete newCountries[key];
      setCountries(newCountries);
    } else {
      let newCountry = { [key]: iso_countries.getName(key, 'en') }
      setCountries(countries => ({
        ...countries,
        ...newCountry
      }));
    }
  };

  const getData = () => {
    // GET request to different URL depending on query
    axios.get(`${baseURL}inflationRate`).then((res) => {
      console.log(res.data);
    })
  }

  const handleSubmit = () => {
    getData();
    setDisplayGraph(true);
  }

  const onClose = () => {
    setDisplayGraph(false);
  }

  const renderCountryList = (
    Object.keys(countries).map((key, i) => (
      i === Object.keys(countries).length - 1 ?
        <span>{countries[key]}</span> :
        <span>{countries[key]}, </span> 
    ))
  );

  return (
    <ChakraProvider theme={theme}>
      <div className="App">
        <Header />
        <Menu
          selectedCountries={countries}
          onSelect={updateCountries}
          onSubmit={handleSubmit}
        />
        <Modal isOpen={displayGraph} onClose={onClose} isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Visualization Output</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Stack>
                <Box>
                  Selected Countries: {renderCountryList}
                </Box>
              </Stack>
              <Graph></Graph>
            </ModalBody>
          </ModalContent>
        </Modal>
        <World
          selectedCountries={countries}
          onSelect={updateCountries}
        />
      </div>
    </ChakraProvider>
  );
}

export default App;
