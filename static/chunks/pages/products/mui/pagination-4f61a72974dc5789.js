(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6399],{82821:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/products/mui/pagination",function(){return e(40614)}])},25814:function(n,t,e){"use strict";e.d(t,{Z:function(){return g}});var i=e(14251),r=e(52875),s=e(44747),o=e(85893),a=e(45697),c=e.n(a),l=e(41664),u=e.n(l),d=e(15861),x=e(12963),h=e(87357),p=e(23795);function g(n){var t=n.links,e=n.activeLast,a=void 0!==e&&e,c=(0,s.Z)(n,["links","activeLast"]),l=t[t.length-1].name,u=t.map((function(n){return(0,o.jsx)(j,{link:n},n.name)})),p=t.map((function(n){return(0,o.jsx)("div",{children:n.name!==l?(0,o.jsx)(j,{link:n}):(0,o.jsx)(d.Z,{variant:"body2",sx:{maxWidth:260,overflow:"hidden",whiteSpace:"nowrap",color:"text.disabled",textOverflow:"ellipsis"},children:l})},n.name)}));return(0,o.jsx)(x.Z,(0,r.Z)((0,i.Z)({separator:(0,o.jsx)(h.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})},c),{children:a?u:p}))}function j(n){var t=n.link,e=t.href,i=void 0===e?"":e,r=t.name,s=t.icon;return(0,o.jsx)(u(),{href:i,passHref:!0,children:(0,o.jsxs)(p.Z,{variant:"body2",sx:{lineHeight:2,display:"flex",alignItems:"center",color:"text.primary","& > div":{display:"inherit"}},children:[s&&(0,o.jsx)(h.Z,{sx:{mr:1,"& svg":{width:20,height:20}},children:s}),r]},r)})}g.propTypes={activeLast:c().bool,links:c().array.isRequired},j.propTypes={link:c().shape({href:c().string,icon:c().any,name:c().string})}},38187:function(n,t,e){"use strict";e.d(t,{Z:function(){return x}});var i=e(14251),r=e(44747),s=e(85893),o=e(45697),a=e.n(o),c=e(87357),l=e(15861),u=e(23795),d=e(25814);function x(n){var t=n.links,e=n.action,o=n.heading,a=n.moreLink,x=void 0===a?[]:a,h=n.sx,p=(0,r.Z)(n,["links","action","heading","moreLink","sx"]);return(0,s.jsxs)(c.Z,{sx:(0,i.Z)({mb:5},h),children:[(0,s.jsxs)(c.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,s.jsxs)(c.Z,{sx:{flexGrow:1},children:[(0,s.jsx)(l.Z,{variant:"h4",gutterBottom:!0,children:o}),(0,s.jsx)(d.Z,(0,i.Z)({links:t},p))]}),e&&(0,s.jsx)(c.Z,{sx:{flexShrink:0},children:e})]}),(0,s.jsx)(c.Z,{sx:{mt:2},children:"string"===typeof x?(0,s.jsx)(u.Z,{href:x,target:"_blank",variant:"body2",children:x}):x.map((function(n){return(0,s.jsx)(u.Z,{noWrap:!0,href:n,variant:"body2",target:"_blank",sx:{display:"table"},children:n},n)}))})]})}x.propTypes={links:a().array,action:a().node,heading:a().string.isRequired,moreLink:a().oneOfType([a().string,a().array]),sx:a().object}},40614:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return f}});var i=e(85893),r=e(67294),s=e(90948),o=e(87357),a=e(53156),c=e(10633),l=e(36125),u=e(78672),d=e(76939),x=e(58866),h=e(82771),p=e(38187),g=e(74625),j=(0,s.ZP)("div")((function(n){var t=n.theme;return{paddingTop:t.spacing(11),paddingBottom:t.spacing(15)}})),Z={display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap","& > *":{my:1}};function f(){var n=(0,r.useState)(2),t=n[0],e=n[1],s=(0,r.useState)(10),x=s[0],f=s[1];return(0,i.jsx)(h.Z,{title:"Components: Pagination",children:(0,i.jsxs)(j,{children:[(0,i.jsx)(o.Z,{sx:{pt:6,pb:1,mb:10,bgcolor:function(n){return"light"===n.palette.mode?"grey.200":"grey.800"}},children:(0,i.jsx)(a.Z,{children:(0,i.jsx)(p.Z,{heading:"Pagination",links:[{name:"Components",href:d.ko.components},{name:"Pagination"}],moreLink:"https://mui.com/components/pagination"})})}),(0,i.jsx)(a.Z,{children:(0,i.jsxs)(u.ZP,{columns:{xs:1,md:2},spacing:3,children:[(0,i.jsxs)(g.g,{title:"Basic",sx:Z,children:[(0,i.jsx)(c.Z,{count:10}),(0,i.jsx)(c.Z,{count:10,color:"primary"}),(0,i.jsx)(c.Z,{count:10,disabled:!0})]}),(0,i.jsxs)(g.g,{title:"Outlined",sx:Z,children:[(0,i.jsx)(c.Z,{count:10,variant:"outlined"}),(0,i.jsx)(c.Z,{count:10,variant:"outlined",color:"primary"}),(0,i.jsx)(c.Z,{count:10,variant:"outlined",disabled:!0})]}),(0,i.jsxs)(g.g,{title:"Rounded",sx:Z,children:[(0,i.jsx)(c.Z,{count:10,shape:"rounded"}),(0,i.jsx)(c.Z,{count:10,variant:"outlined",shape:"rounded"}),(0,i.jsx)(c.Z,{count:10,shape:"rounded",color:"primary"}),(0,i.jsx)(c.Z,{count:10,variant:"outlined",shape:"rounded",color:"primary"})]}),(0,i.jsxs)(g.g,{title:"Size",sx:Z,children:[(0,i.jsx)(c.Z,{count:10,size:"small"}),(0,i.jsx)(c.Z,{count:10}),(0,i.jsx)(c.Z,{count:10,size:"large"})]}),(0,i.jsxs)(g.g,{title:"Buttons",sx:Z,children:[(0,i.jsx)(c.Z,{count:10,showFirstButton:!0,showLastButton:!0}),(0,i.jsx)(c.Z,{count:10,hidePrevButton:!0,hideNextButton:!0})]}),(0,i.jsxs)(g.g,{title:"Ranges",sx:Z,children:[(0,i.jsx)(c.Z,{count:11,defaultPage:6,siblingCount:0}),(0,i.jsx)(c.Z,{count:11,defaultPage:6}),(0,i.jsx)(c.Z,{count:11,defaultPage:6,siblingCount:0,boundaryCount:2}),(0,i.jsx)(c.Z,{count:11,defaultPage:6,boundaryCount:2})]}),(0,i.jsx)(g.g,{title:"Table",sx:Z,children:(0,i.jsx)(l.Z,{component:"div",count:100,page:t,onPageChange:function(n,t){e(t)},rowsPerPage:x,onRowsPerPageChange:function(n){f(parseInt(n.target.value,10)),e(0)}})})]})})]})})}f.getLayout=function(n){return(0,i.jsx)(x.Z,{variant:"main",children:n})}},74625:function(n,t,e){"use strict";e.d(t,{_:function(){return h},g:function(){return x}});var i=e(14251),r=e(85893),s=e(45697),o=e.n(s),a=e(41796),c=e(90629),l=e(78445),u=e(87357),d=e(15861);function x(n){var t=n.title,e=n.sx,s=n.children;return(0,r.jsxs)(c.Z,{variant:"outlined",sx:{borderRadius:1.5,bgcolor:function(n){return(0,a.Fq)(n.palette.grey[500],.04)}},children:[t&&(0,r.jsx)(l.Z,{title:t}),(0,r.jsx)(u.Z,{sx:(0,i.Z)({p:5,minHeight:180},e),children:s})]})}function h(n){var t=n.title;return(0,r.jsx)(d.Z,{variant:"overline",component:"p",gutterBottom:!0,sx:{color:"text.secondary"},children:t})}x.propTypes={children:o().any.isRequired,sx:o().object,title:o().string},h.propTypes={title:o().string.isRequired}}},function(n){n.O(0,[9448,2174,4525,633,9535,3279,1866,8866,9774,2888,179],(function(){return t=82821,n(n.s=t);var t}));var t=n.O();_N_E=t}]);