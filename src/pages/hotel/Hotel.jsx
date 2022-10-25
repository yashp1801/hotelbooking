import "../hotel/hotel.css";
import { CgPin } from "react-icons/cg";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { useState } from "react";
import { IoIosArrowForward, IoIosArrowBack, IoMdExit } from "react-icons/io";
import { ImCross } from "react-icons/im";

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    {
      src: "https://images.pexels.com/photos/7031878/pexels-photo-7031878.jpeg?cs=srgb&dl=pexels-max-vakhtbovych-7031878.jpg&fm=jpg",
    },
    {
      src: "https://images.pexels.com/photos/210604/pexels-photo-210604.jpeg?cs=srgb&dl=pexels-pixabay-210604.jpg&fm=jpg",
    },
    {
      src: "https://images.pexels.com/photos/974382/pexels-photo-974382.jpeg?cs=srgb&dl=pexels-capricious-wayfarer-%28saptarshi%29-974382.jpg&fm=jpg",
    },
    {
      src: "https://images.pexels.com/photos/3038552/pexels-photo-3038552.jpeg?cs=srgb&dl=pexels-olga-vunder-3038552.jpg&fm=jpg",
    },
    {
      src: "https://images.pexels.com/photos/5531020/pexels-photo-5531020.jpeg?cs=srgb&dl=pexels-rachel-claire-5531020.jpg&fm=jpg",
    },
    {
      src: "https://images.pexels.com/photos/3770291/pexels-photo-3770291.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-3770291.jpg&fm=jpg",
    },
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSliderNumber;

    if (direction === "l") {
      newSliderNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSliderNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }
    setSlideNumber(newSliderNumber);
  };

  return (
    <>
      <Navbar />
      <div className="hotel">
        {open && (
          <div className="slider">
            <IoIosArrowBack
              className="arrowleft"
              onClick={() => handleMove("l")}
            />
            <IoIosArrowForward
              className="arrowright"
              onClick={() => handleMove("r")}
            />
            <ImCross className="exit" onClick={() => setOpen(false)} />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
          </div>
        )}
        <div className="hotelContainer">
          <div className="hotelContent">
            <div className="hotelContentSubDiv">
              <h1>tower street apartments</h1>
              <span>
                <CgPin />5 Bazovoka road , old town road , 33-555 karkow ,
                Poland
              </span>
              <p>Excellent loaction - 500m from center</p>
            </div>
            <button className="hotelContentBtn">Reserve or Book Now</button>
          </div>
          <div className="hotelImg">
            {photos.map((photos, i) => (
              <div className="hotelImgContainer">
                <img
                  onClick={() => handleOpen(i)}
                  src={photos.src}
                  alt="img"
                  className="hotelImages"
                />
              </div>
            ))}
          </div>
          <div className="hotelInfo">
            <div className="hotelInfoSubDiv1">
              <h1>stay in the heart of Karkow</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Consectetur sint recusandae unde, expedita mollitia eveniet
                aspernatur, ea nobis tenetur architecto soluta consequuntur
                fuga, hic quos. Distinctio, ab incidunt! Fugiat eveniet quod
                voluptatibus officia voluptate laborum nam nesciunt accusantium
                temporibus excepturi! Distinctio, ab incidunt! Fugiat eveniet
                quod voluptatibus officia voluptate laborum nam nesciunt
                accusantium temporibus excepturi!
              </p>
            </div>
            <div className="hotelInfoSubdiv2">
              <h2>perfect for a 9 day stay!</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis exercitationem nam minima veniam porro possimus atque
                similique optio. Eos, quos.
              </p>
              <h3>$945(9 nights)</h3>
              <button className="hotelContentBtn">Book Now</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Hotel;
