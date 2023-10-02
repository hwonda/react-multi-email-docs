"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[228],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2113:(e,t,n)=>{n.d(t,{Q:()=>f});const a={requireTld:!0,allowUnderscores:!1,allowTrailingDot:!1},r={allowDisplayName:!1,requireDisplayName:!1,allowUtf8LocalPart:!0,requireTld:!0},o=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\,\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF\s]*<(.+)>$/i,l=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i,i=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i,s=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i,u=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i;function c(e,t){let n,a=0;const r=encodeURI(e).split(/%..|./).length-1;return t&&(a=Number(t.min)||0,n=Number(t.max)),r>=a&&(void 0===n||r<=n)}function p(e,t){if((t={...r,...t}).requireDisplayName||t.allowDisplayName){const n=e.match(o);if(n)e=n[1];else if(t.requireDisplayName)return!1}const n=e.split("@"),p=""+n.pop(),d=p.toLowerCase();let m=n.join("@");if("gmail.com"!==d&&"googlemail.com"!==d||(m=m.replace(/\./g,"").toLowerCase()),!c(m,{max:64})||!c(p,{max:254}))return!1;if(!function(e,t){(t={...a,...t}).allowTrailingDot&&"."===e[e.length-1]&&(e=e.substring(0,e.length-1));const n=e.split(".");if(t.requireTld){const e=""+n.pop();if(!n.length||!/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(e))return!1;if(/[\s\u2002-\u200B\u202F\u205F\u3000\uFEFF\uDB40\uDC20]/.test(e))return!1}for(let a,r=0;r<n.length;r++){if(a=n[r],t.allowUnderscores&&(a=a.replace(/_/g,"")),!/^[a-z\u00a1-\uffff0-9-]+$/i.test(a))return!1;if(/[\uff01-\uff5e]/.test(a))return!1;if("-"===a[0]||"-"===a[a.length-1])return!1}return!0}(p,{requireTld:t.requireTld}))return!1;if('"'===m[0])return m=m.slice(1,m.length-1),t.allowUtf8LocalPart?u.test(m):i.test(m);const f=t.allowUtf8LocalPart?s:l,g=m.split(".");for(let a=0;a<g.length;a++)if(!f.test(g[a]))return!1;return!0}var d=n(7294);const m=e=>{if(void 0===e)return[];return e.filter((e=>p(e)))};function f(e){const{id:t,style:n,className:a="",noClass:r,placeholder:o,autoFocus:l,allowDisplayName:i=!1,stripDisplayName:s=!1,allowDuplicate:u=!1,delimiter:c=`[${i?"":" "},;]`,initialInputValue:f="",inputClassName:g,autoComplete:F,getLabel:b,enable:h,onDisabled:y,validateEmail:x,onChange:k,onChangeInput:v,onFocus:w,onBlur:D,onKeyDown:C,onKeyUp:E,spinner:N,disableOnBlurValidation:O=!1}=e,P=d.useRef(null),[T,j]=d.useState(!1),[S,$]=d.useState([]),[R,B]=d.useState(f),[A,_]=d.useState(!1),L=d.useCallback((async(e,t)=>{const n=[];let a="";const r=new RegExp(c,"g"),o=x||p,l=e=>{if(!u)for(let t=0,n=S.length;t<n;t++)if(S[t]===e)return!1;return n.push(e),!0};if(""!==e)if(r.test(e)){const t=[...new Set(e.split(r).filter((e=>e)))];do{const n=o(""+t[0].trim());if("boolean"==typeof n)if(n)l(""+t.shift());else if(i){if(o(""+t[0].trim(),{allowDisplayName:i})){l(""+(s?t.shift()?.split("<")[1].split(">")[0]:t.shift()))}else 1===t.length?a=""+t.shift():t.shift()}else a=""+t.shift();else _(!0),!0===await(x?.(e))?(l(""+t.shift()),_(!1)):1===t.length?a=""+t.shift():t.shift()}while(t.length)}else{if(h&&!h({emailCnt:S.length}))return void y?.();if(t){const t=o(e);if("boolean"==typeof t)if(t)l(e);else if(i){if(o(e,{allowDisplayName:i})){l(s?e.split("<")[1].split(">")[0]:e)}else a=e}else a=e;else _(!0),!0===await(x?.(e))?(l(e),_(!1)):a=e}else a=e}$([...S,...n]),B(a),n.length&&k?.([...S,...n]),a!=a&&v?.(a)}),[i,u,c,S,h,k,v,y,s,x]),q=d.useCallback((async e=>{await L(e),v?.(e)}),[L,v]),M=d.useCallback(((e,t)=>{if(t)return;const n=[...S.slice(0,e),...S.slice(e+1)];$(n),k?.(n)}),[S,k]),U=d.useCallback((e=>{switch(C?.(e),e.key){case"Enter":e.preventDefault();break;case"Backspace":e.currentTarget.value||M(S.length-1,!1)}}),[S.length,C,M]),z=d.useCallback((async e=>{if(E?.(e),"Enter"===e.key)await L(e.currentTarget.value,!0)}),[L,E]),I=d.useCallback((async e=>await q(e.currentTarget.value)),[q]),K=d.useCallback((async e=>{j(!1),O||await L(e.currentTarget.value,!0),D?.()}),[O,L,D]),X=d.useCallback((()=>{j(!0),w?.()}),[w]);return d.useEffect((()=>{$(m(e.emails))}),[e.emails]),d.createElement("div",{className:`${a} ${r?"":"react-multi-email"} ${T?"focused":""} ${""===R&&0===S.length?"empty":""}`,style:n,onClick:()=>P.current?.focus()},A&&N?.(),o?d.createElement("span",{"data-placeholder":!0},o):null,d.createElement("div",{className:"data-labels",style:{opacity:A?.45:1,display:"contents",flexWrap:"inherit"}},S.map(((e,t)=>b(e,t,M)))),d.createElement("input",{id:t,style:{opacity:A?.45:1},ref:P,type:"text",value:R,onFocus:X,onBlur:K,onChange:I,onKeyDown:U,onKeyUp:z,autoFocus:l,className:g,autoComplete:F}))}},1135:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>F,frontMatter:()=>u,metadata:()=>p,toc:()=>m});var a=n(7462),r=n(7294),o=n(3905),l=n(2113);function i(){const[e,t]=r.useState([]),[n,a]=r.useState(s.background),o={...s,background:n};return r.createElement("div",{style:o},r.createElement("h3",null,"react-multi-email"),r.createElement(l.Q,{placeholder:"Input your Email Address",onFocus:()=>{a("#c32424")},emails:e,onChange:e=>{t(e)},getLabel:(e,t,n)=>r.createElement("div",{"data-tag":!0,key:t},e,r.createElement("span",{"data-tag-handle":!0,onClick:()=>n(t)},"\xd7"))}),r.createElement("h4",null,"react-multi-email value"),r.createElement("p",null,e.join(", ")||"empty"))}const s={fontFamily:"sans-serif",width:"500px",border:"1px solid rgb(238, 238, 238)",background:"rgb(243, 243, 243)",padding:"25px",margin:"20px",color:"black"},u={sidebar_position:10,description:"Run function when focused in the text area"},c=void 0,p={unversionedId:"Props/onFocus",id:"version-1.0.16/Props/onFocus",title:"onFocus",description:"Run function when focused in the text area",source:"@site/versioned_docs/version-1.0.16/Props/onFocus.mdx",sourceDirName:"Props",slug:"/Props/onFocus",permalink:"/react-multi-email-docs/docs/Props/onFocus",draft:!1,tags:[],version:"1.0.16",sidebarPosition:10,frontMatter:{sidebar_position:10,description:"Run function when focused in the text area"},sidebar:"tutorialSidebar",previous:{title:"onDisabled",permalink:"/react-multi-email-docs/docs/Props/onDisabled"},next:{title:"onKeyDown",permalink:"/react-multi-email-docs/docs/Props/onKeyDown"}},d={},m=[{value:"About onFocus",id:"about-onfocus",level:2},{value:"Demo",id:"demo",level:2},{value:"Code",id:"code",level:2},{value:"Full code",id:"full-code",level:3},{value:"Code snippet",id:"code-snippet",level:3}],f={toc:m},g="wrapper";function F(e){let{components:t,...n}=e;return(0,o.kt)(g,(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"onFocus")," prop allows developers to define a function to execute when the text area within the component gains focus. "),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"onFocus")," prop is triggered only when the text area is focused. ",(0,o.kt)("strong",{parentName:"p"},"To define behavior for when the text area loses focus, consider using the ",(0,o.kt)("inlineCode",{parentName:"strong"},"onBlur")," prop.")),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"about-onfocus"},"About onFocus"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Property: ",(0,o.kt)("inlineCode",{parentName:"li"},"onFocus")),(0,o.kt)("li",{parentName:"ul"},"Type: ",(0,o.kt)("inlineCode",{parentName:"li"},"() => void;")),(0,o.kt)("li",{parentName:"ul"},"Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"undefined"))),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"demo"},"Demo"),(0,o.kt)("p",null,"For instance, the background color could be changed to ",(0,o.kt)("inlineCode",{parentName:"p"},"red")," upon focusing, as demonstrated in the given example."),(0,o.kt)(i,{mdxType:"OnFocus"}),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"code"},"Code"),(0,o.kt)("h3",{id:"full-code"},"Full code"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="OnFocus.mdx"',title:'"OnFocus.mdx"'},'import * as React from \'react\';\nimport { ReactMultiEmail } from \'react-multi-email\';\nimport \'react-multi-email/dist/style.css\';\n\nexport default function multiEmail () {\n  const [emails, setEmails] = React.useState<string[]>([]);\n  const [background, setBackground] = React.useState(styles.background);\n\n  const onFocusFunc = () => {\n    setBackground("#c32424");\n  }\n  const onBlurFunc = () => {\n    setBackground(styles.background);\n  }\n\n  const combinedStyles = {\n    ...styles,\n    background: background\n  };\n\n  \n  return (\n    <div style={combinedStyles}>\n      <h3>react-multi-email</h3>\n      <ReactMultiEmail\n        // onFocus prop\n        onFocus={onFocusFunc}\n        placeholder="Input your Email Address"\n        emails={emails}\n        onChange={(_emails: string[]) => {\n          setEmails(_emails);\n        }}\n        getLabel={(\n          email: string,\n          index: number,\n          removeEmail: (index: number) => void\n        ) => {\n          return (\n            <div data-tag key={index}>\n              {email}\n              <span data-tag-handle onClick={() => removeEmail(index)}>\n                \xd7\n              </span>\n            </div>\n          );\n        }}\n      />\n      <h4>react-multi-email value</h4>\n      <p>{emails.join(", ") || "empty"}</p>\n    </div>\n  );\n}\n\nconst styles = {\n  fontFamily: "sans-serif",\n  width: "500px",\n  border: "1px solid rgb(238, 238, 238)",\n  background: "rgb(243, 243, 243)",\n  padding: "25px",\n  margin: "20px",\n  color: "black",\n};\n')),(0,o.kt)("h3",{id:"code-snippet"},"Code snippet"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="OnFocus.tsx"',title:'"OnFocus.tsx"'},"const onFocusFunc = () => {\n  // do something\n}\n\nreturn(\n  <ReactMultiEmail\n      onFocus={onFocusFunc}\n      // other props\n  />\n);\n")))}F.isMDXComponent=!0}}]);