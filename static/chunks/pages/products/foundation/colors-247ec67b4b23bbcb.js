(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6919],{62970:function(n,r,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/products/foundation/colors",function(){return e(91948)}])},25814:function(n,r,e){"use strict";e.d(r,{Z:function(){return f}});var i=e(14251),t=e(52875),s=e(44747),o=e(85893),a=e(45697),l=e.n(a),c=e(41664),d=e.n(c),x=e(15861),p=e(12963),h=e(87357),u=e(23795);function f(n){var r=n.links,e=n.activeLast,a=void 0!==e&&e,l=(0,s.Z)(n,["links","activeLast"]),c=r[r.length-1].name,d=r.map((function(n){return(0,o.jsx)(m,{link:n},n.name)})),u=r.map((function(n){return(0,o.jsx)("div",{children:n.name!==c?(0,o.jsx)(m,{link:n}):(0,o.jsx)(x.Z,{variant:"body2",sx:{maxWidth:260,overflow:"hidden",whiteSpace:"nowrap",color:"text.disabled",textOverflow:"ellipsis"},children:c})},n.name)}));return(0,o.jsx)(p.Z,(0,t.Z)((0,i.Z)({separator:(0,o.jsx)(h.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})},l),{children:a?d:u}))}function m(n){var r=n.link,e=r.href,i=void 0===e?"":e,t=r.name,s=r.icon;return(0,o.jsx)(d(),{href:i,passHref:!0,children:(0,o.jsxs)(u.Z,{variant:"body2",sx:{lineHeight:2,display:"flex",alignItems:"center",color:"text.primary","& > div":{display:"inherit"}},children:[s&&(0,o.jsx)(h.Z,{sx:{mr:1,"& svg":{width:20,height:20}},children:s}),t]},t)})}f.propTypes={activeLast:l().bool,links:l().array.isRequired},m.propTypes={link:l().shape({href:l().string,icon:l().any,name:l().string})}},38187:function(n,r,e){"use strict";e.d(r,{Z:function(){return p}});var i=e(14251),t=e(44747),s=e(85893),o=e(45697),a=e.n(o),l=e(87357),c=e(15861),d=e(23795),x=e(25814);function p(n){var r=n.links,e=n.action,o=n.heading,a=n.moreLink,p=void 0===a?[]:a,h=n.sx,u=(0,t.Z)(n,["links","action","heading","moreLink","sx"]);return(0,s.jsxs)(l.Z,{sx:(0,i.Z)({mb:5},h),children:[(0,s.jsxs)(l.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,s.jsxs)(l.Z,{sx:{flexGrow:1},children:[(0,s.jsx)(c.Z,{variant:"h4",gutterBottom:!0,children:o}),(0,s.jsx)(x.Z,(0,i.Z)({links:r},u))]}),e&&(0,s.jsx)(l.Z,{sx:{flexShrink:0},children:e})]}),(0,s.jsx)(l.Z,{sx:{mt:2},children:"string"===typeof p?(0,s.jsx)(d.Z,{href:p,target:"_blank",variant:"body2",children:p}):p.map((function(n){return(0,s.jsx)(d.Z,{noWrap:!0,href:n,variant:"body2",target:"_blank",sx:{display:"table"},children:n},n)}))})]})}p.propTypes={links:a().array,action:a().node,heading:a().string.isRequired,moreLink:a().oneOfType([a().string,a().array]),sx:a().object}},91948:function(n,r,e){"use strict";e.r(r),e.d(r,{default:function(){return L}});var i=e(85893),t=e(45697),s=e.n(t),o=e(67294),a=e(73400),l=e(74855),c=e(90948),d=e(2734),x=e(41796),p=e(87357),h=e(53156),u=e(15861),f=e(66242),m=e(34386),g=e(93946),Z=e(26447),j=e(76939),v=e(58866),y=e(82771),b=e(34444),k=e(38187),C=["primary","secondary","info","success","warning","error"],w=["lighter","light","main","dark","darker"],T=["100","200","300","400","500","600","700","800","900"],_=(0,c.ZP)("div")((function(n){var r=n.theme;return{paddingTop:r.spacing(11),paddingBottom:r.spacing(15)}}));function L(){var n=(0,d.Z)(),r=(0,a.Ds)().enqueueSnackbar,e=(0,o.useState)(null)[1],t=function(n){e(n),n&&r("Copied! ".concat(n))};return(0,i.jsx)(y.Z,{title:"Foundations: Color",children:(0,i.jsxs)(_,{children:[(0,i.jsx)(p.Z,{sx:{pt:6,pb:1,mb:10,bgcolor:function(n){return"light"===n.palette.mode?"grey.200":"grey.800"}},children:(0,i.jsx)(h.Z,{children:(0,i.jsx)(k.Z,{heading:"Color",links:[{name:"Components",href:j.ko.components},{name:"Color"}],moreLink:["https://mui.com/customization/color","https://colors.eva.design"]})})}),(0,i.jsxs)(h.Z,{children:[C.map((function(r){return(0,i.jsxs)(p.Z,{sx:{mb:5},children:[(0,i.jsx)(u.Z,{variant:"h5",sx:{textTransform:"capitalize",mb:3},children:r}),(0,i.jsx)(p.Z,{sx:{display:"grid",gap:2.5,gridTemplateColumns:{xs:"repeat(2, 1fr)",sm:"repeat(3, 1fr)",md:"repeat(4, 1fr)",lg:"repeat(5, 1fr)"}},children:w.map((function(e){return(0,i.jsx)(E,{variation:e,hexColor:n.palette[r][e],onCopy:function(){return t(n.palette[r][e])}},e)}))})]},r)})),(0,i.jsx)(u.Z,{variant:"h5",sx:{textTransform:"capitalize",mb:3},children:"Grey"}),(0,i.jsx)(p.Z,{sx:{display:"grid",gap:3,gridTemplateColumns:{xs:"repeat(2, 1fr)",sm:"repeat(3, 1fr)",md:"repeat(4, 1fr)",lg:"repeat(5, 1fr)"}},children:T.map((function(r){return(0,i.jsx)(E,{variation:r,hexColor:n.palette.grey[r],onCopy:function(){return t(n.palette.grey[r])}},r)}))})]})]})})}function E(n){var r=n.hexColor,e=n.variation,t=n.onCopy;return(0,i.jsxs)(f.Z,{sx:{p:1},children:[(0,i.jsx)(l.CopyToClipboard,{text:r,onCopy:t,children:(0,i.jsx)(m.Z,{title:"Copy",children:(0,i.jsx)(g.Z,{sx:{top:8,right:8,position:"absolute",color:function(n){return n.palette.getContrastText(r)}},children:(0,i.jsx)(b.Z,{icon:"eva:copy-fill",width:20,height:20})})})}),(0,i.jsx)(p.Z,{sx:{bgcolor:r,paddingTop:"75%",borderRadius:1,border:function(n){return"solid 1px ".concat(n.palette.grey[50012])}}}),(0,i.jsxs)(p.Z,{sx:{py:2.5,px:1.5},children:[(0,i.jsx)(u.Z,{variant:"subtitle1",sx:{textTransform:"capitalize"},children:e}),(0,i.jsxs)(Z.Z,{direction:"row",alignItems:"center",sx:{mt:1.5,mb:1},children:[(0,i.jsx)(u.Z,{variant:"overline",sx:{width:56,color:"text.disabled"},children:"Hex"}),(0,i.jsx)(u.Z,{variant:"body2",children:r})]}),(0,i.jsxs)(Z.Z,{direction:"row",alignItems:"center",children:[(0,i.jsx)(u.Z,{variant:"overline",sx:{width:56,color:"text.disabled"},children:"Rgb"}),(0,i.jsx)(u.Z,{variant:"body2",children:(0,x.oo)(r).replace("rgb(","").replace(")","")})]})]})]})}L.getLayout=function(n){return(0,i.jsx)(v.Z,{variant:"main",children:n})},E.propTypes={hexColor:s().string,onCopy:s().func,variation:s().string}}},function(n){n.O(0,[9448,2174,4348,3279,1866,8866,9774,2888,179],(function(){return r=62970,n(n.s=r);var r}));var r=n.O();_N_E=r}]);