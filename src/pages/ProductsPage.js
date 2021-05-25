import React from "react";
import Hero from "../components/Hero";
import contactImg from "../images/manu2.jpg";
import Contact from "../manufacture/login";
export default function ManagerPage() {
  return (
    <>
      <Hero img={contactImg} />
      <Contact />
    </>
  );
}
