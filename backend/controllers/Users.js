import User from "../models/UserModel.js";
import argon2 from "argon2";

export const getUsers = async (req, res) => {
  try {
    const response = await User.findAll({
      attributes: ['uuid', 'name', 'email', 'role'],
    });
  } catch (error) {
    res.status(500).Json({ msg: error.message });
  }
};

export const getUserById = async (req, res) => {
  try {
    const response = await User.findOne({
      attributes: ['uuid', 'name', 'email', 'role'],
      where: {
        uuid: req.params.id
      }
    });
  } catch (error) {
    res.status(500).Json({ msg: error.message });
  }
};

export const CreateUser = async (req, res) => {
  const { name, email, password, confirmPassword, role } = req.body;
  if (password !== confirmPassword)
    return res
      .status(400)
      .json({ msg: "Password dan ConfimPassword Tidak Cocok" });
  const hashPassword = await argon2.hash(password);
  try {
    await User.create({
      name: name,
      email: email,
      password: hashPassword,
      role: role
    });
    res.status(201).json({ msg: "Register Succes" });
  } catch (error) {
    res.status(400).Json({ msg: error.message });
  }
};

export const UpdateUser = async (req, res) => {
  const user = await User.findOne({
    where: {
      uuid: req.params.id
    },
  });
  if (!user) return res.status(404).json({ msg: "User tidak ditemukan" });
  const { name, email, password, confirmPassword, role } = req.body;
  let hashPassword;
  if (password === "" || password === null) {
    hashPassword = user.password;
  } else {
    hashPassword = await argon2.hash(password);
  }
  if (password !== confirmPassword)
    return res
      .status(400)
      .json({ msg: "Password dan ConfimPassword Tidak Cocok" });
  try {
    await User.update(
      {
        name: name,
        email: email,
        password: hashPassword,
        role: role
      },
      {
        where: {
          id: user.id
        }
      }
    );
    res.status(200).json({ msg: "User updated" });
  } catch (error) {
    res.status(400).Json({ msg: error.message });
  }
};

export const deleteUser = async (req, res) => {
  const user = await User.findOne({
    where: {
      uuid: req.params.id
    }
  });
  if (!user) return res.status(404).json({ msg: "User tidak ditemukan" });
  try {
    await User.destroy({
      where: {
        id: user.id
      }
    });
    res.status(200).json({ msg: "user Deleted" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
