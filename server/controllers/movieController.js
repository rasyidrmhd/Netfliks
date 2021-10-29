const { Movie } = require("../models");

class MovieController {
  static async getAllMovie(req, res, next) {
    try {
      const result = await Movie.findAll();
      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  }

  static async getMovieBySlug(req, res, next) {
    try {
      const { slug } = req.params;

      const result = await Movie.findOne({ where: { slug } });

      if (!result) {
        throw { name: "movieNotFound" };
      }

      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  }

  static async postMovie(req, res, next) {
    try {
      const { title, synopsis, trailerUrl, imgUrl, rating, category, GenreId } = req.body;
      const { id } = req.user;

      const result = await Movie.create({
        title,
        synopsis,
        trailerUrl,
        imgUrl,
        rating: Number(rating),
        category,
        GenreId: Number(GenreId),
        AuthorId: Number(id),
      });

      res.status(201).json(result);
    } catch (err) {
      next(err);
    }
  }

  static async putMovieById(req, res, next) {
    try {
      const { id } = req.params;
      const { title, synopsis, trailerUrl, imgUrl, rating, category, GenreId } = req.body;

      const result = await Movie.update(
        {
          title,
          synopsis,
          trailerUrl,
          imgUrl,
          rating: Number(rating),
          category,
          GenreId: Number(GenreId),
        },
        { where: { id }, returning: true, individualHooks: true }
      );

      const isFound = result[0];
      console.log(isFound);
      res.status(200).json(result[1][0]);
      // if (isFound) {
      // } else {
      //   throw { name: "movieNotFound" };
      // }
    } catch (err) {
      next(err);
    }
  }

  static async deleteMovieById(req, res, next) {
    try {
      const { id } = req.params;

      const found = await Movie.findOne({ where: { id } });
      if (found) {
        const result = await Movie.destroy({ where: { id } });
        res.status(200).json({ message: `${found.title} success to deleted` });
      } else {
        throw { name: "movieNotFound" };
      }
    } catch (err) {
      next(err);
    }
  }
}

module.exports = MovieController;
