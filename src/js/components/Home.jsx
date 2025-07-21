import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";

//create your first component
const Home = () => {
  const cards = [
    {
      title: "Ducati",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, minus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, minus.",
      imageUrl: "https://images.ctfassets.net/x7j9qwvpvr5s/bxtdaJP8liygEnplfPXrv/2eeff4d4d772a70d429f897a5fd2824e/Ducati-MY25-Panigale-V4-overview-looks-preview-1000x700-02.jpg",
      imageLabel: "hou",
      buttonLabel: "Go to link"
    },
    {
      title: "Duke",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, minus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, minus.",
      imageUrl: "https://azwecdnepstoragewebsiteuploads.azureedge.net/PHO_STAGE_my25-ktm-sd-evo-header_%23SALL_%23AEPI_%23V1.png",
      imageLabel: "hou",
      buttonLabel: "Go to link"
    },
    {
      title: "BMW",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, minus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, minus.",
      imageUrl: "https://www.mercedes-benz.com.co/mercedes/site/artic/20241106/imag/foto_0000038820241106171954/Diseno_sin_titulo_8.png",
      imageLabel: "hou",
      buttonLabel: "Go to link"
    },
    {
      title: "Lamborghini",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, minus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, minus.",
      imageUrl: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/model/URUS/URUS%20SE/EXTERIOR_URUS_SE.jpg",
      imageLabel: "hou",
      buttonLabel: "Go to link"
    },
  ];

  return (
    <>
      <Navbar />
      <div className="container-fluid px-5 mt-4">
        <div className="row">
          <div className="col-12">
            <Jumbotron title="A warm welcome!" />
          </div>
        </div>
        <div className="row">
          {cards.map((item, index) => {
            return (
              <div key={index} className="col-md-6 col-lg-3">
                <Card
                  title={item.title}
                  description={item.description}
                  imageUrl={item.imageUrl}
                  imageLabel={item.imageLabel}
                  buttonLabel= {item.buttonLabel}
                />
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
