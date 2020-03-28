const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Stud = require('../schemas/studentSchema');
const JWT = require('../middlewares/jwtAuth');

router.post('/register', async (req, res) => {
    try {
        const { name, roll, section, cls } = req.body;
        const userData = { _id: new mongoose.mongo.ObjectId(), name: name, roll: roll, cls: Number(cls), section: section };
        var user = await Stud.findUserByName(name, roll);
        if (!user) {
            var data = await Stud.create(userData);
            res.json({ student: data });
        } else res.json({ error: 'User is already registered' });
    } catch{ res.json({ error: 'Somthing unexpected occured' }); }
});

router.get('/getStudent/:_id', async (req, res) => {
    try {
        const { _id } = req.params;
        var user = await Stud.findUserById(_id);
        if (!user) return res.json({ error: 'Student is not registered' });
        res.json({ student: user });
    } catch{ res.json({ error: 'Somthing unexpected occured' }); }

});

router.get('/getStudentsCount', async (req,res) => {
        try {
        const { _id } = req.params;
        var user = await Stud.findUserById(_id);
        if (!user) return res.json({ error: 'Student is not registered' });
        res.json({ student: user });
    } catch{ res.json({ error: 'Somthing unexpected occured' }); }
});

router.get('/getStudents', async (req,res) => {
        try {
        const { _id } = req.params;
        var user = await Stud.findUserById(_id);
        if (!user) return res.json({ error: 'Student is not registered' });
        res.json({ student: user });
    } catch{ res.json({ error: 'Somthing unexpected occured' }); }
});

module.exports = router;