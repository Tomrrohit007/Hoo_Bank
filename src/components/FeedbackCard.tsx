import { quotes } from "../assets/index";
import { motion as m } from "framer-motion";
import { viewOnScrollVarients } from "../utils/motion";

interface Props {
  name: string;
  content: string;
  title: string;
  img: any;
  i: number;
}
const FeedbackCard = (props: Props) => {
  const { name, content, title, img, i } = props;
  return (
    <m.div
      variants={viewOnScrollVarients(0.4 + 0.3 * i)}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card"
    >
      <img
        src={quotes}
        alt="double quotes"
        className="w-[42px] h-[27px] object-contain "
      />
      <p className="font-poppins font-normal text-white my-10 text-[18px] leading-[32px]">
        {content}
      </p>
      <div className="flex flex-row">
        <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full" />
        <div className="flex flex-col ml-4">
          <h4 className="font-poppins text-[20px] leading-[32px] font-normal text-white">
            {name}
          </h4>
          <p className="font-poppins text-[16px] leading-[24px] font-normal text-white">
            {title}
          </p>
        </div>
      </div>
    </m.div>
  );
};

export default FeedbackCard;
