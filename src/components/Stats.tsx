import { FC } from "react";
import { stats } from "../utils/constants";
import styles from "../utils/styles";
import {motion as m} from "framer-motion"
import { viewOnScrollVarients } from "../utils/motion";

const Stats: FC = () => 
<section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
    {stats.map((stat, i)=>(
        <m.div variants={viewOnScrollVarients((i + 1)*.1)} initial="initial" whileInView="animate" viewport={{once:true}} className={`flex-1 flex justify-start items-center flex-row m-3`} key={stat.id}>
            <h4 className="font-poppins font-semibold text-[24px] lg:text-[40px] xs:leading-[53px] leading-[43px] text-white">{stat.value}</h4>
            <p className="font-poppins font-normal text-[13px] lg:text-[15px] xs:leading-[26px] leading-[21px] text-gradient  uppercase ml-3">{stat.title}</p>
        </m.div>
    ))}

</section>
export default Stats;
