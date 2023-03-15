import styles from "../style";

const ContactUs = () => (
    <div className={`${styles.flexCenter} w-[170px] h-[55px] bg-blue-gradient rounded-[10px] p-[2px] cursor-pointer`}>
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppins font-semibold text-[20px] leading-[23.4px]">
            <a href="https://www.nottingham.edu.my/Study/Make-an-enquiry/Contact-us.aspx"><span>Contact Us</span></a>
            {/**Add link to face recog */}
          </p>
        </div>
    </div>
  );

export default ContactUs;