const errorHandler = (err, req, res, next) => {
  switch (err.name) {
    case "SequelizeUniqueConstraintError":
      if (err.errors[0].path === "username") {
        res.status(400).json({ message: ["Username already registered"] });
      } else if (err.errors[0].path === "email") {
        res.status(400).json({ message: ["Email already registered"] });
      } else if (err.errors[0].path === "name") {
        res.status(400).json({ message: ["Genre already exist"] });
      }
      break;
    case "SequelizeValidationError":
      const message = err.errors.map((err) => err.message);
      res.status(400).json({ message });
      break;
    case "genreExist":
      res.status(400).json({ message: ["Genre already exist"] });
      break;
    case "emailEmpty":
      res.status(400).json({ message: "Email / username is required" });
      break;
    case "passwordEmpty":
      res.status(400).json({ message: "Password is required" });
      break;
    case "Already Bookmark":
      res.status(400).json({ message: "This product is already in your bookmark" });
      break;
    case "Invalid":
      res.status(401).json({ message: "Incorrect email or password" });
      break;
    case "InvalidToken":
      res.status(401).json({ message: "You must login first" });
      break;
    case "JsonWebTokenError":
      res.status(401).json({ message: "You must login first" });
      break;
    case "Unauthorized":
      res.status(403).json({ message: "You have no permission access" });
      break;
    case "movieNotFound":
      res.status(404).json({ message: "Movie not found" });
      break;
    case "genreNotFound":
      res.status(404).json({ message: "Genre not found" });
      break;
    default:
      res.status(500).json({ message: err.message });
      break;
  }
};

module.exports = { errorHandler };
