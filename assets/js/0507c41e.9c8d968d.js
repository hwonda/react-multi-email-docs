"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3228],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=l,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||r;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:l,o[1]=i;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7006:(e,t,n)=>{n.d(t,{Q:()=>f});var a=n(7294);const l={requireTld:!0,allowUnderscores:!1,allowTrailingDot:!1},r={allowDisplayName:!1,requireDisplayName:!1,allowUtf8LocalPart:!0,requireTld:!0},o=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\,\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF\s]*<(.+)>$/i,i=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i,s=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i,u=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i,c=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i;function p(e,t){let n,a=0;const l=encodeURI(e).split(/%..|./).length-1;return t&&(a=Number(t.min)||0,n=Number(t.max)),l>=a&&(void 0===n||l<=n)}function d(e,t){if((t={...r,...t}).requireDisplayName||t.allowDisplayName){const n=e.match(o);if(n)e=n[1];else if(t.requireDisplayName)return!1}const n=e.split("@"),a=""+n.pop(),d=a.toLowerCase();let m=n.join("@");if("gmail.com"!==d&&"googlemail.com"!==d||(m=m.replace(/\./g,"").toLowerCase()),!p(m,{max:64})||!p(a,{max:254}))return!1;if(!function(e,t){(t={...l,...t}).allowTrailingDot&&"."===e[e.length-1]&&(e=e.substring(0,e.length-1));const n=e.split(".");if(t.requireTld){const e=""+n.pop();if(!n.length||!/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(e))return!1;if(/[\s\u2002-\u200B\u202F\u205F\u3000\uFEFF\uDB40\uDC20]/.test(e))return!1}for(let a,l=0;l<n.length;l++){if(a=n[l],t.allowUnderscores&&(a=a.replace(/_/g,"")),!/^[a-z\u00a1-\uffff0-9-]+$/i.test(a))return!1;if(/[\uff01-\uff5e]/.test(a))return!1;if("-"===a[0]||"-"===a[a.length-1])return!1}return!0}(a,{requireTld:t.requireTld}))return!1;if('"'===m[0])return m=m.slice(1,m.length-1),t.allowUtf8LocalPart?c.test(m):s.test(m);const f=t.allowUtf8LocalPart?u:i,g=m.split(".");for(let l=0;l<g.length;l++)if(!f.test(g[l]))return!1;return!0}const m=e=>{if(void 0===e)return[];return e.filter((e=>d(e)))};function f(e){const{id:t,style:n,className:l="",noClass:r,placeholder:o,autoFocus:i,allowDisplayName:s=!1,stripDisplayName:u=!1,allowDuplicate:c=!1,delimiter:p=`[${s?"":" "},;]`,initialInputValue:f="",inputClassName:g,autoComplete:y,getLabel:F,enable:h,onDisabled:b,validateEmail:x,onChange:k,onChangeInput:v,onFocus:w,onBlur:C,onKeyDown:E,onKeyUp:D,spinner:N,disableOnBlurValidation:O=!1}=e,P=a.useRef(null),[T,j]=a.useState(!1),[S,$]=a.useState([]),[R,B]=a.useState(f),[M,_]=a.useState(!1),L=a.useCallback((async(e,t)=>{const n=[];let a="";const l=new RegExp(p,"g"),r=x||d,o=e=>{if(!c)for(let t=0,n=S.length;t<n;t++)if(S[t]===e)return!1;return n.push(e),!0};if(""!==e)if(l.test(e)){const t=[...new Set(e.split(l).filter((e=>e)))];do{const n=r(""+t[0]);if("boolean"==typeof n)if(n)o(""+t.shift());else if(1===t.length)if(s){if(r(""+t[0],{allowDisplayName:s})){o(""+(u?t.shift()?.split("<")[1].split(">")[0]:t.shift()))}else 1===t.length?a=""+t.shift():t.shift()}else a=""+t.shift();else t.shift();else _(!0),!0===await(x?.(e))?(o(""+t.shift()),_(!1)):1===t.length?a=""+t.shift():t.shift()}while(t.length)}else{if(h&&!h({emailCnt:S.length}))return void b?.();if(t){const t=r(e);if("boolean"==typeof t)if(t)o(e);else if(s){if(r(e,{allowDisplayName:s})){o(u?e.split("<")[1].split(">")[0]:e)}else a=e}else a=e;else _(!0),!0===await(x?.(e))?(o(e),_(!1)):a=e}else a=e}$([...S,...n]),B(a),n.length&&k?.([...S,...n]),a!=a&&v?.(a)}),[s,c,p,S,h,k,v,b,u,x]),q=a.useCallback((async e=>{await L(e),v?.(e)}),[L,v]),A=a.useCallback(((e,t)=>{if(t)return;const n=[...S.slice(0,e),...S.slice(e+1)];$(n),k?.(n)}),[S,k]),I=a.useCallback((e=>{switch(E?.(e),e.key){case"Enter":e.preventDefault();break;case"Backspace":e.currentTarget.value||A(S.length-1,!1)}}),[S.length,E,A]),U=a.useCallback((async e=>{if(D?.(e),"Enter"===e.key)await L(e.currentTarget.value,!0)}),[L,D]),z=a.useCallback((async e=>await q(e.currentTarget.value)),[q]),K=a.useCallback((async e=>{j(!1),O||await L(e.currentTarget.value,!0),C?.()}),[O,L,C]),V=a.useCallback((()=>{j(!0),w?.()}),[w]);return a.useEffect((()=>{$(m(e.emails))}),[e.emails]),a.createElement("div",{className:`${l} ${r?"":"react-multi-email"} ${T?"focused":""} ${""===R&&0===S.length?"empty":""}`,style:n,onClick:()=>P.current?.focus()},M&&N?.(),o?a.createElement("span",{"data-placeholder":!0},o):null,a.createElement("div",{className:"data-labels",style:{opacity:M?.45:1,display:"contents",flexWrap:"inherit"}},S.map(((e,t)=>F(e,t,A)))),a.createElement("input",{id:t,style:{opacity:M?.45:1},ref:P,type:"text",value:R,onFocus:V,onBlur:K,onChange:z,onKeyDown:I,onKeyUp:U,autoFocus:i,className:g,autoComplete:y}))}},8084:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>y,frontMatter:()=>u,metadata:()=>p,toc:()=>m});var a=n(7462),l=n(7294),r=n(3905),o=n(7006);const i={fontFamily:"sans-serif",width:"500px",border:"1px solid rgb(238, 238, 238)",background:"rgb(243, 243, 243)",padding:"25px",margin:"20px",color:"black"};function s(){const[e,t]=l.useState([]),[n,a]=l.useState(i.background),r={...i,background:n};return l.createElement("div",{style:r},l.createElement("h3",null,"react-multi-email"),l.createElement(o.Q,{placeholder:"Input your Email Address",onFocus:()=>{a("#c32424")},emails:e,onChange:e=>{t(e)},getLabel:(e,t,n)=>l.createElement("div",{"data-tag":!0,key:t},e,l.createElement("span",{"data-tag-handle":!0,onClick:()=>n(t)},"\xd7"))}),l.createElement("br",null),l.createElement("h4",null,"react-multi-email value"),l.createElement("p",null,e.join(", ")||"empty"))}const u={sidebar_position:3},c=void 0,p={unversionedId:"Props/onFocus",id:"version-1.0.16/Props/onFocus",title:"onFocus",description:"OnFocus can specify the function to execute if it is focused in the text area.",source:"@site/versioned_docs/version-1.0.16/Props/onFocus.mdx",sourceDirName:"Props",slug:"/Props/onFocus",permalink:"/react-multi-email-docs/docs/Props/onFocus",draft:!1,tags:[],version:"1.0.16",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"autoFocus",permalink:"/react-multi-email-docs/docs/Props/autoFocus"},next:{title:"onBlur",permalink:"/react-multi-email-docs/docs/Props/onBlur"}},d={},m=[{value:"Value",id:"value",level:2},{value:"Result",id:"result",level:2},{value:"Code",id:"code",level:2},{value:"Whole Code",id:"whole-code",level:3},{value:"Specific Code",id:"specific-code",level:3}],f={toc:m},g="wrapper";function y(e){let{components:t,...n}=e;return(0,r.kt)(g,(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"OnFocus can specify the function to execute ",(0,r.kt)("strong",{parentName:"p"},"if it is focused in the text area.")," "),(0,r.kt)("p",null,"The example expresses the function ",(0,r.kt)("strong",{parentName:"p"},"replace the background color to red if focused.")),(0,r.kt)("h2",{id:"value"},"Value"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Property: ",(0,r.kt)("inlineCode",{parentName:"li"},"onFocus"),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},"default: ",(0,r.kt)("inlineCode",{parentName:"li"},"None"),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},"type: ",(0,r.kt)("inlineCode",{parentName:"li"},"() => void;"))),(0,r.kt)("h2",{id:"result"},"Result"),(0,r.kt)(s,{mdxType:"OnFocus"}),(0,r.kt)("admonition",{title:"onFocus",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"'onFocus'")," prop ",(0,r.kt)("strong",{parentName:"p"},"runs only when it is focused."),"\nIf you want to execute function when it is focused out, use the next ",(0,r.kt)("strong",{parentName:"p"},"prop 'onBlur'"))),(0,r.kt)("h2",{id:"code"},"Code"),(0,r.kt)("h3",{id:"whole-code"},"Whole Code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="onFocus.mdx"',title:'"onFocus.mdx"'},'import * as React from \'react\';\nimport { ReactMultiEmail } from \'react-multi-email\';\nimport \'react-multi-email/dist/style.css\';\n\nconst styles = {\n  fontFamily: "sans-serif",\n  width: "500px",\n  border: "1px solid rgb(238, 238, 238)",\n  background: "rgb(243, 243, 243)",\n  padding: "25px",\n  margin: "20px",\n  color: "black",\n};\n\nexport default function placeholder () {\n  const [emails, setEmails] = React.useState<string[]>([]);\n  const [background, setBackground] = React.useState(styles.background);\n\n  const onFocusFunc = () => {\n    setBackground("#c32424");\n  }\n  const onBlurFunc = () => {\n    setBackground(styles.background);\n  }\n\n  const combinedStyles = {\n    ...styles,\n    background: background\n  };\n\n  \n  return (\n    <div style={combinedStyles}>\n      <h3>react-multi-email</h3>\n      <ReactMultiEmail\n        placeholder="Input your Email Address"\n        onFocus={onFocusFunc}\n        emails={emails}\n        onChange={(_emails: string[]) => {\n          setEmails(_emails);\n        }}\n        getLabel={(\n          email: string,\n          index: number,\n          removeEmail: (index: number) => void\n        ) => {\n          return (\n            <div data-tag key={index}>\n              {email}\n              <span data-tag-handle onClick={() => removeEmail(index)}>\n                \xd7\n              </span>\n            </div>\n          );\n        }}\n      />\n      <br />\n      <h4>react-multi-email value</h4>\n      <p>{emails.join(", ") || "empty"}</p>\n    </div>\n  );\n}\n')),(0,r.kt)("h3",{id:"specific-code"},"Specific Code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="ReactMultiEmail.tsx"',title:'"ReactMultiEmail.tsx"'},"const onFocusFunc = () => {\n    // what you want to do  when it is focused\n}\n\nreturn(\n    <ReactMultiEmail\n        onFocus={onFocusFunc}\n    />\n);\n")))}y.isMDXComponent=!0}}]);