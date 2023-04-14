import { FC } from "react";
import styles from "../utils/styles";
import { arrowUp } from "../assets/index";
const GetStarted: FC = () => {
  return (
    <div
      className={`${styles.flexCenter} w-[140px] select-none h-[140px] hidden md:block rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
    >
      <div
        className={`${styles.flexCenter} flex-col bg-primary w-full h-full rounded-full`}
      >
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppins font-medium text-[18px] leasing-[23px]">
            <span className="text-gradient">Get</span>
          </p>
          <img
            src={arrowUp}
            alt="arrow"
            className="w-[23px] h-[23px] object-contain mx-[5px]"
          />{" "}
        </div>
        <p className="font-poppins font-medium text-[18px] leasing-[23px]">
          <span className="text-gradient">Started</span>
        </p>
      </div>
    </div>
  );
};

export default GetStarted;
