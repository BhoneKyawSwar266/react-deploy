import React from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import '../Pages/CSS/Location.css'

const Location = () => {
  return (
    <div className="container">
      <div className="header">
        <h1>Millionaire Computer Shop Location</h1>
        <p>
          Discover our computer shop nestled in the vibrant heart of Kalaymyo
          City, situated in the picturesque Sagaing Division of Myanmar. We
          invite you to explore our extensive range of products and experience
          personalized service from our knowledgeable team.
        </p>
      </div>
      <div className="location">
        <LocationOnIcon />
        <p>Bogyoke Road , Kalaymayo , Near Central intersection</p>
      </div>
      <div className="location">
        <LocalPhoneIcon />
        <p>09763213584</p>
      </div>
      <div className="googlemap">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.4879121749987!2d94.05721907509707!3d23.18888297905749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x374b738ac2666f35%3A0x89431905398900c3!2z4YCA4YC94YCU4YC64YCV4YC74YCw4YCQ4YCs4YCG4YCt4YCv4YCE4YC6!5e0!3m2!1smy!2smm!4v1713605850426!5m2!1smy!2smm"
          width="600"
          height="450"
          style={{ border: "0" }} /* converted to a JavaScript object */
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Location;
