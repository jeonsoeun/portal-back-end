import * as mongoose from 'mongoose';
import { memberSchema } from '../models/members';
import { connectDB } from './connection';

export const inputNewMember = (id: string, name: string) => {
  const db = connectDB();
  const Member = mongoose.model('Member', memberSchema);
  const newMember = new Member({ id: id, name: name, date: new Date() });
  newMember.save((err, newMember) => {
    if (err) return console.error(err);
    console.log('input new member success');
  });
  return newMember;
};
