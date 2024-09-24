import { NavLink } from "react-router-dom"

function CountryCard({data}) {
    const {flags,name,population,region,capital} = data
  return (
    <li className="country-card  card ">
      <div className="container-card bg-white-box">
        <img src={flags.svg} alt={flags.alt} />

        <div className="countryInfo">
          <p className="card-title">
           {name.common.length > 10 ? `${name.common.slice(0,11)} ...` : name.common}
          </p>
          <p>
            <span className="card-description">Population:</span>
            {population.toLocaleString()}
          </p>
          <p>
            <span className="card-description">Region:</span> {region}
          </p>
          <p>
            <span className="card-description">Capital:</span>
            {capital[0]}
          </p>

            <NavLink to={`/country/${name.common}`}><button>Read More</button></NavLink>
         
        </div>
      </div>
    </li>
  )
}

export default CountryCard
