import React from 'react';

const Country = (props) => {
    const {name, region, flags, population} = props.name;
    const loadCountries = props.loadCountries;
    // console.log(props);
    return (
        <div>
            <h3>country name:  <small><i>{name.common}</i></small>   </h3>
            <img src={flags.png} alt="" />
            <h4>region:  {region} </h4>
            <p>total population: {population}</p>
            <button onClick={() => loadCountries(props.name)}>click</button>
            
        </div>
    );
};

export default Country;