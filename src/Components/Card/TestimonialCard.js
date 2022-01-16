import React from "react";
import "./TestimonialCard.css";
const TestimonialCard = ({ name, image, description }) => {
  let descriptionText = description.replace("<p>", "").replace("</p>", "");
  return (
    <div class="profile-card-4">
      <img src={image} class="img img-responsive" />
      <div class="profile-content">
        <div class="profile-name">{name}</div>
        <div class="profile-description">{descriptionText}</div>
      </div>
    </div>
  );
};

export default TestimonialCard;
