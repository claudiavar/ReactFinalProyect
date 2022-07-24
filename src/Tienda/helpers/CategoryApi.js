const axios = require('axios').default;

export const category = () =>{
    axios.get('https://reactfinal-5c36d-default-rtdb.firebaseio.com/Category.json')
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
    });  
}