"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[620],{1620:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});var r=n(1289),i=n(5477),s=n(8517),o=n(1087),a=n(9348),c=n(184),l=function(e){var t=e.type,n=e.descr,i=e.image,l=(0,a.YD)({threshold:0}),u=l.ref,d=l.inView;return(0,c.jsx)("li",{ref:u,className:d?"".concat(r.Z.item," ").concat(r.Z.show):r.Z.item,children:(0,c.jsxs)(o.OL,{to:"/rooms/".concat(t),className:s.Z.navLink,children:[(0,c.jsx)("div",{className:r.Z.imgWrapper,children:(0,c.jsx)("img",{className:r.Z.roomImg,src:"/agat/".concat(null===i||void 0===i?void 0:i.split(".")[0],"_480.jpg"),width:"320",height:"240",alt:t})}),(0,c.jsxs)("div",{className:r.Z.infoWrapper,children:[(0,c.jsx)("h3",{className:r.Z.title,children:t}),(0,c.jsx)("ul",{className:s.Z.prices,children:(0,c.jsx)("li",{className:r.Z.text,children:n})})]})]})})},u=function(){var e=function(e){var t=e.split(".");return"".concat(t[0],".")};return(0,c.jsxs)("section",{className:r.Z.wrapper,children:[(0,c.jsx)("h2",{className:r.Z.section__title,children:"\u041d\u0430\u0448\u0456 \u043d\u043e\u043c\u0435\u0440\u0438"}),(0,c.jsx)("div",{className:r.Z.wrapper,children:(0,c.jsx)("ul",{className:r.Z.list,children:i.map((function(t){var n=t.id,r=t.type,i=t.descr,s=t.image;return(0,c.jsx)(l,{type:r,descr:e(i),image:s},n)}))})})]})}},8517:function(e,t){t.Z={navLink:"Rooms_navLink__zqqKc",prices:"Rooms_prices__5NCfl",thumb:"Rooms_thumb__h8SOL"}},9348:function(e,t,n){n.d(t,{YD:function(){return w}});var r=n(9439),i=n(5671),s=n(3144),o=n(136),a=n(7277),c=n(2791);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}var u=new Map,d=new WeakMap,h=0,f=void 0;function p(e){return Object.keys(e).sort().filter((function(t){return void 0!==e[t]})).map((function(t){return"".concat(t,"_").concat("root"===t?(n=e.root)?(d.has(n)||(h+=1,d.set(n,h.toString())),d.get(n)):"0":e[t]);var n})).toString()}function g(e){var t=p(e),n=u.get(t);if(!n){var r,i=new Map,s=new IntersectionObserver((function(t){t.forEach((function(t){var n,s=t.isIntersecting&&r.some((function(e){return t.intersectionRatio>=e}));e.trackVisibility&&"undefined"===typeof t.isVisible&&(t.isVisible=s),null==(n=i.get(t.target))||n.forEach((function(e){e(s,t)}))}))}),e);r=s.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:s,elements:i},u.set(t,n)}return n}function v(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:f;if("undefined"===typeof window.IntersectionObserver&&void 0!==r){var i=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:"number"===typeof n.threshold?n.threshold:0,time:0,boundingClientRect:i,intersectionRect:i,rootBounds:i}),function(){}}var s=g(n),o=s.id,a=s.observer,c=s.elements,l=c.get(e)||[];return c.has(e)||c.set(e,l),l.push(t),a.observe(e),function(){l.splice(l.indexOf(t),1),0===l.length&&(c.delete(e),a.unobserve(e)),0===c.size&&(a.disconnect(),u.delete(o))}}var m=["children","as","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView","fallbackInView"];function y(e){return"function"!==typeof e.children}c.Component;function w(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.threshold,i=t.delay,s=t.trackVisibility,o=t.rootMargin,a=t.root,l=t.triggerOnce,u=t.skip,d=t.initialInView,h=t.fallbackInView,f=t.onChange,p=c.useState(null),g=(0,r.Z)(p,2),m=g[0],y=g[1],w=c.useRef(),b=c.useState({inView:!!d,entry:void 0}),j=(0,r.Z)(b,2),k=j[0],Z=j[1];w.current=f,c.useEffect((function(){var e;if(!u&&m)return e=v(m,(function(t,n){Z({inView:t,entry:n}),w.current&&w.current(t,n),n.isIntersecting&&l&&e&&(e(),e=void 0)}),{root:a,rootMargin:o,threshold:n,trackVisibility:s,delay:i},h),function(){e&&e()}}),[Array.isArray(n)?n.toString():n,m,a,o,l,u,s,h,i]);var _=null==(e=k.entry)?void 0:e.target,x=c.useRef();m||!_||l||u||x.current===_||(x.current=_,Z({inView:!!d,entry:void 0}));var V=[y,k.inView,k.entry];return V.ref=V[0],V.inView=V[1],V.entry=V[2],V}},5477:function(e){e.exports=JSON.parse('[{"id":"1","type":"\u041d\u0430\u043f\u0456\u0432\u043b\u044e\u043a\u0441","descr":"\u041d\u043e\u043c\u0435\u0440\u0438 \u0432 \u043a\u043e\u0440\u043f\u0443\u0441\u0456 \u0437\u0456 \u0437\u0440\u0443\u0447\u043d\u043e\u0441\u0442\u044f\u043c\u0438. \u041d\u043e\u043c\u0435\u0440\u0438 \u0433\u043e\u0442\u0435\u043b\u044c\u043d\u043e\u0433\u043e \u0442\u0438\u043f\u0443 \u0440\u0456\u0437\u043d\u043e\u0457 \u043a\u043e\u043c\u043f\u043b\u0435\u043a\u0442\u0430\u0446\u0456\u0457 \u043d\u0430 \u0434\u0440\u0443\u0433\u043e\u043c\u0443 \u0442\u0430 \u0442\u0440\u0435\u0442\u044c\u043e\u043c\u0443 \u043f\u043e\u0432\u0435\u0440\u0441\u0456. \u0423 \u043a\u043e\u0436\u043d\u043e\u043c\u0443 \u043d\u043e\u043c\u0435\u0440\u0456 \u0454 \u043e\u043a\u0440\u0435\u043c\u0438\u0439 \u0441\u0430\u043d\u0432\u0443\u0437\u043e\u043b, \u0433\u0430\u0440\u044f\u0447\u0430 \u0432\u043e\u0434\u0430 \u0446\u0456\u043b\u043e\u0434\u043e\u0431\u043e\u0432\u043e. ","image":"kkk.jpg"},{"id":"2","type":"\u0421\u0456\u043c\u0435\u0439\u043d\u0438\u0439","descr":"\u041e\u0434\u043d\u043e\u043f\u043e\u0432\u0435\u0440\u0445\u043e\u0432\u0456 \u0431\u0443\u0434\u0438\u043d\u043e\u0447\u043a\u0438 \u0437\u0456 \u0437\u0440\u0443\u0447\u043d\u043e\u0441\u0442\u044f\u043c\u0438. \u0412 \u0431\u0443\u0434\u0438\u043d\u043e\u0447\u043a\u0443 \u0434\u0432\u0430 \u043d\u043e\u043c\u0435\u0440\u0438, \u043c\u0430\u044e\u0442\u044c \u043e\u043a\u0440\u0435\u043c\u0456 \u0432\u0445\u043e\u0434\u0438. \u041a\u043e\u0436\u0435\u043d \u043d\u043e\u043c\u0435\u0440 \u043c\u0430\u0454 \u0434\u0432\u0456 \u043a\u0456\u043c\u043d\u0430\u0442\u0438. \u0412 \u043e\u0434\u043d\u0456\u0439 \u043a\u0456\u043c\u043d\u0430\u0442\u0456 \u0440\u043e\u0437\u0442\u0430\u0448\u043e\u0432\u0430\u043d\u0438\u0439 \u0440\u043e\u0437\u043a\u043b\u0430\u0434\u043d\u0438\u0439 \u0434\u0438\u0432\u0430\u043d, \u044f\u043a \u0441\u043f\u0430\u043b\u044c\u043d\u0435 \u043c\u0456\u0441\u0446\u0435, \u0432 \u0456\u043d\u0448\u0456\u0439 - \u0434\u0432\u043e\u0441\u043f\u0430\u043b\u044c\u043d\u0435 \u043b\u0456\u0436\u043a\u043e. \u0423 \u043a\u043e\u0436\u043d\u043e\u043c\u0443 \u043d\u043e\u043c\u0435\u0440\u0456 \u0454 \u043e\u043a\u0440\u0435\u043c\u0438\u0439 \u0441\u0430\u043d\u0432\u0443\u0437\u043e\u043b, \u0433\u0430\u0440\u044f\u0447\u0430 \u0432\u043e\u0434\u0430 \u0446\u0456\u043b\u043e\u0434\u043e\u0431\u043e\u0432\u043e. \u0412\u0430\u0440\u0442\u0456\u0441\u0442\u044c \u043d\u043e\u043c\u0435\u0440\u0430 \u0437\u0430\u043b\u0435\u0436\u0438\u0442\u044c \u0432\u0456\u0434 \u043a\u0456\u043b\u044c\u043a\u043e\u0441\u0442\u0456 \u043f\u0440\u043e\u0436\u0438\u0432\u0430\u044e\u0447\u0438\u0445. ","image":"f41.jpg"},{"id":"3","type":"\u041a\u043e\u043c\u0444\u043e\u0440\u0442","descr":"\u0414\u0432\u043e\u043f\u043e\u0432\u0435\u0440\u0445\u043e\u0432\u0456 \u0431\u0443\u0434\u0438\u043d\u043e\u0447\u043a\u0438 \u0443 \u043c\u043e\u0440\u044f \u0437\u0456 \u0437\u0440\u0443\u0447\u043d\u043e\u0441\u0442\u044f\u043c\u0438. \u0412 \u0431\u0443\u0434\u0438\u043d\u043e\u0447\u043a\u0443 \u0434\u0432\u0430 \u043d\u043e\u043c\u0435\u0440\u0438, \u043c\u0430\u044e\u0442\u044c \u043e\u043a\u0440\u0435\u043c\u0456 \u0432\u0445\u043e\u0434\u0438. \u041d\u0430 \u043f\u0435\u0440\u0448\u043e\u043c\u0443 \u043f\u043e\u0432\u0435\u0440\u0441\u0456 \u0432\u0435\u043b\u0438\u043a\u0438\u0439 \u0447\u043e\u0442\u0438\u0440\u0438\u043c\u0456\u0441\u043d\u0438\u0439 \u043d\u043e\u043c\u0435\u0440, \u043d\u0430 \u0434\u0440\u0443\u0433\u043e\u043c\u0443 \u043f\u043e\u0432\u0435\u0440\u0441\u0456 \u0440\u043e\u0437\u0442\u0430\u0448\u043e\u0432\u0430\u043d\u0438\u0439 \u0434\u0432\u043e\u043c\u0456\u0441\u043d\u0438\u0439 \u043d\u043e\u043c\u0435\u0440. \u0423 \u043a\u043e\u0436\u043d\u043e\u043c\u0443 \u043d\u043e\u043c\u0435\u0440\u0456 \u0454 \u043e\u043a\u0440\u0435\u043c\u0438\u0439 \u0441\u0430\u043d\u0432\u0443\u0437\u043e\u043b, \u0433\u0430\u0440\u044f\u0447\u0430 \u0432\u043e\u0434\u0430 \u0446\u0456\u043b\u043e\u0434\u043e\u0431\u043e\u0432\u043e.","image":"b.jpg"},{"id":"4","type":"\u0415\u043a\u043e\u043d\u043e\u043c","descr":"\u041e\u0434\u043d\u043e\u043f\u043e\u0432\u0435\u0440\u0445\u043e\u0432\u0456 \u0431\u044e\u0434\u0436\u0435\u0442\u043d\u0456 \u0431\u0443\u0434\u0438\u043d\u043e\u0447\u043a\u0438 \u0437\u0456 \u0437\u0440\u0443\u0447\u043d\u043e\u0441\u0442\u044f\u043c\u0438. \u0412 \u0431\u0443\u0434\u0438\u043d\u043e\u0447\u043a\u0443 \u043f\u043e \u0434\u0432\u0430 \u043d\u043e\u043c\u0435\u0440\u0438, \u043c\u0430\u044e\u0442\u044c \u043e\u043a\u0440\u0435\u043c\u0456 \u0432\u0445\u043e\u0434\u0438. \u041d\u043e\u043c\u0435\u0440\u0438 \u0440\u0456\u0437\u043d\u043e\u0457 \u043a\u043e\u043c\u043f\u043b\u0435\u043a\u0442\u0430\u0446\u0456\u0457. \u0423 \u043a\u043e\u0436\u043d\u043e\u043c\u0443 \u043d\u043e\u043c\u0435\u0440\u0456 \u0454 \u043e\u043a\u0440\u0435\u043c\u0438\u0439 \u0441\u0430\u043d\u0432\u0443\u0437\u043e\u043b, \u0433\u0430\u0440\u044f\u0447\u0430 \u0432\u043e\u0434\u0430 \u0446\u0456\u043b\u043e\u0434\u043e\u0431\u043e\u0432\u043e. ","image":"e1.jpg"},{"id":"5","type":"\u0421\u0442\u0430\u043d\u0434\u0430\u0440\u0442","descr":"\u041e\u0434\u043d\u043e\u043f\u043e\u0432\u0435\u0440\u0445\u043e\u0432\u0456 \u0431\u0443\u0434\u0438\u043d\u043e\u0447\u043a\u0438 \u0437\u0456 \u0437\u0440\u0443\u0447\u043d\u043e\u0441\u0442\u044f\u043c\u0438. \u0412 \u0431\u0443\u0434\u0438\u043d\u043e\u0447\u043a\u0443 \u043f\u043e \u0434\u0432\u0430 \u043d\u043e\u043c\u0435\u0440\u0438, \u043c\u0430\u044e\u0442\u044c \u043e\u043a\u0440\u0435\u043c\u0456 \u0432\u0445\u043e\u0434\u0438. \u041a\u043e\u0436\u0435\u043d \u043d\u043e\u043c\u0435\u0440 \u043c\u0430\u0454 \u0434\u0432\u0456 \u043a\u0456\u043c\u043d\u0430\u0442\u0438. \u0412 \u043e\u0434\u043d\u0456\u0439 \u043a\u0456\u043c\u043d\u0430\u0442\u0456 \u043e\u0434\u043d\u043e\u0441\u043f\u0430\u043b\u044c\u043d\u0435 \u043b\u0456\u0436\u043a\u043e, \u0432 \u0456\u043d\u0448\u0456\u0439 - \u0434\u0432\u043e\u0441\u043f\u0430\u043b\u044c\u043d\u0435 \u043b\u0456\u0436\u043a\u043e. \u0423 \u043a\u043e\u0436\u043d\u043e\u043c\u0443 \u043d\u043e\u043c\u0435\u0440\u0456 \u0454 \u043e\u043a\u0440\u0435\u043c\u0438\u0439 \u0441\u0430\u043d\u0432\u0443\u0437\u043e\u043b, \u0433\u0430\u0440\u044f\u0447\u0430 \u0432\u043e\u0434\u0430 \u0446\u0456\u043b\u043e\u0434\u043e\u0431\u043e\u0432\u043e. ","image":"vit1.jpg"}]')}}]);
//# sourceMappingURL=620.12c67a4b.chunk.js.map