"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[249],{3249:function(e,i,r){r.r(i),r.d(i,{default:function(){return d}});var t=r(4942);function s(e,i){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);i&&(t=t.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var i=1;i<arguments.length;i++){var r=null!=arguments[i]?arguments[i]:{};i%2?s(Object(r),!0).forEach((function(i){(0,t.Z)(e,i,r[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(r,i))}))}return e}var n=r(1289),a=r(6050),l=r(145),p=r(7124),o=r(184),u=l.reduce((function(e,i){var r=i.id,s=i.type,n=i.title,a=i.persons,l=i.priceLow,p=i.priceMiddle,o=i.priceHigh;return Object.keys(e).includes(i.type)?(e[s].push({id:r,title:n,persons:a,priceLow:l,priceMiddle:p,priceHigh:o}),e):c(c({},e),{},(0,t.Z)({},s,[{id:r,title:n,persons:a,priceLow:l,priceMiddle:p,priceHigh:o}]))}),{}),d=function(){return(0,o.jsxs)("div",{className:n.Z.wrapper,children:[(0,o.jsxs)("p",{className:n.Z.text,children:["Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad soluta ab, itaque error inventore adipisci omnis ea rem expedita repellendus? Animi itaque blanditiis, incidunt sunt accusamus iure? Temporibus, minus obcaecati?",(0,o.jsx)("span",{className:a.Z.textImp,children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quam adipisci minus, autem, consectetur ipsa nihil ab vitae laudantium quasi aliquid aspernatur animi rerum, nobis ut ducimus a provident commodi."}),"Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, aut iusto ab recusandae sed error repellat voluptatem cumque voluptatibus, repellendus, harum accusantium incidunt minus adipisci qui ipsam sequi quia minima."]}),(0,o.jsx)("span",{className:a.Z.textImp}),(0,o.jsxs)("p",{children:[(0,o.jsx)("span",{className:a.Z.current,children:"xxx"})," - price for today"]}),Object.keys(u).map((function(e){return(0,o.jsx)("div",{className:n.Z.wrapper,children:(0,o.jsx)(p.Z,{roomType:e,rooms:u})},e)}))]})}},7124:function(e,i,r){var t=r(9439),s=r(3478),c=r(1087),n=r(1289),a=r(6050),l=r(184),p=s.JI,o=s.SI,u=s.P4,d=s.yj,m=function(e){var i=function(e){var i=(new Date).getFullYear(),r=e.split("."),s=(0,t.Z)(r,2),c=s[0],n=s[1];return new Date("".concat(i,"-").concat(n,"-").concat(c))},r=Date.parse(i(e.split("-")[0])),s=Date.parse(i(e.split("-")[1])),c=Date.now();return c>=r&&c<=s};i.Z=function(e){var i=e.roomType,r=e.rooms;return(0,l.jsxs)("table",{className:n.Z.table,children:[(0,l.jsx)("caption",{className:n.Z.title,children:i}),(0,l.jsx)("thead",{children:(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{className:n.Z.table__title,children:"Room type"}),(0,l.jsxs)("td",{className:n.Z.table__title,children:["Price",(0,l.jsx)("p",{children:p})]}),(0,l.jsxs)("td",{className:n.Z.table__title,children:["Price",(0,l.jsx)("p",{children:u})]}),(0,l.jsxs)("td",{className:n.Z.table__title,children:["Price",(0,l.jsx)("p",{children:d})]}),(0,l.jsxs)("td",{className:n.Z.table__title,children:["Price",(0,l.jsx)("p",{children:o})]})]})}),r[i].map((function(e){return(0,l.jsx)("tbody",{children:(0,l.jsxs)("tr",{className:a.Z.priceInfo,children:[(0,l.jsx)("td",{className:n.Z.table__room,children:(0,l.jsxs)(c.OL,{to:"/rooms/".concat(i,"/").concat(e.id),className:a.Z.link,children:[e.title," ",(0,l.jsxs)("p",{children:[" ",e.persons,"- persons"]})]})}),(0,l.jsx)("td",{className:m(p)?a.Z.current:"",children:e.priceLow}),(0,l.jsx)("td",{className:m(u)?a.Z.current:"",children:e.priceMiddle}),(0,l.jsx)("td",{className:m(d)?a.Z.current:"",children:e.priceHigh}),(0,l.jsx)("td",{className:m(o)?a.Z.current:"",children:e.priceLow})]})},e.id)}))]})}},6050:function(e,i){i.Z={textImp:"Prices_textImp__rKKzj",priceInfo:"Prices_priceInfo__-wAxC",link:"Prices_link__x0ten",current:"Prices_current__QJalh"}},4942:function(e,i,r){r.d(i,{Z:function(){return s}});var t=r(9142);function s(e,i,r){return(i=(0,t.Z)(i))in e?Object.defineProperty(e,i,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[i]=r,e}},145:function(e){e.exports=JSON.parse('[{"id":"1","type":"Standart","title":"Standart Room","persons":2,"priceLow":100,"priceMiddle":150,"priceHigh":200,"filling":[1,2,3,4,5,6,7],"images":["f41.jpg","f41.jpg","f41.jpg"]},{"id":"2","type":"Standart","title":"Standart Room","persons":3,"priceLow":150,"priceMiddle":200,"priceHigh":250,"filling":[1,2,3,4,5,6,7],"images":["f41.jpg","f41.jpg","f41.jpg"]},{"id":"3","type":"Double","title":"Double room","persons":2,"priceLow":100,"priceMiddle":150,"priceHigh":200,"filling":[1,2,3,5,6,7],"images":["f41.jpg","f41.jpg","f41.jpg"]},{"id":"4","type":"Lux","title":"Lux room","persons":2,"priceLow":200,"priceMiddle":300,"priceHigh":400,"filling":[1,2,3,4,5,6,8,7],"images":["f41.jpg","f41.jpg","f41.jpg"]},{"id":"5","type":"Lux","title":"Lux room","persons":3,"priceLow":300,"priceMiddle":400,"priceHigh":500,"filling":[1,2,3,4,5,6,8,7],"images":["f41.jpg","f41.jpg","f41.jpg"]}]')},3478:function(e){e.exports=JSON.parse('{"JI":"1.01-10.06","P4":"11.06-27.06","yj":"28.06-25.08","SI":"26.08-31.12"}')}}]);
//# sourceMappingURL=249.25aa9571.chunk.js.map