import ContactCard from "../../components/ContactCard/ContactCard";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import React from "react";

const props = {
  home: "index.html",
  about: "about.html",
  contact: "#",
};

function App() {
  return (
    <>
      <Navbar {...props} />
      <div className="flex flex-col w-full mt-8 mb-4">
        <div className="w-2/3 mx-auto">
          <ContactCard></ContactCard>
        </div>
      </div>
      <Footer {...props} />
    </>
  );
}

export default App;
