class FileHelper {
        convertToFilename = (date : Date) : string => {
            const y = date.getFullYear();
            const m = date.getMonth() + 1;
            const d = date.getDate();
            const h = date.getHours();
            const mi = date.getMinutes();
            const s = date.getSeconds();
            return y + "-" + m + "-" + d + "-" + h + "-" + mi + "-" + s;
        }
}

export default  new FileHelper();
