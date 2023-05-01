import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Properties from "./component/Properties";
import Services from "./component/Services";
import BlogUpdate from "./component/BlogUpdate";
import Testimony from "./component/Testimony";
import DetailsHome from "./component/DetailsHome";
import "./style/App.css";
import Location from "./component/Location";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Services />
      <Properties />
      <BlogUpdate />
      <Testimony />
      <DetailsHome />
      <Location />
      <Footer />
    </div>
  );
}

export default App;
