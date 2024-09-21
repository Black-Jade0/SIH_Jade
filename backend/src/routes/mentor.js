//Cannot use the import syntax Find out why ?
const express = require("express");
const { PrismaClient } = require("@prisma/client");
const { JWT_PASSWORD } = require("../config");
const jwt = require("jsonwebtoken");
const { authMiddleware } = require("../middleware");
const router = express.Router();
const prisma = new PrismaClient();

router.post("/signup", async (req, res) => {
    const body = req.body;
    try {
        const mentoruser = await prisma.mentorSchema.create({
            data: {
                name: body.username,
                lastname: body.lastname,
                email: body.email,
                password: body.password,
                lat: body.lat,
                long: body.long,
                field: body.fieldofinterest,
                socialmedia: {
                    instagram: body.instagram,
                    twitter: body.twitter,
                    linkedin: body.linkedin,
                },
            },
        });
        const userId = mentoruser.id;
        const token = jwt.sign({ userId }, process.env.JWT_PASSWORD);
        res.json({ message: "User created successfully", token: token });
    } catch (e) {
        console.log("Got the error: ", e);
        return res.status(403).json({
            message: "Got error while signing up",
        });
    }
});
router.post("/signin", async (req, res) => {
    const body = req.body;
    try {
        const founduser = await prisma.mentorSchema.findFirst({
            where: {
                email: body.email,
                password: body.password,
            },
        });
        if (founduser) {
            const token = jwt.sign(
                { userId: founduser.id },
                process.env.JWT_PASSWORD
            );
            res.json({
                message: "Signed in successfully ",
                token: token,
            });
        }
    } catch (e) {
        console.log("Got the error: ", e);
        return res.status(403).json({
            message: "Got error while signing in",
        });
    }
});
router.get("/data/:id", async (req, res) => {
    //It is open to all because it won't be sharing any sensitive information
    const { id } = req.params.id;
    try {
        const mentorschema = await prisma.mentorSchema.findFirst({
            where: {
                id,
            },
            select: {
                name: true,
                lastname: true,
                lat: true,
                long: true,
                field: true,
            },
        });
        //single user data json object
        res.json({ mentorschema: mentorschema });
    } catch (e) {
        console.log("Got the error: ", e);
        return res.status(404).json({
            message: "Got error while fetching data",
        });
    }
});
router.get("/bulk", async (req, res) => {
    //It is open to all because it won't be sharing any sensitive information
    try {
        const mentordata = await prisma.mentorSchema.findMany({
            select: {
                name: true,
                lastname: true,
                lat: true,
                long: true,
                field: true,
            },
        });
        //mentordata is an array of mentor's data
        res.json({ mentordata: mentordata });
    } catch (e) {
        console.log("Got the error: ", e);
        return res.status(404).json({
            message: "Got error while fetching data",
        });
    }
});

router.post("/questions", authMiddleware, async (req, res) => {
    const { title, content, author } = req.body;
    const authorid = req.userId;
    try {
        const question = await prisma.question.create({
            data: { title, content, author, authorid },
        });
        //res.json({question,authortype:"mentor"}); for giving green tick to mentor only !
        res.json(question);
    } catch (error) {
        console.log("got the error: ", error);
        res.status(500).json({ error: "Failed to create question" });
    }
});

router.post("/answers", authMiddleware, async (req, res) => {
    const { content, author, questionId } = req.body;
    const authorid = req.userId;
    try {
        const answer = await prisma.answer.create({
            data: { content, author, authorid, questionId },
        });
        res.json(answer);
    } catch (error) {
        console.log("got the error: ", error);
        res.status(500).json({ error: "Failed to post answer" });
    }
});

module.exports = router;
