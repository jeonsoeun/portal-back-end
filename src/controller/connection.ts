import * as config from 'config';
import * as mongoose from 'mongoose';

export const connectDB = () => {
  const uri = `${config.get<string>('mongodb.uri')}`;

  console.log('uri: ', uri);

  //mongoose.Promise = global.Promise; // Node 의 네이티브 Promise 사용
  mongoose.connect(uri, { useNewUrlParser: true }).then((response) => {
    console.log('Successfully connected to mongoDB');
  });

  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error: '));
  db.once('open', () => {
    console.log('Successfully connected to mongoDB');
  });
  return db;
};
