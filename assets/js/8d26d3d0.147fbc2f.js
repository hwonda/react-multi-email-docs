"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[617],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=n.createContext({}),c=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(a),d=l,f=m["".concat(o,".").concat(d)]||m[d]||p[d]||i;return a?n.createElement(f,r(r({ref:t},u),{},{components:a})):n.createElement(f,r({ref:t},u))}));function f(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,r=new Array(i);r[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[m]="string"==typeof e?e:l,r[1]=s;for(var c=2;c<i;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2113:(e,t,a)=>{a.d(t,{Q:()=>f});const n={requireTld:!0,allowUnderscores:!1,allowTrailingDot:!1},l={allowDisplayName:!1,requireDisplayName:!1,allowUtf8LocalPart:!0,requireTld:!0},i=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\,\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF\s]*<(.+)>$/i,r=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i,s=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i,o=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i,c=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i;function u(e,t){let a,n=0;const l=encodeURI(e).split(/%..|./).length-1;return t&&(n=Number(t.min)||0,a=Number(t.max)),l>=n&&(void 0===a||l<=a)}function m(e,t){if((t={...l,...t}).requireDisplayName||t.allowDisplayName){const a=e.match(i);if(a)e=a[1];else if(t.requireDisplayName)return!1}const a=e.split("@"),m=""+a.pop(),p=m.toLowerCase();let d=a.join("@");if("gmail.com"!==p&&"googlemail.com"!==p||(d=d.replace(/\./g,"").toLowerCase()),!u(d,{max:64})||!u(m,{max:254}))return!1;if(!function(e,t){(t={...n,...t}).allowTrailingDot&&"."===e[e.length-1]&&(e=e.substring(0,e.length-1));const a=e.split(".");if(t.requireTld){const e=""+a.pop();if(!a.length||!/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(e))return!1;if(/[\s\u2002-\u200B\u202F\u205F\u3000\uFEFF\uDB40\uDC20]/.test(e))return!1}for(let n,l=0;l<a.length;l++){if(n=a[l],t.allowUnderscores&&(n=n.replace(/_/g,"")),!/^[a-z\u00a1-\uffff0-9-]+$/i.test(n))return!1;if(/[\uff01-\uff5e]/.test(n))return!1;if("-"===n[0]||"-"===n[n.length-1])return!1}return!0}(m,{requireTld:t.requireTld}))return!1;if('"'===d[0])return d=d.slice(1,d.length-1),t.allowUtf8LocalPart?c.test(d):s.test(d);const f=t.allowUtf8LocalPart?o:r,g=d.split(".");for(let n=0;n<g.length;n++)if(!f.test(g[n]))return!1;return!0}var p=a(7294);const d=e=>{if(void 0===e)return[];return e.filter((e=>m(e)))};function f(e){const{id:t,style:a,className:n="",noClass:l,placeholder:i,autoFocus:r,allowDisplayName:s=!1,stripDisplayName:o=!1,allowDuplicate:c=!1,delimiter:u=`[${s?"":" "},;]`,initialInputValue:f="",inputClassName:g,autoComplete:y,getLabel:h,enable:b,onDisabled:x,validateEmail:v,onChange:k,onChangeInput:F,onFocus:N,onBlur:C,onKeyDown:w,onKeyUp:D,spinner:E,disableOnBlurValidation:O=!1}=e,P=p.useRef(null),[T,j]=p.useState(!1),[S,$]=p.useState([]),[R,A]=p.useState(f),[_,I]=p.useState(!1),L=p.useCallback((async(e,t)=>{const a=[];let n="";const l=new RegExp(u,"g"),i=v||m,r=e=>{if(!c)for(let t=0,a=S.length;t<a;t++)if(S[t]===e)return!1;return a.push(e),!0};if(""!==e)if(l.test(e)){const t=[...new Set(e.split(l).filter((e=>e)))];do{const a=i(""+t[0].trim());if("boolean"==typeof a)if(a)r(""+t.shift());else if(s){if(i(""+t[0].trim(),{allowDisplayName:s})){r(""+(o?t.shift()?.split("<")[1].split(">")[0]:t.shift()))}else 1===t.length?n=""+t.shift():t.shift()}else n=""+t.shift();else I(!0),!0===await(v?.(e))?(r(""+t.shift()),I(!1)):1===t.length?n=""+t.shift():t.shift()}while(t.length)}else{if(b&&!b({emailCnt:S.length}))return void x?.();if(t){const t=i(e);if("boolean"==typeof t)if(t)r(e);else if(s){if(i(e,{allowDisplayName:s})){r(o?e.split("<")[1].split(">")[0]:e)}else n=e}else n=e;else I(!0),!0===await(v?.(e))?(r(e),I(!1)):n=e}else n=e}$([...S,...a]),A(n),a.length&&k?.([...S,...a]),n!=n&&F?.(n)}),[s,c,u,S,b,k,F,x,o,v]),M=p.useCallback((async e=>{await L(e),F?.(e)}),[L,F]),q=p.useCallback(((e,t)=>{if(t)return;const a=[...S.slice(0,e),...S.slice(e+1)];$(a),k?.(a)}),[S,k]),U=p.useCallback((e=>{switch(w?.(e),e.key){case"Enter":e.preventDefault();break;case"Backspace":e.currentTarget.value||q(S.length-1,!1)}}),[S.length,w,q]),z=p.useCallback((async e=>{if(D?.(e),"Enter"===e.key)await L(e.currentTarget.value,!0)}),[L,D]),B=p.useCallback((async e=>await M(e.currentTarget.value)),[M]),K=p.useCallback((async e=>{j(!1),O||await L(e.currentTarget.value,!0),C?.()}),[O,L,C]),Z=p.useCallback((()=>{j(!0),N?.()}),[N]);return p.useEffect((()=>{$(d(e.emails))}),[e.emails]),p.createElement("div",{className:`${n} ${l?"":"react-multi-email"} ${T?"focused":""} ${""===R&&0===S.length?"empty":""}`,style:a,onClick:()=>P.current?.focus()},_&&E?.(),i?p.createElement("span",{"data-placeholder":!0},i):null,p.createElement("div",{className:"data-labels",style:{opacity:_?.45:1,display:"contents",flexWrap:"inherit"}},S.map(((e,t)=>h(e,t,q)))),p.createElement("input",{id:t,style:{opacity:_?.45:1},ref:P,type:"text",value:R,onFocus:Z,onBlur:K,onChange:B,onKeyDown:U,onKeyUp:z,autoFocus:r,className:g,autoComplete:y}))}},2089:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>y,frontMatter:()=>c,metadata:()=>m,toc:()=>d});var n=a(7462),l=a(7294),i=a(3905),r=a(2113);function s(){const[e,t]=l.useState([]);return l.createElement("div",{style:o},l.createElement("h3",null,"react-multi-email"),l.createElement(r.Q,{className:"customClassName",placeholder:"Input your Email Address",emails:e,onChange:e=>{t(e)},getLabel:(e,t,a)=>l.createElement("div",{"data-tag":!0,key:t},e,l.createElement("span",{"data-tag-handle":!0,onClick:()=>a(t)},"\xd7"))}),l.createElement("h4",null,"react-multi-email value"),l.createElement("p",null,e.join(", ")||"empty"))}const o={fontFamily:"sans-serif",width:"500px",border:"1px solid rgb(238, 238, 238)",background:"rgb(243, 243, 243)",padding:"25px",margin:"20px",color:"black"},c={sidebar_position:7,description:"add custom class name to the root <div> element"},u=void 0,m={unversionedId:"Props/className",id:"version-1.0.16/Props/className",title:"className",description:"add custom class name to the root <div> element",source:"@site/versioned_docs/version-1.0.16/Props/className.mdx",sourceDirName:"Props",slug:"/Props/className",permalink:"/react-multi-email-docs/docs/Props/className",draft:!1,tags:[],version:"1.0.16",sidebarPosition:7,frontMatter:{sidebar_position:7,description:"add custom class name to the root <div> element"},sidebar:"tutorialSidebar",previous:{title:"id",permalink:"/react-multi-email-docs/docs/Props/id"},next:{title:"noClass",permalink:"/react-multi-email-docs/docs/Props/noClass"}},p={},d=[{value:"About className",id:"about-classname",level:2},{value:"Demo",id:"demo",level:2},{value:"Result",id:"result",level:2},{value:"Code",id:"code",level:2},{value:"Whole code",id:"whole-code",level:3},{value:"Specific code",id:"specific-code",level:3}],f={toc:d},g="wrapper";function y(e){let{components:t,...l}=e;return(0,i.kt)(g,(0,n.Z)({},f,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"className")," prop is used to provide an ",(0,i.kt)("strong",{parentName:"p"},"additional CSS class name")," to the ",(0,i.kt)("strong",{parentName:"p"},"root ",(0,i.kt)("inlineCode",{parentName:"strong"},"div")," element")," of the component.\nBy doing so, you can easily modify the style of the component externally."),(0,i.kt)("h2",{id:"about-classname"},"About className"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Property: ",(0,i.kt)("inlineCode",{parentName:"li"},"className")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," "),(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"''"))),(0,i.kt)("h2",{id:"demo"},"Demo"),(0,i.kt)(s,{mdxType:"ClassName"}),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Open developer mode and check class name.",(0,i.kt)("br",null),"\nYou can see that the class name is given as shown in the picture below.")),(0,i.kt)("h2",{id:"result"},"Result"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"My Image",src:a(7141).Z,width:"722",height:"34"})),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"If the text area is empty, the ",(0,i.kt)("inlineCode",{parentName:"p"},"div")," element will have the class name ",(0,i.kt)("inlineCode",{parentName:"p"},"empty"),".")),(0,i.kt)("h2",{id:"code"},"Code"),(0,i.kt)("h3",{id:"whole-code"},"Whole code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="className.tsx"',title:'"className.tsx"'},'import * as React from \'react\';\nimport { ReactMultiEmail } from \'react-multi-email\';\nimport \'react-multi-email/dist/style.css\';\n\nexport default function multiEmail () {\n  const [emails, setEmails] = React.useState<string[]>([]);\n  \n  return (\n    <div style={styles}>\n      <h3>react-multi-email</h3>\n      <ReactMultiEmail\n        // className prop\n        className="customClassName"\n        placeholder="Input your Email Address"\n        emails={emails}\n        onChange={(_emails: string[]) => {\n          setEmails(_emails);\n        }}\n        getLabel={(\n          email: string,\n          index: number,\n          removeEmail: (index: number) => void\n        ) => {\n          return (\n            <div data-tag key={index}>\n              {email}\n              <span data-tag-handle onClick={() => removeEmail(index)}>\n                \xd7\n              </span>\n            </div>\n          );\n        }}\n      />\n      <h4>react-multi-email value</h4>\n      <p>{emails.join(", ") || "empty"}</p>\n    </div>\n  );\n}\n\nconst styles = {\n  fontFamily: "sans-serif",\n  width: "500px",\n  border: "1px solid rgb(238, 238, 238)",\n  background: "rgb(243, 243, 243)",\n  padding: "25px",\n  margin: "20px",\n  color: "black",\n};\n\n')),(0,i.kt)("h3",{id:"specific-code"},"Specific code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="onDisabled.tsx"',title:'"onDisabled.tsx"'},'<ReactMultiEmail\n  className="customClassName"\n/>\n')))}y.isMDXComponent=!0},7141:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/className-81768542209ac31e90074edbd8b976c1.png"}}]);