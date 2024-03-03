import Spinner from './Spinner';
import styles from './CountriesList.module.css';
import CountryItem from './CountryItem';
import Message from './Message';
import { useCities } from '../contexts/CitiesContext';

function CountriesList() {
  const { cities, isLoading } = useCities();
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { name: city.country, emoji: city.emoji }];
    else return arr;
  }, []);

  return (
    <ul className={styles.countriesList}>
      {countries.map((country) => (
        <CountryItem key={country.name} country={country} />
      ))}
    </ul>
  );
}

export default CountriesList;
