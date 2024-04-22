import React from "react";
import mission from '../Components/Assets/missionimg.png'
import vision from "../Components/Assets/vision.png"
import aboutus from '../Components/Assets/aboutus.png'
import "../Pages/CSS/About.css"

const About = () => {
  return (
    <div className="about-us">
        <div className="Whoweare">
            <h1>Who We Are !</h1>
        </div>
      <div className="container">
        <div className="small_container">
            <div className="mini_container">
                <h2>Our Story </h2>
                <img src={""} alt="" className="image2" />
              
            </div>
            <p>
            In 1989, we embarked on a journey to create a haven for tech
            enthusiasts, professionals, and everyday users alike. With a passion
            for innovation and a commitment to customer satisfaction, we set out
            to establish a shop that not only offers the latest technology but
            also provides personalized service and expert advice.
            </p>
        </div>
       <div className="small_container">
            <div className="mini_container">
                <h2>Mission </h2>
                <img src={mission} alt="" className="image" />
            </div>

            <p>Our mission is to become the best tech shop in our local community, providing exceptional products, service, and expertise to empower our customers with the latest technology solutions.</p>
       </div>
       <div className="small_container">
            <div className="mini_container">
                <h2>Vision </h2>
                <img src={vision} alt="" className="image1"/>
            </div>

            <p>Our vision is to become the leading tech shop in the country, recognized for our unparalleled selection, expertise, and dedication to customer satisfaction.</p>
       </div>
      </div>
    </div>
  );
};

export default About;
