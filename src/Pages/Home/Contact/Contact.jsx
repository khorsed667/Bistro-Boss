import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div className="text-white max-w-screen-xl mx-auto bg-black border-2 border-black my-5 rounded-xl md:py-10 xsm:py-3 md:grid md:grid-cols-3">
      <div className="flex justify-center lg:p-2 lg:mx-2 md:p-1 md:mx-1 items-center xsm:my-4 md:my-0">
        <div>
          <FontAwesomeIcon
            className="lg:w-[100px] xsm:pe-7 md:pe-0 xsm:w-[100px] md:w-[50px] text-main xsm:text-3xl md:text-2xl lg:text-3xl"
            icon={faCalendarDays}
          />
        </div>
        <div>
          <p>We are open monday-friday</p>
          <p className="text-xl font-bold">7:00 am - 9:00 pm</p>
        </div>
      </div>
      <div className="flex justify-center lg:p-2 lg:mx-2 md:p-1 md:mx-1 items-center xsm:my-4 md:my-0">
        <div>
          <FontAwesomeIcon
            className="lg:w-[100px] xsm:pe-7 md:pe-0 xsm:w-[100px] md:w-[50px] text-main xsm:text-3xl md:text-2xl lg:text-3xl"
            icon={faPhone}
          />
        </div>
        <div>
          <p>Do you have a question?</p>
          <p className="text-xl font-bold">+2546 383 3251 2658</p>
        </div>
      </div>
      <div className="flex justify-center lg:p-2 lg:mx-2 md:p-1 md:mx-1 items-center xsm:my-4 md:my-0">
        <div>
          <FontAwesomeIcon
            className="lg:w-[100px] xsm:pe-7 md:pe-0 xsm:w-[100px] md:w-[50px] text-main xsm:text-3xl md:text-2xl lg:text-3xl"
            icon={faLocationDot}
          />
        </div>
        <div>
          <p>Need a repair? our address</p>
          <p className="text-xl font-bold">Liza Street, New York</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
