(()=>{"use strict";var r={355:(r,n,o)=>{o.d(n,{Z:()=>i});var t=o(537),a=o.n(t),e=o(645),A=o.n(e)()(a());A.push([r.id,"@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap);"]),A.push([r.id,":root {\r\n    --primary-color: rgb(88, 56, 109);\r\n    --primary-color-dark: rgb(73, 0, 121);\r\n    --second-color: rgba(207, 205, 205, 0.336);\r\n    --letter-spacing: 0.1em;\r\n}\r\n\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n    font-family: 'Open Sans', sans-serif;\r\n}\r\n\r\nh1 {\r\n    text-transform: uppercase;\r\n}\r\n\r\na {\r\n    color: inherit;\r\n    text-decoration: none;\r\n}\r\n\r\nimg {\r\n    z-index: 99999;\r\n}\r\n\r\n.nav-bar {\r\n    background-image: linear-gradient(to left, var(--primary-color) 5%, var(--second-color) 90%);\r\n    border-bottom: 1px solid rgba(0, 0, 0, 0.096);\r\n}\r\n\r\n.nav-content ul {\r\n    padding: 14px;\r\n}\r\n\r\n.nav-content ul li {\r\n    margin-left: 20px;\r\n    padding: 10px;\r\n    cursor: pointer;\r\n    display: inline;\r\n}\r\n\r\n.nav-content ul .links:hover {\r\n    transition: all 200ms ease-in-out;\r\n    background-color: rgba(128, 128, 128, 0.119);\r\n    border-radius: 5px;\r\n}\r\n\r\n.nav-content ul .logo-name a {\r\n    color: white;\r\n    cursor: default;\r\n    float: right;\r\n    margin-left: 0;\r\n    text-transform: uppercase;\r\n    margin-right: 40px;\r\n    font-weight: 700;\r\n}\r\n\r\n.main-container h1 {\r\n    padding: 20px;\r\n    text-align: center;\r\n}\r\n\r\n.main-container .text-centro.descricao {\r\n    text-align: center;\r\n    letter-spacing: var(--letter-spacing);\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.conteudo-tabela {\r\n    text-align: center;\r\n    padding: 10px;\r\n}\r\n\r\n.conteudo-tabela .alerta-centro.erro {\r\n    background-color: rgba(250, 128, 114, 0.315);\r\n    width: 50%;\r\n    height: 4em;\r\n    margin: auto auto;\r\n    border: 1px solid rgba(250, 128, 114, 0.452);\r\n    border-radius: 3px;\r\n    position: relative;\r\n}\r\n\r\n.conteudo-tabela .alerta-centro.erro .error-message {\r\n    position: absolute;\r\n    color: rgb(236, 53, 33);\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n}\r\n\r\n.conteudo-tabela .alerta-centro.warning {\r\n    background-color: rgba(250, 230, 54, 0.315);\r\n    width: 50%;\r\n    height: 4em;\r\n    margin: auto auto;\r\n    border: 1px solid rgba(250, 230, 54, 0.808);\r\n    border-radius: 3px;\r\n}\r\n\r\n.warning-message {\r\n    position: relative;\r\n    color: rgb(182, 169, 52);\r\n    float: left;\r\n    margin-left: 20px;\r\n    margin-top: 20px;\r\n}\r\n\r\n.alerta-centro.sucesso {\r\n    background-color: rgba(114, 250, 114, 0.26);\r\n    width: 50%;\r\n    height: 4em;\r\n    margin: auto auto;\r\n    border: 1px solid rgba(114, 250, 114, 0.678);\r\n    border-radius: 3px;\r\n    position: relative;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.sucesso-message {\r\n    position: absolute;\r\n    color: rgb(137, 182, 52);\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n}\r\n\r\n.tabela-hosts {\r\n    padding: 10px;\r\n}\r\n\r\n.tabela-hosts .tabela-centro.content {\r\n    width: 70%;\r\n    margin: 0 auto;\r\n    border-collapse: collapse;\r\n}\r\n\r\n\r\n.tabela-hosts .tabela-centro.content .tabela-infos {}\r\n\r\n.tabela-hosts .tabela-centro.content .tabela-infos td {\r\n    border-top: 1px solid gray;\r\n    border-bottom: 1px solid gray;\r\n    padding: 20px;\r\n}\r\n\r\n\r\n/* LOGON STYLE */\r\n\r\n\r\n.conteudo-login {\r\n    margin-top: 40px;\r\n}\r\n\r\n.formulario-centro.login {\r\n    background-color: rgba(88, 56, 109, 0.103);\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -60%);\r\n    padding: 30px;\r\n    border-radius: 3px;\r\n    box-shadow: rgba(27, 31, 35, 0.04) 0px 1px 0px, rgba(255, 255, 255, 0.25) 0px 1px 0px inset;\r\n}\r\n\r\n.formulario-centro.login-cadastro {\r\n    background-color: rgba(88, 56, 109, 0.103);\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -53%);\r\n    padding: 30px;\r\n    border-radius: 3px;\r\n    box-shadow: rgba(27, 31, 35, 0.04) 0px 1px 0px, rgba(255, 255, 255, 0.25) 0px 1px 0px inset;\r\n}\r\n\r\n.formulario {\r\n    padding: 20px;\r\n}\r\n\r\n.formulario input {\r\n    background: white;\r\n    border: none;\r\n    padding: 10px;\r\n    margin-top: 20px;\r\n    border-radius: 3px;\r\n    box-shadow: rgba(0, 0, 0, 0.10) 0px 3px 6px, rgba(0, 0, 0, 0.10) 0px 3px 6px;\r\n}\r\n\r\n.formulario input:focus {\r\n    outline-style: solid;\r\n    outline-color: rgba(88, 56, 109, 0.514);\r\n    outline-width: 2px;\r\n}\r\n\r\n.formulario button {\r\n    margin-top: 40px;\r\n    border: none;\r\n    cursor: pointer;\r\n    background-color: rgba(88, 56, 109, 0.514);\r\n    padding: 10px;\r\n    border-radius: 10px;\r\n    color: white;\r\n    width: 90px;\r\n    transition: all 300ms ease-in-out;\r\n}\r\n\r\n.formulario button:hover {\r\n    background-color: rgba(88, 56, 109, 0.863);\r\n}\r\n\r\n.conteudo-cadastro {\r\n    position: absolute;\r\n    top: 68%;\r\n    left: 50%;\r\n    transform: translate(-50%);\r\n}\r\n\r\n.conteudo-cadastro.cadastro-page {\r\n    position: absolute;\r\n    top: 71%;\r\n    left: 50%;\r\n    transform: translate(-50%);\r\n}\r\n\r\n.conteudo-cadastro h5 {\r\n    cursor: pointer;\r\n}\r\n\r\n.conteudo-cadastro h5:hover {\r\n    color: rgba(88, 56, 109, 0.863);\r\n}\r\n\r\n\r\n/* HIDDEN ITENS */\r\n\r\n\r\n/* .host-info {\r\n    display: none;\r\n} */\r\n\r\n\r\n/* 404 ERROR */\r\n\r\n\r\n.page-404 {\r\n    margin-top: 50px;\r\n    text-align: center;\r\n}\r\n\r\n.page-404 p {\r\n    padding: 10px;\r\n    letter-spacing: var(--letter-spacing);\r\n}\r\n\r\n.page-404 h5:hover {\r\n    color: var(--primary-color);\r\n}","",{version:3,sources:["webpack://./frontend/assets/css/style.css"],names:[],mappings:"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",sourcesContent:["@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap');\r\n\r\n:root {\r\n    --primary-color: rgb(88, 56, 109);\r\n    --primary-color-dark: rgb(73, 0, 121);\r\n    --second-color: rgba(207, 205, 205, 0.336);\r\n    --letter-spacing: 0.1em;\r\n}\r\n\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n    font-family: 'Open Sans', sans-serif;\r\n}\r\n\r\nh1 {\r\n    text-transform: uppercase;\r\n}\r\n\r\na {\r\n    color: inherit;\r\n    text-decoration: none;\r\n}\r\n\r\nimg {\r\n    z-index: 99999;\r\n}\r\n\r\n.nav-bar {\r\n    background-image: linear-gradient(to left, var(--primary-color) 5%, var(--second-color) 90%);\r\n    border-bottom: 1px solid rgba(0, 0, 0, 0.096);\r\n}\r\n\r\n.nav-content ul {\r\n    padding: 14px;\r\n}\r\n\r\n.nav-content ul li {\r\n    margin-left: 20px;\r\n    padding: 10px;\r\n    cursor: pointer;\r\n    display: inline;\r\n}\r\n\r\n.nav-content ul .links:hover {\r\n    transition: all 200ms ease-in-out;\r\n    background-color: rgba(128, 128, 128, 0.119);\r\n    border-radius: 5px;\r\n}\r\n\r\n.nav-content ul .logo-name a {\r\n    color: white;\r\n    cursor: default;\r\n    float: right;\r\n    margin-left: 0;\r\n    text-transform: uppercase;\r\n    margin-right: 40px;\r\n    font-weight: 700;\r\n}\r\n\r\n.main-container h1 {\r\n    padding: 20px;\r\n    text-align: center;\r\n}\r\n\r\n.main-container .text-centro.descricao {\r\n    text-align: center;\r\n    letter-spacing: var(--letter-spacing);\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.conteudo-tabela {\r\n    text-align: center;\r\n    padding: 10px;\r\n}\r\n\r\n.conteudo-tabela .alerta-centro.erro {\r\n    background-color: rgba(250, 128, 114, 0.315);\r\n    width: 50%;\r\n    height: 4em;\r\n    margin: auto auto;\r\n    border: 1px solid rgba(250, 128, 114, 0.452);\r\n    border-radius: 3px;\r\n    position: relative;\r\n}\r\n\r\n.conteudo-tabela .alerta-centro.erro .error-message {\r\n    position: absolute;\r\n    color: rgb(236, 53, 33);\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n}\r\n\r\n.conteudo-tabela .alerta-centro.warning {\r\n    background-color: rgba(250, 230, 54, 0.315);\r\n    width: 50%;\r\n    height: 4em;\r\n    margin: auto auto;\r\n    border: 1px solid rgba(250, 230, 54, 0.808);\r\n    border-radius: 3px;\r\n}\r\n\r\n.warning-message {\r\n    position: relative;\r\n    color: rgb(182, 169, 52);\r\n    float: left;\r\n    margin-left: 20px;\r\n    margin-top: 20px;\r\n}\r\n\r\n.alerta-centro.sucesso {\r\n    background-color: rgba(114, 250, 114, 0.26);\r\n    width: 50%;\r\n    height: 4em;\r\n    margin: auto auto;\r\n    border: 1px solid rgba(114, 250, 114, 0.678);\r\n    border-radius: 3px;\r\n    position: relative;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.sucesso-message {\r\n    position: absolute;\r\n    color: rgb(137, 182, 52);\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n}\r\n\r\n.tabela-hosts {\r\n    padding: 10px;\r\n}\r\n\r\n.tabela-hosts .tabela-centro.content {\r\n    width: 70%;\r\n    margin: 0 auto;\r\n    border-collapse: collapse;\r\n}\r\n\r\n\r\n.tabela-hosts .tabela-centro.content .tabela-infos {}\r\n\r\n.tabela-hosts .tabela-centro.content .tabela-infos td {\r\n    border-top: 1px solid gray;\r\n    border-bottom: 1px solid gray;\r\n    padding: 20px;\r\n}\r\n\r\n\r\n/* LOGON STYLE */\r\n\r\n\r\n.conteudo-login {\r\n    margin-top: 40px;\r\n}\r\n\r\n.formulario-centro.login {\r\n    background-color: rgba(88, 56, 109, 0.103);\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -60%);\r\n    padding: 30px;\r\n    border-radius: 3px;\r\n    box-shadow: rgba(27, 31, 35, 0.04) 0px 1px 0px, rgba(255, 255, 255, 0.25) 0px 1px 0px inset;\r\n}\r\n\r\n.formulario-centro.login-cadastro {\r\n    background-color: rgba(88, 56, 109, 0.103);\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -53%);\r\n    padding: 30px;\r\n    border-radius: 3px;\r\n    box-shadow: rgba(27, 31, 35, 0.04) 0px 1px 0px, rgba(255, 255, 255, 0.25) 0px 1px 0px inset;\r\n}\r\n\r\n.formulario {\r\n    padding: 20px;\r\n}\r\n\r\n.formulario input {\r\n    background: white;\r\n    border: none;\r\n    padding: 10px;\r\n    margin-top: 20px;\r\n    border-radius: 3px;\r\n    box-shadow: rgba(0, 0, 0, 0.10) 0px 3px 6px, rgba(0, 0, 0, 0.10) 0px 3px 6px;\r\n}\r\n\r\n.formulario input:focus {\r\n    outline-style: solid;\r\n    outline-color: rgba(88, 56, 109, 0.514);\r\n    outline-width: 2px;\r\n}\r\n\r\n.formulario button {\r\n    margin-top: 40px;\r\n    border: none;\r\n    cursor: pointer;\r\n    background-color: rgba(88, 56, 109, 0.514);\r\n    padding: 10px;\r\n    border-radius: 10px;\r\n    color: white;\r\n    width: 90px;\r\n    transition: all 300ms ease-in-out;\r\n}\r\n\r\n.formulario button:hover {\r\n    background-color: rgba(88, 56, 109, 0.863);\r\n}\r\n\r\n.conteudo-cadastro {\r\n    position: absolute;\r\n    top: 68%;\r\n    left: 50%;\r\n    transform: translate(-50%);\r\n}\r\n\r\n.conteudo-cadastro.cadastro-page {\r\n    position: absolute;\r\n    top: 71%;\r\n    left: 50%;\r\n    transform: translate(-50%);\r\n}\r\n\r\n.conteudo-cadastro h5 {\r\n    cursor: pointer;\r\n}\r\n\r\n.conteudo-cadastro h5:hover {\r\n    color: rgba(88, 56, 109, 0.863);\r\n}\r\n\r\n\r\n/* HIDDEN ITENS */\r\n\r\n\r\n/* .host-info {\r\n    display: none;\r\n} */\r\n\r\n\r\n/* 404 ERROR */\r\n\r\n\r\n.page-404 {\r\n    margin-top: 50px;\r\n    text-align: center;\r\n}\r\n\r\n.page-404 p {\r\n    padding: 10px;\r\n    letter-spacing: var(--letter-spacing);\r\n}\r\n\r\n.page-404 h5:hover {\r\n    color: var(--primary-color);\r\n}"],sourceRoot:""}]);const i=A},645:r=>{r.exports=function(r){var n=[];return n.toString=function(){return this.map((function(n){var o="",t=void 0!==n[5];return n[4]&&(o+="@supports (".concat(n[4],") {")),n[2]&&(o+="@media ".concat(n[2]," {")),t&&(o+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),o+=r(n),t&&(o+="}"),n[2]&&(o+="}"),n[4]&&(o+="}"),o})).join("")},n.i=function(r,o,t,a,e){"string"==typeof r&&(r=[[null,r,void 0]]);var A={};if(t)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(A[s]=!0)}for(var l=0;l<r.length;l++){var p=[].concat(r[l]);t&&A[p[0]]||(void 0!==e&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=e),o&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=o):p[2]=o),a&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=a):p[4]="".concat(a)),n.push(p))}},n}},537:r=>{r.exports=function(r){var n=r[1],o=r[3];if(!o)return n;if("function"==typeof btoa){var t=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t),e="/*# ".concat(a," */");return[n].concat([e]).join("\n")}return[n].join("\n")}},379:r=>{var n=[];function o(r){for(var o=-1,t=0;t<n.length;t++)if(n[t].identifier===r){o=t;break}return o}function t(r,t){for(var e={},A=[],i=0;i<r.length;i++){var s=r[i],l=t.base?s[0]+t.base:s[0],p=e[l]||0,c="".concat(l," ").concat(p);e[l]=p+1;var d=o(c),u={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==d)n[d].references++,n[d].updater(u);else{var C=a(u,t);t.byIndex=i,n.splice(i,0,{identifier:c,updater:C,references:1})}A.push(c)}return A}function a(r,n){var o=n.domAPI(n);return o.update(r),function(n){if(n){if(n.css===r.css&&n.media===r.media&&n.sourceMap===r.sourceMap&&n.supports===r.supports&&n.layer===r.layer)return;o.update(r=n)}else o.remove()}}r.exports=function(r,a){var e=t(r=r||[],a=a||{});return function(r){r=r||[];for(var A=0;A<e.length;A++){var i=o(e[A]);n[i].references--}for(var s=t(r,a),l=0;l<e.length;l++){var p=o(e[l]);0===n[p].references&&(n[p].updater(),n.splice(p,1))}e=s}}},569:r=>{var n={};r.exports=function(r,o){var t=function(r){if(void 0===n[r]){var o=document.querySelector(r);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(r){o=null}n[r]=o}return n[r]}(r);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(o)}},216:r=>{r.exports=function(r){var n=document.createElement("style");return r.setAttributes(n,r.attributes),r.insert(n,r.options),n}},565:(r,n,o)=>{r.exports=function(r){var n=o.nc;n&&r.setAttribute("nonce",n)}},795:r=>{r.exports=function(r){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=r.insertStyleElement(r);return{update:function(o){!function(r,n,o){var t="";o.supports&&(t+="@supports (".concat(o.supports,") {")),o.media&&(t+="@media ".concat(o.media," {"));var a=void 0!==o.layer;a&&(t+="@layer".concat(o.layer.length>0?" ".concat(o.layer):""," {")),t+=o.css,a&&(t+="}"),o.media&&(t+="}"),o.supports&&(t+="}");var e=o.sourceMap;e&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(e))))," */")),n.styleTagTransform(t,r,n.options)}(n,r,o)},remove:function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(n)}}}},589:r=>{r.exports=function(r,n){if(n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}}},n={};function o(t){var a=n[t];if(void 0!==a)return a.exports;var e=n[t]={id:t,exports:{}};return r[t](e,e.exports,o),e.exports}o.n=r=>{var n=r&&r.__esModule?()=>r.default:()=>r;return o.d(n,{a:n}),n},o.d=(r,n)=>{for(var t in n)o.o(n,t)&&!o.o(r,t)&&Object.defineProperty(r,t,{enumerable:!0,get:n[t]})},o.o=(r,n)=>Object.prototype.hasOwnProperty.call(r,n),o.nc=void 0,(()=>{var r=o(379),n=o.n(r),t=o(795),a=o.n(t),e=o(569),A=o.n(e),i=o(565),s=o.n(i),l=o(216),p=o.n(l),c=o(589),d=o.n(c),u=o(355),C={};C.styleTagTransform=d(),C.setAttributes=s(),C.insert=A().bind(null,"head"),C.domAPI=a(),C.insertStyleElement=p(),n()(u.Z,C),u.Z&&u.Z.locals&&u.Z.locals;for(var g=document.querySelectorAll(".status"),b=document.querySelectorAll(".host-info"),I=document.querySelector(".logado"),B=0;B<g.length;B++){var m=g[B];"REMOVIDO"===m.innerHTML?m.style.color="#32CD32":m.style.color="red"}if(!I)for(var f=0;f<b.length;f++)b[f].setAttribute("hidden","")})()})();
//# sourceMappingURL=bundle.js.map