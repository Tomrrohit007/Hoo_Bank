import { FC } from "react";
import { apple, bill, google } from "../assets/index";
import styles, { layout } from "../utils/styles";
import { motion as m } from "framer-motion";
import { viewOnScrollVarients } from "../utils/motion";

const Billing: FC = () => {
  return (
    <section id="product" className={`${layout.sectionReverse}`}>
      <div className={`${layout.sectionImgReverse}`}>
        <m.img
          variants={viewOnScrollVarients(1.3)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          src={bill}
          alt="billing"
          className="q-[100%] h-[100%] relative z-[5] "
        />
        <div className="absolute z-[3] opacity-80 -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] opacity-80 -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
      </div>
      <div className={layout.sectionInfo}>
        <m.h2
          variants={viewOnScrollVarients(0.4)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className={styles.heading2}
        >
          Easily control your <br className="sm:block hidden" />
          billing & invoicing
        </m.h2>
        <m.p
          variants={viewOnScrollVarients(0.4)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className={`${styles.paragraph} max-w-[470px] mt-5`}
        >
          Labore id ad et Lorem cillum ea fugiat enim anim fugiat in deserunt.
          Veniam labore sit veniam sunt occaecat ex duis commodo ex. Elit nisi
          amet et exercitation occaecat laboris. Veniam id non magna officia.
          Tempor id est consequat qui. Deserunt in irure id duis.
        </m.p>
        <m.div
          variants={viewOnScrollVarients(0.4)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="flex flex-row flex-wrap sm:mt-10 mt-6"
        >
          <img
            src={apple}
            alt="apple store"
            className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"
          />
          <img
            src={google}
            alt="google play"
            className="w-[128px] h-[42px] object-contain cursor-pointer"
          />
        </m.div>
      </div>
    </section>
  );
};

export default Billing;
