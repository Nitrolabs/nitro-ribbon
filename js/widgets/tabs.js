$.widget("nitro.tabs" , {

    version: "1.0.0",

    options: {
        onSpecialClick: function(a, li){},
        onTabClick: function(a, li){},
        onTabChange: function(a, li){}
    },

    _create: function () {
        var that = this, element = this.element, o = this.options;

        $.each(element.data(), function(key, value){
            if (key in o) {
                try {
                    o[key] = $.parseJSON(value);
                } catch (e) {
                    o[key] = value;
                }
            }
        });

        this._createMenu();

        element.data('fluentmenu', this);

    },

    _createMenu: function(){
        var that = this, element = this.element, o = this.options;
        var active_tab = $(element.find(".tabs-holder > li.active")[0]);

        this.openTab(active_tab);

        element.on("click",".tabs-hide > a", function(e){
            var a = $(this);
            if (a.hasClass('active')){
                a.removeClass('active');
                that._showRibbon();
            } else {
                a.addClass('active');
                that._hideRibbon();
            }
        });

        element.on("click", ".tabs-holder > li:not(.tabs-hide) > a", function(e){
            var a = $(this);
            var li = a.parent('li');
            var result;
            var panel = $(a.attr('href'));
            var tabs = element.find('.tabs-holder > li').not('.tabs-hide');

            that._hidePanels();
            that._showPanel(panel);
            tabs.removeClass('active');
            a.parent('li').addClass('active');

            if (element.find('.resume').length){
                that._showRibbon();
                element.find(".tabs-hide > a").addClass('active');
            }

            if (typeof o.onTabClick === 'function') {
                o.onTabClick(a, li);
            } else {
                if (typeof window[o.onTabClick] === 'function') {
                    window[o.onTabClick](a, li);
                } else {
                    result = eval("(function(){"+o.onTabClick+"})");
                    result.call(a, li);
                }
            }

            if (typeof o.onTabChange === 'function') {
                o.onTabChange(a, li);
            } else {
                if (typeof window[o.onTabChange] === 'function') {
                    window[o.onTabChange](a, li);
                } else {
                    result = eval("(function(){"+o.onTabChange+"})");
                    result.call(a, li);
                }
            }
            e.preventDefault();
        });
    },

    _hideRibbon: function(){
        var active = this.element.find('.tabs-holder li.active');
        this.element.find('.ribbon-content').slideUp(100,function (){
            active.addClass('resume');
            active.removeClass('active');
        });
    },

    _showRibbon:function(){
        var self = this;
        self.element.find('.tabs-holder li.resume').addClass('active').removeClass('resume');
        self.element.find('.ribbon-content').slideDown(100,function(){
            self._showPanel();
        });
    },

    _hidePanels: function(){
        this.element.find('.tab-panel').hide();
    },

    _showPanel: function(panel){
        if (panel == undefined) {
            panel = this.element.find('.tabs-holder li.active a').attr('href');
        }
        $(panel).show();
    },

    openTab: function(tab){
        var that = this, element = this.element, o = this.options;
        var target_panel = $(tab.children('a').attr('href'));
        if (target_panel.length === 0) {
            return false;
        }
        this._hidePanels();
        this._showPanel(target_panel);
        element.find('.tabs-holder > li').removeClass('active');
        tab.addClass('active');
    },

    _destroy: function () {
    },

    _setOption: function ( key, value ) {
        this._super('_setOption', key, value);
    }
});
