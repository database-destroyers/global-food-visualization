import { useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import World from './components/World';
import Header from './components/Header';
import Menu from './components/Menu';
import theme from './theme';


function App() {
  const [countries, setCountries] = useState([]);

  return (
    <ChakraProvider theme={theme}>
      <div className="App">
        <Header />
        <Menu 
          selectedCountries={countries} 
          onSelect={(e) => setCountries(['USA'])} 
        />
        <World 
          selectedCountries={countries} 
          onSelect={(e) => setCountries(['USA'])}
        />
      </div>
    </ChakraProvider>
  );
}

export default App;
