// require express
const express = require ('express')
// get app from express
const app = express()
// body parser
app.use(express.json())

//PUG

app.set("view engine", "pug")
app.set("views", "./views")

//import middleware
const verify = require('./middleware')

// create PORT
const PORT = 5000
// create server
app.listen(PORT, (err) => {
    err
      ? console.log(err)
      : console.log(`Server is running at http://127.0.0.1:${PORT}`)})

// Static DB
const users = [
    {
        id:1,
        name : "Aymen",
        email : "aymen@gmail.com"
    },
      {
        id:2,
        name : "Med",
        email : "med@gmail.com"
    },
      {
        id:1,
        name : "Nes",
        email : "nes@gmail.com"
    }
]

// error route
app.get("/error", (req, res) => {
  res.status(200).send("5ouya win mechi, msakrin rana")
})


app.use(verify)
// test route
app.get("/", (req, res) => {
  res.status(200).send("Test OK")
})


app.get("/", (req, res) => {
  res.status(200).render("home", { title: "Home" })
})

app.get("/our-services", verify, (req, res) => {
  res.status(200).render("services", { title: "Our Services" })
})

app.get("/contact-us", verify, (req, res) => {
  res.status(200).render("contact", { title: "Contact Us" })
})







// get all users
app.get('/users', (req,res)=>{
    try {
        res.status(200).send({users})
    } catch (error) {
        res.status(400).send(error)
    }

})