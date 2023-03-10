const ReducerShop = (state = [], action) => {

    if(action.type === "delete"){
        return state.filter(item=> item.id != action.payload);
    }
    if(action.type === "update"){
        let index = state.findIndex(i => i.id === action.payload.id);
        state[index] = action.payload;
        return [...state];
    }

}
export default ReducerShop;