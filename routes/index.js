const Account = require('./account');
const Student = require('./students');

module.exports = function (app) {
    app.use('/api/account', Account);
    app.use('/api/student/', Student);
}