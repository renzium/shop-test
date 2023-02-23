(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5308],{81458:function(r,e,t){"use strict";t.d(e,{Z:function(){return _}});var n=t(63366),o=t(87462),a=t(67294),i=t(86010),s=t(94780),l=t(70917),c=t(41796),d=t(98216),u=t(2734),h=t(90948),p=t(71657),m=t(1588),x=t(34867);function f(r){return(0,x.Z)("MuiLinearProgress",r)}(0,m.Z)("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);var b=t(85893);const g=["className","color","value","valueBuffer","variant"];let v,Z,y,j,w,C,k=r=>r;const S=(0,l.F4)(v||(v=k`
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`)),P=(0,l.F4)(Z||(Z=k`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`)),R=(0,l.F4)(y||(y=k`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`)),T=(r,e)=>"inherit"===e?"currentColor":r.vars?r.vars.palette.LinearProgress[`${e}Bg`]:"light"===r.palette.mode?(0,c.$n)(r.palette[e].main,.62):(0,c._j)(r.palette[e].main,.5),q=(0,h.ZP)("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:(r,e)=>{const{ownerState:t}=r;return[e.root,e[`color${(0,d.Z)(t.color)}`],e[t.variant]]}})((({ownerState:r,theme:e})=>(0,o.Z)({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},backgroundColor:T(e,r.color)},"inherit"===r.color&&"buffer"!==r.variant&&{backgroundColor:"none","&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}},"buffer"===r.variant&&{backgroundColor:"transparent"},"query"===r.variant&&{transform:"rotate(180deg)"}))),I=(0,h.ZP)("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:(r,e)=>{const{ownerState:t}=r;return[e.dashed,e[`dashedColor${(0,d.Z)(t.color)}`]]}})((({ownerState:r,theme:e})=>{const t=T(e,r.color);return(0,o.Z)({position:"absolute",marginTop:0,height:"100%",width:"100%"},"inherit"===r.color&&{opacity:.3},{backgroundImage:`radial-gradient(${t} 0%, ${t} 16%, transparent 42%)`,backgroundSize:"10px 10px",backgroundPosition:"0 -23px"})}),(0,l.iv)(j||(j=k`
    animation: ${0} 3s infinite linear;
  `),R)),F=(0,h.ZP)("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:(r,e)=>{const{ownerState:t}=r;return[e.bar,e[`barColor${(0,d.Z)(t.color)}`],("indeterminate"===t.variant||"query"===t.variant)&&e.bar1Indeterminate,"determinate"===t.variant&&e.bar1Determinate,"buffer"===t.variant&&e.bar1Buffer]}})((({ownerState:r,theme:e})=>(0,o.Z)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",backgroundColor:"inherit"===r.color?"currentColor":(e.vars||e).palette[r.color].main},"determinate"===r.variant&&{transition:"transform .4s linear"},"buffer"===r.variant&&{zIndex:1,transition:"transform .4s linear"})),(({ownerState:r})=>("indeterminate"===r.variant||"query"===r.variant)&&(0,l.iv)(w||(w=k`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    `),S))),$=(0,h.ZP)("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:(r,e)=>{const{ownerState:t}=r;return[e.bar,e[`barColor${(0,d.Z)(t.color)}`],("indeterminate"===t.variant||"query"===t.variant)&&e.bar2Indeterminate,"buffer"===t.variant&&e.bar2Buffer]}})((({ownerState:r,theme:e})=>(0,o.Z)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},"buffer"!==r.variant&&{backgroundColor:"inherit"===r.color?"currentColor":(e.vars||e).palette[r.color].main},"inherit"===r.color&&{opacity:.3},"buffer"===r.variant&&{backgroundColor:T(e,r.color),transition:"transform .4s linear"})),(({ownerState:r})=>("indeterminate"===r.variant||"query"===r.variant)&&(0,l.iv)(C||(C=k`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
    `),P)));var _=a.forwardRef((function(r,e){const t=(0,p.Z)({props:r,name:"MuiLinearProgress"}),{className:a,color:l="primary",value:c,valueBuffer:h,variant:m="indeterminate"}=t,x=(0,n.Z)(t,g),v=(0,o.Z)({},t,{color:l,variant:m}),Z=(r=>{const{classes:e,variant:t,color:n}=r,o={root:["root",`color${(0,d.Z)(n)}`,t],dashed:["dashed",`dashedColor${(0,d.Z)(n)}`],bar1:["bar",`barColor${(0,d.Z)(n)}`,("indeterminate"===t||"query"===t)&&"bar1Indeterminate","determinate"===t&&"bar1Determinate","buffer"===t&&"bar1Buffer"],bar2:["bar","buffer"!==t&&`barColor${(0,d.Z)(n)}`,"buffer"===t&&`color${(0,d.Z)(n)}`,("indeterminate"===t||"query"===t)&&"bar2Indeterminate","buffer"===t&&"bar2Buffer"]};return(0,s.Z)(o,f,e)})(v),y=(0,u.Z)(),j={},w={bar1:{},bar2:{}};if("determinate"===m||"buffer"===m)if(void 0!==c){j["aria-valuenow"]=Math.round(c),j["aria-valuemin"]=0,j["aria-valuemax"]=100;let r=c-100;"rtl"===y.direction&&(r=-r),w.bar1.transform=`translateX(${r}%)`}else 0;if("buffer"===m)if(void 0!==h){let r=(h||0)-100;"rtl"===y.direction&&(r=-r),w.bar2.transform=`translateX(${r}%)`}else 0;return(0,b.jsxs)(q,(0,o.Z)({className:(0,i.Z)(Z.root,a),ownerState:v,role:"progressbar"},j,{ref:e},x,{children:["buffer"===m?(0,b.jsx)(I,{className:Z.dashed,ownerState:v}):null,(0,b.jsx)(F,{className:Z.bar1,ownerState:v,style:w.bar1}),"determinate"===m?null:(0,b.jsx)($,{className:Z.bar2,ownerState:v,style:w.bar2})]}))}))},44858:function(r,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/ecommerce",function(){return t(49501)}])},62154:function(r,e,t){"use strict";t.d(e,{dS:function(){return g},ZQ:function(){return h},tR:function(){return j}});var n=t(85893),o=t(45697),a=t.n(o),i=t(90948),s=t(41796),l=t(87357),c=t(15861),d=(0,i.ZP)(l.Z)((function(){return{display:"flex",alignItems:"center",justifyContent:"flex-end"}})),u=(0,i.ZP)("div")((function(r){var e=r.theme;return{marginLeft:-4,borderRadius:"50%",width:e.spacing(2),height:e.spacing(2),border:"solid 2px ".concat(e.palette.background.paper),boxShadow:"inset -1px 1px 2px ".concat((0,s.Fq)(e.palette.common.black,.24))}}));function h(r){var e=r.colors,t=r.limit,o=void 0===t?3:t,a=r.sx,i=e.slice(0,o),s=e.length-o;return(0,n.jsxs)(d,{component:"span",sx:a,children:[i.map((function(r,e){return(0,n.jsx)(u,{sx:{bgcolor:r}},r+e)})),e.length>o&&(0,n.jsx)(c.Z,{variant:"subtitle2",children:"+".concat(s)})]})}h.propTypes={colors:a().arrayOf(a().string),limit:a().number,sx:a().object};var p=t(14251),m=t(52875),x=t(44747),f=t(69368),b=t(34444);function g(r){var e=r.colors,t=r.onChangeColor,o=r.sx,a=(0,x.Z)(r,["colors","onChangeColor","sx"]);return(0,n.jsx)(l.Z,{sx:o,children:e.map((function(r){var e="#FFFFFF"===r||"white"===r;return(0,n.jsx)(f.Z,(0,p.Z)({size:"small",value:r,color:"default",onChange:function(){return t(r)},icon:(0,n.jsx)(v,{sx:(0,p.Z)({},e&&{border:function(r){return"solid 1px ".concat(r.palette.divider)}})}),checkedIcon:(0,n.jsx)(v,{sx:(0,p.Z)({transform:"scale(1.4)","&:before":{opacity:.48,width:"100%",content:"''",height:"100%",borderRadius:"50%",position:"absolute",boxShadow:"4px 4px 8px 0 currentColor"},"& svg":{width:12,height:12,color:"common.white"}},e&&{border:function(r){return"solid 1px ".concat(r.palette.divider)},boxShadow:function(r){return"4px 4px 8px 0 ".concat(r.palette.grey[50024])},"& svg":{width:12,height:12,color:"common.black"}})}),sx:{color:r,"&:hover":{opacity:.72}}},a),r)}))})}function v(r){var e=r.sx,t=(0,x.Z)(r,["sx"]);return(0,n.jsx)(l.Z,(0,m.Z)((0,p.Z)({sx:(0,p.Z)({width:20,height:20,display:"flex",borderRadius:"50%",position:"relative",alignItems:"center",justifyContent:"center",bgcolor:"currentColor",transition:function(r){return r.transitions.create("all",{duration:r.transitions.duration.shortest})}},e)},t),{children:(0,n.jsx)(b.Z,{icon:"eva:checkmark-fill"})}))}g.propTypes={colors:a().arrayOf(a().string),onChangeColor:a().func,sx:a().object},v.propTypes={sx:a().object};var Z=t(68061),y=t(49033);function j(r){var e=r.colors,t=(0,x.Z)(r,["colors"]);return(0,n.jsx)(Z.Z,(0,m.Z)((0,p.Z)({row:!0},t),{children:e.map((function(r){var e="#FFFFFF"===r||"white"===r;return(0,n.jsx)(y.Z,{value:r,color:"default",icon:(0,n.jsx)(w,{sx:(0,p.Z)({},e&&{border:function(r){return"solid 1px ".concat(r.palette.divider)}})}),checkedIcon:(0,n.jsx)(w,{sx:(0,p.Z)({transform:"scale(1.4)","&:before":{opacity:.48,width:"100%",content:"''",height:"100%",borderRadius:"50%",position:"absolute",boxShadow:"4px 4px 8px 0 currentColor"},"& svg":{width:12,height:12,color:"common.white"}},e&&{border:function(r){return"solid 1px ".concat(r.palette.divider)},boxShadow:function(r){return"4px 4px 8px 0 ".concat(r.palette.grey[50024])},"& svg":{width:12,height:12,color:"common.black"}})}),sx:{color:r,"&:hover":{opacity:.72}}},r)}))}))}function w(r){var e=r.sx,t=(0,x.Z)(r,["sx"]);return(0,n.jsx)(l.Z,(0,m.Z)((0,p.Z)({sx:(0,p.Z)({width:20,height:20,display:"flex",borderRadius:"50%",position:"relative",alignItems:"center",justifyContent:"center",bgcolor:"currentColor",transition:function(r){return r.transitions.create("all",{duration:r.transitions.duration.shortest})}},e)},t),{children:(0,n.jsx)(b.Z,{icon:"eva:checkmark-fill"})}))}j.propTypes={colors:a().arrayOf(a().string)},w.propTypes={sx:a().object}},49501:function(r,e,t){"use strict";t.r(e),t.d(e,{default:function(){return X}});var n=t(85893),o=t(53156),a=t(86886),i=t(11057),s=t(77364),l=t(40571),c=t(58866),d=t(61330),u=t(82771),h=t(14251),p=t(52875),m=t(44747),x=t(45697),f=t.n(x),b=t(46066),g=t(90948),v=t(41796),Z=t(2734),y=t(66242),j=t(87357),w=t(44267),C=t(15861),k=t(65907),S=t(94920),P=(0,g.ZP)("div")((function(r){var e=r.theme;return{top:0,left:0,right:0,bottom:0,zIndex:8,position:"absolute",backgroundColor:(0,v.Fq)(e.palette.grey[900],.64)}}));function R(r){var e=r.list,t=(0,m.Z)(r,["list"]),o=(0,Z.Z)(),a=(0,h.Z)({speed:1e3,dots:!0,arrows:!1,autoplay:!0,slidesToShow:1,slidesToScroll:1,rtl:Boolean("rtl"===o.direction)},(0,S.A0)({position:"absolute",right:24,bottom:24}));return(0,n.jsx)(y.Z,(0,p.Z)((0,h.Z)({},t),{children:(0,n.jsx)(b.Z,(0,p.Z)((0,h.Z)({},a),{children:e.map((function(r){return(0,n.jsx)(T,{item:r},r.id)}))}))}))}function T(r){var e=r.item,t=e.image,o=e.name;return(0,n.jsxs)(j.Z,{sx:{position:"relative"},children:[(0,n.jsxs)(w.Z,{sx:{left:0,bottom:0,zIndex:9,maxWidth:"80%",position:"absolute",color:"common.white"},children:[(0,n.jsx)(C.Z,{variant:"overline",sx:{opacity:.48},children:"New"}),(0,n.jsx)(C.Z,{noWrap:!0,variant:"h5",sx:{mt:1,mb:3},children:o}),(0,n.jsx)(i.Z,{variant:"contained",children:"Buy Now"})]}),(0,n.jsx)(P,{}),(0,n.jsx)(k.Z,{alt:o,src:t,sx:{height:{xs:280,xl:320}}})]})}R.propTypes={list:f().array.isRequired},T.propTypes={item:f().shape({image:f().string,name:f().string})};t(82492),t(67294),t(78445),t(50135),t(22819);f().string,f().string,f().array.isRequired,f().arrayOf(f().string).isRequired;t(72882),t(7906),t(295);var q=t(68509),I=t(53252),F=t(26447),$=t(87952),_=t(87850),N=t(41451);t(75447),t(25825);function B(r){var e=r.row,t=(0,Z.Z)();return(0,n.jsxs)(q.Z,{children:[(0,n.jsx)(I.Z,{children:(0,n.jsxs)(F.Z,{direction:"row",alignItems:"center",children:[(0,n.jsx)($.Z,{alt:e.name,src:e.avatar}),(0,n.jsxs)(j.Z,{sx:{ml:2},children:[(0,n.jsxs)(C.Z,{variant:"subtitle2",children:[" ",e.name," "]}),(0,n.jsx)(C.Z,{variant:"body2",sx:{color:"text.secondary"},children:e.email})]})]})}),(0,n.jsx)(I.Z,{children:e.category}),(0,n.jsx)(I.Z,{children:(0,n.jsx)(k.Z,{src:e.flag,alt:"country flag",sx:{maxWidth:28,mx:"auto"}})}),(0,n.jsx)(I.Z,{children:(0,_.e_)(e.total)}),(0,n.jsx)(I.Z,{align:"right",children:(0,n.jsx)(N.Z,{variant:"light"===t.palette.mode?"ghost":"filled",color:("Top 1"===e.rank?"primary":"Top 2"===e.rank&&"info")||"Top 3"===e.rank&&"success"||"Top 4"===e.rank&&"warning"||"error",children:e.rank})})]})}f().string,f().string,f().array.isRequired,f().array.isRequired,B.propTypes={row:f().shape({avatar:f().string,category:f().string,email:f().string,flag:f().string,name:f().string,rank:f().string,total:f().number})};(0,g.ZP)("div")((function(r){var e=r.theme;return{height:392,marginTop:e.spacing(2),"& .apexcharts-canvas svg":{height:392},"& .apexcharts-canvas svg,.apexcharts-canvas foreignObject":{overflow:"visible"},"& .apexcharts-legend":{height:72,alignContent:"center",position:"relative !important",borderTop:"solid 1px ".concat(e.palette.divider),top:"calc(".concat(320,"px) !important")}}}));f().string,f().string,f().number,f().any.isRequired,f().array.isRequired;var O=t(81458);function L(r){var e=r.progress;return(0,n.jsxs)(F.Z,{spacing:1,children:[(0,n.jsxs)(F.Z,{direction:"row",alignItems:"center",children:[(0,n.jsx)(C.Z,{variant:"subtitle2",sx:{flexGrow:1},children:e.label}),(0,n.jsx)(C.Z,{variant:"subtitle2",children:(0,_.e_)(e.amount)}),(0,n.jsxs)(C.Z,{variant:"body2",sx:{color:"text.secondary"},children:["\xa0(",(0,_.f2)(e.value),")"]})]}),(0,n.jsx)(O.Z,{variant:"determinate",value:e.value,color:("Total Income"===e.label?"info":"Total Expenses"===e.label&&"warning")||"primary"})]})}f().string,f().string,f().array.isRequired,L.propTypes={progress:f().shape({amount:f().number,label:f().string,value:f().number})};t(34444),(0,g.ZP)("div")((function(r){var e=r.theme;return{width:24,height:24,display:"flex",borderRadius:"50%",alignItems:"center",justifyContent:"center",marginRight:e.spacing(1),color:e.palette.success.main,backgroundColor:(0,v.Fq)(e.palette.success.main,.16)}}));f().string,f().arrayOf(f().number),f().number,f().string,f().number,f().object;var z=t(23795),E=t(62154);function M(r){var e=r.product,t=e.name,o=e.image,a=e.price,i=e.priceSale,s=i>0;return(0,n.jsxs)(F.Z,{direction:"row",spacing:2,children:[(0,n.jsx)(k.Z,{alt:t,src:o,sx:{width:48,height:48,borderRadius:1.5,flexShrink:0}}),(0,n.jsxs)(j.Z,{sx:{flexGrow:1,minWidth:200},children:[(0,n.jsx)(z.Z,{sx:{color:"text.primary",typography:"subtitle2"},children:t}),(0,n.jsxs)(F.Z,{direction:"row",children:[s&&(0,n.jsx)(C.Z,{variant:"body2",sx:{color:"text.secondary",textDecoration:"line-through"},children:(0,_.e_)(i)}),"\xa0",(0,n.jsx)(C.Z,{variant:"body2",sx:{color:i?"error.main":"text.secondary"},children:(0,_.e_)(a)})]})]}),(0,n.jsx)(E.ZQ,{limit:3,colors:e.colors,sx:{minWidth:72,pr:3}})]})}f().string,f().string,f().array.isRequired,M.propTypes={product:f().shape({colors:f().arrayOf(f().string),image:f().string,name:f().string,price:f().number,priceSale:f().number})},f().string,f().number,f().number,f().any;var W=t(47690),D=t(22709);function X(){var r=(0,s.Z)().user,e=(0,l.Z)().themeStretch;return(0,n.jsx)(u.Z,{title:"General: E-commerce",children:(0,n.jsx)(o.Z,{maxWidth:!e&&"xl",children:(0,n.jsxs)(a.ZP,{container:!0,spacing:3,children:[(0,n.jsx)(a.ZP,{item:!0,xs:12,md:4,children:(0,n.jsx)(W.E0,{title:"Congratulations! \n ".concat(null===r||void 0===r?void 0:r.displayName),description:"Best seller of the month You have done 57.6% more sales today.",img:(0,n.jsx)(D.bq,{sx:{p:3,width:360,margin:{xs:"auto",md:"inherit"}}}),action:(0,n.jsx)(i.Z,{variant:"contained",children:"Go Now"})})}),(0,n.jsx)(a.ZP,{item:!0,xs:12,md:8,children:(0,n.jsx)(R,{list:d.jX})})]})})})}X.getLayout=function(r){return(0,n.jsx)(c.Z,{children:r})}}},function(r){r.O(0,[9448,2174,1440,4411,6066,7245,3279,1866,8866,7690,9774,2888,179],(function(){return e=44858,r(r.s=e);var e}));var e=r.O();_N_E=e}]);