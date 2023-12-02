const initialState = {
    count: 0,
    registerForm: {
        username: "",
        lastname: "",
        email: "",
    }
}

const counterReducer = (state = initialState, action) => {
    switch (action.type){
        case 'INCREMENT':
            return {count: state.count + 1};
        case 'DECREMENT':
            return {count: state.count - 1};
        default:
            return state;

        case 'SET_REGISTER_FORM':
            return state;
    }
}

export default counterReducer;
