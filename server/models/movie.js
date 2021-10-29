"use strict";
const { Model, where } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Movie.belongsTo(models.User, { foreignKey: "AuthorId" });
      Movie.belongsTo(models.Genre, { foreignKey: "GenreId" });
      Movie.hasMany(models.Cast, { foreignKey: "MovieId" });
    }
  }
  Movie.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Title is required",
          },
          notNull: {
            msg: "Title is required",
          },
        },
      },
      slug: {
        type: DataTypes.STRING,
      },
      synopsis: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Synopsis is required",
          },
          notNull: {
            msg: "Synopsis is required",
          },
        },
      },
      trailerUrl: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Trailer Url is required",
          },
          notNull: {
            msg: "Trailer Url is required",
          },
        },
      },
      imgUrl: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Img Url is required",
          },
          notNull: {
            msg: "Img Url is required",
          },
        },
      },
      rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Rating is required",
          },
          notEmpty: {
            msg: "Rating is required",
          },
          min: {
            args: 1,
            msg: "Minimal movie's rating is 1",
          },
        },
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Category is required",
          },
          notNull: {
            msg: "Category is required",
          },
        },
      },
      GenreId: DataTypes.STRING,
      AuthorId: DataTypes.STRING,
    },
    {
      hooks: {
        beforeCreate: (movie, options) => {
          let slug = movie.title.toLowerCase().split(" ").join("-");
          movie.slug = slug;
        },
        afterCreate: (movie, options) => {
          let slug = movie.title.toLowerCase().split(" ").join("-");
          slug += `-${movie.id}`;
          Movie.update(
            {
              slug: slug,
            },
            { where: { id: movie.id } }
          );
        },
        afterUpdate: (movie, options) => {
          let slug = movie.title.toLowerCase().split(" ").join("-");
          slug += `-${movie.id}`;
          Movie.update(
            {
              slug: slug,
            },
            { where: { id: movie.id } }
          );
        },
      },
      sequelize,
      modelName: "Movie",
    }
  );
  return Movie;
};
