const cmdArgs = require('yargs')
    .option('uname', {
        type: 'string',
        describe: 'the username or email of registered user.',
    })
    .option('pwd', {
        type: 'string',
        describe: 'the password of same user.',
    })
    .demandOption(['uname', 'pwd'], 'please provide the uname and pwd command line args.')
    .help()
    .argv;

let user = {
    username: cmdArgs.uname,
    password: cmdArgs.pwd,
    name: 'Nils Reißig'
};

module.exports = user;
