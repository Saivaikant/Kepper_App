(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{59:function(e,t,n){e.exports=n(71)},71:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(23),c=n.n(r),u=n(13),o=n(8),i=n(45),m=n.n(i);var E=function(){return l.a.createElement("header",null,l.a.createElement("h1",null,l.a.createElement(m.a,null),"Keeper"))};var f=function(){var e=(new Date).getFullYear();return l.a.createElement("footer",null,l.a.createElement("p",null,"Copyright \u24d2 ",e))},v=n(49),d=n.n(v);var p=function(e){return l.a.createElement("div",{className:"note"},l.a.createElement("h1",null,e.title),l.a.createElement("p",null,e.content),l.a.createElement("button",{onClick:function(){e.onDelete(e.id)}},l.a.createElement(d.a,null)))},s=n(6),b=n(50),h=n(51),j=n.n(h),O=n(89),w=n(90);var k=function(e){var t=Object(a.useState)({title:"",content:""}),n=Object(o.a)(t,2),r=n[0],c=n[1];function u(e){var t=e.target,n=t.name,a=t.value;c(function(e){return Object(b.a)({},e,Object(s.a)({},n,a))})}var i=Object(a.useState)(!1),m=Object(o.a)(i,2),E=m[0],f=m[1];return l.a.createElement("div",null,l.a.createElement("form",{className:"create-note"},E?l.a.createElement(w.a,{in:!0},l.a.createElement("input",{name:"title",onChange:u,value:r.title,placeholder:"Title"})):null,l.a.createElement("textarea",{name:"content",onChange:u,value:r.content,placeholder:"Take a note...",rows:E?3:1,onClick:function(){f(!0)}}),l.a.createElement(w.a,{in:E},l.a.createElement(O.a,{onClick:function(t){e.onAdd(r),c({title:"",content:""}),t.preventDefault()}},l.a.createElement(j.a,null)))))};var g=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],r=t[1];function c(e){r(function(t){return t.filter(function(t,n){return n!==e})})}return l.a.createElement("div",null,l.a.createElement(E,null),l.a.createElement(k,{onAdd:function(e){r(function(t){return[].concat(Object(u.a)(t),[e])})}}),n.map(function(e,t){return l.a.createElement(p,{key:t,id:t,title:e.title,content:e.content,onDelete:c})}),l.a.createElement(f,null))};c.a.render(l.a.createElement(g,null),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.86cc66b9.chunk.js.map