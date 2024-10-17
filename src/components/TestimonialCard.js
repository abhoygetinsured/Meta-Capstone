import React from "react";
import "./TestimonialCard.css";

export default function TestimonialCard() {
  return (
    <>
      <div className="testimonial-card">
        <img
          src="https://abhoygorai.netlify.app/static/media/profile-photo.0de76dae6e6bbc347a8e.jpg"
          alt="profile"
          className="testimonial-photo"
        />
        <div className="star-container">
            <img src="https://cdn-icons-png.flaticon.com/512/541/541415.png" alt="start" height={20}/>
            <img src="https://cdn-icons-png.flaticon.com/512/541/541415.png" alt="start" height={20}/>
            <img src="https://cdn-icons-png.flaticon.com/512/541/541415.png" alt="start" height={20}/>
            <img src="https://cdn-icons-png.flaticon.com/512/541/541415.png" alt="start" height={20}/>
            <img src="https://cdn-icons-png.flaticon.com/512/541/541415.png" alt="start" height={20}/>
        </div>
        <p className="testimonial-title">John Doe</p>
        <p className="testimonial-desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto, reiciendis. Possimus voluptas perspiciatis nisi eveniet odit doloribus.

</p>
      </div>
    </>
  );
}
