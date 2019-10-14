import React from 'react';
import { Link, Router } from 'react-router-dom';

export default function CountryDetail( props ) {

    const myCountry = props.countries
    .filter(country => country.cca3 === props.location.pathname.slice(1))[0]
    console.log(myCountry)
    return (
        <div> 
            <h1>{myCountry.name.official}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{width: "30%"}}>Capital</td>
                  <td>{myCountry.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>{myCountry.area} km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                      {myCountry.borders.map(link =>  <li key={link}><Link  to={`/${link}`}>{
                        props.countries
                        .filter(country => country.cca3 === link)[0].name.official
                        }</Link></li>
                      )}
                     
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
        </div>
    )
}
