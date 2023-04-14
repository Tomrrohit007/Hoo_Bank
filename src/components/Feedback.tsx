import { FC } from "react";
import { feedback } from "../utils/constants";
import styles from "../utils/styles";
import FeedbackCard from "./FeedbackCard";
import { motion as m } from "framer-motion";
import { viewOnScrollVarients } from "../utils/motion";

const Feedback: FC = () => {
  return (
    <section
      id="clients"
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative max-w-screen overflow-hidden`}
    >
      <div className="absolute z-0 w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient opacity-60" />
      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-1">
        <m.h1
          variants={viewOnScrollVarients(0.4)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className={styles.heading2}
        >
          What people are <br className="sm:block hidden" />
          saying about us
        </m.h1>
        <div className="w-full md:mt-0 mt-6 self-center lg:self-end">
          <m.p variants={viewOnScrollVarients(0.4)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }} className={`${styles.paragraph}  text-left max-w-[450px]`}>
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </m.p>
        </div>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-1">
        {feedback.map((card, i) => (
          <FeedbackCard key={card.id} {...card} i={i} />
        ))}
      </div>
    </section>
  );
};

export default Feedback;
