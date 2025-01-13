import {createSlice} from "@reduxjs/toolkit"
const cartSlice=createSlice({
    name:"cart",
    initialState:[],
    reducers:{                          
      AddItem:(state,action)=>{
        state.push(action.payload)    //arugment passing function
      },
      RemoveItem:(state,action)=>{
        return state.filter((item)=>(
            item.cart.id!==action.payload
        ))
      }
    }

})
export const {AddItem,RemoveItem}=cartSlice.actions
export default cartSlice.reducer  //get data from store