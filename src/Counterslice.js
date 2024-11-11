import { createSlice } from "@reduxjs/toolkit"

let initialState={
    count:0,
    data:[]
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        // increment: (state,action) => {
        //     const item = state.data.find((item) => item.id === action.payload);
        //     if (item) {
        //         item.quantity +=1;
        //     }
        // },
        // decrement: (state,action) =>{
        //     const item =state.data.find((item)=> item.id === action.payload);
        //     if (item && item.quantity > 0) {
        //         item.quantity -= 1;
        //     }
        //     if (item.quantity === 0){
        //         state.data = state.data.filter(product => product.id !== action.payload);
        //     }

        // },
        


        increment: (state, action) => {
            const item = state.data.find((item) => item.id === action.payload); // Use id to find the item
            if (item) {
              item.quantity += 1; // Increase quantity for that item
            }
          },
          
          decrement: (state, action) => {
            const item = state.data.find((item) => item.id === action.payload); // Use id to find the item
            if (item && item.quantity > 0) {
              item.quantity -= 1; // Decrease quantity for that item
            }
            if (item.quantity === 0) {
              // If the quantity is 0, remove the item from the cart
              state.data = state.data.filter(product => product.id !== action.payload);
            }
          },
          
        // deleteItem: (state, action) => {
        //     state.data = state.data.filter(product => product.id !== action.payload);
        // },

        addData: (state, action) => {
            // Ensure you are using the 'id' to identify each product
            const item = state.data.find((item) => item.id === action.payload.id);
            if (item) {
              // If the item exists, increment its quantity
              item.quantity += 1;
            } else {
              // If the item doesn't exist, add it to the cart with quantity 1
              state.data.push({ ...action.payload, quantity: 1 });
            }
          
        // addData:(state,action) =>{
        //     const item = state.data.find((item) => item.id === action.payload.id);
        //     if(item) {
        //         item.quantity +=1;
        //     }else{
        //         state.data.push({ ...action.payload,quantity: 1});
        //     }
        // console.log(action);
        // // state.data=action.payload
        // state.data.push(action.payload)


        }
    }
})

export const { increment,decrement,addData} = counterSlice.actions

export default counterSlice.reducer