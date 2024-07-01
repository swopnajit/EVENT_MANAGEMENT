import mongoose from "mongoose";

export const dbConnection = () => {
    mongoose
    .connect(process.env.MONGO_URI, { dbName: "MERN_STACK_EVENT" })
    .then(() => {
        console.log("Connected to Database!");
    })
    .catch((err) => {
        console.log("Some Error Occurred While Connecting to Database!", err);
    });
};