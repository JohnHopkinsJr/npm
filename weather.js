var axios = require("axios");
module.exports = {
  getMockData:function(title){
  axios.get(`https://api.mockaroo.com/api/b86e3bf0?count=1000&key=bede6760`)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}
}