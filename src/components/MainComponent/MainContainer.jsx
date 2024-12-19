import React from "react";
import elevation from "../../assets/img/New-elevation.jpg";
import ImageCarousel from "./ImageCarousel";
import Card from "./Card";
import ProjectInfo from "./ProjectInfo";


function MainContainer() {
  return (
    <>
      <div className="container mx-auto p-6">
        <div className="grid grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="col-span-12 space-y-6">
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-6">
                <Card image={elevation} />
              </div>
              <div className="col-span-6 pt-3 pb-4">
                <ProjectInfo />
              </div>
            </div>
            <ImageCarousel />
          </div>
        </div>
      </div>
    </>
  );
}

export default MainContainer;
