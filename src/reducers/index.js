import {combineReducers} from 'redux';

const profilesReducer = (profiles=[], action) => {
    if (action.type === 'FILTER_PROFILES'){
        console.log(action.payload);
        return action.payload;
    }
    return profiles;
    }

export default combineReducers({
    profiles: profilesReducer
})

