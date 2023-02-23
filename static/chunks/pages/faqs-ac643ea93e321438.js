(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1188],{67358:function(e,t,n){"use strict";n.d(t,{Z:function(){return j}});var r=n(63366),s=n(87462),i=n(67294),a=(n(59864),n(86010)),o=n(94780),d=n(90948),c=n(71657),l=n(57922),u=n(90629),p=n(64861),h=n(49299),m=n(1588),x=n(34867);function f(e){return(0,x.Z)("MuiAccordion",e)}var g=(0,m.Z)("MuiAccordion",["root","rounded","expanded","disabled","gutters","region"]),v=n(85893);const b=["children","className","defaultExpanded","disabled","disableGutters","expanded","onChange","square","TransitionComponent","TransitionProps"],Z=(0,d.ZP)(u.Z,{name:"MuiAccordion",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[{[`& .${g.region}`]:t.region},t.root,!n.square&&t.rounded,!n.disableGutters&&t.gutters]}})((({theme:e})=>{const t={duration:e.transitions.duration.shortest};return{position:"relative",transition:e.transitions.create(["margin"],t),overflowAnchor:"none","&:before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:(e.vars||e).palette.divider,transition:e.transitions.create(["opacity","background-color"],t)},"&:first-of-type":{"&:before":{display:"none"}},[`&.${g.expanded}`]:{"&:before":{opacity:0},"&:first-of-type":{marginTop:0},"&:last-of-type":{marginBottom:0},"& + &":{"&:before":{display:"none"}}},[`&.${g.disabled}`]:{backgroundColor:(e.vars||e).palette.action.disabledBackground}}}),(({theme:e,ownerState:t})=>(0,s.Z)({},!t.square&&{borderRadius:0,"&:first-of-type":{borderTopLeftRadius:(e.vars||e).shape.borderRadius,borderTopRightRadius:(e.vars||e).shape.borderRadius},"&:last-of-type":{borderBottomLeftRadius:(e.vars||e).shape.borderRadius,borderBottomRightRadius:(e.vars||e).shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}},!t.disableGutters&&{[`&.${g.expanded}`]:{margin:"16px 0"}})));var j=i.forwardRef((function(e,t){const n=(0,c.Z)({props:e,name:"MuiAccordion"}),{children:d,className:u,defaultExpanded:m=!1,disabled:x=!1,disableGutters:g=!1,expanded:j,onChange:y,square:w=!1,TransitionComponent:R=l.Z,TransitionProps:C}=n,S=(0,r.Z)(n,b),[k,N]=(0,h.Z)({controlled:j,default:m,name:"Accordion",state:"expanded"}),P=i.useCallback((e=>{N(!k),y&&y(e,!k)}),[k,y,N]),[A,...M]=i.Children.toArray(d),E=i.useMemo((()=>({expanded:k,disabled:x,disableGutters:g,toggle:P})),[k,x,g,P]),_=(0,s.Z)({},n,{square:w,disabled:x,disableGutters:g,expanded:k}),q=(e=>{const{classes:t,square:n,expanded:r,disabled:s,disableGutters:i}=e,a={root:["root",!n&&"rounded",r&&"expanded",s&&"disabled",!i&&"gutters"],region:["region"]};return(0,o.Z)(a,f,t)})(_);return(0,v.jsxs)(Z,(0,s.Z)({className:(0,a.Z)(q.root,u),ref:t,ownerState:_,square:w},S,{children:[(0,v.jsx)(p.Z.Provider,{value:E,children:A}),(0,v.jsx)(R,(0,s.Z)({in:k,timeout:"auto"},C,{children:(0,v.jsx)("div",{"aria-labelledby":A.props.id,id:A.props["aria-controls"],role:"region",className:q.region,children:M})}))]}))}))},64861:function(e,t,n){"use strict";const r=n(67294).createContext({});t.Z=r},22797:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r=n(87462),s=n(63366),i=n(67294),a=n(86010),o=n(94780),d=n(90948),c=n(71657),l=n(1588),u=n(34867);function p(e){return(0,u.Z)("MuiAccordionDetails",e)}(0,l.Z)("MuiAccordionDetails",["root"]);var h=n(85893);const m=["className"],x=(0,d.ZP)("div",{name:"MuiAccordionDetails",slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e})=>({padding:e.spacing(1,2,2)})));var f=i.forwardRef((function(e,t){const n=(0,c.Z)({props:e,name:"MuiAccordionDetails"}),{className:i}=n,d=(0,s.Z)(n,m),l=n,u=(e=>{const{classes:t}=e;return(0,o.Z)({root:["root"]},p,t)})(l);return(0,h.jsx)(x,(0,r.Z)({className:(0,a.Z)(u.root,i),ref:t,ownerState:l},d))}))},90072:function(e,t,n){"use strict";n.d(t,{Z:function(){return j}});var r=n(63366),s=n(87462),i=n(67294),a=n(86010),o=n(94780),d=n(90948),c=n(71657),l=n(49990),u=n(64861),p=n(1588),h=n(34867);function m(e){return(0,h.Z)("MuiAccordionSummary",e)}var x=(0,p.Z)("MuiAccordionSummary",["root","expanded","focusVisible","disabled","gutters","contentGutters","content","expandIconWrapper"]),f=n(85893);const g=["children","className","expandIcon","focusVisibleClassName","onClick"],v=(0,d.ZP)(l.Z,{name:"MuiAccordionSummary",slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e,ownerState:t})=>{const n={duration:e.transitions.duration.shortest};return(0,s.Z)({display:"flex",minHeight:48,padding:e.spacing(0,2),transition:e.transitions.create(["min-height","background-color"],n),[`&.${x.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${x.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`&:hover:not(.${x.disabled})`]:{cursor:"pointer"}},!t.disableGutters&&{[`&.${x.expanded}`]:{minHeight:64}})})),b=(0,d.ZP)("div",{name:"MuiAccordionSummary",slot:"Content",overridesResolver:(e,t)=>t.content})((({theme:e,ownerState:t})=>(0,s.Z)({display:"flex",flexGrow:1,margin:"12px 0"},!t.disableGutters&&{transition:e.transitions.create(["margin"],{duration:e.transitions.duration.shortest}),[`&.${x.expanded}`]:{margin:"20px 0"}}))),Z=(0,d.ZP)("div",{name:"MuiAccordionSummary",slot:"ExpandIconWrapper",overridesResolver:(e,t)=>t.expandIconWrapper})((({theme:e})=>({display:"flex",color:(e.vars||e).palette.action.active,transform:"rotate(0deg)",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest}),[`&.${x.expanded}`]:{transform:"rotate(180deg)"}})));var j=i.forwardRef((function(e,t){const n=(0,c.Z)({props:e,name:"MuiAccordionSummary"}),{children:d,className:l,expandIcon:p,focusVisibleClassName:h,onClick:x}=n,j=(0,r.Z)(n,g),{disabled:y=!1,disableGutters:w,expanded:R,toggle:C}=i.useContext(u.Z),S=(0,s.Z)({},n,{expanded:R,disabled:y,disableGutters:w}),k=(e=>{const{classes:t,expanded:n,disabled:r,disableGutters:s}=e,i={root:["root",n&&"expanded",r&&"disabled",!s&&"gutters"],focusVisible:["focusVisible"],content:["content",n&&"expanded",!s&&"contentGutters"],expandIconWrapper:["expandIconWrapper",n&&"expanded"]};return(0,o.Z)(i,m,t)})(S);return(0,f.jsxs)(v,(0,s.Z)({focusRipple:!1,disableRipple:!0,disabled:y,component:"div","aria-expanded":R,className:(0,a.Z)(k.root,l),focusVisibleClassName:(0,a.Z)(k.focusVisible,h),onClick:e=>{C&&C(e),x&&x(e)},ref:t,ownerState:S},j,{children:[(0,f.jsx)(b,{className:k.content,ownerState:S,children:d}),p&&(0,f.jsx)(Z,{className:k.expandIconWrapper,ownerState:S,children:p})]}))}))},97908:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/faqs",function(){return n(11666)}])},83826:function(e,t,n){"use strict";var r=n(67573),s=n(14251),i=n(90948),a=n(50135),o=(0,i.ZP)(a.Z,{shouldForwardProp:function(e){return"stretchStart"!==e}})((function(e){var t=e.stretchStart,n=e.theme;return{"& .MuiOutlinedInput-root":(0,s.Z)({transition:n.transitions.create(["box-shadow","width"],{easing:n.transitions.easing.easeInOut,duration:n.transitions.duration.shorter}),"&.Mui-focused":{boxShadow:n.customShadows.z12}},t&&{width:t,"&.Mui-focused":(0,r.Z)({boxShadow:n.customShadows.z12},n.breakpoints.up("sm"),{width:t+60})}),"& fieldset":{borderWidth:"1px !important",borderColor:"".concat(n.palette.grey[50032]," !important")}}}));t.Z=o},53376:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(67294);function s(e){var t=(0,r.useState)(e||!1),n=t[0],s=t[1];return{toggle:n,onToggle:function(){return s(!n)},onOpen:function(){return s(!0)},onClose:function(){return s(!1)},setToggle:s}}},11666:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return V}});var r=n(67573),s=n(85893),i=n(90948),a=n(53156),o=n(15861),d=n(86886),c=n(58866),l=n(82771),u=n(45962),p=n(26447),h=n(87357),m=n(87109),x=n(34444),f=n(83826),g=n(55660),v=(0,i.ZP)("div")((function(e){var t=e.theme;return(0,r.Z)({backgroundSize:"cover",backgroundImage:"url(/assets/overlay.svg), url(https://minimal-assets-api-dev.vercel.app/assets/images/faqs/hero.jpg)",padding:t.spacing(10,0)},t.breakpoints.up("md"),{height:560,padding:0})})),b=(0,i.ZP)(p.Z)((function(e){var t=e.theme;return(0,r.Z)({textAlign:"center"},t.breakpoints.up("md"),{textAlign:"left",position:"absolute",bottom:t.spacing(10)})}));function Z(){return(0,s.jsx)(v,{children:(0,s.jsx)(a.Z,{component:g.NM,sx:{position:"relative",height:"100%"},children:(0,s.jsxs)(b,{spacing:5,children:[(0,s.jsxs)("div",{children:[(0,s.jsx)(g.gH,{text:"How",sx:{color:"primary.main"},variants:(0,g.EU)().inRight}),(0,s.jsx)("br",{}),(0,s.jsxs)(h.Z,{sx:{display:"inline-flex",color:"common.white"},children:[(0,s.jsx)(g.gH,{text:"can",sx:{mr:2}}),(0,s.jsx)(g.gH,{text:"we",sx:{mr:2}}),(0,s.jsx)(g.gH,{text:"help",sx:{mr:2}}),(0,s.jsx)(g.gH,{text:"you?"})]})]}),(0,s.jsx)(u.m.div,{variants:(0,g.EU)().inUp,children:(0,s.jsx)(f.Z,{stretchStart:280,placeholder:"Search support",InputProps:{startAdornment:(0,s.jsx)(m.Z,{position:"start",children:(0,s.jsx)(x.Z,{icon:"eva:search-fill",sx:{color:"text.disabled",width:20,height:20}})})},sx:{"& .MuiOutlinedInput-root":{color:"common.white"}}})})]})})})}var j=n(67358),y=n(90072),w=n(22797),R=n(61330);function C(){return(0,s.jsx)(s.Fragment,{children:R.c_.map((function(e){return(0,s.jsxs)(j.Z,{children:[(0,s.jsx)(y.Z,{expandIcon:(0,s.jsx)(x.Z,{icon:"eva:arrow-ios-downward-fill",width:20,height:20}),children:(0,s.jsx)(o.Z,{variant:"subtitle1",children:e.heading})}),(0,s.jsx)(w.Z,{children:(0,s.jsx)(o.Z,{children:e.detail})})]},e.id)}))})}var S=n(50135),k=n(11057);function N(){return(0,s.jsxs)(p.Z,{component:g.DG,spacing:3,children:[(0,s.jsx)(u.m.div,{variants:(0,g.EU)().inUp,children:(0,s.jsx)(o.Z,{variant:"h4",children:"Haven't found the right help?"})}),(0,s.jsx)(u.m.div,{variants:(0,g.EU)().inUp,children:(0,s.jsx)(S.Z,{fullWidth:!0,label:"Name"})}),(0,s.jsx)(u.m.div,{variants:(0,g.EU)().inUp,children:(0,s.jsx)(S.Z,{fullWidth:!0,label:"Email"})}),(0,s.jsx)(u.m.div,{variants:(0,g.EU)().inUp,children:(0,s.jsx)(S.Z,{fullWidth:!0,label:"Subject"})}),(0,s.jsx)(u.m.div,{variants:(0,g.EU)().inUp,children:(0,s.jsx)(S.Z,{fullWidth:!0,label:"Enter your message here.",multiline:!0,rows:4})}),(0,s.jsx)(u.m.div,{variants:(0,g.EU)().inUp,children:(0,s.jsx)(k.Z,{size:"large",variant:"contained",children:"Submit Now"})})]})}var P=n(45697),A=n.n(P),M=n(42293),E=n(10155),_=n(67720),q=n(58826),G=n(98619),I=n(90629),T=n(53376),U=n(55102),W=n(65907),D=[{label:"Managing your account",icon:"https://minimal-assets-api-dev.vercel.app/assets/icons/faqs/ic_account.svg",href:"#"},{label:"Payment",icon:"https://minimal-assets-api-dev.vercel.app/assets/icons/faqs/ic_payment.svg",href:"#"},{label:"Delivery",icon:"https://minimal-assets-api-dev.vercel.app/assets/icons/faqs/ic_delivery.svg",href:"#"},{label:"Problem with the Product",icon:"https://minimal-assets-api-dev.vercel.app/assets/icons/faqs/ic_package.svg",href:"#"},{label:"Return & Refund",icon:"https://minimal-assets-api-dev.vercel.app/assets/icons/faqs/ic_refund.svg",href:"#"},{label:"Guarantees and assurances",icon:"https://minimal-assets-api-dev.vercel.app/assets/icons/faqs/ic_assurances.svg",href:"#"}];function $(){var e=(0,U.Z)("up","md"),t=(0,T.Z)(),n=t.toggle,r=t.onOpen,i=t.onClose;return e?(0,s.jsx)(h.Z,{component:g.DG,sx:{mb:15,display:"grid",gap:3,gridTemplateColumns:{md:"repeat(3, 1fr)",lg:"repeat(6, 1fr)"}},children:D.map((function(e){return(0,s.jsx)(u.m.div,{variants:(0,g.EU)().in,children:(0,s.jsx)(H,{category:e})},e.label)}))}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(M.Z,{position:"absolute",color:"transparent",sx:{top:-120,boxShadow:0},children:[(0,s.jsx)(E.Z,{children:(0,s.jsx)(k.Z,{startIcon:(0,s.jsx)(x.Z,{icon:"eva:menu-2-fill"}),onClick:r,children:"Categories"})}),(0,s.jsx)(_.Z,{})]}),(0,s.jsx)(q.ZP,{open:n,onClose:i,children:(0,s.jsx)(h.Z,{sx:{p:1,display:"grid",gap:1,gridTemplateColumns:"repeat(2, 1fr)"},children:D.map((function(e){return(0,s.jsxs)(G.Z,{onClick:i,sx:{py:2,maxWidth:140,borderRadius:1,textAlign:"center",typography:"body2",alignItems:"center",flexDirection:"column",justifyContent:"center",bgcolor:"background.neutral"},children:[(0,s.jsx)(W.Z,{alt:e.icon,src:e.icon,sx:{width:48,height:48,mb:1}}),e.label]},e.label)}))})})]})}function H(e){var t=e.category,n=t.label,r=t.icon;return(0,s.jsxs)(I.Z,{variant:"outlined",sx:{px:2,height:260,borderRadius:2,display:"flex",textAlign:"center",alignItems:"center",flexDirection:"column",justifyContent:"center","&:hover":{boxShadow:function(e){return e.customShadows.z24}}},children:[(0,s.jsx)(W.Z,{alt:r,visibleByDefault:!0,disabledEffect:!0,src:r,sx:{mb:2,width:80,height:80}}),(0,s.jsx)(o.Z,{variant:"subtitle2",children:n})]})}H.propTypes={category:A().shape({icon:A().string,label:A().string})};var O=(0,i.ZP)("div")((function(e){var t=e.theme;return(0,r.Z)({paddingTop:t.spacing(8)},t.breakpoints.up("md"),{paddingTop:t.spacing(11)})}));function V(){return(0,s.jsx)(l.Z,{title:"Faqs",children:(0,s.jsxs)(O,{children:[(0,s.jsx)(Z,{}),(0,s.jsxs)(a.Z,{sx:{mt:15,mb:10,position:"relative"},children:[(0,s.jsx)($,{}),(0,s.jsx)(o.Z,{variant:"h3",sx:{mb:5},children:"Frequently asked questions"}),(0,s.jsxs)(d.ZP,{container:!0,spacing:10,children:[(0,s.jsx)(d.ZP,{item:!0,xs:12,md:6,children:(0,s.jsx)(C,{})}),(0,s.jsx)(d.ZP,{item:!0,xs:12,md:6,children:(0,s.jsx)(N,{})})]})]})]})})}V.getLayout=function(e){return(0,s.jsx)(c.Z,{variant:"main",children:e})}}},function(e){e.O(0,[9448,2174,3279,1866,8866,9774,2888,179],(function(){return t=97908,e(e.s=t);var t}));var t=e.O();_N_E=t}]);