"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[971],{6518:function(e,i,t){var r=t(9439),n=t(3478),s=t(1087),c=t(1289),l=t(4507),a=t(184),o=n.JI,d=n.SI,p=n.P4,u=n.yj,m=function(e){var i=function(e){var i=(new Date).getFullYear(),t=e.split("."),n=(0,r.Z)(t,2),s=n[0],c=n[1];return new Date("".concat(i,"-").concat(c,"-").concat(s))},t=Date.parse(i(e.split("-")[0])),n=Date.parse(i(e.split("-")[1])),s=Date.now();return s>=t&&s<=n};i.Z=function(e){var i=e.roomType,t=e.rooms;return(0,a.jsxs)("table",{className:c.Z.table,children:[(0,a.jsx)("caption",{className:c.Z.title,children:i}),(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{className:c.Z.table__title,children:"\u0422\u0438\u043f \u043d\u043e\u043c\u0435\u0440\u0430"}),(0,a.jsxs)("td",{className:c.Z.table__title,children:["\u0426\u0456\u043d\u0430",(0,a.jsx)("p",{children:o})]}),(0,a.jsxs)("td",{className:c.Z.table__title,children:["\u0426\u0456\u043d\u0430",(0,a.jsx)("p",{children:p})]}),(0,a.jsxs)("td",{className:c.Z.table__title,children:["\u0426\u0456\u043d\u0430",(0,a.jsx)("p",{children:u})]}),(0,a.jsxs)("td",{className:c.Z.table__title,children:["\u0426\u0456\u043d\u0430",(0,a.jsx)("p",{children:d})]})]})}),t[i].map((function(e){return(0,a.jsx)("tbody",{children:(0,a.jsxs)("tr",{className:l.Z.priceInfo,children:[(0,a.jsx)("td",{className:c.Z.table__room,children:(0,a.jsxs)(s.OL,{to:"/rooms/".concat(i,"/").concat(e.id),className:l.Z.link,children:[e.title," ",e.persons,"-\u0445 \u043c\u0456\u0441\u043d\u0438\u0439"]})}),(0,a.jsx)("td",{className:m(o)?l.Z.current:"",children:e.priceLow}),(0,a.jsx)("td",{className:m(p)?l.Z.current:"",children:e.priceMiddle}),(0,a.jsx)("td",{className:m(u)?l.Z.current:"",children:e.priceHigh}),(0,a.jsx)("td",{className:m(d)?l.Z.current:"",children:e.priceLow})]})},e.id)}))]})}},6971:function(e,i,t){t.r(i),t.d(i,{default:function(){return f}});var r=t(4942),n=t(9439),s=t(2791),c=t(7689),l=t(1289),a=t(8617),o=t(145),d=t(5477),p=t(6518),u=t(8923),m=t(184),h=function(e){var i=e.links,t=e.currentImage,r=e.handleClick,c=[];i.map((function(e){return c.push({src:"../../".concat(e),loading:"lazy",alt:e})}));var a=(0,s.useState)(i.indexOf(t)),o=(0,n.Z)(a,2),d=o[0],p=o[1],h=function(){return d>0&&p(d-1)},f=function(){return d+1<c.length&&p(d+1)};return(0,m.jsx)(u.Z,{isOpen:!0,onPrev:h,onNext:f,images:c,currentIndex:d,renderPrevButton:function(){return 0!==d?(0,m.jsx)("div",{className:l.Z.gal__btn__wrapper,children:(0,m.jsx)("button",{className:l.Z.gal__btn,onClick:function(){h()},children:"<"})}):""},renderNextButton:function(){return d<c.length-1?(0,m.jsx)("div",{className:l.Z.gal__btn__wrapper,children:(0,m.jsx)("button",{className:l.Z.gal__btn,onClick:function(){f()},children:">"})}):""},className:l.Z.gal,onClose:function(){return r("")},singleClickToZoom:!0})},f=function(){var e=(0,s.useState)(""),i=(0,n.Z)(e,2),t=i[0],u=i[1],f=(0,s.useState)(!1),g=(0,n.Z)(f,2),_=g[0],x=g[1],j=(0,c.UO)().roomId,Z=o.find((function(e){return e.id===j})),N=Z.type,v=Z.id,w=Z.title,y=Z.persons,b=Z.priceLow,k=Z.priceMiddle,L=Z.priceHigh,F=Z.filling,I=(0,r.Z)({},N,[{id:v,title:w,persons:y,priceLow:b,priceMiddle:k,priceHigh:L}]),C=d.find((function(e){return e.type===Z.type})).images,O=function(e){switch(e){case"\u0434\u0432\u043e\u0441\u043f\u0430\u043b\u044c\u043d\u0435 \u043b\u0456\u0436\u043a\u043e":return"../../icons.svg#bed3";case"\u0434\u0438\u0432\u0430\u043d":return"../../icons.svg#sofa";case"\u0434\u0443\u0448":return"../../icons.svg#bath";case"\u0442\u0443\u0430\u043b\u0435\u0442":return"../../icons.svg#toilet";case"\u043a\u043e\u043d\u0434\u0438\u0446\u0456\u043e\u043d\u0435\u0440":return"../../icons.svg#ac";case"WiFi":return"../../icons.svg#wifi";case"\u0442\u0435\u043b\u0435\u0432\u0456\u0437\u043e\u0440":return"../../icons.svg#tv";case"\u0445\u043e\u043b\u043e\u0434\u0438\u043b\u044c\u043d\u0438\u043a":return"../../icons.svg#fridge"}},H=function(e){u(e),x(!_)};return(0,m.jsxs)("div",{className:l.Z.wrapper,children:[(0,m.jsx)("div",{className:a.Z.thumb,children:(0,m.jsx)(p.Z,{roomType:N,rooms:I})}),(0,m.jsx)("ul",{className:l.Z.filling,children:F.map((function(e){return(0,m.jsx)(m.Fragment,{children:O(e)?(0,m.jsxs)("li",{className:l.Z.filling__item,children:[(0,m.jsx)("svg",{className:l.Z.icon,width:"27",height:"27",children:(0,m.jsx)("use",{href:O(e)})}),e]},e):""})}))}),(0,m.jsx)("ul",{className:l.Z.list,children:C.map((function(e){return(0,m.jsx)("li",{children:(0,m.jsx)("div",{children:(0,m.jsx)("img",{className:l.Z.roomImg,onClick:function(){return H(e)},src:"../../".concat(e),width:"320",height:"240",alt:Z.title})})},e)}))}),_?(0,m.jsx)(h,{links:C,currentImage:t,handleClick:H}):""]})}},4507:function(e,i){i.Z={textImp:"Prices_textImp__OLQrA",priceInfo:"Prices_priceInfo__O+0dD",link:"Prices_link__tNl6k",current:"Prices_current__c4Ysm"}},8617:function(e,i){i.Z={navLink:"Rooms_navLink__cqxjT",prices:"Rooms_prices__yW-Ff",thumb:"Rooms_thumb__Q7T+x"}},145:function(e){e.exports=JSON.parse('[{"id":"1","type":"Lux","title":"Lux for two","persons":2,"priceLow":100,"priceMiddle":150,"priceHigh":300,"filling":["\u0434\u0432\u043e\u0441\u043f\u0430\u043b\u044c\u043d\u0435 \u043b\u0456\u0436\u043a\u043e","\u0434\u0443\u0448","\u0442\u0443\u0430\u043b\u0435\u0442","\u0433\u0430\u0440\u044f\u0447\u0430 \u0432\u043e\u0434\u0430 \u0446\u0456\u043b\u043e\u0434\u043e\u0431\u043e\u0432\u043e","\u0445\u043e\u043b\u043e\u0434\u0438\u043b\u044c\u043d\u0438\u043a","\u0442\u0435\u043b\u0435\u0432\u0456\u0437\u043e\u0440","\u043a\u043e\u043d\u0434\u0438\u0446\u0456\u043e\u043d\u0435\u0440","\u0441\u0442\u0456\u043b + \u0434\u0432\u0430 \u0441\u0442\u0456\u043b\u044c\u0446\u044f","\u0448\u043a\u0430\u0444","\u0431\u0430\u043b\u043a\u043e\u043d","WiFi"]},{"id":"2","type":"Family","title":"Family for three","persons":3,"priceLow":50,"priceMiddle":100,"priceHigh":200,"filling":["\u0434\u0432\u043e\u0441\u043f\u0430\u043b\u044c\u043d\u0435 \u043b\u0456\u0436\u043a\u043e","\u0434\u0438\u0432\u0430\u043d","\u0434\u0443\u0448","\u0442\u0443\u0430\u043b\u0435\u0442","\u0433\u0430\u0440\u044f\u0447\u0430 \u0432\u043e\u0434\u0430 \u0446\u0456\u043b\u043e\u0434\u043e\u0431\u043e\u0432\u043e","\u0445\u043e\u043b\u043e\u0434\u0438\u043b\u044c\u043d\u0438\u043a","\u0442\u0435\u043b\u0435\u0432\u0456\u0437\u043e\u0440","\u043a\u043e\u043d\u0434\u0438\u0446\u0456\u043e\u043d\u0435\u0440","\u0441\u0442\u0456\u043b + \u0434\u0432\u0430 \u0441\u0442\u0456\u043b\u044c\u0446\u044f","\u0448\u043a\u0430\u0444","\u0431\u0430\u043b\u043a\u043e\u043d","WiFi"]},{"id":"3","type":"Lux","title":"Lux for three","persons":3,"priceLow":150,"priceMiddle":200,"priceHigh":400,"filling":["\u0434\u0432\u043e\u0441\u043f\u0430\u043b\u044c\u043d\u0435 \u043b\u0456\u0436\u043a\u043e","\u0434\u0443\u0448","\u0442\u0443\u0430\u043b\u0435\u0442","\u0433\u0430\u0440\u044f\u0447\u0430 \u0432\u043e\u0434\u0430 \u0446\u0456\u043b\u043e\u0434\u043e\u0431\u043e\u0432\u043e","\u0445\u043e\u043b\u043e\u0434\u0438\u043b\u044c\u043d\u0438\u043a","\u0442\u0435\u043b\u0435\u0432\u0456\u0437\u043e\u0440","\u043a\u043e\u043d\u0434\u0438\u0446\u0456\u043e\u043d\u0435\u0440","\u0441\u0442\u0456\u043b + \u0434\u0432\u0430 \u0441\u0442\u0456\u043b\u044c\u0446\u044f","\u0448\u043a\u0430\u0444","\u0431\u0430\u043b\u043a\u043e\u043d","WiFi"]},{"id":"4","type":"Family","title":"Family for four","persons":4,"priceLow":60,"priceMiddle":120,"priceHigh":240,"filling":["\u0434\u0432\u043e\u0441\u043f\u0430\u043b\u044c\u043d\u0435 \u043b\u0456\u0436\u043a\u043e","\u0434\u0438\u0432\u0430\u043d","\u0434\u0443\u0448","\u0442\u0443\u0430\u043b\u0435\u0442","\u0433\u0430\u0440\u044f\u0447\u0430 \u0432\u043e\u0434\u0430 \u0446\u0456\u043b\u043e\u0434\u043e\u0431\u043e\u0432\u043e","\u0445\u043e\u043b\u043e\u0434\u0438\u043b\u044c\u043d\u0438\u043a","\u0442\u0435\u043b\u0435\u0432\u0456\u0437\u043e\u0440","\u043a\u043e\u043d\u0434\u0438\u0446\u0456\u043e\u043d\u0435\u0440","\u0441\u0442\u0456\u043b + \u0434\u0432\u0430 \u0441\u0442\u0456\u043b\u044c\u0446\u044f","\u0448\u043a\u0430\u0444","\u0431\u0430\u043b\u043a\u043e\u043d","WiFi"]},{"id":"5","type":"Cottage","title":"Room in cottage","persons":2,"priceLow":50,"priceMiddle":100,"priceHigh":200,"filling":["\u0434\u0432\u043e\u0441\u043f\u0430\u043b\u044c\u043d\u0435 \u043b\u0456\u0436\u043a\u043e","\u0434\u0443\u0448","\u0442\u0443\u0430\u043b\u0435\u0442","\u0433\u0430\u0440\u044f\u0447\u0430 \u0432\u043e\u0434\u0430 \u0446\u0456\u043b\u043e\u0434\u043e\u0431\u043e\u0432\u043e","\u0445\u043e\u043b\u043e\u0434\u0438\u043b\u044c\u043d\u0438\u043a","\u0442\u0435\u043b\u0435\u0432\u0456\u0437\u043e\u0440","\u043a\u043e\u043d\u0434\u0438\u0446\u0456\u043e\u043d\u0435\u0440","\u0441\u0442\u0456\u043b + \u0434\u0432\u0430 \u0441\u0442\u0456\u043b\u044c\u0446\u044f","\u0448\u043a\u0430\u0444","\u0431\u0430\u043b\u043a\u043e\u043d","WiFi"]}]')},3478:function(e){e.exports=JSON.parse('{"JI":"1.01-10.06","P4":"11.06-27.06","yj":"28.06-25.08","SI":"26.08-31.12"}')},5477:function(e){e.exports=JSON.parse('[{"id":"1","type":"Lux","descr":"\u041d\u043e\u043c\u0435\u0440\u0438 \u0432 \u043a\u043e\u0440\u043f\u0443\u0441\u0456. \u0414\u0443\u0448, \u0442\u0443\u0430\u043b\u0435\u0442, Wifi, (\u043a\u043e\u043d\u0434\u0438\u0446\u0456\u043e\u043d\u0435\u0440, TV)","images":["lux1_320.jpg"]},{"id":"2","type":"Family","descr":"\u041d\u043e\u0432\u0456 \u0431\u0443\u0434\u0438\u043d\u043e\u0447\u043a\u0438, \u0434\u0443\u0448, \u0442\u0443\u0430\u043b\u0435\u0442, \u043a\u043e\u043d\u0434\u0438\u0446\u0456\u043e\u043d\u0435\u0440, TV","images":["f41_480.jpg","f42_480.jpg","f43_480.jpg","f44_480.jpg","f45_480.jpg","f46_480.jpg"]},{"id":"3","type":"Cottage","descr":"\u0411\u0443\u0434\u0438\u043d\u043e\u0447\u043a\u0438 \u0443 \u043c\u043e\u0440\u044f, \u0434\u0443\u0448, \u0442\u0443\u0430\u043b\u0435\u0442, \u043a\u043e\u043d\u0434\u0456\u0446\u0438\u043e\u043d\u0435\u0440, TV","images":["f41_480.jpg"]}]')}}]);
//# sourceMappingURL=971.720574e5.chunk.js.map