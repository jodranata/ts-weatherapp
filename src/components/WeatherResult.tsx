import React from 'react';
import { WeatherDetail } from '../store/types';

interface WeatherResultProps {
  data: WeatherDetail;
}

const fahtoCelcius = (f: number): number => {
  return (f - 32) * (5 / 9);
};

const kelToFah = (k: number): number => {
  return (k * 9) / 5 - 459.67;
};

const WeatherResult = ({ data }: WeatherResultProps) => {
  const {
    name,
    sys: { country },
    main: { temp, temp_max, temp_min },
    weather,
  } = data;
  const { description, icon } = weather[0];
  return (
    <div className="container has-background-primary-dark my-4 py-6">
      <div className="has-text-centered mb-5">
        <p className="title has-text-light" style={{ position: 'relative' }}>
          <span className="is-capitalized">{`${name} `}</span>
          <span className="is-uppercase">{country}</span>
          <img
            src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
            alt="Weather Summary"
            style={{ position: 'absolute', top: '-100%' }}
          />
        </p>
        <p className="subtitle is-6 is-capitalized has-text-light">
          {description}
        </p>
      </div>
      <div className="level is-fullwidth my-3 ">
        {[temp_min, temp, temp_max].map((temps: number, i: number) => (
          <div className="level-item has-text-centered" key={temps}>
            <div>
              <p className="title is-4 is-spaced my-1 has-text-centered has-text-white">
                {`${
                  i === 0 ? 'Minimal' : i === 1 ? 'Overall' : 'Maximal'
                } Temperature`}
              </p>
              <p className="subtitle is-6 has-text-centered has-text-light">
                {`${temps}°K`}
              </p>
              <p className="subtitle is-6 has-text-centered has-text-light">
                {`${kelToFah(temps).toFixed(1)}°F`}
              </p>
              <p className="subtitle is-6 has-text-centered has-text-light">
                {`${fahtoCelcius(kelToFah(temps)).toFixed(1)}°C`}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherResult;
