(()=>{"use strict";var n,e,r,t,o,a,i,s,c,p,l,u,A,d,f={355:(n,e,r)=>{r.d(e,{Z:()=>s});var t=r(537),o=r.n(t),a=r(645),i=r.n(a)()(o());i.push([n.id,"@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap);"]),i.push([n.id,":root {\n  --primary-color: rgb(88, 56, 109);\n  --second-color: rgb(212, 212, 212);\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    font-family: 'Open Sans', sans-serif;\n}\n\nh1 {\n    text-transform: uppercase;\n}\n\na {\n    color: inherit;\n    text-decoration: none;\n    \n}\n\n.nav-bar ul {\n    text-decoration: none;\n    list-style-type: none;\n    padding: 10px;\n    background-image: linear-gradient(to left, var(--primary-color) 3%, var(--second-color) 100%);\n    border-bottom: 1px solid rgba(0, 0, 0, 0.288);\n}\n\n.nav-bar ul li {\n    margin-left: 20px;\n    display: inline;\n    padding: 10px;\n    cursor: pointer;\n    text-transform: uppercase;\n    font-weight: 700;\n}\n\n.nav-bar ul li:hover {\n    color: var(--primary-color);\n}\n\n.main-container h1 {\n    padding: 20px;\n    text-align: center;\n}","",{version:3,sources:["webpack://./frontend/assets/css/style.css"],names:[],mappings:"AACA;EACE,iCAAiC;EACjC,kCAAkC;AACpC;;AAEA;IACI,SAAS;IACT,UAAU;IACV,oCAAoC;AACxC;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,cAAc;IACd,qBAAqB;;AAEzB;;AAEA;IACI,qBAAqB;IACrB,qBAAqB;IACrB,aAAa;IACb,6FAA6F;IAC7F,6CAA6C;AACjD;;AAEA;IACI,iBAAiB;IACjB,eAAe;IACf,aAAa;IACb,eAAe;IACf,yBAAyB;IACzB,gBAAgB;AACpB;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,aAAa;IACb,kBAAkB;AACtB",sourcesContent:["@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap');\n:root {\n  --primary-color: rgb(88, 56, 109);\n  --second-color: rgb(212, 212, 212);\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    font-family: 'Open Sans', sans-serif;\n}\n\nh1 {\n    text-transform: uppercase;\n}\n\na {\n    color: inherit;\n    text-decoration: none;\n    \n}\n\n.nav-bar ul {\n    text-decoration: none;\n    list-style-type: none;\n    padding: 10px;\n    background-image: linear-gradient(to left, var(--primary-color) 3%, var(--second-color) 100%);\n    border-bottom: 1px solid rgba(0, 0, 0, 0.288);\n}\n\n.nav-bar ul li {\n    margin-left: 20px;\n    display: inline;\n    padding: 10px;\n    cursor: pointer;\n    text-transform: uppercase;\n    font-weight: 700;\n}\n\n.nav-bar ul li:hover {\n    color: var(--primary-color);\n}\n\n.main-container h1 {\n    padding: 20px;\n    text-align: center;\n}"],sourceRoot:""}]);const s=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r="",t=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),t&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=n(e),t&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(n,r,t,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(t)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var p=0;p<n.length;p++){var l=[].concat(n[p]);t&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),r&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=r):l[2]=r),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},537:n=>{n.exports=function(n){var e=n[1],r=n[3];if(!r)return e;if("function"==typeof btoa){var t=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t),a="/*# ".concat(o," */");return[e].concat([a]).join("\n")}return[e].join("\n")}},379:n=>{var e=[];function r(n){for(var r=-1,t=0;t<e.length;t++)if(e[t].identifier===n){r=t;break}return r}function t(n,t){for(var a={},i=[],s=0;s<n.length;s++){var c=n[s],p=t.base?c[0]+t.base:c[0],l=a[p]||0,u="".concat(p," ").concat(l);a[p]=l+1;var A=r(u),d={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==A)e[A].references++,e[A].updater(d);else{var f=o(d,t);t.byIndex=s,e.splice(s,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function o(n,e){var r=e.domAPI(e);return r.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;r.update(n=e)}else r.remove()}}n.exports=function(n,o){var a=t(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=r(a[i]);e[s].references--}for(var c=t(n,o),p=0;p<a.length;p++){var l=r(a[p]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=c}}},569:n=>{var e={};n.exports=function(n,r){var t=function(n){if(void 0===e[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,r)=>{n.exports=function(n){var e=r.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(r){!function(n,e,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,o&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(t,n,e.options)}(e,n,r)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},m={};function v(n){var e=m[n];if(void 0!==e)return e.exports;var r=m[n]={id:n,exports:{}};return f[n](r,r.exports,v),r.exports}v.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return v.d(e,{a:e}),e},v.d=(n,e)=>{for(var r in e)v.o(e,r)&&!v.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},v.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),v.nc=void 0,n=v(379),e=v.n(n),r=v(795),t=v.n(r),o=v(569),a=v.n(o),i=v(565),s=v.n(i),c=v(216),p=v.n(c),l=v(589),u=v.n(l),A=v(355),(d={}).styleTagTransform=u(),d.setAttributes=s(),d.insert=a().bind(null,"head"),d.domAPI=t(),d.insertStyleElement=p(),e()(A.Z,d),A.Z&&A.Z.locals&&A.Z.locals,console.log("Usando Script"),console.log("Main Atualizado!"),console.log("Atualizando com Webpack")})();
//# sourceMappingURL=bundle.js.map