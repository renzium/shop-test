(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6689],{51903:function(n,e,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/products/mui/accordion",function(){return i(20805)}])},25814:function(n,e,i){"use strict";i.d(e,{Z:function(){return f}});var r=i(14251),t=i(52875),s=i(44747),o=i(85893),a=i(45697),c=i.n(a),d=i(41664),l=i.n(d),h=i(15861),u=i(12963),x=i(87357),p=i(23795);function f(n){var e=n.links,i=n.activeLast,a=void 0!==i&&i,c=(0,s.Z)(n,["links","activeLast"]),d=e[e.length-1].name,l=e.map((function(n){return(0,o.jsx)(Z,{link:n},n.name)})),p=e.map((function(n){return(0,o.jsx)("div",{children:n.name!==d?(0,o.jsx)(Z,{link:n}):(0,o.jsx)(h.Z,{variant:"body2",sx:{maxWidth:260,overflow:"hidden",whiteSpace:"nowrap",color:"text.disabled",textOverflow:"ellipsis"},children:d})},n.name)}));return(0,o.jsx)(u.Z,(0,t.Z)((0,r.Z)({separator:(0,o.jsx)(x.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})},c),{children:a?l:p}))}function Z(n){var e=n.link,i=e.href,r=void 0===i?"":i,t=e.name,s=e.icon;return(0,o.jsx)(l(),{href:r,passHref:!0,children:(0,o.jsxs)(p.Z,{variant:"body2",sx:{lineHeight:2,display:"flex",alignItems:"center",color:"text.primary","& > div":{display:"inherit"}},children:[s&&(0,o.jsx)(x.Z,{sx:{mr:1,"& svg":{width:20,height:20}},children:s}),t]},t)})}f.propTypes={activeLast:c().bool,links:c().array.isRequired},Z.propTypes={link:c().shape({href:c().string,icon:c().any,name:c().string})}},38187:function(n,e,i){"use strict";i.d(e,{Z:function(){return u}});var r=i(14251),t=i(44747),s=i(85893),o=i(45697),a=i.n(o),c=i(87357),d=i(15861),l=i(23795),h=i(25814);function u(n){var e=n.links,i=n.action,o=n.heading,a=n.moreLink,u=void 0===a?[]:a,x=n.sx,p=(0,t.Z)(n,["links","action","heading","moreLink","sx"]);return(0,s.jsxs)(c.Z,{sx:(0,r.Z)({mb:5},x),children:[(0,s.jsxs)(c.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,s.jsxs)(c.Z,{sx:{flexGrow:1},children:[(0,s.jsx)(d.Z,{variant:"h4",gutterBottom:!0,children:o}),(0,s.jsx)(h.Z,(0,r.Z)({links:e},p))]}),i&&(0,s.jsx)(c.Z,{sx:{flexShrink:0},children:i})]}),(0,s.jsx)(c.Z,{sx:{mt:2},children:"string"===typeof u?(0,s.jsx)(l.Z,{href:u,target:"_blank",variant:"body2",children:u}):u.map((function(n){return(0,s.jsx)(l.Z,{noWrap:!0,href:n,variant:"body2",target:"_blank",sx:{display:"table"},children:n},n)}))})]})}u.propTypes={links:a().array,action:a().node,heading:a().string.isRequired,moreLink:a().oneOfType([a().string,a().array]),sx:a().object}},20805:function(n,e,i){"use strict";i.r(e),i.d(e,{default:function(){return b}});var r=i(85893),t=i(67294),s=i(90948),o=i(87357),a=i(53156),c=i(26447),d=i(67358),l=i(90072),h=i(15861),u=i(22797),x=i(61330),p=i(58866),f=i(82771),Z=i(34444),j=i(76939),g=i(38187),v=i(74625),m=(0,s.ZP)("div")((function(n){var e=n.theme;return{paddingTop:e.spacing(11),paddingBottom:e.spacing(15)}}));function b(){var n=(0,t.useState)(!1),e=n[0],i=n[1];return(0,r.jsx)(f.Z,{title:"Components: Accordion",children:(0,r.jsxs)(m,{children:[(0,r.jsx)(o.Z,{sx:{pt:6,pb:1,mb:10,bgcolor:function(n){return"light"===n.palette.mode?"grey.200":"grey.800"}},children:(0,r.jsx)(a.Z,{children:(0,r.jsx)(g.Z,{heading:"Accordion",links:[{name:"Components",href:j.ko.components},{name:"Accordion"}],moreLink:"https://mui.com/components/accordion"})})}),(0,r.jsx)(a.Z,{children:(0,r.jsxs)(c.Z,{spacing:5,children:[(0,r.jsx)(v.g,{title:"Simple",children:x.rl.map((function(n,e){return(0,r.jsxs)(d.Z,{disabled:3===e,children:[(0,r.jsx)(l.Z,{expandIcon:(0,r.jsx)(Z.Z,{icon:"eva:arrow-ios-downward-fill",width:20,height:20}),children:(0,r.jsx)(h.Z,{variant:"subtitle1",children:n.heading})}),(0,r.jsx)(u.Z,{children:(0,r.jsx)(h.Z,{children:n.detail})})]},n.value)}))}),(0,r.jsx)(v.g,{title:"Controlled",children:x.rl.map((function(n,t){return(0,r.jsxs)(d.Z,{disabled:3===t,expanded:e===n.value,onChange:(s=n.value,function(n,e){i(!!e&&s)}),children:[(0,r.jsxs)(l.Z,{expandIcon:(0,r.jsx)(Z.Z,{icon:"eva:arrow-ios-downward-fill",width:20,height:20}),children:[(0,r.jsx)(h.Z,{variant:"subtitle1",sx:{width:"33%",flexShrink:0},children:n.heading}),(0,r.jsx)(h.Z,{sx:{color:"text.secondary"},children:n.subHeading})]}),(0,r.jsx)(u.Z,{children:(0,r.jsx)(h.Z,{children:n.detail})})]},n.value);var s}))})]})})]})})}b.getLayout=function(n){return(0,r.jsx)(p.Z,{variant:"main",children:n})}},74625:function(n,e,i){"use strict";i.d(e,{_:function(){return x},g:function(){return u}});var r=i(14251),t=i(85893),s=i(45697),o=i.n(s),a=i(41796),c=i(90629),d=i(78445),l=i(87357),h=i(15861);function u(n){var e=n.title,i=n.sx,s=n.children;return(0,t.jsxs)(c.Z,{variant:"outlined",sx:{borderRadius:1.5,bgcolor:function(n){return(0,a.Fq)(n.palette.grey[500],.04)}},children:[e&&(0,t.jsx)(d.Z,{title:e}),(0,t.jsx)(l.Z,{sx:(0,r.Z)({p:5,minHeight:180},i),children:s})]})}function x(n){var e=n.title;return(0,t.jsx)(h.Z,{variant:"overline",component:"p",gutterBottom:!0,sx:{color:"text.secondary"},children:e})}u.propTypes={children:o().any.isRequired,sx:o().object,title:o().string},x.propTypes={title:o().string.isRequired}}},function(n){n.O(0,[9448,2174,2058,3279,1866,8866,9774,2888,179],(function(){return e=51903,n(n.s=e);var e}));var e=n.O();_N_E=e}]);