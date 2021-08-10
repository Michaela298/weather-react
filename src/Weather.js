import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Weather() {
  return (
    <div class="container mt-5">
      <div class="weather-app-wrapper">
        <div class="weather-app">
          <div class="overview">
            <form class="mb-3" id="search-form">
              <div class="row">
                <div class="col-9">
                  <input
                    type="search"
                    placeholder="Enter a city.."
                    autocomplete="off"
                    class="form-control"
                    id="city-input"
                  />
                </div>
                <div class="col-3">
                  <input
                    type="submit"
                    value="search"
                    class="btn btn-primary w-100"
                  />
                </div>
              </div>
            </form>
            <h1 id="city">Prague</h1>
            <p>
              <span id="date"></span>
              <br />
              <span class="description-capitalize" id="description"></span>
            </p>
          </div>
          <div class="row">
            <div class="col-6">
              <div class="clearfix weather-temperature">
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                  alt="almost sunny"
                  id="icon"
                  class="float-left"
                />
                <span class="float-left">
                  <strong id="temperature">10</strong>ºC
                </span>
              </div>
            </div>
            <div class="col-6">
              <ul>
                <li>
                  Humidity: <span id="humidity"></span>%
                </li>
                <li>
                  Wind: <span id="wind"></span> km/h
                </li>
              </ul>
            </div>
          </div>
          <div class="weather-forecast" id="forecast"></div>
        </div>
        <small>
          <a
            href="https://github.com/Michaela298/Vanilla-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            Open source code
          </a>
          by Michaela Šimková
        </small>
      </div>
    </div>
  );
}
