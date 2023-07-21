import Button from "./components/Button";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";

import "./app.css";
import ContactUsForm from "./components/ContactUsForm";
import { useEffect, useRef, useState } from "react";

function App() {

  const [isIntersecting, setIsIntersecting] = useState(true);
  const ref = useRef(null);

  useEffect(() => {
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin: "-120px" }
    );

    // console.log(isIntersecting);
    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [isIntersecting]);

  useEffect(() => {
    const navbar = document.getElementById('navbar');
    if (!isIntersecting) {
      navbar.classList.add("bg-neutral-950/75");
      }
     else {
      navbar.classList.remove("bg-neutral-950/75");
      };
  }, [isIntersecting]);


  return (
    <div className="relative font-opensans">
      <div className="sticky top-0 z-20 bg-transparent text-3xl text-sky-500 text-bold text-center">
        <Navbar />
      </div>
      <Banner scrollRef={ref} />
      <section className="send-money px-20 lg:px-36 grid lg:grid-cols-2 justify-items-center items-center gap-3 py-5">
        <div className="content flex flex-col justify-center lg:items-end">
          <h1 className="text-secColor text-3xl pb-3 font-bold">Send Money</h1>
          <p className="text-base text-blackColor font-semibold lg:text-right">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <p className="text-base text-blackColor font-semibold">
            Lorem ipsum dolor sit amet, impedit!
          </p>
          <div className="text-base text-para font-normal lg:text-right">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem
            </p>
          </div>
          <Button className="text-white flex gap-2 text-base font-medium bg-secColor py-2 px-3 rounded my-3">
            Learn More
            <span>
              <img src="../public/assets/next arrow white.svg" alt="" />
            </span>
          </Button>
        </div>
        <div className="img py-5">
          <img src="/assets/send.svg" alt="" />
        </div>
      </section>
      <section className="bill-pay py-5 px-20 lg:px-36 grid lg:grid-cols-2 justify-items-center items-center gap-10">
        <div className="img py-5">
          <img src="/assets/mobile.svg" alt="" />
        </div>
        <div className="content flex flex-col justify-center items-start">
          <h1 className="text-secColor text-3xl pb-3 font-bold">Bill Pay</h1>
          <p className="text-base text-blackColor font-semibold pb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>

          <div className="text-base text-para font-normal">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem
            </p>
          </div>
          <Button className="text-white flex gap-2 text-base font-medium bg-secColor py-2 px-3 rounded my-3">
            Learn More
            <span>
              <img src="../public/assets/next arrow white.svg" alt="" />
            </span>
          </Button>
        </div>
      </section>
      <section className="cash-out py-5 px-20 lg:px-36 grid lg:grid-cols-2 justify-items-center items-center">
        <div className="content flex flex-col justify-center items-start order-2 lg:order-1">
          <h1 className="text-secColor text-3xl pb-3 font-bold">Cash Out</h1>
          <p className="text-base text-blackColor font-semibold pb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>

          <div className="text-base text-para font-normal">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem
            </p>
          </div>
          <Button className="text-white flex gap-2 text-base font-medium bg-secColor py-2 px-3 rounded my-3">
            Learn More
            <span>
              <img src="../public/assets/next arrow white.svg" alt="" />
            </span>
          </Button>
        </div>
        <div className="img py-5 lg:order-2">
          <img src="/assets/cash-out.svg" alt="" />
        </div>
      </section>
      <section className="mobile-recharge py-5 px-20 lg:px-36 grid lg:grid-cols-2 justify-items-center items-center z-10">
        <div className="img py-5">
          <img src="/assets/mobile-recharge.svg" alt="" />
        </div>
        <div className="content flex flex-col justify-center items-start">
          <h1 className="text-secColor text-3xl pb-3 font-bold">
            Mobile Recharge
          </h1>
          <p className="text-base text-blackColor font-semibold pb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>

          <div className="text-base text-para font-normal">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem
            </p>
          </div>
          <Button className="text-white flex gap-2 text-base font-medium bg-secColor py-2 px-3 rounded my-3">
            Learn More
            <span>
              <img src="../public/assets/next arrow white.svg" alt="" />
            </span>
          </Button>
        </div>
      </section>
      <section className="download-app px-20 lg:px-36 pb-3 grid lg:grid-cols-2 justify-items-center items-center  overflow-hidden">
        <div className="content flex flex-col justify-center items-start my-5">
          <h1 className="text-secColor text-3xl pb-3 font-bold">
            Download Kepto Cash
          </h1>
          <p className="text-base text-blackColor font-semibold pb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>

          <div className="text-base text-para font-normal">
            <p>Download mobile app for ios & android.</p>
            <p>It helps you rating quickly & smoothly</p>
          </div>
          <div className="btn-group flex gap-4">
            <Button className="my-3 cursor-pointer">
              <img src="/assets/app-store.svg" alt="" />
            </Button>
            <Button className="my-3 cursor-pointer">
              <img src="/assets/google-play.svg" alt="" />
            </Button>
          </div>
        </div>
        <div className="img lg:-mt-10 pb-5">
          <img src="/assets/bottom.svg" alt="" />
        </div>
      </section>
      <section className="contact-us px-20 lg:px-36 py-5">
        <h1 className="text-secColor font-bold text-5xl pb-3 text-center">
          Contact Us
        </h1>
        <p className="text-base text-blackColor font-semibold w-3/6 text-center mx-auto pb-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni ab
          libero harum iure natus.
        </p>
        <ContactUsForm />
      </section>
      <footer className="w-full">
        <div className="footer-container pt-5 px-20 lg:px-36 text-white text-base font-normal">
          <div className="top grid md:grid-cols-2 md:flex md:flex-wrap md:gap-5 md:justify-between md:items-center md:justify-items-center">
            <div className="footer-col">
              <img src="/assets/footer-logo.svg" alt="" />
              <p>Sample text sample</p>
              <p>sample text sampletext</p>
              <p>textSample text textsample</p>
            </div>

            <div className="company py-4 md:py-0">
              <p className="font-semibold">Company</p>
              <ul>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
              </ul>
            </div>

            <div className="connect">
              <p className="font-semibold">Connect</p>
              <p>text@testmail.com</p>
              <p>+(123) 456 - 7890</p>
            </div>

            <div className="newsletter py-4 md:py-1">
              <p className="font-semibold pb-3">Join Newsletter</p>
              <input
                className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 rounded-full"
                id="grid-last-name"
                type="email"
                placeholder="Select Subject"
              />
              <button
                className="shadow bg-secColor hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-semibold py-3.5 px-12 rounded-full font-semibold text-lg mt-3"
                type="button"
              >
                Send Message
              </button>
            </div>
          </div>
          <div className="bottom flex justify-evenly py-5">
            <p>© All rights reserved - Kepto Cash</p>
            <p>Privacy Policy Terms & Conditions</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
