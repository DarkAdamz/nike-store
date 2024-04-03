import Button from "../UI assets/Button"
import { arrowRight } from "../assets/icons";
import { shoe8 } from "../assets/images";
const SuperQuality = () => {
  return (
    <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container ">
      <div className="flex flex-1 flex-col ">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
            <p>We provide you
          <span className="text-coral-red ">Super</span> 
          <span className="text-coral-red">Quality</span>  
          Shoes
          </p>
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">Ensuring premium comfort and style, our meticulosly crafted footwear is designed to elevate your experience, providing you with unmatched quality,innovation and a touch of elegance.</p>
        <p className="mt-6 lg:max-w-lg info-text">Our dedication to details and excellence ensure that your shoes are made for you.</p>
     <div className="mt-11">
        <Button label="View Details" iconURL={arrowRight} />
      </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
          <img
            src={shoe8}
            alt="shoe8"
            width={570}
            height={522}
          />
      </div>
    </section>
  )
}

export default SuperQuality
