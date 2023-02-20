import { createSlice } from "@reduxjs/toolkit";

export const dishesSlice = createSlice ({
    name: 'dishes',
    initialState: {
        selectCategory: "Breakfast"
    },

    reducers:{
       
          }, 

     
})

export const getSelectedCategory = state => state.dishes.selectCategory;
export default dishesSlice.reducer;