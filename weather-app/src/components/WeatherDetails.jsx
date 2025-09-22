function WeatherDetails() {
  return (
    <div className="flex flex-col h-1/2 border-b-1 border-white text-white">
      <h4 className="text-white mb-8">Weather Details</h4>
      <div className="my-2 flex justify-between">
        <span>Cloudy</span>
        <span>86%</span>
      </div>
      <div className="my-2 flex justify-between">
        <span>Humidity</span>
        <span>86%</span>
      </div>
      <div className="my-2 flex justify-between ">
        <span>Wind</span>
        <span>8km/h</span>
      </div>
      <div className="my-2 flex justify-between">
        <span>Rain</span>
        <span>8mm</span>
      </div>
    </div>
  );
}
export default WeatherDetails;
