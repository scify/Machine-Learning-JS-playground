(function(t){function e(e){for(var i,o,s=e[0],c=e[1],l=e[2],d=0,f=[];d<s.length;d++)o=s[d],r[o]&&f.push(r[o][0]),r[o]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(e);while(f.length)f.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],i=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(i=!1)}i&&(a.splice(e--,1),t=o(o.s=n[0]))}return t}var i={},r={app:0},a=[];function o(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=i,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},2856:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var i=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-3",attrs:{id:"main"}},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-4"},[t.element?n("div",{staticClass:"selectionContainer box"},[n("div",{staticClass:"row element-container"},[n("div",{staticClass:"img-container"},[n("img",{attrs:{src:t.element.img}})]),n("div",{staticClass:"element-info-container"},[n("div",{staticClass:"element-info"},[n("p",[t._v("Χρώμα: "),n("b",[t._v(t._s(t.element.χρώμα))])]),n("p",[t._v("Βάρος: "),n("b",[t._v(t._s(t.element.βάρος)+" γρ.")])]),n("p",[t._v("Κοτσάνι: "),n("b",[t._v(t._s(t.element.κοτσάνι?"Ναι":"Όχι"))])])])])])]):t._e()]),n("div",{staticClass:"col-md-4"},[n("div",{staticClass:"robot-container box"},[n("robot-assistant",{attrs:{saying:t.robotText}}),n("div",{staticClass:"row mt-5"},[n("div",{staticClass:"col-md-12 text-center"},[n("button",{staticClass:"btn btn-lg btn-info robot-action",attrs:{type:"button"},on:{click:t.classify}},[t._v("\n                            Δοκίμασέ με!\n                        ")])])])],1)]),n("div",{staticClass:"col-md-4"},[t.trainingSet.length?n("div",{staticClass:"training-set-container box"},[n("h4",[t._v("Τι έχω μάθει μέχρι τώρα:")]),t._l(t.trainingSet,function(e){return n("div",{key:e.id,staticClass:"set-item row mt-3"},[n("div",{staticClass:"col-sm-3"},[n("img",{staticClass:"img-thumb",attrs:{src:e.img}})]),n("div",{staticClass:"col-sm-9 description"},[n("p",{staticClass:"label"},[t._v("Αυτό είναι ένα "),n("b",[t._v(t._s(e.label))])])])])})],2):t._e()])]),n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-4"},[t.element?n("div",{staticClass:"selectionContainer box "},[t._v("\n                Εκπαίδευσε το Θαλή! Τι αφορά η παραπάνω εικόνα;\n                "),n("div",{staticClass:"row element-container"},[n("div",{staticClass:"col-lg-6",staticStyle:{"padding-left":"0","padding-right":"4px"}},[n("button",{staticClass:"selectionBtn btn btn-lg btn-apple mt-3 mb-2",attrs:{type:"button"},on:{click:function(e){t.addElementToTrainingSet(t.features[0])}}},[t._v(t._s(t.features[0])+"\n                        ")])]),n("div",{staticClass:"col-lg-6",staticStyle:{"padding-right":"0","padding-left":"4px"}},[n("button",{staticClass:"selectionBtn btn btn-lg btn-orange mt-3",attrs:{type:"button"},on:{click:function(e){t.addElementToTrainingSet(t.features[1])}}},[t._v(t._s(t.features[1])+"\n                        ")])]),n("div",{staticClass:"col-lg-12"},[n("hr"),n("button",{staticClass:"btn btn-lg btn-success",attrs:{type:"button"},on:{click:t.fetchNextInstance}},[t._v("Φέρε και άλλο φρούτο!\n                        ")]),n("br"),n("br"),n("button",{staticClass:"btn btn-lg btn-info mb-2",attrs:{type:"button"},on:{click:t.resetState}},[t._v("Ξέχασε ό,τι ξέρεις...\n                        ")])])])]):t._e()]),t.tree?n("div",{staticClass:"col-md-8"},[n("div",{staticClass:"text-center tree-container box"},[n("div",{staticClass:"selectionContainer"},[n("div",{staticClass:"col-md-12"},[n("h2",[t._v("Πώς σκέφτομαι:")]),n("div",{staticClass:"tree mt-3",domProps:{innerHTML:t._s(t.tree)}})])])])]):t._e()])])},a=[],o=(n("4917"),n("c93e")),s=(n("20d6"),function(){function t(t){this.root=c({trainingSet:t.trainingSet,ignoredAttributes:n(t.ignoredAttributes),categoryAttr:t.categoryAttr||"category",minItemsCount:t.minItemsCount||1,entropyThrehold:t.entropyThrehold||.01,maxTreeDepth:t.maxTreeDepth||70})}function e(t,e){this.trees=u(t,e)}function n(t){var e={};if(t)for(var n in t){var i=t[n];e[i]=!0}return e}function i(t,e){for(var n={},i=t.length-1;i>=0;i--)n[t[i][e]]=0;for(i=t.length-1;i>=0;i--)n[t[i][e]]+=1;return n}function r(t,e){var n,r=i(t,e),a=0;for(var o in r)n=r[o]/t.length,a+=-n*Math.log(n);return a}function a(t,e,n,i){for(var r,a,o=[],s=[],c=t.length-1;c>=0;c--)r=t[c],a=r[e],n(a,i)?o.push(r):s.push(r);return{match:o,notMatch:s}}function o(t,e){var n,r=i(t,e),a=0;for(var o in r)r[o]>a&&(a=r[o],n=o);return n}t.prototype.predict=function(t){return l(this.root,t)},e.prototype.predict=function(t){return d(this.trees,t)};var s={"==":function(t,e){return t==e},">=":function(t,e){return t>=e}};function c(t){var e=t.trainingSet,n=t.minItemsCount,i=t.categoryAttr,l=t.entropyThrehold,u=t.maxTreeDepth,d=t.ignoredAttributes;if(0==u||e.length<=n)return{category:o(e,i)};var f=r(e,i);if(f<=l)return{category:o(e,i)};for(var h={},v={gain:0},p=e.length-1;p>=0;p--){var b=e[p];for(var g in b)if(g!=i&&!d[g]){var m,C=b[g];m="number"==typeof C?">=":"==";var y=g+m+C;if(!h[y]){h[y]=!0;var _=s[m],T=a(e,g,_,C),x=r(T.match,i),S=r(T.notMatch,i),w=0;w+=x*T.match.length,w+=S*T.notMatch.length,w/=e.length;var M=f-w;M>v.gain&&(v=T,v.predicateName=m,v.predicate=_,v.attribute=g,v.pivot=C,v.gain=M)}}}if(!v.gain)return{category:o(e,i)};t.maxTreeDepth=u-1,t.trainingSet=v.match;var j=c(t);t.trainingSet=v.notMatch;var O=c(t);return{attribute:v.attribute,predicate:v.predicate,predicateName:v.predicateName,pivot:v.pivot,match:j,notMatch:O,matchedCount:v.match.length,notMatchedCount:v.notMatch.length}}function l(t,e){var n,i,r,a;while(1){if(t.category)return t.category;n=t.attribute,i=e[n],r=t.predicate,a=t.pivot,t=r(i,a)?t.match:t.notMatch}}function u(e,n){for(var i=e.trainingSet,r=[],a=0;a<n;a++)r[a]=[];for(var o=i.length-1;o>=0;o--){var s=o%n;r[s].push(i[o])}var c=[];for(a=0;a<n;a++){e.trainingSet=r[a];var l=new t(e);c.push(l)}return c}function d(t,e){var n={};for(var i in t){var r=t[i],a=r.predict(e);n[a]=n[a]?n[a]+1:1}return n}var f={};return f.DecisionTree=t,f.RandomForest=e,f}()),c=s,l=n("1157"),u=n.n(l),d=n("2ef0"),f=n.n(d),h={components:{},data:function(){return{allData:[],trainingSet:[],element:null,prediction:null,features:[],robotText:null,tree:null,decisionTree:null}},computed:{},methods:{reload:function(){this.trainingSet=[],this.decisionTree=null,this.element=null;var t=this;u.a.getJSON("set.json",function(e){t.allData=e.data,t.features=e.features,t.fetchNextInstance()})},fetchNextInstance:function(){if(this.allData.length>0){var t=this.element,e=0;if(null!==t){var n=f.a.findIndex(this.allData,function(e){return e.id===t.id});n<this.allData.length-1&&(e=n+1)}this.element=this.allData[e]}this.trainingSet.length>0&&(this.robotText="Ωχ...Ένα φρούτο! Νομίζω ξέρω τί ειναι!")},addElementToTrainingSet:function(t){this.trainingSet.unshift(Object(o["a"])({},this.element,{label:t})),this.train()},resetState:function(){this.reload(),this.prediction=null,this.robotText="Γεία! Είμαι ο Θαλής! Εκπαίδευσέ με για να γίνω σοφότερος!",this.tree=null},train:function(){if(this.trainingSet.length){var t={trainingSet:this.trainingSet,categoryAttr:"label",ignoredAttributes:["img","id"]};this.decisionTree=new c.DecisionTree(t),this.tree=this.treeToHtml(this.decisionTree.root),this.robotText="Γιαμ γιαμ! Νόστιμα τα δεδομένα!"}else this.robotText="Δεν έχω αρκετά δεδομένα για να μάθω..."},classify:function(){this.decisionTree?(this.prediction=this.decisionTree.predict(this.element),this.robotText=this.prediction?"Χμ... μήπως είναι ένα <b>"+this.prediction+"</b>?":"Πραγματικά δεν ξέρω τι είναι αυτό..."):this.robotText="Δεν έχω αρκετά δεδομένα για να κάνω πρόβλεψη."},treeToHtml:function(t){return t.category?["<ul>","<li>",'<a href="#">',"<b>",t.category,"</b>","</a>","</li>","</ul>"].join(""):["<ul>","<li>",'<a href="#">',"<b>",t.attribute," ",t.predicateName," ",t.pivot," ?</b>","</a>","<ul>","<li>",'<a href="#">Ναι</a>',this.treeToHtml(t.match),"</li>","<li>",'<a href="#">Οχι</a>',this.treeToHtml(t.notMatch),"</li>","</ul>","</li>","</ul>"].join("")}},mounted:function(){this.resetState()}},v=h,p=(n("5c0b"),n("2877")),b=Object(p["a"])(v,r,a,!1,null,null,null);b.options.__file="App.vue";var g=b.exports,m=n("9f7b"),C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[t._m(0),n("div",{staticClass:"col"},[n("p",{staticClass:"robot-saying speech-bubble",domProps:{innerHTML:t._s(t.saying)}})])])},y=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col"},[n("div",{staticClass:"robot"},[n("img",{attrs:{src:"robot.png"}})])])}],_={props:["saying"],components:{},data:function(){return{}},computed:{},methods:{},mounted:function(){}},T=_,x=Object(p["a"])(T,C,y,!1,null,null,null);x.options.__file="Robot-Assistant.vue";var S=x.exports;i["a"].use(m["a"]),i["a"].component("robot-assistant",S),new i["a"]({render:function(t){return t(g)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var i=n("2856"),r=n.n(i);r.a}});
//# sourceMappingURL=app.70121504.js.map