import Jimp from "jimp";
import fs from 'fs';


class UploadService {

    convertToBmp = async (path: string) : Promise<void> => {

        // Convert image to bmp
        const img = await Jimp.read(path);
        const newPath = path.split(".")[0] + ".bmp";
        img.write(newPath);

        fs.unlink(path, () => {});
    }



}

export default new UploadService();