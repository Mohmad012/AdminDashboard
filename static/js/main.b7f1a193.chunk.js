(this.webpackJsonpprofileapp=this.webpackJsonpprofileapp||[]).push([[0],{188:function(e){e.exports=JSON.parse('[{"userInputs":[{"id":1,"label":"Username","type":"text","placeholder":"john_doe"},{"id":2,"label":"Name and surname","type":"text","placeholder":"John Doe"},{"id":3,"label":"Email","type":"mail","placeholder":"john_doe@gmail.com"},{"id":4,"label":"Phone","type":"text","placeholder":"+1 234 567 89"},{"id":5,"label":"Password","type":"password"},{"id":6,"label":"Address","type":"text","placeholder":"Elton St. 216 NewYork"},{"id":7,"label":"Country","type":"text","placeholder":"USA"}],"productInputs":[{"id":1,"label":"Title","type":"text","placeholder":"Apple Macbook Pro"},{"id":2,"label":"Description","type":"text","placeholder":"Description"},{"id":3,"label":"Category","type":"text","placeholder":"Computers"},{"id":4,"label":"Price","type":"text","placeholder":"100"},{"id":5,"label":"Stock","type":"text","placeholder":"in stock"}]}]')},326:function(e,s,t){},329:function(e,s,t){},330:function(e,s,t){},332:function(e,s,t){},333:function(e,s,t){},335:function(e,s,t){},468:function(e,s,t){},469:function(e,s,t){},470:function(e,s,t){},474:function(e,s,t){},475:function(e,s,t){},476:function(e,s,t){},478:function(e,s,t){},479:function(e,s,t){},480:function(e,s,t){"use strict";t.r(s);var c=t(0),a=t(48),i=t.n(a),n=t(67),l=t(235),r=t(41),o=t(238),j=t.n(o),d=t(241),m=t.n(d),b=t(243),h=t.n(b),p=t(245),x=t.n(p),O=t(244),u=t.n(O),N=t(246),g=t.n(N),v=t(247),f=t.n(v),y=t(248),w=t.n(y),C=t(249),k=t.n(C),S=(t(326),t(6)),M=function(e,s){switch(s.type){case"LIGHT":return{darkMode:!1};case"DARK":return{darkMode:!0};case"TOGGLE":return{darkMode:!e.darkMode};default:return e}},I=t(1),A={darkMode:!0},L=Object(c.createContext)(A),_=function(e){var s=e.children,t=Object(c.useReducer)(M,A),a=Object(S.a)(t,2),i=a[0],n=a[1];return Object(I.jsx)(L.Provider,{value:{darkMode:i.darkMode,dispatch:n},children:s})},D=function(){var e=Object(c.useContext)(L),s=e.darkMode,t=e.dispatch;return Object(I.jsx)("nav",{className:"navbar",children:Object(I.jsxs)("div",{className:"wrapper",children:[Object(I.jsxs)("div",{className:"search",children:[Object(I.jsx)("input",{type:"text",placeholder:"Search. . ."}),Object(I.jsx)(m.a,{className:"icon"})]}),Object(I.jsxs)("div",{className:"items",children:[Object(I.jsxs)("div",{className:"item",children:[Object(I.jsx)(h.a,{className:"icon"}),"English"]}),Object(I.jsx)("div",{className:"item",style:{cursor:"pointer"},onClick:function(){return t({type:"TOGGLE"})},children:s?Object(I.jsx)(u.a,{className:"icon"}):Object(I.jsx)(x.a,{className:"icon"})}),Object(I.jsx)("div",{className:"item",children:Object(I.jsx)(g.a,{className:"icon"})}),Object(I.jsxs)("div",{className:"item",children:[Object(I.jsx)(f.a,{className:"icon"}),Object(I.jsx)("div",{className:"counter",children:"1"})]}),Object(I.jsxs)("div",{className:"item",children:[Object(I.jsx)(w.a,{className:"icon"}),Object(I.jsx)("div",{className:"counter",children:"2"})]}),Object(I.jsx)("div",{className:"item",children:Object(I.jsx)(k.a,{className:"icon"})}),Object(I.jsx)("div",{className:"item",children:Object(I.jsx)("img",{src:"https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",alt:"",className:"avatar"})})]})]})})},T=(t(329),t(251)),U=t.n(T),P=t(252),E=t.n(P),R=t(253),F=t.n(R),J=t(254),G=t.n(J),z=t(255),K=t.n(z),Y=t(256),V=t.n(Y),B=t(257),W=t.n(B),H=t(258),Q=t.n(H),$=t(259),q=t.n($),X=t(260),Z=t.n(X),ee=t(261),se=t.n(ee),te=t(262),ce=t.n(te),ae=(t(330),function(){var e=Object(c.useContext)(L).dispatch;return Object(I.jsxs)("div",{className:"sidebar",children:[Object(I.jsx)("div",{className:"top",children:Object(I.jsx)(n.b,{to:"/",style:{textDecoration:"none"},children:Object(I.jsx)("span",{className:"logo",children:"Admin Dashboard"})})}),Object(I.jsx)("hr",{}),Object(I.jsx)("div",{className:"center",children:Object(I.jsxs)("ul",{children:[Object(I.jsx)("p",{className:"title",children:"MAIN"}),Object(I.jsxs)("li",{children:[Object(I.jsx)(U.a,{className:"icon"}),Object(I.jsx)("span",{children:"Dashboard"})]}),Object(I.jsx)("p",{className:"title",children:"LISTS"}),Object(I.jsx)(n.b,{to:"/users",style:{textDecoration:"none"},children:Object(I.jsxs)("li",{children:[Object(I.jsx)(E.a,{className:"icon"}),Object(I.jsx)("span",{children:"Users"})]})}),Object(I.jsx)(n.b,{to:"/products",style:{textDecoration:"none"},children:Object(I.jsxs)("li",{children:[Object(I.jsx)(F.a,{className:"icon"}),Object(I.jsx)("span",{children:"Products"})]})}),Object(I.jsxs)("li",{children:[Object(I.jsx)(G.a,{className:"icon"}),Object(I.jsx)("span",{children:"Orders"})]}),Object(I.jsxs)("li",{children:[Object(I.jsx)(K.a,{className:"icon"}),Object(I.jsx)("span",{children:"Delivery"})]}),Object(I.jsx)("p",{className:"title",children:"USEFUL"}),Object(I.jsxs)("li",{children:[Object(I.jsx)(V.a,{className:"icon"}),Object(I.jsx)("span",{children:"Stats"})]}),Object(I.jsxs)("li",{children:[Object(I.jsx)(W.a,{className:"icon"}),Object(I.jsx)("span",{children:"Notifications"})]}),Object(I.jsx)("p",{className:"title",children:"SERVICE"}),Object(I.jsxs)("li",{children:[Object(I.jsx)(Q.a,{className:"icon"}),Object(I.jsx)("span",{children:"System Health"})]}),Object(I.jsxs)("li",{children:[Object(I.jsx)(q.a,{className:"icon"}),Object(I.jsx)("span",{children:"Logs"})]}),Object(I.jsxs)("li",{children:[Object(I.jsx)(Z.a,{className:"icon"}),Object(I.jsx)("span",{children:"Settings"})]}),Object(I.jsx)("p",{className:"title",children:"USER"}),Object(I.jsxs)("li",{children:[Object(I.jsx)(se.a,{className:"icon"}),Object(I.jsx)("span",{children:"Profile"})]}),Object(I.jsxs)("li",{children:[Object(I.jsx)(ce.a,{className:"icon"}),Object(I.jsx)("span",{children:"Logout"})]})]})}),Object(I.jsxs)("div",{className:"bottom",children:[Object(I.jsx)("div",{className:"colorOption",onClick:function(){return e({type:"LIGHT"})}}),Object(I.jsx)("div",{className:"colorOption",onClick:function(){return e({type:"DARK"})}})]})]})}),ie=(t(332),t(267)),ne=t.n(ie),le=t(263),re=t.n(le),oe=t(266),je=t.n(oe),de=t(264),me=t.n(de),be=t(265),he=t.n(be),pe=function(e){var s,t,c,a,i;switch(e.type){case"user":i={title:"USERS",isMoney:!1,link:"See all users",icon:Object(I.jsx)(re.a,{className:"icon",style:{color:"crimson",backgroundColor:"rgba(255, 0, 0, 0.2)"}})};break;case"order":i={title:"ORDERS",isMoney:!1,link:"View all orders",icon:Object(I.jsx)(me.a,{className:"icon",style:{backgroundColor:"rgba(218, 165, 32, 0.2)",color:"golden rod"}})};break;case"earrning":i={title:"EARNINGS",isMoney:!0,link:"View net earnings",icon:Object(I.jsx)(he.a,{className:"icon",style:{backgroundColor:"rgba(0, 128, 0, 0.2)",color:"green"}})};break;case"balance":i={title:"BALANCE",isMoney:!0,link:"See details",icon:Object(I.jsx)(je.a,{className:"icon",style:{backgroundColor:"rgba(128, 0, 128, 0.2)",color:"purple"}})}}return Object(I.jsxs)("div",{className:"widget",children:[Object(I.jsxs)("div",{className:"left",children:[Object(I.jsx)("span",{className:"title",children:null===(s=i)||void 0===s?void 0:s.title}),Object(I.jsxs)("span",{className:"counter",children:[(null===(t=i)||void 0===t?void 0:t.isMoney)&&"$"," ",100]}),Object(I.jsx)("span",{className:"link",children:null===(c=i)||void 0===c?void 0:c.link})]}),Object(I.jsxs)("div",{className:"right",children:[Object(I.jsxs)("div",{className:"percentage positive",children:[Object(I.jsx)(ne.a,{}),20," %"]}),null===(a=i)||void 0===a?void 0:a.icon]})]})},xe=(t(333),t(334),t(269)),Oe=t.n(xe),ue=t(268),Ne=t(270),ge=t.n(Ne),ve=t(271),fe=t.n(ve),ye=[{name:"Target",sttusClass:"negative",price:"$12.4k"},{name:"Last Week",sttusClass:"positive",price:"$12.4k"},{name:"Last Month",sttusClass:"positive",price:"$12.4k"}],we=function(){return Object(I.jsxs)("div",{className:"featured",children:[Object(I.jsxs)("div",{className:"top",children:[Object(I.jsx)("h1",{className:"title",children:" Total Revenue"}),Object(I.jsx)(Oe.a,{fontSize:"small "})]}),Object(I.jsxs)("div",{className:"bottom",children:[Object(I.jsx)("div",{className:"featuredChart",children:Object(I.jsx)(ue.a,{value:70,text:"70%",strokeWidth:5})}),Object(I.jsx)("p",{className:"title",children:" Total sales made today "}),Object(I.jsx)("p",{className:"amount",children:" $420 "}),Object(I.jsx)("p",{className:"desc",children:"Previous transactions processing. Last payments may not be included ."}),Object(I.jsx)("div",{className:"summary",children:ye.map((function(e,s){var t=e.name,c=e.sttusClass,a=e.price;return Object(I.jsxs)("div",{className:"item",children:[Object(I.jsxs)("div",{className:"itemTitle",children:[" ",t]}),Object(I.jsxs)("div",{className:"itemResult ".concat(c),children:["negative"===c?Object(I.jsx)(ge.a,{fontsize:"smallf"}):Object(I.jsx)(fe.a,{fontsize:"smallf"}),Object(I.jsx)("div",{className:"resultAmount",children:a})]})]},s)}))})]})]})},Ce=(t(335),t(543)),ke=t(551),Se=t(285),Me=t(547),Ie=t(127),Ae=t(293),Le=[{name:"January",Total:1200},{name:"February",Total:2100},{name:"March",Total:80},{name:"April",Total:1600},{name:"May",Total:900},{name:"June",Total:1700}],_e=function(e){var s=e.aspect,t=void 0===s?2:s;return Object(I.jsxs)("div",{className:"chart",children:[Object(I.jsx)("div",{className:"title",children:" Last 6 Months (Revenue)"}),Object(I.jsx)(Ce.a,{width:"100%",aspect:t,children:Object(I.jsxs)(ke.a,{width:730,height:250,data:Le,margin:{top:10,right:30,left:0,bottom:0},children:[Object(I.jsx)("defs",{children:Object(I.jsxs)("linearGradient",{id:"total",x1:"0",y1:"0",x2:"0",y2:"1",children:[Object(I.jsx)("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),Object(I.jsx)("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})]})}),Object(I.jsx)(Se.a,{dataKey:"name",stroke:"gray"}),Object(I.jsx)(Me.a,{strokeDasharray:"3 3",className:"chartGrid"}),Object(I.jsx)(Ie.a,{}),Object(I.jsx)(Ae.a,{type:"monotone",dataKey:"Total",stroke:"#8884d8",fillOpacity:1,fill:"url(#total)"}),Object(I.jsx)(Ae.a,{type:"monotone",dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#colorPv)"})]})})]})},De=(t(468),t(469),t(554)),Te=t(558),Ue=t(557),Pe=t(552),Ee=t(555),Re=t(556),Fe=t(553);function Je(e,s,t,c,a,i,n,l){return{id:e,product:s,img:t,customer:c,date:a,amount:i,method:n,status:l}}var Ge,ze=[Je(1143155,"Acer Nitro 5","https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg","John Smith","1 March",785,"Cash on Delivery","Approved"),Je(2235235,"Playstation 5","https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg","Michael Doe","1 March",900,"Online Payment","Pending"),Je(2342353,"Redragon S101","https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg","John Smith","1 March",35,"Cash on Delivery","Pending"),Je(2357741,"Razer Blade 15","https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg","Jane Smith","1 March",920,"Online","Approved"),Je(2342355,"ASUS ROG Strix","https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg","Harold Carol","1 March",2e3,"Online","Pending")],Ke=function(){return Object(I.jsx)(Pe.a,{className:"table",component:Fe.a,children:Object(I.jsxs)(De.a,{sx:{minWidth:650},"aria-label":"simple table",children:[Object(I.jsx)(Ee.a,{children:Object(I.jsxs)(Re.a,{children:[Object(I.jsx)(Ue.a,{className:"tableCell",children:" Tracking ID "}),Object(I.jsx)(Ue.a,{className:"tableCell",children:" Product"}),Object(I.jsx)(Ue.a,{className:"tableCell",children:" Customer "}),Object(I.jsx)(Ue.a,{className:"tableCell",children:" Date "}),Object(I.jsx)(Ue.a,{className:"tableCell",children:" Amount "}),Object(I.jsx)(Ue.a,{className:"tableCell",children:" Payment Method "}),Object(I.jsx)(Ue.a,{className:"tableCell",children:" Statusg "})]})}),Object(I.jsx)(Te.a,{children:ze.map((function(e){return Object(I.jsxs)(Re.a,{children:[Object(I.jsx)(Ue.a,{className:"tableCell",children:e.id}),Object(I.jsx)(Ue.a,{className:"tableCell",children:Object(I.jsxs)("div",{className:"cellWrapper",children:[Object(I.jsx)("img",{src:e.img,alt:"",className:"image"}),e.product]})}),Object(I.jsx)(Ue.a,{className:"tableCell",children:e.customer}),Object(I.jsx)(Ue.a,{className:"tableCell",children:e.date}),Object(I.jsx)(Ue.a,{className:"tableCell",children:e.amount}),Object(I.jsx)(Ue.a,{className:"tableCell",children:e.method}),Object(I.jsx)(Ue.a,{className:"tableCell",children:Object(I.jsx)("span",{className:"status ".concat(e.status),children:e.status})})]},e.id)}))})]})})},Ye=function(){return Object(I.jsxs)("div",{className:"home",children:[Object(I.jsx)(ae,{}),Object(I.jsxs)("div",{className:"homeContainer",children:[Object(I.jsx)(D,{}),Object(I.jsxs)("div",{className:"widgets",children:[Object(I.jsx)(pe,{type:"user"}),Object(I.jsx)(pe,{type:"order"}),Object(I.jsx)(pe,{type:"earrning"}),Object(I.jsx)(pe,{type:"balance"})]}),Object(I.jsxs)("div",{className:"charts",children:[Object(I.jsx)(we,{}),Object(I.jsx)(_e,{})]}),Object(I.jsxs)("div",{className:"listContainer",children:[Object(I.jsx)("div",{className:"listTitle",children:"latest transactions"}),Object(I.jsx)(Ke,{})]})]})]})},Ve=t(55),Be=(t(138).a.div(Ge||(Ge=Object(Ve.a)(["\n    height:30px;\n    background-color:#7e403b;\n    color:white;\n    display:flex;\n    align-items:center;\n    justify-content:center;\n    font-size:14px;\n    font-weight:500;\n"]))),function(){return Object(I.jsx)(Ye,{})}),We=(t(470),t(549)),He=[{field:"id",headerName:"ID",width:70},{field:"user",headerName:"User",width:230,renderCell:function(e){return Object(I.jsxs)("div",{className:"cellWithImg",children:[Object(I.jsx)("img",{className:"cellImg",src:e.row.img,alt:"avatar"}),e.row.username]})}},{field:"email",headerName:"Email",width:230},{field:"age",headerName:"Age",width:100},{field:"status",headerName:"Status",width:160,renderCell:function(e){return Object(I.jsx)("div",{className:"cellWithStatus ".concat(e.row.status),children:e.row.status})}}],Qe=[{id:1,username:"Snow",img:"https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",status:"active",email:"1snow@gmail.com",age:35},{id:2,username:"Jamie Lannister",img:"https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",email:"2snow@gmail.com",status:"passive",age:42},{id:3,username:"Lannister",img:"https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",email:"3snow@gmail.com",status:"pending",age:45},{id:4,username:"Stark",img:"https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",email:"4snow@gmail.com",status:"active",age:16},{id:5,username:"Targaryen",img:"https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",email:"5snow@gmail.com",status:"passive",age:22},{id:6,username:"Melisandre",img:"https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",email:"6snow@gmail.com",status:"active",age:15},{id:7,username:"Clifford",img:"https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",email:"7snow@gmail.com",status:"passive",age:44},{id:8,username:"Frances",img:"https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",email:"8snow@gmail.com",status:"active",age:36},{id:9,username:"Roxie",img:"https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",email:"snow@gmail.com",status:"pending",age:65},{id:10,username:"Roxie",img:"https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",email:"snow@gmail.com",status:"active",age:65}],$e=function(){var e=Object(c.useState)(Qe),s=Object(S.a)(e,2),t=s[0],a=s[1],i=[{field:"action",headerName:"Action",width:200,renderCell:function(e){return Object(I.jsxs)("div",{className:"cellAction",children:[Object(I.jsx)(n.b,{to:"/users/test",style:{textDecoration:"none"},children:Object(I.jsx)("div",{className:"viewButton",children:"View"})}),Object(I.jsx)("div",{className:"deleteButton",onClick:function(){return s=e.row.id,void a(t.filter((function(e){return e.id!==s})));var s},children:"Delete"})]})}}];return Object(I.jsxs)("div",{className:"datatable",children:[Object(I.jsxs)("div",{className:"datatableTitle",children:["Add New User",Object(I.jsx)(n.b,{to:"/users/new",className:"link",children:"Add New"})]}),Object(I.jsx)(We.a,{className:"datagrid",rows:t,columns:He.concat(i),pageSize:9,rowsPerPageOptions:[9],checkboxSelection:!0})]})},qe=(t(474),function(){return Object(I.jsxs)("div",{className:"list",children:[Object(I.jsx)(ae,{}),Object(I.jsxs)("div",{className:"listContainer",children:[Object(I.jsx)(D,{}),Object(I.jsx)($e,{})]})]})}),Xe=function(){return Object(I.jsx)(qe,{})},Ze=(t(475),function(){return Object(I.jsxs)("div",{className:"single",children:[Object(I.jsx)(ae,{}),Object(I.jsxs)("div",{className:"singleContainer",children:[Object(I.jsx)(D,{}),Object(I.jsxs)("div",{className:"top",children:[Object(I.jsxs)("div",{className:"left",children:[Object(I.jsx)("div",{className:"editButton",children:"Edit"}),Object(I.jsx)("h1",{className:"title",children:"Information"}),Object(I.jsxs)("div",{className:"item",children:[Object(I.jsx)("img",{src:"https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",alt:"",className:"itemImg"}),Object(I.jsxs)("div",{className:"details",children:[Object(I.jsx)("h1",{className:"itemTitle",children:"Jane Doe"}),Object(I.jsxs)("div",{className:"detailItem",children:[Object(I.jsx)("span",{className:"itemKey",children:"Email:"}),Object(I.jsx)("span",{className:"itemValue",children:"janedoe@gmail.com"})]}),Object(I.jsxs)("div",{className:"detailItem",children:[Object(I.jsx)("span",{className:"itemKey",children:"Phone:"}),Object(I.jsx)("span",{className:"itemValue",children:"+1 2345 67 89"})]}),Object(I.jsxs)("div",{className:"detailItem",children:[Object(I.jsx)("span",{className:"itemKey",children:"Address:"}),Object(I.jsx)("span",{className:"itemValue",children:"Elton St. 234 Garden Yd. NewYork"})]}),Object(I.jsxs)("div",{className:"detailItem",children:[Object(I.jsx)("span",{className:"itemKey",children:"Country:"}),Object(I.jsx)("span",{className:"itemValue",children:"USA"})]})]})]})]}),Object(I.jsx)("div",{className:"right",children:Object(I.jsx)(_e,{aspect:3,title:"User Spending ( Last 6 Months)"})})]}),Object(I.jsxs)("div",{className:"bottom",children:[Object(I.jsx)("h1",{className:"title",children:"Last Transactions"}),Object(I.jsx)(Ke,{})]})]})]})}),es=function(){return Object(I.jsx)(Ze,{})},ss=(t(476),t(290)),ts=t.n(ss),cs=function(e){var s=e.props,t=s.InputsData,a=s.title,i=Object(c.useState)(""),n=Object(S.a)(i,2),l=n[0],r=n[1];return console.log("file",l),Object(I.jsxs)("div",{className:"new",children:[Object(I.jsx)(ae,{}),Object(I.jsxs)("div",{className:"newContainer",children:[Object(I.jsx)(D,{}),Object(I.jsx)("div",{className:"top",children:Object(I.jsx)("h1",{children:a})}),Object(I.jsxs)("div",{className:"bottom",children:[Object(I.jsx)("div",{className:"left",children:Object(I.jsx)("img",{src:l?URL.createObjectURL(l):"https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg",width:100,height:100,alt:""})}),Object(I.jsx)("div",{className:"right",children:Object(I.jsxs)("form",{children:[Object(I.jsxs)("div",{className:"formInput",children:[Object(I.jsxs)("label",{htmlFor:"file",children:["Image: ",Object(I.jsx)(ts.a,{className:"icon"})]}),Object(I.jsx)("input",{type:"file",id:"file",onChange:function(e){return r(e.target.files[0])},className:"inputCuFile"})]}),null===t||void 0===t?void 0:t.map((function(e,s){return Object(I.jsxs)("div",{className:"formInput",children:[Object(I.jsx)("label",{children:e.label}),Object(I.jsx)("input",{type:e.type,placeholder:e.placeholder})]},e.id)})),Object(I.jsx)("button",{children:"Send"})]})})]})]})]})},as=function(e){return Object(I.jsx)(cs,{props:e})},is=function(){return Object(I.jsx)("p",{children:"Login"})},ns=function(){return Object(I.jsx)(is,{})},ls=t(188),rs=(t(477),t(478),t(479),function(){Object(c.useEffect)((function(){j.a.init({duration:1e3})}),[]);var e=Object(c.useContext)(L).darkMode;return Object(I.jsxs)("div",{className:e?"app dark":"app",children:[Object(I.jsxs)(l.a,{children:[Object(I.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossorigin:!0}),Object(I.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Urbanist:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap",rel:"stylesheet"})]}),Object(I.jsxs)(r.c,{children:[Object(I.jsx)(r.a,{path:"/",exact:!0,component:Be}),Object(I.jsx)(r.a,{exact:!0,path:"/login",component:ns}),Object(I.jsx)(r.a,{exact:!0,path:"/users",component:Xe}),Object(I.jsx)(r.a,{exact:!0,path:"/users/new",render:function(){return Object(I.jsx)(as,{InputsData:ls[0].userInputs,title:"Add New User"})}}),Object(I.jsx)(r.a,{exact:!0,path:"/users/:userId",component:es}),Object(I.jsx)(r.a,{exact:!0,path:"/products",component:Xe}),Object(I.jsx)(r.a,{exact:!0,path:"/products/new",render:function(){return Object(I.jsx)(as,{InputsData:ls[0].productInputs,title:"Add New Product"})}}),Object(I.jsx)(r.a,{exact:!0,path:"/products/:productId",component:es})]})]})});i.a.render(Object(I.jsx)(n.a,{basename:"AdminDashboard",children:Object(I.jsx)(_,{children:Object(I.jsx)(rs,{})})}),document.getElementById("root"))}},[[480,1,2]]]);
//# sourceMappingURL=main.b7f1a193.chunk.js.map