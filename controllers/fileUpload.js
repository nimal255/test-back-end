const fs = require("fs");
const db = require("../config/database");

exports.uploadFile = (req, res) => {
    fs.readFile(req.files.image.path, function (err, data) {
        // console.log("data >>>>>>>>>>",req.files.image);
        var fileName = req.files.image.originalFilename;

        // console.log("imageName>>>>>>>>>>>>>",fileName)

        /// If there's an error
        if (!fileName) {
            return res.status(500).send({
                message: "Upload Failed",
            });
        }
        // var path = "./public/pdf/" + fileName;

        fs.writeFile("./public/pdf/" + fileName, data, function (err) {
            /// let's see it
            // if(err){
            //     return res.status(500).send({
            //         message:"Failed",
            //     })
            // }
            // db.usersAndFiles.create({
            //     fileName:fileName,
            //     fileUrl: "file://" + __dirname.replace("controllers", "") + "public/pdf/" + fileName,
            //     userId:req.user.id
            // }).then((res1,err)=>{
            //     return res.send({
            //         message:"uploaded file successfully",
                    
            //        data:({
            //         //    id:res1.id,
            //            fileName:res.fileName,
            //            fileUrl:res1.fileUrl
            //        })
            //     })
            // })
            return res.send({
                message:"File Uploaded",
                fileUrl:__dirname.replace("controllers", "") + "public/pdf/" + fileName,
                fileName:fileName,
            })
        });
    });
};
