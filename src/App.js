import "./App.css";
import {
  BrowserRouter,
  Route,
  Switch,
  useParams,
  useHistory,
} from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchCases, fetchData } from "./api";
import Confirmed from "./Confirmed";

const App = () => {
  const [selectedCountry, setSelectedCountry] = useState("united-kingdom");
  const [countries, setCountries] = useState([]);
  const [countryData, setCountryData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchData().then((result) => {
      const sortAlphabetically = (a, b) => (a.Country < b.Country ? -1 : 0);
      setCountries([...result].sort(sortAlphabetically));
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    if (countryData[selectedCountry]) return;
    setLoading(true);
    fetchCases(selectedCountry).then((result) => {
      console.log(result);
      setCountryData({ ...countryData, [selectedCountry]: result });
      setLoading(false);
    });
    console.log(countries);
  }, [countryData, countries, selectedCountry]);
  return loading ? (
    <h1>Loading...</h1>
  ) : (
    <BrowserRouter>
      <div className="app">
        <h1>Covid-19</h1>
        <select
          value={selectedCountry}
          onChange={(event) => setSelectedCountry(event.target.value)}
        >
          {countries &&
            countries.map((country) => (
              <option key={country.Slug} value={country.Slug}>
                {country.Slug.toUpperCase()}
              </option>
            ))}
        </select>
        <Confirmed data={countryData[selectedCountry]} />
      </div>
    </BrowserRouter>
  );
};

export default App;
