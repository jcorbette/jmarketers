const express = require("express")
const { join } = require("path")


const app = express()

const port = process.env.PORT || 5000

if (app.settings.env === 'production') app.disable('verbose errors')

app.set("view engine", "ejs");

app.use(express.static(join(__dirname, 'public')))


app.get("/", function(req, res) {
    res.render(join(__dirname, "public", "views", "index.ejs"))
})

app.get("/services", function(req, res) {
    res.render(join(__dirname, "public", "views", "services.ejs"))
})

app.get("/pricing", function(req, res) {
    res.render(join(__dirname, "public", "views", "pricing.ejs"))
})


app.get("/about", function(req, res) {
    res.render(join(__dirname, "public", "views", "about.ejs"))
})


app.get("/contact-us", function(req, res) {
    res.render(join(__dirname, "public", "views", "contact.ejs"))
})

app.get("/login", function(req, res) {
    res.render(join(__dirname, "public", "views", "login.ejs"))
})

app.get("/register", function(req, res) {
    res.render(join(__dirname, "public", "views", "register.ejs"))
})


app.get("/terms-and-conditions", function(req, res) {
    res.render(join(__dirname, "public", "views", "terms.ejs"))
})

app.get("/privacy-policy", function(req, res) {
    res.render(join(__dirname, "public", "views", "policy.ejs"))
})

app.get('*', function(req, res){
    res.status(404).render(join(__dirname, "public", "views", "404.ejs"));
});



app.listen(port, () => {
    console.log(`Website listening on port ${port}`)
})
  