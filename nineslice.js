!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("phaser")):"function"==typeof define&&define.amd?define(["phaser"],e):"object"==typeof exports?exports.NineSlice=e(require("phaser")):t.NineSlice=e(t.Phaser)}(window,function(t){return function(t){var e={};function r(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(i,o,function(e){return t[e]}.bind(null,o));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=2)}([function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.EVENTS=void 0;var i=function(){function t(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,r,i){return r&&t(e.prototype,r),i&&t(e,i),e}}(),o=a(r(1)),n=a(r(4));function a(t){return t&&t.__esModule?t:{default:t}}var u=function(t){var e=t;if("number"==typeof e.sourceLayout.width){var r=e.sourceLayout,i=r.width,o=r.height;e.sourceLayout={topLeft:{width:i,height:o}}}var n=e.sourceLayout;n.topRight=n.topRight||n.topLeft,n.bottomRight=n.bottomRight||n.topLeft,n.bottomLeft=n.bottomLeft||n.topLeft;var a=Math.max(n.topLeft.height,n.topRight.height),u=Math.max(n.topRight.width,n.bottomRight.width),s=Math.max(n.bottomLeft.height,n.bottomRight.height),h=Math.max(n.topLeft.width,n.bottomLeft.width);if(e.safeOffsets||(e.safeOffsets={top:a,right:u,bottom:s,left:h}),void 0===e.minSizing||!1!==e.minSizing){var f=e.safeOffsets;e.minSizing={width:f?Math.max(f.left+f.right,h+u):h+u,height:f?Math.max(f.top+f.bottom,a+s):a+s}}else e.minSizing=!1;return e},s=function(t){return{tl:{x:t.topLeft.width,y:t.topLeft.height},tr:{x:t.topRight.width,y:t.topRight.height},bl:{x:t.bottomLeft.width,y:t.bottomLeft.height},br:{x:t.bottomRight.width,y:t.bottomRight.height}}},h="__BASE",f="__MISSING",l=e.EVENTS={UPDATE_SAFE_BOUNDS:"updatesafebounds"},c=function(t){function e(t,r){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var a=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,0,0,32,32));a.initFrames=a.initFrames.bind(a),a.getUsableBounds=a.getUsableBounds.bind(a),a.drawFrames=a.drawFrames.bind(a),a.resize=a.resize.bind(a),a.updateSafeBounds=a.updateSafeBounds.bind(a),a.enableDebugDraw=a.enableDebugDraw.bind(a),a.events=new o.default.Events.EventEmitter,a.sliceConfig=u(r),a._safeBounds=new o.default.Geom.Rectangle;var s=a.sliceConfig,l=s.sourceKey,c=s.sourceFrame;if(a.sourceTex=t.sys.textures.get(a.sliceConfig.sourceKey),!l)throw new Error("NineSlice requires a texture sourceKey to be specified.");if(!a.sourceTex||a.sourceTex.key===f)throw new Error("Expected source image "+l+" not found.");a._framePrefix=""+(0,n.default)(JSON.stringify({sourceKey:l,sourceFrame:c},404)),a.mkFrameName=function(t){return a._framePrefix+"-"+t},a._frameCache={};var d="string"==typeof c||"number"==typeof c?c:h;a.sourceFrame=a.sourceTex.get(d),a.initFrames(),a._initalized=!0;var y=i.x,b=i.y,p=i.width,g=i.height;return a.setPosition(y||0,b||0),a.resize(p||a.sourceFrame.width,g||a.sourceFrame.height),a.updateSafeBounds(),a}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,o.default.GameObjects.RenderTexture),i(e,[{key:"updateSafeBounds",value:function(){if(this._initalized){var t=this.sliceConfig.safeOffsets,e=t.top,r=t.right,i=t.bottom,o=t.left,n=this.x+o,a=this.y+e,u=this.width-(o+r),s=this.height-(e+i),h=this._safeBounds,f=h.x,c=h.y,d=h.width,y=h.height;n===f&&a===c&&u===d&&s===y||(this._safeBounds.setTo(this.x+o,this.y+e,this.width-(o+r),this.height-(e+i)),this.events.emit(l.UPDATE_SAFE_BOUNDS,this,this._safeBounds)),this._g&&(this._g.lineStyle(1,65280),this._g.strokeRectShape(this._safeBounds))}}},{key:"resize",value:function(t,r){var i=(this.sliceConfig||{}).minSizing,o=i?Math.max(i.height,r):r,n=i?Math.max(i.width,t):t;if(o>r||n>t){var a="Attempted to set NineSlice size less than minimum ("+t+"x"+r+").";console.error(a)}(function t(e,r,i){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,r);if(void 0===o){var n=Object.getPrototypeOf(e);return null===n?void 0:t(n,r,i)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(i):void 0})(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"resize",this).call(this,n,o),this._initalized&&(this._g&&this._g.clear(),this.drawFrames(),this.updateSafeBounds())}},{key:"initFrames",value:function(){var t=this,e=this.sourceTex,r=this.sourceFrame.width,i=this.sourceFrame.height,o=this.sourceFrame.cutX,n=this.sourceFrame.cutY,a=function(r,i,a,u,s){var h=t.mkFrameName(r);e.has(h)?t._frameCache[r]=e.frames[h]:t._frameCache[r]=e.add(h,0,o+i,n+a,u,s)},u=s(this.sliceConfig.sourceLayout);a("topLeft",0,0,u.tl.x,u.tl.y),a("topRight",r-u.tr.x,0,u.tr.x,u.tr.y),a("bottomRight",r-u.br.x,i-u.br.y,u.br.x,u.br.y),a("bottomLeft",0,i-u.bl.y,u.bl.x,u.bl.y),a("topMiddle",u.tl.x,0,r-(u.tl.x+u.tr.x),Math.max(u.tl.y,u.tr.y)),a("bottomMiddle",u.bl.x,i-Math.max(u.bl.y,u.br.y),r-(u.bl.x+u.br.x),Math.max(u.bl.y,u.br.y)),a("leftMiddle",0,u.tl.y,Math.max(u.tl.x,u.bl.x),i-(u.tl.y+u.bl.y)),a("rightMiddle",r-Math.max(u.tr.x,u.br.x),u.tr.y,Math.max(u.tr.x,u.br.x),i-u.tr.y-u.br.y);var h=Math.min(u.tl.x,u.bl.x),f=Math.min(u.tl.y,u.tr.y);a("center",h,f,r-h-Math.min(u.tr.x,u.br.x),i-f-Math.min(u.br.y,u.bl.y))}},{key:"getUsableBounds",value:function(){return this._initalized?this._safeBounds:null}},{key:"drawFrames",value:function(){var t=this;if(this._initalized){this._g&&this._g.lineStyle(1,16711680);var e=s(this.sliceConfig.sourceLayout),r=this._frameCache,i=function(e,r,i,o,n){if(o>0&&n>0){t._g&&t._g.strokeRect(t.x+r,t.y+i,o,n);var a=t.scene.make.image({key:t.sourceTex.key,frame:e.name,x:0,y:0}),u=o/e.width,s=n/e.height;a.setOrigin(0).setScale(u,s),t.draw(a,r,i),a.destroy()}},o=Math.min(e.tl.x,e.bl.x),n=Math.min(e.tr.x,e.br.x),a=Math.min(e.tl.y,e.tr.y),u=Math.min(e.bl.y,e.br.y);this.clear(),i(r.center,o,a,this.width-o-n,this.height-a-u),i(r.topMiddle,e.tl.x,0,this.width-e.tl.x-e.tr.x,r.topMiddle.height),i(r.bottomMiddle,e.bl.x,this.height-r.bottomMiddle.height,this.width-e.bl.x-e.br.x,r.bottomMiddle.height),i(r.leftMiddle,0,e.tl.y,r.leftMiddle.width,this.height-e.tl.y-e.bl.y),i(r.rightMiddle,this.width-e.tr.x,e.tr.y,r.rightMiddle.width,this.height-e.tr.y-e.br.y),i(r.topLeft,0,0,e.tl.x,e.tl.y),i(r.topRight,this.width-e.tr.x,0,e.tr.x,e.tr.y),i(r.bottomRight,this.width-e.br.x,this.height-e.br.y,e.br.x,e.br.y),i(r.bottomLeft,0,this.height-e.bl.y,e.bl.x,e.bl.y)}}},{key:"enableDebugDraw",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this._g&&this._g.clear(),this._g=t?this.scene.add.graphics(this.x,this.y):null,this.drawFrames(),this.updateSafeBounds()}},{key:"y",get:function(){return this._y},set:function(t){this._y!==t&&(this._g&&(this._g.clear(),this.drawFrames()),this._y=t,this.updateSafeBounds())}},{key:"x",get:function(){return this._x},set:function(t){this._x!==t&&(this._g&&(this._g.clear(),this.drawFrames()),this._x=t,this.updateSafeBounds())}}]),e}();e.default=c},function(e,r){e.exports=t},function(t,e,r){t.exports=r(3)},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=r(0);Object.defineProperty(e,"NineSlice",{enumerable:!0,get:function(){return n(i).default}}),Object.defineProperty(e,"EVENTS",{enumerable:!0,get:function(){return i.EVENTS}});var o=r(5);function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"Plugin",{enumerable:!0,get:function(){return n(o).default}})},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default=function(t,e){var r,i,o,n,a,u,s,h;for(r=3&t.length,i=t.length-r,o=e,a=3432918353,u=461845907,h=0;h<i;)s=255&t.charCodeAt(h)|(255&t.charCodeAt(++h))<<8|(255&t.charCodeAt(++h))<<16|(255&t.charCodeAt(++h))<<24,++h,o=27492+(65535&(n=5*(65535&(o=(o^=s=(65535&(s=(s=(65535&s)*a+(((s>>>16)*a&65535)<<16)&4294967295)<<15|s>>>17))*u+(((s>>>16)*u&65535)<<16)&4294967295)<<13|o>>>19))+((5*(o>>>16)&65535)<<16)&4294967295))+((58964+(n>>>16)&65535)<<16);switch(s=0,r){case 3:s^=(255&t.charCodeAt(h+2))<<16;case 2:s^=(255&t.charCodeAt(h+1))<<8;case 1:o^=s=(65535&(s=(s=(65535&(s^=255&t.charCodeAt(h)))*a+(((s>>>16)*a&65535)<<16)&4294967295)<<15|s>>>17))*u+(((s>>>16)*u&65535)<<16)&4294967295}return o^=t.length,o=2246822507*(65535&(o^=o>>>16))+((2246822507*(o>>>16)&65535)<<16)&4294967295,o=3266489909*(65535&(o^=o>>>13))+((3266489909*(o>>>16)&65535)<<16)&4294967295,(o^=o>>>16)>>>0}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=function(){return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var r=[],i=!0,o=!1,n=void 0;try{for(var a,u=t[Symbol.iterator]();!(i=(a=u.next()).done)&&(r.push(a.value),!e||r.length!==e);i=!0);}catch(t){o=!0,n=t}finally{try{!i&&u.return&&u.return()}finally{if(o)throw n}}return r}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),n=function(){function t(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,r,i){return r&&t(e.prototype,r),i&&t(e,i),e}}(),a=h(r(1)),u=h(r(0)),s=h(r(6));function h(t){return t&&t.__esModule?t:{default:t}}var f=function(t){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var r=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return t.registerGameObject("nineslice",r.addNineSlice,r.makeNineSlice),r}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,a.default.Plugins.BasePlugin),n(e,[{key:"addNineSlice",value:function(){for(var t=arguments.length,e=Array(t),r=0;r<t;r++)e[r]=arguments[r];var i=l(this.scene,e);return this.displayList.add(i),i}},{key:"makeNineSlice",value:function(){for(var t=arguments.length,e=Array(t),r=0;r<t;r++)e[r]=arguments[r];return l(this.scene,e)}}]),e}();e.default=f;var l=function(t,e){if(2===e.length)return new u.default(t,e[0],e[1]);if(e.length<6)throw new Error("Expected at least 6 arguments to NineSlice creator, received "+e.length+".");e.length>7&&console.error("Expected less than 7 arguments for NineSlice creation, received "+e.length+".");var r=o(e,6),n=r[0],a=r[1],h=r[2],f=r[3],l=r[4],c=r[5],d={},y={x:n,y:a,width:h,height:f};if("string"==typeof l)d.sourceKey=l;else{var b=l.key,p=l.frame;d.sourceKey=b,"string"!=typeof p&&"number"!=typeof p||(d.sourceFrame=l.frame)}if("number"==typeof c)d.sourceLayout={width:c,height:c};else if(Array.isArray(c)){var g=(0,s.default)(c),m=o(g,4),x=m[0],v=m[1],_=m[2],w=m[3];d.sourceLayout={topLeft:{width:w,height:x},topRight:{width:v,height:x},bottomRight:{width:v,height:_},bottomLeft:{width:w,height:_}}}else d.sourceLayout=c;if(e.length>6)if("number"==typeof e[6]){var S=e[6];d.safeOffsets={top:S,right:S,bottom:S,left:S}}else{if(!Array.isArray(e[6]))throw new Error("Expected argument number or array for argument 7, got "+i(e[6])+".");var O=(0,s.default)(e[6]),M=o(O,4),j=M[0],P=M[1],E=M[2],L=M[3];d.safeOffsets={top:j,right:P,bottom:E,left:L}}return new u.default(t,d,y)},c={key:"NineSlice",plugin:f,start:!0};f.DefaultCfg=c},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default=function(t){switch(t.length){case 1:return[t[0],t[0],t[0],t[0]];case 2:return[t[0],t[1],t[0],t[1]];case 3:return[t[0],t[1],t[2],t[1]];case 4:return t}throw new Error("Received ${arr.length} offset values, expected 1 to 4.")}}])});