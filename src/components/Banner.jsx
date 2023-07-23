import { CCarousel, CCarouselItem } from "@coreui/react";

import "./banner.css";

export default function Banner({scrollRef}) {
  return (
    <CCarousel controls indicators interval={100} className="lg:-mt-24" id="carousel-banner" ref={scrollRef}>
      <CCarouselItem>
        <div className="carousel-container w-full h-full lg:grid lg:grid-cols-2 items-center justify-items-center lg:px-36 py-16 px-20">
          <div className="content lg:w-3/4 lg:ps-12">
            <p className="text-secColor text-base font-semibold">
              Cashless Payment 1
            </p>
            <h1 className="text-white text-5xl py-3 font-bold">
              Easy Solution 
            </h1>
            <p className="text-white text-base font-normal pb-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas
              repellendus nulla quos debitis rerum, dignissimos provident eum
              magni aperiam laboriosam.
            </p>
            <button className="flex gap-3 text-secColor font-medium cursor-pointer">
              Learn More <span>
                <img src="assets/next arrow.svg" alt="" />
              </span>
            </button>
          </div>
          <div className="image">
            <img className="md:w-3/4 lg:w-full mx-auto" src="assets/banner.png" alt="" />
          </div>
        </div>
      </CCarouselItem>
      <CCarouselItem>
        <div className="carousel-container w-full h-full lg:grid lg:grid-cols-2 items-center justify-items-center lg:px-36 py-16 px-20">
          <div className="content lg:w-3/4 lg:ps-12">
            <p className="text-secColor text-base font-semibold">
              Cashless Payment 1
            </p>
            <h1 className="text-white text-5xl py-3 font-bold">
              Easy Solution 
            </h1>
            <p className="text-white text-base font-normal pb-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas
              repellendus nulla quos debitis rerum, dignissimos provident eum
              magni aperiam laboriosam.
            </p>
            <button className="flex gap-3 text-secColor font-medium cursor-pointer">
              Learn More <span>
                <img src="assets/next arrow.svg" alt="" />
              </span>
            </button>
          </div>
          <div className="image">
            <img className="md:w-3/4 lg:w-full mx-auto" src="assets/banner.png" alt="" />
          </div>
        </div>
      </CCarouselItem>
      <CCarouselItem>
        <div className="carousel-container w-full h-full lg:grid lg:grid-cols-2 items-center justify-items-center lg:px-36 py-16 px-20">
          <div className="content lg:w-3/4 lg:ps-12">
            <p className="text-secColor text-base font-semibold">
              Cashless Payment 1
            </p>
            <h1 className="text-white text-5xl py-3 font-bold">
              Easy Solution 
            </h1>
            <p className="text-white text-base font-normal pb-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas
              repellendus nulla quos debitis rerum, dignissimos provident eum
              magni aperiam laboriosam.
            </p>
            <button className="flex gap-3 text-secColor font-medium cursor-pointer">
              Learn More <span>
                <img src="assets/next arrow.svg" alt="" />
              </span>
            </button>
          </div>
          <div className="image">
            <img className="md:w-3/4 lg:w-full mx-auto" src="assets/banner.png" alt="" />
          </div>
        </div>
      </CCarouselItem>
    </CCarousel>
  );
}
