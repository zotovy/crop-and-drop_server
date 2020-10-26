import { Router as Express } from "express";
import * as path from "path";
import UploadService from "./service";
import FileHelper from  "../../helpers/files";

const Router = Express();

interface FileRequest extends Request {
    files: any;
}

// @ts-ignore
Router.post("/", async (req : FileRequest, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).json({ status: true, error: "no_files_found" });
    }

    for (const key of Object.keys(req.files)) {
        const file = req.files[key];
        const uploadPath = path.join(
            __dirname,
            "../../",
            "uploads",
            `${FileHelper.convertToFilename(new Date())}.${file.name.split(".")[1]}`
        );

        await file.mv(uploadPath);
        await UploadService.convertToBmp(uploadPath);
    }

    return res.status(200).json({ status: true });
});

export default Router;
