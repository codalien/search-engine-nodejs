(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{45:function(e,t,a){e.exports=a(77)},50:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(35),s=a.n(c),o=(a(50),a(5)),i=a(6),l=a(8),u=a(7),h=a(9),d=a(18),m=a(10),p=a(44),b=a(32),g=a(37),f=a.n(g),O=(a(57),a(13)),v="GET_CONFIG",j="GET_CONFIG_SUCCESS",E="GET_CONFIG_ERROR",y={loading:!1,teamMembers:[],posts:[]},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object(O.a)({},e,{loading:!0});case j:return Object(O.a)({},e,{loading:!1,teamMembers:t.teamMembers,posts:t.posts});case E:return Object(O.a)({},e,{loading:!1});default:return e}},w=a(19),C=a.n(w),N=a(27),x=a(31),S="http://localhost:3001",q=function(){var e=Object(x.a)(C.a.mark(function e(t){var a;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(S+t);case 2:return a=e.sent,e.next=5,a.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),P=C.a.mark(L),I=C.a.mark(K);function L(e){var t;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,q("config");case 3:return t=e.sent,e.next=6,Object(N.a)(Object(O.a)({type:j},t));case 6:e.next=12;break;case 8:return e.prev=8,e.t0=e.catch(0),e.next=12,Object(N.a)({type:E});case 12:case"end":return e.stop()}},P,null,[[0,8]])}function K(){return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(N.b)(v,L);case 2:case"end":return e.stop()}},I)}var B={reducer:k,saga:K},U=Object(p.a)(),F={key:"root",storage:f.a},M=Object(m.e)(Object(b.a)(F,Object(m.c)({ui:B.reducer})),Object(m.d)(Object(m.a)(U)));U.run(B.saga);var R=Object(b.b)(M),G=a(38),T=(a(60),a(61),a(62),a(63),a(64),a(80)),_=function(){return!1},H=a(82),W=a(79),D=a(81),J=a(20),A=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={buttonClicked:e.buttonClick,searchKeyword:e.q,pageNum:e.page},a.onSearch=a.onSearch.bind(Object(J.a)(Object(J.a)(a))),a.handleKeyPress=a.handleKeyPress.bind(Object(J.a)(Object(J.a)(a))),a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"buttonClick",value:function(e){var t="/search?q="+e;window.location.assign(t)}},{key:"onTodoChange",value:function(e){this.setState({searchKeyword:e})}},{key:"onSearch",value:function(){if(!this.state.searchKeyword)return"";var e=encodeURIComponent(this.state.searchKeyword);"function"==typeof this.state.buttonClicked?this.state.buttonClicked(e):this.buttonClick(e)}},{key:"handleKeyPress",value:function(e){"Enter"===e.key&&this.onSearch()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"search-bar"},r.a.createElement("input",{className:"text-field",value:this.state.searchKeyword,id:"keyword",type:"search",onChange:function(t){return e.onTodoChange(t.target.value)},onKeyPress:this.handleKeyPress,onFocus:this.props.addClass,onBlur:this.props.removeClass}),r.a.createElement("div",{className:"search-icon"},r.a.createElement("img",{src:"/images/search.svg",alt:"Search Icon",onClick:this.onSearch})))}}]),t}(n.Component),$=Object(D.a)(A),z=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"wrapper-section"},r.a.createElement("div",{className:"google-search-row"},r.a.createElement("div",{className:"iner-section"},r.a.createElement("div",{className:"search-logo"},r.a.createElement("img",{src:"/images/googlelogo.png",alt:"logo"})),r.a.createElement($,{query:{q:""}}),r.a.createElement("p",{className:"search-des"},"The search engine that respects your privacy."))))}}]),t}(n.Component),Q=Object(D.a)(Object(d.b)(function(e){var t=e.ui;return Object(O.a)({},t)})(z)),V=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={dataObj:e.result},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"content-row"},r.a.createElement("div",{className:"heading-title"},r.a.createElement("a",{href:this.state.dataObj.link},r.a.createElement("span",null,this.state.dataObj.link),r.a.createElement("div",{className:"link-title"},this.state.dataObj.title))),r.a.createElement("div",{className:"description"},this.state.dataObj.snippet))}}]),t}(n.Component),X=Object(D.a)(V),Y=a(41),Z=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(Y.a,{speed:2,width:1920,height:120,viewBox:"0 0 1920 120",backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb"},r.a.createElement("rect",{x:"0",y:"0",rx:"3",ry:"3",width:"500",height:"18"}),r.a.createElement("rect",{x:"0",y:"28",rx:"3",ry:"3",width:"1000",height:"12"}),r.a.createElement("rect",{x:"0",y:"43",rx:"3",ry:"3",width:"800",height:"12"}),r.a.createElement("rect",{x:"0",y:"58",rx:"3",ry:"3",width:"600",height:"12"}))}}]),t}(n.Component),ee=Object(D.a)(Z),te=a(42),ae=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return this.props.index===parseInt(this.props.currPage)?r.a.createElement("li",{className:"page-item active"},r.a.createElement("span",{className:"page-link"}," ",this.props.index)):r.a.createElement("li",{className:"page-item page-link",onClick:function(){return e.props.onPageChange(e.props.index)}},this.props.index)}}]),t}(n.Component),ne=Object(D.a)(ae),re=a(43),ce=a.n(re),se=function(e){function t(e){var a;Object(o.a)(this,t),a=Object(l.a)(this,Object(u.a)(t).call(this,e));var n=ce.a.parse(a.props.location.search);console.log(n),n.page=n.page?n.page:1,n.q=n.q?n.q:"";var r=5+parseInt(n.page);return a.state={error:null,isLoaded:!1,data:[],q:n.q,page:n.page,backendUrl:"http://localhost:3000/api/search?search=",lastPage:r,totalPage:5},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"onSearch",value:function(e){this.setState({q:e},function(){this.onPageChange(1)})}},{key:"search",value:function(e,t){var a="?q="+e+"&page="+t,n=this.state.backendUrl+e+"&page="+t;this.props.history.push(a),this.setState({isLoaded:!1,data:[]}),this.getSearchResults(n)}},{key:"onPageChange",value:function(e){var t=parseInt(this.state.totalPage)+parseInt(e);console.log("lastpage ",t),this.setState({lastPage:t,page:e},function(){this.search(this.state.q,e)})}},{key:"addClassOnFocus",value:function(){document.getElementById("searchHeader").classList.add("on-focus"),document.querySelector("body").classList.add("onfocus-body")}},{key:"removeClassOnBlur",value:function(){document.getElementById("searchHeader").classList.remove("on-focus"),document.querySelector("body").classList.remove("onfocus-body")}},{key:"componentWillMount",value:function(){this.state.q?this.genSearchUrl():this.props.history.replace("/")}},{key:"genSearchUrl",value:function(){var e=this.state.backendUrl+this.state.q+"&page="+this.state.page;this.getSearchResults(e)}},{key:"getSearchResults",value:function(e){var t=this;fetch(e).then(function(e){return e.json()}).then(function(e){t.setState({isLoaded:!0,data:e})},function(e){console.log("error ",e),t.setState({error:!0})})}},{key:"render",value:function(){for(var e=this,t=[],a=this.state.page,n=this.state.lastPage;a<n;)t.push(a++);return r.a.createElement("div",null,r.a.createElement("div",{className:"search-result-header clearfix"},r.a.createElement("a",{href:"/",className:"logo-google"},r.a.createElement("img",{src:"images/googlelogo.png",className:"header-logo",alt:"logo"})),r.a.createElement("div",{className:"search-header",id:"searchHeader"},r.a.createElement("i",{className:"backArrow"},r.a.createElement("img",{src:"images/back-arrow.jpg"})),r.a.createElement($,{buttonClick:this.onSearch.bind(this),q:this.state.q,page:this.state.page,addClass:this.addClassOnFocus.bind(this),removeClass:this.removeClassOnBlur.bind(this)}))),r.a.createElement("section",{className:"wrapper-section result-wrapper"},r.a.createElement("section",{className:"inner-content"},r.a.createElement("div",{className:"content-main"},this.state.isLoaded?this.state.data.organic_results.map(function(e){return r.a.createElement(X,{result:e,key:e.position})}):r.a.createElement(r.a.Fragment,null,r.a.createElement(ee,null),r.a.createElement(ee,null),r.a.createElement(ee,null),r.a.createElement(ee,null),r.a.createElement(ee,null),r.a.createElement(ee,null),r.a.createElement(ee,null),r.a.createElement(ee,null),r.a.createElement(ee,null),r.a.createElement(ee,null)),this.state.isLoaded?r.a.createElement("div",{className:"left-content"},r.a.createElement("div",{className:"pagination-section"},r.a.createElement("nav",{"aria-label":"..."},r.a.createElement("ul",{className:"pagination"},t.map(function(t){return r.a.createElement(ne,{key:t,index:t,currPage:e.state.page,onPageChange:e.onPageChange.bind(e)})}))))):""),this.state.isLoaded&&this.state.data.social?r.a.createElement("div",{className:"socials"},r.a.createElement("div",{className:"social-heading"},"Social"),this.state.data.social.tweets.map(function(e){return r.a.createElement("div",{className:"tweets"},r.a.createElement(te.a,{key:e,tweetId:e}))})):"")))}}]),t}(n.Component),oe=Object(D.a)(Object(d.b)(function(e){var t=e.ui;return Object(O.a)({},t)})(se)),ie=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return console.log("not found"),r.a.createElement("div",{className:"error-heading-page"},r.a.createElement("div",{className:"page-title"},"404 page not found"))}}]),t}(n.Component),le=Object(D.a)(Object(d.b)(function(e){var t=e.ui;return Object(O.a)({},t)})(ie)),ue=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={sidebarOpen:!1,isMobile:_()},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidUpdate",value:function(e){}},{key:"render",value:function(){return r.a.createElement("section",{className:"main-section"},r.a.createElement(H.a,null,r.a.createElement(W.a,{exact:!0,path:"/",component:Q}),r.a.createElement(W.a,{path:"/search",component:oe}),r.a.createElement(W.a,{component:le})))}}]),t}(n.Component),he=Object(D.a)(ue),de=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={sidebarOpen:!1,isMobile:_(),loading:!0},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){}},{key:"changeLoadingState",value:function(e){this.setState({loading:e})}},{key:"render",value:function(){var e=this.state.loading;return r.a.createElement("div",null,r.a.createElement(T.a,null,r.a.createElement(he,{className:e&&"displayNone"})))}}]),t}(n.Component),me=Object(d.b)()(de),pe=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,{store:M},r.a.createElement(G.a,{loading:null,persistor:R},r.a.createElement(me,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(pe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[45,1,2]]]);
//# sourceMappingURL=main.fe19ca66.chunk.js.map