import { FC } from "react";
import styles from "../utils/styles";
import Button from "./Button";
import { motion as m } from "framer-motion";
import { viewOnScrollVarients } from "../utils/motion";

const CTA: FC = () => {
  return (
    <section
      className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black0gradient-2 rounded-[20px] box-shadow`}
    >
      <div className="flex-1 flex flex-col">
        <m.h2
          variants={viewOnScrollVarients(0.4)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className={`${styles.heading2}`}
        >
          Let's try our service now!
        </m.h2>
        <m.p
          variants={viewOnScrollVarients(0.4)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className={`${styles.paragraph} max-w-[470px] mt-5`}
        >
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </m.p>
      </div>
      <m.div
        variants={viewOnScrollVarients(0.4)}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}
      >
        <Button />
      </m.div>
    </section>
  );
};

export default CTA;
