const express = require("express")
const scriptRouter = express.Router()
const Script = require("../models/script.js")

scriptRouter.get("/", (req, res, next) => {
    Script.find((err, scriptures) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(scriptutes)
    })
})
scriptRouter.post("/", (req, res, next) => {
    const newScript = new Script(req.body)
    newScript.save((err, savedScripture) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedScripture)
    })
})
scriptRouter.delete("/scriptId", (req, res, next) => {
    Script.findOneAndDelete({ _id: req.params.scriptId }, (err, deletedScript) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`successfully deleted ${deletedScript.verse}`)
    })
})
scriptRouter.put("/scriptId", (req ,res, next) => {
    Script.findOneAndUpdate({ _id: req.params.scriptId }, req.body, {new: true}, (err, updatedScripture) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(udpatedScripture)
    })
})

module.exports = scriptRouter