import SearchBar from "./components/SearchBar";
import WeatherDetails from "./components/WeatherDetails";

function App() {
  let checker = 2;
  const backgrounds = {
    1: "bg-[url(./assets/rainy.jpg)]",
    2: "bg-[url(./assets/clear.jpg)]",
    3: "bg-[url(./assets/cloudy.jpg)]",
    4: "bg-[url(./assets/snowy.jpg)]",
  };
  return (
    <div className="w-screen h-screen bg-[#242424] flex justify-center items-center lg:overflow-hidden">
      <div
        className={`flex lg:h-3/4  lg:w-3/4 bg-cover bg-center bg-no-repeat ${backgrounds[checker]} flex-col w-full h-full lg:flex-row lg:drop-shadow-2xl/70`}
      >
        <div className="lg:h-full lg:w-3/5 flex flex-col lg:p-14 text-white lg:justify-between p-6">
          <h1 className="lg:text-md font-medium  text-xl">Weather</h1>
          <div className="flex items-center my-6">
            <h2 className="lg:text-9xl text-6xl">08°</h2>
            <div className="ml-4">
              <h3 className="lg:text-4xl text-3xl">London</h3>
              <span className="lg:text-sm text-xs">
                06:09 - Sunday, 6OCT'19
              </span>
            </div>
          </div>
        </div>
        <div className="lg:h-full h-3/4 lg:w-2/5 bg-black/10 lg:p-10 p-6  backdrop-blur-lg flex flex-col justify-between">
          <SearchBar />
          <WeatherDetails />
        </div>
      </div>
    </div>
  );
}

export default App;
