const Account = require('./account');
const Student = require('./students');
const Session = require('./session');
const Result = require('./result');

module.exports = function (app) {
    app.use('/api/account', Account);
    app.use('/api/student', Student);
    app.use('/api/session',Session);
    app.use('/api/result',Result);
}