(this["webpackJsonpmaterial-ui-react-tutorial"]=this["webpackJsonpmaterial-ui-react-tutorial"]||[]).push([[0],{108:function(e,t,a){},109:function(e,t,a){},114:function(e,t,a){"use strict";a.r(t);var n=a(4),r=a(0),i=a(11),c=a.n(i),l=(a(108),a(82)),o=a(151),s=a(169),u=a(170),b=(a(109),Object(o.a)({sideMenu:{display:"flex",flexDirection:"column",position:"absolute",left:"0px",width:"320px",height:"100%",backgroundColor:"#253053"}})),d=function(){var e=b();return Object(n.jsx)("div",{className:e.sideMenu,children:"SideMenu"})},j=a(154),m=a(156),g=a(157),h=a(89),p=a(115),f=a(158),O=a(77),x=a.n(O),v=a(78),y=a.n(v),C=a(79),S=a.n(C),N=a(76),I=a.n(N),T=Object(o.a)((function(e){return{root:{backgroundColor:"#fff"},searchInput:{opacity:"0.6",padding:"0px ".concat(e.spacing(1),"px"),fontSize:"0.8rem","&:hover":{backgroundColor:"#f2f2f2"},"& .MuiSvgIcon-root":{marginRight:e.spacing(1)}}}})),P=function(){var e=T();return Object(n.jsx)(j.a,{position:"static",className:e.root,children:Object(n.jsx)(m.a,{children:Object(n.jsxs)(g.a,{container:!0,alignItems:"center",children:[Object(n.jsx)(g.a,{item:!0,children:Object(n.jsx)(h.a,{placeholder:"Search topics",className:e.searchInput,startAdornment:Object(n.jsx)(I.a,{fontSize:"small"})})}),Object(n.jsx)(g.a,{item:!0,sm:!0}),Object(n.jsxs)(g.a,{item:!0,children:[Object(n.jsx)(p.a,{classes:{root:e.btnRoot,label:e.btnLabel},children:Object(n.jsx)(f.a,{badgeContent:4,color:"secondary",children:Object(n.jsx)(x.a,{fontSize:"small"})})}),Object(n.jsx)(p.a,{children:Object(n.jsx)(f.a,{badgeContent:4,color:"primary",children:Object(n.jsx)(y.a,{fontSize:"small"})})}),Object(n.jsx)(p.a,{children:Object(n.jsx)(S.a,{fontSize:"small"})})]})]})})})},k=a(86),M=a(159),w=a(87),D=Object(o.a)((function(e){return{root:{backgroundColor:"#fdfdff"},pageHeader:{padding:e.spacing(4),display:"flex ",marginBottom:e.spacing(2)},pageIcon:{display:"inline-block",padding:e.spacing(2),color:"#3c44b1"},pageTitle:{paddingLeft:e.spacing(4),"& .MuiTypography-subtitle2":{opacity:"0.6"}}}})),A=function(e){var t=D(),a=e.title,r=e.subTitle,i=e.icon;return Object(n.jsx)(k.a,{elevation:0,square:!0,className:t.root,children:Object(n.jsxs)("div",{className:t.pageHeader,children:[Object(n.jsx)(M.a,{className:t.pageIcon,children:i}),Object(n.jsxs)("div",{className:t.pageTitle,children:[Object(n.jsx)(w.a,{variant:"h6",component:"div",children:a}),Object(n.jsx)(w.a,{variant:"subtitle2",component:"div",children:r})]})]})})},z=a(12),B=a(14),R=a(3),F=(a(13),Object(o.a)((function(e){return{root:{"& .MuiFormControl-root":{width:"80%",margin:e.spacing(1)}}}})),a(160)),Z=function(e){var t=e.name,a=e.label,r=e.value,i=e.onChange,c=e.error,l=void 0===c?null:c,o=Object(R.a)(e,["name","label","value","onChange","error"]);return Object(n.jsx)(F.a,Object(B.a)(Object(B.a)({name:t,variant:"outlined",label:a,value:r,onChange:i},o),l&&{error:!0,helperText:l}))},L=a(118),E=a(120),H=a(177),J=a(161),G=a(173),K=function(e){var t=e.label,a=e.name,r=e.value,i=e.onChange,c=e.items;return Object(n.jsxs)(L.a,{children:[Object(n.jsx)(E.a,{children:t}),Object(n.jsx)(H.a,{row:!0,name:a,value:r,onChange:i,children:c.map((function(e){return Object(n.jsx)(J.a,{value:e.id,control:Object(n.jsx)(G.a,{}),label:e.title},e.id)}))})]})},W=a(119),q=a(123),V=a(178),Q=a(121),U=function(e){var t=e.name,a=e.label,r=e.value,i=e.onChange,c=e.options,l=e.error,o=void 0===l?null:l;return Object(n.jsxs)(L.a,Object(B.a)(Object(B.a)({variant:"outlined"},o&&{error:!0}),{},{children:[Object(n.jsx)(W.a,{children:a}),Object(n.jsxs)(q.a,{label:a,name:t,value:r,onChange:i,children:[Object(n.jsx)(V.a,{value:"",children:Object(n.jsx)("em",{children:"None"})}),c.map((function(e){return Object(n.jsx)(V.a,{value:e.id,children:e.title},e.id)}))]}),o&&Object(n.jsx)(Q.a,{children:o})]}))},X=a(174),Y=function(e){var t=e.name,a=e.label,r=e.value,i=e.onChange;return Object(n.jsx)(L.a,{children:Object(n.jsx)(J.a,{control:Object(n.jsx)(X.a,{checked:r,onChange:function(e){return i(function(e,t){return{target:{name:e,value:t}}}(t,e.target.checked))},name:t,color:"primary"}),label:a})})},$=a(81),_=a(17),ee=a(171),te=function(e){var t=e.name,a=(e.label,e.value),r=e.onChange;return Object(n.jsx)(_.a,{utils:$.a,children:Object(n.jsx)(ee.a,{disableToolbar:!0,variant:"inline",inputVariant:"outlined",format:"MM/dd/yyyy",name:t,value:a,onChange:function(e){return r(function(e,t){return{target:{name:e,value:t}}}(t,e))}})})},ae=a(162),ne=Object(o.a)((function(e){return{root:{margin:e.spacing(.5)},label:{textTransform:"none"}}})),re={Input:Z,RadioGroup:K,Select:U,CheckBox:Y,DatePicker:te,Button:function(e){var t=e.text,a=e.size,r=e.color,i=e.variant,c=e.onClick,l=Object(R.a)(e,["text","size","color","variant","onClick"]),o=ne();return Object(n.jsx)(ae.a,Object(B.a)(Object(B.a)({variant:i||"contained",color:r||"primary",size:a||"large",onClick:c},l),{},{classes:{root:o.root,label:o.label},children:t}))}},ie="employees",ce=function(){null==localStorage.getItem(ie)&&localStorage.setItem(ie,JSON.stringify([]));var e=JSON.parse(localStorage.getItem(ie)),t=[{id:"1",title:"Development"},{id:"2",title:"Marketing"},{id:"3",title:"Accounting"},{id:"4",title:"HR"}];return e.map((function(e){return Object(B.a)(Object(B.a)({},e),{},{department:t[e.departmentId-1].title})}))},le=(new Date,a(80)),oe=a.n(le),se=a(163),ue=a(168),be=a(166),de=a(167),je=a(164),me=a(165),ge=a(179),he=a(175),pe=Object(o.a)((function(e){return{table:{marginTop:e.spacing(3),"& thead th":{fontWeight:"600",color:e.palette.primary.main,backgroundColor:e.palette.primary.light},"& tbody td":{fontWeight:"300"},"& tbody tr:hover":{backgroundColor:"#fffbf2",cursor:"pointer"}}}})),fe=function(e,t,a){var i=pe(),c=[5,10,25],l=Object(r.useState)(0),o=Object(z.a)(l,2),s=o[0],u=o[1],b=Object(r.useState)(c[s]),d=Object(z.a)(b,2),j=d[0],m=d[1],g=Object(r.useState)(),h=Object(z.a)(g,2),p=h[0],f=h[1],O=Object(r.useState)(),x=Object(z.a)(O,2),v=x[0],y=x[1],C=function(e,t){u(t)},S=function(e){m(parseInt(e.target.value,10)),u(0)},N=function(e,t,a){return t[a]<e[a]?-1:t[a]>e[a]?1:0};return{TblContainer:function(e){var t=e.children;return Object(n.jsx)(je.a,{className:i.table,children:t})},TblHead:function(){return Object(n.jsx)(me.a,{children:Object(n.jsx)(be.a,{children:t.map((function(e){return Object(n.jsx)(de.a,{sortDirection:v===e.id&&p,children:e.disableSorting?e.label:Object(n.jsx)(ge.a,{active:v===e.id,direction:v===e.id?p:"asc",onClick:function(){return t=e.id,f(v===t&&"asc"===p?"desc":"asc"),void y(t);var t},children:e.label})},e.id)}))})})},TblPagination:function(){return Object(n.jsx)(he.a,{component:"div",rowsPerPageOptions:c,count:e.length,rowsPerPage:j,page:s,onChangePage:C,onChangeRowsPerPage:S})},recordsAfterPagingAndSorting:function(){return function(e,t){var a=e.map((function(e,t){return[e,t]}));return a.sort((function(e,a){var n=t(e[0],a[0]);return 0!==n?n:e[1]-a[1]})),a.map((function(e){return e[0]}))}(a.fn(e),function(e,t){return"desc"===e?function(e,a){return N(e,a,t)}:function(e,a){return-N(e,a,t)}}(p,v)).slice(s*j,(s+1)*j)}}},Oe=a(180),xe=Object(o.a)((function(e){return{pageContent:{margin:e.spacing(5),padding:e.spacing(3)},searchinput:{width:"75%"}}})),ve=[{id:"fullName",label:"Employee Name"},{id:"email",label:"Email Address (Personal)"},{id:"mobile",label:"Mobile Number"},{id:"department",label:"Department",disableSorting:!0}],ye=function(){var e=xe(),t=Object(r.useState)(ce()),a=Object(z.a)(t,2),i=a[0],c=a[1],l=Object(r.useState)({fn:function(e){return e}}),o=Object(z.a)(l,2),s=o[0],u=o[1],b=fe(i,ve,s),d=b.TblContainer,j=b.TblHead,g=b.TblPagination,h=b.recordsAfterPagingAndSorting;Object(r.useState)((function(){localStorage.clear(),localStorage.setItem("employeeId","6"),localStorage.setItem("employees",JSON.stringify([{id:1,fullName:"Mahendra AR",email:"mahendra@bellabona.com",mobile:"8105693159",city:"Bengaluru",gender:"male",departmentId:"1",hireDate:"2020-11-20T01:31:09.992Z",isPermanent:!0},{id:2,fullName:"Raj",email:"raj@bellabona.com",mobile:"1234567890",city:"Mumbai",gender:"male",departmentId:"1",hireDate:"2020-11-20T01:31:09.992Z",isPermanent:!0},{id:3,fullName:"Rineesh",email:"rinessh@bellabona.com",mobile:"1234567890",city:"Kochi",gender:"male",departmentId:"1",hireDate:"2020-11-20T01:31:09.992Z",isPermanent:!0},{id:4,fullName:"Gaurav",email:"gaurav@bellabona.com",mobile:"1234567890",city:"Bengaluru",gender:"male",departmentId:"1",hireDate:"2020-11-20T01:31:09.992Z",isPermanent:!0},{id:5,fullName:"Mehul",email:"mehul@bellabona.com",mobile:"1234567890",city:"Mumbai",gender:"male",departmentId:"1",hireDate:"2020-11-20T01:31:09.992Z",isPermanent:!0},{id:6,fullName:"Tushar",email:"tushar@bellabona.com",mobile:"1234567890",city:"Kochi",gender:"male",departmentId:"1",hireDate:"2020-11-20T01:31:09.992Z",isPermanent:!0}])),c(ce())}),[]);return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(A,{title:"New Employee",subTitle:"Form design wth validation",icon:Object(n.jsx)(oe.a,{fontSize:"large"})}),Object(n.jsxs)(k.a,{className:e.pageContent,children:[Object(n.jsx)(m.a,{children:Object(n.jsx)(re.Input,{className:e.searchinput,label:"Search Employees",InputProps:{startAdornment:Object(n.jsx)(se.a,{position:"start",children:Object(n.jsx)(Oe.a,{})})},onChange:function(e){var t=e.target;u({fn:function(e){return""===t.value?e:e.filter((function(e){return e.fullName.toLowerCase().includes(t.value)}))}})}})}),Object(n.jsxs)(d,{children:[Object(n.jsx)(j,{}),Object(n.jsx)(ue.a,{children:h().map((function(e){return Object(n.jsxs)(be.a,{children:[Object(n.jsx)(de.a,{children:e.fullName}),Object(n.jsx)(de.a,{children:e.email}),Object(n.jsx)(de.a,{children:e.mobile}),Object(n.jsx)(de.a,{children:e.department})]},e.id)}))})]}),Object(n.jsx)(g,{})]})]})},Ce=Object(l.a)({palette:{primary:{main:"#333996",light:"#3c44b126"},secondary:{main:"#f83245",light:"#f8324526"},background:{default:"#f4f5fd"}},overrides:{MuiAppBar:{root:{transform:"translateZ(0)"}}},props:{MuiIconButton:{disableRipple:!0}}}),Se=Object(o.a)({appMain:{paddingLeft:"320px",width:"100%"}});var Ne=function(){var e=Se();return Object(n.jsxs)(s.a,{theme:Ce,children:[Object(n.jsx)(d,{}),Object(n.jsxs)("div",{className:e.appMain,children:[Object(n.jsx)(P,{}),Object(n.jsx)(ye,{})]}),Object(n.jsx)(u.a,{})]})},Ie=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,182)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,i=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),i(e),c(e)}))};c.a.render(Object(n.jsx)(Ne,{}),document.getElementById("root")),Ie()}},[[114,1,2]]]);
//# sourceMappingURL=main.c2da82bd.chunk.js.map