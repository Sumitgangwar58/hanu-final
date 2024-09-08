import logo from "./logo.svg";
import "./App.css";
import Home from "./components/home/Home";
import AboutUs from "./components/aboutUs/AboutUs";
import Services from "./components/services/Services";
import Gallery from "./components/gallery/Gallery";
import ContactUs from "./components/contactUs/ContactUs";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App container">
      <Home />
      <AboutUs />
      <Services />
      <Gallery />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
