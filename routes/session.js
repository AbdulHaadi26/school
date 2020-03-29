const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Session = require('../schemas/sessionSchema');

router.post('/register', async (req, res) => {
    try {
        const { name } = req.body;
        const userData = { _id: new mongoose.mongo.ObjectId(), name: name};
        var user = await Session.findSessionByName(name);
        if (!user) {
            var data = await Session.create(userData);
            res.json({ session: data });
        } else res.json({ error: 'Session name is already registered' });
    } catch{ res.json({ error: 'Somthing unexpected occured' }); }
});

router.get('/getSession', async (req, res) => {
    try {
        var session = await Session.getAllSession();
        if (!session) return res.json({ error: 'No session found' });
        if (!session) session = [];
        res.json({ session: session });
    } catch{ res.json({ error: 'Somthing unexpected occured' }); }

});

module.exports = router;