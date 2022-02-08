import express from "express";

const app = express();

app.use(express.static("public"));

app.get("/", (request, response) => {
  response.sendFile("/Users/baptisteverkindere/Workspace/my-first-website/src/homePage.html");
});

app.get("/myResume", (request, response) => {
  response.sendFile("/Users/baptisteverkindere/Workspace/my-first-website/src/myResume.html");
});

app.get("/Boutique", (request, response) => {
  response.sendFile("/Users/baptisteverkindere/Workspace/my-first-website/src/Boutique.html");
});

app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});
