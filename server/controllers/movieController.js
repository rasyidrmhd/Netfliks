const { Movie, Genre, Cast, sequelize } = require("../models");
const { Op } = require("sequelize");

class MovieController {
  static async getAllMovie(req, res, next) {
    try {
      const result = await Movie.findAll({
        include: [
          { model: Genre, attributes: ["id", "name"] },
          { model: Cast, attributes: ["id", "name", "profilePict"] },
        ],
        order: [["createdAt", "desc"]],
      });
      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  }

  static async getMovieBySlug(req, res, next) {
    try {
      const { slug } = req.params;

      const result = await Movie.findOne({
        where: { slug },
        include: [{ model: Cast, attributes: ["id", "name", "profilePict"] }],
      });

      if (!result) {
        throw { name: "movieNotFound" };
      }

      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  }

  static async postMovie(req, res, next) {
    const t = await sequelize.transaction();

    try {
      const { title, synopsis, trailerUrl, imgUrl, rating, category, GenreId, casts } = req.body;
      const { id } = req.user;

      console.log(casts);

      if (!casts || casts.length === 0) {
        throw { name: "noCast" };
      }

      casts.forEach((cast) => {
        if (!cast.name || cast.name === "") {
          throw { name: "noNameCast" };
        }
      });

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

      const Casts = casts.map((cast) => {
        return {
          name: cast.name,
          profilePict: cast.profilePict,
          MovieId: result.id,
        };
      });

      const createCast = await Cast.bulkCreate(Casts, {
        returning: true,
        transaction: t,
      });

      await t.commit();

      res.status(201).json({ result, createCast });
    } catch (err) {
      await t.rollback();
      console.log(err);
      next(err);
    }
  }

  static async putMovieById(req, res, next) {
    const t = await sequelize.transaction();

    try {
      const { slug } = req.params;
      const { title, synopsis, trailerUrl, imgUrl, rating, category, GenreId, casts } = req.body;

      console.log(casts, ">>>>>>>>>>>>>>>casts");

      if (!casts || casts.length === 0) {
        throw { name: "noCast" };
      }

      casts.forEach((cast) => {
        if (!cast.name || cast.name === "") {
          throw { name: "noNameCast" };
        }
      });

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
        { where: { slug }, returning: true, individualHooks: true, transaction: t }
      );

      const Casts = casts.map((cast) => {
        return {
          id: cast.id,
          name: cast.name,
          profilePict: cast.profilePict,
          MovieId: result[1][0].dataValues.id,
        };
      });

      const deleteCast = await Cast.destroy({
        where: {
          MovieId: result[1][0].dataValues.id,
          [Op.not]: [
            {
              name: Casts.map((cast) => cast.name),
            },
          ],
        },
        transaction: t,
      });

      if (deleteCast !== 0) {
        const createCast = await Cast.bulkCreate(Casts, {
          returning: true,
          transaction: t,
        });
      }

      await t.commit();
      res.status(200).json({ result: result[1][0].dataValues });
    } catch (err) {
      console.log(err, ">>>>>>>error");
      next(err);
    }
  }

  static async deleteMovieById(req, res, next) {
    const t = await sequelize.transaction();

    try {
      const { id } = req.params;

      const found = await Movie.findOne({ where: { id } });
      if (found) {
        const result = await Movie.destroy({ where: { id } }, { transaction: t, returning: true });
        await t.commit();
        res.status(200).json({ message: `${found.title} success to deleted` });
      } else {
        throw { name: "movieNotFound" };
      }
    } catch (err) {
      await t.rollback();
      next(err);
    }
  }
}

module.exports = MovieController;
