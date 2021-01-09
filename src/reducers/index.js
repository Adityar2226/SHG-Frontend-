import {combineReducers} from 'redux';

const profilesReducer = (profiles = [], action) => {
    if (action.type === 'FILTER_PROFILES') {
        console.log(action.payload);
        return action.payload;
    }
    return profiles;
}

const registerReducers = (previousId = [], action) => {
    switch (action.type) {
        case "REGISTER":
            return action.payload;
        default:
            return [];
    }
}

export default combineReducers({
    profiles: profilesReducer,
    register: registerReducers
})

