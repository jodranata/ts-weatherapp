import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import fetchDataAction from '../store/actions/dataAction';
import setAlertAction from '../store/actions/alertAction';

interface SearchBarProps {
  error: string;
  alert: string;
}

const SearchBar = ({ alert, error }: SearchBarProps) => {
  const [place, setPlace] = useState('');
  const dispatch = useDispatch();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;
    setPlace(value);
  };

  const handleOnSubmit = (
    e:
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
      | React.FormEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();
    if (!place.trim()) return dispatch(setAlertAction('Required a city name'));
    dispatch(setAlertAction(''));
    dispatch(fetchDataAction(place));
    return setPlace('');
  };

  return (
    <div className="hero has-background-dark has-text-centered">
      <div className="hero-body">
        <div className="container has-text-light">
          <h1 className="title has-text-light ">Weather Finder</h1>
          <h3 className="subtitle has-text-light">
            Monitor the Weather in your city
          </h3>
          <form className="py-5" onSubmit={handleOnSubmit}>
            <input
              type="text"
              name="Search bar"
              placeholder="Enter a city name"
              value={place}
              onChange={handleOnChange}
              className="input has-text-centered mb-5 is-fullwidth"
              style={{ maxWidth: '350px', margin: '0 auto' }}
            />
            <button
              type="submit"
              onClick={handleOnSubmit}
              className="button is-primary is-fullwidth mx-auto"
              style={{ maxWidth: '350px', margin: '0 auto' }}
            >
              Search
            </button>
          </form>
          <div
            className={`notification is-fullwidth is-light has-text-centered is-danger ${
              alert || error ? '' : 'is-invisible'
            }`}
          >
            <p className="has-text-danger-dark mb-3 is-capitalized">
              {alert || error}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
