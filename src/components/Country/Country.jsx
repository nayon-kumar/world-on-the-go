import React from "react";
import "./Country.css";
import { useState } from "react";

const Country = ({ country, handleVisitedCountries }) => {
  const [visited, setVisited] = useState(false);
  const handleVisited = () => {
    if (visited) {
      setVisited(false);
    } else {
      setVisited(true);
    }
    handleVisitedCountries(country);
  };
  return (
    <div className={`country ${visited && "visited"}`}>
      <img src={country.flags?.flags.png} alt={country.flags?.flags?.alt} />
      <h3>Name: {country.name.common}</h3>
      <p>Official Name: {country.name?.official}</p>
      <p>Capital: {country.capital?.capital}</p>
      <p>Region: {country.region?.region}</p>
      <p>Population: {country.population?.population}</p>
      <p>Continents: {country.continents?.continents}</p>
      <p>
        Area: {country.area.area}{" "}
        {country.area?.area > 30000 ? "(Big Country)" : "(Small Country)"}
      </p>
      <button onClick={handleVisited} className="button">
        {visited ? "Visited" : "Not visited"}
      </button>
    </div>
  );
};

export default Country;
