(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8409],{67070:function(e,n,t){"use strict";t(67294);var r=t(82066),i=t(85893);n.Z=(0,r.Z)((0,i.jsx)("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"}),"KeyboardArrowLeft")},56686:function(e,n,t){"use strict";t(67294);var r=t(82066),i=t(85893);n.Z=(0,r.Z)((0,i.jsx)("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),"KeyboardArrowRight")},72214:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/e-commerce/list",function(){return t(28902)}])},28902:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return U}});var r=t(69779),i=t(85893),o=t(34539),s=t(67294),c=t(41664),l=t.n(c),a=t(11163),u=t(53156),d=t(11057),h=t(66242),f=t(72882),x=t(34386),g=t(93946),m=t(7906),p=t(295),j=t(87357),Z=t(36125),v=t(50480),w=t(72852),C=t(79718),b=t(1308),P=t(76939),_=t(40571),y=t(91899),R=t(58866),S=t(82771),N=t(34444),k=t(75447),E=t(38187),L=t(25825),A=t(45697),D=t.n(A),B=t(49933),T=t(2734),F=t(68509),O=t(53252),I=t(69368),z=t(15861),M=t(18972),W=t(55267),K=t(87850),X=t(41451),G=t(65907);function Q(e){var n=e.row,t=e.selected,r=e.onEditRow,o=e.onSelectRow,c=e.onDeleteRow,l=(0,T.Z)(),a=n.name,u=n.cover,d=n.createdAt,h=n.inventoryType,f=n.price,x=(0,s.useState)(null),g=x[0],m=x[1],p=function(){m(null)};return(0,i.jsxs)(F.Z,{hover:!0,selected:t,children:[(0,i.jsx)(O.Z,{padding:"checkbox",children:(0,i.jsx)(I.Z,{checked:t,onClick:o})}),(0,i.jsxs)(O.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,i.jsx)(G.Z,{disabledEffect:!0,alt:a,src:u,sx:{borderRadius:1.5,width:48,height:48,mr:2}}),(0,i.jsx)(z.Z,{variant:"subtitle2",noWrap:!0,children:a})]}),(0,i.jsx)(O.Z,{children:(0,W.Mu)(d)}),(0,i.jsx)(O.Z,{align:"center",children:(0,i.jsx)(X.Z,{variant:"light"===l.palette.mode?"ghost":"filled",color:("out_of_stock"===h?"error":"low_stock"===h&&"warning")||"success",sx:{textTransform:"capitalize"},children:h?(0,B.G)(h):""})}),(0,i.jsx)(O.Z,{align:"right",children:(0,K.e_)(f)}),(0,i.jsx)(O.Z,{align:"right",children:(0,i.jsx)(L.V7,{open:g,onOpen:function(e){m(e.currentTarget)},onClose:p,actions:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(M.Z,{onClick:function(){c(),p()},sx:{color:"error.main"},children:[(0,i.jsx)(N.Z,{icon:"eva:trash-2-outline"}),"Delete"]}),(0,i.jsxs)(M.Z,{onClick:function(){r(),p()},children:[(0,i.jsx)(N.Z,{icon:"eva:edit-fill"}),"Edit"]})]})})})]})}Q.propTypes={row:D().object,selected:D().bool,onEditRow:D().func,onSelectRow:D().func,onDeleteRow:D().func};var H=t(26447),V=t(50135),$=t(87109);function q(e){var n=e.filterName,t=e.onFilterName;return(0,i.jsxs)(H.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{py:2.5,px:3},children:[(0,i.jsx)(V.Z,{value:n,onChange:function(e){return t(e.target.value)},placeholder:"Search product...",InputProps:{startAdornment:(0,i.jsx)($.Z,{position:"start",children:(0,i.jsx)(N.Z,{icon:"eva:search-fill",sx:{color:"text.disabled",width:20,height:20}})})}}),(0,i.jsx)(x.Z,{title:"Filter list",children:(0,i.jsx)(g.Z,{children:(0,i.jsx)(N.Z,{icon:"ic:round-filter-list"})})})]})}q.propTypes={filterName:D().string,onFilterName:D().func};var J=[{id:"name",label:"Product",align:"left"},{id:"createdAt",label:"Create at",align:"left"},{id:"inventoryType",label:"Status",align:"center",width:180},{id:"price",label:"Price",align:"right"},{id:""}];function U(){var e=(0,y.ZP)({defaultOrderBy:"createdAt"}),n=e.dense,t=e.page,c=e.order,R=e.orderBy,A=e.rowsPerPage,D=e.setPage,B=e.selected,T=e.setSelected,F=e.onSelectRow,O=e.onSelectAllRows,I=e.onSort,z=e.onChangeDense,M=e.onChangePage,W=e.onChangeRowsPerPage,K=(0,_.Z)().themeStretch,X=(0,a.useRouter)().push,G=(0,C.I0)(),H=(0,C.v9)((function(e){return e.product})),V=H.products,$=H.isLoading,U=(0,s.useState)([]),Y=U[0],ee=U[1],ne=(0,s.useState)(""),te=ne[0],re=ne[1];(0,s.useEffect)((function(){G((0,b.Xp)())}),[G]),(0,s.useEffect)((function(){V.length&&ee(V)}),[V]);var ie=function(e){var n=e.tableData,t=e.comparator,r=e.filterName,i=n.map((function(e,n){return[e,n]}));i.sort((function(e,n){var r=t(e[0],n[0]);return 0!==r?r:e[1]-n[1]})),n=i.map((function(e){return e[0]})),r&&(n=n.filter((function(e){return-1!==e.name.toLowerCase().indexOf(r.toLowerCase())})));return n}({tableData:Y,comparator:(0,y.sQ)(c,R),filterName:te}),oe=n?60:80,se=!ie.length&&!!te||!$&&!ie.length;return(0,i.jsx)(S.Z,{title:"Ecommerce: Product List",children:(0,i.jsxs)(u.Z,{maxWidth:!K&&"lg",children:[(0,i.jsx)(E.Z,{heading:"Product List",links:[{name:"Dashboard",href:P.vB.root},{name:"E-Commerce",href:P.vB.eCommerce.root},{name:"Product List"}],action:(0,i.jsx)(l(),{href:P.vB.eCommerce.new,passHref:!0,children:(0,i.jsx)(d.Z,{variant:"contained",startIcon:(0,i.jsx)(N.Z,{icon:"eva:plus-fill"}),children:"New Product"})})}),(0,i.jsxs)(h.Z,{children:[(0,i.jsx)(q,{filterName:te,onFilterName:function(e){re(e),D(0)}}),(0,i.jsx)(k.Z,{children:(0,i.jsxs)(f.Z,{sx:{minWidth:960,position:"relative"},children:[B.length>0&&(0,i.jsx)(L.Nl,{dense:n,numSelected:B.length,rowCount:Y.length,onSelectAllRows:function(e){return O(e,Y.map((function(e){return e.id})))},actions:(0,i.jsx)(x.Z,{title:"Delete",children:(0,i.jsx)(g.Z,{color:"primary",onClick:function(){return function(e){var n=Y.filter((function(n){return!e.includes(n.id)}));T([]),ee(n)}(B)},children:(0,i.jsx)(N.Z,{icon:"eva:trash-2-outline"})})})}),(0,i.jsxs)(m.Z,{size:n?"small":"medium",children:[(0,i.jsx)(L.K,{order:c,orderBy:R,headLabel:J,rowCount:Y.length,numSelected:B.length,onSort:I,onSelectAllRows:function(e){return O(e,Y.map((function(e){return e.id})))}}),(0,i.jsxs)(p.Z,{children:[($?(0,r.Z)(Array(A)):ie).slice(t*A,t*A+A).map((function(e,n){return e?(0,i.jsx)(Q,{row:e,selected:B.includes(e.id),onSelectRow:function(){return F(e.id)},onDeleteRow:function(){return function(e){var n=Y.filter((function(n){return n.id!==e}));T([]),ee(n)}(e.id)},onEditRow:function(){return n=e.name,void X(P.vB.eCommerce.edit((0,o.o)(n)));var n}},e.id):!se&&(0,i.jsx)(L.hM,{sx:{height:oe}},n)})),(0,i.jsx)(L.$W,{height:oe,emptyRows:(0,y.fQ)(t,A,Y.length)}),(0,i.jsx)(L.et,{isNotFound:se})]})]})]})}),(0,i.jsxs)(j.Z,{sx:{position:"relative"},children:[(0,i.jsx)(Z.Z,{rowsPerPageOptions:[5,10,25],component:"div",count:ie.length,rowsPerPage:A,page:t,onPageChange:M,onRowsPerPageChange:W}),(0,i.jsx)(v.Z,{control:(0,i.jsx)(w.Z,{checked:n,onChange:z}),label:"Dense",sx:{px:3,py:1.5,top:0,position:{md:"absolute"}}})]})]})]})})}U.getLayout=function(e){return(0,i.jsx)(R.Z,{children:e})}},34539:function(e,n,t){"use strict";t.d(n,{o:function(){return o}});var r=t(70655),i=t(1902);function o(e,n){return void 0===n&&(n={}),function(e,n){return void 0===n&&(n={}),(0,i.B)(e,(0,r.__assign)({delimiter:"."},n))}(e,(0,r.__assign)({delimiter:"-"},n))}},49933:function(e,n,t){"use strict";t.d(n,{G:function(){return c}});var r=t(70655),i=t(1902),o=t(38366);function s(e,n){var t=e.toLowerCase();return 0===n?(0,o.l)(t):t}function c(e,n){return void 0===n&&(n={}),(0,i.B)(e,(0,r.__assign)({delimiter:" ",transform:s},n))}}},function(e){e.O(0,[9448,2174,4411,65,3279,1866,8866,4100,9774,2888,179],(function(){return n=72214,e(e.s=n);var n}));var n=e.O();_N_E=n}]);