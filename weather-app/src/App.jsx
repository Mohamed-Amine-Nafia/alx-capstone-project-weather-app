import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherDetails from "./components/WeatherDetails";
import { fetchWeatherData } from "./services/weatherData";
import { DataContext } from "./context/dataContext";
import { useInput } from "./store/useInput";

function App() {
  const [weatherData, setWeatherData] = useState();
  const { inputValue, setInputValue } = useInput();
  const backgrounds = {
    Rain: "bg-[url(./assets/rainy.jpg)]",
    Drizzle: "bg-[url(./assets/rainy.jpg)]",
    Clear: "bg-[url(./assets/clear.jpg)]",
    Clouds: "bg-[url(./assets/cloudy.jpg)]",
    Snow: "bg-[url(./assets/snowy.jpg)]",
    Mist: "bg-[url(./assets/misty.jpg)]",
    Haze: "bg-[url(./assets/haze.jpg)]",
    Squall: "bg-[url(./assets/squall.jpg)]",
  };

  async function getData() {
    const data = await fetchWeatherData(inputValue);
    setWeatherData(data);
    console.log(data);
    setInputValue("");
  }

  const checker = weatherData ? weatherData.weather[0].main : "Clear";

  return (
    <DataContext.Provider value={{ weatherData, getData }}>
      <div className="w-screen h-screen bg-[#242424] flex justify-center items-center lg:overflow-hidden">
        <div
          className={`flex lg:h-3/4  lg:w-3/4 bg-cover bg-center bg-no-repeat ${backgrounds[checker]} flex-col w-full h-full lg:flex-row lg:drop-shadow-2xl/70`}
        >
          <div className="lg:h-full lg:w-3/5 flex flex-col lg:p-12 text-white lg:justify-between p-6">
            <h1 className="lg:text-md font-medium  text-xl">Weather</h1>
            <div className="flex items-center gap-1  my-6">
              <h2 className="lg:text-9xl text-6xl">
                {weatherData ? Math.round(weatherData.main.temp) : null}°
              </h2>
              <div className="ml-4">
                <h3 className="lg:text-2xl text-3xl">
                  {weatherData ? weatherData.name : null}
                </h3>
                <span className="lg:text-sm text-xs">
                  06:09 - Sunday, 6 Oct'19
                </span>
              </div>
              <div className="flex h-fit">
                <img
                  className="w-26 h-auto"
                  src={
                    weatherData
                      ? `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`
                      : null
                  }
                  alt={weatherData ? weatherData.weather[0].description : null}
                />
              </div>
            </div>
          </div>
          <div className="lg:h-full h-3/4 lg:w-2/5 bg-black/10 lg:p-10 p-8  backdrop-blur-lg flex flex-col justify-between">
            <SearchBar />
            <WeatherDetails />
          </div>
        </div>
      </div>
    </DataContext.Provider>
  );
}

export default App;
