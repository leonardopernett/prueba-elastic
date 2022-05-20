const express = require('express')
const { Client } = require('@elastic/elasticsearch')


/* connection */
/*const client  = new Client({
  node:'',
  auth:{
    username:'',
    password:''
  }

})*/


const app = express()

app.get('/',(req,res) => {
  res.json({
    data:'hello wolrd'
  })
})

app.listen(3000,() => console.log('server on port 3000'))