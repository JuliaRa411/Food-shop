import dataDishes from "../data/dataDishes";
import Dish from "./DishesComponents/Dish";

 const Dishes =() =>{
    return(
        <div> 
            
        {dataDishes.map(dish => < Dish key ={dish.id} dish ={dish} /> )} 
       
             </div>
    )
 }
 export default Dishes;