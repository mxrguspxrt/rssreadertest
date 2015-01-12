define("app/app", 
  ["ember","ember/resolver","ember/load-initializers","app/config/environment","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var Resolver = __dependency2__["default"];
    var loadInitializers = __dependency3__["default"];
    var config = __dependency4__["default"];

    Ember.MODEL_FACTORY_INJECTIONS = true;

    var App = Ember.Application.extend({
      modulePrefix: config.modulePrefix,
      podModulePrefix: config.podModulePrefix,
      Resolver: Resolver
    });

    loadInitializers(App, config.modulePrefix);

    __exports__["default"] = App;
  });
define("app/controllers/articles", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];

    __exports__["default"] = Ember.ArrayController.extend({

    });
  });
define("app/initializers/export-application-global", 
  ["ember","app/config/environment","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var config = __dependency2__["default"];

    function initialize(container, application) {
      var classifiedName = Ember.String.classify(config.modulePrefix);

      if (config.exportApplicationGlobal) {
        window[classifiedName] = application;
      }
    };
    __exports__.initialize = initialize;
    __exports__["default"] = {
      name: 'export-application-global',

      initialize: initialize
    };
  });
define("app/models/article", 
  ["ember-data","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var DS = __dependency1__["default"];

    __exports__["default"] = DS.Model.extend({

      error: DS.attr("boolean"),
      mesage: DS.attr(),

      article_url: DS.attr()

    });
  });
define("app/router", 
  ["ember","app/config/environment","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var config = __dependency2__["default"];

    var Router = Ember.Router.extend({
      location: "hash"
    });

    Router.map(function() {
      this.route("articles", {path: "/"});
    });

    __exports__["default"] = Router;
  });
define("app/routes/application", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];

    __exports__["default"] = Ember.Route.extend({

    });
  });
define("app/routes/articles", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];

    __exports__["default"] = Ember.Route.extend({

      model: function() {
        return this.store.find("article");
      }

    });
  });
define("app/templates/application", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', stack1;


      stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n");
      return buffer;
      
    });
  });
define("app/templates/articles", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', stack1, self=this;

    function program1(depth0,data) {
      
      var buffer = '', stack1;
      data.buffer.push("\n  ");
      stack1 = helpers._triageMustache.call(depth0, "article.article_url", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n");
      return buffer;
      }

    function program3(depth0,data) {
      
      
      data.buffer.push("\n  No articles found\n");
      }

      stack1 = helpers.each.call(depth0, "article", "in", "", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n");
      return buffer;
      
    });
  });
define("app/templates/loading", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      


      data.buffer.push("Please wait, loading...");
      
    });
  });
define("app/tests/app.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - .');
    test('app.js should pass jshint', function() { 
      ok(true, 'app.js should pass jshint.'); 
    });
  });
define("app/tests/app/tests/helpers/resolver.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - app/tests/helpers');
    test('app/tests/helpers/resolver.js should pass jshint', function() { 
      ok(true, 'app/tests/helpers/resolver.js should pass jshint.'); 
    });
  });
define("app/tests/app/tests/helpers/start-app.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - app/tests/helpers');
    test('app/tests/helpers/start-app.js should pass jshint', function() { 
      ok(true, 'app/tests/helpers/start-app.js should pass jshint.'); 
    });
  });
define("app/tests/app/tests/test-helper.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - app/tests');
    test('app/tests/test-helper.js should pass jshint', function() { 
      ok(true, 'app/tests/test-helper.js should pass jshint.'); 
    });
  });
define("app/tests/controllers/articles.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - controllers');
    test('controllers/articles.js should pass jshint', function() { 
      ok(true, 'controllers/articles.js should pass jshint.'); 
    });
  });
define("app/tests/helpers/resolver", 
  ["ember/resolver","app/config/environment","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var Resolver = __dependency1__["default"];
    var config = __dependency2__["default"];

    var resolver = Resolver.create();

    resolver.namespace = {
      modulePrefix: config.modulePrefix,
      podModulePrefix: config.podModulePrefix
    };

    __exports__["default"] = resolver;
  });
define("app/tests/helpers/start-app", 
  ["ember","app/app","app/router","app/config/environment","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var Application = __dependency2__["default"];
    var Router = __dependency3__["default"];
    var config = __dependency4__["default"];

    __exports__["default"] = function startApp(attrs) {
      var application;

      var attributes = Ember.merge({}, config.APP);
      attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;

      Ember.run(function() {
        application = Application.create(attributes);
        application.setupForTesting();
        application.injectTestHelpers();
      });

      return application;
    }
  });
define("app/tests/models/article.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - models');
    test('models/article.js should pass jshint', function() { 
      ok(true, 'models/article.js should pass jshint.'); 
    });
  });
define("app/tests/router.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - .');
    test('router.js should pass jshint', function() { 
      ok(false, 'router.js should pass jshint.\nrouter.js: line 2, col 8, \'config\' is defined but never used.\n\n1 error'); 
    });
  });
define("app/tests/routes/application.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - routes');
    test('routes/application.js should pass jshint', function() { 
      ok(true, 'routes/application.js should pass jshint.'); 
    });
  });
define("app/tests/routes/articles.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - routes');
    test('routes/articles.js should pass jshint', function() { 
      ok(true, 'routes/articles.js should pass jshint.'); 
    });
  });
define("app/tests/test-helper", 
  ["app/tests/helpers/resolver","ember-qunit"],
  function(__dependency1__, __dependency2__) {
    "use strict";
    var resolver = __dependency1__["default"];
    var setResolver = __dependency2__.setResolver;

    setResolver(resolver);

    document.write('<div id="ember-testing-container"><div id="ember-testing"></div></div>');

    QUnit.config.urlConfig.push({ id: 'nocontainer', label: 'Hide container'});
    var containerVisibility = QUnit.urlParams.nocontainer ? 'hidden' : 'visible';
    document.getElementById('ember-testing-container').style.visibility = containerVisibility;
  });
/* jshint ignore:start */

define('app/config/environment', ['ember'], function(Ember) {
  var prefix = 'app';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (runningTests) {
  require("app/tests/test-helper");
} else {
  require("app/app")["default"].create({});
}

/* jshint ignore:end */
//# sourceMappingURL=app.map