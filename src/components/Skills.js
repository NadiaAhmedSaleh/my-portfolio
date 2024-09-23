import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

//skills

import html5 from "../assets/img/html-5-svgrepo-com.svg";
import css3 from "../assets/img/css-3-svgrepo-com.svg";
import js from "../assets/img/javascript-svgrepo-com.svg";
import jquery from "../assets/img/jquery-svgrepo-com.svg";
import bootstrap from "../assets/img/bootstrap-svgrepo-com.svg";
import tailwind from "../assets/img/tailwindcss-icon-svgrepo-com.svg";
import angular from "../assets/img/angular-svgrepo-com.svg";
import typescript from "../assets/img/typescript-icon-svgrepo-com.svg";
import react from "../assets/img/react-svgrepo-com.svg";
import github from "../assets/img/github-142-svgrepo-com.svg";




function Skills() {

  

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1, 
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, 
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, 
    },
  };

  return (
    <section className="skillssection"  >

        <h2 className="skills">Skills</h2>
        <p className="skillsp">Always learning new technologies and developing my technical skills</p>

      <Carousel 
        className="carousel"
        swipeable={false}
        draggable={false}
        showDots={false}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
       
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-30-px"
      >

        

        <div className="item">
          <img src={html5} alt="image" />
          <h5>HTML5</h5>
        </div>
        <div className="item">
          <img src={css3} alt="image" />
          <h5>CSS3</h5>
        </div>
        <div className="item">
          <img src={js} alt="image" />
          <h5>JavaScript</h5>
        </div>
        <div className="item">
          <img src={jquery} alt="image" />
          <h5>jQuery</h5>
        </div>
        <div className="item">
          <img src={bootstrap} alt="image" />
          <h5>Bootsrap</h5>
        </div>
        <div className="item">
          <img src={typescript} alt="image" />
          <h5>TypeScript</h5>
        </div>
        <div className="item">
          <img src={angular} alt="image" />
          <h5>Angular</h5>
        </div>
        <div className="item">
          <img src={react} alt="image" />
          <h5>React Js</h5>
        </div>
        <div className="item">
          <img src={tailwind} alt="image" />
          <h5>Tailwind CSS</h5>
        </div>
        <div className="item">
          <img src={github} alt="image" />
          <h5>Github</h5>
        </div>


       
       
      </Carousel>

      
    </section>
  );
}

export default Skills;
