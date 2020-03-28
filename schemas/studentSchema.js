const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const studSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, default: '' },
    roll: { type: String, default: '' },
    cls: { type: Number, default: 0 },
    section: { type: String, default: 'A' },
    passed: { type: Boolean, default: false }
});

studSchema.statics.findUserById = async (_id) => {
    const user = await Stud.findOne({ '_id': mongoose.Types.ObjectId(_id) });
    return user;
};

studSchema.statics.findUserByName = async (name, roll) => {
    const user = await Stud.countDocuments({
        name: { '$regex': `${name}`, '$options': 'i' }
        , roll: { '$regex': `${roll}`, '$options': 'i' }
    }, { name: 1 });
    return user;
};

module.exports = Stud = mongoose.model("studs", studSchema, "studs");

