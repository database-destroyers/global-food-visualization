import { useEffect, useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import * as iso_countries from 'i18n-iso-countries';

import './App.css';
import World from './components/World';
import Header from './components/Header';
import Menu from './components/Menu';
import theme from './theme';

iso_countries.registerLocale(require("i18n-iso-countries/langs/en.json"));

function App() {
  const [countries, setCountries] = useState({});

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

  return (
    <ChakraProvider theme={theme}>
      <div className="App">
        <Header />
        <Menu
          selectedCountries={countries}
          onSelect={updateCountries}
        />
        <World
          selectedCountries={countries}
          onSelect={updateCountries}
        />
      </div>
    </ChakraProvider>
  );
}

export default App;
