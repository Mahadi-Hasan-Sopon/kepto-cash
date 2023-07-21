import { CCarousel, CCarouselItem } from "@coreui/react";

import "./banner.css";

export default function Banner() {
  return (
    <CCarousel controls indicators dark wrap={false} className="-mt-24">
      <CCarouselItem>
        <div className="carousel-container w-full h-full grid grid-cols-2 items-center justify-items-center px-36 py-16">
          <div className="content w-3/4 ps-12">
            <p className="text-secColor text-base font-semibold">
              Cashless Payment
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
              Learn More{" "}
              <span>
                <img src="../../public/assets/next arrow.svg" alt="" />
              </span>
            </button>
          </div>
          <div className="image">
            <img src="../../public/assets/banner.png" alt="" />
          </div>
        </div>
      </CCarouselItem>
      <CCarouselItem>
        <div className="carousel-container w-full h-full grid grid-cols-2 items-center justify-items-center px-36 py-16">
          <div className="content w-3/4 ps-12">
            <p className="text-secColor text-base font-semibold">
              Cashless Payment
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
              Learn More{" "}
              <span>
                <img src="../../public/assets/next arrow.svg" alt="" />
              </span>
            </button>
          </div>
          <div className="image">
            <img src="../../public/assets/banner.png" alt="" />
          </div>
        </div>
      </CCarouselItem>
      <CCarouselItem>
        <div className="carousel-container w-full h-full grid grid-cols-2 items-center justify-items-center px-36 py-16">
          <div className="content w-3/4 ps-12">
            <p className="text-secColor text-base font-semibold">
              Cashless Payment
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
              Learn More{" "}
              <span>
                <img src="../../public/assets/next arrow.svg" alt="" />
              </span>
            </button>
          </div>
          <div className="image">
            <img src="../../public/assets/banner.png" alt="" />
          </div>
        </div>
      </CCarouselItem>
    </CCarousel>
  );
}
