import { FC } from "react";
import { features } from "../utils/constants";
import styles, { layout } from "../utils/styles";
import Button from "./Button";
import { motion as m } from "framer-motion";
import { viewOnScrollVarients } from "../utils/motion";

interface Props {
  icon: any;
  title: string;
  content: string;
  i: number;
}

const FeatureCard = (props: Props) => {
  const { icon, title, content, i } = props;
  return (
    <m.div
      variants={viewOnScrollVarients((0.4))}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className={`flex p-6 rounded-[20px] ${
        i !== features.length - 1 ? "mb-6" : "mb-0"
      } feature-card`}
    >
      <div
        className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
      >
        <img src={icon} alt="icon" className="h-[50%] w-[50%] object-contain" />
      </div>
      <div className="flex-1 flex flex-col ml-3">
        <h4 className="font-poppins font-semibold text-white text-[18px] leading-6 mb-1">
          {title}
        </h4>
        <p className="font-poppins font-normal text-dimWhite text-[16px] leading-6 mb-1">
          {content}
        </p>
      </div>
    </m.div>
  );
};

const Bussiness: FC = () => (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <m.h2
        variants={viewOnScrollVarients(0.4)}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className={styles.heading2}
      >
        You do the business, <br className="sm:block hidden" />
        we'll handle the money.
      </m.h2>
      <m.p
        variants={viewOnScrollVarients(0.4)}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className={`${styles.paragraph} max-w-[470px] mt-5`}
      >
        With the right credit card, you can improve your financial life by
        building credit, earning rewards and saving money. But with hundreds of
        credit cards on the market.
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
    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, i) => (
        <FeatureCard key={feature.id} {...feature} i={i} />
      ))}
    </div>
  </section>
);

export default Bussiness;
