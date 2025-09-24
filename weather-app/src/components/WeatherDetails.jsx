import { DataContext } from "../context/dataContext";
import { useContext } from "react";
function WeatherDetails() {
  const { weatherData } = useContext(DataContext);
  return (
    <div className="flex flex-col h-2/3 lg:h-1/2 border-b-1 border-white text-white py-2">
      <h4 className="text-white mb-3 pb-2  border-b-1">Weather Details</h4>
      <div className="my-2 flex justify-between">
        <span>Cloudy</span>
        <span> {weatherData ? weatherData.clouds.all : null}%</span>
      </div>
      <div className="my-2 flex justify-between">
        <span>Humidity</span>
        <span> {weatherData ? weatherData.main.humidity : null}%</span>
      </div>
      <div className="my-2 flex justify-between ">
        <span>Wind</span>
        <span> {weatherData ? weatherData.wind.speed : null}km/h</span>
      </div>
      <div className="my-2 flex justify-between">
        <span>Rain</span>
        <span>
          {weatherData?.rain?.["1h"]
            ? weatherData.rain["1h"] + "mm"
            : "No rain"}
        </span>
      </div>
      <div className="my-2 flex justify-between">
        <span>Description</span>
        <span> {weatherData ? weatherData.weather[0].description : null}</span>
      </div>
    </div>
  );
}
export default WeatherDetails;
