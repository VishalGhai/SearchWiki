(this.webpackJsonpsearchwiki=this.webpackJsonpsearchwiki||[]).push([[0],{41:function(e,t,c){},42:function(e,t,c){"use strict";c.r(t);var r=c(2),n=c(14),s=c.n(n),a=c(3),i=c(5),u=c.n(i),j=c(15),o=c(16),h=c.n(o),l=c(0),b=function(e){var t=Object(r.useState)(""),c=Object(a.a)(t,2),n=c[0],s=c[1];return Object(r.useEffect)((function(){var t=null;return n&&(t=setTimeout(Object(j.a)(u.a.mark((function t(){var c,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.get("https://en.wikipedia.org/w/api.php",{params:{action:"query",list:"search",origin:"*",format:"json",srsearch:n}});case 2:c=t.sent,r=c.data,e.getresult(r.query.search);case 5:case"end":return t.stop()}}),t)}))),1e3)),function(){clearTimeout(t)}}),[n]),Object(l.jsxs)("div",{className:"searchcontainer",children:[Object(l.jsx)("div",{className:"searchbar",children:Object(l.jsx)("input",{placeholder:"Search here...",onChange:function(e){return s(e.target.value)},value:n,className:"inputbar",type:"text"})}),Object(l.jsx)("div",{className:"searchbtn",children:Object(l.jsx)("button",{className:"btn",children:"Search"})})]})},d=function(e){var t=Object(r.useState)([]),c=Object(a.a)(t,2),n=c[0],s=c[1];return Object(r.useEffect)((function(){s((function(t){return e.response}))}),[e.response]),n.map((function(e){return Object(l.jsxs)("div",{className:"card",children:[Object(l.jsx)("a",{target:"_blank",href:"https://en.wikipedia.org?curid="+e.pageid,children:Object(l.jsx)("h2",{children:e.title})}),Object(l.jsx)("p",{dangerouslySetInnerHTML:{__html:e.snippet}})]})}))},p=(c(41),function(){var e=Object(r.useState)([]),t=Object(a.a)(e,2),c=t[0],n=t[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"title",children:Object(l.jsx)("h1",{children:"Search Wikipedia"})}),Object(l.jsx)(b,{getresult:function(e){n(e)}}),Object(l.jsx)("div",{className:"list-view",children:Object(l.jsx)(d,{response:c})})]})});s.a.render(Object(l.jsx)(p,{}),document.querySelector("#root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.38a61d74.chunk.js.map