const express=require('express');
const redis=require('redis');
const {createClient}=redis;
const app=express();
const port=3000;

const redisClient=createClient({
    url:'redis://default:password@localhost:6379'
});

async function fetchData()
{     
    await new Promise(resolve=>setTimeout(resolve,2000));
    const response=await fetch('https://jsonplaceholder.typicode.com/posts/2');
    const data=await response.json();
    return data;
}

app.get('/jsondata',async(req,res)=>{
    const cachedData=await redisClient.get('jsondata');
    if(cachedData){
        console.log("Cache hit");
        res.json(JSON.parse(cachedData));
        return
    }
    console.log("Cache miss");
    // Fetch data from the API and store it in Redis
   const data=await fetchData();
   await redisClient.set('jsondata',JSON.stringify(data));
    res.json(data);
});

async function init(){
 console.log("Connecting to redis server...");
 await redisClient.connect();
 console.log("Connected to redis server...");
 app.listen(port,()=>{   
    console.log(`Server is running on http://localhost:${port}`);
})
}
init()
