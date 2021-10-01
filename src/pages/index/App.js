import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import React from "react";

const props = {
  home: "#",
  about: "about.html",
  contact: "contact.html",
};

function App() {
  return (
    <>
      <Navbar {...props} />
      <div className="h-screen">Test</div>
      <Footer {...props} />
    </>
  );
}

export default App;
