module.exports = function(){
    
    var client = './src/client/';
    var clientApp = client + 'app/';

    var config = {
        temp: './.tmp/',
        alljs: [
            './src/**/*.js',
            './*.js'
        ],
        css: [
            './src/client/**/*.css'
        ],
        client: client,
        index: client + 'index.html',
        js: [
            clientApp + '**/*.module.js',
            clientApp + '**/*.js'
        ],
        bower: {
            json: require('./bower.json'),
            directory: './bower_components/',
            ignorePath: '../..'
        },
         getWiredepDefaultOptions: function() {
            var options = {
                bowerJson: this.bower.json,
                directory: this.bower.directory,
                ignorePath: this.bower.ignorePath
            }
            return options;
        }
    };

    return config;
}