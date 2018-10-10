const mongoose = require('mongoose')
const fs = require('fs')
const path = require('path')
const Admin = require('./admin')

mongoose.connect('mongodb://localhost:27017/zalegzl')

// const info = JSON.parse(
//   fs.readFileSync(path.resolve(__dirname, '../privateInfo.json')).toString()
// )
const account = `admin`
const password = `password`

const db = mongoose.connection
db.on('error', console.error.bind(console, 'mongodb connection error:'))
db.once('open', function() {
  //    创建管理员

  const admin = new Admin({ account, password })
  admin.save(function(err, admin) {
    if (err) {
      console.log(err)
    } else {
      console.log(admin)
    }
  })
})
