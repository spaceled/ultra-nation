import React from 'react';

const Country = (props) => {
    const {name, population, region, capital, flags} = props.country;
    const flagStyle = {height: '50px'}
    const countryStyle = {border: '1px solid red', margin: '10px', padding: '10px'};
    const handleAddCountry = props.handleAddCountry;
    return (
        <div style={countryStyle}>
            <h4>{name.common}</h4>
            <img style={flagStyle} src={flags.svg} alt="" />
            <p>Population: {population}</p>
            <p><small>Region: {region}</small></p>
            <p>Capital: {capital}</p>
            <button onClick={() => handleAddCountry(props.country.name)}>Add Country</button>
        </div>
    );
};

export default Country;