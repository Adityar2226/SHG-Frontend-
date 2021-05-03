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
export const createId = user => {
//make some backend call here
console.log(user)
 return {
 type:"REGISTER",
 payload: user
 }};
 export const LoginId = user => {
 //make some backend call here
 console.log(user)
  return {
  type:"Login",
  payload: user
  }};
