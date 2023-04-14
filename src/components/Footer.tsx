import styles from "../utils/styles";
import { logo } from "../assets/index";
import { footerLinks } from "../utils/constants";
import { socialMedia } from "../utils/constants";
import { motion as m } from "framer-motion";
import { footerVariants } from "../utils/motion";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-1 flex flex-col justify-start mr-10">
        <m.img
          variants={footerVariants(0.4)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          src={logo}
          alt="hoobank"
          className="w-[266px] h-[72px] object-contain"
        />
        <m.p
          variants={footerVariants(0.4)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className={`${styles.paragraph} mt-4 max-w-[310px]`}
        >
          A new way to make the payments easy, reliable and secure.
        </m.p>
      </div>
      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-10">
        {footerLinks.map((each, i) => (
          <div
            key={each.title}
            className="flex flex-col ss:my-0 my-4 min-w-[150px]"
          >
            <m.h4
              variants={footerVariants(0.4 + 0.2 * i)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="font-poppins font-medium text-[18px] leading-[27px] text-white"
            >
              {each.title}
            </m.h4>
            <ul className="list-none mt-4 ">
              {each.links.map((link, i) => (
                <m.li
                  variants={footerVariants(0.4 + 0.1 * i)}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  key={link.name}
                  className={`font-poppins font-normal text-[16px leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                    i !== each.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  {link.name}
                </m.li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3e45]">
      <m.p
        variants={footerVariants(0.4)}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white"
      >
        {new Date().getFullYear()} HooBank. All Rights Reserved.
      </m.p>
      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((each, i) => (
          <m.img
            variants={footerVariants(0.3)}
            initial="initial"
            whileInView="animate"
            whileHover={{scale:1.1, opacity:0.8}}
            viewport={{ once: true }}
            src={each.icon}
            alt={each.id}
            key={each.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
              i !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
