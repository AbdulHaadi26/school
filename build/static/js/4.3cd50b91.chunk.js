(this.webpackJsonpschool=this.webpackJsonpschool||[]).push([[4],{84:function(e,t,a){"use strict";a.r(t);var n=a(27),r=a(3),s=a(4),o=a(25),l=a(5),i=a(6),c=a(0),u=a.n(c),p=a(16),d=a(20),m=a.n(d),h=a(30),g=a(2),y=a(31),f=a(19),S=g.a.SReq,b=g.a.SSuc,v=g.a.SErr,x={padding:"24px 24px 24px 24px",outline:"none !important",fontFamily:"''Montserrat', sans-serif",boxShadow:"none !important",fontSize:"16px",marginTop:"12px"},k={borderRadius:"20px",marginTop:"30px"},E=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={name:"",roll:"",sClass:0,sSec:"A"},n.handleInput=n.handleInput.bind(Object(o.a)(n)),n}return Object(s.a)(a,[{key:"handleInput",value:function(e){this.setState(Object(n.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=this.state,a=t.name,n=t.roll,r=t.sClass,s=t.sSec,o=this.props.registerStudent;a&&n&&null!==r&&s&&o({name:a,roll:n,cls:r,section:s})}},{key:"renderLoader",value:function(){if(this.props.isLoading)return u.a.createElement("div",{className:"spinner-border",style:{width:"1rem",height:"1rem",marginLeft:"8px"},role:"status"},u.a.createElement("span",{className:"sr-only"},"Loading...")," ")}},{key:"handleSelectA",value:function(e){var t=e.target.options.selectedIndex;e.target.options[t].getAttribute("data-key")&&this.setState({sSec:e.target.options[t].getAttribute("data-key")})}},{key:"handleSelect",value:function(e){var t=e.target.options.selectedIndex;e.target.options[t].getAttribute("data-key")&&this.setState({sClass:e.target.options[t].getAttribute("data-key")})}},{key:"renderClassSelect",value:function(){return[1,2,3,4,5].map((function(e){return u.a.createElement("option",{"data-key":e,key:e},"Class ",e)}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.roll,r=t.sClass,s=t.sSec,o=this.props,l=o.isError,i=o.err;return u.a.createElement("form",{className:"col-lg-5 col-11",onSubmit:function(t){return e.handleSubmit(t)}},u.a.createElement("div",{className:"input-group mb-3",style:{marginTop:"12px"}},u.a.createElement("input",{type:"text",className:"form-control",style:x,name:"name",value:a,placeholder:"Student's name",onChange:this.handleInput,required:!0})),u.a.createElement("div",{className:"input-group mb-3",style:{marginTop:"12px"}},u.a.createElement("input",{type:"text",className:"form-control",name:"roll",value:n,style:x,onChange:this.handleInput,placeholder:"Student's roll number",required:!0})),u.a.createElement("select",{className:"custom-select mb-3",style:{marginTop:"12px"},onChange:function(t){return e.handleSelect(t)},defaultValue:r},u.a.createElement("option",{"data-key":0},"KG"),this.renderClassSelect()),u.a.createElement("select",{className:"custom-select",style:{marginTop:"12px"},onChange:function(t){return e.handleSelectA(t)},defaultValue:s},u.a.createElement("option",{"data-key":"A"},"Section A"),u.a.createElement("option",{"data-key":"B"},"Section B")),u.a.createElement("button",{className:"btn btn-block btn-login",style:k,type:"submit"},"Add Student",this.renderLoader()),l&&u.a.createElement("h6",{style:{width:"100%",textAlign:"center",marginTop:"16px",color:"red",fontSize:"13px !important",fontWeight:"500"}},i))}}]),a}(c.Component);t.default=Object(p.b)((function(e){return{isError:e.AddStudent.isError,err:e.AddStudent.data,isLoading:e.AddStudent.isLoading}}),{registerStudent:function(e){return function(){var t=Object(h.a)(m.a.mark((function t(a){var n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:S}),t.prev=1,t.next=4,y.a.post("/student/register",e);case 4:n=t.sent,console.log(n.data),n.data.student&&!n.data.error?(a({type:b}),f.a.push("/students/list")):a({type:v,payload:n.data.error}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),a({type:v,payload:"Somthing unexpected occured"});case 12:case 13:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()}})(E)}}]);