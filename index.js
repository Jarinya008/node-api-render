let express = require('express');
let app = express();
let port = process.env.PORT || 4000;
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.render('home')
})
app.listen(port,(req,res) => {
    console.log("server is running");
    
})