this["Ribbon"] = this["Ribbon"] || {};
this["Ribbon"]["Templates"] = this["Ribbon"]["Templates"] || {};

this["Ribbon"]["Templates"]["templates/ribbonHeader.html"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "         	<li class=\"command-button\"><a data-name=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" class=\""
    + alias4(((helper = (helper = helpers.glyph || (depth0 != null ? depth0.glyph : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"glyph","hash":{},"data":data}) : helper)))
    + "\"></a></li>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "            <li class=\"command-button\"><a data-name=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" class=\""
    + alias4(((helper = (helper = helpers.glyph || (depth0 != null ? depth0.glyph : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"glyph","hash":{},"data":data}) : helper)))
    + "\"></a></li>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "         <li class=\""
    + ((stack1 = helpers["if"].call(alias1,(data && data.first),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\"><a href=\"#tab_"
    + alias4(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"key","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"key","hash":{},"data":data}) : helper)))
    + "</a></li>\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "active";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "<div class=\"ribbon-header\">\n   <div class=\"ribbon-title-bar\">\n      <ul class=\"command-holder\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.titleLeft : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "      </ul>\n      <div class=\"ribbon-title\"><span>"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</span></div>\n      <ul class=\"command-holder\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.titleRight : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "      </ul>\n   </div>\n   <ul class=\"tabs-holder\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.tabs : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "      <li class=\"tabs-hide\"><a href=\"#\" class=\"mif-eject\" title=\"Hide Menu\"></a></li>\n   </ul>\n</div>\n";
},"useData":true});

this["Ribbon"]["Templates"]["templates/ribbonContent.html"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "   <div class=\"tab-panel\" id=\"tab_"
    + container.escapeExpression(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"key","hash":{},"data":data}) : helper)))
    + "\" style=\"display:"
    + ((stack1 = helpers["if"].call(alias1,(data && data.first),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + ";\">\n"
    + ((stack1 = helpers.each.call(alias1,depth0,{"name":"each","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "   </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "block";
},"4":function(container,depth0,helpers,partials,data) {
    return "none";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "      <div class=\"tab-panel-group\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},depth0,{"name":"each","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "      </div>\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing;

  return "            <div class=\"tab-group-content tab-group-"
    + container.escapeExpression(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"type","hash":{},"data":data}) : helper)))
    + "\">\n\n"
    + ((stack1 = (helpers.ifCond || (depth0 && depth0.ifCond) || alias2).call(alias1,(depth0 != null ? depth0.type : depth0),"big-button",{"name":"ifCond","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = (helpers.ifCond || (depth0 && depth0.ifCond) || alias2).call(alias1,(depth0 != null ? depth0.type : depth0),"small-button",{"name":"ifCond","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = (helpers.ifCond || (depth0 && depth0.ifCond) || alias2).call(alias1,(depth0 != null ? depth0.type : depth0),"mini-button",{"name":"ifCond","hash":{},"fn":container.program(19, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.dropdown : depth0),{"name":"if","hash":{},"fn":container.program(21, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n            </div>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "                  <button class=\"nitro-button nitro-big-button "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.dropdown : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n                     <a href=\"#\" class=\"button\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.glyph : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.img : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                     </a>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.label : depth0),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                  </button>\n";
},"9":function(container,depth0,helpers,partials,data) {
    return "dropdown-toggle";
},"11":function(container,depth0,helpers,partials,data) {
    var helper;

  return "                           <span class=\"icon "
    + container.escapeExpression(((helper = (helper = helpers.glyph || (depth0 != null ? depth0.glyph : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"glyph","hash":{},"data":data}) : helper)))
    + "\"></span>\n";
},"13":function(container,depth0,helpers,partials,data) {
    var helper;

  return "                           <img class=\"icon\" src=\""
    + container.escapeExpression(((helper = (helper = helpers.img || (depth0 != null ? depth0.img : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"img","hash":{},"data":data}) : helper)))
    + "\" />\n";
},"15":function(container,depth0,helpers,partials,data) {
    var helper;

  return "                           <span class=\"label\">"
    + container.escapeExpression(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"label","hash":{},"data":data}) : helper)))
    + "</span>\n";
},"17":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "                  <button class=\"nitro-button nitro-small-button "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.dropdown : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n                     <a href=\"#\" class=\"button\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.glyph : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.img : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.label : depth0),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                     </a>\n                  </button>\n";
},"19":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "                  <button class=\"nitro-button nitro-mini-button "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.dropdown : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n                     <a href=\"#\" class=\"button\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.glyph : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.img : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.label : depth0),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                     </a>\n                  </button>\n";
},"21":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                  <ul class=\"d-menu nitro-menu\" data-role=\"dropdown\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.dropdown : depth0),{"name":"each","hash":{},"fn":container.program(22, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                  </ul>\n";
},"22":function(container,depth0,helpers,partials,data) {
    return "                        <li><a href=\"#\">"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</a></li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.tabs : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});