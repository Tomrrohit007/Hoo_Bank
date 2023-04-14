import { FC } from "react";
import { clients } from "../utils/constants";
import styles from "../utils/styles";
import { motion as m } from "framer-motion";
import { viewOnScrollVarients } from "../utils/motion";


const Client: FC = () => {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full gap-6`}>
        {clients.map((each, i) => (
          <div
            key={each.id}
            className={`${styles.flexCenter} flex-1 sm:min-w-[192px] min-w-[120px]`}
          >
            <m.img 
            variants={viewOnScrollVarients(0.4 + 0.2 * i)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
              src={each.logo}
              alt="client"
              className="sm:w-[192px] w-[100px] object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Client;
