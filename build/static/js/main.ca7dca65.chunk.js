(this.webpackJsonpschool=this.webpackJsonpschool||[]).push([[0],{19:function(e,t,n){"use strict";var r=n(10),a=Object(r.a)();t.a=a},2:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r={LReq:"LOGIN_REQ",LSuc:"LOGIN_SUC",LErr:"LOGIN_ERR",Current_User_Suc:"CUR_USER_SUC",Current_User_Err:"CUR_USER_ERR"},a={SReq:"STUD_REQ",SSuc:"STUD_SUC",SErr:"STUD_ERR"}},26:function(e,t,n){"use strict";n.d(t,"c",(function(){return p})),n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return v}));var r=n(20),a=n.n(r),c=n(30),o=n(2),u=n(31),l=n(19),i=o.b.LErr,s=o.b.LReq,f=o.b.LSuc,d=o.b.Current_User_Suc,m=o.b.Current_User_Err,p=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:s}),t.prev=1,t.next=4,u.a.post("/account/auth",e);case 4:(r=t.sent).data&&!r.data.error&&r.data.token?(n(b(r.data.token)),n({type:f})):n({type:i,payload:r.data.error}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),n({type:i,payload:"Email or password is incorrect"});case 11:case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},b=function(e){return function(t){localStorage.setItem("token",e),t(h())}},h=function(){return function(e){null===localStorage.getItem("token")?e({type:m}):e({type:d})}},v=function(){return function(e){localStorage.removeItem("token"),e({type:m}),l.a.push("/")}}},31:function(e,t,n){"use strict";var r=n(42),a=n.n(r);t.a=a.a.create({baseURL:"https://schoolk.herokuapp.com/api"})},45:function(e,t,n){e.exports=n(80)},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},80:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(17),o=n.n(c),u=(n(50),n(3)),l=n(4),i=n(5),s=n(6),f=n(81),d=(n(51),function(e){Object(s.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={},e}return Object(l.a)(n,[{key:"render",value:function(){return a.a.createElement("div",{style:{minWidth:"100vw",minHeight:"100vh",flexDirection:"column",display:"flex",justifyContent:"center",alignItems:"center"}},a.a.createElement("div",{className:"spinner-border",style:{width:"5rem",height:"5rem"},role:"status"},a.a.createElement("span",{className:"sr-only"},"Loading...")," "))}}]),n}(r.Component)),m=Object(r.lazy)((function(){return n.e(5).then(n.bind(null,82))})),p={display:"flex",flexDirection:"column",alignItems:"center",marginLeft:"auto",marginRight:"auto"},b={fontSize:"38px",fontWeight:"bold",color:"#40739e",fontFamily:"'Montserrat', sans-serif"},h={display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"};var v=function(e){Object(s.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={},e}return Object(l.a)(n,[{key:"render",value:function(){return a.a.createElement("div",{className:"container-fluid d-flex justify-content-center p-0 log-form"},a.a.createElement("div",{className:"col-11 p-0",style:p},a.a.createElement("h6",{style:b},"School System")),a.a.createElement("div",{className:"col-12",style:h},a.a.createElement(r.Suspense,{fallback:d},a.a.createElement(m,null))))}}]),n}(r.Component),E=(n(52),Object(r.lazy)((function(){return n.e(3).then(n.bind(null,83))}))),y=function(e){Object(s.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={},e}return Object(l.a)(n,[{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(r.Suspense,{fallback:a.a.createElement(d,null)},a.a.createElement(E,null)))}}]),n}(r.Component),j=(n(53),Object(r.lazy)((function(){return n.e(4).then(n.bind(null,84))}))),g=function(e){Object(s.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={},e}return Object(l.a)(n,[{key:"render",value:function(){return a.a.createElement("div",{className:"container-fluid d-flex flex-column align-items-center justify-content-center",style:{minHeight:"100vh"}},a.a.createElement(r.Suspense,{fallback:a.a.createElement(d,null)},a.a.createElement("h6",{className:"student-heading"},"Add Student"),a.a.createElement(j,null)))}}]),n}(r.Component),O=function(e){Object(s.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={},e}return Object(l.a)(n,[{key:"render",value:function(){return a.a.createElement("div",null)}}]),n}(r.Component),S=(n(54),function(e){Object(s.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={},e}return Object(l.a)(n,[{key:"render",value:function(){return a.a.createElement("div",{className:"container-fluid"},a.a.createElement(O,null))}}]),n}(r.Component));var L=n(16),k=n(26),C=function(e){Object(s.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){(0,this.props.getCurrentUser)()}},{key:"render",value:function(){return this.props.auth?a.a.createElement(a.a.Fragment,null,a.a.createElement(f.d,null,a.a.createElement(f.b,{exact:!0,path:"/options",component:y}),a.a.createElement(f.b,{path:"/students/add",component:g}),a.a.createElement(f.b,{path:"/students/list",component:S}),a.a.createElement(f.b,{render:function(){return a.a.createElement(f.a,{to:"/options"})}}))):a.a.createElement(a.a.Fragment,null,a.a.createElement(f.d,null,a.a.createElement(f.b,{exact:!0,path:"/login",component:v}),a.a.createElement(f.b,{render:function(){return a.a.createElement(f.a,{to:"/login"})}})))}}]),n}(r.Component),_=Object(L.b)((function(e){return{auth:e.Auth.auth}}),{getCurrentUser:k.a})(C),R=(n(78),n(79),n(19)),U=n(12),w=n(11),x=n(2),A=x.b.LErr,N=x.b.LReq,I=x.b.LSuc,D=x.b.Current_User_Err,q=x.b.Current_User_Suc,z=x.a.SErr,F=x.a.SSuc,G=x.a.SReq,T=Object(U.c)({Login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!1,isSuccess:!1,isError:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return Object(w.a)({},e,{isLoading:!0,isError:!1,isSuccess:!1});case I:return Object(w.a)({},e,{isSuccess:!0,isLoading:!1,isError:!1,data:t.payload});case A:return Object(w.a)({},e,{isError:!0,isLoading:!1,isSuccess:!1,data:t.payload});default:return e}},Auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{auth:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case D:return Object(w.a)({},e,{auth:!1});case q:return Object(w.a)({},e,{auth:!0});default:return e}},AddStudent:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!1,isSuccess:!1,isError:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case G:return Object(w.a)({},e,{isLoading:!0,isError:!1,isSuccess:!1});case F:return Object(w.a)({},e,{isSuccess:!0,isLoading:!1,isError:!1});case z:return Object(w.a)({},e,{isError:!0,isLoading:!1,isSuccess:!1,data:t.payload});default:return e}}}),H=n(43),J=Object(U.d)(T,Object(U.a)(H.a));o.a.render(a.a.createElement(L.a,{store:J},a.a.createElement(f.c,{history:R.a},a.a.createElement(_,null))),document.getElementById("root"))}},[[45,1,2]]]);