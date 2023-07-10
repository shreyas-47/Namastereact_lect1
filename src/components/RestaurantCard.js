
import { IMG_CDN_URL } from "../Constant";

// const RestaurentCard = ({restpropsaurant}) =>{ 
    const RestaurentCard = ({name,image,cusines,rating}) =>{ 
        //  const {name,image,cusines,rating}=restaurant
        return(
            <div className="card">
                
                <img src={IMG_CDN_URL} alt="burgerking"></img>
                <h2>{name}</h2>
                <h3>{cusines.join(",")}</h3>
                <h4>{rating} stars</h4>
            </div>
        )
        }

export default RestaurentCard;