(function( $ ) {
	$.fn.ribbon = function( config ) {

        // Users can select buttons by name
        if (typeof config === 'string' || config instanceof String){
            var selector = '[data-name="' + config + '"]';
            var buttons = this.find(selector);

            // Add the options alias
            buttons.menuItems = function(){
                return buttons.filter('.dropdown').next('ul.nitro-menu').find('li');
            }
            return buttons;
        }

        // The full ribbon configuration
        this.each(function() {
            var container = $( this );
            var headerClass = "ribbon-header";
            var contentClass = "ribbon-content";

            // Templates are precompiled with grunt at build time
            var headerTemplate = Ribbon.Templates["templates/ribbonHeader.html"];
            var contentTemplate = Ribbon.Templates["templates/ribbonContent.html"];

            // Either find the header and content templates or create them
            // Users can define these elements for a smoother render process
            var header = container.children("." + headerClass);
            var content = container.children("." + contentClass);

            if (!header.length){
            	console.log("Adding an element with the "+headerClass+" is recommended");
            	header = container.prepend('<div>').addClass(headerClass);
            }

            if (!content.length){
            	console.log("Adding an element with the "+contentClass+" is recommended");
            	content = container.append('<div>').addClass(contentClass);
            }

            header.html(headerTemplate(config));
    		   content.html(contentTemplate(config));
        });
        return this;
    };
}( jQuery ));


/*
 * IfCond Template helper
 * Use to test equality in templates
 * Usage: {{#ifCond v1 v2 }} -> v1==v2
 *
 */
Handlebars.registerHelper('ifCond', function(v1, v2, options) {
  if(v1 === v2) {
    return options.fn(this);
  }
  return options.inverse(this);
});