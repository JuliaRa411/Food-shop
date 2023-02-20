import Filter from "./Filter";

const AllCategories =() =>{

    return(<div>

      <h1> Chose your meal </h1> 
{['Hot Beverages','Cold Beverages', 'Lunch & Dinner', 'Breakfast', 'ALL']

.map((category,index) => <Filter key ={index} category ={category}/> 
)}

    </div>)
}

    export default AllCategories;