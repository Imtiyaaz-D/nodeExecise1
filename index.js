const {writeFile,readFile,appendFile} = require('fs')
readFile('./data.txt','utf-8',(err,data)=>{
    if(!err)
    console.log(data);
    else
    console.log('Please try again later')
})
writeFile('./data.txt','utf-8','new text',(err,data)=>{
    if(!err)
    console.log(data);
    else
    console.log(data)
})
appendFile('./data.txt','uf-8',(err,data)=>{

})