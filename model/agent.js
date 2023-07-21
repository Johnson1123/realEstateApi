import mongoose from "mongoose";

const agentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  level: {
    type: String,
    require: true,
  },
  application: {
    type: String,
    require: true,
  },
  address: [
    {
      name: {
        type: String,
      },
      zipCode: {
        type: Number,
      },
      country: {
        type: String,
      },
      city: {
        type: String,
      },
    },
  ],
  linkedIn: {
    type: String,
  },
  facebook: {
    type: String,
  },
  twitter: {
    type: String,
  },
  instagram: {
    type: String,
  },
  password: {
    type: String,
    required: [true, "Passsword is required"],
    minLenght: [4, "provide password with 4 min lenght"],
  },
  createdAt: {
    type: Date,
    default: new Date().now,
  },
});

const Agent = mongoose.model(Agent, agentSchema);

export default Agent;
