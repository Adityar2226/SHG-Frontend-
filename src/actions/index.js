export const filterProfiles = criteria => {
    return {
        type: 'FILTER_PROFILES',
        payload: [{firstName:"avi", gender: "female",  city: "Pauri"},
                {firstName:"arushi", gender: "female",  city: "Dehradun"},
                {firstName:"arushi", gender: "female",  city: "Dehradun"},
                {firstName:"arushi", gender: "female",  city: "Dehradun"},
                {firstName:"arushi", gender: "female",  city: "Dehradun"},
                {firstName:"arushi", gender: "female",  city: "Dehradun"},
                {firstName:"arushi", gender: "female",  city: "Dehradun"},
                {firstName:"arushi", gender: "female",  city: "Dehradun"},
                {firstName:"arushi", gender: "female",  city: "Dehradun"},
                {firstName:"arushi", gender: "female",  city: "Dehradun"},
                {firstName:"marci", gender: "female",  city: "Delhi"}]
    }
}
/* Action creator*/
export const createId = (name,password,ConfirmPassword) => {
return {
type: 'CREATE_ID',
payload: {
Name:name,
Password:password,
ConfirmPassword:ConfirmPassword}
};
};