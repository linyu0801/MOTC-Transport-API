(this.webpackJsonpdcard=this.webpackJsonpdcard||[]).push([[0],{47:function(e,t,c){},58:function(e,t,c){},62:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c.n(n),a=c(17),r=c.n(a),i=(c(47),c(14)),o=c(7),l=c(22),j=c.n(l),u=c(23),d=c(30),h=c(33),b=c(2);var O=function(e){var t=Object(n.useState)([]),c=Object(h.a)(t,2),s=c[0],a=c[1],r=1;function i(){return(i=Object(d.a)(j.a.mark((function e(){var t,c,n,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$top=30&$skip=".concat(30*(r-1)),c=new Request(t,{method:"GET"}),e.next=4,fetch(c);case 4:return n=e.sent,e.next=7,n.json();case 7:s=e.sent,console.log("\u56de\u50b3\u8cc7\u6599 : ",s),a((function(e){return[].concat(Object(u.a)(e),Object(u.a)(s))})),r+=1;case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var o={root:null,rootMargin:"0px",threshold:1},l=function(e,t){e.forEach((function(e){e.isIntersecting&&(console.log("n :",r),function(){i.apply(this,arguments)}())}))};Object(n.useEffect)((function(){r=1;var e=document.querySelector("#TARGET_ELEMENT");new IntersectionObserver(l,o).observe(e)}),[]);var O=Object(b.jsxs)(b.Fragment,{children:[s.map((function(e,t){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{className:"col-xl-4 col-lg-5 col-md-6 ",children:Object(b.jsxs)("div",{className:"product  fish-card w-100 position-relative",children:[Object(b.jsx)("div",{className:"fish-img-box w-100",children:Object(b.jsx)("img",{src:e.Picture.PictureUrl1?"".concat(e.Picture.PictureUrl1):"/MOTC-Transport-API/img/notfound.jpg",className:"fish-product-img",alt:"".concat(e.Name)+"\u5716\u7247"})}),Object(b.jsxs)("div",{className:"fish-card-body w-100",children:[Object(b.jsx)("h5",{className:"fish-card-title",children:e.Name}),Object(b.jsx)("p",{className:"fish-card-text",children:e.DescriptionDetail}),Object(b.jsx)("hr",{className:"fish-product-hr"}),Object(b.jsx)("div",{className:"fish-product-price mb-1",children:e.p_price})]})]})},t)})})),Object(b.jsx)("div",{id:"TARGET_ELEMENT"})]});return Object(n.useEffect)((function(){console.log("rows : ",s)}),[s]),Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{className:"d-flex flex-wrap",children:O})})};var x=function(e){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("h1",{children:"404 \u627e\u4e0d\u5230\u7db2\u98011223"})})};var p=function(e){var t=Object(n.useState)([]),c=Object(h.a)(t,2),s=c[0],a=c[1],r=1,i=Object(o.f)().city;function l(){return(l=Object(d.a)(j.a.mark((function e(t){var c,n,s,i;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/".concat(t)+"?$top=".concat(30,"&$skip=",30*(r-1)),n=new Request(c,{method:"GET"}),e.next=4,fetch(n);case 4:return s=e.sent,e.next=7,s.json();case 7:i=e.sent,console.log("\u56de\u50b3\u8cc7\u6599 : ",i),i.length>=30?(a((function(e){return[].concat(Object(u.a)(e),Object(u.a)(i))})),r+=1):a(i);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(n.useEffect)((function(){var e=document.querySelector("#TARGET_ELEMENT");new IntersectionObserver((function(e,t){e.forEach((function(e){e.isIntersecting&&(console.log("n :",r),function(e){l.apply(this,arguments)}(i))}))}),{root:null,rootMargin:"0px",threshold:.75}).observe(e)}),[]),Object(n.useEffect)((function(){console.log("rows : ",s)}),[s]);var O=Object(b.jsxs)(b.Fragment,{children:[s.map((function(e,t){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{className:"col-xl-4 col-lg-5 col-md-6 ",children:Object(b.jsxs)("div",{className:"product  fish-card w-100 position-relative",children:[Object(b.jsx)("div",{className:"fish-img-box w-100",children:Object(b.jsx)("img",{src:e.Picture.PictureUrl1?"".concat(e.Picture.PictureUrl1):"/MOTC-Transport-API/img/notfound.jpg",className:"fish-product-img",alt:"".concat(e.Name)+"\u5716\u7247"})}),Object(b.jsxs)("div",{className:"fish-card-body w-100",children:[Object(b.jsxs)("h5",{className:"fish-card-title",children:[e.City,"\uff0d",e.Name]}),Object(b.jsx)("p",{className:"fish-card-text",children:e.DescriptionDetail}),Object(b.jsx)("hr",{className:"fish-product-hr"}),Object(b.jsxs)("div",{className:"fish-product-text mb-1",children:["\u7d93\u7def\u5ea6: ",e.Position.PositionLat,",",e.Position.PositionLon]})]})]})},t)})})),Object(b.jsx)("div",{id:"TARGET_ELEMENT"})]});return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{className:"d-flex flex-wrap",children:O})})};var m=function(e){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{className:"container",children:e.children})})},f=c(69),v=c(70),g=c(68);c(58);var N=Object(o.g)((function(e){var t=["Taipei","NewTaipei","Taoyuan","Taichung","Tainan","Kaohsiung","Keelung","Hsinchu","HsinchuCounty","MiaoliCounty","ChanghuaCounty","NantouCounty","YunlinCounty","ChiayiCounty","Chiayi","PingtungCounty","YilanCounty","HualienCounty","TaitungCounty","KinmenCounty","PenghuCounty","LienchiangCounty"];return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(f.a,{className:"alex-navbarHeight",collapseOnSelect:!0,expand:"lg",variant:"dark",id:"navbar",children:[Object(b.jsx)(f.a.Brand,{as:i.b,to:"/",className:"nav-left"}),Object(b.jsx)(f.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(b.jsx)(f.a.Collapse,{id:"responsive-navbar-nav",children:Object(b.jsxs)(v.a,{className:"mr-auto ",children:[Object(b.jsx)(v.a.Link,{as:i.b,to:"/scenicSpot",children:"\u5168\u90e8\u7e23\u5e02"}),Object(b.jsxs)(v.a,{children:[Object(b.jsx)(g.a.Divider,{}),Object(b.jsx)(g.a,{title:"\u5404\u7e23\u5e02\u666f\u9ede",id:"nav-member",className:"nav-member-link ",children:t.map((function(e,c){return Object(b.jsx)(v.a.Link,{as:i.b,to:"/scenicSpot/".concat(t[c]),children:"".concat(t[c])})}))})]})]})})]})})}));var T=function(){return Object(b.jsx)(i.a,{basename:"/MOTC-Transport-API",children:Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(N,{}),Object(b.jsx)(m,{children:Object(b.jsxs)(o.c,{children:[Object(b.jsx)(o.a,{path:"/scenicSpot/:city",children:Object(b.jsx)(p,{})}),Object(b.jsx)(o.a,{path:"/scenicSpot",children:Object(b.jsx)(O,{})}),Object(b.jsx)(o.a,{path:"*",children:Object(b.jsx)(x,{})})]})})]})})},y=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,71)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),n(e),s(e),a(e),r(e)}))};r.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(i.a,{basename:"/MOTC-Transport-API",children:Object(b.jsx)(T,{})})}),document.getElementById("root")),y()}},[[62,1,2]]]);
//# sourceMappingURL=main.b770f3cb.chunk.js.map