import React from 'react';
import { Link } from 'react-router-dom';

export default function SideBar( props ) {
    const countriesToRender = props.countries.map(country => {
        return <Link key={country.cca3} className="list-group-item list-group-item-action" to={`/${country.cca3}`}>{country.cca2} {country.name.official}</Link>
    })
    return (
        <div className="list-group">
            {countriesToRender}
        </div>
    )
}
