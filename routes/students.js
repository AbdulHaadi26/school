const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Session = require('../schemas/sessionSchema');
const Stud = require('../schemas/studentSchema');
const Res = require('../schemas//resultSchema');
const JWT = require('../middlewares/jwtAuth');

router.post('/register', async (req, res) => {
    try {
        const { name, roll, section, cls } = req.body;
        const userData = { _id: new mongoose.mongo.ObjectId(), name: name, roll: roll, cls: Number(cls), section: section };
        var user = await Stud.findUserByName(name, roll, cls, section);
        if (!user) {
            var data = await Stud.create(userData);
            res.json({ student: data });
        } else res.json({ error: 'User is already registered' });
    } catch{ res.json({ error: 'Somthing unexpected occured' }); }
});

router.post('/update', async (req, res) => {
    try {
        const { _id, name, roll, section, cls } = req.body;
        var stud = await Stud.findUserById(_id);
        var p1 = Res.updateResultStudent(stud.name, stud.roll, stud.cls, stud.section, name, roll, cls, section);
        var p2 = Stud.updateStudent(_id, name, roll, cls, section);
        var [result,stud] = [await p1, await p2];
        res.json({ student: true });
    } catch{ res.json({ error: 'Somthing unexpected occured' }); }
});

router.get('/getStudent/:_id', async (req, res) => {
    try {
        const { _id } = req.params;
        var p1 = Stud.findUserById(_id);
        var p2 = Session.getAllSession();
        var [user, session] = [await p1, await p2];
        if (!user) return res.json({ error: 'Student is not registered' });
        if (!session) session = [];
        res.json({ student: user, session: session });
    } catch{ res.json({ error: 'Somthing unexpected occured' }); }

});

router.get('/delStudent/:_id', async (req, res) => {
    try {
        const { _id } = req.params;
        var stud = await Stud.deleteOne({_id:mongoose.Types.ObjectId(_id)});
        res.json({ student: true });
    } catch{ res.json({ error: 'Somthing unexpected occured' }); }
});

router.post('/searchStudCount', JWT, async (req, res) => {
    const { string, opt1, opt2 } = req.body;
    try {
        var count = await Stud.getAllUserQueryCount(string, opt1, opt2);
        if (count) res.json({ studCount: count });
        else res.json({ studCount: 0 });
    } catch { res.json({ error: 'Could not find any student' }); }
});

router.post('/searchStud', JWT, async (req, res) => {
    const { limit, string, opt1, opt2 } = req.body;
    try {
        var userList = await Stud.getAllUserQueryLimit(limit, string, opt1, opt2);
        if (userList) res.json({ studList: userList });
        else res.json({ studList: [] });
    } catch { res.json({ error: 'Could not find any student' }); }
});


router.post('/getStudCountAll', JWT, async (req, res) => {
    const { opt1, opt2 } = req.body;
    try {
        var count = await Stud.getAllUserCount(opt1, opt2);
        if (count) res.json({ studCount: count });
        else res.json({ studCount: 0 });
    } catch { res.json({ error: 'Could not find any student' }); }
});

router.post('/getStudAll', JWT, async (req, res) => {
    const { limit, opt1, opt2 } = req.body;
    try {
        var userList = await Stud.getAllUserLimit(limit, opt1, opt2);
        if (userList) res.json({ studList: userList });
        else res.json({ studList: [] });
    } catch { res.json({ error: 'Could not find any student' }); }
});

module.exports = router;