function Navbar() {
  return (
    <div className="flex justify-between px-36 text-white bg-neutral-950/75 py-2.5">
      <div className="logo">
        <img src="../../public/assets/logo.svg" alt="" />
      </div>
      <ul className="nav-items flex gap-6 text-base font-medium items-center">
        <li>
          <a href="#" className="nav-links">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="nav-links">
            Features
          </a>
        </li>
        <li>
          <a href="#" className="nav-links">
            About Us
          </a>
        </li>
        <li>
          <a href="#" className="nav-links">
            Contact Us
          </a>
        </li>
      </ul>
      <ul className="nav-right flex gap-6 text-base font-medium items-center">
        <li>
          <a href="#" className="nav-links flex gap-2 items-center">
            <span>
              <img src="../../public/assets/world.svg" alt="" />
            </span>{" "}
            English
          </a>
        </li>
        <li>
          <a href="#" className="nav-links">
            Signup
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
