import { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../api/postCountry";
import CountryCard from "../Country Components/CountryCard";
import Loading from "../Components/Loading";
import { nanoid } from "nanoid";
import SearchFilter from "../Country Components/SearchFilter";

function Country() {
  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState([]);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      setCountry(res.data);
    });
  }, []);

  if (isPending) return <Loading />;

  function searchSection(countries) {
    if (search) {
      return countries.name.common.toLowerCase().includes(search.toLowerCase());
    }
    return countries;
  }

  function filterRegion(countries) {
    if (filter === "all") return countries;
    return countries.region === filter;
  }

  const filterCountries = country.filter(
    (countries) => searchSection(countries) && filterRegion(countries)
  );


  return (
    <section className="country-section">
      <SearchFilter
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
        country={country}
        setCountry={setCountry}
      />

      {filterCountries.length === 0 ? (
        <h1 className="no-search-found">No Search Found</h1>
      ) : (
        <ul className="grid grid-four-cols">
          {filterCountries.map((data) => (
            <CountryCard key={nanoid()} data={data} />
          ))}
        </ul>
      )}
    </section>
  );
}

export default Country;
