"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Movies", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      slug: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      synopsis: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      trailerUrl: {
        type: Sequelize.TEXT,
      },
      imgUrl: {
        type: Sequelize.TEXT,
      },
      rating: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      category: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      GenreId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Genres",
          },
          key: "id",
        },
        onDelete: "cascade",
        onUpdate: "cascade",
      },
      AuthorId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Users",
          },
          key: "id",
        },
        onDelete: "cascade",
        onUpdate: "cascade",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Movies");
  },
};
