const cmdArgs = require('yargs')
    .option('token', {
        type: 'string',
        describe: 'the token value for api access in between comma',
    })
    .demandOption(['token'], 'please provide the token command line args.')
    .help()
    .argv;

const url = 'https://api.mercedes-benz.com/vehicledata_tryout/v1' 
const token = cmdArgs.token
const vehicleId = 'WDB111111ZZZ22222'

// constants for api tests
export {
    url,
    token,
    vehicleId
}
