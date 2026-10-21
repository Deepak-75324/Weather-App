# Weather Widget

A React weather app built with Vite and Material UI. Search for a city to see its current weather, including temperature, humidity, daily minimum and maximum temperatures, and the “feels like” temperature. The card also displays a weather description and changes its image and icon based on the returned conditions.

## Requirements

- Node.js compatible with Vite 8
- npm
- An OpenWeatherMap API key

## Getting started

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL printed by Vite in your browser.

## Available commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## Weather API key

Weather data is requested from the [OpenWeatherMap Current Weather API](https://openweathermap.org/current) in metric units. The API key is currently set as `API_KEY` in `src/SearchBox.jsx`. To use your own key, replace that value with an active OpenWeatherMap API key.

The key is included in requests made by the browser, so it is visible to users of the app. Do not use a private or production-sensitive key in this client-side code. For production, proxy weather requests through a server and keep the key in server-side configuration.

## Project structure

```text
src/
  App.jsx          App entry component
  WeatherApp.jsx   Weather state and page composition
  SearchBox.jsx    City search and weather API request
  InfoBox.jsx      Weather details card
  main.jsx         React application bootstrap
public/            Static public assets
```

## Weather search

Enter a city name and submit the form to fetch its current conditions. A successful search updates the displayed weather. If the city cannot be found or the request fails, the app displays an error message.
