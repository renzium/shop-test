(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[266],{16940:function(e,i,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/invoice/[id]",function(){return n(17430)}])},25814:function(e,i,n){"use strict";n.d(i,{Z:function(){return b}});var t=n(14251),l=n(52875),s=n(44747),r=n(85893),o=n(45697),d=n.n(o),c=n(41664),a=n.n(c),x=n(15861),h=n(12963),j=n(87357),u=n(23795);function b(e){var i=e.links,n=e.activeLast,o=void 0!==n&&n,d=(0,s.Z)(e,["links","activeLast"]),c=i[i.length-1].name,a=i.map((function(e){return(0,r.jsx)(v,{link:e},e.name)})),u=i.map((function(e){return(0,r.jsx)("div",{children:e.name!==c?(0,r.jsx)(v,{link:e}):(0,r.jsx)(x.Z,{variant:"body2",sx:{maxWidth:260,overflow:"hidden",whiteSpace:"nowrap",color:"text.disabled",textOverflow:"ellipsis"},children:c})},e.name)}));return(0,r.jsx)(h.Z,(0,l.Z)((0,t.Z)({separator:(0,r.jsx)(j.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})},d),{children:o?a:u}))}function v(e){var i=e.link,n=i.href,t=void 0===n?"":n,l=i.name,s=i.icon;return(0,r.jsx)(a(),{href:t,passHref:!0,children:(0,r.jsxs)(u.Z,{variant:"body2",sx:{lineHeight:2,display:"flex",alignItems:"center",color:"text.primary","& > div":{display:"inherit"}},children:[s&&(0,r.jsx)(j.Z,{sx:{mr:1,"& svg":{width:20,height:20}},children:s}),l]},l)})}b.propTypes={activeLast:d().bool,links:d().array.isRequired},v.propTypes={link:d().shape({href:d().string,icon:d().any,name:d().string})}},38187:function(e,i,n){"use strict";n.d(i,{Z:function(){return h}});var t=n(14251),l=n(44747),s=n(85893),r=n(45697),o=n.n(r),d=n(87357),c=n(15861),a=n(23795),x=n(25814);function h(e){var i=e.links,n=e.action,r=e.heading,o=e.moreLink,h=void 0===o?[]:o,j=e.sx,u=(0,l.Z)(e,["links","action","heading","moreLink","sx"]);return(0,s.jsxs)(d.Z,{sx:(0,t.Z)({mb:5},j),children:[(0,s.jsxs)(d.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,s.jsxs)(d.Z,{sx:{flexGrow:1},children:[(0,s.jsx)(c.Z,{variant:"h4",gutterBottom:!0,children:r}),(0,s.jsx)(x.Z,(0,t.Z)({links:i},u))]}),n&&(0,s.jsx)(d.Z,{sx:{flexShrink:0},children:n})]}),(0,s.jsx)(d.Z,{sx:{mt:2},children:"string"===typeof h?(0,s.jsx)(a.Z,{href:h,target:"_blank",variant:"body2",children:h}):h.map((function(e){return(0,s.jsx)(a.Z,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"table"},children:e},e)}))})]})}h.propTypes={links:o().array,action:o().node,heading:o().string.isRequired,moreLink:o().oneOfType([o().string,o().array]),sx:o().object}},53376:function(e,i,n){"use strict";n.d(i,{Z:function(){return l}});var t=n(67294);function l(e){var i=(0,t.useState)(e||!1),n=i[0],l=i[1];return{toggle:n,onToggle:function(){return l(!n)},onOpen:function(){return l(!0)},onClose:function(){return l(!1)},setToggle:l}}},17430:function(e,i,n){"use strict";n.r(i),n.d(i,{default:function(){return Q}});var t=n(85893),l=n(11163),s=n(53156),r=n(76939),o=n(61330),d=n(40571),c=n(58866),a=n(82771),x=n(38187),h=n(45697),j=n.n(h),u=n(90948),b=n(2734),v=n(68509),y=n(66242),g=n(86886),Z=n(87357),p=n(15861),m=n(72882),f=n(7906),_=n(53184),C=n(53252),G=n(295),w=n(67720),k=n(55267),T=n(87850),R=n(41451),S=n(65907),B=n(75447),D=n(44729),P=n(26447),I=n(34386),W=n(93946),N=n(98456),E=n(11057),z=n(64666),q=n(31425),O=n(53376),F=n(34444);D.Zx.register({family:"Roboto",fonts:[{src:"/fonts/Roboto-Regular.ttf"},{src:"/fonts/Roboto-Bold.ttf"}]});var H=D.mM.create({col4:{width:"25%"},col8:{width:"75%"},col6:{width:"50%"},mb8:{marginBottom:8},mb40:{marginBottom:40},overline:{fontSize:8,marginBottom:8,fontWeight:700,textTransform:"uppercase"},h3:{fontSize:16,fontWeight:700},h4:{fontSize:13,fontWeight:700},body1:{fontSize:10},subtitle2:{fontSize:9,fontWeight:700},alignRight:{textAlign:"right"},page:{padding:"40px 24px 0 24px",fontSize:9,lineHeight:1.6,fontFamily:"Roboto",backgroundColor:"#fff",textTransform:"capitalize"},footer:{left:0,right:0,bottom:0,padding:24,margin:"auto",borderTopWidth:1,borderStyle:"solid",position:"absolute",borderColor:"#DFE3E8"},gridContainer:{flexDirection:"row",justifyContent:"space-between"},table:{display:"flex",width:"auto"},tableHeader:{},tableBody:{},tableRow:{padding:"8px 0",flexDirection:"row",borderBottomWidth:1,borderStyle:"solid",borderColor:"#DFE3E8"},noBorder:{paddingTop:8,paddingBottom:0,borderBottomWidth:0},tableCell_1:{width:"5%"},tableCell_2:{width:"50%",paddingRight:16},tableCell_3:{width:"15%"}});function L(e){var i=e.invoice,n=i.items,l=i.taxes,s=i.status,r=i.dueDate,o=i.discount,d=i.invoiceTo,c=i.createDate,a=i.totalPrice,x=i.invoiceFrom,h=i.invoiceNumber,j=i.subTotalPrice;return(0,t.jsx)(D.BB,{children:(0,t.jsxs)(D.T3,{size:"A4",style:H.page,children:[(0,t.jsxs)(D.G7,{style:[H.gridContainer,H.mb40],children:[(0,t.jsx)(D.Ee,{source:"/logo/logo_full.jpg",style:{height:32}}),(0,t.jsxs)(D.G7,{style:{alignItems:"flex-end",flexDirection:"column"},children:[(0,t.jsx)(D.xv,{style:H.h3,children:s}),(0,t.jsxs)(D.xv,{children:[" ","INV-".concat(h)," "]})]})]}),(0,t.jsxs)(D.G7,{style:[H.gridContainer,H.mb40],children:[(0,t.jsxs)(D.G7,{style:H.col6,children:[(0,t.jsx)(D.xv,{style:[H.overline,H.mb8],children:"Invoice from"}),(0,t.jsx)(D.xv,{style:H.body1,children:x.name}),(0,t.jsx)(D.xv,{style:H.body1,children:x.address}),(0,t.jsx)(D.xv,{style:H.body1,children:x.phone})]}),(0,t.jsxs)(D.G7,{style:H.col6,children:[(0,t.jsx)(D.xv,{style:[H.overline,H.mb8],children:"Invoice to"}),(0,t.jsx)(D.xv,{style:H.body1,children:d.name}),(0,t.jsx)(D.xv,{style:H.body1,children:d.address}),(0,t.jsx)(D.xv,{style:H.body1,children:d.phone})]})]}),(0,t.jsxs)(D.G7,{style:[H.gridContainer,H.mb40],children:[(0,t.jsxs)(D.G7,{style:H.col6,children:[(0,t.jsx)(D.xv,{style:[H.overline,H.mb8],children:"Date create"}),(0,t.jsx)(D.xv,{style:H.body1,children:(0,k.Mu)(c)})]}),(0,t.jsxs)(D.G7,{style:H.col6,children:[(0,t.jsx)(D.xv,{style:[H.overline,H.mb8],children:"Due date"}),(0,t.jsx)(D.xv,{style:H.body1,children:(0,k.Mu)(r)})]})]}),(0,t.jsx)(D.xv,{style:[H.overline,H.mb8],children:"Invoice Details"}),(0,t.jsxs)(D.G7,{style:H.table,children:[(0,t.jsx)(D.G7,{style:H.tableHeader,children:(0,t.jsxs)(D.G7,{style:H.tableRow,children:[(0,t.jsx)(D.G7,{style:H.tableCell_1,children:(0,t.jsx)(D.xv,{style:H.subtitle2,children:"#"})}),(0,t.jsx)(D.G7,{style:H.tableCell_2,children:(0,t.jsx)(D.xv,{style:H.subtitle2,children:"Description"})}),(0,t.jsx)(D.G7,{style:H.tableCell_3,children:(0,t.jsx)(D.xv,{style:H.subtitle2,children:"Qty"})}),(0,t.jsx)(D.G7,{style:H.tableCell_3,children:(0,t.jsx)(D.xv,{style:H.subtitle2,children:"Unit price"})}),(0,t.jsx)(D.G7,{style:[H.tableCell_3,H.alignRight],children:(0,t.jsx)(D.xv,{style:H.subtitle2,children:"Total"})})]})}),(0,t.jsxs)(D.G7,{style:H.tableBody,children:[n.map((function(e,i){return(0,t.jsxs)(D.G7,{style:H.tableRow,children:[(0,t.jsx)(D.G7,{style:H.tableCell_1,children:(0,t.jsx)(D.xv,{children:i+1})}),(0,t.jsxs)(D.G7,{style:H.tableCell_2,children:[(0,t.jsx)(D.xv,{style:H.subtitle2,children:e.title}),(0,t.jsx)(D.xv,{children:e.description})]}),(0,t.jsx)(D.G7,{style:H.tableCell_3,children:(0,t.jsx)(D.xv,{children:e.quantity})}),(0,t.jsx)(D.G7,{style:H.tableCell_3,children:(0,t.jsx)(D.xv,{children:e.price})}),(0,t.jsx)(D.G7,{style:[H.tableCell_3,H.alignRight],children:(0,t.jsx)(D.xv,{children:(0,T.e_)(e.price*e.quantity)})})]},e.id)})),(0,t.jsxs)(D.G7,{style:[H.tableRow,H.noBorder],children:[(0,t.jsx)(D.G7,{style:H.tableCell_1}),(0,t.jsx)(D.G7,{style:H.tableCell_2}),(0,t.jsx)(D.G7,{style:H.tableCell_3}),(0,t.jsx)(D.G7,{style:H.tableCell_3,children:(0,t.jsx)(D.xv,{children:"Subtotal"})}),(0,t.jsx)(D.G7,{style:[H.tableCell_3,H.alignRight],children:(0,t.jsx)(D.xv,{children:(0,T.e_)(j)})})]}),(0,t.jsxs)(D.G7,{style:[H.tableRow,H.noBorder],children:[(0,t.jsx)(D.G7,{style:H.tableCell_1}),(0,t.jsx)(D.G7,{style:H.tableCell_2}),(0,t.jsx)(D.G7,{style:H.tableCell_3}),(0,t.jsx)(D.G7,{style:H.tableCell_3,children:(0,t.jsx)(D.xv,{children:"Discount"})}),(0,t.jsx)(D.G7,{style:[H.tableCell_3,H.alignRight],children:(0,t.jsx)(D.xv,{children:(0,T.e_)(-o)})})]}),(0,t.jsxs)(D.G7,{style:[H.tableRow,H.noBorder],children:[(0,t.jsx)(D.G7,{style:H.tableCell_1}),(0,t.jsx)(D.G7,{style:H.tableCell_2}),(0,t.jsx)(D.G7,{style:H.tableCell_3}),(0,t.jsx)(D.G7,{style:H.tableCell_3,children:(0,t.jsx)(D.xv,{children:"Taxes"})}),(0,t.jsx)(D.G7,{style:[H.tableCell_3,H.alignRight],children:(0,t.jsx)(D.xv,{children:(0,T.e_)(l)})})]}),(0,t.jsxs)(D.G7,{style:[H.tableRow,H.noBorder],children:[(0,t.jsx)(D.G7,{style:H.tableCell_1}),(0,t.jsx)(D.G7,{style:H.tableCell_2}),(0,t.jsx)(D.G7,{style:H.tableCell_3}),(0,t.jsx)(D.G7,{style:H.tableCell_3,children:(0,t.jsx)(D.xv,{style:H.h4,children:"Total"})}),(0,t.jsx)(D.G7,{style:[H.tableCell_3,H.alignRight],children:(0,t.jsx)(D.xv,{style:H.h4,children:(0,T.e_)(a)})})]})]})]}),(0,t.jsxs)(D.G7,{style:[H.gridContainer,H.footer],children:[(0,t.jsxs)(D.G7,{style:H.col8,children:[(0,t.jsx)(D.xv,{style:H.subtitle2,children:"NOTES"}),(0,t.jsx)(D.xv,{children:"We appreciate your business. Should you need us to add VAT or extra notes let us know!"})]}),(0,t.jsxs)(D.G7,{style:[H.col4,H.alignRight],children:[(0,t.jsx)(D.xv,{style:H.subtitle2,children:"Have a Question?"}),(0,t.jsx)(D.xv,{children:"support@abcapp.com"})]})]})]})})}function V(e){var i=e.invoice,n=(0,l.useRouter)().push,s=(0,O.Z)(),o=s.toggle,d=s.onOpen,c=s.onClose;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(P.Z,{spacing:2,direction:{xs:"column",sm:"row"},justifyContent:"space-between",alignItems:{sm:"center"},sx:{mb:5},children:[(0,t.jsxs)(P.Z,{direction:"row",spacing:1,children:[(0,t.jsx)(I.Z,{title:"Edit",children:(0,t.jsx)(W.Z,{onClick:function(){n(r.vB.invoice.edit(i.id))},children:(0,t.jsx)(F.Z,{icon:"eva:edit-fill"})})}),(0,t.jsx)(I.Z,{title:"View",children:(0,t.jsx)(W.Z,{onClick:d,children:(0,t.jsx)(F.Z,{icon:"eva:eye-fill"})})}),(0,t.jsx)(D.WD,{document:(0,t.jsx)(L,{invoice:i}),fileName:i.invoiceNumber,style:{textDecoration:"none"},children:function(e){var i=e.loading;return(0,t.jsx)(I.Z,{title:"Download",children:(0,t.jsx)(W.Z,{children:i?(0,t.jsx)(N.Z,{size:24,color:"inherit"}):(0,t.jsx)(F.Z,{icon:"eva:download-fill"})})})}}),(0,t.jsx)(I.Z,{title:"Print",children:(0,t.jsx)(W.Z,{children:(0,t.jsx)(F.Z,{icon:"eva:printer-fill"})})}),(0,t.jsx)(I.Z,{title:"Send",children:(0,t.jsx)(W.Z,{children:(0,t.jsx)(F.Z,{icon:"ic:round-send"})})}),(0,t.jsx)(I.Z,{title:"Share",children:(0,t.jsx)(W.Z,{children:(0,t.jsx)(F.Z,{icon:"eva:share-fill"})})})]}),(0,t.jsx)(E.Z,{color:"inherit",variant:"outlined",startIcon:(0,t.jsx)(F.Z,{icon:"eva:checkmark-fill"}),sx:{alignSelf:"flex-end"},children:"Mark as Paid"})]}),(0,t.jsx)(z.Z,{fullScreen:!0,open:o,children:(0,t.jsxs)(Z.Z,{sx:{height:"100%",display:"flex",flexDirection:"column"},children:[(0,t.jsx)(q.Z,{sx:{zIndex:9,padding:"12px !important",boxShadow:function(e){return e.customShadows.z8}},children:(0,t.jsx)(I.Z,{title:"Close",children:(0,t.jsx)(W.Z,{color:"inherit",onClick:c,children:(0,t.jsx)(F.Z,{icon:"eva:close-fill"})})})}),(0,t.jsx)(Z.Z,{sx:{flexGrow:1,height:"100%",overflow:"hidden"},children:(0,t.jsx)(D.Z$,{width:"100%",height:"100%",style:{border:"none"},children:(0,t.jsx)(L,{invoice:i})})})]})})]})}L.propTypes={invoice:j().object.isRequired},V.propTypes={invoice:j().object.isRequired};var A=(0,u.ZP)(v.Z)((function(e){var i=e.theme;return{"& td":{paddingTop:i.spacing(1),paddingBottom:i.spacing(1)}}}));function M(e){var i=e.invoice,n=(0,b.Z)();if(!i)return null;var l=i.items,s=i.taxes,r=i.status,o=i.dueDate,d=i.discount,c=i.invoiceTo,a=i.createDate,x=i.totalPrice,h=i.invoiceFrom,j=i.invoiceNumber,u=i.subTotalPrice;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(V,{invoice:i}),(0,t.jsxs)(y.Z,{sx:{pt:5,px:5},children:[(0,t.jsxs)(g.ZP,{container:!0,children:[(0,t.jsx)(g.ZP,{item:!0,xs:12,sm:6,sx:{mb:5},children:(0,t.jsx)(S.Z,{disabledEffect:!0,visibleByDefault:!0,alt:"logo",src:"/logo/logo_full.svg",sx:{maxWidth:120}})}),(0,t.jsx)(g.ZP,{item:!0,xs:12,sm:6,sx:{mb:5},children:(0,t.jsxs)(Z.Z,{sx:{textAlign:{sm:"right"}},children:[(0,t.jsx)(R.Z,{variant:"light"===n.palette.mode?"ghost":"filled",color:("paid"===r?"success":"unpaid"===r&&"warning")||"overdue"===r&&"error"||"default",sx:{textTransform:"uppercase",mb:1},children:r}),(0,t.jsx)(p.Z,{variant:"h6",children:"INV-".concat(j)})]})}),(0,t.jsxs)(g.ZP,{item:!0,xs:12,sm:6,sx:{mb:5},children:[(0,t.jsx)(p.Z,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Invoice from"}),(0,t.jsx)(p.Z,{variant:"body2",children:h.name}),(0,t.jsx)(p.Z,{variant:"body2",children:h.address}),(0,t.jsxs)(p.Z,{variant:"body2",children:["Phone: ",h.phone]})]}),(0,t.jsxs)(g.ZP,{item:!0,xs:12,sm:6,sx:{mb:5},children:[(0,t.jsx)(p.Z,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Invoice to"}),(0,t.jsx)(p.Z,{variant:"body2",children:c.name}),(0,t.jsx)(p.Z,{variant:"body2",children:c.address}),(0,t.jsxs)(p.Z,{variant:"body2",children:["Phone: ",c.phone]})]}),(0,t.jsxs)(g.ZP,{item:!0,xs:12,sm:6,sx:{mb:5},children:[(0,t.jsx)(p.Z,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"date create"}),(0,t.jsx)(p.Z,{variant:"body2",children:(0,k.Mu)(a)})]}),(0,t.jsxs)(g.ZP,{item:!0,xs:12,sm:6,sx:{mb:5},children:[(0,t.jsx)(p.Z,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Due date"}),(0,t.jsx)(p.Z,{variant:"body2",children:(0,k.Mu)(o)})]})]}),(0,t.jsx)(B.Z,{children:(0,t.jsx)(m.Z,{sx:{minWidth:960},children:(0,t.jsxs)(f.Z,{children:[(0,t.jsx)(_.Z,{sx:{borderBottom:function(e){return"solid 1px ".concat(e.palette.divider)},"& th":{backgroundColor:"transparent"}},children:(0,t.jsxs)(v.Z,{children:[(0,t.jsx)(C.Z,{width:40,children:"#"}),(0,t.jsx)(C.Z,{align:"left",children:"Description"}),(0,t.jsx)(C.Z,{align:"left",children:"Qty"}),(0,t.jsx)(C.Z,{align:"right",children:"Unit price"}),(0,t.jsx)(C.Z,{align:"right",children:"Total"})]})}),(0,t.jsxs)(G.Z,{children:[l.map((function(e,i){return(0,t.jsxs)(v.Z,{sx:{borderBottom:function(e){return"solid 1px ".concat(e.palette.divider)}},children:[(0,t.jsx)(C.Z,{children:i+1}),(0,t.jsx)(C.Z,{align:"left",children:(0,t.jsxs)(Z.Z,{sx:{maxWidth:560},children:[(0,t.jsx)(p.Z,{variant:"subtitle2",children:e.title}),(0,t.jsx)(p.Z,{variant:"body2",sx:{color:"text.secondary"},noWrap:!0,children:e.description})]})}),(0,t.jsx)(C.Z,{align:"left",children:e.quantity}),(0,t.jsx)(C.Z,{align:"right",children:(0,T.e_)(e.price)}),(0,t.jsx)(C.Z,{align:"right",children:(0,T.e_)(e.price*e.quantity)})]},i)})),(0,t.jsxs)(A,{children:[(0,t.jsx)(C.Z,{colSpan:3}),(0,t.jsxs)(C.Z,{align:"right",children:[(0,t.jsx)(Z.Z,{sx:{mt:2}}),(0,t.jsx)(p.Z,{children:"Subtotal"})]}),(0,t.jsxs)(C.Z,{align:"right",width:120,children:[(0,t.jsx)(Z.Z,{sx:{mt:2}}),(0,t.jsx)(p.Z,{children:(0,T.e_)(u)})]})]}),(0,t.jsxs)(A,{children:[(0,t.jsx)(C.Z,{colSpan:3}),(0,t.jsx)(C.Z,{align:"right",children:(0,t.jsx)(p.Z,{children:"Discount"})}),(0,t.jsx)(C.Z,{align:"right",width:120,children:(0,t.jsx)(p.Z,{sx:{color:"error.main"},children:d&&(0,T.e_)(-d)})})]}),(0,t.jsxs)(A,{children:[(0,t.jsx)(C.Z,{colSpan:3}),(0,t.jsx)(C.Z,{align:"right",children:(0,t.jsx)(p.Z,{children:"Taxes"})}),(0,t.jsx)(C.Z,{align:"right",width:120,children:(0,t.jsx)(p.Z,{children:s&&(0,T.e_)(s)})})]}),(0,t.jsxs)(A,{children:[(0,t.jsx)(C.Z,{colSpan:3}),(0,t.jsx)(C.Z,{align:"right",children:(0,t.jsx)(p.Z,{variant:"h6",children:"Total"})}),(0,t.jsx)(C.Z,{align:"right",width:140,children:(0,t.jsx)(p.Z,{variant:"h6",children:(0,T.e_)(x)})})]})]})]})})}),(0,t.jsx)(w.Z,{sx:{mt:5}}),(0,t.jsxs)(g.ZP,{container:!0,children:[(0,t.jsxs)(g.ZP,{item:!0,xs:12,md:9,sx:{py:3},children:[(0,t.jsx)(p.Z,{variant:"subtitle2",children:"NOTES"}),(0,t.jsx)(p.Z,{variant:"body2",children:"We appreciate your business. Should you need us to add VAT or extra notes let us know!"})]}),(0,t.jsxs)(g.ZP,{item:!0,xs:12,md:3,sx:{py:3,textAlign:"right"},children:[(0,t.jsx)(p.Z,{variant:"subtitle2",children:"Have a Question?"}),(0,t.jsx)(p.Z,{variant:"body2",children:"support@minimals.cc"})]})]})]})]})}function Q(){var e=(0,d.Z)().themeStretch,i=(0,l.useRouter)().query.id,n=o.Ot.find((function(e){return e.id===i}));return(0,t.jsx)(a.Z,{title:"Invoice: View",children:(0,t.jsxs)(s.Z,{maxWidth:!e&&"lg",children:[(0,t.jsx)(x.Z,{heading:"Invoice Details",links:[{name:"Dashboard",href:r.vB.root},{name:"Invoices",href:r.vB.invoice.root},{name:"INV-".concat(null===n||void 0===n?void 0:n.invoiceNumber)||0}]}),(0,t.jsx)(M,{invoice:n})]})})}M.propTypes={invoice:j().object.isRequired},Q.getLayout=function(e){return(0,t.jsx)(c.Z,{children:e})}},42480:function(){},19527:function(){},69331:function(){}},function(e){e.O(0,[1111,5999,1445,4186,9591,6708,9448,2174,4411,4836,3279,1866,8866,9774,2888,179],(function(){return i=16940,e(e.s=i);var i}));var i=e.O();_N_E=i}]);