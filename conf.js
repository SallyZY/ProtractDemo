exports.config = {

    directConnect: true,
    seleniumAddress: 'http://localhost:4444/wd/hub',

    framework: 'custom',
    frameworkPath: 'protractor-cucumber-framework',
    specs: ['feature/*.feature'],

    capabilities: {
        browserName: 'chrome'
    },

    cucumberOpts: {
        format: 'pretty'
//        require: ['feature/**/*.js','support/world.js']
    }
}




