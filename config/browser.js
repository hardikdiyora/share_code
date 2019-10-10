const cmdArgs = require('yargs')
    .option('browser', {
        type: 'string',
        describe: 'the browser name on which you want to run the tests.',
        choices: ['chrome','firefox', 'chrome,firefox', 'firefox,chrome'],
        default: 'chrome'
    })
    .help()
    .argv;

let possible_capabilities = [
    {
        browserName: 'chrome',
        maxInstances: 1
    },
    {
        browserName: 'firefox',
        maxInstances: 1
    }
];

let browsers = cmdArgs.browser.split(',');

let browserCapabilities = [];
possible_capabilities.forEach(capability => {
    if (browsers.includes(capability.browserName))
        browserCapabilities.push(capability);
});

module.exports = browserCapabilities;