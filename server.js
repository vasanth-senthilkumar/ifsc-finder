const express = require('express');
const bodyParser = require('body-parser');
const ifsc = require('ifsc');

const app = express();
app.set('view engine','ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.get('/',(req,res)=>{
    res.render('index',{title:'Bank Details Finder using IFSC Code',response:'',data:false})
})

app.post('/ifsc',(req,res)=>{
    var code = req.body.ifsc;
    if(ifsc.validate(code)){
        ifsc.fetchDetails(code).then(function(response) {
            console.log(response);
            res.render('index',{title:'Bank Details Finder using IFSC Code',response:response, data:true})
         });
    }else{
        res.send('IFSC Code is invalid');
    }

})




PORT = 2021;
app.listen(PORT,()=>{console.log('app is running on the',PORT)})