import './App.css';
// import countries from './countries.json';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get('https://ih-countries-api.herokuapp.com/countries')
      .then((response) => {
        setCountries(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container">
      <div className="row">
        <Navbar />
        <CountriesList allCountries={countries} />
        <Routes>
          <Route
            path="/:countryCode"
            element={<CountryDetails allCountries={countries} />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
