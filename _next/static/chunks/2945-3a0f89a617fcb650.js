"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2945],{12963:function(e,r,n){n.d(r,{Z:function(){return R}});var t=n(87462),a=n(63366),i=n(67294),s=(n(59864),n(86010)),o=n(94780),l=n(90948),c=n(71657),u=n(15861),d=n(41796),p=n(82066),m=n(85893),h=(0,p.Z)((0,m.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),g=n(49990);const x=(0,l.ZP)(g.Z)((({theme:e})=>(0,t.Z)({display:"flex",marginLeft:`calc(${e.spacing(1)} * 0.5)`,marginRight:`calc(${e.spacing(1)} * 0.5)`},"light"===e.palette.mode?{backgroundColor:e.palette.grey[100],color:e.palette.grey[700]}:{backgroundColor:e.palette.grey[700],color:e.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":(0,t.Z)({},"light"===e.palette.mode?{backgroundColor:e.palette.grey[200]}:{backgroundColor:e.palette.grey[600]}),"&:active":(0,t.Z)({boxShadow:e.shadows[0]},"light"===e.palette.mode?{backgroundColor:(0,d._4)(e.palette.grey[200],.12)}:{backgroundColor:(0,d._4)(e.palette.grey[600],.12)})}))),f=(0,l.ZP)(h)({width:24,height:16});var v=function(e){const r=e;return(0,m.jsx)("li",{children:(0,m.jsx)(x,(0,t.Z)({focusRipple:!0},e,{ownerState:r,children:(0,m.jsx)(f,{ownerState:r})}))})},Z=n(1588),b=n(34867);function j(e){return(0,b.Z)("MuiBreadcrumbs",e)}var y=(0,Z.Z)("MuiBreadcrumbs",["root","ol","li","separator"]);const k=["children","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],S=(0,l.ZP)(u.Z,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:(e,r)=>[{[`& .${y.li}`]:r.li},r.root]})({}),C=(0,l.ZP)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:(e,r)=>r.ol})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),w=(0,l.ZP)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:(e,r)=>r.separator})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function P(e,r,n,t){return e.reduce(((a,i,s)=>(s<e.length-1?a=a.concat(i,(0,m.jsx)(w,{"aria-hidden":!0,className:r,ownerState:t,children:n},`separator-${s}`)):a.push(i),a)),[])}var R=i.forwardRef((function(e,r){const n=(0,c.Z)({props:e,name:"MuiBreadcrumbs"}),{children:l,className:u,component:d="nav",expandText:p="Show path",itemsAfterCollapse:h=1,itemsBeforeCollapse:g=1,maxItems:x=8,separator:f="/"}=n,Z=(0,a.Z)(n,k),[b,y]=i.useState(!1),w=(0,t.Z)({},n,{component:d,expanded:b,expandText:p,itemsAfterCollapse:h,itemsBeforeCollapse:g,maxItems:x,separator:f}),R=(e=>{const{classes:r}=e;return(0,o.Z)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},j,r)})(w),T=i.useRef(null),I=i.Children.toArray(l).filter((e=>i.isValidElement(e))).map(((e,r)=>(0,m.jsx)("li",{className:R.li,children:e},`child-${r}`)));return(0,m.jsx)(S,(0,t.Z)({ref:r,component:d,color:"text.secondary",className:(0,s.Z)(R.root,u),ownerState:w},Z,{children:(0,m.jsx)(C,{className:R.ol,ref:T,ownerState:w,children:P(b||x&&I.length<=x?I:(e=>g+h>=e.length?e:[...e.slice(0,g),(0,m.jsx)(v,{"aria-label":p,onClick:()=>{y(!0);const e=T.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis"),...e.slice(e.length-h,e.length)])(I),R.separator,f,w)})}))}))},25814:function(e,r,n){n.d(r,{Z:function(){return g}});var t=n(14251),a=n(52875),i=n(44747),s=n(85893),o=n(45697),l=n.n(o),c=n(41664),u=n.n(c),d=n(15861),p=n(12963),m=n(87357),h=n(23795);function g(e){var r=e.links,n=e.activeLast,o=void 0!==n&&n,l=(0,i.Z)(e,["links","activeLast"]),c=r[r.length-1].name,u=r.map((function(e){return(0,s.jsx)(x,{link:e},e.name)})),h=r.map((function(e){return(0,s.jsx)("div",{children:e.name!==c?(0,s.jsx)(x,{link:e}):(0,s.jsx)(d.Z,{variant:"body2",sx:{maxWidth:260,overflow:"hidden",whiteSpace:"nowrap",color:"text.disabled",textOverflow:"ellipsis"},children:c})},e.name)}));return(0,s.jsx)(p.Z,(0,a.Z)((0,t.Z)({separator:(0,s.jsx)(m.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})},l),{children:o?u:h}))}function x(e){var r=e.link,n=r.href,t=void 0===n?"":n,a=r.name,i=r.icon;return(0,s.jsx)(u(),{href:t,passHref:!0,children:(0,s.jsxs)(h.Z,{variant:"body2",sx:{lineHeight:2,display:"flex",alignItems:"center",color:"text.primary","& > div":{display:"inherit"}},children:[i&&(0,s.jsx)(m.Z,{sx:{mr:1,"& svg":{width:20,height:20}},children:i}),a]},a)})}g.propTypes={activeLast:l().bool,links:l().array.isRequired},x.propTypes={link:l().shape({href:l().string,icon:l().any,name:l().string})}},38187:function(e,r,n){n.d(r,{Z:function(){return p}});var t=n(14251),a=n(44747),i=n(85893),s=n(45697),o=n.n(s),l=n(87357),c=n(15861),u=n(23795),d=n(25814);function p(e){var r=e.links,n=e.action,s=e.heading,o=e.moreLink,p=void 0===o?[]:o,m=e.sx,h=(0,a.Z)(e,["links","action","heading","moreLink","sx"]);return(0,i.jsxs)(l.Z,{sx:(0,t.Z)({mb:5},m),children:[(0,i.jsxs)(l.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,i.jsxs)(l.Z,{sx:{flexGrow:1},children:[(0,i.jsx)(c.Z,{variant:"h4",gutterBottom:!0,children:s}),(0,i.jsx)(d.Z,(0,t.Z)({links:r},h))]}),n&&(0,i.jsx)(l.Z,{sx:{flexShrink:0},children:n})]}),(0,i.jsx)(l.Z,{sx:{mt:2},children:"string"===typeof p?(0,i.jsx)(u.Z,{href:p,target:"_blank",variant:"body2",children:p}):p.map((function(e){return(0,i.jsx)(u.Z,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"table"},children:e},e)}))})]})}p.propTypes={links:o().array,action:o().node,heading:o().string.isRequired,moreLink:o().oneOfType([o().string,o().array]),sx:o().object}},65373:function(e,r,n){n.d(r,{Z:function(){return M}});var t=n(34727),a=n(14251),i=n(52875),s=n(69779),o=n(70655),l=n(85893),c=n(67294),u=n(45697),d=n.n(u),p=n(74231),m=n(73400),h=n(87536),g=n(47533),x=n(90948),f=n(31812),v=n(15861),Z=n(86886),b=n(66242),j=n(26447),y=n(5306),k=n(87918),S=n(50135),C=n(87109),w=n(77364),P=n(92369),R=n(98383),T=n(61330),I=[{label:"Men",value:"Men"},{label:"Women",value:"Women"},{label:"Kids",value:"Kids"}],L=[{group:"Clothing",classify:["Shirts","T-shirts","Jeans","Leather"]},{group:"Tailored",classify:["Suits","Blazers","Trousers","Waistcoats"]},{group:"Accessories",classify:["Shoes","Backpacks and bags","Bracelets","Face masks"]}],_=["Toy Story 3","Logan","Full Metal Jacket","Dangal","The Sting","2001: A Space Odyssey","Singin' in the Rain","Toy Story","Bicycle Thieves","The Kid","Inglourious Basterds","Snatch","3 Idiots"],B=(0,x.ZP)(v.Z)((function(e){var r=e.theme;return(0,i.Z)((0,a.Z)({},r.typography.subtitle2),{color:r.palette.text.secondary,marginBottom:r.spacing(1)})}));function M(e){var r=e.isEdit,n=e.currentProduct,u=(0,w.Z)().postItem,d=(0,m.Ds)().enqueueSnackbar,x=p.Ry().shape({name:p.Z_().required("Name is required"),description:p.Z_().required("Description is required"),images:p.IX().min(1,"Images is required"),price:p.Rx().moreThan(0,"Price should not be $0.00")}),v=(0,c.useMemo)((function(){return{name:(null===n||void 0===n?void 0:n.name)||"",description:(null===n||void 0===n?void 0:n.description)||"",images:(null===n||void 0===n?void 0:n.images)||[],code:(null===n||void 0===n?void 0:n.code)||"",sku:(null===n||void 0===n?void 0:n.sku)||"",price:(null===n||void 0===n?void 0:n.price)||0,priceSale:(null===n||void 0===n?void 0:n.priceSale)||0,tags:(null===n||void 0===n?void 0:n.tags)||[_[0]],inStock:!0,taxes:!0,gender:(null===n||void 0===n?void 0:n.gender)||I[2].value,category:(null===n||void 0===n?void 0:n.category)||L[0].classify[1]}}),[n]),M=(0,h.cI)({resolver:(0,g.X)(x),defaultValues:v}),N=M.reset,A=M.watch,q=M.control,$=M.setValue,z=M.getValues,O=M.handleSubmit,D=M.formState.isSubmitting,E=A();(0,c.useEffect)((function(){r&&n&&N(v),r||N(v)}),[r,n]);var U=function(){var e=(0,t.Z)((function(){var e;return(0,o.__generator)(this,(function(n){switch(n.label){case 0:return[4,Promise.all(E.images.map(function(){var e=(0,t.Z)((function(e){return(0,o.__generator)(this,(function(r){return[2,(0,P.g$)(e,"https://api.cloudinary.com/v1_1","cityshoppa","633145413144384")]}))}));return function(r){return e.apply(this,arguments)}}()))];case 1:E.images=n.sent(),n.label=2;case 2:return n.trys.push([2,4,,5]),[4,u(E)];case 3:return n.sent(),N(),d(r?"Update success!":"Create success!"),[3,5];case 4:return e=n.sent(),console.error(e),[3,5];case 5:return[2]}}))}));return function(){return e.apply(this,arguments)}}(),W=(0,c.useCallback)((function(e){var r=E.images||[];$("images",(0,s.Z)(r).concat((0,s.Z)(e.map((function(e){var r=new FileReader;return r.onload=function(){e.file=r.result.toString()},r.readAsDataURL(e),Object.assign(e,{preview:URL.createObjectURL(e)})})))))}),[$,E.images]);return(0,l.jsx)(R.RV,{methods:M,onSubmit:O(U),children:(0,l.jsxs)(Z.ZP,{container:!0,spacing:3,children:[(0,l.jsx)(Z.ZP,{item:!0,xs:12,md:8,children:(0,l.jsx)(b.Z,{sx:{p:3},children:(0,l.jsxs)(j.Z,{spacing:3,children:[(0,l.jsx)(R.au,{name:"name",label:"Product Name"}),(0,l.jsxs)("div",{children:[(0,l.jsx)(B,{children:"Description"}),(0,l.jsx)(R.LM,{simple:!0,name:"description"})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)(B,{children:"Images"}),(0,l.jsx)(R.fT,{showPreview:!0,name:"images",maxSize:3145728,onDrop:W,onRemove:function(e){var r,n=E.images&&(null===(r=E.images)||void 0===r?void 0:r.filter((function(r){return r!==e})));$("images",n)},onRemoveAll:function(){$("images",[])},onUpload:function(){return console.log("ON UPLOAD")}})]})]})})}),(0,l.jsx)(Z.ZP,{item:!0,xs:12,md:4,children:(0,l.jsxs)(j.Z,{spacing:3,children:[(0,l.jsxs)(b.Z,{sx:{p:3},children:[(0,l.jsx)(R._e,{name:"inStock",label:"In stock"}),(0,l.jsxs)(j.Z,{spacing:3,mt:2,children:[(0,l.jsx)(R.au,{name:"code",label:"Product Code"}),(0,l.jsx)(R.au,{name:"sku",label:"Product SKU"}),(0,l.jsxs)(R.Cc,{name:"category",label:"Category",children:[(0,l.jsx)("option",{value:""}),T.bd.map((function(e){return(0,l.jsx)("option",{value:e.label,children:e.label},e.code)}))]}),(0,l.jsx)(h.Qr,{name:"tags",control:q,render:function(e){var r=e.field;return(0,l.jsx)(y.Z,(0,i.Z)((0,a.Z)({},r),{multiple:!0,freeSolo:!0,onChange:function(e,n){return r.onChange(n)},options:_.map((function(e){return e})),renderTags:function(e,r){return e.map((function(e,n){return(0,c.createElement)(k.Z,(0,i.Z)((0,a.Z)({},r({index:n})),{key:e,size:"small",label:e}))}))},renderInput:function(e){return(0,l.jsx)(S.Z,(0,a.Z)({label:"Tags"},e))}}))}})]})]}),(0,l.jsxs)(b.Z,{sx:{p:3},children:[(0,l.jsxs)(j.Z,{spacing:3,mb:2,children:[(0,l.jsx)(R.au,{name:"price",label:"Regular Price",placeholder:"0.00",value:0===z("price")?"":z("price"),onChange:function(e){return $("price",Number(e.target.value))},InputLabelProps:{shrink:!0},InputProps:{startAdornment:(0,l.jsx)(C.Z,{position:"start",children:"$"}),type:"number"}}),(0,l.jsx)(R.au,{name:"priceSale",label:"Sale Price",placeholder:"0.00",value:0===z("priceSale")?"":z("priceSale"),onChange:function(e){return $("price",Number(e.target.value))},InputLabelProps:{shrink:!0},InputProps:{startAdornment:(0,l.jsx)(C.Z,{position:"start",children:"$"}),type:"number"}})]}),(0,l.jsx)(R._e,{name:"taxes",label:"Price includes taxes"})]}),(0,l.jsx)(f.Z,{type:"submit",variant:"contained",size:"large",loading:D,children:r?"Save Changes":"Create Product"})]})})]})})}M.propTypes={isEdit:d().bool,currentProduct:d().object}}}]);