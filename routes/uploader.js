module.exports = (app) => {
    const uploadCtrl = require("../controllers/fileUpload");
    const userDbCtrl = require("../controllers/users")


    app.post("/upload", uploadCtrl.uploadFile);
    app.post("/users/uploadFilePdf", userDbCtrl.uploadPdf)
};
