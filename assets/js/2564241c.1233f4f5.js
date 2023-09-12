"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7369],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var l=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=l.createContext({}),s=function(e){var t=l.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return l.createElement(u.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,m=p["".concat(u,".").concat(d)]||p[d]||f[d]||a;return n?l.createElement(m,i(i({ref:t},c),{},{components:n})):l.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<a;s++)i[s]=n[s];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7006:(e,t,n)=>{n.d(t,{Q:()=>m});var l=n(7294);const r={requireTld:!0,allowUnderscores:!1,allowTrailingDot:!1},a={allowDisplayName:!1,requireDisplayName:!1,allowUtf8LocalPart:!0,requireTld:!0},i=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\,\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF\s]*<(.+)>$/i,o=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i,u=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i,s=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i,c=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i;function p(e,t){let n,l=0;const r=encodeURI(e).split(/%..|./).length-1;return t&&(l=Number(t.min)||0,n=Number(t.max)),r>=l&&(void 0===n||r<=n)}function f(e,t){if((t={...a,...t}).requireDisplayName||t.allowDisplayName){const n=e.match(i);if(n)e=n[1];else if(t.requireDisplayName)return!1}const n=e.split("@"),l=""+n.pop(),f=l.toLowerCase();let d=n.join("@");if("gmail.com"!==f&&"googlemail.com"!==f||(d=d.replace(/\./g,"").toLowerCase()),!p(d,{max:64})||!p(l,{max:254}))return!1;if(!function(e,t){(t={...r,...t}).allowTrailingDot&&"."===e[e.length-1]&&(e=e.substring(0,e.length-1));const n=e.split(".");if(t.requireTld){const e=""+n.pop();if(!n.length||!/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(e))return!1;if(/[\s\u2002-\u200B\u202F\u205F\u3000\uFEFF\uDB40\uDC20]/.test(e))return!1}for(let l,r=0;r<n.length;r++){if(l=n[r],t.allowUnderscores&&(l=l.replace(/_/g,"")),!/^[a-z\u00a1-\uffff0-9-]+$/i.test(l))return!1;if(/[\uff01-\uff5e]/.test(l))return!1;if("-"===l[0]||"-"===l[l.length-1])return!1}return!0}(l,{requireTld:t.requireTld}))return!1;if('"'===d[0])return d=d.slice(1,d.length-1),t.allowUtf8LocalPart?c.test(d):u.test(d);const m=t.allowUtf8LocalPart?s:o,y=d.split(".");for(let r=0;r<y.length;r++)if(!m.test(y[r]))return!1;return!0}const d=e=>{if(void 0===e)return[];return e.filter((e=>f(e)))};function m(e){const{id:t,style:n,className:r="",noClass:a,placeholder:i,autoFocus:o,allowDisplayName:u=!1,stripDisplayName:s=!1,allowDuplicate:c=!1,delimiter:p=`[${u?"":" "},;]`,initialInputValue:m="",inputClassName:y,autoComplete:g,getLabel:b,enable:F,onDisabled:x,validateEmail:h,onChange:v,onChangeInput:k,onFocus:w,onBlur:D,onKeyDown:C,onKeyUp:E,spinner:O,disableOnBlurValidation:N=!1}=e,P=l.useRef(null),[T,B]=l.useState(!1),[j,$]=l.useState([]),[S,R]=l.useState(m),[q,L]=l.useState(!1),M=l.useCallback((async(e,t)=>{const n=[];let l="";const r=new RegExp(p,"g"),a=h||f,i=e=>{if(!c)for(let t=0,n=j.length;t<n;t++)if(j[t]===e)return!1;return n.push(e),!0};if(""!==e)if(r.test(e)){const t=[...new Set(e.split(r).filter((e=>e)))];do{const n=a(""+t[0]);if("boolean"==typeof n)if(n)i(""+t.shift());else if(1===t.length)if(u){if(a(""+t[0],{allowDisplayName:u})){i(""+(s?t.shift()?.split("<")[1].split(">")[0]:t.shift()))}else 1===t.length?l=""+t.shift():t.shift()}else l=""+t.shift();else t.shift();else L(!0),!0===await(h?.(e))?(i(""+t.shift()),L(!1)):1===t.length?l=""+t.shift():t.shift()}while(t.length)}else{if(F&&!F({emailCnt:j.length}))return void x?.();if(t){const t=a(e);if("boolean"==typeof t)if(t)i(e);else if(u){if(a(e,{allowDisplayName:u})){i(s?e.split("<")[1].split(">")[0]:e)}else l=e}else l=e;else L(!0),!0===await(h?.(e))?(i(e),L(!1)):l=e}else l=e}$([...j,...n]),R(l),n.length&&v?.([...j,...n]),l!=l&&k?.(l)}),[u,c,p,j,F,v,k,x,s,h]),U=l.useCallback((async e=>{await M(e),k?.(e)}),[M,k]),_=l.useCallback(((e,t)=>{if(t)return;const n=[...j.slice(0,e),...j.slice(e+1)];$(n),v?.(n)}),[j,v]),z=l.useCallback((e=>{switch(C?.(e),e.key){case"Enter":e.preventDefault();break;case"Backspace":e.currentTarget.value||_(j.length-1,!1)}}),[j.length,C,_]),A=l.useCallback((async e=>{if(E?.(e),"Enter"===e.key)await M(e.currentTarget.value,!0)}),[M,E]),I=l.useCallback((async e=>await U(e.currentTarget.value)),[U]),V=l.useCallback((async e=>{B(!1),N||await M(e.currentTarget.value,!0),D?.()}),[N,M,D]),K=l.useCallback((()=>{B(!0),w?.()}),[w]);return l.useEffect((()=>{$(d(e.emails))}),[e.emails]),l.createElement("div",{className:`${r} ${a?"":"react-multi-email"} ${T?"focused":""} ${""===S&&0===j.length?"empty":""}`,style:n,onClick:()=>P.current?.focus()},q&&O?.(),i?l.createElement("span",{"data-placeholder":!0},i):null,l.createElement("div",{className:"data-labels",style:{opacity:q?.45:1,display:"contents",flexWrap:"inherit"}},j.map(((e,t)=>b(e,t,_)))),l.createElement("input",{id:t,style:{opacity:q?.45:1},ref:P,type:"text",value:S,onFocus:K,onBlur:V,onChange:I,onKeyDown:z,onKeyUp:A,autoFocus:o,className:y,autoComplete:g}))}},5543:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>c,default:()=>g,frontMatter:()=>s,metadata:()=>p,toc:()=>d});var l=n(7462),r=n(7294),a=n(3905),i=n(7006);const o={fontFamily:"sans-serif",width:"500px",border:"1px solid rgb(238, 238, 238)",background:"rgb(243, 243, 243)",padding:"25px",margin:"20px",color:"black"};function u(){const[e,t]=r.useState([]),[n,l]=r.useState(o.background),a={...o,background:n};return r.createElement("div",{style:a},r.createElement("h3",null,"react-multi-email"),r.createElement(i.Q,{placeholder:"Input your Email Address",onFocus:()=>{l("#c32424")},onBlur:()=>{l(o.background)},emails:e,onChange:e=>{t(e)},getLabel:(e,t,n)=>r.createElement("div",{"data-tag":!0,key:t},e,r.createElement("span",{"data-tag-handle":!0,onClick:()=>n(t)},"\xd7"))}),r.createElement("br",null),r.createElement("h4",null,"react-multi-email value"),r.createElement("p",null,e.join(", ")||"empty"))}const s={sidebar_position:4},c=void 0,p={unversionedId:"Props/onBlur",id:"version-1.0.16/Props/onBlur",title:"onBlur",description:"Value",source:"@site/versioned_docs/version-1.0.16/Props/onBlur.mdx",sourceDirName:"Props",slug:"/Props/onBlur",permalink:"/react-multi-email-docs/docs/Props/onBlur",draft:!1,tags:[],version:"1.0.16",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"OnFocus",permalink:"/react-multi-email-docs/docs/Props/OnFocus"},next:{title:"Tutorial - Basics",permalink:"/react-multi-email-docs/docs/category/tutorial---basics"}},f={},d=[{value:"Value",id:"value",level:2},{value:"Result",id:"result",level:2},{value:"Code",id:"code",level:2}],m={toc:d},y="wrapper";function g(e){let{components:t,...n}=e;return(0,a.kt)(y,(0,l.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"value"},"Value"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Property: ",(0,a.kt)("inlineCode",{parentName:"li"},"onBlur"),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},"default: ",(0,a.kt)("inlineCode",{parentName:"li"},"None"),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},"type: ",(0,a.kt)("inlineCode",{parentName:"li"},"() => void;"))),(0,a.kt)("h2",{id:"result"},"Result"),(0,a.kt)(u,{mdxType:"OnBlur"}),(0,a.kt)("h2",{id:"code"},"Code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="ReactMultiEmail.tsx"',title:'"ReactMultiEmail.tsx"'},"const [background, setBackground] = React.useState(styles.background);\n\nconst onBlurFunc = () => {\nsetBackground(styles.background);\n}\n\nconst combinedStyles = {\n...styles,\nbackground: background\n};\n\nreturn(<>\n<div style={combinedStyles}>\n    <ReactMultiEmail\n        onBlur={onBlurFunc}\n    />\n</div>\n</>);\n")))}g.isMDXComponent=!0}}]);