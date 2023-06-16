import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";
import mongoConverter from "../service/mongoConverter";
import * as _ from "lodash";

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  description: String,
  cover: String,
  genres: Array,
  readBy: Array,
});
bookSchema.plugin(uniqueValidator);
const BookModel = mongoose.model("db_book", bookSchema);

async function query() {
  const result = await BookModel.find({});
  {
    if (result) {
      return mongoConverter(result);
    }
  }
}

async function get(id) {
  return BookModel.findOne({ _id: id }).then(function (result) {
    if (result) {
      return mongoConverter(result);
    }
  });
}

async function createNewOrUpdate(data) {
  return Promise.resolve().then(() => {
    if (!data.id) {
      return new BookModel(data).save().then((result) => {
        if (result[0]) {
          return mongoConverter(result[0]);
        }
      });
    } else {
      return BookModel.findByIdAndUpdate(data.id, _.omit(data, "id"), {
        new: true,
      });
    }
  });
}

export default {
  query: query,
  get: get,
  createNewOrUpdate: createNewOrUpdate,

  model: BookModel,
};
