const express = require("express");
const app = express()
const port = 3000

app.get('/', (req, res) => {
    try{
    res.sendFile(__dirname + "/public/index.html")
} catch(error){
    console.log("nao foi possivel enviar o arquivo", error)
}
})

app.listen(port, ()=>{
    console.log("Server tunning on port "+ port)

})