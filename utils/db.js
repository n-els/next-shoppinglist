import mongoose from 'mongoose';

export const connectToDatabase = async () => {
  try {
    const db = await mongoose.connect(process.env.DB_CONNECTION_STRING, {
      useNewUrlParser: true,
    });
    const connection = db.connection;
    console.log('connected to db');
    return connection;
  } catch (error) {
    console.log(error);
  }
};