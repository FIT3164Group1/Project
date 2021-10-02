import React, { useEffect, useState } from "react";
import Carousel from "../../components/Carousel/Carousel";
import Footer from "../../components/Footer/Footer";
import MSI1Image from "../../img/samples/msi1.png";
import MSI2Image from "../../img/samples/msi2.png";
import MSI3Image from "../../img/samples/msi3.png";
import MSS1Image from "../../img/samples/mss1.png";
import MSS2Image from "../../img/samples/mss2.png";
import MSS3Image from "../../img/samples/mss3.png";
import Navbar from "../../components/Navbar/Navbar";

const props = {
  home: "#",
  about: "about.html",
  contact: "contact.html",
  images: [
    { path: MSI1Image, type: "MSI" },
    { path: MSS1Image, type: "MSS" },
    { path: MSI2Image, type: "MSI" },
    { path: MSS2Image, type: "MSS" },
    { path: MSI3Image, type: "MSI" },
    { path: MSS3Image, type: "MSS" },
  ],
};

function App() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (params) => (event) => {
    const { index } = params;
    event.preventDefault();
    setSelectedImage(params);
    document.getElementById(`${index}`).scrollIntoView({
      behavior: "smooth",
    });
    console.log(params?.image);
  };

  const handleClick = (event) => {
    event.target.tagName != "IMG" ? setSelectedImage(null) : "";
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick, false);
    return () => {
      document.addEventListener("mousedown", handleClick, false);
    };
  }, [handleClick]);

  return (
    <>
      <Navbar {...props} />
      <div className="flex flex-col items-center ">
        <div className="md:w-4/5">
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
                        <div className="p-5 text-2xl badge badge-primary">
                          Goal
                        </div>
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
                        We create a classfication model to identify between the
                        two possible categories MSS and MSIMUS (MSI) of cancer.
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
          <div className="card text-base-content">
            <div className="card-body">
              <div className="card-title">Classify</div>
              <Carousel
                {...props}
                selectedImage={selectedImage}
                imageClickHandler={handleImageClick}
              ></Carousel>
              <div className="justify-center card-actions">
                <button
                  className={`w-32 btn btn-med ${
                    selectedImage == null ? "btn-disabled" : ""
                  }`}
                >
                  Classify
                </button>
              </div>
            </div>
          </div>
          <Footer {...props} />
        </div>
      </div>
    </>
  );
}

export default App;
