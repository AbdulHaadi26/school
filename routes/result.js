const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Result = require('../schemas/resultSchema');
const Session = require('../schemas/sessionSchema');

router.post('/register', async (req, res) => {
    try {
        const { name, roll, section, cls, percentage, sessionId, sessionName, subjects, promoted
        } = req.body;
        const userData = {
            _id: new mongoose.mongo.ObjectId(), name: name, roll: roll, cls: Number(cls), section: section
            , percentage: Number(percentage), sessionId: sessionId, sessionName: sessionName, subjects: subjects, promoted: promoted
        };

        var user = await Result.findResultByName(name, sessionId, roll, cls, section);
        if (!user) {
            var data = await Result.create(userData);
            if (Number(cls) === 5 && promoted) var upt = await Stud.updatePassed(name, roll, cls, section);
            res.json({ Result: data });
        } else res.json({ error: 'Result is already registered' });
    } catch{ res.json({ error: 'Somthing unexpeected occured' }); }
});

router.post('/searchResultCount', async (req, res) => {
    const { sesId, string, opt1, opt2 } = req.body;
    try {
        var count = await Result.getAllResultQueryCount(string, opt1, opt2, sesId);
        if (count) res.json({ resultCount: count });
        else res.json({ resultCount: 0 });
    } catch { res.json({ error: 'Could not find any result' }); }
});

router.post('/searchResult', async (req, res) => {
    const { sesId, limit, string, opt1, opt2 } = req.body;
    try {
        var userList = await Result.getAllResultQueryLimit(limit, string, opt1, opt2, sesId);
        if (userList) res.json({ resultList: userList });
        else res.json({ resultList: [] });
    } catch { res.json({ error: 'Could not find any result' }); }
});


router.post('/getResultCountAll', async (req, res) => {
    const { sesId, opt1, opt2 } = req.body;
    try {
        var count = await Result.getAllResultCount(opt1, opt2, sesId);
        if (count) res.json({ resultCount: count });
        else res.json({ resultCount: 0 });
    } catch { res.json({ error: 'Could not find any result' }); }
});

router.post('/getResultAll', async (req, res) => {
    const { sesId, limit, opt1, opt2 } = req.body;
    try {
        var userList = await Result.getAllResultLimit(limit, opt1, opt2, sesId);
        if (userList) res.json({ resultList: userList });
        else res.json({ resultList: [] });;
    } catch { res.json({ error: 'Could not find any result' }); }
});


router.get('/getResult/:_id', async (req, res) => {
    const { _id } = req.params;
    try {
        var p1 = Result.findResultById(_id);
        var p2 = Session.getAllSession();
        var [userList, session] = [await p1, await p2];
        if (!userList) return res.json({ error: 'Student is not registered' });
        if (!session) session = [];
        res.json({ result: userList, session: session });
    } catch { res.json({ error: 'Could not find any result' }); }
});

router.post('/update', async (req, res) => {
    try {
        const { _id, name, roll, section, cls, percentage, sessionId, sessionName, subjects, promoted
        } = req.body;
        var data = await Result.updateResult(_id, percentage, subjects, sessionId, sessionName, promoted);
        if (Number(cls) === 5 && promoted) var upt = await Stud.updatePassed(name, roll, cls, section);
        res.json({ Result: data });
    } catch{ res.json({ error: 'Somthing unexpeected occured' }); }
});

module.exports = router;