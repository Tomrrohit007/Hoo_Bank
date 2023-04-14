import GetStarted from "./GetStarted";
import { FC } from "react";
import { discount, robot } from "../assets/index";
import styles from "../utils/styles";
import {viewOnScrollVarients} from "../utils/motion"
import {motion as m} from "framer-motion"

const Hero: FC = () => (
  <section id="home" className={`flex md:flex-row flex-col xs:mt-20 md:mt-0 ${styles.paddingY}`}>
    <div
      className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 `}
    >
      <m.div variants={viewOnScrollVarients(2)} initial="initial" animate="animate" className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
        <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
        <p className={`${styles.paragraph} ml-2`}>
          <span className="text-white">20%</span> Discount for{" "}
          <span className="text-white">1 Month</span> Account
        </p>
      </m.div>
      <div className="flex flex-row justify-between items-center w-full">
        <m.h1 variants={viewOnScrollVarients(4)} initial="initial" animate="animate"  className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
          The Next <br className="sm:block hidden" />
          <m.span variants={viewOnScrollVarients(4)} initial="initial" animate="animate" className="text-gradient">Generation </m.span>
        </m.h1>
        <m.div initial={{scale:0, opacity:0.3}} animate={{scale:1, opacity:1}} transition={{delay:0.8, duration:0.4, type:"spring", damping:15}} className="ss:flex hidden md:mr-4 mr-0">
          <GetStarted />
        </m.div>
      </div>
      <m.h1 variants={viewOnScrollVarients(6)} initial="initial" animate="animate" className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full">
        Payment Method
      </m.h1>
      <m.p variants={viewOnScrollVarients(8)} initial="initial" animate="animate" className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Our team of experts uses a methodology to identify the credit cards most
        likely to fit your needs. We examine annual percentage rates, annual
        fees.
      </m.p>
    </div>
    <m.div initial={{x:"20vw", opacity:0}} animate={{x:0, opacity:1}} transition={{delay:1, mass:0.6, type:"spring", damping:12}} className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img
        src={robot}
        alt="billing"
        className="w-[100%] h-[100%] relative z-[5]"
      />
      <div className="absolute opacity-50 z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
      <div className="absolute opacity-40 z-[1] w-[80%] h-[80%] bottom-40 white__gradient rounded-full" />
      <div className="absolute opacity-20 z-[0] w-[50%] h-[50%] right-20 bottom-20 top-0 pink__gradient roune" />
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </m.div>
  </section>
);

export default Hero;
