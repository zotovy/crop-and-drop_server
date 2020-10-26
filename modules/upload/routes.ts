import {Router as Express} from "express";
import * as path from "path";

const Router = Express();

Router.post("/",  async (req, res) => {

    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).json({ status: true, error: "no_files_found" });
    }

    let hasError = false;

    for (const key of Object.keys(req.files)) {
        const file = req.files[key];
        const uploadPath = path.join(__dirname, "../../../", "uploads",  `${key}.${file.name.split(".")[1]}`);

        await file.mv(uploadPath, (e) => console.log(e))
    }

    if (!hasError) {
        return res.status(200).json({status: true});
    }
});

export default Router;