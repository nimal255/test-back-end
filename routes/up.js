module.exports = (app) => {
    var multer = require("multer");

    const photoDir = "../public/pdf";

    //photo upload storage session
    var photoStorage = multer.diskStorage({
        destination: function (req, file, callback) {
            callback(null, photoDir);
        },
        filename: function (req, file, callback) {
            console.log(req.body);
            callback(null, Date.now() + "PP" + path.extname(file.originalname));
        },
    });

    //photo upload session
    var uploadPhoto = multer({
        storage: photoStorage,
        fileFilter: function (req, file, callback) {
            var ext = path.extname(file.originalname);
            if (ext !== ".png" && ext !== ".jpg" && ext !== ".gif" && ext !== ".jpeg" && ext !== ".pdf") {
                return callback(res.send("Only images are allowed"), null);
            }
            req.ppImage = file.originalname;
            callback(null, true);
        },
    });

    app.post("/add", uploadPhoto.single("pdf"), function (req, res, next) {
        //route to add student passport size photo
        //Author: Abhijith K Anand
        //createdOn:06/08/2020
        var reqData = req.body;
        reqData.studentPP = req.files.pdf;
        res.send({
            message: "Uploaded",
        });
    });
};
