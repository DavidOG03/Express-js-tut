import mongoose from "mongoose"

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGOGB_URI}`)
        console.log(`\n MongoDB Connected !!!
        ${connectionInstance.connection.host}`);
    } catch (err) {
        console.error("Mongoose failed to connect", err);
        process.exit(1)

    }
}

export default connectDB;