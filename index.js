import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", async(req,res) =>{
    try{
        const response = await axios.get(`https://api.api-ninjas.com/v1/riddles`,{
            headers: {
                'x-api-key': 'Nl8tPW0npSmuZpwArRIfxA==Ax4f2Gsvm0dez8T7'
            }
        })
        const result = response.data;
        console.log(result);
        console.log(result.answer)
        res.render("index.ejs", {data: result})
    } catch (error) {
        console.error("Failed to make request:", error.message);
        res.render("index.ejs", {
          error: `No activity that matches your criteria 😔`,
        });
      }
});


app.listen(port, () =>{
    console.log(`Listening on port ${port}...`)
})