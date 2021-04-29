const initialState = {
    students: [],
    studentsFiltered: [],
    nameFilter: "",
    tagFilter: "",
};

function rootReducer(state = initialState, action) {

    switch (action.type) {
        case "UPDATE_STUDENT":
            // console.log(state);
            console.log(action.payload);
            return {
                ...state,
                students: action.payload,
            };
        case "UPDATE_NAME_FILTER":
            return {
                ...state,
                nameFilter: action.payload,
            };
        case "UPDATE_TAG_FILTER":
            return {
                ...state,
                tagFilter: action.payload,
            };
        default:
            return state;
    }

};

// export default rootReducer;

// import { combineReducers } from 'redux';
// import studentsReducer from './studentsReducer';
// import inputFilterReducer.js from './inputFilterReducer.js';

// const rootReducer = combineReducers({
//     studentsReducer
// })

export default rootReducer;
