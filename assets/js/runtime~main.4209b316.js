!function(){"use strict";var e,a,c,f,t={},n={};function d(e){var a=n[e];if(void 0!==a)return a.exports;var c=n[e]={id:e,loaded:!1,exports:{}};return t[e].call(c.exports,c,c.exports,d),c.loaded=!0,c.exports}d.m=t,d.c=n,e=[],d.O=function(a,c,f,t){if(!c){var n=1/0;for(u=0;u<e.length;u++){c=e[u][0],f=e[u][1],t=e[u][2];for(var r=!0,b=0;b<c.length;b++)(!1&t||n>=t)&&Object.keys(d.O).every((function(e){return d.O[e](c[b])}))?c.splice(b--,1):(r=!1,t<n&&(n=t));if(r){e.splice(u--,1);var o=f();void 0!==o&&(a=o)}}return a}t=t||0;for(var u=e.length;u>0&&e[u-1][2]>t;u--)e[u]=e[u-1];e[u]=[c,f,t]},d.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return d.d(a,{a:a}),a},c=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},d.t=function(e,f){if(1&f&&(e=this(e)),8&f)return e;if("object"==typeof e&&e){if(4&f&&e.__esModule)return e;if(16&f&&"function"==typeof e.then)return e}var t=Object.create(null);d.r(t);var n={};a=a||[null,c({}),c([]),c(c)];for(var r=2&f&&e;"object"==typeof r&&!~a.indexOf(r);r=c(r))Object.getOwnPropertyNames(r).forEach((function(a){n[a]=function(){return e[a]}}));return n.default=function(){return e},d.d(t,n),t},d.d=function(e,a){for(var c in a)d.o(a,c)&&!d.o(e,c)&&Object.defineProperty(e,c,{enumerable:!0,get:a[c]})},d.f={},d.e=function(e){return Promise.all(Object.keys(d.f).reduce((function(a,c){return d.f[c](e,a),a}),[]))},d.u=function(e){return"assets/js/"+({53:"935f2afb",62:"be9572b3",205:"38b8d388",235:"21fd5749",352:"89d2afb9",783:"dd4a5488",1504:"27ce996e",1562:"f995232e",1783:"84ec98fc",1923:"863c1312",2188:"5ee2a89d",2357:"63087c89",2441:"ad7e2315",2688:"ba72ee4a",2715:"f2760fe0",2723:"128f1cd5",2819:"82a604bb",2844:"f3976560",2865:"5d36ec98",2958:"77c36350",3048:"cd4df9ee",3085:"1f391b9e",3349:"31395e8c",3454:"0323396e",3481:"434a0540",3571:"28717a8f",3614:"25918b0a",3805:"bb932ac4",4015:"7942bbb0",5101:"d9dd736a",5131:"454d5a61",5212:"d4859b88",5513:"b035095f",5541:"52bc5c81",5598:"e31032a9",5690:"18fda6aa",5835:"374012b9",5923:"2d0beef9",6159:"5686f4d1",6191:"a4ef7512",6423:"9c64bef4",6518:"9340e585",6698:"5058bbc3",6828:"b5cba7a0",6868:"c1d37b38",6884:"c5b4d952",6915:"c48a5b5e",6929:"bde4d57d",7345:"c3828fc6",7386:"faf4ee37",7465:"d666132e",7495:"2ac1e993",7597:"5e8c322a",7637:"5bbd5a14",7885:"528d1f84",7918:"17896441",8310:"0a4b2eee",8365:"2c94f238",8405:"06a2034d",8645:"33c7be37",8657:"aa646cfd",8775:"c513d410",8949:"6cc299de",9021:"1dc2d6ff",9284:"87a4e3e2",9384:"ceb26601",9435:"daa4cd08",9514:"1be78505",9526:"8f2a9fac",9671:"0e384e19",9822:"26240ea5",9950:"c81cde94"}[e]||e)+"."+{53:"30e0c30f",62:"30ff5bec",205:"cf788b73",235:"960e60b6",352:"553cc74a",783:"468788f7",972:"a988ef90",1504:"eb657aa1",1562:"113fe90d",1783:"48e00661",1923:"e4a2fa46",2188:"a542236a",2357:"b75ed8e1",2441:"8c502710",2688:"582a20a0",2715:"375b1a89",2723:"5c342955",2819:"35caf1b5",2844:"a30f00cd",2865:"df4411a9",2958:"399aa4ca",3048:"a7f5ce6a",3085:"1ff4ecd2",3349:"90447598",3454:"f76c071b",3481:"2eac48e1",3571:"f420a10f",3614:"c62bd88d",3805:"a151df1c",3829:"114e81db",4015:"5424905d",4608:"4e760377",5101:"59300983",5131:"967f515e",5212:"9a8ba5de",5513:"785e8dcd",5541:"18fc0e4f",5598:"e278c8a2",5690:"2f07ccf3",5835:"72ad3ce8",5923:"b1a6f5c0",6159:"3c004eec",6191:"68431ebf",6423:"ce432f14",6518:"8a8f195e",6698:"52d88254",6828:"3622b8ca",6868:"9f026630",6884:"c378cea7",6915:"ad148f8e",6929:"9e232b08",6945:"2ba1343d",7345:"6c135b28",7386:"c7c0f25a",7465:"8260072e",7495:"5b535fb8",7597:"7cdeec23",7637:"ad2cac4d",7885:"54f7af2b",7918:"55f9fd3e",8310:"c6756224",8365:"2219d378",8405:"fe2f3978",8645:"acb97898",8657:"07c53a50",8775:"435c844b",8894:"bfab79c0",8949:"86f1f902",9021:"2a8cdc2a",9284:"4a40de1e",9384:"4c542a25",9435:"a185cab7",9514:"002b7670",9526:"02896c03",9671:"3c65aad7",9822:"054620c1",9950:"3b0a3c9b"}[e]+".js"},d.miniCssF=function(e){return"assets/css/styles.ddc34199.css"},d.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),d.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},f={},d.l=function(e,a,c,t){if(f[e])f[e].push(a);else{var n,r;if(void 0!==c)for(var b=document.getElementsByTagName("script"),o=0;o<b.length;o++){var u=b[o];if(u.getAttribute("src")==e){n=u;break}}n||(r=!0,(n=document.createElement("script")).charset="utf-8",n.timeout=120,d.nc&&n.setAttribute("nonce",d.nc),n.src=e),f[e]=[a];var i=function(a,c){n.onerror=n.onload=null,clearTimeout(l);var t=f[e];if(delete f[e],n.parentNode&&n.parentNode.removeChild(n),t&&t.forEach((function(e){return e(c)})),a)return a(c)},l=setTimeout(i.bind(null,void 0,{type:"timeout",target:n}),12e4);n.onerror=i.bind(null,n.onerror),n.onload=i.bind(null,n.onload),r&&document.head.appendChild(n)}},d.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.p="/lightweight-charts/",d.gca=function(e){return e={17896441:"7918","935f2afb":"53",be9572b3:"62","38b8d388":"205","21fd5749":"235","89d2afb9":"352",dd4a5488:"783","27ce996e":"1504",f995232e:"1562","84ec98fc":"1783","863c1312":"1923","5ee2a89d":"2188","63087c89":"2357",ad7e2315:"2441",ba72ee4a:"2688",f2760fe0:"2715","128f1cd5":"2723","82a604bb":"2819",f3976560:"2844","5d36ec98":"2865","77c36350":"2958",cd4df9ee:"3048","1f391b9e":"3085","31395e8c":"3349","0323396e":"3454","434a0540":"3481","28717a8f":"3571","25918b0a":"3614",bb932ac4:"3805","7942bbb0":"4015",d9dd736a:"5101","454d5a61":"5131",d4859b88:"5212",b035095f:"5513","52bc5c81":"5541",e31032a9:"5598","18fda6aa":"5690","374012b9":"5835","2d0beef9":"5923","5686f4d1":"6159",a4ef7512:"6191","9c64bef4":"6423","9340e585":"6518","5058bbc3":"6698",b5cba7a0:"6828",c1d37b38:"6868",c5b4d952:"6884",c48a5b5e:"6915",bde4d57d:"6929",c3828fc6:"7345",faf4ee37:"7386",d666132e:"7465","2ac1e993":"7495","5e8c322a":"7597","5bbd5a14":"7637","528d1f84":"7885","0a4b2eee":"8310","2c94f238":"8365","06a2034d":"8405","33c7be37":"8645",aa646cfd:"8657",c513d410:"8775","6cc299de":"8949","1dc2d6ff":"9021","87a4e3e2":"9284",ceb26601:"9384",daa4cd08:"9435","1be78505":"9514","8f2a9fac":"9526","0e384e19":"9671","26240ea5":"9822",c81cde94:"9950"}[e]||e,d.p+d.u(e)},function(){var e={1303:0,532:0};d.f.j=function(a,c){var f=d.o(e,a)?e[a]:void 0;if(0!==f)if(f)c.push(f[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var t=new Promise((function(c,t){f=e[a]=[c,t]}));c.push(f[2]=t);var n=d.p+d.u(a),r=new Error;d.l(n,(function(c){if(d.o(e,a)&&(0!==(f=e[a])&&(e[a]=void 0),f)){var t=c&&("load"===c.type?"missing":c.type),n=c&&c.target&&c.target.src;r.message="Loading chunk "+a+" failed.\n("+t+": "+n+")",r.name="ChunkLoadError",r.type=t,r.request=n,f[1](r)}}),"chunk-"+a,a)}},d.O.j=function(a){return 0===e[a]};var a=function(a,c){var f,t,n=c[0],r=c[1],b=c[2],o=0;if(n.some((function(a){return 0!==e[a]}))){for(f in r)d.o(r,f)&&(d.m[f]=r[f]);if(b)var u=b(d)}for(a&&a(c);o<n.length;o++)t=n[o],d.o(e,t)&&e[t]&&e[t][0](),e[n[o]]=0;return d.O(u)},c=self.webpackChunk=self.webpackChunk||[];c.forEach(a.bind(null,0)),c.push=a.bind(null,c.push.bind(c))}()}();