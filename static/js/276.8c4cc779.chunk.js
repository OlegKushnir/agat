"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[276],{276:function(i,e,p){p.r(e);var s=p(7689),g=p(1289),l=p(8617),t=p(1087),c=p(145),r=p(3478),n=p(5280),j=p(184);e.default=function(){var i=(0,s.UO)().roomType,e=c.filter((function(e){return e.type===i})),p=function(i){var e=n.find((function(e){return e.id===i}));return null===e||void 0===e?void 0:e.iconURL};return(0,j.jsxs)("section",{className:g.Z.wrapper,children:[(0,j.jsx)("h2",{className:g.Z.section__title,children:i}),(0,j.jsx)("div",{className:g.Z.wrapper,children:(0,j.jsx)("ul",{className:g.Z.list,children:e.map((function(i){var e=i.id,s=i.title,c=i.persons,n=i.priceLow,a=i.priceMiddle,o=i.priceHigh,d=i.filling,f=i.images;return(0,j.jsx)("li",{className:"".concat(g.Z.item," ").concat(g.Z.show),children:(0,j.jsxs)(t.OL,{to:e,className:l.Z.navLink,children:[(0,j.jsx)("div",{className:g.Z.imgWrapper,children:(0,j.jsx)("img",{className:g.Z.roomImg,src:null!==f&&void 0!==f&&f.length?"../".concat(f[0].split(".")[0],"_480.jpg"):"",width:"320",height:"240",alt:s})}),(0,j.jsxs)("div",{className:g.Z.infoWrapper,children:[(0,j.jsxs)("h3",{className:g.Z.title,children:[s,(0,j.jsxs)("p",{className:g.Z.thinText,children:[" ",c," - \u043c\u0456\u0441\u0442\u043d\u0438\u0439"]})]}),(0,j.jsxs)("ul",{className:l.Z.prices,children:[(0,j.jsxs)("li",{className:g.Z.text,children:[r.JI," : ",n," \u0433\u0440\u043d"]}),(0,j.jsxs)("li",{className:g.Z.text,children:[r.P4," : ",a," \u0433\u0440\u043d"]}),(0,j.jsxs)("li",{className:g.Z.text,children:[r.yj," : ",o," \u0433\u0440\u043d"]}),(0,j.jsxs)("li",{className:g.Z.text,children:[r.SI," : ",n," \u0433\u0440\u043d"]})]}),(0,j.jsx)("ul",{className:g.Z.filling,children:d.map((function(i){return(0,j.jsx)("li",{className:g.Z.filling__item,children:(0,j.jsx)("svg",{className:g.Z.icon,width:"27",height:"27",children:(0,j.jsx)("use",{href:p(i)})})},i)}))})]})]})},e)}))})})]})}},8617:function(i,e){e.Z={navLink:"Rooms_navLink__cqxjT",prices:"Rooms_prices__yW-Ff",thumb:"Rooms_thumb__Q7T+x"}},5280:function(i){i.exports=JSON.parse('[{"id":1,"title":"\u0434\u0432\u043e\u0441\u043f\u0430\u043b\u044c\u043d\u0435 \u043b\u0456\u0436\u043a\u043e","iconURL":"../icons.svg#bed3"},{"id":2,"title":"\u0434\u0443\u0448","iconURL":"../icons.svg#bath"},{"id":3,"title":"\u0442\u0443\u0430\u043b\u0435\u0442","iconURL":"../icons.svg#toilet"},{"id":4,"title":"\u0442\u0435\u043b\u0435\u0432\u0456\u0437\u043e\u0440","iconURL":"../icons.svg#tv"},{"id":5,"title":"\u0445\u043e\u043b\u043e\u0434\u0438\u043b\u044c\u043d\u0438\u043a","iconURL":"../icons.svg#fridge"},{"id":6,"title":"\u043a\u043e\u043d\u0434\u0438\u0446\u0456\u043e\u043d\u0435\u0440","iconURL":"../icons.svg#ac"},{"id":7,"title":"WiFi","iconURL":"../icons.svg#wifi"},{"id":8,"title":"\u0434\u0438\u0432\u0430\u043d","iconURL":"../icons.svg#sofa"}]')},145:function(i){i.exports=JSON.parse('[{"id":"1","type":"\u041d\u0430\u043f\u0456\u0432\u043b\u044e\u043a\u0441","title":"\u041d\u0430\u043f\u0456\u0432\u043b\u044e\u043a\u0441","persons":2,"priceLow":450,"priceMiddle":750,"priceHigh":1000,"filling":[1,2,3,4,5,6,7],"images":["k1.jpg","k2.jpg","k3.jpg","k4.jpg"]},{"id":"2","type":"\u041d\u0430\u043f\u0456\u0432\u043b\u044e\u043a\u0441","title":"\u041d\u0430\u043f\u0456\u0432\u043b\u044e\u043a\u0441 (\u0434\u043e\u0434\u0430\u0442\u043a\u043e\u0432\u0435 \u043b\u0456\u0436\u043a\u043e)","persons":3,"priceLow":600,"priceMiddle":900,"priceHigh":1400,"filling":[1,2,3,4,5,6,7],"images":["k2.jpg","k5.jpg","k3.jpg","k4.jpg"]},{"id":"3","type":"\u041d\u0430\u043f\u0456\u0432\u043b\u044e\u043a\u0441","title":"\u041d\u0430\u043f\u0456\u0432\u043b\u044e\u043a\u0441 (\u043c\u0430\u043d\u0441\u0430\u0440\u0434\u043d\u0438\u0439)","persons":2,"priceLow":450,"priceMiddle":700,"priceHigh":950,"filling":[1,2,3,5,6,7],"images":["k8.jpg","k9.jpg","k10.jpg","k11.jpg","k12.jpg"]},{"id":"4","type":"\u041d\u0430\u043f\u0456\u0432\u043b\u044e\u043a\u0441","title":"\u0414\u0432\u043e\u043c\u0456\u0441\u043d\u0438\u0439","persons":2,"priceLow":450,"priceMiddle":600,"priceHigh":800,"filling":[1,2,3,7],"images":["k6.jpg","k7.jpg","k4.jpg"]},{"id":"5","type":"\u0421\u0456\u043c\u0435\u0439\u043d\u0438\u0439","title":"\u0421\u0456\u043c\u0435\u0439\u043d\u0438\u0439","persons":4,"priceLow":800,"priceMiddle":1200,"priceHigh":1650,"filling":[1,8,2,3,4,5,6],"images":["f41.jpg","f42.jpg","f43.jpg","f44.jpg","f45.jpg","f46.jpg"]},{"id":"6","type":"\u0421\u0456\u043c\u0435\u0439\u043d\u0438\u0439","title":"\u0421\u0456\u043c\u0435\u0439\u043d\u0438\u0439","persons":3,"priceLow":700,"priceMiddle":1000,"priceHigh":1400,"filling":[1,8,2,3,4,5,6],"images":["f41.jpg","f42.jpg","f43.jpg","f44.jpg","f45.jpg","f46.jpg"]},{"id":"7","type":"\u0421\u0456\u043c\u0435\u0439\u043d\u0438\u0439","title":"\u0421\u0456\u043c\u0435\u0439\u043d\u0438\u0439 \u043e\u043a\u0440\u0435\u043c\u0438\u0439","persons":2,"priceLow":540,"priceMiddle":750,"priceHigh":1000,"filling":[1,8,2,3,5,6],"images":["fd.jpg","fd1.jpg","fd2.jpg","fd3.jpg"]},{"id":"8","type":"\u041a\u043e\u043c\u0444\u043e\u0440\u0442","title":"\u041a\u043e\u043c\u0444\u043e\u0440\u0442 \u0434\u0432\u043e\u043c\u0456\u0441\u043d\u0438\u0439","persons":2,"priceLow":550,"priceMiddle":750,"priceHigh":1000,"filling":[1,2,3,4,5,6],"images":["b.jpg","b1.jpg","b12.jpg","b13.jpg"]},{"id":"9","type":"\u041a\u043e\u043c\u0444\u043e\u0440\u0442","title":"\u041a\u043e\u043c\u0444\u043e\u0440\u0442 \u0447\u043e\u0442\u0438\u0440\u0438\u043c\u0456\u0441\u043d\u0438\u0439","persons":4,"priceLow":900,"priceMiddle":1350,"priceHigh":1850,"filling":[1,2,3,4,5,6],"images":["b.jpg","b61.jpg","b62.jpg","b63.jpg","b64.jpg","b65.jpg","b66.jpg","b67.jpg","b620.jpg","a61.jpg","a62.jpg","a63.jpg","a64.jpg","a65.jpg","a66.jpg"]},{"id":"10","type":"\u0415\u043a\u043e\u043d\u043e\u043c","title":"\u0415\u043a\u043e\u043d\u043e\u043c \u0441\u0456\u043c\u0435\u0439\u043d\u0438\u0439","persons":3,"priceLow":540,"priceMiddle":750,"priceHigh":1000,"filling":[2,3,4,5,6],"images":["e1.jpg","e2.jpg","e5.jpg","e7.jpg","e9.jpg","e10.jpg"]},{"id":"11","type":"\u0415\u043a\u043e\u043d\u043e\u043c","title":"\u0415\u043a\u043e\u043d\u043e\u043c \u0441\u0456\u043c\u0435\u0439\u043d\u0438\u0439","persons":3,"priceLow":480,"priceMiddle":650,"priceHigh":950,"filling":[2,3,5,6],"images":["e1.jpg","e2.jpg","e5.jpg","e7.jpg","e9.jpg","e10.jpg"]},{"id":"12","type":"\u0415\u043a\u043e\u043d\u043e\u043c","title":"\u0415\u043a\u043e\u043d\u043e\u043c \u0441\u0456\u043c\u0435\u0439\u043d\u0438\u0439","persons":3,"priceLow":480,"priceMiddle":600,"priceHigh":850,"filling":[2,3,5],"images":["e1.jpg","e2.jpg","e5.jpg","e7.jpg","e9.jpg","e10.jpg"]},{"id":"13","type":"\u0421\u0442\u0430\u043d\u0434\u0430\u0440\u0442","title":" \u0421\u0442\u0430\u043d\u0434\u0430\u0440\u0442","persons":3,"priceLow":700,"priceMiddle":1000,"priceHigh":1400,"filling":[1,2,3,4,5,6],"images":["vit1.jpg","vit2.jpg","vit3.jpg","vit4.jpg","vit5.jpg"]}]')},3478:function(i){i.exports=JSON.parse('{"JI":"1.01-10.06","P4":"11.06-27.06","yj":"28.06-25.08","SI":"26.08-31.12"}')}}]);
//# sourceMappingURL=276.8c4cc779.chunk.js.map