const Sequelize = require("sequelize");

module.exports = (sequelize) => {
    const UsersAndFiles = sequelize.define(
        "users_and_files",
        {
            id: {
                type: Sequelize.UUID,
                primaryKey: true,
                defaultValue: Sequelize.UUIDV4,
            },
            userId: {
                field: "user_id",
                type: Sequelize.UUID,
            },
            fileUrl: {
                field: "file_url",
                type: Sequelize.STRING,
            },
            fileName: {
                field: "file_name",
                type:Sequelize.STRING,
            }
        },
        {
            timestamps: true,
        }
    );
    return UsersAndFiles;
};
