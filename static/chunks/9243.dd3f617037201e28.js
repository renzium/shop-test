"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9243],{39243:function(e,n,r){r.r(n),r.d(n,{List:function(){return Ye},default:function(){return Xe}});var t=r(14251),a=r(52875),i=r(44747),o=r(85893),s=r(45697),c=r.n(s),l=r(67294);function u(e,n){return n||(n=e.slice(0)),e.raw=n,e}var d=function(){function e(e){var n=this;this._insertTag=function(e){n.container.insertBefore(e,0===n.tags.length?n.insertionPoint?n.insertionPoint.nextSibling:n.prepend?n.container.firstChild:n.before:n.tags[n.tags.length-1].nextSibling),n.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var n=e.prototype;return n.hydrate=function(e){e.forEach(this._insertTag)},n.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(function(e){var n=document.createElement("style");return n.setAttribute("data-emotion",e.key),void 0!==e.nonce&&n.setAttribute("nonce",e.nonce),n.appendChild(document.createTextNode("")),n.setAttribute("data-s",""),n}(this));var n=this.tags[this.tags.length-1];if(this.isSpeedy){var r=function(e){if(e.sheet)return e.sheet;for(var n=0;n<document.styleSheets.length;n++)if(document.styleSheets[n].ownerNode===e)return document.styleSheets[n]}(n);try{r.insertRule(e,r.cssRules.length)}catch(n){}}else n.appendChild(document.createTextNode(e));this.ctr++},n.flush=function(){this.tags.forEach((function(e){return e.parentNode&&e.parentNode.removeChild(e)})),this.tags=[],this.ctr=0},e}(),f="-ms-",p="-webkit-",h=Math.abs,v=String.fromCharCode,g=Object.assign;function m(e){return e.trim()}function b(e,n,r){return e.replace(n,r)}function x(e,n){return e.indexOf(n)}function y(e,n){return 0|e.charCodeAt(n)}function w(e,n,r){return e.slice(n,r)}function k(e){return e.length}function j(e){return e.length}function C(e,n){return n.push(e),e}var $=1,A=1,Z=0,E=0,S=0,z="";function T(e,n,r,t,a,i,o){return{value:e,root:n,parent:r,type:t,props:a,children:i,line:$,column:A,length:o,return:""}}function R(e,n){return g(T("",null,null,"",null,null,0),e,{length:-e.length},n)}function _(){return S=E>0?y(z,--E):0,A--,10===S&&(A=1,$--),S}function O(){return S=E<Z?y(z,E++):0,A++,10===S&&(A=1,$++),S}function N(){return y(z,E)}function W(){return E}function I(e,n){return w(z,e,n)}function P(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function D(e){return $=A=1,Z=k(z=e),E=0,[]}function F(e){return z="",e}function G(e){return m(I(E-1,B(91===e?e+2:40===e?e+1:e)))}function M(e){for(;(S=N())&&S<33;)O();return P(e)>2||P(S)>3?"":" "}function q(e,n){for(;--n&&O()&&!(S<48||S>102||S>57&&S<65||S>70&&S<97););return I(e,W()+(n<6&&32==N()&&32==O()))}function B(e){for(;O();)switch(S){case e:return E;case 34:case 39:34!==e&&39!==e&&B(S);break;case 40:41===e&&B(e);break;case 92:O()}return E}function L(e,n){for(;O()&&e+S!==57&&(e+S!==84||47!==N()););return"/*"+I(n,E-1)+"*"+v(47===e?e:O())}function H(e){for(;!P(N());)O();return I(e,E)}function J(e){return F(K("",null,null,null,[""],e=D(e),0,[0],e))}function K(e,n,r,t,a,i,o,s,c){for(var l=0,u=0,d=o,f=0,p=0,h=0,g=1,m=1,y=1,w=0,j="",$=a,A=i,Z=t,E=j;m;)switch(h=w,w=O()){case 40:if(108!=h&&58==E.charCodeAt(d-1)){-1!=x(E+=b(G(w),"&","&\f"),"&\f")&&(y=-1);break}case 34:case 39:case 91:E+=G(w);break;case 9:case 10:case 13:case 32:E+=M(h);break;case 92:E+=q(W()-1,7);continue;case 47:switch(N()){case 42:case 47:C(U(L(O(),W()),n,r),c);break;default:E+="/"}break;case 123*g:s[l++]=k(E)*y;case 125*g:case 59:case 0:switch(w){case 0:case 125:m=0;case 59+u:p>0&&k(E)-d&&C(p>32?V(E+";",t,r,d-1):V(b(E," ","")+";",t,r,d-2),c);break;case 59:E+=";";default:if(C(Z=Q(E,n,r,l,u,a,s,j,$=[],A=[],d),i),123===w)if(0===u)K(E,n,Z,Z,$,i,d,s,A);else switch(f){case 100:case 109:case 115:K(e,Z,Z,t&&C(Q(e,Z,Z,0,0,a,s,j,a,$=[],d),A),a,A,d,s,t?$:A);break;default:K(E,Z,Z,Z,[""],A,0,s,A)}}l=u=p=0,g=y=1,j=E="",d=o;break;case 58:d=1+k(E),p=h;default:if(g<1)if(123==w)--g;else if(125==w&&0==g++&&125==_())continue;switch(E+=v(w),w*g){case 38:y=u>0?1:(E+="\f",-1);break;case 44:s[l++]=(k(E)-1)*y,y=1;break;case 64:45===N()&&(E+=G(O())),f=N(),u=d=k(j=E+=H(W())),w++;break;case 45:45===h&&2==k(E)&&(g=0)}}return i}function Q(e,n,r,t,a,i,o,s,c,l,u){for(var d=a-1,f=0===a?i:[""],p=j(f),v=0,g=0,x=0;v<t;++v)for(var y=0,k=w(e,d+1,d=h(g=o[v])),C=e;y<p;++y)(C=m(g>0?f[y]+" "+k:b(k,/&\f/g,f[y])))&&(c[x++]=C);return T(e,n,r,0===a?"rule":s,c,l,u)}function U(e,n,r){return T(e,n,r,"comm",v(S),w(e,2,-2),0)}function V(e,n,r,t){return T(e,n,r,"decl",w(e,0,t),w(e,t+1,-1),t)}function X(e,n){switch(function(e,n){return(((n<<2^y(e,0))<<2^y(e,1))<<2^y(e,2))<<2^y(e,3)}(e,n)){case 5103:return p+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return p+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return p+e+"-moz-"+e+f+e+e;case 6828:case 4268:return p+e+f+e+e;case 6165:return p+e+f+"flex-"+e+e;case 5187:return p+e+b(e,/(\w+).+(:[^]+)/,"-webkit-box-$1$2-ms-flex-$1$2")+e;case 5443:return p+e+f+"flex-item-"+b(e,/flex-|-self/,"")+e;case 4675:return p+e+f+"flex-line-pack"+b(e,/align-content|flex-|-self/,"")+e;case 5548:return p+e+f+b(e,"shrink","negative")+e;case 5292:return p+e+f+b(e,"basis","preferred-size")+e;case 6060:return p+"box-"+b(e,"-grow","")+p+e+f+b(e,"grow","positive")+e;case 4554:return p+b(e,/([^-])(transform)/g,"$1-webkit-$2")+e;case 6187:return b(b(b(e,/(zoom-|grab)/,p+"$1"),/(image-set)/,p+"$1"),e,"")+e;case 5495:case 3959:return b(e,/(image-set\([^]*)/,p+"$1$`$1");case 4968:return b(b(e,/(.+:)(flex-)?(.*)/,"-webkit-box-pack:$3-ms-flex-pack:$3"),/s.+-b[^;]+/,"justify")+p+e+e;case 4095:case 3583:case 4068:case 2532:return b(e,/(.+)-inline(.+)/,p+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(k(e)-1-n>6)switch(y(e,n+1)){case 109:if(45!==y(e,n+4))break;case 102:return b(e,/(.+:)(.+)-([^]+)/,"$1-webkit-$2-$3$1-moz-"+(108==y(e,n+3)?"$3":"$2-$3"))+e;case 115:return~x(e,"stretch")?X(b(e,"stretch","fill-available"),n)+e:e}break;case 4949:if(115!==y(e,n+1))break;case 6444:switch(y(e,k(e)-3-(~x(e,"!important")&&10))){case 107:return b(e,":",":"+p)+e;case 101:return b(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+p+(45===y(e,14)?"inline-":"")+"box$3$1"+p+"$2$3$1"+f+"$2box$3")+e}break;case 5936:switch(y(e,n+11)){case 114:return p+e+f+b(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return p+e+f+b(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return p+e+f+b(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return p+e+f+e+e}return e}function Y(e,n){for(var r="",t=j(e),a=0;a<t;a++)r+=n(e[a],a,e,n)||"";return r}function ee(e,n,r,t){switch(e.type){case"@import":case"decl":return e.return=e.return||e.value;case"comm":return"";case"@keyframes":return e.return=e.value+"{"+Y(e.children,t)+"}";case"rule":e.value=e.props.join(",")}return k(r=Y(e.children,t))?e.return=e.value+"{"+r+"}":""}var ne=function(e,n,r){for(var t=0,a=0;t=a,a=N(),38===t&&12===a&&(n[r]=1),!P(a);)O();return I(e,E)},re=new WeakMap,te=function(e){if("rule"===e.type&&e.parent&&!(e.length<1)){for(var n=e.value,r=e.parent,t=e.column===r.column&&e.line===r.line;"rule"!==r.type;)if(!(r=r.parent))return;if((1!==e.props.length||58===n.charCodeAt(0)||re.get(r))&&!t){re.set(e,!0);for(var a=[],i=function(e,n){return F(function(e,n){var r=-1,t=44;do{switch(P(t)){case 0:38===t&&12===N()&&(n[r]=1),e[r]+=ne(E-1,n,r);break;case 2:e[r]+=G(t);break;case 4:if(44===t){e[++r]=58===N()?"&\f":"",n[r]=e[r].length;break}default:e[r]+=v(t)}}while(t=O());return e}(D(e),n))}(n,a),o=r.props,s=0,c=0;s<i.length;s++)for(var l=0;l<o.length;l++,c++)e.props[c]=a[s]?i[s].replace(/&\f/g,o[l]):o[l]+" "+i[s]}}},ae=function(e){if("decl"===e.type){var n=e.value;108===n.charCodeAt(0)&&98===n.charCodeAt(2)&&(e.return="",e.value="")}},ie=[function(e,n,r,t){if(e.length>-1&&!e.return)switch(e.type){case"decl":e.return=X(e.value,e.length);break;case"@keyframes":return Y([R(e,{value:b(e.value,"@","@"+p)})],t);case"rule":if(e.length)return function(e,n){return e.map(n).join("")}(e.props,(function(n){switch(function(e,n){return(e=/(::plac\w+|:read-\w+)/.exec(e))?e[0]:e}(n)){case":read-only":case":read-write":return Y([R(e,{props:[b(n,/:(read-\w+)/,":-moz-$1")]})],t);case"::placeholder":return Y([R(e,{props:[b(n,/:(plac\w+)/,":-webkit-input-$1")]}),R(e,{props:[b(n,/:(plac\w+)/,":-moz-$1")]}),R(e,{props:[b(n,/:(plac\w+)/,f+"input-$1")]})],t)}return""}))}}],oe={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},se=/[A-Z]|^ms/g,ce=/_EMO_([^_]+?)_([^]*?)_EMO_/g,le=function(e){return 45===e.charCodeAt(1)},ue=function(e){return null!=e&&"boolean"!=typeof e},de=function(e){var n=Object.create(null);return function(r){return void 0===n[r]&&(n[r]=e(r)),n[r]}}((function(e){return le(e)?e:e.replace(se,"-$&").toLowerCase()})),fe=function(e,n){switch(e){case"animation":case"animationName":if("string"==typeof n)return n.replace(ce,(function(e,n,r){return he={name:n,styles:r,next:he},n}))}return 1===oe[e]||le(e)||"number"!=typeof n||0===n?n:n+"px"};function pe(e,n,r){if(null==r)return"";if(void 0!==r.__emotion_styles)return r;switch(typeof r){case"boolean":return"";case"object":if(1===r.anim)return he={name:r.name,styles:r.styles,next:he},r.name;if(void 0!==r.styles){var t=r.next;if(void 0!==t)for(;void 0!==t;)he={name:t.name,styles:t.styles,next:he},t=t.next;return r.styles+";"}return function(e,n,r){var t="";if(Array.isArray(r))for(var a=0;a<r.length;a++)t+=pe(e,n,r[a])+";";else for(var i in r){var o=r[i];if("object"!=typeof o)null!=n&&void 0!==n[o]?t+=i+"{"+n[o]+"}":ue(o)&&(t+=de(i)+":"+fe(i,o)+";");else if(!Array.isArray(o)||"string"!=typeof o[0]||null!=n&&void 0!==n[o[0]]){var s=pe(e,n,o);switch(i){case"animation":case"animationName":t+=de(i)+":"+s+";";break;default:t+=i+"{"+s+"}"}}else for(var c=0;c<o.length;c++)ue(o[c])&&(t+=de(i)+":"+fe(i,o[c])+";")}return t}(e,n,r);case"function":if(void 0!==e){var a=he,i=r(e);return he=a,pe(e,n,i)}}if(null==n)return r;var o=n[r];return void 0!==o?o:r}var he,ve=/label:\s*([^\s;\n{]+)\s*(;|$)/g,ge=function(e,n,r){if(1===e.length&&"object"==typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var t=!0,a="";he=void 0;var i=e[0];null==i||void 0===i.raw?(t=!1,a+=pe(r,n,i)):a+=i[0];for(var o=1;o<e.length;o++)a+=pe(r,n,e[o]),t&&(a+=i[o]);ve.lastIndex=0;for(var s,c="";null!==(s=ve.exec(a));)c+="-"+s[1];var l=function(e){for(var n,r=0,t=0,a=e.length;a>=4;++t,a-=4)n=1540483477*(65535&(n=255&e.charCodeAt(t)|(255&e.charCodeAt(++t))<<8|(255&e.charCodeAt(++t))<<16|(255&e.charCodeAt(++t))<<24))+(59797*(n>>>16)<<16),r=1540483477*(65535&(n^=n>>>24))+(59797*(n>>>16)<<16)^1540483477*(65535&r)+(59797*(r>>>16)<<16);switch(a){case 3:r^=(255&e.charCodeAt(t+2))<<16;case 2:r^=(255&e.charCodeAt(t+1))<<8;case 1:r=1540483477*(65535&(r^=255&e.charCodeAt(t)))+(59797*(r>>>16)<<16)}return(((r=1540483477*(65535&(r^=r>>>13))+(59797*(r>>>16)<<16))^r>>>15)>>>0).toString(36)}(a)+c;return{name:l,styles:a,next:he}};function me(e,n,r){var t="";return r.split(" ").forEach((function(r){void 0!==e[r]?n.push(e[r]+";"):t+=r+" "})),t}var be=function(e,n,r){!function(e,n,r){var t=e.key+"-"+n.name;!1===r&&void 0===e.registered[t]&&(e.registered[t]=n.styles)}(e,n,r);var t=e.key+"-"+n.name;if(void 0===e.inserted[n.name]){var a=n;do{e.insert(n===a?"."+t:"",a,e.sheet,!0),a=a.next}while(void 0!==a)}};function xe(e,n){if(void 0===e.inserted[n.name])return e.insert("",n,e.sheet,!0)}function ye(e,n,r){var t=[],a=me(e,t,r);return t.length<2?r:a+n(t)}var we,ke,je,Ce,$e,Ae=function e(n){for(var r="",t=0;t<n.length;t++){var a=n[t];if(null!=a){var i=void 0;switch(typeof a){case"boolean":break;case"object":if(Array.isArray(a))i=e(a);else for(var o in i="",a)a[o]&&o&&(i&&(i+=" "),i+=o);break;default:i=a}i&&(r&&(r+=" "),r+=i)}}return r},Ze=function(e){var n=function(e){var n=e.key;if("css"===n){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,(function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))}))}var t=e.stylisPlugins||ie;var a,i,o={},s=[];a=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),(function(e){for(var n=e.getAttribute("data-emotion").split(" "),r=1;r<n.length;r++)o[n[r]]=!0;s.push(e)}));var c,l,u=[ee,(l=function(e){c.insert(e)},function(e){e.root||(e=e.return)&&l(e)})],f=function(e){var n=j(e);return function(r,t,a,i){for(var o="",s=0;s<n;s++)o+=e[s](r,t,a,i)||"";return o}}([te,ae].concat(t,u));i=function(e,n,r,t){c=r,Y(J(e?e+"{"+n.styles+"}":n.styles),f),t&&(p.inserted[n.name]=!0)};var p={key:n,sheet:new d({key:n,container:a,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:o,registered:{},insert:i};return p.sheet.hydrate(s),p}({key:"css"});n.sheet.speedy=function(e){this.isSpeedy=e},n.compat=!0;var r=function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];var a=ge(r,n.registered,void 0);return be(n,a,!1),n.key+"-"+a.name};return{css:r,cx:function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return ye(n.registered,r,Ae(t))},injectGlobal:function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];var a=ge(r,n.registered);xe(n,a)},keyframes:function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];var a=ge(r,n.registered),i="animation-"+a.name;return xe(n,{name:a.name,styles:"@keyframes "+i+"{"+a.styles+"}"}),i},hydrate:function(e){e.forEach((function(e){n.inserted[e]=!0}))},flush:function(){n.registered={},n.inserted={},n.sheet.flush()},sheet:n.sheet,cache:n,getRegisteredStyles:me.bind(null,n.registered),merge:ye.bind(null,n.registered,r)}}(),Ee=Ze.cx,Se=Ze.css,ze=Se(we||(we=u(["\n  content: '';\n  position: absolute;\n  top: 0;\n  height: var(--tree-line-height);\n  box-sizing: border-box;\n"]))),Te=Se(ke||(ke=u(["\n  display: flex;\n  padding-inline-start: 0;\n  margin: 0;\n  padding-top: var(--tree-line-height);\n  position: relative;\n\n  ::before {\n    ",";\n    left: 50%;\n    width: 0;\n    border-left: var(--tree-line-width) var(--tree-node-line-style)\n      var(--tree-line-color);\n  }\n"])),ze),Re=Se(je||(je=u(["\n  flex: auto;\n  text-align: center;\n  list-style-type: none;\n  position: relative;\n  padding: var(--tree-line-height) var(--tree-node-padding) 0\n    var(--tree-node-padding);\n"]))),_e=Se(Ce||(Ce=u(["\n  ::before,\n  ::after {\n    ",";\n    right: 50%;\n    width: 50%;\n    border-top: var(--tree-line-width) var(--tree-node-line-style)\n      var(--tree-line-color);\n  }\n  ::after {\n    left: 50%;\n    border-left: var(--tree-line-width) var(--tree-node-line-style)\n      var(--tree-line-color);\n  }\n\n  :only-of-type {\n    padding: 0;\n    ::after,\n    :before {\n      display: none;\n    }\n  }\n\n  :first-of-type {\n    ::before {\n      border: 0 none;\n    }\n    ::after {\n      border-radius: var(--tree-line-border-radius) 0 0 0;\n    }\n  }\n\n  :last-of-type {\n    ::before {\n      border-right: var(--tree-line-width) var(--tree-node-line-style)\n        var(--tree-line-color);\n      border-radius: 0 var(--tree-line-border-radius) 0 0;\n    }\n    ::after {\n      border: 0 none;\n    }\n  }\n"])),ze);function Oe(e){var n=e.children,r=e.label;return l.createElement("li",{className:Ee(Re,_e,e.className)},r,l.Children.count(n)>0&&l.createElement("ul",{className:Te},n))}function Ne(e){var n=e.children,r=e.label,t=e.lineHeight,a=void 0===t?"20px":t,i=e.lineWidth,o=void 0===i?"1px":i,s=e.lineColor,c=void 0===s?"black":s,d=e.nodePadding,f=void 0===d?"5px":d,p=e.lineStyle,h=void 0===p?"solid":p,v=e.lineBorderRadius,g=void 0===v?"5px":v;return l.createElement("ul",{className:Se($e||($e=u(["\n        padding-inline-start: 0;\n        margin: 0;\n        display: flex;\n\n        --line-height: ",";\n        --line-width: ",";\n        --line-color: ",";\n        --line-border-radius: ",";\n        --line-style: ",";\n        --node-padding: ",";\n\n        --tree-line-height: var(--line-height, 20px);\n        --tree-line-width: var(--line-width, 1px);\n        --tree-line-color: var(--line-color, black);\n        --tree-line-border-radius: var(--line-border-radius, 5px);\n        --tree-node-line-style: var(--line-style, solid);\n        --tree-node-padding: var(--node-padding, 5px);\n      "])),a,o,c,g,h,f)},l.createElement(Oe,{label:r},n))}var We=r(2734),Ie=r(52809),Pe=r(41796),De=r(26447),Fe=r(87952),Ge=r(66242),Me=r(87357),qe=r(15861),Be=r(41451);function Le(e){var n=e.node,r=e.depth,a=e.length,i=e.sx,s=(0,We.Z)(),c=function(e){return{color:s.palette[e].darker,bgcolor:(0,Pe.Fq)(s.palette[e].main,.08),border:"solid 1px ".concat((0,Pe.Fq)(s.palette[e].main,.24))}},l=1===r,u="root"===n.group,d="product design"===n.group,f="development"===n.group,p="marketing"===n.group;return(0,o.jsxs)(De.Z,{sx:{position:"relative",display:"inline-flex"},alignItems:"center",children:[!l&&(0,o.jsx)(Fe.Z,{alt:n.name,src:n.avatar||"",sx:{mt:-3.5,zIndex:9,width:56,height:56,position:"absolute",border:"solid 4px ".concat(s.palette.background.paper)}}),(0,o.jsxs)(Ge.Z,{sx:(0,t.Z)({pt:5,pb:3,minWidth:200,borderRadius:1.5,textTransform:"capitalize"},l&&{py:2},l&&d&&c("primary"),l&&f&&c("info"),l&&p&&c("warning"),i),children:[1!==r&&!u&&(0,o.jsx)(Me.Z,{sx:(0,t.Z)({top:0,left:0,width:1,height:4,position:"absolute",borderRadius:1.5},d&&{bgcolor:"primary.light"},f&&{bgcolor:"info.light"},p&&{bgcolor:"warning.light"})}),(0,o.jsxs)(qe.Z,{variant:l?"subtitle1":"subtitle2",noWrap:!0,children:[n.name,l&&(0,o.jsx)(Be.Z,{color:(f?"info":p&&"warning")||"primary",sx:{ml:1},children:a})]}),!l&&(0,o.jsx)(qe.Z,{variant:"caption",component:"div",noWrap:!0,sx:{color:"text.secondary"},children:n.role})]})]})}function He(e){var n=e.node,r=e.sx;return(0,o.jsx)(Ge.Z,{sx:(0,t.Z)({p:2,boxShadow:0,borderRadius:1.5,display:"inline-flex",color:"primary.darker",textTransform:"capitalize",bgcolor:function(e){return(0,Pe.Fq)(e.palette.primary.main,.08)},border:function(e){return"1px solid ".concat((0,Pe.Fq)(e.palette.primary.main,.24))}},r),children:(0,o.jsx)(qe.Z,{variant:"subtitle2",children:n.name})})}Le.propTypes={depth:c().number,length:c().number,node:c().shape({avatar:c().string,group:c().string,name:c().string,role:c().string}),sx:c().object},He.propTypes={node:c().shape({name:c().string}),sx:c().object};var Je=r(93946),Ke=r(18972),Qe=r(34444),Ue=r(84818);function Ve(e){var n=e.node,r=e.onEdit,a=e.onDelete,i=e.sx,s=(0,l.useState)(null),c=s[0],u=s[1],d=function(){u(null)};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(Ge.Z,{sx:(0,t.Z)({p:2,minWidth:200,borderRadius:1.5,textAlign:"left",position:"relative",display:"inline-flex",flexDirection:"column",textTransform:"capitalize"},i),children:[(0,o.jsx)(Je.Z,{onClick:function(e){u(e.currentTarget)},sx:{position:"absolute",top:8,right:8},children:(0,o.jsx)(Qe.Z,{icon:"eva:more-horizontal-fill",width:20,height:20})}),(0,o.jsx)(Fe.Z,{alt:n.name,src:n.avatar||"",sx:{mr:2,mb:1,width:48,height:48}}),(0,o.jsx)(qe.Z,{variant:"subtitle2",noWrap:!0,children:n.name}),(0,o.jsx)(qe.Z,{variant:"caption",component:"div",noWrap:!0,sx:{color:"text.secondary"},children:n.role})]}),(0,o.jsxs)(Ue.Z,{open:Boolean(c),anchorEl:c,onClose:d,anchorOrigin:{vertical:"center",horizontal:"right"},transformOrigin:{vertical:"center",horizontal:"left"},arrow:"left-center",sx:{width:160,"& .MuiMenuItem-root":{px:1,typography:"body2",borderRadius:.75,"& svg":{mr:2,width:20,height:20}}},children:[a&&(0,o.jsxs)(Ke.Z,{onClick:function(){d(),a()},sx:{color:"error.main"},children:[(0,o.jsx)(Qe.Z,{icon:"eva:trash-2-outline"}),"Delete"]}),r&&(0,o.jsxs)(Ke.Z,{onClick:function(){d(),r()},children:[(0,o.jsx)(Qe.Z,{icon:"eva:edit-fill"}),"Edit"]})]})]})}function Xe(e){var n=e.data,r=e.option,s=void 0===r?"simple":r,c=e.sx,l=(0,i.Z)(e,["data","option","sx"]),u=(0,We.Z)();return(0,o.jsx)(Ne,(0,a.Z)((0,t.Z)({lineWidth:"1.5px",nodePadding:"4px",lineBorderRadius:"24px",lineColor:u.palette.divider,label:"simple"===s&&(0,o.jsx)(He,{sx:c,node:n})||"standard"===s&&(0,o.jsx)(Ve,{sx:c,node:n})||"group"===s&&(0,o.jsx)(Le,{sx:c,node:n})},l),{children:n.children.map((function(e){return(0,o.jsx)(Ye,{depth:1,data:e,option:s,sx:c},e.name)}))}))}function Ye(e){var n,r=e.data,t=e.depth,a=e.option,i=e.sx,s=r.children&&!!r.children;return(0,o.jsx)(Oe,{label:"simple"===a&&(0,o.jsx)(He,{sx:i,node:r})||"standard"===a&&(0,o.jsx)(Ve,{sx:i,node:r,onEdit:function(){return console.log("EDIT",r.name)},onDelete:function(){return console.log("DELETE",r.name)}})||"group"===a&&(0,o.jsx)(Le,{sx:i,node:r,depth:t,length:null===(n=(0,Ie.Z)(r.children,"children"))||void 0===n?void 0:n.length}),children:s&&(0,o.jsx)(en,{data:r.children,depth:t,option:a,sx:i})})}function en(e){var n=e.data,r=e.depth,t=e.option,a=e.sx;return(0,o.jsx)(o.Fragment,{children:n.map((function(e){return(0,o.jsx)(Ye,{data:e,depth:r+1,option:t,sx:a},e.name)}))})}Ve.propTypes={node:c().shape({avatar:c().string,name:c().string,role:c().string}),onDelete:c().func,onEdit:c().func,sx:c().object},Xe.propTypes={data:c().object,option:c().string,sx:c().object},Ye.propTypes={data:c().object,depth:c().number,option:c().string,sx:c().object},en.propTypes={data:c().object,depth:c().number,option:c().string,sx:c().object}}}]);