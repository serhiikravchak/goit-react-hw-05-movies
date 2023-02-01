"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[644],{644:function(n,e,t){t.r(e),t.d(e,{default:function(){return A}});var r,a,u,i,c,o,s,p=t(861),f=t(439),l=t(687),d=t.n(l),h=t(87),m=t(689),x=t(791),g=t(174),v=t(168),b=t(934),w=b.Z.form(r||(r=(0,v.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 10px;\n  max-width: 320px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n  border: 1px solid grey;\n"]))),y=b.Z.input(a||(a=(0,v.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 15px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n  ::placeholder {\n    font: inherit;\n    font-size: 13px;\n  }\n"]))),Z=b.Z.button(u||(u=(0,v.Z)(["\n  display: inline-block;\n  width: 30px;\n  height: 30px;\n  border: 0;\n  background-image: url('https://uxwing.com/wp-content/themes/uxwing/download/user-interface/search-icon.png');\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  :hover {\n    opacity: 1;\n  }\n"]))),k=b.Z.span(i||(i=(0,v.Z)(["\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  clip-path: inset(50%);\n  border: 0;\n"]))),j=t(184),S=function(n){var e=n.onSubmit;return(0,j.jsxs)(w,{onSubmit:e,children:[(0,j.jsx)(y,{name:"query",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies"}),(0,j.jsx)(Z,{children:(0,j.jsx)(k,{children:"Search"})})]})},_=b.Z.main(c||(c=(0,v.Z)(["\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n"]))),q=b.Z.ul(o||(o=(0,v.Z)([""]))),U=b.Z.li(s||(s=(0,v.Z)(["\n  margin-bottom: 10px;\n"]))),z=t(390),A=function(){var n=(0,x.useState)([]),e=(0,f.Z)(n,2),t=e[0],r=e[1],a=(0,h.lr)(),u=(0,f.Z)(a,2),i=u[0],c=u[1],o=(0,m.TH)(),s=i.get("query");(0,x.useEffect)((function(){if(s){var n=function(){var n=(0,p.Z)(d().mark((function n(){var e;return d().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,z.qF(s);case 3:if(0!==(e=n.sent).total_result){n.next=7;break}return g.Am.warn("Your search did not return any results."),n.abrupt("return");case 7:r(e.results),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),g.Am.error("Oops something went wrong, try again.");case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(){return n.apply(this,arguments)}}();n()}}),[s]);return(0,j.jsxs)(_,{children:[(0,j.jsx)(S,{onSubmit:function(n){n.preventDefault(),""!==n.target.query.value.trim()?(c({query:n.target.query.value}),n.target.query.value=""):g.Am.warn("Search field mustn`t be empty")}}),t&&(0,j.jsx)(q,{children:t.map((function(n){var e=n.id,t=n.title;return(0,j.jsx)(U,{children:(0,j.jsx)(h.rU,{to:"".concat(e),state:{from:o},children:t})},e)}))})]})}},390:function(n,e,t){t.d(e,{Df:function(){return o},TP:function(){return p},qF:function(){return s},tx:function(){return l},zv:function(){return f}});var r=t(861),a=t(687),u=t.n(a),i=t(179),c="27a76f0869afd59eafccef7d6d986c20";i.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o=function(){var n=(0,r.Z)(u().mark((function n(){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("trending/movie/day?api_key=".concat(c));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("search/movie?api_key=".concat(c,"&language=en-US&page=1&include_adult=false&query=").concat(e));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(e,"?api_key=").concat(c,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(e,"/credits?api_key=").concat(c,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(e,"/reviews?api_key=").concat(c,"&language=en-US&page=1"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=644.8e54a0f6.chunk.js.map