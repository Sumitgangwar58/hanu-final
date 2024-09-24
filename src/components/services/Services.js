import React from "react";
import "./services.css";
import { servicesImages } from "../../assets/images";

const servicesData = [
  {
    title: "Marriage Hall",
    description:
      "Celebrate your wedding day in style with our beautifully decorated marriage hall. We offer a range of packages to suit your needs, from intimate ceremonies to grand receptions.",
    image: servicesImages[1],
    alt: "wedding",
  },
  {
    title: "Kitty Party",
    description:
      "Host your kitty party in our versatile space, designed for comfort and fun. Our team will ensure a seamless experience, so you can enjoy quality time with your friends.",
    image: servicesImages[0],
    alt: "kitty-party",
  },
  {
    title: "Catering Services",
    description:
      "Delight your guests with exquisite catering options. Our expert chefs prepare a variety of dishes to suit all tastes, ensuring a memorable dining experience.",
    image: servicesImages[5],
    alt: "catering",
  },
  {
    title: "Birthday Parties",
    description:
      "Make your birthday celebrations unforgettable with our customized party packages. From decorations to entertainment, we handle every detail to make your special day perfect.",
    image: servicesImages[3],
    alt: "birthday party",
  },
  {
    title: "Corporate Events",
    description:
      "Whether it's a conference, seminar, or team-building activity, our venue is equipped to handle corporate events of all sizes. We provide professional service and state-of-the-art facilities to meet your business needs.",
    image: servicesImages[4],
    alt: "corporate events",
  },
  {
    title: "Social Gatherings",
    description:
      "From anniversaries to reunions, our banquet hall is ideal for any social gathering. Our flexible space and attentive service ensure that your event goes off without a hitch.",
    image: servicesImages[2],
    alt: "social Gathering",
  },
];

const Services = () => {
  return (
    <div className="services-container" id="services">
      <h2>Services</h2>
      <ul className="services-list">
        {servicesData.map((service, index) => (
          <li key={index} className="service-list-item">
            <div className="description-container">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
            <img src={service.image} alt={service.alt} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Services;
