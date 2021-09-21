import { Request, Response } from "express";
const routes = require("express").Router();
const multer = require("multer");
const multerConfig = require("./config/multer");

const Post = require("./models/Post");

routes.get("/posts", async(req: Request, res: Response) => {
    const posts = await Post.find();

    return res.status(200).send(posts);
});

routes.post("/posts", multer(multerConfig).single("file"), async (req: Request, res: Response) =>{
    const { originalname: name, size, key, location: url = ""} = req.file;
})