(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[8488],{57668:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>T});var r=n(24852),o=n.n(r),i=n(45697),a=n.n(i),u=n(71703),l=n(27418),s=n.n(l),c=n(30294),p=n(58252),f=n(81756),m=n(22843);function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n(20533);var b=["children"];function y(e){return function(e){if(Array.isArray(e))return h(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?h(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){P(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function O(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function w(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?x(e):t}function x(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function C(e){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function P(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var k=(0,u.connect)((function(){return{noCaret:!0,pullRight:!0,bsStyle:"primary",title:o().createElement(c.Glyphicon,{glyph:"menu-hamburger"})}}))(c.DropdownButton),R=function(e){var t=e.children,n=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,b);return o().createElement("div",n,t)},E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(u,e);var t,n,r,i,a=(r=u,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=C(r);if(i){var n=C(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return w(this,e)});function u(){var e;O(this,u);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return P(x(e=a.call.apply(a,[this].concat(n))),"getPanels",(function(e){return e.filter((function(e){return e.panel})).map((function(e){return s()({},e,{panel:!0===e.panel?e.plugin:e.panel})})).concat(e.filter((function(e){return e.tools})).reduce((function(e,t){return e.concat(t.tools.map((function(e,n){return{name:t.name+n,panel:e,cfg:t.cfg.toolsCfg?t.cfg.toolsCfg[n]:{}}})))}),[]))})),P(x(e),"getTools",(function(){var t=function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=n.map((function(e){return v(v({},e),t(e.children))})).sort((function(e,t){return e.position-t.position})),o={container:R,containerWrapperStyle:{position:"static"},className:"burger-menu-submenu",toolStyle:"primary",activeStyle:"default",stateSelector:"burgermenu",eventSelector:"onSelect",tool:c.MenuItem,panelStyle:e.props.panelStyle,panelClassName:e.props.panelClassName};return n.length>0?{containerWrapperStyle:{position:"static"},style:{position:"relative"},childTools:r,childPanels:e.getPanels(n),innerProps:o}:{}};return[{element:o().createElement("span",{key:"burger-menu-title"},e.props.title)}].concat(y(e.props.items.map((function(e){return v(v({},e),t(e.children))})).sort((function(e,t){return e.position-t.position}))))})),e}return t=u,(n=[{key:"render",value:function(){return o().createElement(p.Z,{id:this.props.id,className:"square-button",container:k,mapType:this.props.mapType,toolStyle:"primary",activeStyle:"default",stateSelector:"burgermenu",eventSelector:"onSelect",tool:c.MenuItem,tools:this.getTools(),panels:this.getPanels(this.props.items),panelStyle:this.props.panelStyle,panelClassName:this.props.panelClassName})}}])&&S(t.prototype,n),u}(o().Component);P(E,"propTypes",{id:a().string,dispatch:a().func,items:a().array,title:a().node,onItemClick:a().func,controls:a().object,mapType:a().string,panelStyle:a().object,panelClassName:a().string}),P(E,"contextTypes",{messages:a().object,router:a().object}),P(E,"defaultProps",{id:"mapstore-burger-menu",items:[],onItemClick:function(){},title:o().createElement(c.MenuItem,{header:!0},o().createElement(f.Z,{msgId:"options"})),controls:[],mapType:"leaflet",panelStyle:{minWidth:"300px",right:"52px",zIndex:100,position:"absolute",overflow:"auto"},panelClassName:"toolbar-panel"});const T=(0,m.rx)("BurgerMenu",{component:(0,u.connect)((function(e){return{controls:e.controls}}))(E),containers:{OmniBar:{name:"burgermenu",position:2,tool:!0,priority:1}}})},81756:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(71703),o=n(5346);const i=(0,r.connect)((function(e){return{locale:e.locale&&e.locale.currentLocale,messages:e.locale&&e.locale.messages||[]}}))(o.Z)},82288:(e,t,n)=>{(e.exports=n(9252)()).push([e.id,".msgapi #mapstore-burger-menu {\n    position: absolute;\n    right: 0;\n    top: 0;\n}\n\n.msgapi .burger-menu-submenu {\n    display: none;\n    position: absolute;\n    left: -160px;\n    top: 0px;\n    background-color: white;\n    width: 160px;\n    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);\n}\n\n.msgapi .burger-menu-submenu li:hover {\n    background-color: #dddddd;\n}\n\n.msgapi .burger-menu-submenu li a {\n    display: block;\n    padding: 10px 15px;\n}\n\n.msgapi .burger-menu-submenu li a:hover {\n    text-decoration: none;\n    background-color: #dddddd;\n}\n\n.msgapi #mapstore-burger-menu .dropdown-menu > li > a:hover > span > .burger-menu-submenu,\n.msgapi .burger-menu-submenu > li > a:hover > span > .burger-menu-submenu {\n    display: block;\n}\n\n.msgapi .burger-menu-submenu span {\n    overflow: hidden;\n}\n\n.msgapi #mapstore-navbar #mapstore-burger-menu {\n    position: relative;\n    float: right;\n    left: 0;\n}\n",""])},9252:e=>{e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},14246:e=>{var t={},n=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}},r=n((function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())})),o=n((function(){return document.head||document.getElementsByTagName("head")[0]})),i=null,a=0;function u(e,n){for(var r=0;r<e.length;r++){var o=e[r],i=t[o.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](o.parts[a]);for(;a<o.parts.length;a++)i.parts.push(c(o.parts[a],n))}else{var u=[];for(a=0;a<o.parts.length;a++)u.push(c(o.parts[a],n));t[o.id]={id:o.id,refs:1,parts:u}}}}function l(e){for(var t=[],n={},r=0;r<e.length;r++){var o=e[r],i=o[0],a={css:o[1],media:o[2],sourceMap:o[3]};n[i]?n[i].parts.push(a):t.push(n[i]={id:i,parts:[a]})}return t}function s(){var e=document.createElement("style"),t=o();return e.type="text/css",t.appendChild(e),e}function c(e,t){var n,r,u,l,c;if(t.singleton){var p=a++;n=i||(i=s()),r=m.bind(null,n,p,!1),u=m.bind(null,n,p,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(l=document.createElement("link"),c=o(),l.rel="stylesheet",c.appendChild(l),n=l,r=b.bind(null,n),u=function(){n.parentNode.removeChild(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(),r=d.bind(null,n),u=function(){n.parentNode.removeChild(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else u()}}e.exports=function(e,n){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");void 0===(n=n||{}).singleton&&(n.singleton=r());var o=l(e);return u(o,n),function(e){for(var r=[],i=0;i<o.length;i++){var a=o[i];(s=t[a.id]).refs--,r.push(s)}for(e&&u(l(e),n),i=0;i<r.length;i++){var s;if(0===(s=r[i]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete t[s.id]}}}};var p,f=(p=[],function(e,t){return p[e]=t,p.filter(Boolean).join("\n")});function m(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=f(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function d(e,t){var n=t.css,r=t.media;if(t.sourceMap,r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function b(e,t){var n=t.css,r=(t.media,t.sourceMap);r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var o=new Blob([n],{type:"text/css"}),i=e.href;e.href=URL.createObjectURL(o),i&&URL.revokeObjectURL(i)}},20533:(e,t,n)=>{var r=n(82288);"string"==typeof r&&(r=[[e.id,r,""]]),n(14246)(r,{}),r.locals&&(e.exports=r.locals)}}]);