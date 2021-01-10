export const filterProfiles = criteria => {
    return {
        type: 'FILTER_PROFILES',
        payload: [{firstName: "avi", gender: "female", city: "Pauri"},
            {firstName: "arushi", gender: "female", city: "Dehradun"},
            {firstName: "arushi", gender: "female", city: "Dehradun"},
            {firstName: "arushi", gender: "female", city: "Dehradun"},
            {firstName: "arushi", gender: "female", city: "Dehradun"},
            {firstName: "arushi", gender: "female", city: "Dehradun"},
            {firstName: "arushi", gender: "female", city: "Dehradun"},
            {firstName: "arushi", gender: "female", city: "Dehradun"},
            {firstName: "arushi", gender: "female", city: "Dehradun"},
            {firstName: "arushi", gender: "female", city: "Dehradun"},
            {firstName: "marci", gender: "female", city: "Delhi"}]
    }
}
/* Action creator*/
export const createId = (name, password, ConfirmPassword) => {
    //Make some backend call here
    let user = {name: "John Doe", userId: "some-user-id"}
    return {type: "REGISTER", payload: user}
};