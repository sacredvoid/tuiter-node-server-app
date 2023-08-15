import mongoose from 'mongoose';
const schema = mongoose.Schema({
  tuit: String,
  username: {
    type: String,
    default: 'Nasa'
  },
  time: {
    type: String,
    default: '2h'
  },
  handle: {
    type: String,
    default: '@nasa'
  },
  title: {
    type: String,
  },
  likes: {
    type: Number,
    default: 0
  },
  liked: {
    type: Boolean,
    default: false
  },
  image: {
    type: String,
    default: 'nasa.jpg'
  },
  dislikes: {
    type: Number,
    default: 0
  },
  replies: {
    type: Number,
    default: 0
  },
  retuits: {
    type: Number,
    default: 0
  }
}, {collection: 'tuits'});

export default schema;