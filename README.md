## UI Tests Automation

#### This framework is for providing the automated tests for UI.

#### Technologies :
    - WebDriverIO as base layer
    - Node as JavaScript runner
    - BabelJS as JS compiler
    - Mocha as test runner
    - Chai as assertion library 

#### Pre-requisite :

    - Install nodejs
    - Clone the code
    - Checkout "package.json" file to know which all 
      packages are used.
    - WDIO main configuration file : wdio.conf.js  
    

#### Get started :

1. Run command for install node packages : 
    > npm install
2. To run 
    - All tests : 
        > npm test -- --uname {USERNAME} --pwd {PASSWORD}
    - A specific suite for example login feature tests:
        > npm test -- --suite login --uname {USERNAME} --pwd {PASSWORD}
    - A specific spec/test file :
        > ./node_modules/.bin/wdio wdio.conf.js --spec {SPEC_FILE} --uname {USERNAME} --pwd {PASSWORD}
    - Run tests with firefox browser : 
        > npm test -- --uname {USERNAME} --pwd {PASSWORD} --browser firefox
    - To get help document :
        > npm test 
3. Once tests execution completes it creates 'output_logs' for test runner logs and screen shots for failed tests.


#### Directory Structure :

        config
            ├── browser.js
            ├── credentials.js
            └── url.js
        pages
            ├── base.page.js
            ├── base.selectors.js
            ├── dashboard/
            ├── home/
            ├── login/
            └── mydetails/
        tests
            └── ui/
        test_data
            ├── invoice_months.js
            └── user_details.js
        utils
            └── general.js
        output_logs
            └── screen_shots/
                    
                                                                                                                  

                           
                               
 
