import {combineReducers} from 'redux';

const profilesReducer = (profiles = [], action) => {
    if (action.type === 'FILTER_PROFILES') {

        return action.payload;
    }
    return profiles;
}

const registerReducer = (previousId = [], action) => {
    switch (action.type) {
        case "REGISTER":
            return action.payload;
         case "Login":
         return action.payload;

       default:
            return [];
    }
}

export default combineReducers({
    profiles: profilesReducer,
    register: registerReducer
})

