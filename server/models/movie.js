"use strict";
const { Model } = require("sequelize");
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
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Slug is required",
          },
          notNull: {
            msg: "Slug is required",
          },
        },
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
      },
      imgUrl: {
        type: DataTypes.STRING,
      },
      rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: {
            args: 1,
            msg: "Rating minimal 1",
          },
        },
      },
      GenreId: DataTypes.STRING,
      AuthorId: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Movie",
    }
  );
  return Movie;
};
