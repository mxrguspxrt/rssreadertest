import DS from "ember-data";

export default DS.Model.extend({

  error: DS.attr("boolean"),
  mesage: DS.attr(),

  article_url: DS.attr()

});
