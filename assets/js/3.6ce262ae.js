(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{307:function(e,t,a){"use strict";a(96);t.a={data:function(){return{sublime:{}}},mounted:function(){var e=this.$site.themeConfig.sublime,t=void 0===e?{}:e;this.sublime={themes:t.colorThemes||["blue","red","purple"],defaultColorTheme:t.defaultColorTheme||"default",defaultDarkTheme:t.defaultDarkTheme||!1,disableDarkTheme:t.disableDarkTheme||!1,disableThemeIgnore:t.disableThemeIgnore||!1,extraOptions:t.extraOptions||{}},this.sublime.hasThemes=Array.isArray(this.sublime.themes)&&this.sublime.themes.length>0}}},308:function(e,t,a){},309:function(e,t,a){},310:function(e,t,a){},311:function(e,t,a){},312:function(e,t,a){},313:function(e,t,a){},315:function(e,t,a){"use strict";a(26),a(174),a(96),a(68),a(175);var s=a(43);t.a={mounted:function(){"default"===this.sublime.defaultColorTheme||localStorage.getItem("color-theme")||localStorage.setItem("color-theme",this.sublime.defaultColorTheme),this.setPageTheme()},beforeUpdate:function(){this.setPageTheme()},methods:{setTheme:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],a=this.sublime.themes||{};if(Array.isArray(a)&&a.length){var i=document.body.classList,n=a.map((function(e){return"sublime-theme-".concat(e)}));if(!e)return t&&localStorage.setItem("color-theme","default"),i.remove.apply(i,Object(s.a)(n));if(e&&!a.includes(e)){var o=localStorage.getItem("color-theme");return this.setTheme(a.includes(o)?o:null)}i.remove.apply(i,Object(s.a)(n.filter((function(t){return t!=="sublime-theme-".concat(e)})))),i.add("sublime-theme-".concat(e)),t&&localStorage.setItem("color-theme",e)}},setPageTheme:function(){var e=this.$page.frontmatter.forceTheme,t=localStorage.getItem("color-theme"),a="true"===localStorage.getItem("ignore-forced-themes"),s=!0!==this.sublime.disableThemeIgnore&&a?t:e||t;this.setTheme(s,!1)}}}},318:function(e,t,a){"use strict";t.a={data:function(){return{darkTheme:!1,ignoreForcedThemes:!1}},mounted:function(){!0!==this.sublime.disableDarkTheme&&(!0!==this.sublime.defaultDarkTheme||localStorage.getItem("dark-theme")||localStorage.setItem("dark-theme",!0),this.darkTheme="true"===localStorage.getItem("dark-theme"),this.toggleDarkTheme()),!0!==this.sublime.disableThemeIgnore&&(this.ignoreForcedThemes="true"===localStorage.getItem("ignore-forced-themes"))},methods:{toggleDarkTheme:function(){if(this.darkTheme)return document.body.classList.add("sublime-theme-dark"),localStorage.setItem("dark-theme",!0);document.body.classList.remove("sublime-theme-dark"),localStorage.setItem("dark-theme",!1)},toggleForcedThemes:function(){if(this.ignoreForcedThemes)return this.setTheme(localStorage.getItem("color-theme")),localStorage.setItem("ignore-forced-themes",!0);localStorage.removeItem("ignore-forced-themes")}}}},319:function(e,t,a){"use strict";var s=a(308);a.n(s).a},320:function(e,t,a){"use strict";var s=a(309);a.n(s).a},321:function(e,t,a){"use strict";var s=a(310);a.n(s).a},322:function(e,t,a){"use strict";var s=a(311);a.n(s).a},323:function(e,t,a){"use strict";var s=a(312);a.n(s).a},324:function(e,t,a){"use strict";var s=a(313);a.n(s).a},326:function(e,t,a){},327:function(e,t,a){},335:function(e,t,a){},336:function(e,t,a){},337:function(e,t,a){},340:function(e,t,a){},341:function(e,t,a){},361:function(e,t,a){"use strict";a(114);var s={data:function(){return{}},computed:{year:function(){return(new Date).getFullYear()}}},i=(a(366),a(18)),n=Object(i.a)(s,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"footer-wrapper"},[e._m(0),e._v(" "),a("span",[e._v("\n    Copyright:\n    "),a("a",[e.$themeConfig.sublime.startYear?a("span",[e._v(e._s(e.$themeConfig.sublime.startYear)+" - ")]):e._e(),e._v("\n      "+e._s(e.year)+"\n    ")])])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("span",[t("a",{attrs:{target:"blank",href:"https://github.com/danktuary/vuepress-theme-yuu"}},[this._v("Based on vuepress-theme-yuu")])])}],!1,null,"7b8cc140",null);t.a=n.exports},366:function(e,t,a){"use strict";var s=a(326);a.n(s).a},367:function(e,t,a){"use strict";var s=a(327);a.n(s).a},378:function(e,t,a){"use strict";var s=a(335);a.n(s).a},379:function(e,t,a){"use strict";var s=a(336);a.n(s).a},380:function(e,t,a){"use strict";var s=a(337);a.n(s).a},384:function(e,t,a){"use strict";var s=a(340);a.n(s).a},385:function(e,t,a){"use strict";var s=a(341);a.n(s).a},431:function(e,t,a){"use strict";a(368);var s=a(370),i=a(434),n=a(438),o=a(360),r=a(377),l=a.n(r),c=a(307),u=a(315),m=a(318),h={name:"ThemeOptions",mixins:[c.a,u.a,m.a]},d=(a(378),a(18)),f=Object(d.a)(h,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"theme-options"},[e.sublime.extraOptions&&e.sublime.extraOptions.above?a("div",{staticClass:"user-options-above"},[a(e.sublime.extraOptions.above,{tag:"component"})],1):e._e(),e._v(" "),e.sublime.hasThemes?a("ul",{staticClass:"color-theme-options"},[a("li",[a("a",{staticClass:"default-theme",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.setTheme()}}})]),e._v(" "),e._l(e.sublime.themes,(function(t){return a("li",{key:t},[a("a",{class:t+"-theme",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),e.setTheme(t)}}})])}))],2):e._e(),e._v(" "),e.sublime.disableDarkTheme?e._e():a("div",{staticClass:"dark-theme-options toggle-option"},[a("label",{attrs:{for:"dark-theme-toggle"}},[e._v("Enable Dark Theme?")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.darkTheme,expression:"darkTheme"}],attrs:{id:"dark-theme-toggle",type:"checkbox"},domProps:{checked:Array.isArray(e.darkTheme)?e._i(e.darkTheme,null)>-1:e.darkTheme},on:{change:[function(t){var a=e.darkTheme,s=t.target,i=!!s.checked;if(Array.isArray(a)){var n=e._i(a,null);s.checked?n<0&&(e.darkTheme=a.concat([null])):n>-1&&(e.darkTheme=a.slice(0,n).concat(a.slice(n+1)))}else e.darkTheme=i},e.toggleDarkTheme]}})]),e._v(" "),e.sublime.hasThemes&&!e.sublime.disableThemeIgnore?a("div",{staticClass:"force-theme-options toggle-option"},[a("label",{attrs:{for:"force-theme-toggle"}},[e._v("Ignore Forced Themes?")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.ignoreForcedThemes,expression:"ignoreForcedThemes"}],attrs:{id:"force-theme-toggle",type:"checkbox"},domProps:{checked:Array.isArray(e.ignoreForcedThemes)?e._i(e.ignoreForcedThemes,null)>-1:e.ignoreForcedThemes},on:{change:[function(t){var a=e.ignoreForcedThemes,s=t.target,i=!!s.checked;if(Array.isArray(a)){var n=e._i(a,null);s.checked?n<0&&(e.ignoreForcedThemes=a.concat([null])):n>-1&&(e.ignoreForcedThemes=a.slice(0,n).concat(a.slice(n+1)))}else e.ignoreForcedThemes=i},e.toggleForcedThemes]}})]):e._e(),e._v(" "),e.sublime.extraOptions&&e.sublime.extraOptions.below?a("div",{staticClass:"user-options-below"},[a(e.sublime.extraOptions.below,{tag:"component"})],1):e._e()])}),[],!1,null,null,null).exports,g={name:"CogIcon"},v=Object(d.a)(g,(function(){var e=this.$createElement,t=this._self._c||e;return t("svg",{staticClass:"svg-inline--fa fa-cog fa-w-16",attrs:{"aria-hidden":"true","data-prefix":"fas","data-icon":"cog",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"}},[t("path",{attrs:{fill:"currentColor",d:"M444.788 291.1l42.616 24.599c4.867 2.809 7.126 8.618 5.459 13.985-11.07 35.642-29.97 67.842-54.689 94.586a12.016 12.016 0 0 1-14.832 2.254l-42.584-24.595a191.577 191.577 0 0 1-60.759 35.13v49.182a12.01 12.01 0 0 1-9.377 11.718c-34.956 7.85-72.499 8.256-109.219.007-5.49-1.233-9.403-6.096-9.403-11.723v-49.184a191.555 191.555 0 0 1-60.759-35.13l-42.584 24.595a12.016 12.016 0 0 1-14.832-2.254c-24.718-26.744-43.619-58.944-54.689-94.586-1.667-5.366.592-11.175 5.459-13.985L67.212 291.1a193.48 193.48 0 0 1 0-70.199l-42.616-24.599c-4.867-2.809-7.126-8.618-5.459-13.985 11.07-35.642 29.97-67.842 54.689-94.586a12.016 12.016 0 0 1 14.832-2.254l42.584 24.595a191.577 191.577 0 0 1 60.759-35.13V25.759a12.01 12.01 0 0 1 9.377-11.718c34.956-7.85 72.499-8.256 109.219-.007 5.49 1.233 9.403 6.096 9.403 11.723v49.184a191.555 191.555 0 0 1 60.759 35.13l42.584-24.595a12.016 12.016 0 0 1 14.832 2.254c24.718 26.744 43.619 58.944 54.689 94.586 1.667 5.366-.592 11.175-5.459 13.985L444.788 220.9a193.485 193.485 0 0 1 0 70.2zM336 256c0-44.112-35.888-80-80-80s-80 35.888-80 80 35.888 80 80 80 80-35.888 80-80z"}})])}),[],!1,null,null,null).exports,p={name:"UserSettings",directives:{"click-outside":l.a},components:{CogIcon:v,ThemeOptions:f},mixins:[c.a],data:function(){return{showMenu:!1}},computed:{showSettings:function(){var e=this.sublime;return e.hasThemes||!0!==e.disableDarkTheme||!0!==e.disableThemeIgnore}},methods:{hideMenu:function(){this.showMenu=!1}}},b=(a(379),Object(d.a)(p,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.showSettings?a("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.hideMenu,expression:"hideMenu"}],staticClass:"user-settings"},[a("a",{staticClass:"settings-button",attrs:{href:"#"},on:{click:function(t){t.preventDefault(),e.showMenu=!e.showMenu}}},[a("CogIcon",{staticClass:"settings-icon"})],1),e._v(" "),a("transition",{attrs:{name:"menu-transition",mode:"out-in"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.showMenu,expression:"showMenu"}],staticClass:"user-settings-menu"},[a("ThemeOptions")],1)])],1):e._e()}),[],!1,null,null,null).exports);function _(e,t){return e.ownerDocument.defaultView.getComputedStyle(e,null)[t]}var T={components:{SidebarButton:n.a,NavLinks:o.a,SearchBox:i.a,AlgoliaSearchBox:s.a,UserSettings:b},mixins:[c.a],data:function(){return{linksWrapMaxWidth:null}},computed:{algolia:function(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch:function(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}},mounted:function(){var e=this,t=parseInt(_(this.$el,"paddingLeft"))+parseInt(_(this.$el,"paddingRight")),a=function(){document.documentElement.clientWidth<719?e.linksWrapMaxWidth=null:e.linksWrapMaxWidth=e.$el.offsetWidth-t-(e.$refs.siteName&&e.$refs.siteName.offsetWidth||0)};a(),window.addEventListener("resize",a,!1)}},k=(a(380),Object(d.a)(T,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("header",{staticClass:"navbar"},[a("SidebarButton",{on:{"toggle-sidebar":function(t){return e.$emit("toggle-sidebar")}}}),e._v(" "),a("router-link",{staticClass:"home-link",attrs:{to:e.$localePath}},[e.$site.themeConfig.logo?a("img",{staticClass:"logo",attrs:{src:e.$withBase(e.$site.themeConfig.logo),alt:e.$siteTitle}}):e._e(),e._v(" "),e.$siteTitle?a("span",{ref:"siteName",staticClass:"site-name",class:{"can-hide":e.$site.themeConfig.logo}},[e._v(e._s(e.$siteTitle))]):e._e()]),e._v(" "),a("div",{staticClass:"links",style:e.linksWrapMaxWidth?{"max-width":e.linksWrapMaxWidth+"px"}:{}},[e.sublime.extraOptions&&e.sublime.extraOptions.before?a("div",{staticClass:"user-options-before"},[a(e.sublime.extraOptions.before,{tag:"component"})],1):e._e(),e._v(" "),a("UserSettings"),e._v(" "),e.sublime.extraOptions&&e.sublime.extraOptions.after?a("div",{staticClass:"user-options-after"},[a(e.sublime.extraOptions.after,{tag:"component"})],1):e._e(),e._v(" "),a("NavLinks",{staticClass:"can-hide"}),e._v(" "),e.isAlgoliaSearch?a("AlgoliaSearchBox",{attrs:{options:e.algolia}}):!1!==e.$site.themeConfig.search&&!1!==e.$page.frontmatter.search?a("SearchBox"):e._e()],1)],1)}),[],!1,null,null,null));t.a=k.exports},432:function(e,t,a){"use strict";var s=a(436),i=a(437),n=a(361),o=a(307),r=(a(97),{name:"ModuleTransition",props:{delay:{type:String,default:"0"},duration:{type:String,default:".25"}},methods:{setStyle:function(e){e.style.transition="all ".concat(this.duration,"s ease-in-out ").concat(this.delay,"s"),e.style.transform="translateY(-20px)",e.style.opacity=0},unsetStyle:function(e){e.style.transform="translateY(0)",e.style.opacity=1}}}),l=(a(384),a(18)),c=Object(l.a)(r,(function(){var e=this.$createElement;return(this._self._c||e)("transition",{attrs:{name:"module"},on:{enter:this.setStyle,"after-enter":this.unsetStyle,"before-leave":this.setStyle}},[this._t("default")],2)}),[],!1,null,null,null).exports,u=a(315),m={components:{PageEdit:s.a,PageNav:i.a,ModuleTransition:c,Footer:n.a},mixins:[o.a,u.a,{data:function(){return{sublimeShowModule:!1}},mounted:function(){this.sublimeShowModule=!0},destroyed:function(){this.sublimeShowModule=!1}}],props:["sidebarItems"]},h=(a(385),Object(l.a)(m,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("main",{staticClass:"page"},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.$page.title,expression:"$page.title"}],staticClass:"page-title"},[a("h1",[e._v(e._s(e.$page.title))]),e._v(" "),a("hr")]),e._v(" "),e._t("top"),e._v(" "),a("Content",{staticClass:"theme-default-content"}),e._v(" "),a("PageEdit"),e._v(" "),a("PageNav",e._b({},"PageNav",{sidebarItems:e.sidebarItems},!1)),e._v(" "),e._t("bottom"),e._v(" "),a("Footer")],2)}),[],!1,null,null,null));t.a=h.exports},435:function(e,t,a){"use strict";var s=a(348),i=a(361),n={name:"Home",components:{NavLink:s.a,Footer:i.a},computed:{data:function(){return this.$page.frontmatter},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}}}},o=(a(367),a(18)),r=Object(o.a)(n,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("main",{staticClass:"home",attrs:{"aria-labelledby":"main-title"}},[a("header",{staticClass:"hero"},[e.data.heroImage?a("img",{attrs:{src:e.$withBase(e.data.heroImage),alt:e.data.heroAlt||"hero"}}):e._e(),e._v(" "),null!==e.data.heroText?a("h1",{attrs:{id:"main-title"}},[e._v("\n      "+e._s(e.data.heroText||e.$title||"Hello")+"\n    ")]):e._e(),e._v(" "),null!==e.data.tagline?a("p",{staticClass:"description"},[e._v("\n      "+e._s(e.data.tagline||e.$description||"Welcome to your VuePress site")+"\n    ")]):e._e(),e._v(" "),e._m(0),e._v(" "),e.data.actionText&&e.data.actionLink?a("p",{staticClass:"action"},[a("NavLink",{staticClass:"action-button",attrs:{item:e.actionLink}})],1):e._e()]),e._v(" "),e.data.features&&e.data.features.length?a("div",{staticClass:"features"},e._l(e.data.features,(function(t,s){return a("div",{key:s,staticClass:"feature"},[a("h2",[e._v(e._s(t.title))]),e._v(" "),a("p",[e._v(e._s(t.details))])])})),0):e._e(),e._v(" "),a("Content",{staticClass:"theme-default-content custom"}),e._v(" "),e.data.footer?a("div",{staticClass:"footer"},[e._v("\n    "+e._s(e.data.footer)+"\n  ")]):e._e(),e._v(" "),a("Footer")],1)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"repo-info"},[t("iframe",{attrs:{src:"https://ghbtns.com/github-btn.html?user=sublimetext-io&repo=docs.sublimetext.io&type=star&count=true&q=GitHub+Octocat+in:readme+user:defunkt",frameborder:"0",scrolling:"0",width:"100px",height:"20px"}}),this._v(" "),t("img",{attrs:{alt:"GitHub contributors",src:"https://img.shields.io/github/contributors/sublimetext-io/docs.sublimetext.io?style=social"}})])}],!1,null,null,null);t.a=r.exports},440:function(e,t,a){"use strict";a.r(t);var s=a(433),i=a(307),n=a(315),o={components:{ParentLayout:s.a},mixins:[i.a,n.a],watch:{"$page.frontmatter.home":function(e){e&&this.setPageTheme()}}},r=(a(319),a(320),a(321),a(322),a(323),a(324),a(18)),l=Object(r.a)(o,(function(){var e=this.$createElement;return(this._self._c||e)("ParentLayout")}),[],!1,null,null,null);t.default=l.exports}}]);