const axios = require("axios");
const moment = require("moment");

const readTransaction = async () => {
  try {
    //here initialize two variable like startTime and totalTime
    let startTime;
    let totalTime = 0;
    //use for loop 5 times time for the transction api
    for (let index = 0; index < 5; index++) {
      //assign current date to the startTime variable
      startTime = Date.now();
      //getting api response using axios
      await axios
        .get("https://horizon-testnet.stellar.org/transactions/")
        .then(async (res) => {
          console.log(res.data);
          response = res.data;
        })
        .catch((error) => {
          console.log({ message: error.message, code: error.code });
        });
      //here finding difference of time
      totalTime += moment().diff(moment(startTime), "milliseconds");
    }
    // finding average of totaltime divided by 5 (because loop is going on 5times) (time in miliseconds)
    let readspeed = totalTime / 5;
    console.log("totaltime", readspeed);
  } catch (error) {
    console.log({ message: error.message, code: error.code });
  }
};

readTransaction();
