(this.webpackJsonpdcard=this.webpackJsonpdcard||[]).push([[0],{49:function(e,t,c){},57:function(e,t,c){},61:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),s=c(17),r=c.n(s),i=(c(49),c(44)),o=c(14),l=c(7),j=c(22),u=c.n(j),d=c(23),h=c(30),b=c(33),O=c(2);var x=function(e){var t=Object(n.useState)([]),c=Object(b.a)(t,2),a=c[0],s=c[1],r=1;function i(){return(i=Object(h.a)(u.a.mark((function e(){var t,c,n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$top=30&$skip=".concat(30*(r-1)),c=new Request(t,{method:"GET"}),e.next=4,fetch(c);case 4:return n=e.sent,e.next=7,n.json();case 7:a=e.sent,console.log("\u56de\u50b3\u8cc7\u6599 : ",a),s((function(e){return[].concat(Object(d.a)(e),Object(d.a)(a))})),r+=1;case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var o={root:null,rootMargin:"0px",threshold:1},l=function(e,t){e.forEach((function(e){e.isIntersecting&&(console.log("n :",r),function(){i.apply(this,arguments)}())}))};Object(n.useEffect)((function(){r=1;var e=document.querySelector("#TARGET_ELEMENT");new IntersectionObserver(l,o).observe(e)}),[]);var j=Object(O.jsxs)(O.Fragment,{children:[a.map((function(e,t){return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{className:"col-xl-4 col-lg-5 col-md-6 ",children:Object(O.jsxs)("div",{className:"product  fish-card w-100 position-relative",children:[Object(O.jsx)("div",{className:"fish-img-box w-100",children:Object(O.jsx)("img",{src:e.Picture.PictureUrl1?"".concat(e.Picture.PictureUrl1):"/MOTC-Transport-API/img/notfound.jpg",className:"fish-product-img",alt:"".concat(e.Name)+"\u5716\u7247"})}),Object(O.jsxs)("div",{className:"fish-card-body w-100",children:[Object(O.jsx)("h5",{className:"fish-card-title",children:e.Name}),Object(O.jsx)("p",{className:"fish-card-text",children:e.DescriptionDetail}),Object(O.jsx)("hr",{className:"fish-product-hr"}),Object(O.jsx)("div",{className:"fish-product-price mb-1",children:e.p_price})]})]})},t)})})),Object(O.jsx)("div",{id:"TARGET_ELEMENT"})]});return Object(n.useEffect)((function(){console.log("rows : ",a)}),[a]),Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{className:"d-flex flex-wrap",children:j})})};var m=function(e){return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{className:"d-flex flex-wrap",children:Object(O.jsx)("h1",{children:"\u9996\u9801"})})})};var p=Object(l.f)((function(e){var t=Object(n.useState)([]),c=Object(b.a)(t,2),a=c[0],s=c[1],r=1;function i(){return(i=Object(h.a)(u.a.mark((function e(t){var c,n,a,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/"+t+"?$top=".concat(30,"&$skip=",30*(r-1)),n=new Request(c,{method:"GET"}),e.next=4,fetch(n);case 4:return a=e.sent,e.next=7,a.json();case 7:i=e.sent,console.log("\u56de\u50b3\u8cc7\u6599 : ",i),s((function(e){return[].concat(Object(d.a)(e),Object(d.a)(i))})),r+=1;case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var o={root:null,rootMargin:"0px",threshold:.75},l=function(t,c){t.forEach((function(t){t.isIntersecting&&(console.log("observecity :",e.match.params.city),function(e){i.apply(this,arguments)}(e.match.params.city))}))};Object(n.useEffect)((function(){var e=document.querySelector("#TARGET_ELEMENT");new IntersectionObserver(l,o).observe(e)}),[]),Object(n.useEffect)((function(){console.log("rows :",a)}),[a]);var j=Object(O.jsxs)(O.Fragment,{children:[a.map((function(t,c){return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{className:"col-xl-4 col-lg-5 col-md-6 ",children:Object(O.jsxs)("div",{className:"product  fish-card w-100 position-relative",children:[Object(O.jsx)("div",{className:"fish-img-box w-100",children:Object(O.jsx)("img",{src:t.Picture.PictureUrl1?"".concat(t.Picture.PictureUrl1):"/MOTC-Transport-API/img/notfound.jpg",className:"fish-product-img",alt:"".concat(t.Name)+"\u5716\u7247"})}),Object(O.jsxs)("div",{className:"fish-card-body w-100",children:[Object(O.jsxs)("h5",{className:"fish-card-title",children:[t.City,"\uff0d",t.Name]}),Object(O.jsx)("p",{className:"fish-card-text",children:t.DescriptionDetail}),Object(O.jsx)("hr",{className:"fish-product-hr"}),Object(O.jsxs)("div",{className:"fish-product-text mb-1",children:["\u7d93\u7def\u5ea6: ",t.Position.PositionLat,",",t.Position.PositionLon]})]})]})},e.city)})})),Object(O.jsx)("div",{id:"TARGET_ELEMENT"})]});return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{className:"row justify-content-center",children:Object(O.jsx)("div",{className:"d-flex flex-wrap",children:j})})})}));var f=function(e){return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{className:"container",children:e.children})})},v=c(68),g=c(69),N=c(67);c(57);var T=Object(l.f)((function(e){var t=["Taipei","NewTaipei","Taoyuan","Taichung","Tainan","Kaohsiung","Keelung","Hsinchu","HsinchuCounty","MiaoliCounty","ChanghuaCounty","NantouCounty","YunlinCounty","ChiayiCounty","Chiayi","PingtungCounty","YilanCounty","HualienCounty","TaitungCounty","KinmenCounty","PenghuCounty","LienchiangCounty"];return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)(v.a,{className:"alex-navbarHeight",collapseOnSelect:!0,expand:"lg",variant:"dark",id:"navbar",children:[Object(O.jsx)(v.a.Brand,{as:o.b,to:"/",className:"nav-left"}),Object(O.jsx)(v.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(O.jsx)(v.a.Collapse,{id:"responsive-navbar-nav",children:Object(O.jsxs)(g.a,{className:"mr-auto ",children:[Object(O.jsx)(g.a.Link,{as:o.b,to:"/scenicSpot",children:"\u5168\u90e8\u7e23\u5e02"}),Object(O.jsxs)(g.a,{children:[Object(O.jsx)(N.a.Divider,{}),Object(O.jsx)(N.a,{title:"\u5404\u7e23\u5e02\u666f\u9ede",id:"nav-member",className:"nav-member-link ",children:t.map((function(e,c){return Object(O.jsx)(g.a.Link,{as:o.b,to:"/scenicSpot/".concat(t[c]),children:"".concat(t[c])})}))})]})]})})]},e.location)})}));var y=Object(l.f)((function(e){return Object(O.jsx)("div",{children:Object(O.jsx)(o.a,{basename:"/MOTC-Transport-API",children:Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(T,{}),Object(O.jsx)(f,{children:Object(O.jsxs)(l.c,{children:[Object(O.jsx)(l.a,{path:"/scenicSpot/:city",render:function(e){return Object(O.jsx)(p,Object(i.a)({},e),e.match.params.city)}}),Object(O.jsx)(l.a,{path:"/scenicSpot",children:Object(O.jsx)(x,{})}),Object(O.jsx)(l.a,{path:"*",children:Object(O.jsx)(m,{})})]})})]})})},e.location.key)})),C=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,70)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))};r.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(o.a,{basename:"/MOTC-Transport-API",children:Object(O.jsx)(y,{})})}),document.getElementById("root")),C()}},[[61,1,2]]]);
//# sourceMappingURL=main.8354368f.chunk.js.map