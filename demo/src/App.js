import logo from "./logo.svg";
import "./App.css";
import FeaturedProjectCard from "./Components/Common/FeaturedProjects/Index";
import CreationCard from "./Components/Common/Creators/Index";

function App() {
  return (
    <div className="App">
      <FeaturedProjectCard />
      <CreationCard />
    </div>
  );
}

export default App;
