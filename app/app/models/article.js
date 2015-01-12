import DS from "ember-data";

export default DS.Model.extend({

  error: DS.attr("boolean"),
  mesage: DS.attr(),

  title: DS.attr(),
  article_url: DS.attr(),
  excerpt: DS.attr(),
  content: DS.attr(),
  lead_image_url: DS.attr()

});
