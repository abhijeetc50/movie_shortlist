(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{54:function(e,t,a){},78:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a(16),r=a.n(n),s=a(26),c=a.n(s),l=a(37),o=a(9),d=(a(54),a(13)),u=a(91),j=a(93),p=a(38),b=a.n(p),f=a(96),h=a(94),g=a(2),O=Object(u.a)((function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden"},gridList:{flexWrap:"nowrap"}}}));var m=function(e){var t=Object(i.useState)([]),a=Object(o.a)(t,2),n=a[0],r=a[1],s=Object(i.useState)(!1),c=Object(o.a)(s,2),l=c[0],d=c[1];Object(i.useEffect)((function(){var t="https://api.themoviedb.org/3/discover/movie?api_key=9be5962f75cabd26c04eb4443674e0d2&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres="+e.MyGenreDetailsData;b.a.get(t).then((function(e){var t=e.data;r(t.results)})).then((function(e){d(!0)}))}),[]);var u=O();return Object(g.jsx)(g.Fragment,{children:l&&Object(g.jsx)("div",{children:Object(g.jsx)("div",{className:u.root,style:{overflow:"hidden"},children:Object(g.jsx)(j.a,{className:u.gridList,cols:5,children:n&&n.length?n.map((function(t){return Object(g.jsxs)(f.a,{children:[Object(g.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/"+t.backdrop_path,onClick:function(){!function(t){var a=JSON.parse(localStorage.getItem("mylist"));null==a&&(a=[]);var i={id:t.id,image:"https://image.tmdb.org/t/p/w500/"+t.backdrop_path,name:t.original_title};a.push(i),a=a.filter((function(e,t){return t===a.findIndex((function(t){return t.id===e.id}))})),localStorage.setItem("mylist",JSON.stringify(a)),e.allAPICalls.fetchAllData()}(t)},alt:t.original_title}),Object(g.jsx)(h.a,{title:t.original_title})]},t.id)})):""})})})})};function x(e){var t=e.GenreList;if(t)return Object(g.jsx)(g.Fragment,{children:t.map((function(t){var a;return Object(g.jsxs)("div",{className:"container-fluid",children:[Object(g.jsx)("h3",(a={style:{padding:"10px"}},Object(d.a)(a,"style",{"padding-top":"30px"}),Object(d.a)(a,"children",t.name),a),t.id),Object(g.jsx)(m,{allAPICalls:e.allAPICalls,MyGenreDetailsData:t.id})]})}))})}x.defaultProps={GenreList:[]};var v=x,y=a(23);function S(e){var t=e.SliderList;if(t)return Object(g.jsx)("div",{children:Object(g.jsx)("div",{className:"container-fluid",children:Object(g.jsx)(y.a,{children:t.map((function(e){return Object(g.jsx)(y.a.Item,{style:{height:"300px"},children:Object(g.jsxs)("div",{children:[Object(g.jsx)("img",{style:{height:"300px"},className:"d-block w-100",alt:e.original_title,src:"https://image.tmdb.org/t/p/w500/"+e.backdrop_path}),Object(g.jsx)(y.a.Caption,{children:Object(g.jsx)("h3",{children:e.original_title})})]})},e.id)}))})})})}S.defaultProps={SliderList:[]};var _=S,w=a(95),N=Object(u.a)((function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"left",overflow:"hidden"},gridList:{flexWrap:"nowrap",transform:"translateZ(0)"}}}));function I(e){var t,a,n=Object(i.useState)(!1),r=Object(o.a)(n,2),s=r[0],c=r[1],l=e.MyListData,u=N();return l.length>0?Object(g.jsxs)("div",{className:"container-fluid",children:[Object(g.jsx)("h3",(t={style:{padding:"10px"}},Object(d.a)(t,"style",{"padding-top":"30px"}),Object(d.a)(t,"children","My List"),t)),Object(g.jsx)("div",{className:(u.root,"hellow"),style:{overflow:"hidden"},children:Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(j.a,{className:u.gridList,cols:5,children:l.map((function(t){return Object(g.jsxs)(f.a,{className:"imageContainer",onMouseOver:function(){return c(!0)},onMouseLeave:function(){return c(!1)},children:[Object(g.jsx)("img",{src:t.image,alt:t.name}),s&&Object(g.jsx)(w.a,{size:"sm",style:{position:"absolute",top:"5px",right:"5px"},variant:"danger",onClick:function(){!function(t){var a=JSON.parse(localStorage.getItem("mylist")),i=a.findIndex((function(e){return e.id===t.id}));-1!==i&&a.splice(i,1),localStorage.setItem("mylist",JSON.stringify(a)),e.allAPICalls.fetchAllData()}(t)},children:"Delete"}),Object(g.jsx)(h.a,{title:t.name})]},t.id)}))})})})]}):Object(g.jsx)("div",{className:"container-fluid",children:Object(g.jsx)("h3",(a={style:{padding:"10px"}},Object(d.a)(a,"style",{"padding-top":"30px"}),Object(d.a)(a,"children","Nothing here! Scroll to discover more"),a))})}I.defaultProps={MyListData:[]};var L=I;var k=function(){var e=Object(i.useState)([]),t=Object(o.a)(e,2),a=t[0],n=t[1],r=Object(i.useState)([]),s=Object(o.a)(r,2),d=s[0],u=s[1],j=Object(i.useState)([]),p=Object(o.a)(j,2),b=p[0],f=p[1],h={fetchAllData:function(){var e=Object(l.a)(c.a.mark((function e(){var t,a,i,r,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/genre/movie/list?api_key=9be5962f75cabd26c04eb4443674e0d2&language=en-US",e.next=3,fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=9be5962f75cabd26c04eb4443674e0d2&language=en-US");case 3:return t=e.sent,e.next=6,t.json();case 6:return a=e.sent,n(a),"https://api.themoviedb.org/3/discover/movie?api_key=9be5962f75cabd26c04eb4443674e0d2&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=10752",e.next=11,fetch("https://api.themoviedb.org/3/discover/movie?api_key=9be5962f75cabd26c04eb4443674e0d2&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=10752");case 11:return i=e.sent,e.next=14,i.json();case 14:r=e.sent,u(r),null==(s=JSON.parse(localStorage.getItem("mylist")))&&(s=[]),f(s);case 19:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()};return Object(i.useEffect)((function(){h.fetchAllData()}),[]),Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)(_,{SliderList:d.results}),Object(g.jsx)(L,{allAPICalls:h,MyListData:b}),Object(g.jsx)(v,{allAPICalls:h,GenreList:a.genres})]})};a(77);r.a.render(Object(g.jsx)(k,{}),document.getElementById("root"))}},[[78,1,2]]]);
//# sourceMappingURL=main.e108a126.chunk.js.map