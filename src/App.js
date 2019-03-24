import React, { Component } from "react";
import "./App.css";
import Caroussel from "./components/Caroussel";
import image1 from "./assets/images/anton-repponen-99624-unsplash.jpg";
import image2 from "./assets/images/david-kovalenko-414247-unsplash.jpg";
import image3 from "./assets/images/kayle-kaupanger-183920-unsplash.jpg";
import Navbar from "./components/Navbar";

const CAROUSSEL_IMAGES = [image1, image2, image3];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Caroussel images={CAROUSSEL_IMAGES} />
      </div>
    );
  }
}

export default App;
