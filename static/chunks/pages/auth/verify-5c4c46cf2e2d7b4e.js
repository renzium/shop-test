(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4938],{51312:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/auth/verify",function(){return n(52728)}])},52728:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return k}});var t=n(85893),o=n(90948),i=n(53156),c=n(15861),u=n(87357),a=n(23795),d=n(58866),s=n(82771),l=n(34727),f=n(14251),h=n(52875),m=n(70655),v=n(74231),x=n(73400),p=n(67294),g=n(11163),Z=n(87536),j=n(47533),y=n(26447),_=n(57709),b=n(56815),q=n(31812),C=n(76939),w=n(98383);function E(){var e=(0,g.useRouter)().push,r=(0,x.Ds)().enqueueSnackbar,n=v.Ry().shape({code1:v.Z_().required("Code is required"),code2:v.Z_().required("Code is required"),code3:v.Z_().required("Code is required"),code4:v.Z_().required("Code is required"),code5:v.Z_().required("Code is required"),code6:v.Z_().required("Code is required")}),o=(0,Z.cI)({mode:"all",resolver:(0,j.X)(n),defaultValues:{code1:"",code2:"",code3:"",code4:"",code5:"",code6:""}}),i=o.watch,c=o.control,u=o.setValue,a=o.handleSubmit,d=o.formState,s=d.isSubmitting,E=d.errors,S=i();(0,p.useEffect)((function(){var e=document.querySelector("input.field-code");return null===e||void 0===e||e.addEventListener("paste",k),function(){null===e||void 0===e||e.removeEventListener("paste",k)}}),[]);var k=function(e){var r=e.clipboardData.getData("text");r=r.split(""),[].forEach.call(document.querySelectorAll(".field-code"),(function(e,n){e.value=r[n];var t="code".concat(n+1);u(t,r[n])})),e.preventDefault()},N=function(){var n=(0,l.Z)((function(n){var t;return(0,m.__generator)(this,(function(o){switch(o.label){case 0:return o.trys.push([0,2,,3]),[4,new Promise((function(e){return setTimeout(e,500)}))];case 1:return o.sent(),console.log("data",Object.values(n).join("")),r("Verify success!"),e(C.vB.root),[3,3];case 2:return t=o.sent(),console.error(t),[3,3];case 3:return[2]}}))}));return function(e){return n.apply(this,arguments)}}();return(0,t.jsx)(w.RV,{methods:o,onSubmit:a(N),children:(0,t.jsxs)(y.Z,{spacing:3,children:[(0,t.jsx)(y.Z,{direction:"row",spacing:2,justifyContent:"center",children:Object.keys(S).map((function(e,r){return(0,t.jsx)(Z.Qr,{name:"code".concat(r+1),control:c,render:function(e){var n=e.field,o=e.fieldState.error;return(0,t.jsx)(_.Z,(0,h.Z)((0,f.Z)({},n),{error:!!o,autoFocus:0===r,placeholder:"-",onChange:function(e){return function(e,r){var n=e.target,t=n.maxLength,o=n.value,i=n.name.replace("code",""),c=Number(i);if(o.length>=t&&c<6){var u=document.querySelector("input[name=code".concat(c+1,"]"));null!==u&&u.focus()}r(e)}(e,n.onChange)},inputProps:{className:"field-code",maxLength:1,sx:{p:0,textAlign:"center",width:{xs:36,sm:56},height:{xs:36,sm:56}}}}))}},e)}))}),(!!E.code1||!!E.code2||!!E.code3||!!E.code4||!!E.code5||!!E.code6)&&(0,t.jsx)(b.Z,{error:!0,sx:{px:2},children:"Code is required"}),(0,t.jsx)(q.Z,{fullWidth:!0,size:"large",type:"submit",variant:"contained",loading:s,sx:{mt:3},children:"Verify"})]})})}var S=(0,o.ZP)("div")((function(e){return{maxWidth:480,margin:"auto",minHeight:"100vh",display:"flex",justifyContent:"center",flexDirection:"column",padding:e.theme.spacing(12,0)}}));function k(){return(0,t.jsx)(s.Z,{title:"Verify Code",children:(0,t.jsx)(i.Z,{children:(0,t.jsxs)(S,{sx:{textAlign:"center"},children:[(0,t.jsx)(c.Z,{variant:"h3",paragraph:!0,children:"Please check your email!"}),(0,t.jsx)(c.Z,{sx:{color:"text.secondary"},children:"We have emailed a 6-digit confirmation code to acb@domain, please enter the code in below box to verify your email."}),(0,t.jsx)(u.Z,{sx:{mt:5,mb:3},children:(0,t.jsx)(E,{})}),(0,t.jsxs)(c.Z,{variant:"body2",children:["Don\u2019t have a code? \xa0",(0,t.jsx)(a.Z,{variant:"subtitle2",onClick:function(){},children:"Resend code"})]})]})})})}k.getLayout=function(e){return(0,t.jsx)(d.Z,{variant:"logoOnly",children:e})}}},function(e){e.O(0,[9448,2174,3279,1866,8866,9774,2888,179],(function(){return r=51312,e(e.s=r);var r}));var r=e.O();_N_E=r}]);