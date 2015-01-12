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
define("app/helpers/test-breadcrumbs", 
  ["ember","ember-cli-bootstrap/utils/test-breadcrumbs","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var BsBreadcrumbs = __dependency2__["default"];

    debugger
    __exports__["default"] = Ember.Handlebars.makeBoundHelper(BsBreadcrumbs);
  });
define("app/helpers/test-helper", 
  ["ember","ember-cli-bootstrap/utils/test-helper","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var testHelper = __dependency2__["default"];

    __exports__["default"] = Ember.Handlebars.makeBoundHelper(testHelper);
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
define("app/initializers/test-breadcrumbs", 
  ["app/helpers/test-breadcrumbs","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var testHelper = __dependency1__["default"];

    function initialize(/* container, application */) {
      debugger
      Ember.Handlebars.registerHelper('test-breadcrumbs', testHelper);
    };
    __exports__.initialize = initialize;
    __exports__["default"] = {
      name: 'test-breadcrumbs',
      initialize: initialize
    };
  });
define("app/initializers/test-helper", 
  ["app/helpers/test-helper","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var testHelper = __dependency1__["default"];

    function initialize(/* container, application */) {
      Ember.Handlebars.registerHelper('test-helper', testHelper);
    };
    __exports__.initialize = initialize;
    __exports__["default"] = {
      name: 'test-helper',
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

      title: DS.attr(),
      article_url: DS.attr(),
      excerpt: DS.attr(),
      content: DS.attr(),
      lead_image_url: DS.attr()

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
      this.route("article", {path: "/article/:article_id"});
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
define("app/routes/article", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];

    __exports__["default"] = Ember.Route.extend({

      model: function(params) {
        return this.store.find("article", params.article_id);
      }

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
define("app/templates/article", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', stack1, escapeExpression=this.escapeExpression;


      data.buffer.push("<div class=\"row\">\n\n  <div class=\"col-xs-12\">\n    <img ");
      data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
        'src': ("lead_image_url")
      },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
      data.buffer.push(" />\n\n    <h4>");
      stack1 = helpers._triageMustache.call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("</h4>\n    ");
      stack1 = helpers._triageMustache.call(depth0, "excerpt", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n  </div>\n\n</div>");
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
      var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

    function program1(depth0,data) {
      
      var buffer = '', stack1, helper, options;
      data.buffer.push("\n\n    <div class=\"col-xs-12 col-sm-4 article\">\n      <img ");
      data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
        'src': ("article.lead_image_url")
      },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
      data.buffer.push(" />\n\n      <h4>");
      stack1 = helpers._triageMustache.call(depth0, "article.title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("</h4>\n      ");
      stack1 = helpers._triageMustache.call(depth0, "article.excerpt", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n      ");
      stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "article", "article", options) : helperMissing.call(depth0, "link-to", "article", "article", options));
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n    </div>\n\n  ");
      return buffer;
      }
    function program2(depth0,data) {
      
      
      data.buffer.push("Read more");
      }

    function program4(depth0,data) {
      
      
      data.buffer.push("\n\n    <div class=\"col-xs-12\">\n      No articles found\n    </div>\n\n  ");
      }

      data.buffer.push("<div class=\"row articles\">\n  ");
      stack1 = helpers.each.call(depth0, "article", "in", "", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(4, program4, data),fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n</div>");
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
define("app/tests/routes/article.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - routes');
    test('routes/article.js should pass jshint', function() { 
      ok(true, 'routes/article.js should pass jshint.'); 
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