import React from "react";
import { About, Footer, Header, Skills, Testimonial, Work } from "./container";
import { Navbar } from "./components";
import "./App.scss";
// import "./App.css";

function App() {
  return (
    //DO NOT include social icons,side dots or copyright footer on these pages
    //we will do that after, on the global scale
    <div>
      {/* TODO: assigned to Zac */}
      <Navbar />
      {/* Done! assigned to Aftab */}
      <Header />
      {/* TODO: assigned to Patrick */}
      <About />
      {/* Done! assigned to Julieta */}
      <Work />
      {/* TODO: assigned to Aftab */}
      <Skills />
      {/* TODO: assigned to Patrick */}
      {/* <div className="mx-auto"> */}
      <Testimonial />
      {/* TODO: assigned to Julieta */}
      {/* </div> */}
      <Footer />
    </div>
  );
}

export default App;
