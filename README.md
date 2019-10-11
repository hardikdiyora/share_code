## Tests Automation

#### This framework is for providing the automated tests for API as well as UI.

#### Technologies :
    - Node as JavaScript runner
    - BabelJS as JS compiler
    - Mocha as test runner
    - supertest for api tests layer
    - WebDriverIO for ui tests layer   
    - Chai as assertion library 
    - Page object model with layered architecture

#### Pre-requisite :

    - Install JAVA JDK v8 or more.
    - Install NodeJS, chrome or firefox browser. 
    - Clone the code
    - Checkout "package.json" file to know which all 
      packages are used.
    - To know, WDIO main configuration file : wdio.conf.js  
    

#### Get started :

1. Run command for install node packages in the project folder: 
    > npm install
2. To run 

    - API :
        - All API tests : 
            > npm run test:api -- --token {TOKEN inside comma}
 
    - UI :
        - All UI tests : 
            > npm run test:ui -- --uname {USERNAME} --pwd {PASSWORD}
        - A specific suite for example login feature tests:
            > npm run test:ui -- --suite login --uname {USERNAME} --pwd {PASSWORD}
        - A specific spec/test file :
            > ./node_modules/.bin/wdio wdio.conf.js --spec {SPEC_FILE} --uname {USERNAME} --pwd {PASSWORD}
        - Run tests with firefox browser : 
            > npm run test:ui -- --uname {USERNAME} --pwd {PASSWORD} --browser firefox

3. Once UI tests execution completes it creates 'output_logs' for test runner logs and screen shots for failed tests.


#### Directory Structure :

                    
        config
            ├── browser.js
            ├── credentials.js
            └── url.js
        api_modules
            ├── constant.js
            ├── response_scemas.js
            └── schema_validation.js
        pages
            ├── base.page.js
            ├── base.selectors.js
            ├── dashboard
            │       ├── page.js
            │       └── selectors.js
            |   :               
            └── mydetails
                ├── page.js
                └── selectors.js
        tests
            ├── api
            │   └── vehical_status
            └── ui
                ├── details
                ├── invoices
                └── login
        test_data
            ├── invoice_months.js
            └── user_details.js
        utils
            └── general.js 
        output_logs
            └── screen_shots/
                                                                                                                                 

                           
                               
 

