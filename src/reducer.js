//initial state helps us to know how the data layer looks like
// So in the starting the user will not be logged in
export const initialState = {
    user: null,
}

export const actionTypes = {      //so after our initial state this will push this action into the data layer
    SET_USER: "SET_USER"
}

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case actionTypes.SET_USER:
            return {
                ...state,
                user: action.user
            }

        default:
            return state;
    }
}

export default reducer