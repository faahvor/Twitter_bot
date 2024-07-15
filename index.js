import express from "express";
import "dotenv/config";
import rwClient from "./twitterClient.js";
import { CronJob } from "cron";

const app = express();
const PORT = 8888;

const tweet = async ()=>{
    try{
        await rwClient.v2.tweet(
            ",Goodevening hope your day is productive! testing server :)"
        );
        console.log("tweeted!");
    }catch(error){
        console.log(error);
    }
}

//time you want it to show 
//min,hour,day,month,year
const job = new CronJob("51 18 * * *",()=>{
    tweet();
})


app.listen(PORT, () => {
  console.log(`server is running http://localhost:${PORT}`);
});

job.start();
