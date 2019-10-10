const randomText = () => {
    return 'user-' + Math.floor(Math.random()*100000).toString();
};

const takeScreenShots = (test) => {
    // if test passed, ignore, else take and save screenshot.
    if (test.passed) {
        return;
    }
    // get current test title and clean it, to use it as file name
    let filename = encodeURIComponent(test.title.replace(/\s+/g, '-'));
    // build file path
    let fs = require('fs');
    let filePath = path.join(testLogDir, 'screen_shots/');
    if (!fs.existsSync(filePath)){
        fs.mkdirSync(filePath);
    }
    // save screenshot
    let name = filePath + filename + '.png';
    browser.saveScreenshot(name);
    console.log('\n\tScreenshot location:', name, '\n');
};

module.exports = {
    randomText,
    takeScreenShots,
};