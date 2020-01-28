import * as mongoose from 'mongoose';
import { memberSchema } from '../models/members';
import { connectDB } from './connection';

export const inputNewMember = (id: string, name: string) => {
  const db = connectDB();
};
