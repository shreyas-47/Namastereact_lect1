import React from "react"
import { restaurantList } from "../Constant";
import RestaurentCard from "./RestaurantCard";
import { useState } from "react";
// props - properties
function filterData(searchText,restaurants){
    return restaurants.filter((restaurant)=>{
        return restaurant.name.includes(searchText)
    })

}

const Body=()=>{
    const[searchText,setSearchInput]=useState("");
    const[restaurants,setRestaurants]=useState(restaurantList)
 return (
    <>
    <div className="search-container">
        <input type="test"
         className="search-input" 
         placeholder="Search" 
         value={searchText}
         onChange={(e)=>{
             setSearchInput(e.target.value)
         }}></input>
        <button 
        className="search-btn"
        onClick={()=>{
            // need to filter the data
            const data = filterData(searchText,restaurants);
            // update the state restaurant
            setRestaurants(data);
        }}
        >Search</button>
    </div>
    <div className="restaurant-list">
    {
        restaurants.map((restaurant)=>{
            return <RestaurentCard  {...restaurant} key={restaurant.key}/>
        })
    }
    </div>
</>
 );
}

export default Body;