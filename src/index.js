import app from "./app.js";

const index = () => {
  app.listen(app.get("port"), () => {
    console.log("Server is running on port", app.get("port"));
  });
}

index();
