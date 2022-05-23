const express = require('express')
const AWS     = require('aws-sdk');
const path    = require('path');
const fs      = require('fs')

const app     = express()

const s3 = new AWS.S3({
  region:'us-east-1',
  sslEnabled:false
}) 

app.get('/', async (req,res) => {

    let params = {
        Bucket: 'aws-nik-mx-bk',
        Body : fs.createReadStream(path.resolve('./public/uploads/img.jpg')),
        Key : "folder/"+Date.now()+"_"+path.basename('./public/uploads/img.jpg'),
        ACL:'public-read'
    };

    try {
      const result = await s3.upload(params).promise()
      console.log(result.Location)
    } catch (error) {
      console.log(error)
    }
   
    res.json({ data:'image uploaded' }) 
 })


 app.use(express.static(path.resolve('./public')))

 app.listen(3000,() => console.log('server on port 3000'))
