const cmdArgs = require('yargs')
    .option('env', {
        type: 'string',
        describe: 'the environment where you want to run the tests.',
        choices: ['dev', 'qa', 'prod']
    })
    .help()
    .argv;

const urls = {
    dev: '<DEV URL>',
    qa: '<QA URL>',
    prod: 'https://www.car2go.com'
};

let baseUrl = cmdArgs.env ? urls[cmdArgs.env] : urls['prod'];

module.exports = baseUrl;