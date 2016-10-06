define('app',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var App = exports.App = function () {
    function App() {
      _classCallCheck(this, App);

      this.message = 'Todos';
      this.tab = [{ id: "0", title: "Hey", checked: false }, { id: "1", title: "Salut", checked: false }];
      this.log = "";
      this.blue = {
        background: 'grey'
      };
    }

    App.prototype.add = function add() {
      this.tab.push({ id: this.tab.length, title: this.login, checked: false });
    };

    App.prototype.remove = function remove(t) {
      this.tab.splice(this.indexxOf(t), 1);
    };

    App.prototype.indexxOf = function indexxOf(t) {
      for (var i = 0; i < this.tab.length; i++) {
        if (this.tab[i].title == t) {
          return i;
        }
      }
      return -1;
    };

    return App;
  }();
});
define('environment',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    debug: true,
    testing: true
  };
});
define('main',['exports', './environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;

  var _environment2 = _interopRequireDefault(_environment);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  Promise.config({
    warnings: {
      wForgottenReturn: false
    }
  });

  function configure(aurelia) {
    aurelia.use.standardConfiguration().feature('resources');

    if (_environment2.default.debug) {
      aurelia.use.developmentLogging();
    }

    if (_environment2.default.testing) {
      aurelia.use.plugin('aurelia-testing');
    }

    aurelia.start().then(function () {
      return aurelia.setRoot();
    });
  }
});
define('resources/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {}
});
define('text!app.html', ['module'], function(module) { module.exports = " <template>\r\n  \r\n  <header>\r\n    <nav class=\"blue\">  \r\n      <a href=\"\" class=\"brand-logo center\">Logo</a>\r\n    </nav>\r\n  </header>\r\n  \r\n  <h1>${message}</h1>\r\n\r\n  <input type=\"text\" value.bind=\"login\">\r\n  <button class=\"btn\" click.trigger='add()'>Ajouter</button>\r\n\r\n\r\n  <div>${login}</div>\r\n\r\n  <table class=\"bordered\">\r\n    <tr>\r\n      <td></td>\r\n      <td></td>\r\n      <td></td>\r\n    </tr>\r\n    <tr css.bind=\"t.checked ? blue : null\" repeat.for=\"t of tab\">\r\n      <td>${t.title}</td></td>\r\n\r\n      <td><i  click.trigger=\"remove(t.title)\" style=\"font-size:25px\" class=\"large material-icons\">delete_forever</i></td>\r\n      <td><input id.bind=\"t.id\" checked.bind=\"t.checked\" type=\"checkbox\"> <label for.bind=\"t.id\">Done</label>\r\n       </td>\r\n    </tr>\r\n  </table>\r\n\r\n  ${log}\r\n</template>\r\n "; });
//# sourceMappingURL=app-bundle.js.map