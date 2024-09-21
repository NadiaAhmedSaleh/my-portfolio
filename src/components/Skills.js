import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";


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
    <section style={{ backgroundColor: "#0d0323" }}>
      <h2 className="skills">Skills</h2>
      <p className="skills">
        Always learning new technologies and developing my technical skills
      </p>

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
          <img src={meter1} alt="image" />
          <h5>HTML5</h5>
        </div>
        <div className="item">
          <img src={meter1} alt="image" />
          <h5>CSS3</h5>
        </div>
        <div className="item">
          <img src={meter1} alt="image" />
          <h5>JavaScript</h5>
        </div>
        <div className="item">
          <img src={meter2} alt="image" />
          <h5>jQuery</h5>
        </div>
        <div className="item">
          <img src={meter2} alt="image" />
          <h5>Bootsrap</h5>
        </div>
        <div className="item">
          <img src={meter2} alt="image" />
          <h5>TypeScript</h5>
        </div>
        <div className="item">
          <img src={meter3} alt="image" />
          <h5>Angular</h5>
        </div>
        <div className="item">
          <img src={meter3} alt="image" />
          <h5>React Js</h5>
        </div>
        <div className="item">
          <img src={meter3} alt="image" />
          <h5>Tailwind CSS</h5>
        </div>
      </Carousel>

      <img className="background-image-left" src={colorSharp} />
    </section>
  );
}

export default Skills;
