module.exports = (app) => {
    const userCtrl = require("../controllers/users");

    app.post("/auth/register", userCtrl.register);
    app.post("/auth/login", userCtrl.login);
    app.get("/users/details", userCtrl.listDetails);
};
