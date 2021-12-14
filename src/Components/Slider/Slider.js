import React, {useState} from "react";
import "./Slider.css";
import dataSlider from "./dataSlider"
import BtnSlider from "./BtnSlider";


const Slider = (props) => {


  const [slideAnim, setSlideAnim] = useState({
    index: 1,
    inProgress: false
  })

  const nextSlide = () => {
    if (slideAnim.index < dataSlider.length && !slideAnim.inProgress) {
      setSlideAnim({index: slideAnim.index + 1, inProgress: true})
      setTimeout(() => {
        setSlideAnim({index: slideAnim.index + 1, inProgress: false})
      }, 400);
    }
    else if (slideAnim.index === dataSlider.length && !slideAnim.inProgress) {
      setSlideAnim({index: 1, inProgress: true})
      setTimeout(() => {
        setSlideAnim({ index: 1, inProgress: false });
      }, 400);
    }
  }

  const previousSlide = () => {
    if (slideAnim.index > 1 && !slideAnim.inProgress) {
      setSlideAnim({ index: slideAnim.index - 1, inProgress: true });
      setTimeout(() => {
        setSlideAnim({ index: slideAnim.index - 1, inProgress: false });
      }, 400);
    }
    else if (slideAnim.index === 1 && !slideAnim.inProgress){
      setSlideAnim({ index: dataSlider.length, inProgress: true });
      setTimeout(() => {
        setSlideAnim({ index: dataSlider.length, inProgress: false });
      }, 400);
    }
  }

  return (
    <div className="container-slider">
      {dataSlider.map((obj, index) => {
        return (
          <div
            key={obj.id}
            className={slideAnim.index === index + 1 ? "slide active-anim" : "slide"}
          >
            <img src={process.env.PUBLIC_URL + `/Imgs/img${index + 1}.jpg`} alt="slider"/>
          </div>
        )
      })}
      <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <BtnSlider moveSlide={previousSlide} direction={"previous"} />
    </div>
  );
};

export default Slider;
