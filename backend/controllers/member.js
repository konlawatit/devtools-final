const express = require("express");

const router = express.Router();

const Member = require("../models/members")

router.get('/healt', async (req, res) => {
    try {
        res.send('member api is running')
    } catch (err) {
        console.log(err)
        res.send(err)
    }
})

router.post('/add', async(req, res) => {
    try {
        const {firstName, lastName, phone} = req.body;
        const member = await Member.create({
            firstName: firstName,
            lastName: lastName,
            phone: phone
        })
        res.send(member)
    } catch (err) {
        console.log(err)
        res.send(err)
    }
})

router.get('/all', async (req, res) => {
    try {
        const members = await Member.find()
        res.send(members)
    } catch(err) {
        console.log(err)
        res.send(err)
    }
})

router.put('/edit', async (req, res) => {
    try {
        const {id,  date} = req.body;
        Member.findByIdAndUpdate(id, {"date": date}, (err, result) => {
            if (err) throw err
            res.send(result)
        })
    } catch(err) {
        console.log(err)
        res.send(err)
    }
})

router.delete('/del', async (req, res) => {
    try {
        const {id} = req.headers;
        // console.log(req)
        console.log('del', id)
        Member.findByIdAndDelete(id, (err, result) => {
            if (err) throw err
            res.send(result)
        })
    } catch(err) {
        console.log(err)
        res.send(err)
    }
})

router.post('/find/byid', async(req, res) => {
    try {
        const {id} = req.body
        const members = await Member.findById(id)
        res.send(members)
    } catch(err) {
        console.log(err)
        res.send(err)
    }
})

module.exports = router;