"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9350],{28933:function(e,t,o){o.d(t,{Ct:function(){return m},ZM:function(){return j},O_:function(){return y},Yz:function(){return x}});var n=o(14251),r=o(52875),a=o(85893),i=o(33403),l=o(2734),p=o(90948),s=o(42287),c=o(26034);function u(){var e=(0,l.Z)();return(0,a.jsx)(s.Z,{styles:{"& .mapboxgl-ctrl.mapboxgl-ctrl-group":{borderRadius:"8px",boxShadow:e.customShadows.z8},"& .mapboxgl-ctrl-zoom-in":{borderRadius:"8px 8px 0 0"},"& .mapboxgl-ctrl-compass":{borderRadius:"0 0 8px 8px"},"& .mapboxgl-ctrl-fullscreen":{"& .mapboxgl-ctrl-icon":{transform:" scale(0.75)"}},"& .mapboxgl-ctrl-group button+button":{borderTop:"1px solid ".concat(e.palette.divider)},"& .mapboxgl-ctrl.mapboxgl-ctrl-scale":{border:"none",lineHeight:"14px",borderRadius:"4px",color:e.palette.common.white,fontWeight:e.typography.fontWeightBold,backgroundImage:"linear-gradient(to right, #8a2387, #e94057, #f27121)"}}})}var d=(0,p.ZP)(i.GI)((function(e){var t=e.theme,o="rtl"===t.direction;return{"& .mapboxgl-popup-content":{maxWidth:180,padding:t.spacing(1),boxShadow:t.customShadows.z20,borderRadius:t.shape.borderRadius,backgroundColor:t.palette.grey[800]},"& .mapboxgl-popup-close-button":{width:24,height:24,fontSize:16,opacity:.48,color:t.palette.common.white,right:o&&"0",left:o&&"auto","&:hover":{opacity:1},"&:focus":{outline:"none"}},"&.mapboxgl-popup-anchor-top .mapboxgl-popup-tip":{marginBottom:-1,borderBottomColor:t.palette.grey[800]},"&.mapboxgl-popup-anchor-right .mapboxgl-popup-tip":{marginLeft:-1,borderLeftColor:t.palette.grey[800]},"&.mapboxgl-popup-anchor-bottom .mapboxgl-popup-tip":{marginTop:-1,borderTopColor:t.palette.grey[800]},"&.mapboxgl-popup-anchor-left .mapboxgl-popup-tip":{marginRight:-1,borderRightColor:t.palette.grey[800]}}})),m=(0,p.ZP)("div")((function(e){var t=e.theme;return(0,r.Z)((0,n.Z)({},(0,c.Z)().bgBlur({color:t.palette.grey[900]})),{zIndex:9,minWidth:200,position:"absolute",top:t.spacing(1),right:t.spacing(1),padding:t.spacing(2),borderRadius:t.shape.borderRadius})})),h=o(44747),g=o(45697),b=o.n(g);function x(e){var t=e.sx,o=e.children,i=(0,h.Z)(e,["sx","children"]);return(0,a.jsx)(d,(0,r.Z)((0,n.Z)({anchor:"bottom",sx:t},i),{children:o}))}x.propTypes={children:b().node,sx:b().object};var f=o(6453),v=o(87357);function y(e){var t=(0,f.Z)({},e);return(0,a.jsx)(i.Jx,(0,r.Z)((0,n.Z)({},t),{children:(0,a.jsx)(v.Z,{component:"svg",viewBox:"0 0 24 24",sx:{height:20,stroke:"none",cursor:"pointer",fill:function(e){return e.palette.error.main},transform:"translate(".concat(-10,"px,").concat(-20,"px)")},children:(0,a.jsx)("path",{d:"M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3\n  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9\n  C20.1,15.8,20.2,15.8,20.2,15.7z"})})}))}function j(e){var t=e.hideScaleControl,o=e.hideGeolocateControl,n=e.hideFullscreenControl,r=e.hideNavigationnControl;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(u,{}),!o&&(0,a.jsx)(i.$j,{position:"top-left",positionOptions:{enableHighAccuracy:!0}}),!n&&(0,a.jsx)(i.ot,{position:"top-left"}),!t&&(0,a.jsx)(i.jf,{position:"bottom-left"}),!r&&(0,a.jsx)(i.Pv,{position:"bottom-left"})]})}j.propTypes={hideFullscreenControl:b().bool,hideGeolocateControl:b().bool,hideNavigationnControl:b().bool,hideScaleControl:b().bool}},29350:function(e,t,o){o.r(t),o.d(t,{default:function(){return j}});var n=o(6453),r=o(14251),a=o(52875),i=o(85893),l=o(67294),p=o(33403),s=o(45697),c=o.n(s),u=o(87357),d=o(15861),m=o(72852),h=o(25778),g=o(55267),b=o(28933);function x(e){var t=e.startTime,o=e.endTime,n=e.allDays,r=e.selectedTime,a=e.onChangeTime,l=e.onChangeAllDays,p=864e5,s=Math.round((o-t)/p),c=Math.round((r-t)/p);return(0,i.jsxs)(b.Ct,{children:[(0,i.jsxs)(u.Z,{sx:{width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,i.jsx)(d.Z,{variant:"subtitle2",sx:{color:"common.white"},children:"All Days"}),(0,i.jsx)(m.Z,{size:"small",checked:n,onChange:function(e){return l(e.target.checked)}})]}),(0,i.jsx)("br",{}),(0,i.jsxs)(d.Z,{gutterBottom:!0,variant:"body2",sx:{color:n?"text.disabled":"common.white"},children:["Each Day: ",(0,g.Mu)(r)]}),(0,i.jsx)(h.ZP,{min:1,step:1,max:s,disabled:n,value:c,onChange:function(e,o){"number"===typeof o&&function(e){a(t+e*p)}(o)}})]})}x.propTypes={allDays:c().bool,startTime:c().number,endTime:c().number,selectedTime:c().number,onChangeAllDays:c().func,onChangeTime:c().func};var f=(0,l.memo)(x),v={id:"heatmap",maxzoom:9,type:"heatmap",paint:{"heatmap-weight":["interpolate",["linear"],["get","mag"],0,0,6,1],"heatmap-intensity":["interpolate",["linear"],["zoom"],0,1,9,3],"heatmap-color":["interpolate",["linear"],["heatmap-density"],0,"rgba(33,102,172,0)",.2,"rgb(103,169,207)",.4,"rgb(209,229,240)",.6,"rgb(253,219,199)",.8,"rgb(239,138,98)",.9,"rgb(255,201,101)"],"heatmap-radius":["interpolate",["linear"],["zoom"],0,2,9,20],"heatmap-opacity":["interpolate",["linear"],["zoom"],7,1,9,0]}};function y(e){var t=(0,n.Z)({},e),o=(0,l.useState)(!0),s=o[0],c=o[1],u=(0,l.useState)([0,0]),d=u[0],m=u[1],h=(0,l.useState)(0),g=h[0],b=h[1],x=(0,l.useState)(),y=x[0],j=x[1];(0,l.useEffect)((function(){fetch("https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson").then((function(e){return e.json()})).then((function(e){var t=e.features,o=t[0].properties.time,n=t[t.length-1].properties.time;m([n,o]),j(e),b(o)})).catch((function(e){return console.error("Could not load data",e)}))}),[]);var C=(0,l.useMemo)((function(){return s?y:function(e,t){var o=new Date(t),n=o.getFullYear(),r=o.getMonth(),a=o.getDate(),i=null===e||void 0===e?void 0:e.features.filter((function(e){var t,o=new Date(null===(t=e.properties)||void 0===t?void 0:t.time);return o.getFullYear()===n&&o.getMonth()===r&&o.getDate()===a}));return{type:"FeatureCollection",features:i}}(y,g)}),[y,s,g]);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(p.ZP,(0,a.Z)((0,r.Z)({initialViewState:{latitude:40,longitude:-100,zoom:3}},t),{children:C&&(0,i.jsx)(p.Hw,{type:"geojson",data:C,children:(0,i.jsx)(p.mh,(0,r.Z)({},v))})})),(0,i.jsx)(f,{startTime:d[0],endTime:d[1],selectedTime:g,allDays:s,onChangeTime:b,onChangeAllDays:c})]})}var j=(0,l.memo)(y)}}]);