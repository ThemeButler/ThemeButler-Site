!(function( $ ) {

       $(".tm-header button").click(function () {
         $(this).text(function(i, v){
            return v === 'Show Navigation' ? 'Hide Navigation' : 'Show Navigation'
         })
       });

       $("#js-close-alert").click(function () {
           $(".tm-alert-bar").toggle();
           setCookie("DivStateVisible", $(".tm-alert-bar").is(":visible"), 5);
           alert(getCookie('DivStateVisible'));
       });

       function setCookie(c_name, value, exdays) {
           var exdate = new Date();
           exdate.setDate(exdate.getDate() + exdays);
           var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
           document.cookie = c_name + "=" + c_value;
       }

       function getCookie(c_name) {
           var i, x, y, ARRcookies = document.cookie.split(";");
           for (i = 0; i < ARRcookies.length; i++) {
               x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
               y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
               x = x.replace(/^\s+|\s+$/g, "");
               if (x == c_name) {
                   return unescape(y);
               }
           }
       }

})( window.jQuery );

/*
	jBar v2.0.0

	by Todd Motto: http://toddmotto.com
	Latest version: https://github.com/toddmotto/jBar

	Copyright 2013 Todd Motto
	Licensed under the MIT license
	http://www.opensource.org/licenses/mit-license.php
	The jBar plugin, a simple and lightweight notification banner.
*/
!function(e,t,n){"use strict";var r=function(e){this.elem=e;this.$elem=t(e);this.jsonConfig=this.$elem.data("jbar")};r.prototype={init:function(){this.config=t.extend({},this.defaults,this.jsonConfig);this.construct().printMessage().createButton().removeData().togglejBar()},construct:function(){this.$elem.before(t('<div class="jbar-push"></div>'+'<a href="#" class="jbar-down-toggle">'+'<img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" class="jbar-down-arrow" alt=""></a>'));this.$elem.append(t('<div class="jbar-wrap"></div><a href="#" class="jbar-up-toggle">'+'<img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" class="jbar-up-arrow" alt=""></a>'));return this},printMessage:function(){if(this.jsonConfig.message){this.$elem.children(".jbar-wrap").append(t("<p>"+this.jsonConfig.message+"</p>"))}return this},createButton:function(){if(this.jsonConfig.button&&this.jsonConfig.url){this.$elem.children(".jbar-wrap").append(t('<a href="'+this.jsonConfig.url+'" class="uk-button uk-margin-left">'+this.jsonConfig.button+"</p>"))}return this},removeData:function(){if(this.jsonConfig){this.$elem.removeAttr("data-jbar")}return this},togglejBar:function(){var e=this.$elem;var n=t(".jbar-push");var r=t(".jbar-down-toggle");var i=t(".jbar-down-toggle, .jbar-up-toggle");var s;if(this.jsonConfig.state==="closed"){e.add(n).css({marginTop:-e.outerHeight()});n.css({height:e.outerHeight()});r.css({visibility:"visible"});setTimeout(function(){e.add(n).css({display:"block"})},500)}else if(this.jsonConfig.state==="open"){r.css({marginTop:-(r.outerHeight()+5)});e.add(n).css({display:"block"});n.css({height:e.outerHeight()});setTimeout(function(){r.css({display:"block",visibility:"visible"})},500);e.data("clicks",!s)}i.on("click",function(t){s=e.data("clicks");if(!s){e.add(n).css({marginTop:"0"});r.css({marginTop:-(e.outerHeight()+5)})}else{e.add(n).css({marginTop:-e.outerHeight()});r.css({marginTop:"0"})}e.data("clicks",!s);t.preventDefault()})}};r.defaults=r.prototype.defaults;t.fn.jBar=function(){return this.each(function(){(new r(this)).init()})};e.jBar=r;t(function(){if(t("[data-init]").data("init")==="jbar"){t("[data-jbar]").jBar()}})}(window,jQuery)
