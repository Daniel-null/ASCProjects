const link = 'https://randomuser.me/api?gender=female';
// const fetchUser = fetch('https://randomuser.me/api')

// fetch allows us to talk to other api's
// the .then just chains another function or apu to the previous one
// // essentially first this THEN that
const data = fetch(link).then(function(response){
    return response.json(); // returning the data
}).then(function(data) {
    console.log(data);
});

// function getJSON(response) {
//     return response.json
// }

// function useData(data) {
//     console.log('data from site ', data)
// }
// const responseFromWebsite = fetchUser.then(getJSON);
// const randomuser = responseFromWebsite.then(useData);


// function getJSON(response) {
//     console.log('response', response.json())
// }



