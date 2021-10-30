const { Op } = require("sequelize");
const { comparePassword } = require("../helpers/bcrypt");
const { createToken } = require("../helpers/jwt");
const { User } = require("../models");

class UserController {
  static async register(req, res, next) {
    try {
      const { username, email, password, phoneNumber, address } = req.body;

      const result = await User.create({ username, email, password, phoneNumber, address });
      res.status(201).json({ id: result.id, email: result.email, username: result.username });
    } catch (err) {
      next(err);
    }
  }

  static async login(req, res, next) {
    try {
      const { email, password } = req.body;

      if (!email) {
        throw { name: "emailEmpty" };
      }

      if (!password) {
        throw { name: "passwordEmpty" };
      }

      const result = await User.findOne({
        where: {
          [Op.or]: [{ username: email || null }, { email: email || null }],
        },
      });
      if (!result) {
        throw { name: "Invalid" };
      }

      const isValid = comparePassword(password, result.password);
      if (!isValid) {
        throw { name: "Invalid" };
      }

      const payload = {
        id: result.id,
        email: result.email,
      };

      const access_token = createToken(payload);
      res.status(200).json({ access_token });
    } catch (err) {
      next(err);
    }
  }

  static async getAllUser(req, res, next) {
    try {
      const result = await User.findAll();
      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  }

  static async deleteUserById(req, res, next) {
    try {
      const { id } = req.params;

      const found = await User.findOne({ where: { id } });
      if (found) {
        const result = await User.destroy({ where: { id } });
        res.status(200).json({ message: `${found.username} success to deleted` });
      } else {
        throw { name: "userNotFound" };
      }
    } catch (err) {
      next(err);
    }
  }

  static async getUserData(req, res, next) {
    try {
      const { id } = req.user;

      const result = await User.findOne({
        where: { id },
        attributes: {
          exclude: ["password", "createdAt", "updatedAt"],
        },
      });
      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = UserController;
