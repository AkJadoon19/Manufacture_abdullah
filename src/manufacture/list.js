import React from "react";
import Title from "../components/Title";
import {Link} from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack} from "react-icons/io";
import { FaAlignRight } from "react-icons/fa";
export default function Contact() {
  return (
    <section className="py-5">
      <div className="row">
        <div className="col-10 mx-auto col-md-6 my-3">
          <Title title="Select an option" />
          <Link to="/addproduct" className="main-link" style={{ margin: "2rem" }}>
          Add Product
          </Link>
          <Link to="/viewproduct" className="main-link" style={{ margin: "2rem" }}>
          View Order
          </Link>

          <Link to ="/products" className="bf">
             
             <IoIosArrowBack> Backward </IoIosArrowBack>
             Back
           </Link>   
          
        </div>
      </div>
    </section>
  );
}

