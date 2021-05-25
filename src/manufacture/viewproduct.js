import React from "react";
import {Link} from 'react-router-dom'
import { IoIosArrowBack} from "react-icons/io";
export default function CartPage() {
  return (
    <>
      <h1>Hello From View page Page</h1>
      <Link to ="/list" className="bf">
    <IoIosArrowBack > Back</IoIosArrowBack>
    Back
    </Link>
    </>
    
       
   

  );
}
