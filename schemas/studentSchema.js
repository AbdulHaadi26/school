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
    const user = await Stud.findOne({
        name: { '$regex': `${name}`, '$options': 'i' }
        , roll: { '$regex': `${roll}`, '$options': 'i' }
    }, { name: 1 });
    return user;
};
studSchema.statics.getAllUserQueryLimit = async (offsetN, string, opt1, opt2) => {
    var skipInNumber = Number(offsetN);
    var skipInNumber = skipInNumber * 25;
    var user;
    if (Number(opt1) === 10 && opt2 === 'All')
        var user = await Stud.find({ passed: false, name: { '$regex': `${string}`, '$options': 'i' } }).sort({ _id: -1 }).skip(skipInNumber).limit(25);
    else if (Number(opt1) === 10)
        var user = await Stud.find({ passed: false, name: { '$regex': `${string}`, '$options': 'i' }, cls: Number(opt) }).sort({ _id: -1 }).skip(skipInNumber).limit(25);
    else if (opt2 === 'All')
        var user = await Stud.find({ passed: false, name: { '$regex': `${string}`, '$options': 'i' }, section: opt2 }).sort({ _id: -1 }).skip(skipInNumber).limit(25);
    else
        var user = await Stud.find({ passed: false, name: { '$regex': `${string}`, '$options': 'i' }, cls: Number(opt1), section: opt2 }).sort({ _id: -1 }).skip(skipInNumber).limit(25);
    return user;
};

studSchema.statics.getAllUserQueryCount = async (string, opt1, opt2) => {
    var user;
    if (Number(opt1) === 10 && opt2 === 'All')
        var user = await Stud.countDocuments({ passed: false, name: { '$regex': `${string}`, '$options': 'i' } });
    else if (Number(opt1) === 10)
        var user = await Stud.countDocuments({ passed: false,name: { '$regex': `${string}`, '$options': 'i' }, cls: Number(opt) });
    else if (opt2 === 'All')
        var user = await Stud.countDocuments({ passed: false,name: { '$regex': `${string}`, '$options': 'i' }, section: opt2 });
    else
        var user = await Stud.countDocuments({ passed: false, name: { '$regex': `${string}`, '$options': 'i' },cls: Number(opt1), section: opt2 });
    return user;

};

studSchema.statics.getAllUserCount = async (opt1, opt2) => {
    var user;
    if (Number(opt1) === 10 && opt2 === 'All')
        var user = await Stud.countDocuments({ passed: false });
    else if (Number(opt1) === 10)
        var user = await Stud.countDocuments({ passed: false, cls: Number(opt) });
    else if (opt2 === 'All')
        var user = await Stud.countDocuments({ passed: false, section: opt2 });
    else
        var user = await Stud.countDocuments({ passed: false, cls: Number(opt1), section: opt2 });
    return user;
};

studSchema.statics.getAllUserLimit = async (offsetN, opt1, opt2) => {
    var skipInNumber = Number(offsetN)
    var skipInNumber = skipInNumber * 25;
    var user;
    if (Number(opt1) === 10 && opt2 === 'All')
        var user = await Stud.find({ passed: false }).sort({ _id: -1 }).skip(skipInNumber).limit(25);
    else if (Number(opt1) === 10)
        var user = await Stud.find({ passed: false, cls: Number(opt) }).sort({ _id: -1 }).skip(skipInNumber).limit(25);
    else if (opt2 === 'All')
        var user = await Stud.find({ passed: false, section: opt2 }).sort({ _id: -1 }).skip(skipInNumber).limit(25);
    else
        var user = await Stud.find({ passed: false, cls: Number(opt1), section: opt2 }).sort({ _id: -1 }).skip(skipInNumber).limit(25);
    return user;
};

module.exports = Stud = mongoose.model("studs", studSchema, "studs");

