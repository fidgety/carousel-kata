var tests = [];
for (var file in window.__karma__.files) {
    if (/tdd.*\.js/.test(file)) {
        tests.push(file);
    }
}

define('should', ['chai'], function(chai) {
    return chai.should()
});

define('fixture', function() {
    var item;

    return {
        setup: function(htmlstring) {
            item = document.createElement("div");
            item.id = 'TLRG-test-fixture';
            item.innerHTML = htmlstring;
            document.body.appendChild(item);
            return item;
        },
        teardown: function() {
            item = document.getElementById('TLRG-test-fixture');
            item.parentNode.removeChild(item);
        }
    }
});

requirejs.config({
    baseUrl: '/base',

    paths: {
        'jquery': 'assets/dependencies/jquery/jquery',
        'chai': 'assets/dependencies/chai/chai',
        'sinon': 'assets/dependencies/sinon/lib/sinon',
        'hbs': 'assets/dependencies/require-handlebars-plugin/hbs',
        'text': 'assets/dependencies/require-js/text'
    },

    hbs: {
        helpers: true,
        i18n: false,
        templateExtension: 'handlebars',
        partialsUrl: ''
    },

    shim: {
        sinon: {
            exports: 'sinon'
        }
    },

    // ask Require.js to load these files (all our tests)
    deps: tests,

    // start test run, once Require.js is done
    callback: window.__karma__.start
});

