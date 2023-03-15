import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => (
  <div className={`${styles.flexCenter} w-[170px] h-[55px] bg-blue-gradient rounded-[10px] p-[2px] cursor-pointer`}>
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-semibold text-[20px] leading-[23.4px]">
          <a href="/Upload"><span>Get Started</span></a>
          {/**Add link to face recog */}
        </p>
        <img src={arrowUp} alt="arrow-up" className="w-[23px] h-[23px] object-contain" />
      {/**Change arrow up to arrow right */}
      </div>
  </div>
);

export default GetStarted;
