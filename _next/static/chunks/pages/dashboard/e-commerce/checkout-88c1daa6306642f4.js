(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5110],{14953:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/e-commerce/checkout",function(){return t(71922)}])},25814:function(e,n,t){"use strict";t.d(n,{Z:function(){return m}});var i=t(14251),r=t(52875),s=t(44747),o=t(85893),a=t(45697),l=t.n(a),c=t(41664),d=t.n(c),u=t(15861),h=t(12963),x=t(87357),p=t(23795);function m(e){var n=e.links,t=e.activeLast,a=void 0!==t&&t,l=(0,s.Z)(e,["links","activeLast"]),c=n[n.length-1].name,d=n.map((function(e){return(0,o.jsx)(j,{link:e},e.name)})),p=n.map((function(e){return(0,o.jsx)("div",{children:e.name!==c?(0,o.jsx)(j,{link:e}):(0,o.jsx)(u.Z,{variant:"body2",sx:{maxWidth:260,overflow:"hidden",whiteSpace:"nowrap",color:"text.disabled",textOverflow:"ellipsis"},children:c})},e.name)}));return(0,o.jsx)(h.Z,(0,r.Z)((0,i.Z)({separator:(0,o.jsx)(x.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})},l),{children:a?d:p}))}function j(e){var n=e.link,t=n.href,i=void 0===t?"":t,r=n.name,s=n.icon;return(0,o.jsx)(d(),{href:i,passHref:!0,children:(0,o.jsxs)(p.Z,{variant:"body2",sx:{lineHeight:2,display:"flex",alignItems:"center",color:"text.primary","& > div":{display:"inherit"}},children:[s&&(0,o.jsx)(x.Z,{sx:{mr:1,"& svg":{width:20,height:20}},children:s}),r]},r)})}m.propTypes={activeLast:l().bool,links:l().array.isRequired},j.propTypes={link:l().shape({href:l().string,icon:l().any,name:l().string})}},77251:function(e,n,t){"use strict";t.d(n,{Z:function(){return p}});var i=t(14251),r=t(52875),s=t(44747),o=t(85893),a=t(45697),l=t.n(a),c=t(90948),d=t(87357),u=t(15861),h=t(65907),x=(0,c.ZP)(d.Z)((function(e){return{height:"100%",display:"flex",textAlign:"center",alignItems:"center",flexDirection:"column",justifyContent:"center",padding:e.theme.spacing(8,2)}}));function p(e){var n=e.title,t=e.description,a=e.img,l=(0,s.Z)(e,["title","description","img"]);return(0,o.jsxs)(x,(0,r.Z)((0,i.Z)({},l),{children:[(0,o.jsx)(h.Z,{disabledEffect:!0,visibleByDefault:!0,alt:"empty content",src:a||"/assets/illustrations/illustration_empty_content.svg",sx:{height:240,mb:3}}),(0,o.jsx)(u.Z,{variant:"h5",gutterBottom:!0,children:n}),t&&(0,o.jsx)(u.Z,{variant:"body2",sx:{color:"text.secondary"},children:t})]}))}p.propTypes={title:l().string.isRequired,img:l().string,description:l().string}},38187:function(e,n,t){"use strict";t.d(n,{Z:function(){return h}});var i=t(14251),r=t(44747),s=t(85893),o=t(45697),a=t.n(o),l=t(87357),c=t(15861),d=t(23795),u=t(25814);function h(e){var n=e.links,t=e.action,o=e.heading,a=e.moreLink,h=void 0===a?[]:a,x=e.sx,p=(0,r.Z)(e,["links","action","heading","moreLink","sx"]);return(0,s.jsxs)(l.Z,{sx:(0,i.Z)({mb:5},x),children:[(0,s.jsxs)(l.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,s.jsxs)(l.Z,{sx:{flexGrow:1},children:[(0,s.jsx)(c.Z,{variant:"h4",gutterBottom:!0,children:o}),(0,s.jsx)(u.Z,(0,i.Z)({links:n},p))]}),t&&(0,s.jsx)(l.Z,{sx:{flexShrink:0},children:t})]}),(0,s.jsx)(l.Z,{sx:{mt:2},children:"string"===typeof h?(0,s.jsx)(d.Z,{href:h,target:"_blank",variant:"body2",children:h}):h.map((function(e){return(0,s.jsx)(d.Z,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"table"},children:e},e)}))})]})}h.propTypes={links:a().array,action:a().node,heading:a().string.isRequired,moreLink:a().oneOfType([a().string,a().array]),sx:a().object}},25825:function(e,n,t){"use strict";t.d(n,{$W:function(){return b},K:function(){return S},V7:function(){return x},et:function(){return c},Nl:function(){return T},hM:function(){return v}});var i=t(85893),r=t(45697),s=t.n(r),o=t(68509),a=t(53252),l=t(77251);function c(e){var n=e.isNotFound;return(0,i.jsx)(o.Z,{children:n?(0,i.jsx)(a.Z,{colSpan:12,children:(0,i.jsx)(l.Z,{title:"No Data",sx:{"& span.MuiBox-root":{height:160}}})}):(0,i.jsx)(a.Z,{colSpan:12,sx:{p:0}})})}c.propTypes={isNotFound:s().bool};var d=t(93946),u=t(34444),h=t(84818);function x(e){var n=e.actions,t=e.open,r=e.onClose,s=e.onOpen;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(d.Z,{onClick:s,children:(0,i.jsx)(u.Z,{icon:"eva:more-vertical-fill",width:20,height:20})}),(0,i.jsx)(h.Z,{open:Boolean(t),anchorEl:t,onClose:r,anchorOrigin:{vertical:"top",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"right"},arrow:"right-top",sx:{mt:-1,width:160,"& .MuiMenuItem-root":{px:1,typography:"body2",borderRadius:.75,"& svg":{mr:2,width:20,height:20}}},children:n})]})}x.propTypes={actions:s().node,open:s().object,onClose:s().func,onOpen:s().func};var p=t(6453),m=t(14251),j=t(52875),f=t(26447),Z=t(88078);function v(e){var n=(0,p.Z)({},e);return(0,i.jsx)(o.Z,(0,j.Z)((0,m.Z)({},n),{children:(0,i.jsx)(a.Z,{colSpan:12,children:(0,i.jsxs)(f.Z,{spacing:3,direction:"row",alignItems:"center",children:[(0,i.jsx)(Z.Z,{variant:"rectangular",width:40,height:40,sx:{borderRadius:1,flexShrink:0}}),(0,i.jsx)(Z.Z,{variant:"text",width:"100%",height:20}),(0,i.jsx)(Z.Z,{variant:"text",width:160,height:20}),(0,i.jsx)(Z.Z,{variant:"text",width:160,height:20}),(0,i.jsx)(Z.Z,{variant:"text",width:160,height:20}),(0,i.jsx)(Z.Z,{variant:"text",width:160,height:20})]})})}))}function b(e){var n=e.emptyRows,t=e.height;return n?(0,i.jsx)(o.Z,{sx:(0,m.Z)({},t&&{height:t*n}),children:(0,i.jsx)(a.Z,{colSpan:9})}):null}b.propTypes={emptyRows:s().number,height:s().number};var y=t(53184),g=t(69368),w=t(26280),C=t(87357),k={border:0,margin:-1,padding:0,width:"1px",height:"1px",overflow:"hidden",position:"absolute",whiteSpace:"nowrap",clip:"rect(0 0 0 0)"};function S(e){var n=e.order,t=e.orderBy,r=e.rowCount,s=void 0===r?0:r,l=e.headLabel,c=e.numSelected,d=void 0===c?0:c,u=e.onSort,h=e.onSelectAllRows,x=e.sx;return(0,i.jsx)(y.Z,{sx:x,children:(0,i.jsxs)(o.Z,{children:[h&&(0,i.jsx)(a.Z,{padding:"checkbox",children:(0,i.jsx)(g.Z,{indeterminate:d>0&&d<s,checked:s>0&&d===s,onChange:function(e){return h(e.target.checked)}})}),l.map((function(e){return(0,i.jsx)(a.Z,{align:e.align||"left",sortDirection:t===e.id&&n,sx:{width:e.width,minWidth:e.minWidth},children:u?(0,i.jsxs)(w.Z,{hideSortIcon:!0,active:t===e.id,direction:t===e.id?n:"asc",onClick:function(){return u(e.id)},sx:{textTransform:"capitalize"},children:[e.label,t===e.id?(0,i.jsx)(C.Z,{sx:(0,m.Z)({},k),children:"desc"===n?"sorted descending":"sorted ascending"}):null]}):e.label},e.id)}))]})})}S.propTypes={onSort:s().func,orderBy:s().string,headLabel:s().array,rowCount:s().number,numSelected:s().number,onSelectAllRows:s().func,order:s().oneOf(["asc","desc"]),sx:s().object};var D=t(44747),I=t(15861);function T(e){var n=e.dense,t=e.actions,r=e.rowCount,s=e.numSelected,o=e.onSelectAllRows,a=e.sx,l=(0,D.Z)(e,["dense","actions","rowCount","numSelected","onSelectAllRows","sx"]);return(0,i.jsxs)(f.Z,(0,j.Z)((0,m.Z)({direction:"row",alignItems:"center",sx:(0,m.Z)({px:2,top:0,left:8,right:8,zIndex:9,height:58,borderRadius:1,position:"absolute",bgcolor:"primary.lighter"},n&&{pl:1,height:38},a)},l),{children:[(0,i.jsx)(g.Z,{indeterminate:s>0&&s<r,checked:r>0&&s===r,onChange:function(e){return o(e.target.checked)}}),(0,i.jsxs)(I.Z,{variant:"subtitle1",sx:(0,m.Z)({ml:2,flexGrow:1,color:"primary.main"},n&&{ml:3}),children:[s," selected"]}),t&&t]}))}T.propTypes={dense:s().bool,actions:s().node,rowCount:s().number,numSelected:s().number,onSelectAllRows:s().func,sx:s().object}},71922:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return Ve}});var i=t(85893),r=t(45697),s=t.n(r),o=t(67294),a=t(90948),l=t(14621),c=t(87357),d=t(53156),u=t(86886),h=t(19370),x=t(44472),p=t(83578),m=t(79718),j=t(1308),f=t(76939),Z=t(98430),v=t(40571),b=t(58866),y=t(82771),g=t(34444),w=t(38187),C=t(11057),k=t(66242),S=t(15861),D=t(61330),I=t(41451),T=t(78445),_=t(44267),P=t(26447),A=t(67720),B=t(50135),R=t(87109),F=t(87850);function N(e){var n=e.total,t=e.onEdit,r=e.discount,s=e.subtotal,o=e.shipping,a=e.onApplyDiscount,l=e.enableEdit,d=void 0!==l&&l,u=e.enableDiscount,h=void 0!==u&&u,x=null!==o?"Free":"-";return(0,i.jsxs)(k.Z,{sx:{mb:3},children:[(0,i.jsx)(T.Z,{title:"Order Summary",action:d&&(0,i.jsx)(C.Z,{size:"small",onClick:t,startIcon:(0,i.jsx)(g.Z,{icon:"eva:edit-fill"}),children:"Edit"})}),(0,i.jsx)(_.Z,{children:(0,i.jsxs)(P.Z,{spacing:2,children:[(0,i.jsxs)(P.Z,{direction:"row",justifyContent:"space-between",children:[(0,i.jsx)(S.Z,{variant:"body2",sx:{color:"text.secondary"},children:"Sub Total"}),(0,i.jsx)(S.Z,{variant:"subtitle2",children:(0,F.e_)(s)})]}),(0,i.jsxs)(P.Z,{direction:"row",justifyContent:"space-between",children:[(0,i.jsx)(S.Z,{variant:"body2",sx:{color:"text.secondary"},children:"Discount"}),(0,i.jsx)(S.Z,{variant:"subtitle2",children:r?(0,F.e_)(-r):"-"})]}),(0,i.jsxs)(P.Z,{direction:"row",justifyContent:"space-between",children:[(0,i.jsx)(S.Z,{variant:"body2",sx:{color:"text.secondary"},children:"Shipping"}),(0,i.jsx)(S.Z,{variant:"subtitle2",children:o?(0,F.e_)(o):x})]}),(0,i.jsx)(A.Z,{}),(0,i.jsxs)(P.Z,{direction:"row",justifyContent:"space-between",children:[(0,i.jsx)(S.Z,{variant:"subtitle1",children:"Total"}),(0,i.jsxs)(c.Z,{sx:{textAlign:"right"},children:[(0,i.jsx)(S.Z,{variant:"subtitle1",sx:{color:"error.main"},children:(0,F.e_)(n)}),(0,i.jsx)(S.Z,{variant:"caption",sx:{fontStyle:"italic"},children:"(VAT included if applicable)"})]})]}),h&&a&&(0,i.jsx)(B.Z,{fullWidth:!0,placeholder:"Discount codes / Gifts",value:"DISCOUNT5",InputProps:{endAdornment:(0,i.jsx)(R.Z,{position:"end",children:(0,i.jsx)(C.Z,{onClick:function(){return a(5)},sx:{mr:-.5},children:"Apply"})})}})]})})]})}N.propTypes={total:s().number,discount:s().number,subtotal:s().number,shipping:s().number,onEdit:s().func,enableEdit:s().bool,onApplyDiscount:s().func,enableDiscount:s().bool};var z=t(34727),q=t(70655),O=t(74231),W=t(87536),E=t(47533),M=t(64666),G=t(37645),L=t(6514),Q=t(31425),V=t(31812),H=t(98383);function X(e){var n=e.open,t=e.onClose,r=e.onNextStep,s=e.onCreateBilling,o=O.Ry().shape({receiver:O.Z_().required("Fullname is required"),phone:O.Z_().required("Phone is required"),address:O.Z_().required("Address is required"),city:O.Z_().required("City is required"),state:O.Z_().required("State is required")}),a={addressType:"Home",receiver:"",phone:"",address:"",city:"",state:"",country:D.hW[0].label,zipcode:"",isDefault:!0},l=(0,W.cI)({resolver:(0,E.X)(o),defaultValues:a}),d=l.handleSubmit,u=l.formState.isSubmitting,h=function(){var e=(0,z.Z)((function(e){return(0,q.__generator)(this,(function(n){try{r(),s({receiver:e.receiver,phone:e.phone,fullAddress:"".concat(e.address,", ").concat(e.city,", ").concat(e.state,", ").concat(e.country,", ").concat(e.zipcode),addressType:e.addressType,isDefault:e.isDefault})}catch(t){console.error(t)}return[2]}))}));return function(n){return e.apply(this,arguments)}}();return(0,i.jsxs)(M.Z,{fullWidth:!0,maxWidth:"sm",open:n,onClose:t,children:[(0,i.jsx)(G.Z,{children:"Add new address"}),(0,i.jsxs)(H.RV,{methods:l,onSubmit:d(h),children:[(0,i.jsx)(L.Z,{children:(0,i.jsxs)(P.Z,{spacing:3,children:[(0,i.jsx)(H.km,{name:"addressType",options:[{label:"Home",value:"Home"},{label:"Office",value:"Office"}]}),(0,i.jsxs)(c.Z,{sx:{display:"grid",rowGap:3,columnGap:2,gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)"}},children:[(0,i.jsx)(H.au,{name:"receiver",label:"Full Name"}),(0,i.jsx)(H.au,{name:"phone",label:"Phone Number"})]}),(0,i.jsx)(H.au,{name:"address",label:"Address"}),(0,i.jsxs)(c.Z,{sx:{display:"grid",rowGap:3,columnGap:2,gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(3, 1fr)"}},children:[(0,i.jsx)(H.au,{name:"city",label:"Town / City"}),(0,i.jsx)(H.au,{name:"state",label:"State"}),(0,i.jsx)(H.au,{name:"zipcode",label:"Zip / Postal Code"})]}),(0,i.jsx)(H.Cc,{name:"country",label:"Country",children:D.hW.map((function(e){return(0,i.jsx)("option",{value:e.label,children:e.label},e.code)}))}),(0,i.jsx)(H.jb,{name:"isDefault",label:"Use this address as default.",sx:{mt:3}})]})}),(0,i.jsx)(A.Z,{}),(0,i.jsxs)(Q.Z,{children:[(0,i.jsx)(V.Z,{type:"submit",variant:"contained",loading:u,children:"Deliver to this Address"}),(0,i.jsx)(C.Z,{color:"inherit",variant:"outlined",onClick:t,children:"Cancel"})]})]})]})}function Y(){var e=(0,m.I0)(),n=(0,m.v9)((function(e){return e.product})).checkout,t=n.total,r=n.discount,s=n.subtotal,a=(0,o.useState)(!1),l=a[0],d=a[1],h=function(){e((0,j.NX)())},x=function(n){e((0,j.YN)(n))};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(u.ZP,{container:!0,spacing:3,children:[(0,i.jsxs)(u.ZP,{item:!0,xs:12,md:8,children:[D.PX.map((function(e,n){return(0,i.jsx)(K,{address:e,onNextStep:h,onCreateBilling:x},n)})),(0,i.jsxs)(c.Z,{sx:{display:"flex",justifyContent:"space-between"},children:[(0,i.jsx)(C.Z,{size:"small",color:"inherit",onClick:function(){e((0,j.Fs)())},startIcon:(0,i.jsx)(g.Z,{icon:"eva:arrow-ios-back-fill"}),children:"Back"}),(0,i.jsx)(C.Z,{size:"small",onClick:function(){d(!0)},startIcon:(0,i.jsx)(g.Z,{icon:"eva:plus-fill"}),children:"Add new address"})]})]}),(0,i.jsx)(u.ZP,{item:!0,xs:12,md:4,children:(0,i.jsx)(N,{subtotal:s,total:t,discount:r})})]}),(0,i.jsx)(X,{open:l,onClose:function(){d(!1)},onNextStep:h,onCreateBilling:x})]})}function K(e){var n=e.address,t=e.onNextStep,r=e.onCreateBilling,s=n.receiver,o=n.fullAddress,a=n.addressType,l=n.phone,d=n.isDefault;return(0,i.jsxs)(k.Z,{sx:{p:3,mb:3,position:"relative"},children:[(0,i.jsxs)(c.Z,{sx:{mb:1,display:"flex",alignItems:"center"},children:[(0,i.jsx)(S.Z,{variant:"subtitle1",children:s}),(0,i.jsxs)(S.Z,{variant:"body2",sx:{color:"text.secondary"},children:["\xa0(",a,")"]}),d&&(0,i.jsx)(I.Z,{color:"info",sx:{ml:1},children:"Default"})]}),(0,i.jsx)(S.Z,{variant:"body2",gutterBottom:!0,children:o}),(0,i.jsx)(S.Z,{variant:"body2",sx:{color:"text.secondary"},children:l}),(0,i.jsxs)(c.Z,{sx:{mt:3,display:"flex",position:{sm:"absolute"},right:{sm:24},bottom:{sm:24}},children:[!d&&(0,i.jsx)(C.Z,{variant:"outlined",size:"small",color:"inherit",children:"Delete"}),(0,i.jsx)(c.Z,{sx:{mx:.5}}),(0,i.jsx)(C.Z,{variant:"outlined",size:"small",onClick:function(){r(n),t()},children:"Deliver to this Address"})]})]})}function $(e){var n=e.onBackStep,t=(0,m.v9)((function(e){return e.product})).checkout.billing;return(0,i.jsxs)(k.Z,{sx:{mb:3},children:[(0,i.jsx)(T.Z,{title:"Billing Address",action:(0,i.jsx)(C.Z,{size:"small",startIcon:(0,i.jsx)(g.Z,{icon:"eva:edit-fill"}),onClick:n,children:"Edit"})}),(0,i.jsxs)(_.Z,{children:[(0,i.jsxs)(S.Z,{variant:"subtitle2",gutterBottom:!0,children:[null===t||void 0===t?void 0:t.receiver,"\xa0",(0,i.jsxs)(S.Z,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:["(",null===t||void 0===t?void 0:t.addressType,")"]})]}),(0,i.jsx)(S.Z,{variant:"body2",gutterBottom:!0,children:null===t||void 0===t?void 0:t.fullAddress}),(0,i.jsx)(S.Z,{variant:"body2",sx:{color:"text.secondary"},children:null===t||void 0===t?void 0:t.phone})]})]})}X.propTypes={open:s().bool,onClose:s().func,onNextStep:s().func,onCreateBilling:s().func},K.propTypes={address:s().object,onNextStep:s().func,onCreateBilling:s().func},$.propTypes={onBackStep:s().func};var U=t(12297),J=t.n(U),ee=t(41664),ne=t.n(ee),te=t(75447),ie=t(77251),re=t(72882),se=t(7906),oe=t(295),ae=t(68509),le=t(53252),ce=t(93946),de=t(19459),ue=t(65907),he=t(25825),xe=[{id:"product",label:"Product"},{id:"price",label:"Price"},{id:"quantity",label:"Quantity"},{id:"totalPrice",label:"Total Price",align:"right"},{id:""}],pe=(0,a.ZP)("div")((function(e){var n=e.theme;return{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:n.spacing(.5),padding:n.spacing(.5,.75),borderRadius:n.shape.borderRadius,border:"solid 1px ".concat(n.palette.grey[50032])}}));function me(e){var n=e.products,t=e.onDelete,r=e.onIncreaseQuantity,s=e.onDecreaseQuantity;return(0,i.jsx)(re.Z,{sx:{minWidth:720},children:(0,i.jsxs)(se.Z,{children:[(0,i.jsx)(he.K,{headLabel:xe}),(0,i.jsx)(oe.Z,{children:n.map((function(e){return(0,i.jsx)(je,{row:e,onDelete:function(){return t(e.id)},onDecrease:function(){return s(e.id)},onIncrease:function(){return r(e.id)}},e.id)}))})]})})}function je(e){var n=e.row,t=e.onDelete,r=e.onDecrease,s=e.onIncrease,o=n.name,a=n.size,l=n.price,d=n.color,u=n.cover,h=n.quantity,x=n.available;return(0,i.jsxs)(ae.Z,{children:[(0,i.jsxs)(le.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,i.jsx)(ue.Z,{alt:"product image",src:u,sx:{width:64,height:64,borderRadius:1.5,mr:2}}),(0,i.jsxs)(P.Z,{spacing:.5,children:[(0,i.jsx)(S.Z,{noWrap:!0,variant:"subtitle2",sx:{maxWidth:240},children:o}),(0,i.jsxs)(P.Z,{direction:"row",alignItems:"center",children:[(0,i.jsxs)(S.Z,{variant:"body2",children:[(0,i.jsx)(c.Z,{component:"span",sx:{color:"text.secondary"},children:"size:\xa0"}),a]}),(0,i.jsx)(A.Z,{orientation:"vertical",sx:{mx:1,height:16}}),(0,i.jsxs)(S.Z,{variant:"body2",children:[(0,i.jsx)(c.Z,{component:"span",sx:{color:"text.secondary"},children:"color:\xa0"}),(0,de.Z)(d)]})]})]})]}),(0,i.jsx)(le.Z,{children:(0,F.e_)(l)}),(0,i.jsx)(le.Z,{children:(0,i.jsx)(fe,{quantity:h,available:x,onDecrease:r,onIncrease:s})}),(0,i.jsx)(le.Z,{align:"right",children:(0,F.e_)(l*h)}),(0,i.jsx)(le.Z,{align:"right",children:(0,i.jsx)(ce.Z,{onClick:t,children:(0,i.jsx)(g.Z,{icon:"eva:trash-2-outline",width:20,height:20})})})]})}function fe(e){var n=e.available,t=e.quantity,r=e.onIncrease,s=e.onDecrease;return(0,i.jsxs)(c.Z,{sx:{width:96,textAlign:"right"},children:[(0,i.jsxs)(pe,{children:[(0,i.jsx)(ce.Z,{size:"small",color:"inherit",onClick:s,disabled:t<=1,children:(0,i.jsx)(g.Z,{icon:"eva:minus-fill",width:16,height:16})}),t,(0,i.jsx)(ce.Z,{size:"small",color:"inherit",onClick:r,disabled:t>=n,children:(0,i.jsx)(g.Z,{icon:"eva:plus-fill",width:16,height:16})})]}),(0,i.jsxs)(S.Z,{variant:"caption",sx:{color:"text.secondary"},children:["available: ",n]})]})}function Ze(){var e=(0,m.I0)(),n=(0,m.v9)((function(e){return e.product})).checkout,t=n.cart,r=n.total,s=n.discount,o=n.subtotal,a=J()(t.map((function(e){return e.quantity}))),l=0===t.length;return(0,i.jsxs)(u.ZP,{container:!0,spacing:3,children:[(0,i.jsxs)(u.ZP,{item:!0,xs:12,md:8,children:[(0,i.jsxs)(k.Z,{sx:{mb:3},children:[(0,i.jsx)(T.Z,{title:(0,i.jsxs)(S.Z,{variant:"h6",children:["Card",(0,i.jsxs)(S.Z,{component:"span",sx:{color:"text.secondary"},children:["\xa0(",a," item)"]})]}),sx:{mb:3}}),l?(0,i.jsx)(ie.Z,{title:"Cart is empty",description:"Look like you have no items in your shopping cart.",img:"/assets/illustrations/illustration_empty_cart.svg"}):(0,i.jsx)(te.Z,{children:(0,i.jsx)(me,{products:t,onDelete:function(n){e((0,j.al)(n))},onIncreaseQuantity:function(n){e((0,j.Qd)(n))},onDecreaseQuantity:function(n){e((0,j.a3)(n))}})})]}),(0,i.jsx)(ne(),{href:f.vB.eCommerce.root,passHref:!0,children:(0,i.jsx)(C.Z,{color:"inherit",startIcon:(0,i.jsx)(g.Z,{icon:"eva:arrow-ios-back-fill"}),children:"Continue Shopping"})})]}),(0,i.jsxs)(u.ZP,{item:!0,xs:12,md:4,children:[(0,i.jsx)(N,{enableDiscount:!0,total:r,discount:s,subtotal:o,onApplyDiscount:function(n){e((0,j.b6)(n))}}),(0,i.jsx)(C.Z,{fullWidth:!0,size:"large",type:"submit",variant:"contained",disabled:0===t.length,onClick:function(){e((0,j.NX)())},children:"Check Out"})]})]})}me.propTypes={products:s().array.isRequired,onDelete:s().func,onDecreaseQuantity:s().func,onIncreaseQuantity:s().func},je.propTypes={onDecrease:s().func,onDelete:s().func,onIncrease:s().func,row:s().shape({available:s().number,color:s().string,cover:s().string,name:s().string,price:s().number,quantity:s().number,size:s().string})},fe.propTypes={available:s().number,quantity:s().number,onIncrease:s().func,onDecrease:s().func};var ve=t(14251),be=t(52875),ye=t(68061),ge=t(50480),we=t(49033),Ce=(0,a.ZP)("div")((function(e){var n=e.theme;return{width:"100%",display:"flex",alignItems:"center",padding:n.spacing(0,2.5),justifyContent:"space-between",transition:n.transitions.create("all"),border:"solid 1px ".concat(n.palette.divider),borderRadius:1.5*Number(n.shape.borderRadius)}}));function ke(e){var n=e.deliveryOptions,t=e.onApplyShipping,r=(0,W.Gc)().control;return(0,i.jsxs)(k.Z,{children:[(0,i.jsx)(T.Z,{title:"Delivery options"}),(0,i.jsx)(_.Z,{children:(0,i.jsx)(W.Qr,{name:"delivery",control:r,render:function(e){var r=e.field;return(0,i.jsx)(ye.Z,(0,be.Z)((0,ve.Z)({},r),{onChange:function(e){var n=e.target.value;r.onChange(Number(n)),t(Number(n))},children:(0,i.jsx)(P.Z,{spacing:2,alignItems:"center",direction:{xs:"column",md:"row"},children:n.map((function(e){var n=r.value===e.value;return(0,i.jsx)(Ce,{sx:(0,ve.Z)({},n&&{boxShadow:function(e){return e.customShadows.z20}}),children:(0,i.jsx)(ge.Z,{value:e.value,control:(0,i.jsx)(we.Z,{checkedIcon:(0,i.jsx)(g.Z,{icon:"eva:checkmark-circle-2-fill"})}),label:(0,i.jsxs)(c.Z,{sx:{ml:1},children:[(0,i.jsx)(S.Z,{variant:"subtitle2",children:e.title}),(0,i.jsx)(S.Z,{variant:"body2",sx:{color:"text.secondary"},children:e.description})]}),sx:{py:3,flexGrow:1,mr:0}})},e.value)}))})}))}})})]})}ke.propTypes={deliveryOptions:s().array,onApplyShipping:s().func};var Se=t(67573),De=t(6453),Ie=t(11163),Te=t(23795),_e=t(55660),Pe=t(22709),Ae=(0,a.ZP)(_e.Kl)((function(e){var n=e.theme;return{"& .MuiDialog-paper":(0,Se.Z)({margin:0},n.breakpoints.up("md"),{maxWidth:"calc(100% - 48px)",maxHeight:"calc(100% - 48px)"})}}));function Be(e){var n=(0,De.Z)({},e),t=(0,Ie.useRouter)().push,r=(0,m.I0)(),s=function(){r((0,j.s9)()),t(f.vB.eCommerce.shop)};return(0,i.jsx)(Ae,(0,be.Z)((0,ve.Z)({fullScreen:!0},n),{children:(0,i.jsxs)(c.Z,{sx:{p:4,maxWidth:480,margin:"auto"},children:[(0,i.jsxs)(c.Z,{sx:{textAlign:"center"},children:[(0,i.jsx)(S.Z,{variant:"h4",paragraph:!0,children:"Thank you for your purchase!"}),(0,i.jsx)(Pe.mn,{sx:{height:260,my:10}}),(0,i.jsxs)(S.Z,{align:"left",paragraph:!0,children:["Thanks for placing order \xa0",(0,i.jsx)(Te.Z,{href:"#",children:"01dc1370-3df6-11eb-b378-0242ac130002"})]}),(0,i.jsxs)(S.Z,{align:"left",sx:{color:"text.secondary"},children:["We will send you a notification within 5 days when it ships.",(0,i.jsx)("br",{})," ",(0,i.jsx)("br",{})," If you have any question or queries then fell to get in contact us. ",(0,i.jsx)("br",{})," ",(0,i.jsx)("br",{})," All the best,"]})]}),(0,i.jsx)(A.Z,{sx:{my:3}}),(0,i.jsxs)(P.Z,{direction:{xs:"column-reverse",sm:"row"},justifyContent:"space-between",spacing:2,children:[(0,i.jsx)(C.Z,{color:"inherit",onClick:s,startIcon:(0,i.jsx)(g.Z,{icon:"eva:arrow-ios-back-fill"}),children:"Continue Shopping"}),(0,i.jsx)(C.Z,{variant:"contained",startIcon:(0,i.jsx)(g.Z,{icon:"ant-design:file-pdf-filled"}),onClick:s,children:"Download as PDF"})]})]})}))}var Re=t(57922),Fe=t(56815),Ne=t(55102),ze=(0,a.ZP)("div")((function(e){var n=e.theme;return{display:"flex",alignItems:"center",padding:n.spacing(0,2.5),justifyContent:"space-between",transition:n.transitions.create("all"),border:"solid 1px ".concat(n.palette.divider),borderRadius:1.5*Number(n.shape.borderRadius)}}));function qe(e){var n=e.paymentOptions,t=e.cardOptions,r=(0,W.Gc)().control,s=(0,Ne.Z)("up","sm");return(0,i.jsxs)(k.Z,{sx:{my:3},children:[(0,i.jsx)(T.Z,{title:"Payment options"}),(0,i.jsx)(_.Z,{children:(0,i.jsx)(W.Qr,{name:"payment",control:r,render:function(e){var r=e.field,o=e.fieldState.error;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(ye.Z,(0,be.Z)((0,ve.Z)({row:!0},r),{children:(0,i.jsx)(P.Z,{spacing:2,children:n.map((function(e){var n=e.value,o=e.title,a=e.icons,l=e.description,d="credit_card"===n,u=r.value===n;return(0,i.jsxs)(ze,{sx:(0,ve.Z)({},u&&{boxShadow:function(e){return e.customShadows.z20}},d&&{flexWrap:"wrap"}),children:[(0,i.jsx)(ge.Z,{value:n,control:(0,i.jsx)(we.Z,{checkedIcon:(0,i.jsx)(g.Z,{icon:"eva:checkmark-circle-2-fill"})}),label:(0,i.jsxs)(c.Z,{sx:{ml:1},children:[(0,i.jsx)(S.Z,{variant:"subtitle2",children:o}),(0,i.jsx)(S.Z,{variant:"body2",sx:{color:"text.secondary"},children:l})]}),sx:{flexGrow:1,py:3}}),s&&(0,i.jsx)(P.Z,{direction:"row",spacing:1,flexShrink:0,children:a.map((function(e){return(0,i.jsx)(ue.Z,{alt:"logo card",src:e},e)}))}),d&&(0,i.jsxs)(Re.Z,{in:"credit_card"===r.value,sx:{width:1},children:[(0,i.jsx)(B.Z,{select:!0,fullWidth:!0,label:"Cards",SelectProps:{native:!0},children:t.map((function(e){return(0,i.jsx)("option",{value:e.value,children:e.label},e.value)}))}),(0,i.jsx)(C.Z,{size:"small",startIcon:(0,i.jsx)(g.Z,{icon:"eva:plus-fill",width:20,height:20}),sx:{my:3},children:"Add new card"})]})]},o)}))})})),!!o&&(0,i.jsx)(Fe.Z,{error:!0,sx:{pt:1,px:2},children:o.message})]})}})})]})}qe.propTypes={paymentOptions:s().array,cardOptions:s().array};var Oe=[{value:0,title:"Standard delivery (Free)",description:"Delivered on Monday, August 12"},{value:2,title:"Fast delivery ($2,00)",description:"Delivered on Monday, August 5"}],We=[{value:"paypal",title:"Pay with Paypal",description:"You will be redirected to PayPal website to complete your purchase securely.",icons:["https://minimal-assets-api-dev.vercel.app/assets/icons/ic_paypal.svg"]},{value:"credit_card",title:"Credit / Debit Card",description:"We support Mastercard, Visa, Discover and Stripe.",icons:["https://minimal-assets-api-dev.vercel.app/assets/icons/ic_mastercard.svg","https://minimal-assets-api-dev.vercel.app/assets/icons/ic_visa.svg"]},{value:"cash",title:"Cash on CheckoutDelivery",description:"Pay with cash when your order is delivered.",icons:[]}],Ee=[{value:"ViSa1",label:"**** **** **** 1212 - Jimmy Holland"},{value:"ViSa2",label:"**** **** **** 2424 - Shawn Stokes"},{value:"MasterCard",label:"**** **** **** 4545 - Cole Armstrong"}];function Me(){var e=(0,m.I0)(),n=(0,m.v9)((function(e){return e.product})).checkout,t=n.total,r=n.discount,s=n.subtotal,o=n.shipping,a=function(){e((0,j.Fs)())},l=O.Ry().shape({payment:O.Z_().required("Payment is required!")}),c={delivery:o,payment:""},d=(0,W.cI)({resolver:(0,E.X)(l),defaultValues:c}),h=d.handleSubmit,x=d.formState.isSubmitting,p=function(){var n=(0,z.Z)((function(){return(0,q.__generator)(this,(function(n){try{e((0,j.NX)())}catch(t){console.error(t)}return[2]}))}));return function(){return n.apply(this,arguments)}}();return(0,i.jsx)(H.RV,{methods:d,onSubmit:h(p),children:(0,i.jsxs)(u.ZP,{container:!0,spacing:3,children:[(0,i.jsxs)(u.ZP,{item:!0,xs:12,md:8,children:[(0,i.jsx)(ke,{onApplyShipping:function(n){e((0,j.SY)(n))},deliveryOptions:Oe}),(0,i.jsx)(qe,{cardOptions:Ee,paymentOptions:We}),(0,i.jsx)(C.Z,{size:"small",color:"inherit",onClick:a,startIcon:(0,i.jsx)(g.Z,{icon:"eva:arrow-ios-back-fill"}),children:"Back"})]}),(0,i.jsxs)(u.ZP,{item:!0,xs:12,md:4,children:[(0,i.jsx)($,{onBackStep:a}),(0,i.jsx)(N,{enableEdit:!0,total:t,subtotal:s,discount:r,shipping:o,onEdit:function(){return n=0,void e((0,j.$w)(n));var n}}),(0,i.jsx)(V.Z,{fullWidth:!0,size:"large",type:"submit",variant:"contained",loading:x,children:"Complete Order"})]})]})})}var Ge=["Cart","Billing & address","Payment"],Le=(0,a.ZP)(l.Z)((function(e){var n=e.theme;return{top:10,left:"calc(-50% + 20px)",right:"calc(50% + 20px)","& .MuiStepConnector-line":{borderTopWidth:2,borderColor:n.palette.divider},"&.Mui-active, &.Mui-completed":{"& .MuiStepConnector-line":{borderColor:n.palette.primary.main}}}}));function Qe(e){var n=e.active,t=e.completed;return(0,i.jsx)(c.Z,{sx:{zIndex:9,width:24,height:24,display:"flex",alignItems:"center",justifyContent:"center",color:n?"primary.main":"text.disabled"},children:t?(0,i.jsx)(g.Z,{icon:"eva:checkmark-fill",sx:{zIndex:1,width:20,height:20,color:"primary.main"}}):(0,i.jsx)(c.Z,{sx:{width:8,height:8,borderRadius:"50%",backgroundColor:"currentColor"}})})}function Ve(){var e=(0,v.Z)().themeStretch,n=(0,m.I0)(),t=(0,Z.Z)(),r=(0,m.v9)((function(e){return e.product})).checkout,s=r.cart,a=r.billing,l=r.activeStep,c=l===Ge.length;return(0,o.useEffect)((function(){t.current&&n((0,j.dv)(s))}),[n,t,s]),(0,o.useEffect)((function(){1===l&&n((0,j.YN)(null))}),[n,l]),(0,i.jsx)(y.Z,{title:"Ecommerce: Checkout",children:(0,i.jsxs)(d.Z,{maxWidth:!e&&"lg",children:[(0,i.jsx)(w.Z,{heading:"Checkout",links:[{name:"Dashboard",href:f.vB.root},{name:"E-Commerce",href:f.vB.eCommerce.root},{name:"Checkout"}]}),(0,i.jsx)(u.ZP,{container:!0,justifyContent:c?"center":"flex-start",children:(0,i.jsx)(u.ZP,{item:!0,xs:12,md:8,sx:{mb:5},children:(0,i.jsx)(h.Z,{alternativeLabel:!0,activeStep:l,connector:(0,i.jsx)(Le,{}),children:Ge.map((function(e){return(0,i.jsx)(x.Z,{children:(0,i.jsx)(p.Z,{StepIconComponent:Qe,sx:{"& .MuiStepLabel-label":{typography:"subtitle2",color:"text.disabled"}},children:e})},e)}))})})}),c?(0,i.jsx)(Be,{open:c}):(0,i.jsxs)(i.Fragment,{children:[0===l&&(0,i.jsx)(Ze,{}),1===l&&(0,i.jsx)(Y,{}),2===l&&a&&(0,i.jsx)(Me,{})]})]})})}Qe.propTypes={active:s().bool,completed:s().bool},Ve.getLayout=function(e){return(0,i.jsx)(b.Z,{children:e})}},19459:function(e,n,t){"use strict";function i(e){var n;switch(e){case"#00AB55":n="Green";break;case"#000000":n="Black";break;case"#FFFFFF":n="White";break;case"#FFC0CB":n="Pink";break;case"#FF4842":n="Red";break;case"#1890FF":n="Blue";break;case"#94D82D":n="Greenyellow";break;case"#FFC107":n="Orange";break;default:n=e}return n}t.d(n,{Z:function(){return i}})}},function(e){e.O(0,[9448,2174,4411,1557,7713,3279,1866,8866,9774,2888,179],(function(){return n=14953,e(e.s=n);var n}));var n=e.O();_N_E=n}]);