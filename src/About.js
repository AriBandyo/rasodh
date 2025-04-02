import React, { useEffect, useRef, useState } from "react";
import "./Home.css"; // Make sure Home.css contains .about-section and animations

const About = () => {
  const aboutRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <section
      id="about"
      ref={aboutRef}
      className={`about-section ${isVisible ? "visible" : ""}`}
    >
      <h2>🍽️ About Rasodh – Where Every Bite Tells a Story!</h2>
      <p>
        Welcome to <strong>Rasodh</strong>, where we bring the authentic flavors of India straight to your table.
        Born from a passion for homemade, high-quality food, Rasodh is all about
        celebrating rich traditions, bold spices, and time-honored recipes that
        make every meal unforgettable.
        <br /><br />
        <strong>What sets us apart?</strong> Our spices are sourced directly from India,
        ensuring a depth of flavor that captures the true essence of Indian
        cuisine. Combined with fresh, premium ingredients and meticulous
        preparation, our dishes deliver an experience that's both nostalgic and
        indulgent.
        <br /><br />
        Whether you’re craving the comfort of familiar dishes or exploring new
        tastes, Rasodh is your go-to destination for authentic Indian food made
        with love ❤️.
      </p>
    </section>
  );
};

export default About;
