(function(t){function e(e){for(var r,o,s=e[0],l=e[1],c=e[2],f=0,h=[];f<s.length;f++)o=s[f],i[o]&&h.push(i[o][0]),i[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);u&&u(e);while(h.length)h.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,s=1;s<n.length;s++){var l=n[s];0!==i[l]&&(r=!1)}r&&(a.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},i={app:0},a=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},2016:function(t,e,n){},2856:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container mt-5",attrs:{id:"main"}},[t.element?n("div",{staticClass:"selectionContainer"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-6 img"},[n("img",{attrs:{src:t.element.img}})])]),n("div",{staticClass:"row mt-5"},[n("div",{staticClass:"col-md-3 m-auto"},[n("button",{staticClass:"btn btn-lg btn-outline-primary float-left",attrs:{type:"button"},on:{click:function(e){t.addElementToTrainingSet(t.features[0])}}},[t._v(t._s(t.features[0]))]),n("button",{staticClass:"btn btn-lg btn-outline-primary float-right",attrs:{type:"button"},on:{click:function(e){t.addElementToTrainingSet(t.features[1])}}},[t._v(t._s(t.features[1]))])])])]):t._e(),n("div",{staticClass:"mt-5 text-center"},[n("h2",[t._v("Decision tree:")]),n("ml-simple-dt-classifier",{attrs:{"training-set":t.trainingSet,element:t.element}})],1)])},a=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-3 mt-5"},[t.prediction?n("h4",[t._v("My prediction : "+t._s(t.prediction))]):t._e()]),n("div",{staticClass:"col-md-12 treeContainer mt-5"},[n("div",{staticClass:"tree",domProps:{innerHTML:t._s(t.tree)}})])])},s=[],l=(n("4917"),function(){function t(t){this.root=l({trainingSet:t.trainingSet,ignoredAttributes:n(t.ignoredAttributes),categoryAttr:t.categoryAttr||"category",minItemsCount:t.minItemsCount||1,entropyThrehold:t.entropyThrehold||.01,maxTreeDepth:t.maxTreeDepth||70})}function e(t,e){this.trees=u(t,e)}function n(t){var e={};if(t)for(var n in t){var r=t[n];e[r]=!0}return e}function r(t,e){for(var n={},r=t.length-1;r>=0;r--)n[t[r][e]]=0;for(r=t.length-1;r>=0;r--)n[t[r][e]]+=1;return n}function i(t,e){var n,i=r(t,e),a=0;for(var o in i)n=i[o]/t.length,a+=-n*Math.log(n);return a}function a(t,e,n,r){for(var i,a,o=[],s=[],l=t.length-1;l>=0;l--)i=t[l],a=i[e],n(a,r)?o.push(i):s.push(i);return{match:o,notMatch:s}}function o(t,e){var n,i=r(t,e),a=0;for(var o in i)i[o]>a&&(a=i[o],n=o);return n}t.prototype.predict=function(t){return c(this.root,t)},e.prototype.predict=function(t){return f(this.trees,t)};var s={"==":function(t,e){return t==e},">=":function(t,e){return t>=e}};function l(t){var e=t.trainingSet,n=t.minItemsCount,r=t.categoryAttr,c=t.entropyThrehold,u=t.maxTreeDepth,f=t.ignoredAttributes;if(0==u||e.length<=n)return{category:o(e,r)};var h=i(e,r);if(h<=c)return{category:o(e,r)};for(var m={},g={gain:0},p=e.length-1;p>=0;p--){var d=e[p];for(var v in d)if(v!=r&&!f[v]){var b,y=d[v];b="number"==typeof y?">=":"==";var S=v+b+y;if(!m[S]){m[S]=!0;var T=s[b],C=a(e,v,T,y),_=i(C.match,r),x=i(C.notMatch,r),M=0;M+=_*C.match.length,M+=x*C.notMatch.length,M/=e.length;var w=h-M;w>g.gain&&(g=C,g.predicateName=b,g.predicate=T,g.attribute=v,g.pivot=y,g.gain=w)}}}if(!g.gain)return{category:o(e,r)};t.maxTreeDepth=u-1,t.trainingSet=g.match;var O=l(t);t.trainingSet=g.notMatch;var j=l(t);return{attribute:g.attribute,predicate:g.predicate,predicateName:g.predicateName,pivot:g.pivot,match:O,notMatch:j,matchedCount:g.match.length,notMatchedCount:g.notMatch.length}}function c(t,e){var n,r,i,a;while(1){if(t.category)return t.category;n=t.attribute,r=e[n],i=t.predicate,a=t.pivot,t=i(r,a)?t.match:t.notMatch}}function u(e,n){for(var r=e.trainingSet,i=[],a=0;a<n;a++)i[a]=[];for(var o=r.length-1;o>=0;o--){var s=o%n;i[s].push(r[o])}var l=[];for(a=0;a<n;a++){e.trainingSet=i[a];var c=new t(e);l.push(c)}return l}function f(t,e){var n={};for(var r in t){var i=t[r],a=i.predict(e);n[a]=n[a]?n[a]+1:1}return n}var h={};return h.DecisionTree=t,h.RandomForest=e,h}()),c=l,u={props:["trainingSet","element"],components:{},data:function(){return{tree:null,prediction:null}},computed:{},methods:{classify:function(){var t={trainingSet:this.trainingSet,categoryAttr:"label",ignoredAttributes:["img"]},e=new c.DecisionTree(t),n=this.element;this.prediction=e.predict(n),console.log("tree",e),console.log("prediction",this.prediction),this.tree=this.treeToHtml(e.root)},treeToHtml:function(t){return t.category?["<ul>","<li>",'<a href="#">',"<b>",t.category,"</b>","</a>","</li>","</ul>"].join(""):["<ul>","<li>",'<a href="#">',"<b>",t.attribute," ",t.predicateName," ",t.pivot," ?</b>","</a>","<ul>","<li>",'<a href="#">yes</a>',this.treeToHtml(t.match),"</li>","<li>",'<a href="#">no</a>',this.treeToHtml(t.notMatch),"</li>","</ul>","</li>","</ul>"].join("")}},mounted:function(){this.trainingSet.length&&this.classify()},watch:{trainingSet:function(t,e){t.length&&(this.trainingSet=t,this.classify())}}},f=u,h=(n("a0da"),n("2877")),m=Object(h["a"])(f,o,s,!1,null,null,null);m.options.__file="MLSimpleDecisionTreeClassifier.vue";var g=m.exports,p=n("1157"),d=n.n(p),v={components:{MLSimpleDecisionTreeClassifier:g},data:function(){return{allData:[],trainingSet:[],element:null,features:[]}},computed:{},methods:{getTrainingSet:function(){var t=this;d.a.getJSON("set.json",function(e){t.allData=e.data,t.features=e.features,t.setRandomElementFromTrainingSet(),console.log(t.element)})},setRandomElementFromTrainingSet:function(){var t=Math.floor(Math.random()*this.allData.length);this.element=this.allData[t]},addElementToTrainingSet:function(t){this.element.label=t,this.trainingSet.push(this.element),this.setRandomElementFromTrainingSet(),console.log(this.trainingSet)}},mounted:function(){this.getTrainingSet()}},b=v,y=(n("5c0b"),Object(h["a"])(b,i,a,!1,null,null,null));y.options.__file="App.vue";var S=y.exports,T=n("9f7b"),C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"tree",domProps:{innerHTML:t._s(t.tree)}})])},_=[],x=(n("ac6a"),n("456d"),n("b4ae")),M=n("c264"),w={props:["trainingSet"],components:{},data:function(){return{tree:null}},computed:{},methods:{transformToMatrix:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=this,i=t.map(function(t){return r.transformFeatureMapToVector(t,e,n)});return new x["c"](i)},transformFeatureMapToVector:function(t,e,n){var r=[];return Object.keys(t).map(function(i,a){var o=t[i];i!==e&&n.indexOf(i)<0&&"number"===typeof o&&r.push(o),"number"!==typeof o&&i!==e&&n.indexOf(i)<0&&console.log("Ignoring field "+i+" due to non numeric value: ",o)}),r},getUniqueClasses:function(t,e){var n=[];return t.map(function(t){n.indexOf(t[e])<0&&n.push(t[e])}),n},getClassVectorFromFeatureMap:function(t,e){var n=this.getUniqueClasses(t,e);return t.map(function(t){return n.indexOf(t[e])})},getClassesFromVector:function(t,e,n){var r=this.getUniqueClasses(t,e);return n.map(function(t){return r[t]})},getFieldNameForIndex:function(t,e,n){var r,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],a=e[0];return Object.keys(a).map(function(e,o){var s=a[e];e!==n&&i.indexOf(e)<0&&"number"===typeof s&&t===o&&(r=e)}),r},getLeafLabel:function(t,e){var n="",r=0;for(var i in t){var a=e[r];n+="- "+a+":"+i+" -",r++}return n},treeToHtml:function(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];return void 0===t?"none":void 0===t.left&&void 0===t.right?(console.log("calc prediction",this.getLeafLabel(t.distribution.getRow(0),this.getUniqueClasses(e,n))),["<ul>","<li>",'<a href="#">',"<b>",this.getLeafLabel(t.distribution.getRow(0),this.getUniqueClasses(e,n)),"</b>","</a>","</li>","</ul>"].join("")):["<ul>","<li>",'<a href="#">',"<b>",this.getFieldNameForIndex(t.splitColumn,e,n,r)," ","<"," ",t.splitValue," ?</b>","</a>","<ul>","<li>",'<a href="#">yes</a>',this.treeToHtml(t.left,e,n,r),"</li>","<li>",'<a href="#">no</a>',this.treeToHtml(t.right,e,n,r),"</li>","</ul>","</li>","</ul>"].join("")},classify:function(){console.log("training set ",this.trainingSet);var t=this.transformToMatrix(this.trainingSet,"sex"),e=this.getClassVectorFromFeatureMap(this.trainingSet,"sex");console.log("Training matrix:",t),console.log("Class vector:",e);var n={gainFunction:"gini",maxDepth:2,minNumSamples:10},r=e;console.log(r);var i=new M["a"](n);i.train(t,r),console.log("JSON",i.toJSON());var a=i.predict(t);console.log("result",a),this.tree=this.treeToHtml(i.root,this.trainingSet,"sex")}},mounted:function(){this.trainingSet.length&&this.classify()},watch:{trainingSet:function(t,e){t.length&&(this.trainingSet=t,this.classify())}}},O=w,j=(n("6a48"),Object(h["a"])(O,C,_,!1,null,null,null));j.options.__file="MLCartClassifier.vue";var F=j.exports;r["a"].use(T["a"]),r["a"].component("ml-cart-classifier",F),r["a"].component("ml-simple-dt-classifier",g),new r["a"]({render:function(t){return t(S)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var r=n("2856"),i=n.n(r);i.a},"6a48":function(t,e,n){"use strict";var r=n("2016"),i=n.n(r);i.a},a0da:function(t,e,n){"use strict";var r=n("a709"),i=n.n(r);i.a},a709:function(t,e,n){}});
//# sourceMappingURL=app.cb7bbaef.js.map