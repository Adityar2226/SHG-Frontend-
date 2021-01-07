import {combineReducers} from 'redux';

const profilesReducer = (profiles=[], action) => {
    if (action.type === 'FILTER_PROFILES'){
        console.log(action.payload);
        return action.payload;
    }
    return profiles;
    }

const checkId = (previousId=[], action) => {
console.log("inside check id reducer");
if (action.type === 'CREATE_ID'){
      return action.payload;
}
        return previousId;
}

export default combineReducers({
    profiles: profilesReducer,
    login: checkId
})

