(this["webpackJsonpmern-project"]=this["webpackJsonpmern-project"]||[]).push([[0],{118:function(e,t,a){},119:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(9),c=a.n(r),i=a(18),s=a(22),o=a(70),l=a(80),u="CREATE",d="UPDATE",p="DELETE",j="FETCH_ALL",b=Object(s.c)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return t.payload;case u:return[].concat(Object(l.a)(e),[t.payload]);case d:case"LIKE":return e.map((function(e){return e._id===t.payload._id?t.payload:e}));case p:return e.filter((function(e){return e.id!==t.payload}));default:return e}}}),f=a(49),m=a(159),x=a(160),h=a(152),O=a(163),g=a(158),v=a(14),y=a.n(v),C=a(23),w=a(36),k=a.n(w),N="https://memories-project-2.herokuapp.com/posts",I=function(e,t){return k.a.patch("".concat(N,"/").concat(e),t)},E=function(e){return k.a.delete("".concat(N,"/").concat(e))},S=function(e){return k.a.patch("".concat(N,"/").concat(e,"/likePost"))},D=function(e){return function(){var t=Object(C.a)(y.a.mark((function t(a){var n,r;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c=e,k.a.post(N,c);case 3:n=t.sent,r=n.data,a({type:u,payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}var c}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},T=function(e,t){return function(){var a=Object(C.a)(y.a.mark((function a(n){var r,c;return y.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,I(e,t);case 3:r=a.sent,c=r.data,n({type:d,payload:c}),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),console.log(a.t0);case 11:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(e){return a.apply(this,arguments)}}()},z=a.p+"static/media/memories.9cfa8a46.png",_=a(19),A=a(148),W=Object(A.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1)}},paper:{padding:e.spacing(2)},form:{display:"flex",flexWrap:"wrap",justifyContent:"center"},fileInput:{width:"97%",margin:"10px 0"},buttonSubmit:{marginBottom:10,marginTop:10}}})),B=a(75),F=a.n(B),L=a(82),M=a(161),R=a(162),H=a(5),J=function(e){var t=e.currentId,a=e.setCurrentId,r=Object(n.useState)({creator:"",title:"",message:"",tags:"",selectedFile:""}),c=Object(f.a)(r,2),s=c[0],o=c[1],l=Object(i.c)((function(e){return t?e.posts.find((function(e){return e._id===t})):null})),u=W(),d=Object(i.b)();Object(n.useEffect)((function(){l&&o(l)}),[l]);var p=function(){var e=Object(C.a)(y.a.mark((function e(a){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.preventDefault(),d(t?T(t,s):D(s)),j(),console.log(s);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(){a(null),o({creator:"",title:"",message:"",tags:"",selectedFile:""})};return Object(H.jsx)(L.a,{className:u.paper,children:Object(H.jsxs)("form",{autoComplete:"off",noValidate:!0,className:"".concat(u.root," ").concat(u.form),onSubmit:p,children:[Object(H.jsxs)(h.a,{variant:"h6",children:[t?"Editing":"Creating"," a Memory"]}),Object(H.jsx)(M.a,{name:"creator",variant:"outlined",label:"Creator",fullWidth:!0,value:s.creator,onChange:function(e){return o(Object(_.a)(Object(_.a)({},s),{},{creator:e.target.value}))}}),Object(H.jsx)(M.a,{name:"title",variant:"outlined",label:"Title",fullWidth:!0,value:s.title,onChange:function(e){return o(Object(_.a)(Object(_.a)({},s),{},{title:e.target.value}))}}),Object(H.jsx)(M.a,{name:"message",variant:"outlined",label:"Message",fullWidth:!0,value:s.message,onChange:function(e){return o(Object(_.a)(Object(_.a)({},s),{},{message:e.target.value}))}}),Object(H.jsx)(M.a,{name:"tags",variant:"outlined",label:"Tags",fullWidth:!0,value:s.tags,onChange:function(e){return o(Object(_.a)(Object(_.a)({},s),{},{tags:e.target.value.split(",")}))}}),Object(H.jsxs)("div",{className:u.fileInput,children:[Object(H.jsx)(F.a,{type:"file",multiple:!1,onDone:function(e){var t=e.base64;return o(Object(_.a)(Object(_.a)({},s),{},{selectedFile:t}))}}),Object(H.jsx)(R.a,{className:u.buttonSubmit,variant:"contained",color:"primary",size:"large",type:"submit",fullWidth:!0,children:"Submit"}),Object(H.jsx)(R.a,{variant:"contained",color:"secondary",size:"small",onClick:j,fullWidth:!0,children:"Clear"})]})]})})},P=a(157),K=Object(A.a)({media:{height:0,paddingTop:"56.25%",backgroundColor:"rgba(0, 0, 0, 0.5)",backgroundBlendMode:"darken"},border:{border:"solid"},fullHeightCard:{height:"100%"},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",borderRadius:"15px",height:"100%",position:"relative"},overlay:{position:"absolute",top:"20px",left:"20px",color:"white"},overlay2:{position:"absolute",top:"20px",right:"20px",color:"white"},grid:{display:"flex"},details:{display:"flex",justifyContent:"space-between",margin:"20px"},title:{padding:"0 16px"},cardActions:{padding:"0 16px 8px 16px",display:"flex",justifyContent:"space-between"}}),U=a(153),V=a(154),q=a(155),G=a(156),Q=a(78),X=a.n(Q),Y=a(79),Z=a.n(Y),$=a(77),ee=a.n($),te=a(76),ae=a.n(te),ne=function(e){var t=e.post,a=e.setCurrentId,n=K(),r=Object(i.b)();return Object(H.jsxs)(U.a,{className:n.card,children:[Object(H.jsx)(V.a,{className:n.media,image:t.selectedFile,title:t.title}),Object(H.jsxs)("div",{className:n.overlay,children:[Object(H.jsx)(h.a,{variant:"h6",children:t.creator}),Object(H.jsx)(h.a,{variant:"body2",children:ae()(t.createdAt).fromNow()})]}),Object(H.jsx)("div",{className:n.overlay2,children:Object(H.jsx)(R.a,{style:{color:"white"},size:"small",onClick:function(){a(t._id)},children:Object(H.jsx)(ee.a,{fontSize:"default"})})}),Object(H.jsx)("div",{className:n.details,children:Object(H.jsx)(h.a,{variant:"body2",color:"textSecondary",children:t.tags.map((function(e){return"#".concat(e," ")}))})}),Object(H.jsx)(h.a,{className:n.title,variant:"h5",gutterBottom:!0,children:t.title}),Object(H.jsx)(q.a,{children:Object(H.jsx)(h.a,{variant:"body2",color:"textSecondary",component:"p",children:t.message})}),Object(H.jsxs)(G.a,{className:n.cardActions,children:[Object(H.jsxs)(R.a,{size:"small",color:"primary",onClick:function(){return r((e=t._id,function(){var t=Object(C.a)(y.a.mark((function t(a){var n,r;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,S(e);case 3:n=t.sent,r=n.data,a({type:d,payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()));var e},children:[Object(H.jsx)(X.a,{fontSize:"small"}),"\xa0 Like \xa0",t.likeCount]}),Object(H.jsxs)(R.a,{size:"small",color:"primary",onClick:function(){return r((e=t._id,function(){var t=Object(C.a)(y.a.mark((function t(a){return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,E(e);case 3:a({type:p,payload:e}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()));var e},children:[Object(H.jsx)(Z.a,{fontSize:"small"}),"Delete"]})]})]})},re=Object(A.a)((function(e){return{mainContainer:{display:"flex",alignItems:"center"},smMargin:{margin:e.spacing(1)},actionDiv:{textAlign:"center"}}})),ce=function(e){var t=e.setCurrentId,a=Object(i.c)((function(e){return e.posts})),n=re();return a.length?Object(H.jsx)(g.a,{className:n.container,container:!0,alignItems:"stretch",spacing:3,children:a.map((function(e){return Object(H.jsx)(g.a,{item:!0,xs:12,sm:6,children:Object(H.jsx)(ne,{post:e,setCurrentId:t})},e._id)}))}):Object(H.jsx)(P.a,{})},ie=a(46),se=Object(A.a)((function(e){return Object(ie.a)({appBar:{borderRadius:15,margin:"30px 0",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"},heading:{color:"rgba(0,183,255, 1)"},image:{marginLeft:"15px"}},e.breakpoints.down("sm"),{mainContainer:{flexDirection:"column-reverse"}})})),oe=function(){var e=Object(n.useState)(null),t=Object(f.a)(e,2),a=t[0],r=t[1],c=se(),s=Object(i.b)();return Object(n.useEffect)((function(){s(function(){var e=Object(C.a)(y.a.mark((function e(t){var a,n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.get(N);case 3:a=e.sent,n=a.data,t({type:j,payload:n}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())}),[a,s]),Object(H.jsxs)(m.a,{maxwidth:"lg",children:[Object(H.jsxs)(x.a,{className:c.appBar,position:"static",color:"inherit",children:[Object(H.jsx)(h.a,{className:c.heading,variant:"h2",align:"center",children:"Memories"}),Object(H.jsx)("img",{className:c.image,src:z,alt:"memories",height:"60"})]}),Object(H.jsx)(O.a,{in:!0,children:Object(H.jsx)(m.a,{children:Object(H.jsxs)(g.a,{className:c.mainContainer,container:!0,justify:"space-between",alignItems:"stretch",spacing:3,children:[Object(H.jsx)(g.a,{item:!0,xs:12,sm:7,children:Object(H.jsx)(ce,{setCurrentId:r})}),Object(H.jsx)(g.a,{item:!0,xs:12,sm:4,children:Object(H.jsx)(J,{currentId:a,setCurrentId:r})})]})})})]})},le=(a(118),Object(s.e)(b,Object(s.d)(Object(s.a)(o.a))));c.a.render(Object(H.jsx)(i.a,{store:le,children:Object(H.jsx)(oe,{})}),document.getElementById("root"))}},[[119,1,2]]]);
//# sourceMappingURL=main.2c5c01c8.chunk.js.map