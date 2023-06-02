const express = require("express")
const axios = require("axios");
const app = express();
const port = 3000;

app.get("/", async(req,res)=>{
    const axios = require("axios");
    const options = {
        method: 'GET',
        url: 'https://random-words5.p.rapidapi.com/getMultipleRandom',
        params: {count: '5'},
        headers: {
          'X-RapidAPI-Key': '11d5d5cb8emsh73bf2c31fb04844p1866c3jsnb3b5231fec55',
          'X-RapidAPI-Host': 'random-words5.p.rapidapi.com'
        }
      };
      
      try {
          const response = await axios.request(options);
          console.log(response.data);
      } catch (error) {
          console.error(error);
      }
});
app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})