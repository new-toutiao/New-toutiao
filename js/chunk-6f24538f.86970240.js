(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6f24538f"],{"0624":function(t,a,n){"use strict";var s=n("1392"),e=n.n(s);e.a},1392:function(t,a,n){},"1a70":function(t,a,n){"use strict";n.r(a);var s=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"mian1_z"},[n("div",{staticClass:"title_z"},[n("p",{staticClass:"title"},[t._v(t._s(t.title))]),n("p",{staticClass:"bot"},[n("span",[t._v(t._s(t.source))]),n("span",[t._v("04-22")]),n("span",[t._v("10.22")])])]),n("div",{staticClass:"cont",domProps:{innerHTML:t._s(t.cont)}})])},e=[],c=n("bd86"),i=n("bc3a"),o=n.n(i),r={data:function(){var t;return t={cont:[],id:""},Object(c["a"])(t,"cont",""),Object(c["a"])(t,"title",""),Object(c["a"])(t,"source",""),t},created:function(){var t=this;this.$observer.$on("change",function(a){t.id=a,o()({method:"get",url:"/motor/m/article/detail",params:{group_id:t.id}}).then(function(a){t.title=a.data.data.title,t.source=a.data.data.source,t.cont=a.data.data.content})})}},u=r,l=(n("0624"),n("2877")),d=Object(l["a"])(u,s,e,!1,null,null,null);a["default"]=d.exports}}]);
//# sourceMappingURL=chunk-6f24538f.86970240.js.map