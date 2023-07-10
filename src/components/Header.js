import React from "react";
import ReactDOM from "react-dom/client";
export const Title=()=>{
    return (
    <a href="/">
    <img  className="logo" alt="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqryv_0XY_z8ehJ1BV0J2rtChqkIyegfOn2T__fkHIZw&s" ></img>
    </a>
    )}
    const Header = () =>{
        return (
            <React.Fragment>
               <div className="header">
                   <Title/>
                   <div className="nav-items">
                       <ul >
                           <li>Home</li>
                           <li>About Us</li>
                           <li>Contact</li>
                           <li>Cart</li>
                       </ul>
                   </div>
               </div>
            </React.Fragment>
        );
    }

    export default Header;