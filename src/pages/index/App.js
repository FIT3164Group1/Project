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
      <div className="card text-base-content">
        <div className="card-body">
          <div className="mb-5 text-center card-title">
            Gastro-intestinal Cancer Classification
          </div>
          <div className="flex flex-col gap-3 md:flex-row">
            <div className="w-full md:w-1/2">
              <div className="shadow-2xl card bordered">
                <div className="card-body">
                  <div className="text-center card-title">
                    <div className="p-5 text-2xl badge badge-primary">Goal</div>
                  </div>
                  <p>
                    Utilise our cancer prediction model with your own
                    histological image.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="shadow-2xl card bordered">
                <div className="card-body">
                  <div className="text-center card-title">
                    <div className="p-5 text-2xl badge badge-secondary">
                      Strategy
                    </div>
                  </div>
                  <p>
                    We create a classfication model to identify between the two
                    possible categories MSS and MSIMUS (MSI) of cancer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-6">
          <hr className="border-base-100" />
        </div>
      </div>
      <Footer {...props} />
    </>
  );
}

export default App;
