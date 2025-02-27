const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const resultSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, default: '' },
    roll: { type: Number, default: 0 },
    cls: { type: Number, default: 0 },
    section: { type: String, default: 'A' },
    promoted: { type: Boolean, default: false },
    sessionId: { type: String, default: '' },
    sessionName: { type: String, default: '' },
    subjects: [{
        name: { type: String, default: '' },
        marks: { type: Number, default: 0 },
        total: { type: Number, default: 0 }
    }],
    percentage: { type: Number, default: 0 }
});

resultSchema.statics.findResultById = async (_id) => {
    const user = await Res.findOne({ '_id': mongoose.Types.ObjectId(_id) });
    return user;
};


resultSchema.statics.updateResultStudent = async (name1, roll1, cls1, section1, name, roll, cls, section) => {
    const user = await Res.collection.updateOne({ name: name1, roll, roll1, cls: Number(cls1), section: section1 },
        {
            $set: {
                name: name,
                cls: Number(cls),
                roll: roll,
                section: section
            }
        });
    return user;
};

resultSchema.statics.updateResult = async (_id, percentage, subjects, sessionId, sessionName, promoted) => {
    const user = await Res.collection.updateOne({ '_id': mongoose.Types.ObjectId(_id) },
        {
            $set: {
                percentage: percentage,
                subjects: subjects,
                sessionId: sessionId,
                sessionName: sessionName,
                promoted: promoted
            }
        });
    return user;
};

resultSchema.statics.findResultByName = async (name, sessionId, roll, cls, section) => {
    const user = await Res.findOne({
        name: { '$regex': `${name}`, '$options': 'i' }, roll: roll, cls: Number(cls), section: section
        , sessionId: sessionId
    }, { name: 1 });
    return user;
};

resultSchema.statics.getAllParentQueryLimit = async (offsetN, string, opt1, opt2, id) => {
    var skipInNumber = Number(offsetN);
    var skipInNumber = skipInNumber * 25;
    var user = await Res.find({ name: { '$regex': `^${string}$`, '$options': 'i' }, sessionId: id, cls: Number(opt1), section: opt2 }).sort({ cls:1, roll:1}).skip(skipInNumber).limit(25);
    return user;
};

resultSchema.statics.getAllParentQueryCount = async (string, opt1, opt2, id) => {
    var user = await Res.countDocuments({ name: { '$regex': `^${string}$`, '$options': 'i' }, sessionId: id, cls: Number(opt1), section: opt2 });
    return user;
};

resultSchema.statics.getAllResultQueryLimit = async (offsetN, string, opt1, opt2, id) => {
    var skipInNumber = Number(offsetN);
    var skipInNumber = skipInNumber * 25;
    var user;
    if (Number(opt1) === 10 && opt2 === 'All')
        var user = await Res.find({ name: { '$regex': `${string}`, '$options': 'i' }, sessionId: id }).sort({ cls: 1, roll: 1 }).skip(skipInNumber).limit(25);
    else if (Number(opt1) !== 10 && opt2 === 'All')
        var user = await Res.find({ name: { '$regex': `${string}`, '$options': 'i' }, sessionId: id, cls: Number(opt1) }).sort({ cls:1, roll:1 }).skip(skipInNumber).limit(25);
    else if (opt2 !== 'All' && Number(opt1) === 10)
        var user = await Res.find({ name: { '$regex': `${string}`, '$options': 'i' }, sessionId: id, section: opt2 }).sort({ cls:1, roll:1 }).skip(skipInNumber).limit(25);
    else
        var user = await Res.find({ name: { '$regex': `${string}`, '$options': 'i' }, sessionId: id, cls: Number(opt1), section: opt2 }).sort({ cls:1, roll:1 }).skip(skipInNumber).limit(25);
    return user;
};

resultSchema.statics.getAllResultQueryCount = async (string, opt1, opt2, id) => {
    var user;
    if (Number(opt1) === 10 && opt2 === 'All')
        var user = await Res.countDocuments({ name: { '$regex': `${string}`, '$options': 'i' }, sessionId: id });
    else if (Number(opt1) !== 10 && opt2 === 'All')
        var user = await Res.countDocuments({ name: { '$regex': `${string}`, '$options': 'i' }, sessionId: id, cls: Number(opt1) });
    else if (opt2 !== 'All' && Number(opt1) === 10)
        var user = await Res.countDocuments({ name: { '$regex': `${string}`, '$options': 'i' }, sessionId: id, section: opt2 });
    else
        var user = await Res.countDocuments({ name: { '$regex': `${string}`, '$options': 'i' }, sessionId: id, cls: Number(opt1), section: opt2 });
    return user;

};

resultSchema.statics.getAllResultCount = async (opt1, opt2, id) => {
    var user;
    if (Number(opt1) === 10 && opt2 === 'All')
        var user = await Res.countDocuments({ sessionId: id });
    else if (Number(opt1) !== 10 && opt2 === 'All')
        var user = await Res.countDocuments({ sessionId: id, cls: Number(opt1) });
    else if (opt2 !== 'All' && Number(opt1) === 10)
        var user = await Res.countDocuments({ sessionId: id, section: opt2 });
    else
        var user = await Res.countDocuments({ sessionId: id, cls: Number(opt1), section: opt2 });
    return user;
};

resultSchema.statics.getAllResultLimit = async (offsetN, opt1, opt2, id) => {
    var skipInNumber = Number(offsetN)
    var skipInNumber = skipInNumber * 25;
    var user;
    if (Number(opt1) === 10 && opt2 === 'All')
        var user = await Res.find({ sessionId: id }).sort({ cls: 1, roll: 1 }).skip(skipInNumber).limit(25);
    else if (Number(opt1) !== 10 && opt2 === 'All')
        var user = await Res.find({ sessionId: id, cls: Number(opt1) }).sort({ cls:1, roll:1 }).skip(skipInNumber).limit(25);
    else if (opt2 !== 'All' && Number(opt1) === 10)
        var user = await Res.find({ sessionId: id, section: opt2 }).sort({ cls:1, roll:1 }).skip(skipInNumber).limit(25);
    else
        var user = await Res.find({ sessionId: id, cls: Number(opt1), section: opt2 }).sort({ cls:1, roll:1 }).skip(skipInNumber).limit(25);
    return user;
};

module.exports = Res = mongoose.model("res", resultSchema, "res");

