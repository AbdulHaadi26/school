const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Result = require('../schemas/resultSchema');

router.post('/register', async (req, res) => {
    try {
        const { name, roll, section, cls, percentage, sessionId, sessionName, subjects, promoted
       } = req.body;
        const userData = {
            _id: new mongoose.mongo.ObjectId(), name: name, roll: roll, cls: Number(cls), section: section
            , percentage: Number(percentage), sessionId: sessionId, sessionName: sessionName, subjects: subjects, promoted: promoted
        };
        var user = await Result.findResultByName(name, sessionId,roll,cls,section);
        if (!user) {
            var data = await Result.create(userData);
            res.json({ Result: data });
        } else res.json({ error: 'Result is already registered' });
    } catch{ res.json({ error: 'Somthing unexpeected occured' }); }
});

router.post('/searchResultCount', async (req, res) => {
    const { sesId,string, opt1, opt2 } = req.body;
    try {
        var count = await Result.getAllResultQueryCount(string, opt1, opt2,sesId);
        if (count) res.json({ resultCount: count });
        else res.json({ resultCount: 0 });
    } catch { res.json({ error: 'Could not find any result' }); }
});

router.post('/searchResult', async (req, res) => {
    const { sesId,limit, string, opt1, opt2 } = req.body;
    try {
        var userList = await Result.getAllResultQueryLimit(limit, string, opt1, opt2,sesId);
        if (userList) res.json({ resultList: userList });
        else res.json({ resultList: [] });
    } catch { res.json({ error: 'Could not find any result' }); }
});


router.post('/getResultCountAll', async (req, res) => {
    const { sesId,opt1, opt2 } = req.body;
    try {
        var count = await Result.getAllResultCount(opt1, opt2, sesId);
      if (count) res.json({ resultCount: count });
        else res.json({ resultCount: 0 });
    } catch { res.json({ error: 'Could not find any result' }); }
});

router.post('/getResultAll', async (req, res) => {
    const { sesId,limit, opt1, opt2 } = req.body;
    try {
        var userList = await Stud.getAllResultLimit(limit, opt1, opt2, sesId);
         if (userList) res.json({ resultList: userList });
        else res.json({ resultList: [] });;
    } catch { res.json({ error: 'Could not find any result' }); }
});


module.exports = router;