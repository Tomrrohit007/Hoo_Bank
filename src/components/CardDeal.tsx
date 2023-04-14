import { FC } from "react";
import { card } from "../assets/index";
import styles, { layout } from "../utils/styles";
import Button from "./Button";
import { motion as m } from "framer-motion";
import { viewOnScrollVarients } from "../utils/motion";

const CardDeal: FC = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <m.h2
          variants={viewOnScrollVarients(0.4)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className={styles.heading2}
        >
          Find a better card deal <br className="sm:block hidden" />
          in few easy steps.
        </m.h2>
        <m.p
          variants={viewOnScrollVarients(0.4)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className={`${styles.paragraph} max-w-[470px] mt-5`}
        >
          Consectetur excepteur incididunt proident eu aliquip sint ullamco
          nulla anim culpa ex. Ea consectetur pariatur Lorem ex elit sit est
          voluptate adipisicing occaecat. Duis excepteur sint non labore id
          minim!
        </m.p>
        <m.div
          variants={viewOnScrollVarients(0.4)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <Button styling="mt-10" />
        </m.div>
      </div>
      <div className={layout.sectionImg}>
        <m.img
          variants={viewOnScrollVarients(1.4)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          src={card}
          alt="card"
          className="w-[100%] h-[100%]"
        />
      </div>
    </section>
  );
};

export default CardDeal;
