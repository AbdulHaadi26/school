(this.webpackJsonpschool=this.webpackJsonpschool||[]).push([[0],{1:function(e,t,a){"use strict";a.d(t,"d",(function(){return n})),a.d(t,"c",(function(){return r})),a.d(t,"b",(function(){return c})),a.d(t,"a",(function(){return s}));var n={LReq:"LOGIN_REQ",LSuc:"LOGIN_SUC",LErr:"LOGIN_ERR",Current_User_Suc:"CUR_USER_SUC",Current_User_Err:"CUR_USER_ERR"},r={SReq:"STUD_REQ",SSuc:"STUD_SUC",SErr:"STUD_ERR",GEReq:"GE_REQ",GESuc:"GE_SUC",GEErr:"GE_ERR",GReq:"G_REQ",GSuc:"G_SUC",GErr:"G_ERR"},c={SEReq:"SE_REQ",SESuc:"SE_SUC",SEErr:"SE_ERR",SGReq:"SG_REQ",SGSuc:"SG_SUC",SGErr:"SG_Err"},s={RReq:"R_REQ",RSuc:"R_SUC",RErr:"R_ERR",RGReq:"RG_REQ",RGSuc:"RG_SUC",RGErr:"RG_Err",RGGReq:"RGG_REQ",RGGSuc:"RGG_SUC",RGGErr:"RGG_REQ"}},10:function(e,t,a){"use strict";var n=a(47),r=a.n(n);t.a=r.a.create({baseURL:"https://schoolk.herokuapp.com/api"})},14:function(e,t,a){"use strict";var n=a(15),r=Object(n.a)();t.a=r},24:function(e,t,a){"use strict";a.d(t,"e",(function(){return v})),a.d(t,"f",(function(){return S})),a.d(t,"b",(function(){return b})),a.d(t,"c",(function(){return j})),a.d(t,"d",(function(){return O})),a.d(t,"a",(function(){return R}));var n=a(2),r=a.n(n),c=a(11),s=a(1),u=a(10),o=a(14),i=s.c.SReq,l=s.c.SSuc,d=s.c.SErr,p=s.c.GEReq,f=s.c.GESuc,h=s.c.GEErr,m=s.c.GErr,y=s.c.GReq,E=s.c.GSuc,v=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(a){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:i}),t.prev=1,t.next=4,u.a.post("/student/register",e);case 4:(n=t.sent).data.student&&!n.data.error?(a({type:l}),o.a.push("/students/list")):a({type:d,payload:n.data.error}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),a({type:d,payload:"Somthing unexpected occured"});case 11:case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},S=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(a){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:i}),t.prev=1,t.next=4,u.a.post("/student/update",e);case 4:(n=t.sent).data.student&&!n.data.error?(a({type:l}),o.a.push("/students/list")):a({type:d,payload:n.data.error}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),a({type:d,payload:"Somthing unexpected occured"});case 11:case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},g={data:[],count:0},b=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(a){var n,c,s,o;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:p}),t.prev=1,n=u.a.post("/student/getStudCountAll",e,{headers:{authorization:"".concat(localStorage.getItem("token"))}}),c=u.a.post("/student/getStudAll",e,{headers:{authorization:"".concat(localStorage.getItem("token"))}}),t.next=6,n;case 6:return s=t.sent,t.next=9,c;case 9:!(o=t.sent).data.studList||null==s.data.studCount||s.data.error||o.data.error?a({type:h,payload:g}):(g.data=o.data.studList,g.count=s.data.studCount,a({type:f,payload:g})),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(1),a({type:h,studList:g});case 16:case"end":return t.stop()}}),t,null,[[1,13]])})));return function(e){return t.apply(this,arguments)}}()},j=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(a){var n,c,s,o;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:p}),t.prev=1,n=u.a.post("/student/searchStudCount",e,{headers:{authorization:"".concat(localStorage.getItem("token"))}}),c=u.a.post("/student/searchStud",e,{headers:{authorization:"".concat(localStorage.getItem("token"))}}),t.next=6,n;case 6:return s=t.sent,t.next=9,c;case 9:!(o=t.sent).data.studList||null==s.data.studCount||s.data.error||o.data.error?a({type:h,payload:g}):(g.data=o.data.studList,g.count=s.data.studCount,a({type:f,payload:g})),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(1),a({type:h,payload:g});case 16:case"end":return t.stop()}}),t,null,[[1,13]])})));return function(e){return t.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(a){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:y}),t.prev=1,t.next=4,u.a.get("/student/getStudent/".concat(e),{headers:{authorization:"".concat(localStorage.getItem("token"))}});case 4:(n=t.sent).data.student&&!n.data.error?a({type:E,payload:n.data}):a({type:m,payload:n.data.error}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),a({type:m,payload:"Somthing unexpected occured"});case 11:case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},R=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(a){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:y}),t.prev=1,t.next=4,u.a.get("/student/delStudent/".concat(e),{headers:{authorization:"".concat(localStorage.getItem("token"))}});case 4:(n=t.sent).data.student&&!n.data.error?o.a.push("/student/list"):a({type:m,payload:n.data.error}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),a({type:m,payload:"Somthing unexpected occured"});case 11:case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()}},27:function(e,t,a){"use strict";a.d(t,"b",(function(){return m})),a.d(t,"a",(function(){return y}));var n=a(2),r=a.n(n),c=a(11),s=a(1),u=a(10),o=a(14),i=s.b.SEErr,l=s.b.SEReq,d=s.b.SESuc,p=s.b.SGErr,f=s.b.SGReq,h=s.b.SGSuc,m=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(a){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:l}),t.prev=1,t.next=4,u.a.post("/session/register",e);case 4:(n=t.sent).data.session&&!n.data.error?(a({type:d}),o.a.push("/options")):a({type:i,payload:n.data.error}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),a({type:i,payload:"Somthing unexpected occured"});case 11:case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},y=function(){return function(){var e=Object(c.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:f}),e.prev=1,e.next=4,u.a.get("/session/getSession",{headers:{authorization:"".concat(localStorage.getItem("token"))}});case 4:(a=e.sent).data.session&&!a.data.error?t({type:h,payload:a.data}):t({type:p,payload:a.data.error}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t({type:p,payload:"Somthing unexpected occured"});case 11:case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()}},34:function(e,t,a){"use strict";a.d(t,"e",(function(){return v})),a.d(t,"b",(function(){return g})),a.d(t,"c",(function(){return b})),a.d(t,"d",(function(){return j})),a.d(t,"a",(function(){return O})),a.d(t,"f",(function(){return R}));var n=a(2),r=a.n(n),c=a(11),s=a(1),u=a(10),o=a(14),i=s.a.RReq,l=s.a.RErr,d=s.a.RSuc,p=s.a.RGErr,f=s.a.RGReq,h=s.a.RGSuc,m=s.a.RGGSuc,y=s.a.RGGReq,E=s.a.RGGErr,v=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(a){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:i}),t.prev=1,t.next=4,u.a.post("/result/register",e);case 4:(n=t.sent).data.Result&&!n.data.error?(a({type:d}),o.a.push("/options")):a({type:l,payload:n.data.error}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),a({type:l,payload:"Somthing unexpected occured"});case 11:case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},S={data:[],count:0},g=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(a){var n,c,s,o;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:f}),t.prev=1,n=u.a.post("/result/getResultCountAll",e,{headers:{authorization:"".concat(localStorage.getItem("token"))}}),c=u.a.post("/result/getResultAll",e,{headers:{authorization:"".concat(localStorage.getItem("token"))}}),t.next=6,n;case 6:return s=t.sent,t.next=9,c;case 9:!(o=t.sent).data.resultList||null==s.data.resultCount||s.data.error||o.data.error?a({type:p,payload:S}):(S.data=o.data.resultList,S.count=s.data.resultCount,a({type:h,payload:S})),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(1),a({type:p,resultList:S});case 16:case"end":return t.stop()}}),t,null,[[1,13]])})));return function(e){return t.apply(this,arguments)}}()},b=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(a){var n,c,s,o;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:f}),t.prev=1,n=u.a.post("/result/searchResultCount",e,{headers:{authorization:"".concat(localStorage.getItem("token"))}}),c=u.a.post("/result/searchResult",e,{headers:{authorization:"".concat(localStorage.getItem("token"))}}),t.next=6,n;case 6:return s=t.sent,t.next=9,c;case 9:!(o=t.sent).data.resultList||null==s.data.resultCount||s.data.error||o.data.error?a({type:p,payload:S}):(S.data=o.data.resultList,S.count=s.data.resultCount,a({type:h,payload:S})),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(1),a({type:p,payload:S});case 16:case"end":return t.stop()}}),t,null,[[1,13]])})));return function(e){return t.apply(this,arguments)}}()},j=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(a){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:y}),t.prev=1,t.next=4,u.a.get("/result/getResult/".concat(e),{headers:{authorization:"".concat(localStorage.getItem("token"))}});case 4:(n=t.sent).data.result&&!n.data.error?a({type:m,payload:n.data}):a({type:E,payload:n.data.error}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),a({type:E,payload:"Somthing unexpected occured"});case 11:case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(a){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:y}),t.prev=1,t.next=4,u.a.get("/result/delResult/".concat(e),{headers:{authorization:"".concat(localStorage.getItem("token"))}});case 4:(n=t.sent).data.result&&!n.data.error?(o.a.push("/student/result"),a({type:m,payload:n.data})):a({type:E,payload:n.data.error}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),a({type:E,payload:"Somthing unexpected occured"});case 11:case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},R=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(a){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:i}),t.prev=1,t.next=4,u.a.post("/result/update",e);case 4:(n=t.sent).data.result&&!n.data.error?(a({type:d}),o.a.push("/options")):a({type:l,payload:n.data.error}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),a({type:l,payload:"Somthing unexpected occured"});case 11:case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()}},35:function(e,t,a){"use strict";a.d(t,"c",(function(){return h})),a.d(t,"a",(function(){return y})),a.d(t,"b",(function(){return E}));var n=a(2),r=a.n(n),c=a(11),s=a(1),u=a(10),o=a(14),i=s.d.LErr,l=s.d.LReq,d=s.d.LSuc,p=s.d.Current_User_Suc,f=s.d.Current_User_Err,h=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(a){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:l}),t.prev=1,t.next=4,u.a.post("/account/auth",e);case 4:(n=t.sent).data&&!n.data.error&&n.data.token?(a(m(n.data.token)),a({type:d})):a({type:i,payload:n.data.error}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),a({type:i,payload:"Email or password is incorrect"});case 11:case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},m=function(e){return function(t){localStorage.setItem("token",e),t(y())}},y=function(){return function(e){null===localStorage.getItem("token")?e({type:f}):e({type:p})}},E=function(){return function(e){localStorage.removeItem("token"),e({type:f}),o.a.push("/")}}},5:function(e,t,a){"use strict";var n=a(6),r=a(7),c=a(8),s=a(9),u=a(0),o=a.n(u),i=function(e){Object(s.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={},e}return Object(r.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{style:{minWidth:"100vw",minHeight:"100vh",flexDirection:"column",display:"flex",justifyContent:"center",alignItems:"center"}},o.a.createElement("div",{className:"spinner-border",style:{width:"5rem",height:"5rem"},role:"status"},o.a.createElement("span",{className:"sr-only"},"Loading...")," "))}}]),a}(u.Component);t.a=i},50:function(e,t,a){e.exports=a(91)},55:function(e,t,a){},56:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){},91:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(25),s=a.n(c),u=(a(55),a(6)),o=a(7),i=a(8),l=a(9),d=a(20),p=(a(56),a(5)),f=a(18),h=Object(n.lazy)((function(){return a.e(6).then(a.bind(null,92))})),m={display:"flex",flexDirection:"column",alignItems:"center",marginLeft:"auto",marginRight:"auto"},y={fontSize:"38px",fontWeight:"bold",color:"#40739e",fontFamily:"'Montserrat', sans-serif"},E={display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"};var v=function(e){Object(l.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container-fluid d-flex justify-content-center p-0 log-form"},r.a.createElement("div",{className:"col-11 p-0",style:m},r.a.createElement("h6",{style:y},"School System")),r.a.createElement("div",{className:"col-12",style:E},r.a.createElement(n.Suspense,{fallback:p.a},r.a.createElement("div",{className:"col-12 d-flex flex-row justify-content-end align-items-center",style:{minHeight:"10vh"}},r.a.createElement(f.a,{className:"btn btn-info",to:"/home"},"Switch to Visitor")),r.a.createElement(h,null))))}}]),a}(n.Component),S=(a(61),Object(n.lazy)((function(){return a.e(7).then(a.bind(null,93))}))),g=function(e){Object(l.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(n.Suspense,{fallback:r.a.createElement(p.a,null)},r.a.createElement(S,null)))}}]),a}(n.Component),b=(a(62),Object(n.lazy)((function(){return a.e(5).then(a.bind(null,94))}))),j=function(e){Object(l.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(n.Suspense,{fallback:r.a.createElement(p.a,null)},r.a.createElement("div",{className:"container-fluid d-flex flex-column align-items-center justify-content-center",style:{minHeight:"100vh"}},r.a.createElement("h6",{className:"student-heading"},"Add Student"),r.a.createElement(b,null)))}}]),a}(n.Component),O=(a(63),Object(n.lazy)((function(){return a.e(10).then(a.bind(null,95))}))),R=function(e){Object(l.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(n.Suspense,{fallback:r.a.createElement(p.a,null)},r.a.createElement("div",{className:"container-fluid"},r.a.createElement(O,null)))}}]),a}(n.Component),x=(a(64),Object(n.lazy)((function(){return a.e(4).then(a.bind(null,96))}))),L=function(e){Object(l.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(n.Suspense,{fallback:r.a.createElement(p.a,null)},r.a.createElement("div",{className:"container-fluid"},r.a.createElement(x,null)))}}]),a}(n.Component),k=(a(65),a(24)),G=a(12),w=Object(n.lazy)((function(){return a.e(3).then(a.bind(null,97))})),C=function(e){Object(l.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params._id;(0,this.props.getStudent)(e)}},{key:"render",value:function(){var e=this.props,t=e.isLoading,a=e.isSuccess,c=e.data;return a&&c&&c.student?r.a.createElement(n.Suspense,{fallback:r.a.createElement(p.a,null)},r.a.createElement("div",{className:"contaier-fluid"},r.a.createElement(w,{student:c.student,session:c.session}))):t?r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,null)):r.a.createElement("div",{className:"container-fluid d-flex flex-column justify-content-center align-items-center"},r.a.createElement("h6",null,"Could not load student detail"),r.a.createElement(f.a,{to:"/options",style:{marginTop:"12px"}},"Go back"))}}]),a}(n.Component),_=Object(G.b)((function(e){return{isError:e.Stud.isError,err:e.Stud.data,isLoading:e.Stud.isLoading,data:e.Stud.data,isSuccess:e.Stud.isSuccess}}),{getStudent:k.d})(C),q=(a(85),a(27)),U=Object(n.lazy)((function(){return a.e(8).then(a.bind(null,98))})),N=function(e){Object(l.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){(0,this.props.getSession)()}},{key:"render",value:function(){var e=this.props,t=e.isLoading,a=e.isError,c=e.list;return!t&&c&&~a?r.a.createElement(n.Suspense,{fallback:r.a.createElement(p.a,null)},r.a.createElement("div",{className:"container-fluid"},r.a.createElement(U,{session:c.session}))):t?r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,null)):r.a.createElement(r.a.Fragment,null)}}]),a}(n.Component),z=Object(G.b)((function(e){return{isLoading:e.SessionList.isLoading,isError:e.SessionList.isError,list:e.SessionList.data}}),{getSession:q.a})(N),I=(a(86),Object(n.lazy)((function(){return a.e(11).then(a.bind(null,99))}))),A=function(e){Object(l.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params._id;(0,this.props.getStudent)(e)}},{key:"render",value:function(){var e=this.props,t=e.isLoading,a=e.isSuccess,c=e.data;return console.log(c),a&&c&&c.student?r.a.createElement(n.Suspense,{fallback:r.a.createElement(p.a,null)},r.a.createElement("div",{className:"contaier-fluid d-flex flex-column align-items-center justify-content-center",style:{minHeight:"100vh"}},r.a.createElement("h6",{className:"student-heading"},"Update Student"),r.a.createElement(I,{student:c.student,session:c.session}))):t?r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,null)):r.a.createElement("div",{className:"container-fluid d-flex flex-column justify-content-center align-items-center"},r.a.createElement("h6",null,"Could not load student detail"),r.a.createElement(f.a,{to:"/options",style:{marginTop:"12px"}},"Go back"))}}]),a}(n.Component),D=Object(G.b)((function(e){return{isError:e.Stud.isError,err:e.Stud.data,isLoading:e.Stud.isLoading,data:e.Stud.data,isSuccess:e.Stud.isSuccess}}),{getStudent:k.d})(A),F=(a(87),a(34)),Q=Object(n.lazy)((function(){return a.e(12).then(a.bind(null,100))})),M=function(e){Object(l.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params._id;(0,this.props.getResult)(e)}},{key:"render",value:function(){var e=this.props,t=e.isLoading,a=e.isSuccess,c=e.data;return a&&c&&c.result?r.a.createElement(n.Suspense,{fallback:r.a.createElement(p.a,null)},r.a.createElement("div",{className:"contaier-fluid"},r.a.createElement(Q,{result:c.result,session:c.session}))):t?r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,null)):r.a.createElement("div",{className:"container-fluid d-flex flex-column justify-content-center align-items-center",style:{minHeight:"100vh"}},r.a.createElement("h6",null,"Could not load student detail"),r.a.createElement(f.a,{to:"/options",style:{marginTop:"12px"}},"Go back"))}}]),a}(n.Component),H=Object(G.b)((function(e){return{isError:e.Result.isError,err:e.Result.data,isLoading:e.Result.isLoading,data:e.Result.data,isSuccess:e.Result.isSuccess}}),{getResult:F.d})(M),T=(a(88),Object(n.lazy)((function(){return a.e(9).then(a.bind(null,101))}))),J=function(e){Object(l.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){(0,this.props.getSession)()}},{key:"render",value:function(){var e=this.props,t=e.isLoading,a=e.isError,c=e.list;return!t&&c&&~a?r.a.createElement(n.Suspense,{fallback:r.a.createElement(p.a,null)},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"col-12 d-flex flex-row justify-content-end align-items-center",style:{minHeight:"10vh"}},r.a.createElement(f.a,{className:"btn btn-danger",to:"/login"},"Switch to Admin")),r.a.createElement(T,{session:c.session}))):t?r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,null)):r.a.createElement(r.a.Fragment,null)}}]),a}(n.Component),W=Object(G.b)((function(e){return{isLoading:e.SessionList.isLoading,isError:e.SessionList.isError,list:e.SessionList.data}}),{getSession:q.a})(J);var B=a(35),V=function(e){Object(l.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){(0,this.props.getCurrentUser)()}},{key:"render",value:function(){return this.props.auth?r.a.createElement(r.a.Fragment,null,r.a.createElement(d.d,null,r.a.createElement(d.b,{exact:!0,path:"/options",component:g}),r.a.createElement(d.b,{path:"/students/add",component:j}),r.a.createElement(d.b,{path:"/students/list",component:R}),r.a.createElement(d.b,{path:"/students/result",component:z}),r.a.createElement(d.b,{path:"/students/session",component:L}),r.a.createElement(d.b,{path:"/result/:_id/update",component:H}),r.a.createElement(d.b,{path:"/students/update/:_id",component:D}),r.a.createElement(d.b,{path:"/students/:_id/result",component:_}),r.a.createElement(d.b,{render:function(){return r.a.createElement(d.a,{to:"/options"})}}))):r.a.createElement(r.a.Fragment,null,r.a.createElement(d.d,null,r.a.createElement(d.b,{exact:!0,path:"/home",component:W}),r.a.createElement(d.b,{path:"/login",component:v}),r.a.createElement(d.b,{render:function(){return r.a.createElement(d.a,{to:"/home"})}})))}}]),a}(n.Component),K=Object(G.b)((function(e){return{auth:e.Auth.auth}}),{getCurrentUser:B.a})(V),P=(a(89),a(90),a(14)),X=a(21),Y=a(3),Z=a(1),$=Z.d.LErr,ee=Z.d.LReq,te=Z.d.LSuc,ae=Z.d.Current_User_Err,ne=Z.d.Current_User_Suc,re=Z.c.SErr,ce=Z.c.SSuc,se=Z.c.SReq,ue=Z.c.GEErr,oe=Z.c.GEReq,ie=Z.c.GESuc,le=Z.c.GErr,de=Z.c.GSuc,pe=Z.c.GReq,fe=Z.b.SEErr,he=Z.b.SEReq,me=Z.b.SESuc,ye=Z.b.SGErr,Ee=Z.b.SGReq,ve=Z.b.SGSuc,Se=Z.a.RSuc,ge=Z.a.RErr,be=Z.a.RReq,je=Z.a.RGSuc,Oe=Z.a.RGReq,Re=Z.a.RGErr,xe=Z.a.RGGErr,Le=Z.a.RGGReq,ke=Z.a.RGGSuc,Ge=Object(X.c)({Login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!1,isSuccess:!1,isError:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ee:return Object(Y.a)({},e,{isLoading:!0,isError:!1,isSuccess:!1});case te:return Object(Y.a)({},e,{isSuccess:!0,isLoading:!1,isError:!1,data:t.payload});case $:return Object(Y.a)({},e,{isError:!0,isLoading:!1,isSuccess:!1,data:t.payload});default:return e}},Auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{auth:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ae:return Object(Y.a)({},e,{auth:!1});case ne:return Object(Y.a)({},e,{auth:!0});default:return e}},AddStudent:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!1,isSuccess:!1,isError:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case se:return Object(Y.a)({},e,{isLoading:!0,isError:!1,isSuccess:!1});case ce:return Object(Y.a)({},e,{isSuccess:!0,isLoading:!1,isError:!1});case re:return Object(Y.a)({},e,{isError:!0,isLoading:!1,isSuccess:!1,data:t.payload});default:return e}},StudentsList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!1,isSuccess:!1,isError:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case oe:return Object(Y.a)({},e,{isLoading:!0,isError:!1,isSuccess:!1});case ie:return Object(Y.a)({},e,{isSuccess:!0,isLoading:!1,isError:!1,data:t.payload});case ue:return Object(Y.a)({},e,{isError:!0,isLoading:!1,isSuccess:!1,data:t.payload});default:return e}},Stud:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!1,isSuccess:!1,isError:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case pe:return Object(Y.a)({},e,{isLoading:!0,isError:!1,isSuccess:!1});case de:return Object(Y.a)({},e,{isSuccess:!0,isLoading:!1,isError:!1,data:t.payload});case le:return Object(Y.a)({},e,{isError:!0,isLoading:!1,isSuccess:!1,data:t.payload});default:return e}},SessionReg:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!1,isSuccess:!1,isError:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case he:return Object(Y.a)({},e,{isLoading:!0,isError:!1,isSuccess:!1});case me:return Object(Y.a)({},e,{isSuccess:!0,isLoading:!1,isError:!1});case fe:return Object(Y.a)({},e,{isError:!0,isLoading:!1,isSuccess:!1,data:t.payload});default:return e}},SessionList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!1,isSuccess:!1,isError:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ee:return Object(Y.a)({},e,{isLoading:!0,isError:!1,isSuccess:!1});case ve:return Object(Y.a)({},e,{isSuccess:!0,isLoading:!1,isError:!1,data:t.payload});case ye:return Object(Y.a)({},e,{isError:!0,isLoading:!1,isSuccess:!1,data:t.payload});default:return e}},ResultReg:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!1,isSuccess:!1,isError:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case be:return Object(Y.a)({},e,{isLoading:!0,isError:!1,isSuccess:!1});case Se:return Object(Y.a)({},e,{isSuccess:!0,isLoading:!1,isError:!1});case ge:return Object(Y.a)({},e,{isError:!0,isLoading:!1,isSuccess:!1,data:t.payload});default:return e}},ResultList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!1,isSuccess:!1,isError:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Oe:return Object(Y.a)({},e,{isLoading:!0,isError:!1,isSuccess:!1});case je:return Object(Y.a)({},e,{isSuccess:!0,isLoading:!1,isError:!1,data:t.payload});case Re:return Object(Y.a)({},e,{isError:!0,isLoading:!1,isSuccess:!1,data:t.payload});default:return e}},Result:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!1,isSuccess:!1,isError:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Le:return Object(Y.a)({},e,{isLoading:!0,isError:!1,isSuccess:!1});case ke:return Object(Y.a)({},e,{isSuccess:!0,isLoading:!1,isError:!1,data:t.payload});case xe:return Object(Y.a)({},e,{isError:!0,isLoading:!1,isSuccess:!1,data:t.payload});default:return e}}}),we=a(49),Ce=Object(X.d)(Ge,Object(X.a)(we.a));s.a.render(r.a.createElement(G.a,{store:Ce},r.a.createElement(d.c,{history:P.a},r.a.createElement(K,null))),document.getElementById("root"))}},[[50,1,2]]]);