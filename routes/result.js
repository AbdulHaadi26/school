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
        var user = await Result.findResultByName(name, sessionId);
        if (!user) {
            var data = await Result.create(userData);
            res.json({ Result: data });
        } else res.json({ error: 'Result is already registered' });
    } catch{ res.json({ error: 'Somthing unexpeected occured' }); }
});

module.exports = router;