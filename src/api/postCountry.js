import axios from "axios";

const api = axios.create({
  baseURL: "https://restcountries.com/v3.1",
   // timeout: 10000, // optional options if you want to time out request after 10sec
    // headers: { "Content-Type": "application/json" },
});

// HTTP GET METHOD
export const getCountryData = () => {
  return api.get("/all?fields=name,population,region,capital,flags");
};

export const particularGetCountryData = (name) => {
  return api.get(
    `/name/${name}?fullText=true&fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`
  );
};
