const { connect } = require('mongoose');

export const connectToDB = async () => {
  try {
    await connect(process.env.MONGO);
    console.log('DB connection established');
  } catch (error) {
    console.log(error);
    throw new Error('Failed to connect to Mongo');
  }
};
