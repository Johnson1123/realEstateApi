import mongoose from "mongoose";
import bcrypt from "bcrypt";
import asyncHandler from "express-async-handler";
import Agent from "../model/agent.js";

const addAgent = asyncHandler(async (req, res) => {
  // const {
  //   fname,
  //   lname,
  //   application,
  //   phone,
  //   address,
  //   email,
  //   password,
  //   experience,
  //   qualification,
  //   instagram,
  //   facebook,
  //   twitter,
  //   linkedin,
  // } = req.body;

  // const existAgent = await Agent.findOne({ email });

  // if (existAgent) {
  //   res.status(404);
  //   throw new Error("Agent already exist");
  // }

  // await Agent.create({
  //   name: fname + "" + lname,
  //   description: description,
  //   phone: phone,
  //   address: address,
  //   password: password,
  //   email: email,
  // });
  const values = req.body;
  res.status(201).json({
    values,
  });
});

export { addAgent };
