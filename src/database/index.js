import mongoose from "mongoose";

const configOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const connectToDB = async () => {
  const connectionUrl ="mongodb+srv://shanmukhsai:dattu4396@cluster0.9qmzldg.mongodb.net/";

  mongoose
    .connect(connectionUrl, configOptions)
    .then(() => console.log("SSB-Automations database connected successfully!"))
    .catch((err) =>
      console.log(`Getting Error from DB connection ${err.message}`)
    );
};

export default connectToDB;
