(this.webpackJsonpschool=this.webpackJsonpschool||[]).push([[3],{44:function(t,e,a){"use strict";a.d(e,"a",(function(){return y}));var n=a(81),r=a(12),c=a(0),s=a.n(c),l=a(11),o=(a(14),a(1)),i=a(9),u=a(10);s.a.Component;s.a.Component;var d=function(t,e){return"function"===typeof t?t(e):t},p=function(t,e){return"string"===typeof t?Object(l.c)(t,null,null,e):t},f=function(t){return t},m=s.a.forwardRef;"undefined"===typeof m&&(m=f);var h=m((function(t,e){var a=t.innerRef,n=t.navigate,r=t.onClick,c=Object(i.a)(t,["innerRef","navigate","onClick"]),l=c.target,u=Object(o.a)({},c,{onClick:function(t){try{r&&r(t)}catch(e){throw t.preventDefault(),e}t.defaultPrevented||0!==t.button||l&&"_self"!==l||function(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}(t)||(t.preventDefault(),n())}});return u.ref=f!==m&&e||a,s.a.createElement("a",u)}));var y=m((function(t,e){var a=t.component,r=void 0===a?h:a,c=t.replace,l=t.to,y=t.innerRef,g=Object(i.a)(t,["component","replace","to","innerRef"]);return s.a.createElement(n.e.Consumer,null,(function(t){t||Object(u.a)(!1);var a=t.history,n=p(d(l,t.location),t.location),i=n?a.createHref(n):"",h=Object(o.a)({},g,{href:i,navigate:function(){var e=d(l,t.location);(c?a.replace:a.push)(e)}});return f!==m?h.ref=e||y:h.innerRef=y,s.a.createElement(r,h)}))})),g=function(t){return t},v=s.a.forwardRef;"undefined"===typeof v&&(v=g);v((function(t,e){var a=t["aria-current"],r=void 0===a?"page":a,c=t.activeClassName,l=void 0===c?"active":c,f=t.activeStyle,m=t.className,h=t.exact,S=t.isActive,b=t.location,E=t.strict,x=t.style,k=t.to,N=t.innerRef,C=Object(i.a)(t,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","strict","style","to","innerRef"]);return s.a.createElement(n.e.Consumer,null,(function(t){t||Object(u.a)(!1);var a=b||t.location,c=p(d(k,a),a),i=c.pathname,A=i&&i.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),j=A?Object(n.f)(a.pathname,{path:A,exact:h,strict:E}):null,O=!!(S?S(j,a):j),w=O?function(){for(var t=arguments.length,e=new Array(t),a=0;a<t;a++)e[a]=arguments[a];return e.filter((function(t){return t})).join(" ")}(m,l):m,L=O?Object(o.a)({},x,{},f):x,R=Object(o.a)({"aria-current":O&&r||null,className:w,style:L,to:c},C);return g!==v?R.ref=e||N:R.innerRef=N,s.a.createElement(y,R)}))}))},82:function(t,e,a){"use strict";a.d(e,"c",(function(){return h})),a.d(e,"a",(function(){return g})),a.d(e,"b",(function(){return v}));var n=a(20),r=a.n(n),c=a(28),s=a(2),l=a(29),o=a(17),i=s.a.SReq,u=s.a.SSuc,d=s.a.SErr,p=s.a.GEReq,f=s.a.GESuc,m=s.a.GEErr,h=function(t){return function(){var e=Object(c.a)(r.a.mark((function e(a){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a({type:i}),e.prev=1,e.next=4,l.a.post("/student/register",t);case 4:(n=e.sent).data.student&&!n.data.error?(a({type:u}),o.a.push("/students/list")):a({type:d,payload:n.data.error}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),a({type:d,payload:"Somthing unexpected occured"});case 11:case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},y={data:[],count:0},g=function(t){return function(){var e=Object(c.a)(r.a.mark((function e(a){var n,c,s,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a({type:p}),e.prev=1,n=l.a.post("/student/getStudCountAll",t,{headers:{authorization:"".concat(localStorage.getItem("token"))}}),c=l.a.post("/student/getStudAll",t,{headers:{authorization:"".concat(localStorage.getItem("token"))}}),e.next=6,n;case 6:return s=e.sent,e.next=9,c;case 9:!(o=e.sent).data.studList||null==s.data.studCount||s.data.error||o.data.error?a({type:f,payload:"Could not find any student"}):(y.data=o.data.studList,y.count=s.data.studCount,a({type:m,payload:y})),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),a({type:m,payload:"Could not find any student"});case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}()},v=function(t){return function(){var e=Object(c.a)(r.a.mark((function e(a){var n,c,s,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a({type:p}),e.prev=1,n=l.a.post("/student/searchStudCount",t,{headers:{authorization:"".concat(localStorage.getItem("token"))}}),c=l.a.post("/student/searchStud",t,{headers:{authorization:"".concat(localStorage.getItem("token"))}}),e.next=6,n;case 6:return s=e.sent,e.next=9,c;case 9:!(o=e.sent).data.studList||null==s.data.studCount||s.data.error||o.data.error?a({type:m,payload:"Could not find any student"}):(y.data=o.data.studList,y.count=s.data.studCount,a({type:f,payload:y})),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),a({type:m,payload:"Could not find any student"});case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}()}},86:function(t,e,a){"use strict";a.r(e);var n=a(26),r=a(5),c=a(6),s=a(25),l=a(7),o=a(8),i=a(0),u=a.n(i),d=a(44),p=a(16),f=a(82),m=function(t){Object(o.a)(a,t);var e=Object(l.a)(a);function a(t){var n;return Object(r.a)(this,a),(n=e.call(this,t)).state={name:"",sClass:10,sSec:"All",string:"",limit:0},n.handleInput=n.handleInput.bind(Object(s.a)(n)),n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var t=this.state,e=t.sClass,a=t.sSec,n=t.skip;(0,this.props.fetchStud)({opt1:e,opt2:a,limit:n})}},{key:"handleInput",value:function(t){this.setState(Object(n.a)({},t.target.name,t.target.value))}},{key:"handleSelectA",value:function(t){var e=t.target.options.selectedIndex;t.target.options[e].getAttribute("data-key")&&this.setState({sSec:t.target.options[e].getAttribute("data-key")})}},{key:"handleSubmit",value:function(t){t.preventDefault();var e=this.state,a=e.sClass,n=e.sSec,r=e.skip,c=e.string,s=this.props,l=s.fetchStud,o=s.fetchStudSearch,i={string:c,opt1:a,opt2:n,limit:r};this.setState({limit:0}),c?l(i):o(i)}},{key:"fetchNext",value:function(t,e){t.preventDefault();var a=this.props,n=a.fetchStud,r=a.fetchStudSearch,c=this.state,s=c.limit,l=c.string,o=c.opt1,i=c.opt2;if(s<e){var u={limit:s+1,string:l,opt1:o,opt2:i},d=s+25;this.setState({limit:d}),l?r(u):n(u)}}},{key:"fetchPrev",value:function(t,e){t.preventDefault();var a=this.props,n=a.fetchStud,r=a.fetchStudSearch,c=this.state,s=c.limit,l=c.string,o=c.opt1,i=c.opt2;if(s>25){var u={limit:s-1,string:l,opt1:o,opt2:i},d=s-25;this.setState({limit:d}),l?r(u):n(u)}}},{key:"handleSelect",value:function(t){var e=t.target.options.selectedIndex;t.target.options[e].getAttribute("data-key")&&this.setState({sClass:t.target.options[e].getAttribute("data-key")})}},{key:"renderClassSelect",value:function(){return[1,2,3,4,5].map((function(t){return u.a.createElement("option",{"data-key":t,key:t},"Class ",t)}))}},{key:"renderNav",value:function(t){var e=this;return t>25?u.a.createElement("div",{className:"col-11 d-flex flex-row justify-content-between",style:{marginTop:"30px",marginBottom:"30px"}},u.a.createElement("button",{className:"btn btn-secondary",onClick:function(t){return e.fetchPrev(t)}},u.a.createElement("span",{className:"fa fa-chevron-left"})),u.a.createElement("button",{className:"btn btn-secondary",onClick:function(t){return e.fetchNext(t)}},u.a.createElement("span",{className:"fa fa-chevron-right"}))):u.a.createElement(u.a.Fragment,null)}},{key:"renderList",value:function(t){return t.map((function(t){return u.a.createElement("div",{key:t._id,className:"col-11 list-div d-flex flex-row"},u.a.createElement("h6",{className:"col-lg-3",style:{textAlign:"center"}},t.name),u.a.createElement("h6",{className:"col-lg-3",style:{textAlign:"center"}},t.roll),u.a.createElement("h6",{className:"col-lg-3",style:{textAlign:"center"}},"Class ",t.cls," (",t.section,")"),u.a.createElement("h6",{className:"col-lg-3",style:{textAlign:"center"}},u.a.createElement(d.a,{to:"/student/".concat(t._id,"/result")},"Add Result")))}))}},{key:"render",value:function(){var t,e,a=this,n=this.state,r=n.sClass,c=n.sSec,s=this.props,l=s.isLoading,o=s.isSuccess,i=s.isError,d=s.list;return o?(t=d.studList,e=d.studCount):(t=[],e=0),u.a.createElement("form",{className:"col-12 d-flex flex-column align-items-center",onSubmit:function(t){return a.handleSubmit(t)}},u.a.createElement("h6",{className:"student-heading col-lg-8 col-11",style:{marginTop:"30px",textAlign:"center",fontSize:"40px"}},"Student List"),u.a.createElement("div",{className:"col-lg-6 col-11 d-flex justify-content-end"},u.a.createElement("div",{className:"input-group col-12",style:{marginTop:"30px",marginBottom:"30px"}},u.a.createElement("input",{type:"text",className:"form-control",placeholder:"Student's name",onChange:function(t){a.handleInput(t)}}),u.a.createElement("div",{className:"input-group-append"},u.a.createElement("select",{className:"custom-select",onChange:function(t){return a.handleSelect(t)},defaultValue:r},u.a.createElement("option",{"data-key":10},"All Classes"),u.a.createElement("option",{"data-key":0},"KG"),this.renderClassSelect()),u.a.createElement("select",{className:"custom-select",onChange:function(t){return a.handleSelectA(t)},defaultValue:c},u.a.createElement("option",{"data-key":"All"},"All Sections"),u.a.createElement("option",{"data-key":"A"},"Section A"),u.a.createElement("option",{"data-key":"B"},"Section B")),u.a.createElement("button",{className:"btn btn-outline-secondary",type:"submit"},u.a.createElement("span",{className:"fa fa-search"}))))),u.a.createElement("div",{className:"col-11 list-div d-flex flex-row"},u.a.createElement("h6",{className:"col-lg-3",style:{textAlign:"center",fontWeight:"bold"}},"Name"),u.a.createElement("h6",{className:"col-lg-3",style:{textAlign:"center",fontWeight:"bold"}},"Roll No"),u.a.createElement("h6",{className:"col-lg-3",style:{textAlign:"center",fontWeight:"bold"}},"Class"),u.a.createElement("h6",{className:"col-lg-3",style:{textAlign:"center",fontWeight:"bold"}},"Operations")),!i&&o&&t.length>0&&this.renderList(t),!i&&o&&t.length>0&&this.renderNav(e),(i||t.length<=0)&&!l&&u.a.createElement("h6",{className:"col-11",style:{textAlign:"center",marginTop:"120px"}},"Could not find any student"),l&&u.a.createElement("div",{className:"spinner-border",style:{width:"5rem",height:"5rem",marginTop:"120px"},role:"status"},u.a.createElement("span",{className:"sr-only"},"Loading...")," "))}}]),a}(i.Component);e.default=Object(p.b)((function(t){return{list:t.StudentsList.data,isSuccess:t.StudentsList.isSuccess,isLoading:t.StudentsList.isLoading,isError:t.StudentsList.isError}}),{fetchStud:f.a,fetchStudSearch:f.b})(m)}}]);