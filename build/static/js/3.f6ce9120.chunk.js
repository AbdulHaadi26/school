(this.webpackJsonpschool=this.webpackJsonpschool||[]).push([[3],{88:function(e,t,a){"use strict";a.d(t,"c",(function(){return g})),a.d(t,"a",(function(){return k})),a.d(t,"b",(function(){return f}));var s=a(8),r=a.n(s),n=a(15),l=a(1),u=a(14),o=a(18),c=l.a.RReq,i=l.a.RErr,m=l.a.RSuc,b=l.a.RGErr,d=l.a.RGReq,p=l.a.RGSuc,g=function(e){return function(){var t=Object(n.a)(r.a.mark((function t(a){var s;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:c}),t.prev=1,t.next=4,u.a.post("/result/register",e);case 4:(s=t.sent).data.Result&&!s.data.error?(a({type:m}),o.a.push("/options")):a({type:i,payload:s.data.error}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),a({type:i,payload:"Somthing unexpected occured"});case 11:case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},h={data:[],count:0},k=function(e){return function(){var t=Object(n.a)(r.a.mark((function t(a){var s,n,l,o;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:d}),t.prev=1,s=u.a.post("/result/getResultCountAll",e,{headers:{authorization:"".concat(localStorage.getItem("token"))}}),n=u.a.post("/result/getResultAll",e,{headers:{authorization:"".concat(localStorage.getItem("token"))}}),t.next=6,s;case 6:return l=t.sent,t.next=9,n;case 9:o=t.sent,console.log(o.data),!o.data.resultList||null==l.data.resultCount||l.data.error||o.data.error?a({type:b,payload:h}):(h.data=o.data.resultList,h.count=l.data.resultCount,a({type:p,payload:h})),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(1),a({type:b,resultList:h});case 17:case"end":return t.stop()}}),t,null,[[1,14]])})));return function(e){return t.apply(this,arguments)}}()},f=function(e){return function(){var t=Object(n.a)(r.a.mark((function t(a){var s,n,l,o;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:d}),t.prev=1,s=u.a.post("/result/searchResultCount",e,{headers:{authorization:"".concat(localStorage.getItem("token"))}}),n=u.a.post("/result/searchResult",e,{headers:{authorization:"".concat(localStorage.getItem("token"))}}),t.next=6,s;case 6:return l=t.sent,t.next=9,n;case 9:!(o=t.sent).data.resultList||null==l.data.resultCount||l.data.error||o.data.error?a({type:b,payload:h}):(h.data=o.data.resultList,h.count=l.data.resultCount,a({type:p,payload:h})),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(1),a({type:b,payload:h});case 16:case"end":return t.stop()}}),t,null,[[1,13]])})));return function(e){return t.apply(this,arguments)}}()}},94:function(e,t,a){"use strict";a.r(t);var s=a(31),r=a(4),n=a(5),l=a(30),u=a(6),o=a(7),c=a(0),i=a.n(c),m=a(88),b=a(17),d=a(9),p=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this,e)).state={sSes:"",sId:"",sub1Name:"Social Studies",sub1Marks:0,sub1Total:100,sub2Name:"English",sub2Marks:0,sub2Total:100,sub3Name:"Urdu",sub3Marks:0,sub3Total:100,sub4Name:"Mathematics",sub4Marks:0,sub4Total:100,sub5Name:"General Knowledge",sub5Marks:0,sub5Total:100,sub6Name:"General Science",sub6Marks:0,sub6Total:100,sub7Name:"Islamiat",sub7Marks:0,sub7Total:100},s.handleInput=s.handleInput.bind(Object(l.a)(s)),s}return Object(n.a)(a,[{key:"handleInput",value:function(e){this.setState(Object(s.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e,t){e.preventDefault();var a=this.props,s=a.student,r=a.registerResult,n=this.state,l=n.sSes,u=n.sId,o=n.sub1Name,c=n.sub2Name,i=n.sub3Name,m=n.sub4Name,b=n.sub5Name,d=n.sub6Name,p=n.sub7Name,g=n.sub1Marks,h=n.sub2Marks,k=n.sub3Marks,f=n.sub4Marks,N=n.sub5Marks,y=n.sub6Marks,x=n.sub7Marks,v=[{name:o,marks:g,total:n.sub1Total},{name:c,marks:h,total:n.sub2Total},{name:i,marks:k,total:n.sub3Total},{name:m,marks:f,total:n.sub4Total},{name:b,marks:N,total:n.sub5Total},{name:d,marks:y,total:n.sub6Total},{name:p,marks:x,total:n.sub7Total}];r({name:s.name,roll:s.roll,section:s.section,cls:s.cls,percentage:this.renderPercentage(),sessionId:u,sessionName:l,subjects:v,promoted:t})}},{key:"componentDidMount",value:function(){var e=this.props.session;e.length>0&&this.setState({sSes:e[0].name,sId:e[0]._id})}},{key:"handleSelectA",value:function(e){var t=e.target.options.selectedIndex;e.target.options[t].getAttribute("data-key")&&this.setState({sSes:e.target.options[t].getAttribute("data-name"),sId:e.target.options[t].getAttribute("data-key")})}},{key:"renderList",value:function(){return this.props.session.map((function(e){return i.a.createElement("option",{key:e._id,"data-key":e._id,"data-name":e.name},e.name)}))}},{key:"handleDelete",value:function(e,t,a,s){var r=this.state,n=r.subjects,l=r.sumMarks,u=r.sumTotal,o=n;o=o.filter((function(e){return e._id!==t})),this.setState({subjects:o,sumMarks:l-a,sumTotal:u-s})}},{key:"renderPercentage",value:function(){var e=this.state,t=e.sub1Marks,a=e.sub2Marks,s=e.sub3Marks,r=e.sub4Marks,n=e.sub5Marks,l=e.sub6Marks,u=e.sub7Marks,o=e.sub1Total,c=e.sub2Total,i=e.sub3Total,m=e.sub4Total,b=e.sub5Total,d=e.sub6Total,p=e.sub7Total,g=0,h=0;return g=Number(g)+Number(t)+Number(a)+Number(s)+Number(r)+Number(n)+Number(l)+Number(u),h=Number(h)+Number(o)+Number(c)+Number(i)+Number(m)+Number(b)+Number(d)+Number(p),Number((100*g/h).toFixed(2))}},{key:"renderSubjects",value:function(e,t,a,s,r){return i.a.createElement("div",{className:"col-lg-8 col-11 d-flex flex-lg-row flex-column justify-content-between"},i.a.createElement("div",{className:"input-group mt-3 mb-3 col-lg-4 col-12"},i.a.createElement("h6",null,e)),i.a.createElement("div",{className:"input-group mt-3 mb-3 col-lg-3 col-12"},i.a.createElement("input",{type:"number",className:"form-control",name:s,value:t,onChange:this.handleInput,placeholder:"Marks"})),i.a.createElement("div",{className:"input-group mt-3 mb-3 col-lg-3 col-12"},i.a.createElement("input",{type:"number",className:"form-control",name:r,value:a,onChange:this.handleInput,placeholder:"Total"})))}},{key:"render",value:function(){var e=this,t=this.props,a=t.student,s=t.session,r=t.isLoading,n=t.isError,l=t.err,u=this.state,o=u.sub1Marks,c=u.sub1Name,m=u.sub1Total,b=u.sub2Marks,p=u.sub2Total,g=u.sub2Name,h=u.sub3Marks,k=u.sub3Name,f=u.sub3Total,N=u.sub4Marks,y=u.sub4Name,x=u.sub4Total,v=u.sub5Marks,T=u.sub5Total,M=u.sub5Name,E=u.sub6Marks,S=u.sub6Name,j=u.sub6Total,R=u.sub7Marks,w=u.sub7Name,A=u.sub7Total,I=u.sSes;return r?i.a.createElement(i.a.Fragment,null,i.a.createElement(d.a,null)):i.a.createElement("form",{className:"col-12 d-flex flex-column align-items-center"},i.a.createElement("h6",{className:"student-heading col-lg-8 col-11",style:{marginTop:"30px",marginBottom:"30px",textAlign:"center",fontSize:"40px"}},"Add Result"),i.a.createElement("div",{className:"col-lg-8 col-11 res-head-div d-flex flex-row justify-content-between"},i.a.createElement("h6",{className:"col-lg-3 res-head",style:{textAlign:"center"}},"Name"),i.a.createElement("h6",{className:"col-lg-3 res-head",style:{textAlign:"center"}},"Roll No"),i.a.createElement("h6",{className:"col-lg-3 res-head",style:{textAlign:"center"}},"Class (Sec)")),i.a.createElement("div",{className:"col-lg-8 col-11 res-sub-div d-flex flex-row justify-content-between"},i.a.createElement("h6",{className:"col-lg-3 res-sub",style:{textAlign:"center"}},a.name),i.a.createElement("h6",{className:"col-lg-3 res-sub",style:{textAlign:"center"}},a.roll),i.a.createElement("h6",{className:"col-lg-3 res-sub",style:{textAlign:"center"}},"Class ",a.cls," (",a.section,")")),i.a.createElement("div",{className:"col-lg-8 col-11 res-head-div d-flex flex-row justify-content-between",style:{marginTop:"30px"}},i.a.createElement("h6",{className:"col-lg-3 res-head",style:{textAlign:"center"}},"Subject"),i.a.createElement("h6",{className:"col-lg-3 res-head",style:{textAlign:"center"}},"Marks"),i.a.createElement("h6",{className:"col-lg-3 res-head",style:{textAlign:"center"}},"Total")),this.renderSubjects(c,o,m,"sub1Marks","sub1Total"),this.renderSubjects(g,b,p,"sub2Marks","sub2Total"),this.renderSubjects(k,h,f,"sub3Marks","sub3Total"),this.renderSubjects(y,N,x,"sub4Marks","sub4Total"),this.renderSubjects(M,v,T,"sub5Marks","sub5Total"),this.renderSubjects(S,E,j,"sub6Marks","sub6Total"),this.renderSubjects(w,R,A,"sub7Marks","sub7Total"),i.a.createElement("div",{className:"col-lg-8 col-11 res-head-div d-flex flex-row justify-content-end",style:{marginTop:"16px"}},i.a.createElement("h6",{className:"col-lg-3 res-head",style:{textAlign:"right"}},"Percentage: ",this.renderPercentage(),"%")),i.a.createElement("select",{className:"custom-select col-lg-8 col-11",style:{marginTop:"30px"},onChange:function(t){return e.handleSelectA(t)},defaultValue:I},s.length>0&&this.renderList(),s.length<=0&&i.a.createElement("option",{key:0},"No session found")),i.a.createElement("div",{className:"col-lg-8 col-11 d-flex flex-lg-row flex-column justify-content-lg-between"},i.a.createElement("button",{type:"button",className:"btn btn-block btn-danger col-lg-5 col-12",onClick:function(t){return e.handleSubmit(t,!1)},style:{marginTop:"30px",marginBottom:"30px"}},"Fail"),i.a.createElement("button",{type:"button",className:"btn btn-block btn-primary col-lg-5 col-12",onClick:function(t){return e.handleSubmit(t,!0)},style:{marginTop:"30px",marginBottom:"30px"}},"Promote")),n&&i.a.createElement("h6",{style:{width:"100%",textAlign:"center",marginBottom:"30px",marginTop:"16px",color:"red",fontSize:"13px !important",fontWeight:"500"}},l))}}]),a}(c.Component);t.default=Object(b.b)((function(e){return{isError:e.ResultReg.isError,isLoading:e.ResultReg.isLoading,err:e.ResultReg.data}}),{registerResult:m.c})(p)}}]);