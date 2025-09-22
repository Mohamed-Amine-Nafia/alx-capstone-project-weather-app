function WeatherDetails() {
  return (
    <div className="flex flex-col h-1/2 border-b-1 border-[#81a09a]">
      <h4 className="text-white mb-8">Weather Details</h4>
      <div className="my-2 flex justify-between text-[#81a09a]">
        <span>Cloudy</span>
        <span>86%</span>
      </div>
      <div className="my-2 flex justify-between text-[#81a09a]">
        <span>Humidity</span>
        <span>86%</span>
      </div>
      <div className="my-2 flex justify-between text-[#81a09a]">
        <span>Wind</span>
        <span>8km/h</span>
      </div>
      <div className="my-2 flex justify-between text-[#81a09a]">
        <span>Rain</span>
        <span>8mm</span>
      </div>
    </div>
  );
}
export default WeatherDetails;
