(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[2243],{49243:(e,t,n)=>{"use strict";n.d(t,{y:()=>m});var r=n(61545),o=n(89255),i=n(7412),a=n(75875),u=n.n(a),c=n(90183);function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m=function(e,t,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},s=a.attachJSON,f=a.itemId,p=void 0===f?null:f,m=function(t){return o.Observable.defer((function(){return u().get(e,{params:t})}))},b=function(t){return(0,i.pf)(n,e,t)},h=(0,i.pf)(n,e,t)?b:m;return s&&"application/json"!==t.info_format&&"application/json"!==t.outputFormat?o.Observable.forkJoin(h(t),h(d(d({},t),{},{info_format:"application/json"})).map((function(e){return e.data})).catch((function(){return o.Observable.of({})}))).map((function(e){var t=l(e,2),n=t[0],o=t[1];return d(d({},n),{},{features:o&&o.features&&o.features.filter((function(e){return!!(0,r.isNil)(p)||e.id===p})),featuresCrs:o&&o.crs&&(0,c.parseURN)(o.crs)})})):h(t).map((function(e){return e.data})).map((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{data:(0,r.isString)(e)?e:d(d({},e),{},{features:e.features&&e.features.filter((function(e){return!p||e.id===p}))}),features:e.features&&e.features.filter((function(e){return!p||e.id===p})),featuresCrs:e&&e.crs&&(0,c.parseURN)(e.crs)}}))}},14068:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var r=n(67294),o=n.n(r),i=n(55033),a=n.n(i),u=n(32425),c=n(83139),l=n(80717);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function f(e){return function(e){if(Array.isArray(e))return p(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||d(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){if(e){if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?p(e,t):void 0}}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const m=(0,r.forwardRef)((function(e,t){var n,i,p=e.className,m=void 0===p?"ms-thumbnail":p,b=e.label,h=e.loading,v=e.message,y=e.error,g=e.thumbnail,O=e.removeGlyph,P=void 0===O?"trash":O,w=e.removeTooltipId,j=void 0===w?"removeThumbnail":w,S=e.style,Z=void 0===S?{}:S,E=e.maxFileSize,A=void 0===E?5e5:E,R=e.supportedImageTypes,k=void 0===R?["image/png","image/jpeg","image/jpg"]:R,z=e.thumbnailOptions,N=e.dropZoneProps,D=void 0===N?{className:"ms-thumbnail-dropzone",activeClassName:"ms-thumbnail-dropzone-active",rejectClassName:"ms-thumbnail-dropzone-reject"}:N,I=e.onUpdate,M=void 0===I?function(){}:I,T=e.onError,_=void 0===T?function(){}:T,C=e.onRemove,x=e.toolbarButtons,U=(0,r.useRef)(),F=(n=(0,r.useState)(),i=2,function(e){if(Array.isArray(e))return e}(n)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return n}}(n,i)||d(n,i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),q=F[0],B=F[1];if((0,r.useEffect)((function(){return U.current=!0,function(){U.current=!1}}),[]),h||q)return o().createElement("div",{className:"dropzone-thumbnail-container".concat(m?" ".concat(m):""," ms-loading")},o().createElement(u.Z,{size:70}));var H=o().createElement(l.Z,{btnDefaultProps:{className:"square-button-md no-border"},buttons:x||[{glyph:P,visible:!(!C||!g),tooltipId:j,onClick:function(e){var t;null==e||null===(t=e.stopPropagation)||void 0===t||t.call(e),null==C||C()}}]});return o().createElement("div",{className:"dropzone-thumbnail-container".concat(m?" ".concat(m):""),style:Z},b,o().createElement(a(),s({},D,{multiple:!1,onDrop:function(e){var t,n=null==e||null===(t=e[0])||void 0===t?void 0:t.type,r=-1!==k.indexOf(n);B(!0),function(e,t){return new Promise((function(n){var r=e;if(null!=r&&r[0]){var o=r[0],i=new FileReader;return i.onload=function(e){return n(t?(0,c.Xq)(e.target.result,t).then((function(e){return{data:e,size:e.length}})):{data:e.target.result,size:o.size})},i.readAsDataURL(o)}return n({data:null})}))}(e,z).then((function(t){var n=t.data,o=t.size;return U.current?(B(!1),r&&n&&o<A?M(n,e):_([].concat(f(r?[]:["FORMAT"]),f(n&&o>=A?["SIZE"]:[])),e)):null})).catch((function(e){return U.current?(B(!1),_(e)):null}))}}),g?o().createElement("div",{style:{position:"relative",width:"100%",height:"100%"}},o().createElement("div",{ref:t,style:{position:"relative",width:"100%",height:"100%",backgroundImage:"url(".concat(g,")"),backgroundSize:null!=z&&z.contain?"contain":"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"}}),o().createElement("div",{className:"dropzone-content-image-added"},v),H):o().createElement("div",{className:"dropzone-content-image"},v,H,y&&o().createElement("div",{className:"dropzone-errors"},y))))}))},38482:(e,t,n)=>{"use strict";n.d(t,{Z:()=>w});var r=n(67294),o=n.n(r),i=n(61545),a=n(45697),u=n.n(a),c=n(73935),l=n.n(c),s=n(91033);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t,n){return t&&p(e.prototype,t),n&&p(e,n),e}function b(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=O(e);if(t){var o=O(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return y(this,n)}}function y(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?g(e):t}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function P(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.debounceTime,n=e.querySelector,r=e.closest,a=void 0!==r&&r;return function(e){var r,c;return c=r=function(r){b(c,r);var u=v(c);function c(e){var r;return d(this,c),P(g(r=u.call(this,e)),"findDomNode",(function(){if(!r.isMounded)return null;var e=l().findDOMNode(g(r));return e&&a&&n?e.closest(n||"*"):e&&(n?e.querySelector(n):e)})),r.width=void 0,r.height=void 0,r.skipOnMount=e.skipOnMount,r.div=null,r.onResize=(0,i.debounce)((function(){var e;return(e=r.props).onResize.apply(e,arguments)}),void 0!==t?t:e.debounceTime||1e3),r.ro=new s.Z((function(e){e.forEach((function(e){var t=e.contentRect,n=t.width,o=t.height,i=r.props.handleWidth&&r.width!==n,a=r.props.handleHeight&&r.height!==o;r.skipOnMount||!i&&!a||r.onResize({width:n,height:o}),r.width=n,r.height=o,r.skipOnMount=!1}))})),r}return m(c,[{key:"componentDidMount",value:function(){this.isMounded=!0,this.div=this.findDomNode(),this.div&&this.ro.observe(this.div)}},{key:"componentDidUpdate",value:function(){this.div=this.findDomNode(),this.div&&this.ro.observe(this.div)}},{key:"componentWillUnmount",value:function(){var e=this.findDomNode();e&&this.ro&&this.ro.unobserve&&this.ro.unobserve(e)}},{key:"render",value:function(){return o().createElement(e,this.props)}}]),c}(o().Component),P(r,"propTypes",{handleWidth:u().bool,handleHeight:u().bool,onResize:u().func}),P(r,"defaultProps",{onResize:function(){},handleWidth:!0,handleHeight:!0}),c}}},51593:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>k});var r=n(89255),o=n(91983),i=n(79047),a=n(21460),u=n(84611),c=n(83520),l=n(19461),s=n(95605),f=n(9860),d=n(74565),p=n(9842),m=n(68783),b=n(13573),h=n(63277),v=n(57668),y=n(58888),g=n(43526),O=n(6602),P=n(40439),w=n(11878),j=n(65986),S=n(75751),Z=n(46618),E=n(77314),A=n(79870),R={plugins:{MapPlugin:a.Z,IdentifyPlugin:u.Z,ToolbarPlugin:c.Z,ZoomAllPlugin:l.Z,MapLoadingPlugin:s.Z,OmniBarPlugin:f.default,BackgroundSelectorPlugin:d.Z,FullScreenPlugin:p.Z,ZoomInPlugin:m.Z,ZoomOutPlugin:b.Z,ExpanderPlugin:h.Z,BurgerMenuPlugin:v.default,ScaleBoxPlugin:y.Z,MapFooterPlugin:g.Z,PrintPlugin:O.Z,TimelinePlugin:P.Z,PlaybackPlugin:w.Z,AddReducersAndEpics:{reducers:{security:j.Z,maps:S.Z,maplayout:Z.Z},epics:{_setThumbnail:o.PD,updateMapLayoutEpic:o.CG,zoomToVisibleAreaEpic:function(){return r.Observable.empty()}}}},requires:{ReactSwipe:E.Z,SwipeHeader:A.Z}};const k=i.A?(0,i.A)(R):R}}]);