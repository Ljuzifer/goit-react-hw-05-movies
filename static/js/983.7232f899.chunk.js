"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[983],{206:function(e,t,n){var r=n(689),a=n(87),c=n(184);t.Z=function(e){var t=e.movies,n=(0,r.TH)();return(0,c.jsx)(c.Fragment,{children:t.map((function(e){return(0,c.jsx)("li",{children:(0,c.jsx)(a.rU,{to:"/movies/".concat(e.id),state:{from:n},children:e.title})},e.id)}))})}},928:function(e,t,n){n.r(t);var r=n(433),a=n(861),c=n(439),i=n(757),s=n.n(i),u=n(73),o=n(791),f=n(206),d=n(390),l=n(184);t.default=function(){var e=(0,o.useState)([]),t=(0,c.Z)(e,2),n=t[0],i=t[1];return(0,o.useEffect)((function(){u.Am.loading("Wait a minute...",{duration:700}),setTimeout((0,a.Z)(s().mark((function e(){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,d.f)("/trending/movie/week");case 3:t=e.sent,n=t.results,i((0,r.Z)(n)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:return e.prev=11,u.Am.success("So, what trending this week...?"),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])}))),800)}),[]),(0,l.jsxs)("main",{children:[(0,l.jsx)("h2",{children:"Trending this week..."}),(0,l.jsx)("ul",{children:(0,l.jsx)(f.Z,{movies:n})})]})}},390:function(e,t,n){n.d(t,{f:function(){return s}});var r=n(861),a=n(757),c=n.n(a),i=n(243);i.Z.defaults.baseURL="https://api.themoviedb.org/3";var s=function(){var e=(0,r.Z)(c().mark((function e(t,n){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(t,"?api_key=").concat("daca860db741facb25da0efbe03487a5").concat(null!==n&&void 0!==n?n:""));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=983.7232f899.chunk.js.map