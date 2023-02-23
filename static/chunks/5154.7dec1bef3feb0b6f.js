"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5154],{28933:function(t,e,n){n.d(e,{Ct:function(){return d},ZM:function(){return j},O_:function(){return y},Yz:function(){return x}});var r=n(14251),o=n(52875),a=n(85893),i=n(33403),l=n(2734),u=n(90948),c=n(42287),p=n(26034);function s(){var t=(0,l.Z)();return(0,a.jsx)(c.Z,{styles:{"& .mapboxgl-ctrl.mapboxgl-ctrl-group":{borderRadius:"8px",boxShadow:t.customShadows.z8},"& .mapboxgl-ctrl-zoom-in":{borderRadius:"8px 8px 0 0"},"& .mapboxgl-ctrl-compass":{borderRadius:"0 0 8px 8px"},"& .mapboxgl-ctrl-fullscreen":{"& .mapboxgl-ctrl-icon":{transform:" scale(0.75)"}},"& .mapboxgl-ctrl-group button+button":{borderTop:"1px solid ".concat(t.palette.divider)},"& .mapboxgl-ctrl.mapboxgl-ctrl-scale":{border:"none",lineHeight:"14px",borderRadius:"4px",color:t.palette.common.white,fontWeight:t.typography.fontWeightBold,backgroundImage:"linear-gradient(to right, #8a2387, #e94057, #f27121)"}}})}var h=(0,u.ZP)(i.GI)((function(t){var e=t.theme,n="rtl"===e.direction;return{"& .mapboxgl-popup-content":{maxWidth:180,padding:e.spacing(1),boxShadow:e.customShadows.z20,borderRadius:e.shape.borderRadius,backgroundColor:e.palette.grey[800]},"& .mapboxgl-popup-close-button":{width:24,height:24,fontSize:16,opacity:.48,color:e.palette.common.white,right:n&&"0",left:n&&"auto","&:hover":{opacity:1},"&:focus":{outline:"none"}},"&.mapboxgl-popup-anchor-top .mapboxgl-popup-tip":{marginBottom:-1,borderBottomColor:e.palette.grey[800]},"&.mapboxgl-popup-anchor-right .mapboxgl-popup-tip":{marginLeft:-1,borderLeftColor:e.palette.grey[800]},"&.mapboxgl-popup-anchor-bottom .mapboxgl-popup-tip":{marginTop:-1,borderTopColor:e.palette.grey[800]},"&.mapboxgl-popup-anchor-left .mapboxgl-popup-tip":{marginRight:-1,borderRightColor:e.palette.grey[800]}}})),d=(0,u.ZP)("div")((function(t){var e=t.theme;return(0,o.Z)((0,r.Z)({},(0,p.Z)().bgBlur({color:e.palette.grey[900]})),{zIndex:9,minWidth:200,position:"absolute",top:e.spacing(1),right:e.spacing(1),padding:e.spacing(2),borderRadius:e.shape.borderRadius})})),f=n(44747),g=n(45697),m=n.n(g);function x(t){var e=t.sx,n=t.children,i=(0,f.Z)(t,["sx","children"]);return(0,a.jsx)(h,(0,o.Z)((0,r.Z)({anchor:"bottom",sx:e},i),{children:n}))}x.propTypes={children:m().node,sx:m().object};var b=n(6453),v=n(87357);function y(t){var e=(0,b.Z)({},t);return(0,a.jsx)(i.Jx,(0,o.Z)((0,r.Z)({},e),{children:(0,a.jsx)(v.Z,{component:"svg",viewBox:"0 0 24 24",sx:{height:20,stroke:"none",cursor:"pointer",fill:function(t){return t.palette.error.main},transform:"translate(".concat(-10,"px,").concat(-20,"px)")},children:(0,a.jsx)("path",{d:"M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3\n  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9\n  C20.1,15.8,20.2,15.8,20.2,15.7z"})})}))}function j(t){var e=t.hideScaleControl,n=t.hideGeolocateControl,r=t.hideFullscreenControl,o=t.hideNavigationnControl;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s,{}),!n&&(0,a.jsx)(i.$j,{position:"top-left",positionOptions:{enableHighAccuracy:!0}}),!r&&(0,a.jsx)(i.ot,{position:"top-left"}),!e&&(0,a.jsx)(i.jf,{position:"bottom-left"}),!o&&(0,a.jsx)(i.Pv,{position:"bottom-left"})]})}j.propTypes={hideFullscreenControl:m().bool,hideGeolocateControl:m().bool,hideNavigationnControl:m().bool,hideScaleControl:m().bool}},15154:function(t,e,n){n.r(e),n.d(e,{default:function(){return I}});var r=n(6453),o=n(14251),a=n(52875),i=n(85893),l=n(67294),u=n(33403),c=n(2734),p=n(41796),s=n(87357),h=n(15861),d=n(28933);function f(t){return null===t?NaN:+t}function g(t,e,n=f){if((r=t.length)&&!isNaN(e=+e)){if(e<=0||r<2)return+n(t[0],0,t);if(e>=1)return+n(t[r-1],r-1,t);var r,o=(r-1)*e,a=Math.floor(o),i=+n(t[a],a,t);return i+(+n(t[a+1],a+1,t)-i)*(o-a)}}function m(t,e){return null==t||null==e?NaN:t<e?-1:t>e?1:t>=e?0:NaN}function x(t,e){return null==t||null==e?NaN:e<t?-1:e>t?1:e>=t?0:NaN}function b(t){let e,n,r;function o(t,r,o=0,a=t.length){if(o<a){if(0!==e(r,r))return a;do{const e=o+a>>>1;n(t[e],r)<0?o=e+1:a=e}while(o<a)}return o}return 2!==t.length?(e=m,n=(e,n)=>m(t(e),n),r=(e,n)=>t(e)-n):(e=t===m||t===x?t:v,n=t,r=t),{left:o,center:function(t,e,n=0,a=t.length){const i=o(t,e,n,a-1);return i>n&&r(t[i-1],e)>-r(t[i],e)?i-1:i},right:function(t,r,o=0,a=t.length){if(o<a){if(0!==e(r,r))return a;do{const e=o+a>>>1;n(t[e],r)<=0?o=e+1:a=e}while(o<a)}return o}}}function v(){return 0}const y=b(m),j=y.right;y.left,b(f).center;var Z=j;function C(t,e){switch(arguments.length){case 0:break;case 1:this.range(t);break;default:this.range(e).domain(t)}return this}function w(){var t,e=[],n=[],r=[];function o(){var t=0,o=Math.max(1,n.length);for(r=new Array(o-1);++t<o;)r[t-1]=g(e,t/o);return a}function a(e){return null==e||isNaN(e=+e)?t:n[Z(r,e)]}return a.invertExtent=function(t){var o=n.indexOf(t);return o<0?[NaN,NaN]:[o>0?r[o-1]:e[0],o<r.length?r[o]:e[e.length-1]]},a.domain=function(t){if(!arguments.length)return e.slice();e=[];for(let n of t)null==n||isNaN(n=+n)||e.push(n);return e.sort(m),o()},a.range=function(t){return arguments.length?(n=Array.from(t),o()):n.slice()},a.unknown=function(e){return arguments.length?(t=e,a):t},a.quantiles=function(){return r.slice()},a.copy=function(){return w().domain(e).range(n).unknown(t)},C.apply(a,arguments)}function N(t,e){var n=t.features,r=w().domain(n.map(e)).range(function(t,e,n){t=+t,e=+e,n=(o=arguments.length)<2?(e=t,t=0,1):o<3?1:+n;for(var r=-1,o=0|Math.max(0,Math.ceil((e-t)/n)),a=new Array(o);++r<o;)a[r]=t+r*n;return a}(9));return{type:"FeatureCollection",features:n.map((function(t){var n=e(t),i=(0,a.Z)((0,o.Z)({},t.properties),{value:n,percentile:r(n)});return(0,a.Z)((0,o.Z)({},t),{properties:i})}))}}var k=n(45697),S=n.n(k),M=n(25778);function R(t){var e=t.year,n=t.onChange;return(0,i.jsxs)(d.Ct,{children:[(0,i.jsxs)(h.Z,{variant:"body2",sx:{color:"common.white"},children:["Year: ",e]}),(0,i.jsx)(M.ZP,{name:"year",value:e,step:1,min:1995,max:2015,onChange:function(t,e){"number"===typeof e&&n(e)}})]})}R.propTypes={year:S().number,onChange:S().func};var z=(0,l.memo)(R);function F(t){var e=(0,r.Z)({},t),n=(0,c.Z)(),f=(0,l.useState)(2010),g=f[0],m=f[1],x=(0,l.useState)(null),b=x[0],v=x[1],y=(0,l.useState)(null),j=y[0],Z=y[1],C={id:"data",type:"fill",paint:{"fill-color":{property:"percentile",stops:[[0,n.palette.primary.light],[1,n.palette.primary.main],[2,n.palette.info.light],[3,n.palette.info.main],[4,n.palette.warning.light],[5,n.palette.warning.main],[6,n.palette.error.light],[7,n.palette.error.light],[8,n.palette.primary.dark]]},"fill-opacity":.72}};(0,l.useEffect)((function(){fetch("https://raw.githubusercontent.com/uber/react-map-gl/master/examples/.data/us-income.geojson").then((function(t){return t.json()})).then((function(t){return v(t)})).catch((function(t){return console.error("Could not load data",t)}))}),[]);var w=(0,l.useCallback)((function(t){var e=t.features,n=t.point,r=e&&e[0];Z(r?{feature:r,x:n.x,y:n.y}:null)}),[]),k=(0,l.useMemo)((function(){return b&&N(b,(function(t){var e;return null===(e=t.properties)||void 0===e?void 0:e.income[g]}))}),[b,g]);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(u.ZP,(0,a.Z)((0,o.Z)({initialViewState:{latitude:40,longitude:-100,zoom:3},interactiveLayerIds:["data"],onMouseMove:w},e),{children:[(0,i.jsx)(d.ZM,{}),(0,i.jsx)(u.Hw,{type:"geojson",data:k,children:(0,i.jsx)(u.mh,(0,o.Z)({},C))}),j&&(0,i.jsxs)(s.Z,{sx:{p:1,zIndex:99,borderRadius:1,position:"absolute",pointerEvents:"none",color:"common.white",backgroundColor:(0,p.Fq)(n.palette.grey[900],.8)},style:{left:j.x,top:j.y},children:[(0,i.jsxs)(h.Z,{component:"div",variant:"caption",children:[(0,i.jsx)("strong",{children:"State:"})," ",j.feature.properties.name]}),(0,i.jsxs)(h.Z,{component:"div",variant:"caption",children:[(0,i.jsx)("strong",{children:" Median Household Income: "}),j.feature.properties.value]}),(0,i.jsxs)(h.Z,{component:"div",variant:"caption",children:[(0,i.jsx)("strong",{children:"Percentile:"}),j.feature.properties.percentile/8*100]})]})]})),(0,i.jsx)(z,{year:g,onChange:function(t){return m(t)}})]})}var I=(0,l.memo)(F)}}]);