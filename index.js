var path = require('path');

var createPattern = function(file) {
    return {pattern: file, included: true, served: true, watched: false};
};

var init = function(files) {
    var path = path.dirname(require.resolve('chai-shallow-deep-equal')) + '/..';
    files.unshift(createPattern(path + '/chai-shallow-deep-equal.js'));
};

init.$inject = ['config.files'];

module.exports = {
    'framework:chai-shallow-deep-equal': ['factory', init]
};