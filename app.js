  var PORT = process.env.PORT || 8080
  const express = require("express")
  const http = require("http");
  const app = express()
  const server = http.createServer(app);
  
  app.set("views", "./views")
  app.set("view engine", "ejs")
  app.use("/assets", express.static("public"))
  app.get("/*", (req, res) => {
    res.render("index.ejs")
  })
  
  server.listen(PORT, () => console.log("Server started"))