import React, { use } from "react";
import Country from "../Country/Country";
import "./Countries.css";
import { useState } from "react";

const Countries = ({ countriesPromise }) => {
  const [visitedCountries, setVisitedCountries] = useState([]);
  const handleVisitedCountries = (country) => {
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };

  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;
  return (
    <div>
      <h1>Total Countries: {countries.length}</h1>
      <h2>Total Countries Visited: {visitedCountries.length}</h2>
      <ol>
        {visitedCountries.map((country) => (
          <li key={country.cca3.cca3}>{country.name.common}</li>
        ))}
      </ol>
      <div className="countries">
        {countries.map((country) => (
          <Country
            key={country.cca3.cca3}
            country={country}
            handleVisitedCountries={handleVisitedCountries}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
