import React from "react";
import Hero from "../components/Hero";
import contactImg from "../images/manu1.jpg";
import Contact from "../manufacture/list";
export default function ManagerPage() {
  return (
    <>
      <Hero img={contactImg} />
      <Contact />
    </>
  );
}
