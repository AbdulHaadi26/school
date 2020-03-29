const Account = require('./account');
const Student = require('./students');
const Session = require('./session');

module.exports = function (app) {
    app.use('/api/account', Account);
    app.use('/api/student', Student);
    app.use('/api/session',Session);
}