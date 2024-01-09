import { mongoose } from "mongoose";

const { Schema } = mongoose;

const postSchema = new Schema({
  title: {
    type: String,
    required: [true, "Please enter a title"],
  },
  description: {
    type: String,
    required: [true, "Please enter a description"],
  },
  image: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  likes: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    minLength: [1, "Username must be at least 1 character long"],
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minLength: [1, "Password must be at least 1 character"],
  },
  avatar: {
    type: String,
  },
});

export const models = [
  {
    name: "Post",
    schema: postSchema,
    collection: "posts",
  },
  {
    name: "User",
    schema: userSchema,
    collection: "users",
  },
];
