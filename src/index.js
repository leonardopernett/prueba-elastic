const express = require('express')
const AWS = require('aws-sdk');
const  path  = require('path');
const app = express()
const fs = require('fs')


const s3 = new AWS.S3({
    secretAccessKey:'e29j/D1s2V5VZPuti8pHMfH7Yucq3HvabMDHjwOS',
    accessKeyId:'AKIAVQGYG2RXPN3OU3WQ', 
    region: 'us-east-1',
    sslEnabled: false
})

var filePath = path.resolve('./public/uploads/img.jpg');

app.get('/', async (req,res) => {

    var params = {
      Bucket: 'aws-nik-mx-bk',
      Body : fs.createReadStream(filePath),
      Key : "folder/"+Date.now()+"_"+path.basename(filePath) 
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
