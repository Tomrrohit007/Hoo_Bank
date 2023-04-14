import { useState, FC } from "react";
import { motion as m, useScroll, useMotionValueEvent } from "framer-motion";
import { Link } from "react-router-dom";
import { logo } from "../assets/index";
import { navLinks } from "../utils/constants";
import styles from "../utils/styles";
import "../index.css";

const navbarVariants = {
  initial: {
    y: 0,
  },
  animate: {
    y: -78,
  },
};

const Navbar: FC = () => {
  const [hidden, setHidden] = useState<boolean>(false);
  const { scrollY } = useScroll();
  const [toggle, setToggle] = useState<any>(false);
  const changeToggle = (): void => {
    setToggle((prev: any) => !prev);
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const update = () => {
    if (scrollY.get() < scrollY.getPrevious()) {
      setHidden(false);
    } else if (scrollY.get() > 80 && scrollY.get() > scrollY.getPrevious()) {
      setHidden(true);
    }
  };

  useMotionValueEvent(scrollY, "change", () => update());
  console.log(toggle);
  return (
    <m.div
      variants={navbarVariants}
      animate={hidden ? "animate" : "initial"}
      className={`${styles.paddingX} ${styles.flexCenter} bg-primary w-screen z-20 fixed`}
    >
      <div className={`${styles.boxWidth}`}>
        <nav className="navbar w-full select-none flex py-6 justify-between items-center">
          <Link to="/" onClick={scrollToTop}>
            <img
              src={logo}
              alt="hoobank"
              className=" select-none w-[124px] h-[32px] cursor-pointer"
            />
          </Link>
          <ul className="list-none sm:flex hidden justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                className={`font-poppins select-none hover:text-[#bee5f1] font-normal cursor-pointer text-[1rem] text-white ${
                  navLinks.length - 1 === index ? "mr-0" : "mr-10"
                }`}
                key={nav.id}
              >
                {nav.id === "home" ? (
                  <Link to="/" onClick={scrollToTop}>
                    {nav.title}
                  </Link>
                ) : (
                  <a href={`#${nav.id}`}>{nav.title}</a>
                )}
              </li>
            ))}
          </ul>
          <div className="sm:hidden flex flex-1 justify-end items-center">
            <m.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.4,
              }}
              className="button-two menu-button mr-5"
              aria-controls="primary-navigation"
              aria-expanded={toggle.toString()}
              onClick={() => setToggle((prev: any) => !prev)}
            >
              <svg
                stroke="var(--button-color)"
                viewBox="0 0 100 100"
                width="50"
              >
                <line
                  className="line top"
                  x1="85"
                  x2="15"
                  y1="35"
                  y2="35"
                  strokeWidth="11"
                  strokeLinecap="round"
                  strokeDasharray="80"
                  strokeDashoffset="0"
                ></line>
                <line
                  className="line bot"
                  x1="15"
                  x2="85"
                  y1="65"
                  y2="65"
                  strokeWidth="11"
                  strokeLinecap="round"
                  strokeDasharray="80"
                  strokeDashoffset="0"
                ></line>
              </svg>
            </m.button>
            <div
              className={`${
                toggle ? "flex" : "hidden"
              } p-6 bg-black-gradient absolute top-[73px] right-0 mx-4 mr-[24px] my-2 min-w-[200px] rounded-lg sidebar`}
            >
              <ul className="list-none flex flex-col justify-end items-center flex-1">
                {navLinks.map((nav, index) => (
                  <li
                    className={`font-poppins select-none font-normal cursor-pointer hover:text-[#bee5f1] text-[1rem] text-white ${
                      navLinks.length - 1 === index ? "mr-0" : "mb-10"
                    }`}
                    key={nav.id}
                  >
                    <button onClick={changeToggle}>
                      <a href={`#${nav.id}`}>{nav.title}</a>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </m.div>
  );
};

export default Navbar;
