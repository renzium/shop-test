(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7831],{12963:function(e,r,t){"use strict";t.d(r,{Z:function(){return R}});var n=t(87462),s=t(63366),a=t(67294),i=(t(59864),t(86010)),o=t(94780),l=t(90948),c=t(71657),d=t(15861),p=t(41796),x=t(82066),h=t(85893),u=(0,x.Z)((0,h.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),m=t(49990);const f=(0,l.ZP)(m.Z)((({theme:e})=>(0,n.Z)({display:"flex",marginLeft:`calc(${e.spacing(1)} * 0.5)`,marginRight:`calc(${e.spacing(1)} * 0.5)`},"light"===e.palette.mode?{backgroundColor:e.palette.grey[100],color:e.palette.grey[700]}:{backgroundColor:e.palette.grey[700],color:e.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":(0,n.Z)({},"light"===e.palette.mode?{backgroundColor:e.palette.grey[200]}:{backgroundColor:e.palette.grey[600]}),"&:active":(0,n.Z)({boxShadow:e.shadows[0]},"light"===e.palette.mode?{backgroundColor:(0,p._4)(e.palette.grey[200],.12)}:{backgroundColor:(0,p._4)(e.palette.grey[600],.12)})}))),g=(0,l.ZP)(u)({width:24,height:16});var Z=function(e){const r=e;return(0,h.jsx)("li",{children:(0,h.jsx)(f,(0,n.Z)({focusRipple:!0},e,{ownerState:r,children:(0,h.jsx)(g,{ownerState:r})}))})},v=t(1588),b=t(34867);function j(e){return(0,b.Z)("MuiBreadcrumbs",e)}var y=(0,v.Z)("MuiBreadcrumbs",["root","ol","li","separator"]);const k=["children","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],w=(0,l.ZP)(d.Z,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:(e,r)=>[{[`& .${y.li}`]:r.li},r.root]})({}),C=(0,l.ZP)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:(e,r)=>r.ol})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),S=(0,l.ZP)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:(e,r)=>r.separator})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function _(e,r,t,n){return e.reduce(((s,a,i)=>(i<e.length-1?s=s.concat(a,(0,h.jsx)(S,{"aria-hidden":!0,className:r,ownerState:n,children:t},`separator-${i}`)):s.push(a),s)),[])}var R=a.forwardRef((function(e,r){const t=(0,c.Z)({props:e,name:"MuiBreadcrumbs"}),{children:l,className:d,component:p="nav",expandText:x="Show path",itemsAfterCollapse:u=1,itemsBeforeCollapse:m=1,maxItems:f=8,separator:g="/"}=t,v=(0,s.Z)(t,k),[b,y]=a.useState(!1),S=(0,n.Z)({},t,{component:p,expanded:b,expandText:x,itemsAfterCollapse:u,itemsBeforeCollapse:m,maxItems:f,separator:g}),R=(e=>{const{classes:r}=e;return(0,o.Z)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},j,r)})(S),B=a.useRef(null),T=a.Children.toArray(l).filter((e=>a.isValidElement(e))).map(((e,r)=>(0,h.jsx)("li",{className:R.li,children:e},`child-${r}`)));return(0,h.jsx)(w,(0,n.Z)({ref:r,component:p,color:"text.secondary",className:(0,i.Z)(R.root,d),ownerState:S},v,{children:(0,h.jsx)(C,{className:R.ol,ref:B,ownerState:S,children:_(b||f&&T.length<=f?T:(e=>m+u>=e.length?e:[...e.slice(0,m),(0,h.jsx)(Z,{"aria-label":x,onClick:()=>{y(!0);const e=B.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis"),...e.slice(e.length-u,e.length)])(T),R.separator,g,S)})}))}))},47211:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/user/cards",function(){return t(33254)}])},25814:function(e,r,t){"use strict";t.d(r,{Z:function(){return m}});var n=t(14251),s=t(52875),a=t(44747),i=t(85893),o=t(45697),l=t.n(o),c=t(41664),d=t.n(c),p=t(15861),x=t(12963),h=t(87357),u=t(23795);function m(e){var r=e.links,t=e.activeLast,o=void 0!==t&&t,l=(0,a.Z)(e,["links","activeLast"]),c=r[r.length-1].name,d=r.map((function(e){return(0,i.jsx)(f,{link:e},e.name)})),u=r.map((function(e){return(0,i.jsx)("div",{children:e.name!==c?(0,i.jsx)(f,{link:e}):(0,i.jsx)(p.Z,{variant:"body2",sx:{maxWidth:260,overflow:"hidden",whiteSpace:"nowrap",color:"text.disabled",textOverflow:"ellipsis"},children:c})},e.name)}));return(0,i.jsx)(x.Z,(0,s.Z)((0,n.Z)({separator:(0,i.jsx)(h.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})},l),{children:o?d:u}))}function f(e){var r=e.link,t=r.href,n=void 0===t?"":t,s=r.name,a=r.icon;return(0,i.jsx)(d(),{href:n,passHref:!0,children:(0,i.jsxs)(u.Z,{variant:"body2",sx:{lineHeight:2,display:"flex",alignItems:"center",color:"text.primary","& > div":{display:"inherit"}},children:[a&&(0,i.jsx)(h.Z,{sx:{mr:1,"& svg":{width:20,height:20}},children:a}),s]},s)})}m.propTypes={activeLast:l().bool,links:l().array.isRequired},f.propTypes={link:l().shape({href:l().string,icon:l().any,name:l().string})}},38187:function(e,r,t){"use strict";t.d(r,{Z:function(){return x}});var n=t(14251),s=t(44747),a=t(85893),i=t(45697),o=t.n(i),l=t(87357),c=t(15861),d=t(23795),p=t(25814);function x(e){var r=e.links,t=e.action,i=e.heading,o=e.moreLink,x=void 0===o?[]:o,h=e.sx,u=(0,s.Z)(e,["links","action","heading","moreLink","sx"]);return(0,a.jsxs)(l.Z,{sx:(0,n.Z)({mb:5},h),children:[(0,a.jsxs)(l.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,a.jsxs)(l.Z,{sx:{flexGrow:1},children:[(0,a.jsx)(c.Z,{variant:"h4",gutterBottom:!0,children:i}),(0,a.jsx)(p.Z,(0,n.Z)({links:r},u))]}),t&&(0,a.jsx)(l.Z,{sx:{flexShrink:0},children:t})]}),(0,a.jsx)(l.Z,{sx:{mt:2},children:"string"===typeof x?(0,a.jsx)(d.Z,{href:x,target:"_blank",variant:"body2",children:x}):x.map((function(e){return(0,a.jsx)(d.Z,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"table"},children:e},e)}))})]})}x.propTypes={links:o().array,action:o().node,heading:o().string.isRequired,moreLink:o().oneOfType([o().string,o().array]),sx:o().object}},33254:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return B}});var n=t(85893),s=t(53156),a=t(87357),i=t(76939),o=t(40571),l=t(61330),c=t(58866),d=t(82771),p=t(38187),x=t(14251),h=t(52875),u=t(45697),m=t.n(u),f=t(90948),g=t(66242),Z=t(87952),v=t(15861),b=t(26447),j=t(67720),y=t(26034),k=t(87850),w=t(65907),C=t(40946),S=t(41306),_=(0,f.ZP)("div")((function(e){var r=e.theme;return(0,h.Z)((0,x.Z)({},(0,y.Z)().bgBlur({blur:2,color:r.palette.primary.darker})),{top:0,zIndex:8,content:"''",width:"100%",height:"100%",position:"absolute"})}));function R(e){var r=e.user,t=r.name,s=r.cover,i=r.position,o=r.follower,l=r.totalPost,c=r.avatarUrl,d=r.following;return(0,n.jsxs)(g.Z,{sx:{textAlign:"center"},children:[(0,n.jsxs)(a.Z,{sx:{position:"relative"},children:[(0,n.jsx)(S.Z,{src:"https://minimal-assets-api-dev.vercel.app/assets/icons/shape-avatar.svg",sx:{width:144,height:62,zIndex:10,left:0,right:0,bottom:-26,mx:"auto",position:"absolute",color:"background.paper"}}),(0,n.jsx)(Z.Z,{alt:t,src:c,sx:{width:64,height:64,zIndex:11,left:0,right:0,bottom:-32,mx:"auto",position:"absolute"}}),(0,n.jsx)(_,{}),(0,n.jsx)(w.Z,{src:s,alt:s,ratio:"16/9"})]}),(0,n.jsx)(v.Z,{variant:"subtitle1",sx:{mt:6},children:t}),(0,n.jsx)(v.Z,{variant:"body2",sx:{color:"text.secondary"},children:i}),(0,n.jsx)(b.Z,{alignItems:"center",children:(0,n.jsx)(C.Z,{initialColor:!0,sx:{my:2.5}})}),(0,n.jsx)(j.Z,{sx:{borderStyle:"dashed"}}),(0,n.jsxs)(a.Z,{sx:{py:3,display:"grid",gridTemplateColumns:"repeat(3, 1fr)"},children:[(0,n.jsxs)("div",{children:[(0,n.jsx)(v.Z,{variant:"caption",component:"div",sx:{mb:.75,color:"text.disabled"},children:"Follower"}),(0,n.jsx)(v.Z,{variant:"subtitle1",children:(0,k.v1)(o)})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)(v.Z,{variant:"caption",component:"div",sx:{mb:.75,color:"text.disabled"},children:"Following"}),(0,n.jsx)(v.Z,{variant:"subtitle1",children:(0,k.v1)(d)})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)(v.Z,{variant:"caption",component:"div",sx:{mb:.75,color:"text.disabled"},children:"Total Post"}),(0,n.jsx)(v.Z,{variant:"subtitle1",children:(0,k.v1)(l)})]})]})]})}function B(){var e=(0,o.Z)().themeStretch;return(0,n.jsx)(d.Z,{title:"User: Cards",children:(0,n.jsxs)(s.Z,{maxWidth:!e&&"lg",children:[(0,n.jsx)(p.Z,{heading:"User Cards",links:[{name:"Dashboard",href:i.vB.root},{name:"User",href:i.vB.user.root},{name:"Cards"}]}),(0,n.jsx)(a.Z,{sx:{display:"grid",gap:3,gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(3, 1fr)"}},children:l.oe.map((function(e){return(0,n.jsx)(R,{user:e},e.id)}))})]})})}R.propTypes={user:m().object.isRequired},B.getLayout=function(e){return(0,n.jsx)(c.Z,{children:e})}}},function(e){e.O(0,[9448,2174,3279,1866,8866,9774,2888,179],(function(){return r=47211,e(e.s=r);var r}));var r=e.O();_N_E=r}]);