module.exports = function() {


    var client = './wwwroot/';
    var report = './report/';
    var clientApp = client + 'app/';
    var specRunnerFile = '/home/testrunner';
    var wiredep = require('wiredep');
    var bowerFiles = wiredep({ devDependencies: true })['js'];
    var bower = {
        json: require('./bower.json'),
        directory: './bower_components/',
        ignorePath: '../..'
    };
    var config = {
        alljs: [
            clientApp + '/**/*.js'
        ],
        client: client,
        report: report,
        plato: { js: clientApp + '**/*.js' },
        browserReloadDelay: 1000
    }



    var nodeModules = 'node_modules';

    config.karma = getKarmaOptions();
    return config;

    function getKarmaOptions() {
        var options = {
            files: [].concat(
                    bowerFiles,
                    clientApp + '**/*.js'
                ),
            exclude: [],
            coverage: {
                dir: report + 'coverage',
                reporters: [
                    { type: 'html', subdir: 'report-html' },
                    { type: 'lcov', subdir: 'report-lcov' },
                    { type: 'text-summary' }
                ]
            }
        };
        options.preprocessors[clientApp + '**/!(*.spec)+(.js)'] = ['coverage'];
        return options;
    }

}