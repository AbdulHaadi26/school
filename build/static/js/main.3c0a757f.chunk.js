(this.webpackJsonpschool=this.webpackJsonpschool||[]).push([[0],{17:function(e,t,n){"use strict";var a=n(11),r=Object(a.a)();t.a=r},2:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));var a={LReq:"LOGIN_REQ",LSuc:"LOGIN_SUC",LErr:"LOGIN_ERR",Current_User_Suc:"CUR_USER_SUC",Current_User_Err:"CUR_USER_ERR"},r={SReq:"STUD_REQ",SSuc:"STUD_SUC",SErr:"STUD_ERR",GEReq:"GE_REQ",GESuc:"GE_SUC",GEErr:"GE_ERR"}},27:function(e,t,n){"use strict";n.d(t,"c",(function(){return p})),n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var a=n(20),r=n.n(a),c=n(28),u=n(2),o=n(29),i=n(17),s=u.b.LErr,l=u.b.LReq,d=u.b.LSuc,f=u.b.Current_User_Suc,m=u.b.Current_User_Err,p=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:l}),t.prev=1,t.next=4,o.a.post("/account/auth",e);case 4:(a=t.sent).data&&!a.data.error&&a.data.token?(n(E(a.data.token)),n({type:d})):n({type:s,payload:a.data.error}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),n({type:s,payload:"Email or password is incorrect"});case 11:case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},E=function(e){return function(t){localStorage.setItem("token",e),t(b())}},b=function(){return function(e){null===localStorage.getItem("token")?e({type:m}):e({type:f})}},h=function(){return function(e){localStorage.removeItem("token"),e({type:m}),i.a.push("/")}}},29:function(e,t,n){"use strict";var a=n(42),r=n.n(a);t.a=r.a.create({baseURL:"https://schoolk.herokuapp.com/api"})},45:function(e,t,n){e.exports=n(80)},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},80:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(18),u=n.n(c),o=(n(50),n(5)),i=n(6),s=n(7),l=n(8),d=n(81),f=(n(51),function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{style:{minWidth:"100vw",minHeight:"100vh",flexDirection:"column",display:"flex",justifyContent:"center",alignItems:"center"}},r.a.createElement("div",{className:"spinner-border",style:{width:"5rem",height:"5rem"},role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")," "))}}]),n}(a.Component)),m=Object(a.lazy)((function(){return n.e(6).then(n.bind(null,83))})),p={display:"flex",flexDirection:"column",alignItems:"center",marginLeft:"auto",marginRight:"auto"},E={fontSize:"38px",fontWeight:"bold",color:"#40739e",fontFamily:"'Montserrat', sans-serif"},b={display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"};var h=function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"container-fluid d-flex justify-content-center p-0 log-form"},r.a.createElement("div",{className:"col-11 p-0",style:p},r.a.createElement("h6",{style:E},"School System")),r.a.createElement("div",{className:"col-12",style:b},r.a.createElement(a.Suspense,{fallback:f},r.a.createElement(m,null))))}}]),n}(a.Component),v=(n(52),Object(a.lazy)((function(){return n.e(5).then(n.bind(null,84))}))),y=function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(a.Suspense,{fallback:r.a.createElement(f,null)},r.a.createElement(v,null)))}}]),n}(a.Component),g=(n(53),Object(a.lazy)((function(){return n.e(4).then(n.bind(null,85))}))),S=function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"container-fluid d-flex flex-column align-items-center justify-content-center",style:{minHeight:"100vh"}},r.a.createElement(a.Suspense,{fallback:r.a.createElement(f,null)},r.a.createElement("h6",{className:"student-heading"},"Add Student"),r.a.createElement(g,null)))}}]),n}(a.Component),j=(n(54),Object(a.lazy)((function(){return n.e(3).then(n.bind(null,86))}))),O=function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement(a.Suspense,{fallback:r.a.createElement(f,null)},r.a.createElement("div",{className:"container-fluid"},r.a.createElement(j,null),"  "))}}]),n}(a.Component);var L=n(16),_=n(27),R=function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){(0,this.props.getCurrentUser)()}},{key:"render",value:function(){return this.props.auth?r.a.createElement(r.a.Fragment,null,r.a.createElement(d.d,null,r.a.createElement(d.b,{exact:!0,path:"/options",component:y}),r.a.createElement(d.b,{path:"/students/add",component:S}),r.a.createElement(d.b,{path:"/students/list",component:O}),r.a.createElement(d.b,{render:function(){return r.a.createElement(d.a,{to:"/options"})}}))):r.a.createElement(r.a.Fragment,null,r.a.createElement(d.d,null,r.a.createElement(d.b,{exact:!0,path:"/login",component:h}),r.a.createElement(d.b,{render:function(){return r.a.createElement(d.a,{to:"/login"})}})))}}]),n}(a.Component),k=Object(L.b)((function(e){return{auth:e.Auth.auth}}),{getCurrentUser:_.a})(R),C=(n(78),n(79),n(17)),U=n(13),w=n(4),x=n(2),G=x.b.LErr,N=x.b.LReq,A=x.b.LSuc,I=x.b.Current_User_Err,q=x.b.Current_User_Suc,D=x.a.SErr,z=x.a.SSuc,F=x.a.SReq,Q=x.a.GEErr,T=x.a.GEReq,H=x.a.GESuc,J=Object(U.c)({Login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!1,isSuccess:!1,isError:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return Object(w.a)({},e,{isLoading:!0,isError:!1,isSuccess:!1});case A:return Object(w.a)({},e,{isSuccess:!0,isLoading:!1,isError:!1,data:t.payload});case G:return Object(w.a)({},e,{isError:!0,isLoading:!1,isSuccess:!1,data:t.payload});default:return e}},Auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{auth:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I:return Object(w.a)({},e,{auth:!1});case q:return Object(w.a)({},e,{auth:!0});default:return e}},AddStudent:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!1,isSuccess:!1,isError:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case F:return Object(w.a)({},e,{isLoading:!0,isError:!1,isSuccess:!1});case z:return Object(w.a)({},e,{isSuccess:!0,isLoading:!1,isError:!1});case D:return Object(w.a)({},e,{isError:!0,isLoading:!1,isSuccess:!1,data:t.payload});default:return e}},StudentsList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!1,isSuccess:!1,isError:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T:return Object(w.a)({},e,{isLoading:!0,isError:!1,isSuccess:!1});case H:return Object(w.a)({},e,{isSuccess:!0,isLoading:!1,isError:!1,data:t.payload});case Q:return Object(w.a)({},e,{isError:!0,isLoading:!1,isSuccess:!1,data:t.payload});default:return e}}}),M=n(43),W=Object(U.d)(J,Object(U.a)(M.a));u.a.render(r.a.createElement(L.a,{store:W},r.a.createElement(d.c,{history:C.a},r.a.createElement(k,null))),document.getElementById("root"))}},[[45,1,2]]]);