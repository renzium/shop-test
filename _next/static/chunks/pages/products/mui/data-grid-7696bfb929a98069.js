(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1179],{43404:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/products/mui/data-grid",function(){return i(18731)}])},25814:function(e,n,i){"use strict";i.d(n,{Z:function(){return f}});var r=i(14251),t=i(52875),a=i(44747),l=i(85893),s=i(45697),o=i.n(s),d=i(41664),c=i.n(d),h=i(15861),u=i(12963),m=i(87357),x=i(23795);function f(e){var n=e.links,i=e.activeLast,s=void 0!==i&&i,o=(0,a.Z)(e,["links","activeLast"]),d=n[n.length-1].name,c=n.map((function(e){return(0,l.jsx)(g,{link:e},e.name)})),x=n.map((function(e){return(0,l.jsx)("div",{children:e.name!==d?(0,l.jsx)(g,{link:e}):(0,l.jsx)(h.Z,{variant:"body2",sx:{maxWidth:260,overflow:"hidden",whiteSpace:"nowrap",color:"text.disabled",textOverflow:"ellipsis"},children:d})},e.name)}));return(0,l.jsx)(u.Z,(0,t.Z)((0,r.Z)({separator:(0,l.jsx)(m.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})},o),{children:s?c:x}))}function g(e){var n=e.link,i=n.href,r=void 0===i?"":i,t=n.name,a=n.icon;return(0,l.jsx)(c(),{href:r,passHref:!0,children:(0,l.jsxs)(x.Z,{variant:"body2",sx:{lineHeight:2,display:"flex",alignItems:"center",color:"text.primary","& > div":{display:"inherit"}},children:[a&&(0,l.jsx)(m.Z,{sx:{mr:1,"& svg":{width:20,height:20}},children:a}),t]},t)})}f.propTypes={activeLast:o().bool,links:o().array.isRequired},g.propTypes={link:o().shape({href:o().string,icon:o().any,name:o().string})}},38187:function(e,n,i){"use strict";i.d(n,{Z:function(){return u}});var r=i(14251),t=i(44747),a=i(85893),l=i(45697),s=i.n(l),o=i(87357),d=i(15861),c=i(23795),h=i(25814);function u(e){var n=e.links,i=e.action,l=e.heading,s=e.moreLink,u=void 0===s?[]:s,m=e.sx,x=(0,t.Z)(e,["links","action","heading","moreLink","sx"]);return(0,a.jsxs)(o.Z,{sx:(0,r.Z)({mb:5},m),children:[(0,a.jsxs)(o.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,a.jsxs)(o.Z,{sx:{flexGrow:1},children:[(0,a.jsx)(d.Z,{variant:"h4",gutterBottom:!0,children:l}),(0,a.jsx)(h.Z,(0,r.Z)({links:n},x))]}),i&&(0,a.jsx)(o.Z,{sx:{flexShrink:0},children:i})]}),(0,a.jsx)(o.Z,{sx:{mt:2},children:"string"===typeof u?(0,a.jsx)(c.Z,{href:u,target:"_blank",variant:"body2",children:u}):u.map((function(e){return(0,a.jsx)(c.Z,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"table"},children:e},e)}))})]})}u.propTypes={links:s().array,action:s().node,heading:s().string.isRequired,moreLink:s().oneOfType([s().string,s().array]),sx:s().object}},18731:function(e,n,i){"use strict";i.r(n),i.d(n,{default:function(){return R}});var r=i(85893),t=i(90948),a=i(87357),l=i(53156),s=i(15861),o=i(23795),d=i(26447),c=i(66242),h=i(78445),u=i(76939),m=i(58866),x=i(82771),f=i(38187),g=i(50384),p=i(93946),v=i(61330),Z=i(34444),j=[{field:"id",headerName:"ID",width:120},{field:"firstName",headerName:"First name",width:160,editable:!0},{field:"lastName",headerName:"Last name",width:160,editable:!0},{field:"age",headerName:"Age",type:"number",width:120,editable:!0,align:"center",headerAlign:"center"},{field:"fullName",headerName:"Full name",description:"This column has a value getter and is not sortable.",flex:1,valueGetter:function(e){return"".concat(e.row.firstName||""," ").concat(e.row.lastName||"")}},{field:"action",headerName:" ",width:80,align:"right",sortable:!1,disableColumnMenu:!0,renderCell:function(){return(0,r.jsx)(p.Z,{children:(0,r.jsx)(Z.Z,{icon:"eva:more-vertical-fill",sx:{width:20,height:20}})})}}];function b(){return(0,r.jsx)(g._,{columns:j,rows:v.yJ,checkboxSelection:!0,disableSelectionOnClick:!0})}var w=i(14251),y=i(52875),k=i(45697),N=i.n(k),C=i(67294),_=i(2734),T=i(91440),L=i(81458),A=i(89027),S=i(27798),I=i(2410),O=i(87850),P=i(41451),D=i(2813),E=[{field:"id",hide:!0},{field:"avatar",headerName:"Avatar",align:"center",headerAlign:"center",width:64,sortable:!1,filterable:!1,disableColumnMenu:!0,renderCell:function(e){var n=e.row.name;return(0,r.jsx)(D.Z,{color:(0,I.Z)(n).color,sx:{width:36,height:36},children:(0,I.Z)(n).name})}},{field:"name",headerName:"Name",flex:1,editable:!0},{field:"email",headerName:"Email",flex:1,editable:!0,renderCell:function(e){var n=e.row.email;return(0,r.jsx)(s.Z,{variant:"body2",sx:{textDecoration:"underline"},noWrap:!0,children:n})}},{field:"lastLogin",type:"dateTime",headerName:"Last login",align:"right",headerAlign:"right",width:200},{field:"rating",type:"number",headerName:"Rating",width:160,disableColumnMenu:!0,renderCell:function(e){return(0,r.jsx)(T.Z,{size:"small",value:e.row.rating,precision:.5,readOnly:!0})}},{field:"status",type:"singleSelect",headerName:"Status",valueOptions:["online","away","busy"],align:"center",headerAlign:"center",width:120,renderCell:function(e){return function(e){var n="light"===(0,_.Z)().palette.mode;return(0,r.jsx)(P.Z,{variant:n?"ghost":"filled",color:("busy"===e?"error":"away"===e&&"warning")||"success",sx:{textTransform:"capitalize",mx:"auto"},children:e})}(e.row.status)}},{field:"isAdmin",type:"boolean",align:"center",headerAlign:"center",width:120,renderCell:function(e){var n=e.row.isAdmin;return(0,r.jsx)(r.Fragment,{children:n?(0,r.jsx)(Z.Z,{icon:"eva:checkmark-circle-2-fill",sx:{width:20,height:20,color:"primary.main"}}):"-"})}},{field:"performance",type:"number",headerName:"Performance",align:"center",headerAlign:"center",width:160,renderCell:function(e){var n=e.row.performance;return(0,r.jsxs)(d.Z,{spacing:1,direction:"row",alignItems:"center",sx:{px:1,width:1,height:1},children:[(0,r.jsx)(L.Z,{value:n,variant:"determinate",color:(n<30?"error":n>30&&n<70&&"warning")||"primary",sx:{width:1,height:6}}),(0,r.jsx)(s.Z,{variant:"caption",sx:{width:80},children:(0,O.f2)(n)})]})}},{field:"action",headerName:" ",align:"right",width:80,sortable:!1,filterable:!1,disableColumnMenu:!0,renderCell:function(e){var n=e.row.id;return(0,r.jsx)(p.Z,{onClick:function(){console.log("selectedID",n)},children:(0,r.jsx)(Z.Z,{icon:"eva:more-vertical-fill",sx:{width:20,height:20}})})}}];function F(){var e=(0,C.useState)([]),n=e[0],i=e[1];if(E.length>0){var t=E.find((function(e){return"rating"===e.field})),a=E.findIndex((function(e){return"rating"===e.field})),l=(0,A.UY)().map((function(e){return(0,y.Z)((0,w.Z)({},e),{InputComponent:M})}));E[a]=(0,y.Z)((0,w.Z)({},t),{filterOperators:l})}var s=v.yJ.filter((function(e){return n.includes(e.id)}));return console.log("selected",s),(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(g._,{checkboxSelection:!0,disableSelectionOnClick:!0,rows:v.yJ,columns:E,pagination:!0,onSelectionModelChange:function(e){i(e)},components:{Toolbar:S.n}})})}function M(e){var n=e.item,i=e.applyValue;return(0,r.jsx)(a.Z,{sx:{p:1,height:1,alignItems:"flex-end",display:"flex"},children:(0,r.jsx)(T.Z,{size:"small",precision:.5,placeholder:"Filter value",value:Number(n.value),onChange:function(e,r){i((0,y.Z)((0,w.Z)({},n),{value:r}))}})})}M.propTypes={applyValue:N().func,item:N().shape({value:N().number})};var G=(0,t.ZP)("div")((function(e){var n=e.theme;return{paddingTop:n.spacing(11),paddingBottom:n.spacing(15)}}));function R(){return(0,r.jsx)(x.Z,{title:"Components: DataGrid",children:(0,r.jsxs)(G,{children:[(0,r.jsx)(a.Z,{sx:{pt:6,pb:1,mb:10,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:(0,r.jsxs)(l.Z,{children:[(0,r.jsx)(f.Z,{heading:"DataGrid",links:[{name:"Components",href:u.ko.components},{name:"DataGrid"}],moreLink:"https://material-ui.com/components/data-grid",sx:{mb:0}}),(0,r.jsxs)(s.Z,{variant:"body2",sx:{my:3},children:["This component includes 2 ",(0,r.jsx)("strong",{children:"Free"})," and ",(0,r.jsx)("strong",{children:"Paid"})," versions from MUI.",(0,r.jsx)("br",{}),"Paid version will have more features. Please read more"," ",(0,r.jsx)(o.Z,{href:"https://material-ui.com/components/data-grid",target:"_blank",rel:"noopener",children:"here"})]})]})}),(0,r.jsx)(l.Z,{children:(0,r.jsxs)(d.Z,{spacing:5,children:[(0,r.jsxs)(c.Z,{children:[(0,r.jsx)(h.Z,{title:"Basic",sx:{mb:2}}),(0,r.jsx)(a.Z,{sx:{height:390},children:(0,r.jsx)(b,{})})]}),(0,r.jsxs)(c.Z,{children:[(0,r.jsx)(h.Z,{title:"Custom",sx:{mb:2}}),(0,r.jsx)(a.Z,{sx:{height:720},children:(0,r.jsx)(F,{})})]})]})})]})})}R.getLayout=function(e){return(0,r.jsx)(m.Z,{variant:"main",children:e})}}},function(e){e.O(0,[9448,2174,1440,7685,3279,1866,8866,9774,2888,179],(function(){return n=43404,e(e.s=n);var n}));var n=e.O();_N_E=n}]);