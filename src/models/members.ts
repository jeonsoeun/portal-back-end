import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const memberSchema = new Schema({
  id: String,
  name: String,
  joinDate: Date,
});
