import * as mongoose from 'mongoose';
import { memberSchema } from '../models/members';
import { connectDB } from './connection';

export const inputNewMember = async (id: string, name: string) => {
  const db = connectDB();
  const Member = mongoose.model('Member', memberSchema);
  const newMember = new Member({ id: id, name: name, joinDate: new Date() });
  const result = { status: 200, success: false, member: {}, message: '', err: {} };
  await Member.find({ id: id })
    .then((member) => {
      if (member.length) {
        result.member = member;
        result.success = false;
        result.message = 'ID already exists.';
      } else {
        newMember.save((err, newMember) => {
          if (err) {
            result.err = err;
            return;
          }
          result.member = newMember;
          result.success = true;
          result.message = 'Register successly';
        });
      }
    })
    .catch((err) => {
      result.status = 500;
      result.err = err;
    });
  return result;
};
