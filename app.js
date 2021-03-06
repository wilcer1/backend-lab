
// You should use express correctly to display a website on a server port number. (3) x
// The website should display a new webpage after going to a new route in your webpage. (3) x
// To be able to fetch data from the backend and display it on the web page. (4) x 
// To be able to display data, using custom url parameters, from a npm module downloaded using the CLI. (4) x
// You should be able to fetch new data after clicking on a button that requests new data from the server. (5) x

const exp = require("express");

const app = exp();


const PORT = process.env.PORT || 5000;

const faker = require("@faker-js/faker").default;

const api = require("./routes/api");

app.use(exp.json());

app.use("/api", api);


app.get("/", (req, res) => {
    const html = "<h1>Try a different path to find some spicy content: /hello, /color/colorofchoice, /pictures <br></h1>"
    res.send(html)
});

app.get("/hello", (req, res) => {
    const html = "<h1>hello </h1>"
    res.send(html)
});

app.get("/color/:color", (req, res) => {
    const x = `Your favorite color is ${req.params.color}`;
    res.send(x)


});
app.get("/pictures", (req, res) => {

    const img = faker.image.sports(500, 500, false)
    const html = `<h1>Randomly generated image</h1><img src=${img}> <br><button onClick="window.location.reload();">Refresh Page</button>`
    
    res.send(html);
    
});

app.listen(PORT, () =>{
    console.log(`port ${PORT} open for business`)

});