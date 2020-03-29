const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const sessionSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, default: '' }
});

sessionSchema.statics.findSessionById = async (_id) => {
    const user = await Sess.findOne({ '_id': mongoose.Types.ObjectId(_id) });
    return user;
};

sessionSchema.statics.findSessionByName = async (name, roll) => {
    const user = await Sess.findOne({
        name: { '$regex': `${name}`, '$options': 'i' }} , { name: 1 });
    return user;
};

sessionSchema.statics.getAllSession = async () => {
    var user = await Sess.find({ }).sort({ _id: -1 }).limit(5);
    return user;
};

sessionSchema.statics.getAllSessionById = async (_id) => {
    var user = await Sess.find({}).sort({ _id: -1 }).limit(5);
    return user;
};
module.exports = Sess = mongoose.model("sess", sessionSchema, "sess");

