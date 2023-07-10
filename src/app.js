import React from "react";
import ReactDOM from "react-dom/client";
// Default import 
import Header from "./components/Header"
import Body from "./components/Body"
import Footer from "./components/Footer";
// Named Import 
import {Title} from "./components/Header"

// =================Lecture 1,2,3======================


// const heading1=React.createElement("h1",{id:"title" ,key:"h1"},"this is heading h1")
// JSX 
// const heading1=(<h1 id="h1" key="h1" className="heading1"> Namaste React </h1>)
// // const heading2=React.createElement("h2",{id:"title",key:"h2"},"this is heading h2")
// const heading2=<h1 id="h2" key="h2"> this is heading2</h1>
// const container=React.createElement("div",{id:"container"},[heading1,heading2,"this is div from react"])

// h

// convert React.createElement heading1 object to html(dom)


// React Component----------- Lecture 03 ----------------------
// functional component 
// class based component 
// const Title=()=>{
//    return (<h1 id="h1" key="h1" className="heading1">  </h1>)}

// // const data = api.getdata() --- cross side scripting attack 
// const HeadingComponent = () =>{
//     return (
//         <React.Fragment>
//         <div>
//         {heading1}
//         <Title/>
//         {5+10}
//         {/* {data } this is secure  ==== sanitization  */ } 
//         <h1> This is from header component</h1>
//         <h2>This is heading 2 </h2>
//         </div>
//         </React.Fragment>
//     );
// }


//============================================  Lecture 4 =========================
// const Title=()=>{
//     return (
//     // <h1 id="h1" key="h1" className="heading1"> Food Villa </h1>
//     <a href="/">
//         <img  className="logo" alt="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqryv_0XY_z8ehJ1BV0J2rtChqkIyegfOn2T__fkHIZw&s" ></img>
//     </a>
//     )}
 
 // const data = api.getdata() --- cross side scripting attack 
//  const Header = () =>{
//      return (
//          <React.Fragment>
//             <div className="header">
//                 <Title/>
//                 <div className="nav-items">
//                     <ul >
//                         <li>Home</li>
//                         <li>About Us</li>
//                         <li>Contact</li>
//                         <li>Cart</li>
//                     </ul>
//                 </div>
//             </div>
//          </React.Fragment>
//      );
//  }
// Old Way
// const BurgerKing ={
//     name:"Burger King",
//     image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ee5f8e06b300efc07c9fe3f4df40dfc4",
//     cusines:["Burger" ,"American"],
//     rating:"4.2"
// }
//  Old Way 
//  const RestaurentCard = () =>{
//      return(
//          <div className="card">
//              <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ee5f8e06b300efc07c9fe3f4df40dfc4" alt="burgerking"></img>
//              <h2>BurgerKing</h2>
//              <h3>Burgers , American </h3>
//              <h4>4.2 stars</h4>
//          </div>
//      )
//  }
// Config Driven UI 
// const Config=[
//     {
//         type="caraousel",
//         cards: [
//             {
//                 offername:"50% off"
//             },
//             {
//                 offername:"No delivery Charge"
//             },
//         ]
//     },
//     {
//         type="restaurants",
//         cards: [
//             {
//                 name:"Burger King",
//                 image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ee5f8e06b300efc07c9fe3f4df40dfc4",
//                 cusines:["Burger" ,"American"],
//                 rating:"4.2"
//             },
//             {
//                 name:"KFC",
//                 image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ee5f8e06b300efc07c9fe3f4df40dfc4",
//                 cusines:["KFC" ,"American"],
//                 rating:"4.2"
//             },
           
//         ]
//     },
   
// ]

// const restaurantList = [
//         {
//             name:"Burger King",
//             image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ee5f8e06b300efc07c9fe3f4df40dfc4",
//             cusines:["Burger" ,"American"],
//             rating:"4.2",
//             key:1
//         },
//         {
//             name:"KFC",
//             image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ee5f8e06b300efc07c9fe3f4df40dfc4",
//             cusines:["KFC" ,"American"],
//             rating:"4.2",
//             key:2
//         },
//         {
//             name:"Pizza Hut",
//             image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ee5f8e06b300efc07c9fe3f4df40dfc4",
//             cusines:["Pizza" ,"American"],
//             rating:"4.2",
//             key:3
//         },
//         {
//             name:"La Pinos",
//             image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ee5f8e06b300efc07c9fe3f4df40dfc4",
//             cusines:["Pizza" ,"American"],
//             rating:"4.2",
//             key:4
//         },
//         {
//             name:"La Pinos",
//             image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ee5f8e06b300efc07c9fe3f4df40dfc4",
//             cusines:["Pizza" ,"American"],
//             rating:"4.2",
//             key:5
//         },
//         {
//             name:"La Pinos",
//             image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ee5f8e06b300efc07c9fe3f4df40dfc4",
//             cusines:["Pizza" ,"American"],
//             rating:"4.2",
//             key:6
//         },
//         {
//             name:"La Pinos",
//             image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ee5f8e06b300efc07c9fe3f4df40dfc4",
//             cusines:["Pizza" ,"American"],
//             rating:"4.2",
//             key:7
//         },
//         {
//             name:"La Pinos",
//             image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ee5f8e06b300efc07c9fe3f4df40dfc4",
//             cusines:["Pizza" ,"American"],
//             rating:"4.2",
//             key:8
//         },
    
// ]

// // Dynamic Way

// // const RestaurentCard = ({restpropsaurant}) =>{ 
//  const RestaurentCard = ({name,image,cusines,rating}) =>{ 
//     //  const {name,image,cusines,rating}=restaurant
//     return(
//         <div className="card">
            
//             <img src={image} alt="burgerking"></img>
//             <h2>{name}</h2>
//             <h3>{cusines.join(",")}</h3>
//             <h4>{rating} stars</h4>
//         </div>
//     )
// }
// // props - properties
//  const Body=()=>{
//      return (
//         //  <div className="restaurant-list">
//         //      <RestaurentCard restaurant = {restaurantList[0]}/>
//         //      <RestaurentCard restaurant = {restaurantList[1]}/>
//         //      <RestaurentCard restaurant = {restaurantList[2]}/>
//         //      <RestaurentCard restaurant = {restaurantList[3]}/>
//         //      <RestaurentCard restaurant = {restaurantList[4]}/>
//         //      <RestaurentCard restaurant = {restaurantList[5]}/>
//         //      <RestaurentCard restaurant = {restaurantList[6]}/>
//         //      <RestaurentCard restaurant = {restaurantList[7]}/>
//         //  </div>
//         <div className="restaurant-list">
//         {
//             restaurantList.map((restaurant)=>{
//                 return <RestaurentCard  {...restaurant} key={restaurant.key}/>
//             })
//         }
//         {/* <RestaurentCard  {...restaurantList[0]}/>
//         <RestaurentCard   {...restaurantList[1]}/>
//         <RestaurentCard  {...restaurantList[2]}/>
//         <RestaurentCard   {...restaurantList[3]}/>
//         <RestaurentCard   {...restaurantList[4]}/>
//         <RestaurentCard  {...restaurantList[5]}/>
//         <RestaurentCard  {...restaurantList[6]}/>
//         <RestaurentCard   {... restaurantList[7]}/> */}
//     </div>
//      );
//  }
//  inline styling 
//  const styleObj={
//      backgroundColor:"red"
//  }
//  const Footer=()=>{
//     return (
//         <h4 style={styleObj}>Footer</h4>
//     );
// }

const AppLayout = () => {
    return(
    <React.Fragment>
        <Header/>
        <Body/>
        <Footer/>
    </React.Fragment>)
}
const root=ReactDOM.createRoot(document.getElementById("root"))
// console.log(Heading)
root.render(<AppLayout/>)

