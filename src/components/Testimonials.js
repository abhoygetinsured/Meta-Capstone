import React from "react";
import "./Testimonials.css";
import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
  return (
    <>
      <article className="testimonials">
        <p className="text1">Testimonials</p>
        <p className="text2">Read What Others</p>
        <p className="text2">Have To Say</p>
        <div className="testimonial-holder">
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />

        </div>
      </article>
    </>
  );
}
