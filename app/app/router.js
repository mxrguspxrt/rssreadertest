import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: "hash"
});

Router.map(function() {
  this.route("articles", {path: "/"});
  this.route("article", {path: "/article/:article_id"});
});

export default Router;
