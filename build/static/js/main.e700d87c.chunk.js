(this.webpackJsonpschool=this.webpackJsonpschool||[]).push([[0],{19:function(e,t,n){"use strict";var a=n(10),r=Object(a.a)();t.a=r},27:function(e,t,n){"use strict";n.d(t,"c",(function(){return h})),n.d(t,"a",(function(){return y})),n.d(t,"b",(function(){return E}));var a=n(23),r=n.n(a),c=n(40),o=n(3),u=n(41),l=n.n(u).a.create({baseURL:"https://schoolk.herokuapp.com/api"}),i=n(19),s=o.a.LErr,f=o.a.LReq,m=o.a.LSuc,p=o.a.Current_User_Suc,d=o.a.Current_User_Err,h=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:f}),t.prev=1,t.next=4,l.post("/account/auth",e);case 4:(a=t.sent).data&&!a.data.error&&a.data.token?(n(b(a.data.token)),n({type:m})):n({type:s,payload:a.data.error}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),n({type:s,payload:"Email or password is incorrect"});case 11:case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},b=function(e){return function(t){localStorage.setItem("token",e),t(y())}},y=function(){return function(e){null===localStorage.getItem("token")?e({type:d}):e({type:p})}},E=function(){return function(e){localStorage.removeItem("token"),e({type:d}),i.a.push("/")}}},3:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a={LReq:"LOGIN_REQ",LSuc:"LOGIN_SUC",LErr:"LOGIN_ERR",Current_User_Suc:"CUR_USER_SUC",Current_User_Err:"CUR_USER_ERR"}},44:function(e,t,n){e.exports=n(78)},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},78:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(17),o=n.n(c),u=(n(49),n(4)),l=n(5),i=n(6),s=n(7),f=n(79),m=(n(50),function(e){Object(s.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"container-fluid d-flex flex-column align-items-center justify-content-center"},r.a.createElement("div",{className:"spinner-border",style:{width:"5rem",height:"5rem"},role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")," "))}}]),n}(a.Component)),p=Object(a.lazy)((function(){return n.e(5).then(n.bind(null,80))})),d={display:"flex",flexDirection:"column",alignItems:"center",marginLeft:"auto",marginRight:"auto"},h={fontSize:"38px",fontWeight:"bold",color:"#40739e",fontFamily:"'Montserrat', sans-serif"},b={display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"};var y=function(e){Object(s.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"container-fluid d-flex justify-content-center p-0 log-form"},r.a.createElement("div",{className:"col-11 p-0",style:d},r.a.createElement("h6",{style:h},"School System")),r.a.createElement("div",{className:"col-12",style:b},r.a.createElement(a.Suspense,{fallback:m},r.a.createElement(p,null))))}}]),n}(a.Component),E=(n(51),Object(a.lazy)((function(){return n.e(3).then(n.bind(null,81))}))),v=function(e){Object(s.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(a.Suspense,{fallback:m},r.a.createElement(E,null)),r.a.createElement("div",null))}}]),n}(a.Component),g=(n(52),Object(a.lazy)((function(){return n.e(4).then(n.bind(null,82))}))),j=function(e){Object(s.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("form",{className:"container-fluid d-flex flex-column align-items-center justify-content-center",style:{minHeight:"100vh"}},r.a.createElement("h6",{className:"student-heading"},"Add Student"),r.a.createElement(a.Suspense,{fallback:m},r.a.createElement(g,null)))}}]),n}(a.Component);var O=n(16),S=n(27),k=function(e){Object(s.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){(0,this.props.getCurrentUser)()}},{key:"render",value:function(){return this.props.auth?r.a.createElement(r.a.Fragment,null,r.a.createElement(f.d,null,r.a.createElement(f.b,{exact:!0,path:"/options",component:v}),r.a.createElement(f.b,{path:"/students/add",component:j}),r.a.createElement(f.b,{render:function(){return r.a.createElement(f.a,{to:"/options"})}}))):r.a.createElement(r.a.Fragment,null,r.a.createElement(f.d,null,r.a.createElement(f.b,{exact:!0,path:"/login",component:y}),r.a.createElement(f.b,{render:function(){return r.a.createElement(f.a,{to:"/login"})}})))}}]),n}(a.Component),L=Object(O.b)((function(e){return{auth:e.Auth.auth}}),{getCurrentUser:S.a})(k),_=(n(76),n(77),n(19)),C=n(11),x=n(13),U=n(3),R=U.a.LErr,w=U.a.LReq,N=U.a.LSuc,I=U.a.Current_User_Err,A=U.a.Current_User_Suc,z=Object(C.c)({Login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!1,isSuccess:!1,isError:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return Object(x.a)({},e,{isLoading:!0,isError:!1,isSuccess:!1});case N:return Object(x.a)({},e,{isSuccess:!0,isLoading:!1,isError:!1,data:t.payload});case R:return Object(x.a)({},e,{isError:!0,isLoading:!1,isSuccess:!1,data:t.payload});default:return e}},Auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{auth:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I:return Object(x.a)({},e,{auth:!1});case A:return Object(x.a)({},e,{auth:!0});default:return e}}}),F=n(42),q=Object(C.d)(z,Object(C.a)(F.a));o.a.render(r.a.createElement(O.a,{store:q},r.a.createElement(f.c,{history:_.a},r.a.createElement(L,null))),document.getElementById("root"))}},[[44,1,2]]]);