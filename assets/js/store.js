function createStore(reducer){
    let currentState = reducer(undefined,{});

    return {
        getState : () => currentState,
        dispatch : (action) => {
            currentState = reducer(currentState,action);
        }
    }
}

let initialState = {
    favorites : []
}

function favoritesReducer(state = initialState,action){
    switch(action.type){
        case "ADD_FAVORITE":
            return {favorites:[...state["favorites"],action.payload.favorite]};
        case "REMOVE_FAVORITE":
            return {favorites: state.favorites.filter(fav => fav.id !== action.payload.favorite.id)}
        default:
            return state;
    }
}

// const action = {type:"ADD_FAVORITE",payload:{favorite:"Learning State mgmt"}};

let store = createStore(favoritesReducer);
// store.dispatch(action);
// store.getState();


export default store;