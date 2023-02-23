(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8885],{12963:function(e,t,n){"use strict";n.d(t,{Z:function(){return S}});var r=n(87462),i=n(63366),a=n(67294),s=(n(59864),n(86010)),o=n(94780),l=n(90948),c=n(71657),d=n(15861),u=n(41796),h=n(82066),p=n(85893),x=(0,h.Z)((0,p.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),m=n(49990);const f=(0,l.ZP)(m.Z)((({theme:e})=>(0,r.Z)({display:"flex",marginLeft:`calc(${e.spacing(1)} * 0.5)`,marginRight:`calc(${e.spacing(1)} * 0.5)`},"light"===e.palette.mode?{backgroundColor:e.palette.grey[100],color:e.palette.grey[700]}:{backgroundColor:e.palette.grey[700],color:e.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":(0,r.Z)({},"light"===e.palette.mode?{backgroundColor:e.palette.grey[200]}:{backgroundColor:e.palette.grey[600]}),"&:active":(0,r.Z)({boxShadow:e.shadows[0]},"light"===e.palette.mode?{backgroundColor:(0,u._4)(e.palette.grey[200],.12)}:{backgroundColor:(0,u._4)(e.palette.grey[600],.12)})}))),g=(0,l.ZP)(x)({width:24,height:16});var Z=function(e){const t=e;return(0,p.jsx)("li",{children:(0,p.jsx)(f,(0,r.Z)({focusRipple:!0},e,{ownerState:t,children:(0,p.jsx)(g,{ownerState:t})}))})},v=n(1588),j=n(34867);function b(e){return(0,j.Z)("MuiBreadcrumbs",e)}var y=(0,v.Z)("MuiBreadcrumbs",["root","ol","li","separator"]);const w=["children","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],k=(0,l.ZP)(d.Z,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:(e,t)=>[{[`& .${y.li}`]:t.li},t.root]})({}),C=(0,l.ZP)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:(e,t)=>t.ol})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),P=(0,l.ZP)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:(e,t)=>t.separator})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function R(e,t,n,r){return e.reduce(((i,a,s)=>(s<e.length-1?i=i.concat(a,(0,p.jsx)(P,{"aria-hidden":!0,className:t,ownerState:r,children:n},`separator-${s}`)):i.push(a),i)),[])}var S=a.forwardRef((function(e,t){const n=(0,c.Z)({props:e,name:"MuiBreadcrumbs"}),{children:l,className:d,component:u="nav",expandText:h="Show path",itemsAfterCollapse:x=1,itemsBeforeCollapse:m=1,maxItems:f=8,separator:g="/"}=n,v=(0,i.Z)(n,w),[j,y]=a.useState(!1),P=(0,r.Z)({},n,{component:u,expanded:j,expandText:h,itemsAfterCollapse:x,itemsBeforeCollapse:m,maxItems:f,separator:g}),S=(e=>{const{classes:t}=e;return(0,o.Z)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},b,t)})(P),T=a.useRef(null),N=a.Children.toArray(l).filter((e=>a.isValidElement(e))).map(((e,t)=>(0,p.jsx)("li",{className:S.li,children:e},`child-${t}`)));return(0,p.jsx)(k,(0,r.Z)({ref:t,component:u,color:"text.secondary",className:(0,s.Z)(S.root,d),ownerState:P},v,{children:(0,p.jsx)(C,{className:S.ol,ref:T,ownerState:P,children:R(j||f&&N.length<=f?N:(e=>m+x>=e.length?e:[...e.slice(0,m),(0,p.jsx)(Z,{"aria-label":h,onClick:()=>{y(!0);const e=T.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis"),...e.slice(e.length-x,e.length)])(N),S.separator,g,P)})}))}))},78445:function(e,t,n){"use strict";n.d(t,{Z:function(){return b}});var r=n(63366),i=n(87462),a=n(67294),s=n(86010),o=n(94780),l=n(15861),c=n(71657),d=n(90948),u=n(1588),h=n(34867);function p(e){return(0,h.Z)("MuiCardHeader",e)}var x=(0,u.Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),m=n(85893);const f=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],g=(0,d.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:(e,t)=>(0,i.Z)({[`& .${x.title}`]:t.title,[`& .${x.subheader}`]:t.subheader},t.root)})({display:"flex",alignItems:"center",padding:16}),Z=(0,d.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:(e,t)=>t.avatar})({display:"flex",flex:"0 0 auto",marginRight:16}),v=(0,d.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:(e,t)=>t.action})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),j=(0,d.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:(e,t)=>t.content})({flex:"1 1 auto"});var b=a.forwardRef((function(e,t){const n=(0,c.Z)({props:e,name:"MuiCardHeader"}),{action:a,avatar:d,className:u,component:h="div",disableTypography:x=!1,subheader:b,subheaderTypographyProps:y,title:w,titleTypographyProps:k}=n,C=(0,r.Z)(n,f),P=(0,i.Z)({},n,{component:h,disableTypography:x}),R=(e=>{const{classes:t}=e;return(0,o.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},p,t)})(P);let S=w;null==S||S.type===l.Z||x||(S=(0,m.jsx)(l.Z,(0,i.Z)({variant:d?"body2":"h5",className:R.title,component:"span",display:"block"},k,{children:S})));let T=b;return null==T||T.type===l.Z||x||(T=(0,m.jsx)(l.Z,(0,i.Z)({variant:d?"body2":"body1",className:R.subheader,color:"text.secondary",component:"span",display:"block"},y,{children:T}))),(0,m.jsxs)(g,(0,i.Z)({className:(0,s.Z)(R.root,u),as:h,ref:t,ownerState:P},C,{children:[d&&(0,m.jsx)(Z,{className:R.avatar,ownerState:P,children:d}),(0,m.jsxs)(j,{className:R.content,ownerState:P,children:[S,T]}),a&&(0,m.jsx)(v,{className:R.action,ownerState:P,children:a})]}))}))},32737:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/products/mui/transfer-list",function(){return n(69490)}])},25814:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var r=n(14251),i=n(52875),a=n(44747),s=n(85893),o=n(45697),l=n.n(o),c=n(41664),d=n.n(c),u=n(15861),h=n(12963),p=n(87357),x=n(23795);function m(e){var t=e.links,n=e.activeLast,o=void 0!==n&&n,l=(0,a.Z)(e,["links","activeLast"]),c=t[t.length-1].name,d=t.map((function(e){return(0,s.jsx)(f,{link:e},e.name)})),x=t.map((function(e){return(0,s.jsx)("div",{children:e.name!==c?(0,s.jsx)(f,{link:e}):(0,s.jsx)(u.Z,{variant:"body2",sx:{maxWidth:260,overflow:"hidden",whiteSpace:"nowrap",color:"text.disabled",textOverflow:"ellipsis"},children:c})},e.name)}));return(0,s.jsx)(h.Z,(0,i.Z)((0,r.Z)({separator:(0,s.jsx)(p.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})},l),{children:o?d:x}))}function f(e){var t=e.link,n=t.href,r=void 0===n?"":n,i=t.name,a=t.icon;return(0,s.jsx)(d(),{href:r,passHref:!0,children:(0,s.jsxs)(x.Z,{variant:"body2",sx:{lineHeight:2,display:"flex",alignItems:"center",color:"text.primary","& > div":{display:"inherit"}},children:[a&&(0,s.jsx)(p.Z,{sx:{mr:1,"& svg":{width:20,height:20}},children:a}),i]},i)})}m.propTypes={activeLast:l().bool,links:l().array.isRequired},f.propTypes={link:l().shape({href:l().string,icon:l().any,name:l().string})}},38187:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var r=n(14251),i=n(44747),a=n(85893),s=n(45697),o=n.n(s),l=n(87357),c=n(15861),d=n(23795),u=n(25814);function h(e){var t=e.links,n=e.action,s=e.heading,o=e.moreLink,h=void 0===o?[]:o,p=e.sx,x=(0,i.Z)(e,["links","action","heading","moreLink","sx"]);return(0,a.jsxs)(l.Z,{sx:(0,r.Z)({mb:5},p),children:[(0,a.jsxs)(l.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,a.jsxs)(l.Z,{sx:{flexGrow:1},children:[(0,a.jsx)(c.Z,{variant:"h4",gutterBottom:!0,children:s}),(0,a.jsx)(u.Z,(0,r.Z)({links:t},x))]}),n&&(0,a.jsx)(l.Z,{sx:{flexShrink:0},children:n})]}),(0,a.jsx)(l.Z,{sx:{mt:2},children:"string"===typeof h?(0,a.jsx)(d.Z,{href:h,target:"_blank",variant:"body2",children:h}):h.map((function(e){return(0,a.jsx)(d.Z,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"table"},children:e},e)}))})]})}h.propTypes={links:o().array,action:o().node,heading:o().string.isRequired,moreLink:o().oneOfType([o().string,o().array]),sx:o().object}},69490:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return I}});var r=n(85893),i=n(90948),a=n(87357),s=n(53156),o=n(26447),l=n(76939),c=n(58866),d=n(82771),u=n(38187),h=n(74625),p=n(69779),x=n(67294),m=n(66242),f=n(78462),g=n(98619),Z=n(48885),v=n(69368),j=n(59334),b=n(86886),y=n(11057),w=n(34444);function k(e,t){return e.filter((function(e){return-1===t.indexOf(e)}))}function C(e,t){return e.filter((function(e){return-1!==t.indexOf(e)}))}function P(){var e=(0,x.useState)([]),t=e[0],n=e[1],i=(0,x.useState)([0,1,2,3]),a=i[0],s=i[1],o=(0,x.useState)([4,5,6,7]),l=o[0],c=o[1],d=C(t,a),u=C(t,l),h=function(e){return function(){var r=t.indexOf(e),i=(0,p.Z)(t);-1===r?i.push(e):i.splice(r,1),n(i)}},P=function(e){return(0,r.jsx)(m.Z,{sx:{width:200,height:220,overflow:"auto",borderRadius:1.5},children:(0,r.jsx)(f.Z,{dense:!0,component:"div",role:"list",children:e.map((function(e){var n="transfer-list-item-".concat(e,"-label");return(0,r.jsxs)(g.Z,{role:"listitem",onClick:h(e),children:[(0,r.jsx)(Z.Z,{children:(0,r.jsx)(v.Z,{checked:-1!==t.indexOf(e),tabIndex:-1,disableRipple:!0,inputProps:{"aria-labelledby":n}})}),(0,r.jsx)(j.Z,{id:n,primary:"List item ".concat(e+1)})]},e)}))})})};return(0,r.jsxs)(b.ZP,{container:!0,justifyContent:"center",alignItems:"center",sx:{width:"auto",py:3},children:[(0,r.jsx)(b.ZP,{item:!0,children:P(a)}),(0,r.jsx)(b.ZP,{item:!0,children:(0,r.jsxs)(b.ZP,{container:!0,direction:"column",alignItems:"center",sx:{p:3},children:[(0,r.jsx)(y.Z,{color:"inherit",variant:"outlined",size:"small",onClick:function(){c(l.concat(a)),s([])},disabled:0===a.length,"aria-label":"move all right",sx:{my:1},children:(0,r.jsx)(w.Z,{icon:"eva:arrowhead-right-fill",width:18,height:18})}),(0,r.jsx)(y.Z,{color:"inherit",variant:"outlined",size:"small",onClick:function(){c(l.concat(d)),s(k(a,d)),n(k(t,d))},disabled:0===d.length,"aria-label":"move selected right",sx:{my:1},children:(0,r.jsx)(w.Z,{icon:"eva:arrow-ios-forward-fill",width:18,height:18})}),(0,r.jsx)(y.Z,{color:"inherit",variant:"outlined",size:"small",onClick:function(){s(a.concat(u)),c(k(l,u)),n(k(t,u))},disabled:0===u.length,"aria-label":"move selected left",sx:{my:1},children:(0,r.jsx)(w.Z,{icon:"eva:arrow-ios-back-fill",width:18,height:18})}),(0,r.jsx)(y.Z,{color:"inherit",variant:"outlined",size:"small",onClick:function(){s(a.concat(l)),c([])},disabled:0===l.length,"aria-label":"move all left",sx:{my:1},children:(0,r.jsx)(w.Z,{icon:"eva:arrowhead-left-fill",width:18,height:18})})]})}),(0,r.jsx)(b.ZP,{item:!0,children:P(l)})]})}var R=n(78445),S=n(67720);function T(e,t){return e.filter((function(e){return-1===t.indexOf(e)}))}function N(e,t){return e.filter((function(e){return-1!==t.indexOf(e)}))}function _(){var e=(0,x.useState)([]),t=e[0],n=e[1],i=(0,x.useState)([0,1,2,3]),a=i[0],s=i[1],o=(0,x.useState)([4,5,6,7]),l=o[0],c=o[1],d=N(t,a),u=N(t,l),h=function(e){return function(){var r=t.indexOf(e),i=(0,p.Z)(t);-1===r?i.push(e):i.splice(r,1),n(i)}},k=function(e){return N(t,e).length},C=function(e){return function(){var r,i;k(e)===e.length?n(T(t,e)):n((r=t,i=e,(0,p.Z)(r).concat((0,p.Z)(T(i,r)))))}},P=function(e,n){return(0,r.jsxs)(m.Z,{sx:{borderRadius:1.5},children:[(0,r.jsx)(R.Z,{avatar:(0,r.jsx)(v.Z,{onClick:C(n),checked:k(n)===n.length&&0!==n.length,indeterminate:k(n)!==n.length&&0!==k(n),disabled:0===n.length,inputProps:{"aria-label":"all items selected"}}),title:e,subheader:"".concat(k(n),"/").concat(n.length," selected"),sx:{p:2}}),(0,r.jsx)(S.Z,{}),(0,r.jsx)(f.Z,{dense:!0,component:"div",role:"list",sx:{width:200,height:220,overflow:"auto"},children:n.map((function(e){var n="transfer-list-all-item-".concat(e,"-label");return(0,r.jsxs)(g.Z,{role:"listitem",onClick:h(e),children:[(0,r.jsx)(Z.Z,{children:(0,r.jsx)(v.Z,{checked:-1!==t.indexOf(e),tabIndex:-1,disableRipple:!0,inputProps:{"aria-labelledby":n}})}),(0,r.jsx)(j.Z,{id:n,primary:"List item ".concat(e+1)})]},e)}))})]})};return(0,r.jsxs)(b.ZP,{container:!0,justifyContent:"center",alignItems:"center",sx:{width:"auto",p:3},children:[(0,r.jsx)(b.ZP,{item:!0,children:P("Choices",a)}),(0,r.jsx)(b.ZP,{item:!0,children:(0,r.jsxs)(b.ZP,{container:!0,direction:"column",alignItems:"center",sx:{p:3},children:[(0,r.jsx)(y.Z,{color:"inherit",variant:"outlined",size:"small",onClick:function(){c(l.concat(d)),s(T(a,d)),n(T(t,d))},disabled:0===d.length,"aria-label":"move selected right",sx:{my:1},children:(0,r.jsx)(w.Z,{icon:"eva:arrow-ios-forward-fill",width:18,height:18})}),(0,r.jsx)(y.Z,{color:"inherit",variant:"outlined",size:"small",onClick:function(){s(a.concat(u)),c(T(l,u)),n(T(t,u))},disabled:0===u.length,"aria-label":"move selected left",sx:{my:1},children:(0,r.jsx)(w.Z,{icon:"eva:arrow-ios-back-fill",width:18,height:18})})]})}),(0,r.jsx)(b.ZP,{item:!0,children:P("Chosen",l)})]})}var L={display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap"},M=(0,i.ZP)("div")((function(e){var t=e.theme;return{paddingTop:t.spacing(11),paddingBottom:t.spacing(15)}}));function I(){return(0,r.jsx)(d.Z,{title:"Components: Transfer List",children:(0,r.jsxs)(M,{children:[(0,r.jsx)(a.Z,{sx:{pt:6,pb:1,mb:10,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:(0,r.jsx)(s.Z,{children:(0,r.jsx)(u.Z,{heading:"Transfer List",links:[{name:"Components",href:l.ko.components},{name:"Transfer List"}],moreLink:"https://mui.com/components/transfer-list"})})}),(0,r.jsx)(s.Z,{children:(0,r.jsxs)(o.Z,{spacing:3,children:[(0,r.jsx)(h.g,{title:"Simple",sx:L,children:(0,r.jsx)(P,{})}),(0,r.jsx)(h.g,{title:"Enhanced",sx:L,children:(0,r.jsx)(_,{})})]})})]})})}I.getLayout=function(e){return(0,r.jsx)(c.Z,{variant:"main",children:e})}},74625:function(e,t,n){"use strict";n.d(t,{_:function(){return p},g:function(){return h}});var r=n(14251),i=n(85893),a=n(45697),s=n.n(a),o=n(41796),l=n(90629),c=n(78445),d=n(87357),u=n(15861);function h(e){var t=e.title,n=e.sx,a=e.children;return(0,i.jsxs)(l.Z,{variant:"outlined",sx:{borderRadius:1.5,bgcolor:function(e){return(0,o.Fq)(e.palette.grey[500],.04)}},children:[t&&(0,i.jsx)(c.Z,{title:t}),(0,i.jsx)(d.Z,{sx:(0,r.Z)({p:5,minHeight:180},n),children:a})]})}function p(e){var t=e.title;return(0,i.jsx)(u.Z,{variant:"overline",component:"p",gutterBottom:!0,sx:{color:"text.secondary"},children:t})}h.propTypes={children:s().any.isRequired,sx:s().object,title:s().string},p.propTypes={title:s().string.isRequired}}},function(e){e.O(0,[9448,2174,3279,1866,8866,9774,2888,179],(function(){return t=32737,e(e.s=t);var t}));var t=e.O();_N_E=t}]);