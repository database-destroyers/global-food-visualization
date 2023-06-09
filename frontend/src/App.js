import { useState } from "react";
import {
  Box,
  ChakraProvider,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
} from "@chakra-ui/react";
import * as iso_countries from "i18n-iso-countries";
import axios from "axios";

import "./App.css";
import World from "./components/World";
import Header from "./components/Header";
import Menu from "./components/Menu";
import theme from "./theme";
import Graph from "./components/Graph";

iso_countries.registerLocale(require("i18n-iso-countries/langs/en.json"));

const baseURL = "http://localhost:5000/";

const countryList = {
  AM: "Armenia",
  AZ: "Azerbaijan",
  EG: "Egypt",
  GT: "Guatemala",
  PR: "Peru",
  RW: "Rwanda",
  TJ: "Tajikistan",
  TR: "Turkey",
  UG: "Uganda",
  UA: "Ukraine",
  ZM: "Zambia",
  ZW: "Zimbabwe",
};

function App() {
  const [countries, setCountries] = useState({});
  const [displayGraph, setDisplayGraph] = useState(false);
  const [yearRange, setYearRange] = useState([1990, 2020]);
  const [foodItems, setFoodItems] = useState([]);

  const updateCountries = (key) => {
    console.log(key);
    if (key in countries) {
      let newCountries = {
        ...countries,
      };
      delete newCountries[key];
      setCountries(newCountries);
    } else {
      let newCountry = { [key]: iso_countries.getName(key, "en") };
      setCountries((countries) => ({
        ...countries,
        ...newCountry,
      }));
    }
  };

  const updateYears = (val) => {
    setYearRange(val);
  };

  const updateFoodItems = (val) => {
    const i = foodItems.indexOf(val);
    let array = [...foodItems];
    if (i === -1) {
      setFoodItems([...array, val]);
    } else {
      array.splice(i, 1);
      setFoodItems(array);
    }
  };

  const getData = () => {
    // GET request to different URL depending on query
    axios.get(`${baseURL}inflationRate`).then((res) => {
      console.log(res.data);
    });
  };

  const handleSubmit = () => {
    getData();
    setDisplayGraph(true);
  };

  const onClose = () => {
    setDisplayGraph(false);
  };

  const renderCountryList = Object.keys(countries).map((key, i) =>
    i === Object.keys(countries).length - 1 ? (
      <span>{countries[key]}</span>
    ) : (
      <span>{countries[key]}, </span>
    )
  );

  return (
    <ChakraProvider theme={theme}>
      <div className="App">
        <Header />
        <Menu
          countryList={countryList}
          selectedCountries={countries}
          selectedYears={yearRange}
          selectedFoodItems={foodItems}
          onSelectCountry={updateCountries}
          onSelectYears={updateYears}
          onSelectFoodItems={updateFoodItems}
          onSubmit={handleSubmit}
        />
        <Modal isOpen={displayGraph} onClose={onClose} isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Visualization Output</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Stack>
                <Box>Selected Countries: {renderCountryList}</Box>
              </Stack>
              <Graph></Graph>
            </ModalBody>
          </ModalContent>
        </Modal>
        <World
          countryList={countryList}
          selectedCountries={countries}
          onSelect={updateCountries}
        />
      </div>
    </ChakraProvider>
  );
}

export default App;
