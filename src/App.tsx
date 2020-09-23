import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';

import SearchBar from './components/SearchBar';
import WeatherResult from './components/WeatherResult';

const App = () => {
  const weatherData = useSelector((state: RootState) => state.dataState.data);
  const error = useSelector((state: RootState) => state.dataState.errMsg);
  const loading = useSelector((state: RootState) => state.dataState.loading);
  const alertMsg = useSelector((state: RootState) => state.alertState.message);

  return (
    <div>
      <SearchBar error={error} alert={alertMsg} />
      {loading ? (
        <h2 className="title is-size-3 has-text-centered my-3 mx-auto">
          Loading...
        </h2>
      ) : (
        weatherData && <WeatherResult data={weatherData} />
      )}
    </div>
  );
};

export default App;
