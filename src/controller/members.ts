import * as mongoose from 'mongoose';
import { memberSchema } from '../models/members';
import { connectDB } from './connection';

export const inputNewMember = (id: string, name: string) => {
  const db = connectDB();
  const Member = mongoose.model('Member', memberSchema);
  const newMember = new Member({ id: id, name: name, joinDate: new Date() });
  // 멤버 찾아서 검사하는 로직 추가해야됨.
  newMember.save((err, newMember) => {
    if (err) return console.error(err);
    console.log('input new member success');
  });
  return newMember;
};
