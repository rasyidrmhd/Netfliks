const { Genre } = require("../models");
const { Op } = require("sequelize");

class GenreController {
  static async getAllGenre(req, res, next) {
    try {
      const result = await Genre.findAll({ order: [["id", "asc"]] });

      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  }

  static async getGenreById(req, res, next) {
    try {
      const { id } = req.params;

      const result = await Genre.findOne({ where: { id } });

      if (!result) {
        throw { name: "genreNotFound" };
      }

      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  }

  static async postGenre(req, res, next) {
    try {
      const { name, imgUrl } = req.body;

      const found = await Genre.findOne({
        where: {
          name: {
            [Op.iLike]: `%${name}%`,
          },
        },
      });

      if (found && found.name.toLowerCase() === name.toLowerCase()) {
        throw { name: "genreExist" };
      }

      const result = await Genre.create({
        name: name || null,
        imgUrl: imgUrl || null,
      });

      res.status(201).json(result);
    } catch (err) {
      next(err);
    }
  }

  static async putGenreById(req, res, next) {
    try {
      const { id } = req.params;
      const { name, imgUrl } = req.body;

      const found = await Genre.findOne({
        where: {
          name:
            {
              [Op.iLike]: `%${name}%`,
            } || null,
        },
      });

      if (found && found.name.toLowerCase() === name.toLowerCase()) {
        throw { name: "genreExist" };
      }

      const result = await Genre.update(
        {
          name: name || null,
          imgUrl: imgUrl || null,
        },
        { where: { id }, returning: true }
      );

      const isFound = result[0];
      if (isFound) {
        res.status(200).json(result[1][0]);
      } else {
        throw { name: "genreNotFound" };
      }
    } catch (err) {
      next(err);
    }
  }

  static async deleteGenreById(req, res, next) {
    try {
      const { id } = req.params;

      const found = await Genre.findOne({ where: { id } });
      if (found) {
        const result = await Genre.destroy({ where: { id } });
        res.status(200).json({ message: `${found.name} success to deleted` });
      } else {
        throw { name: "genreNotFound" };
      }
    } catch (err) {
      next(err);
    }
  }
}

module.exports = GenreController;
