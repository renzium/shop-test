(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9804],{67726:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/e-commerce/shop1",function(){return r(45944)}])},45944:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return j}});var t=r(85893),o=r(45697),c=r.n(o),i=r(67294),s=r(75472),a=r.n(s),u=r(87536),l=r(26447),g=r(15861),f=r(79718),d=r(1308),p=r(76939),h=(r(40571),r(58866)),m=r(82771),x=r(38187),v=r(98383),R=r(55704),y=r(73183);function j(e){var n=e.title,r=e.heading,o=e.links,c=e.category,s=(0,f.I0)(),h=(0,i.useState)(!1),j=h[0],w=h[1],_=(0,f.v9)((function(e){return e.product})),E=_.products,S=_.sortBy,b=_.filters,k=function(e,n,r){"featured"===n&&(e=a()(e,["sold"],["desc"]));"newest"===n&&(e=a()(e,["createdAt"],["desc"]));"priceDesc"===n&&(e=a()(e,["price"],["desc"]));"priceAsc"===n&&(e=a()(e,["price"],["asc"]));r.gender.length>0&&(e=e.filter((function(e){return r.gender.includes(e.gender)})));"All"!==r.category&&(e=e.filter((function(e){return e.category===r.category})));r.colors.length>0&&(e=e.filter((function(e){return e.colors.some((function(e){return r.colors.includes(e)}))})));var t=r.priceRange[0],o=r.priceRange[1];0===t&&200===o||(e=e.filter((function(e){return e.price>=t&&e.price<=o})));r.rating&&(e=e.filter((function(e){var n=function(e){return"up4Star"===e?4:"up3Star"===e?3:"up2Star"===e?2:1};return e.totalRating>n(r.rating)})));return e}(E,S,b),A={gender:b.gender,category:b.category,colors:b.colors,priceRange:b.priceRange,rating:b.rating},C=(0,u.cI)({defaultValues:A}),Z=C.reset,N=C.watch,O=C.setValue,B=N(),P=B.priceRange[0],V=B.priceRange[1],D=0===P&&200===V&&!B.rating&&0===B.gender.length&&0===B.colors.length&&"All"===B.category;(0,i.useEffect)((function(){s(c?(0,d.V8)(c):(0,d.Xp)())}),[s,c]),(0,i.useEffect)((function(){s((0,d.ft)(B))}),[s,B]);var I=function(){w(!1)},T=function(){j&&I(),Z({gender:[],category:"All",colors:[],priceRange:[0,200],rating:""})};return(0,t.jsxs)(m.Z,{title:n||"Ecommerce: Shop",children:[(0,t.jsx)(x.Z,{heading:r||"Shop",links:o||[{name:"Dashboard",href:p.vB.root},{name:"E-Commerce",href:p.vB.eCommerce.root},{name:"Shop"}]}),(0,t.jsxs)(l.Z,{spacing:2,direction:{xs:"column",sm:"row"},alignItems:{sm:"center"},justifyContent:"space-between",sx:{mb:2},children:[(0,t.jsx)(R.W,{}),(0,t.jsxs)(l.Z,{direction:"row",spacing:1,flexShrink:0,sx:{my:1},children:[(0,t.jsx)(v.RV,{methods:C,children:(0,t.jsx)(R.n4,{isDefault:D,isOpen:j,onOpen:function(){w(!0)},onClose:I,onResetAll:T})}),(0,t.jsx)(R.a5,{})]})]}),(0,t.jsx)(l.Z,{sx:{mb:3},children:!D&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(g.Z,{variant:"body2",gutterBottom:!0,children:[(0,t.jsx)("strong",{children:k.length}),"\xa0Products found"]}),(0,t.jsx)(R.vc,{filters:b,isShowReset:!D&&!j,onRemoveGender:function(e){var n=b.gender.filter((function(n){return n!==e}));O("gender",n)},onRemoveCategory:function(){O("category","All")},onRemoveColor:function(e){var n=b.colors.filter((function(n){return n!==e}));O("colors",n)},onRemovePrice:function(){O("priceRange",[0,200])},onRemoveRating:function(){O("rating","")},onResetAll:T})]})}),(0,t.jsx)(R.vO,{products:k,loading:!E.length&&D}),(0,t.jsx)(y.Z,{})]})}j.propTypes={title:c().string,heading:c().string,links:c().array,category:c().string},j.getLayout=function(e){return(0,t.jsx)(h.Z,{children:e})}}},function(e){e.O(0,[9448,2174,8756,1440,3279,1866,8866,8216,1552,9774,2888,179],(function(){return n=67726,e(e.s=n);var n}));var n=e.O();_N_E=n}]);