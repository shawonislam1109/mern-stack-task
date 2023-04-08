import React from "react";
import image1 from '../image/image-1.png'; 
import image2 from '../image/image-2.png'; 
import image3 from '../image/image-3.png'; 
const Carsoual = () => {
  return (
    <div>
      <div className="carousel w-9/12 mx-auto">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src={image3}
            className="w-full"
            alt=""
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src={image2}
            className="w-full"
            alt=""
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src={image1}
            className="w-full"
            alt=""
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default Carsoual;
