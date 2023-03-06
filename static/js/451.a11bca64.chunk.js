"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[451,403,318],{4451:function(e,t,r){r.r(t);var n=r(4403),i=r(7318),s=r(1289),a=r(9348),o=r(184);t.default=function(){var e=(0,a.YD)({threshold:0}),t=e.ref,r=e.inView;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{className:s.Z.hero,"aria-label":"hero",children:(0,o.jsxs)("h2",{className:r?"".concat(s.Z.hero__title," ").concat(s.Z.show):s.Z.hero__title,ref:t,children:["\u0415\u043d\u0435\u0440\u0433\u0435\u0442\u0438\u043a",(0,o.jsx)("span",{className:s.Z.hero__sublogo,children:"\u0431\u0430\u0437\u0430 \u0432\u0456\u0434\u043f\u043e\u0447\u0438\u043d\u043a\u0443"})]})}),(0,o.jsxs)("div",{className:s.Z.container,children:[(0,o.jsx)(n.default,{}),(0,o.jsx)(i.default,{})]})]})}},7318:function(e,t,r){r.r(t);var n=r(1289),i=r(184);t.default=function(){return(0,i.jsxs)("section",{className:n.Z.wrapper,children:[(0,i.jsx)("h2",{className:n.Z.section__title,children:"\u042f\u043a \u043d\u0430\u0441 \u0437\u043d\u0430\u0439\u0442\u0438"}),(0,i.jsx)("div",{className:n.Z.wrapper,children:(0,i.jsx)("iframe",{className:n.Z.map,src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2739.9273150320287!2d31.17733991550444!3d46.6281980630412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c66adf95ed7f39%3A0x9e5b87c21e66c3b8!2z0JXQvdC10YDQs9C10YLQuNC6!5e0!3m2!1suk!2s!4v1676645330052!5m2!1suk!2s",title:"googleMap",loading:"lazy"})})]})}},4403:function(e,t,r){r.r(t),r.d(t,{default:function(){return d}});var n=r(1289),i=r(5477),s=r(8617),a=r(1087),o=r(9348),c=r(184),l=function(e){var t=e.type,r=e.descr,i=e.image,l=(0,o.YD)({threshold:0}),d=l.ref,u=l.inView;return(0,c.jsx)("li",{ref:d,className:u?"".concat(n.Z.item," ").concat(n.Z.show):n.Z.item,children:(0,c.jsxs)(a.OL,{to:"/rooms/".concat(t),className:s.Z.navLink,children:[(0,c.jsx)("div",{className:n.Z.imgWrapper,children:(0,c.jsx)("img",{className:n.Z.roomImg,src:"/agat/".concat(null===i||void 0===i?void 0:i.split(".")[0],"_480.jpg"),width:"320",height:"240",alt:t})}),(0,c.jsxs)("div",{className:n.Z.infoWrapper,children:[(0,c.jsx)("h3",{className:n.Z.title,children:t}),(0,c.jsx)("ul",{className:s.Z.prices,children:(0,c.jsx)("li",{className:n.Z.text,children:r})})]})]})})},d=function(){var e=function(e){var t=e.split(".");return"".concat(t[0],"...")};return(0,c.jsxs)("section",{className:n.Z.wrapper,children:[(0,c.jsx)("h2",{className:n.Z.section__title,children:"\u041d\u0430\u0448\u0456 \u043d\u043e\u043c\u0435\u0440\u0438"}),(0,c.jsx)("div",{className:n.Z.wrapper,children:(0,c.jsx)("ul",{className:n.Z.list,children:i.map((function(t){var r=t.id,n=t.type,i=t.descr,s=t.image;return(0,c.jsx)(l,{type:n,descr:e(i),image:s},r)}))})})]})}},8617:function(e,t){t.Z={navLink:"Rooms_navLink__cqxjT",prices:"Rooms_prices__yW-Ff",thumb:"Rooms_thumb__Q7T+x"}},9348:function(e,t,r){r.d(t,{YD:function(){return j}});var n=r(9439),i=r(5671),s=r(3144),a=r(136),o=r(7277),c=r(2791);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l.apply(this,arguments)}var d=new Map,u=new WeakMap,h=0,f=void 0;function m(e){return Object.keys(e).sort().filter((function(t){return void 0!==e[t]})).map((function(t){return"".concat(t,"_").concat("root"===t?(r=e.root)?(u.has(r)||(h+=1,u.set(r,h.toString())),u.get(r)):"0":e[t]);var r})).toString()}function p(e){var t=m(e),r=d.get(t);if(!r){var n,i=new Map,s=new IntersectionObserver((function(t){t.forEach((function(t){var r,s=t.isIntersecting&&n.some((function(e){return t.intersectionRatio>=e}));e.trackVisibility&&"undefined"===typeof t.isVisible&&(t.isVisible=s),null==(r=i.get(t.target))||r.forEach((function(e){e(s,t)}))}))}),e);n=s.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),r={id:t,observer:s,elements:i},d.set(t,r)}return r}function g(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:f;if("undefined"===typeof window.IntersectionObserver&&void 0!==n){var i=e.getBoundingClientRect();return t(n,{isIntersecting:n,target:e,intersectionRatio:"number"===typeof r.threshold?r.threshold:0,time:0,boundingClientRect:i,intersectionRect:i,rootBounds:i}),function(){}}var s=p(r),a=s.id,o=s.observer,c=s.elements,l=c.get(e)||[];return c.has(e)||c.set(e,l),l.push(t),o.observe(e),function(){l.splice(l.indexOf(t),1),0===l.length&&(c.delete(e),o.unobserve(e)),0===c.size&&(o.disconnect(),d.delete(a))}}var v=["children","as","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView","fallbackInView"];function y(e){return"function"!==typeof e.children}c.Component;function j(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.threshold,i=t.delay,s=t.trackVisibility,a=t.rootMargin,o=t.root,l=t.triggerOnce,d=t.skip,u=t.initialInView,h=t.fallbackInView,f=t.onChange,m=c.useState(null),p=(0,n.Z)(m,2),v=p[0],y=p[1],j=c.useRef(),w=c.useState({inView:!!u,entry:void 0}),x=(0,n.Z)(w,2),b=x[0],Z=x[1];j.current=f,c.useEffect((function(){var e;if(!d&&v)return e=g(v,(function(t,r){Z({inView:t,entry:r}),j.current&&j.current(t,r),r.isIntersecting&&l&&e&&(e(),e=void 0)}),{root:o,rootMargin:a,threshold:r,trackVisibility:s,delay:i},h),function(){e&&e()}}),[Array.isArray(r)?r.toString():r,v,o,a,l,d,s,h,i]);var _=null==(e=b.entry)?void 0:e.target,k=c.useRef();v||!_||l||d||k.current===_||(k.current=_,Z({inView:!!u,entry:void 0}));var N=[y,b.inView,b.entry];return N.ref=N[0],N.inView=N[1],N.entry=N[2],N}},5477:function(e){e.exports=JSON.parse('[{"id":"1","type":"\u041d\u0430\u043f\u0456\u0432\u043b\u044e\u043a\u0441","descr":"\u041d\u043e\u043c\u0435\u0440\u0438 \u0432 \u043a\u043e\u0440\u043f\u0443\u0441\u0456 \u0437\u0456 \u0437\u0440\u0443\u0447\u043d\u043e\u0441\u0442\u044f\u043c\u0438. \u041d\u043e\u043c\u0435\u0440\u0438 \u0433\u043e\u0442\u0435\u043b\u044c\u043d\u043e\u0433\u043e \u0442\u0438\u043f\u0443 \u0440\u0456\u0437\u043d\u043e\u0457 \u043a\u043e\u043c\u043f\u043b\u0435\u043a\u0442\u0430\u0446\u0456\u0457 \u043d\u0430 \u0434\u0440\u0443\u0433\u043e\u043c\u0443 \u0442\u0430 \u0442\u0440\u0435\u0442\u044c\u043e\u043c\u0443 \u043f\u043e\u0432\u0435\u0440\u0441\u0456. \u0412 \u043a\u043e\u0436\u043d\u043e\u043c\u0443 \u043d\u043e\u043c\u0435\u0440\u0456 \u0454 \u043e\u043a\u0440\u0435\u043c\u0438\u0439 \u0441\u0430\u043d\u0432\u0443\u0437\u043e\u043b, \u0433\u0430\u0440\u044f\u0447\u0430 \u0432\u043e\u0434\u0430 \u0446\u0456\u043b\u043e\u0434\u043e\u0431\u043e\u0432\u043e. ","image":"kkk.jpg"},{"id":"2","type":"\u0421\u0456\u043c\u0435\u0439\u043d\u0438\u0439","descr":"\u041e\u0434\u043d\u043e\u043f\u043e\u0432\u0435\u0440\u0445\u043e\u0432\u0456 \u0431\u0443\u0434\u0438\u043d\u043e\u0447\u043a\u0438 \u0437\u0456 \u0437\u0440\u0443\u0447\u043d\u043e\u0441\u0442\u044f\u043c\u0438. \u0412 \u0431\u0443\u0434\u0438\u043d\u043e\u0447\u043a\u0443 \u0434\u0432\u0430 \u043d\u043e\u043c\u0435\u0440\u0438, \u043c\u0430\u044e\u0442\u044c \u043e\u043a\u0440\u0435\u043c\u0456 \u0432\u0445\u043e\u0434\u0438. \u041a\u043e\u0436\u0435\u043d \u043d\u043e\u043c\u0435\u0440 \u043c\u0430\u0454 \u0434\u0432\u0456 \u043a\u0456\u043c\u043d\u0430\u0442\u0438. \u0412 \u043e\u0434\u043d\u0456\u0439 \u043a\u0456\u043c\u043d\u0430\u0442\u0456 \u0440\u043e\u0437\u0442\u0430\u0448\u043e\u0432\u0438\u043d\u0438\u0439 \u0440\u043e\u0441\u043a\u043b\u0430\u0434\u043d\u0438\u0439 \u0434\u0438\u0432\u0430\u043d, \u044f\u043a \u0441\u043f\u0430\u043b\u044c\u043d\u0435 \u043c\u0456\u0441\u0446\u0435, \u0432 \u0456\u043d\u0448\u0456\u0439 - \u0434\u0432\u043e\u0441\u043f\u0430\u043b\u043d\u0435 \u043b\u0456\u0436\u043a\u043e. \u0412 \u043a\u043e\u0436\u043d\u043e\u043c\u0443 \u043d\u043e\u043c\u0435\u0440\u0456 \u0454 \u043e\u043a\u0440\u0435\u043c\u0438\u0439 \u0441\u0430\u043d\u0432\u0443\u0437\u043e\u043b, \u0433\u0430\u0440\u044f\u0447\u0430 \u0432\u043e\u0434\u0430 \u0446\u0456\u043b\u043e\u0434\u043e\u0431\u043e\u0432\u043e. \u0412\u0430\u0440\u0442\u0456\u0441\u0442\u044c \u043d\u043e\u043c\u0435\u0440\u0430 \u0437\u0430\u043b\u0435\u0436\u0438\u0442\u044c \u0432\u0456\u0434 \u043a\u0456\u043b\u044c\u043a\u043e\u0441\u0442\u0456 \u043f\u0440\u043e\u0436\u0438\u0432\u0430\u044e\u0447\u0438\u0445. ","image":"f41.jpg"},{"id":"3","type":"\u041a\u043e\u043c\u0444\u043e\u0440\u0442","descr":"\u0414\u0432\u043e\u043f\u043e\u0432\u0435\u0440\u0445\u043e\u0432\u0456 \u0431\u0443\u0434\u0438\u043d\u043e\u0447\u043a\u0438 \u0443 \u043c\u043e\u0440\u044f \u0437\u0456 \u0437\u0440\u0443\u0447\u043d\u043e\u0441\u0442\u044f\u043c\u0438. \u0412 \u0431\u0443\u0434\u0438\u043d\u043e\u0447\u043a\u0443 \u0434\u0432\u0430 \u043d\u043e\u043c\u0435\u0440\u0438, \u043c\u0430\u044e\u0442\u044c \u043e\u043a\u0440\u0435\u043c\u0456 \u0432\u0445\u043e\u0434\u0438. \u041d\u0430 \u043f\u0435\u0440\u0448\u043e\u043c\u0443 \u043f\u043e\u0432\u0435\u0440\u0456 \u0432\u0435\u043b\u0438\u043a\u0438\u0439 \u0447\u043e\u0442\u0438\u0440\u0438\u043c\u0456\u0441\u043d\u0438\u0439 \u043d\u043e\u043c\u0435\u0440, \u043d\u0430 \u0434\u0440\u0443\u0433\u043e\u043c\u0443 \u043f\u043e\u0432\u0435\u0440\u0441\u0456 \u0440\u043e\u0437\u0442\u0430\u0448\u043e\u0432\u0430\u043d\u0438\u0439 \u0434\u0432\u043e\u043c\u0456\u0441\u043d\u0438\u0439 \u043d\u043e\u043c\u0435\u0440. \u0412 \u043a\u043e\u0436\u043d\u043e\u043c\u0443 \u043d\u043e\u043c\u0435\u0440\u0456 \u0454 \u043e\u043a\u0440\u0435\u043c\u0438\u0439 \u0441\u0430\u043d\u0432\u0443\u0437\u043e\u043b, \u0433\u0430\u0440\u044f\u0447\u0430 \u0432\u043e\u0434\u0430 \u0446\u0456\u043b\u043e\u0434\u043e\u0431\u043e\u0432\u043e.","image":"b.jpg"},{"id":"4","type":"\u0415\u043a\u043e\u043d\u043e\u043c","descr":"\u041e\u0434\u043d\u043e\u043f\u043e\u0432\u0435\u0440\u0445\u043e\u0432\u0456 \u0431\u044e\u0434\u0436\u0435\u0442\u043d\u0456 \u0431\u0443\u0434\u0438\u043d\u043e\u0447\u043a\u0438 \u0437\u0456 \u0437\u0440\u0443\u0447\u043d\u043e\u0441\u0442\u044f\u043c\u0438. \u0412 \u0431\u0443\u0434\u0438\u043d\u043e\u0447\u043a\u0443 \u043f\u043e \u0434\u0432\u0430 \u043d\u043e\u043c\u0435\u0440\u0438, \u043c\u0430\u044e\u0442\u044c \u043e\u043a\u0440\u0435\u043c\u0456 \u0432\u0445\u043e\u0434\u0438. \u041d\u043e\u043c\u0435\u0440\u0438 \u0440\u0456\u0437\u043d\u043e\u0457 \u043a\u043e\u043c\u043f\u043b\u0435\u043a\u0442\u0430\u0446\u0456\u0457 ","image":"e1.jpg"},{"id":"5","type":"\u0421\u0442\u0430\u043d\u0434\u0430\u0440\u0442","descr":"\u041e\u0434\u043d\u043e\u043f\u043e\u0432\u0435\u0440\u0445\u043e\u0432\u0456 \u0431\u0443\u0434\u0438\u043d\u043e\u0447\u043a\u0438 \u0437\u0456 \u0437\u0440\u0443\u0447\u043d\u043e\u0441\u0442\u044f\u043c\u0438. \u0412 \u0431\u0443\u0434\u0438\u043d\u043e\u0447\u043a\u0443 \u043f\u043e \u0434\u0432\u0430 \u043d\u043e\u043c\u0435\u0440\u0438, \u043c\u0430\u044e\u0442\u044c \u043e\u043a\u0440\u0435\u043c\u0456 \u0432\u0445\u043e\u0434\u0438. \u041a\u043e\u0436\u0435\u043d \u043d\u043e\u043c\u0435\u0440 \u043c\u0430\u0454 \u0434\u0432\u0456 \u043a\u0456\u043c\u043d\u0430\u0442\u0438. \u0412 \u043e\u0434\u043d\u0456\u0439 \u043a\u0456\u043c\u043d\u0430\u0442\u0456 \u043e\u0434\u043d\u043e\u0441\u043f\u0430\u043b\u044c\u043d\u0435 \u043b\u0456\u0436\u043a\u043e, \u0432 \u0456\u043d\u0448\u0456\u0439 - \u0434\u0432\u043e\u0441\u043f\u0430\u043b\u043d\u0435 \u043b\u0456\u0436\u043a\u043e. \u0412 \u043a\u043e\u0436\u043d\u043e\u043c\u0443 \u043d\u043e\u043c\u0435\u0440\u0456 \u0454 \u043e\u043a\u0440\u0435\u043c\u0438\u0439 \u0441\u0430\u043d\u0432\u0443\u0437\u043e\u043b, \u0433\u0430\u0440\u044f\u0447\u0430 \u0432\u043e\u0434\u0430 \u0446\u0456\u043b\u043e\u0434\u043e\u0431\u043e\u0432\u043e. ","image":"vit1.jpg"}]')}}]);
//# sourceMappingURL=451.a11bca64.chunk.js.map