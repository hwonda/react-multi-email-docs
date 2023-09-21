"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[412],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(a),m=l,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||r;return a?n.createElement(f,o(o({ref:t},c),{},{components:a})):n.createElement(f,o({ref:t},c))}));function f(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:l,o[1]=i;for(var u=2;u<r;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2113:(e,t,a)=>{a.d(t,{Q:()=>f});const n={requireTld:!0,allowUnderscores:!1,allowTrailingDot:!1},l={allowDisplayName:!1,requireDisplayName:!1,allowUtf8LocalPart:!0,requireTld:!0},r=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\,\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF\s]*<(.+)>$/i,o=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i,i=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i,s=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i,u=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i;function c(e,t){let a,n=0;const l=encodeURI(e).split(/%..|./).length-1;return t&&(n=Number(t.min)||0,a=Number(t.max)),l>=n&&(void 0===a||l<=a)}function p(e,t){if((t={...l,...t}).requireDisplayName||t.allowDisplayName){const a=e.match(r);if(a)e=a[1];else if(t.requireDisplayName)return!1}const a=e.split("@"),p=""+a.pop(),d=p.toLowerCase();let m=a.join("@");if("gmail.com"!==d&&"googlemail.com"!==d||(m=m.replace(/\./g,"").toLowerCase()),!c(m,{max:64})||!c(p,{max:254}))return!1;if(!function(e,t){(t={...n,...t}).allowTrailingDot&&"."===e[e.length-1]&&(e=e.substring(0,e.length-1));const a=e.split(".");if(t.requireTld){const e=""+a.pop();if(!a.length||!/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(e))return!1;if(/[\s\u2002-\u200B\u202F\u205F\u3000\uFEFF\uDB40\uDC20]/.test(e))return!1}for(let n,l=0;l<a.length;l++){if(n=a[l],t.allowUnderscores&&(n=n.replace(/_/g,"")),!/^[a-z\u00a1-\uffff0-9-]+$/i.test(n))return!1;if(/[\uff01-\uff5e]/.test(n))return!1;if("-"===n[0]||"-"===n[n.length-1])return!1}return!0}(p,{requireTld:t.requireTld}))return!1;if('"'===m[0])return m=m.slice(1,m.length-1),t.allowUtf8LocalPart?u.test(m):i.test(m);const f=t.allowUtf8LocalPart?s:o,g=m.split(".");for(let n=0;n<g.length;n++)if(!f.test(g[n]))return!1;return!0}var d=a(7294);const m=e=>{if(void 0===e)return[];return e.filter((e=>p(e)))};function f(e){const{id:t,style:a,className:n="",noClass:l,placeholder:r,autoFocus:o,allowDisplayName:i=!1,stripDisplayName:s=!1,allowDuplicate:u=!1,delimiter:c=`[${i?"":" "},;]`,initialInputValue:f="",inputClassName:g,autoComplete:h,getLabel:y,enable:F,onDisabled:b,validateEmail:x,onChange:v,onChangeInput:k,onFocus:w,onBlur:C,onKeyDown:D,onKeyUp:E,spinner:N,disableOnBlurValidation:O=!1}=e,P=d.useRef(null),[T,j]=d.useState(!1),[$,S]=d.useState([]),[A,R]=d.useState(f),[_,L]=d.useState(!1),M=d.useCallback((async(e,t)=>{const a=[];let n="";const l=new RegExp(c,"g"),r=x||p,o=e=>{if(!u)for(let t=0,a=$.length;t<a;t++)if($[t]===e)return!1;return a.push(e),!0};if(""!==e)if(l.test(e)){const t=[...new Set(e.split(l).filter((e=>e)))];do{const a=r(""+t[0].trim());if("boolean"==typeof a)if(a)o(""+t.shift());else if(i){if(r(""+t[0].trim(),{allowDisplayName:i})){o(""+(s?t.shift()?.split("<")[1].split(">")[0]:t.shift()))}else 1===t.length?n=""+t.shift():t.shift()}else n=""+t.shift();else L(!0),!0===await(x?.(e))?(o(""+t.shift()),L(!1)):1===t.length?n=""+t.shift():t.shift()}while(t.length)}else{if(F&&!F({emailCnt:$.length}))return void b?.();if(t){const t=r(e);if("boolean"==typeof t)if(t)o(e);else if(i){if(r(e,{allowDisplayName:i})){o(s?e.split("<")[1].split(">")[0]:e)}else n=e}else n=e;else L(!0),!0===await(x?.(e))?(o(e),L(!1)):n=e}else n=e}S([...$,...a]),R(n),a.length&&v?.([...$,...a]),n!=n&&k?.(n)}),[i,u,c,$,F,v,k,b,s,x]),q=d.useCallback((async e=>{await M(e),k?.(e)}),[M,k]),I=d.useCallback(((e,t)=>{if(t)return;const a=[...$.slice(0,e),...$.slice(e+1)];S(a),v?.(a)}),[$,v]),U=d.useCallback((e=>{switch(D?.(e),e.key){case"Enter":e.preventDefault();break;case"Backspace":e.currentTarget.value||I($.length-1,!1)}}),[$.length,D,I]),z=d.useCallback((async e=>{if(E?.(e),"Enter"===e.key)await M(e.currentTarget.value,!0)}),[M,E]),B=d.useCallback((async e=>await q(e.currentTarget.value)),[q]),K=d.useCallback((async e=>{j(!1),O||await M(e.currentTarget.value,!0),C?.()}),[O,M,C]),W=d.useCallback((()=>{j(!0),w?.()}),[w]);return d.useEffect((()=>{S(m(e.emails))}),[e.emails]),d.createElement("div",{className:`${n} ${l?"":"react-multi-email"} ${T?"focused":""} ${""===A&&0===$.length?"empty":""}`,style:a,onClick:()=>P.current?.focus()},_&&N?.(),r?d.createElement("span",{"data-placeholder":!0},r):null,d.createElement("div",{className:"data-labels",style:{opacity:_?.45:1,display:"contents",flexWrap:"inherit"}},$.map(((e,t)=>y(e,t,I)))),d.createElement("input",{id:t,style:{opacity:_?.45:1},ref:P,type:"text",value:A,onFocus:W,onBlur:K,onChange:B,onKeyDown:U,onKeyUp:z,autoFocus:o,className:g,autoComplete:h}))}},5223:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>u,metadata:()=>p,toc:()=>m});var n=a(7462),l=a(7294),r=a(3905),o=a(2113);function i(){const[e,t]=l.useState([]);return l.createElement("div",{style:s},l.createElement("h3",null,"react-multi-email"),l.createElement(o.Q,{placeholder:"Input your Email Address",autoFocus:!0,emails:e,onChange:e=>{t(e)},getLabel:(e,t,a)=>l.createElement("div",{"data-tag":!0,key:t},e,l.createElement("span",{"data-tag-handle":!0,onClick:()=>a(t)},"\xd7"))}),l.createElement("h4",null,"react-multi-email value"),l.createElement("p",null,e.join(", ")||"empty"))}const s={fontFamily:"sans-serif",width:"500px",border:"1px solid rgb(238, 238, 238)",background:"rgb(243, 243, 243)",padding:"25px",margin:"20px",color:"black"},u={sidebar_position:2,description:"Auto focusing on the text area at first loaded"},c=void 0,p={unversionedId:"Props/autoFocus",id:"version-1.0.16/Props/autoFocus",title:"autoFocus",description:"Auto focusing on the text area at first loaded",source:"@site/versioned_docs/version-1.0.16/Props/autoFocus.mdx",sourceDirName:"Props",slug:"/Props/autoFocus",permalink:"/react-multi-email-docs/docs/Props/autoFocus",draft:!1,tags:[],version:"1.0.16",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"Auto focusing on the text area at first loaded"},sidebar:"tutorialSidebar",previous:{title:"placeholder",permalink:"/react-multi-email-docs/docs/Props/placeholder"},next:{title:"onFocus",permalink:"/react-multi-email-docs/docs/Props/onFocus"}},d={},m=[{value:"About autoFocus",id:"about-autofocus",level:2},{value:"Demo",id:"demo",level:2},{value:"Code",id:"code",level:2},{value:"Whole code",id:"whole-code",level:3},{value:"Specific code",id:"specific-code",level:3}],f={toc:m},g="wrapper";function h(e){let{components:t,...a}=e;return(0,r.kt)(g,(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"autoFocus")," is a feature that focuses on the text area when the page is first loaded. "),(0,r.kt)("p",null,"If it is set to true as shown in the above code, it will be automatically focused."),(0,r.kt)("h2",{id:"about-autofocus"},"About autoFocus"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Property: ",(0,r.kt)("inlineCode",{parentName:"li"},"autoFocus")),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean")," "),(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"))),(0,r.kt)("h2",{id:"demo"},"Demo"),(0,r.kt)(i,{mdxType:"AutoFocus"}),(0,r.kt)("admonition",{title:"Must check!",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This page is configured with ",(0,r.kt)("inlineCode",{parentName:"p"},"mdx")," and ",(0,r.kt)("strong",{parentName:"p"},"may not appear to be working"),". To check the function, set it up directly in demo or reload the page via ",(0,r.kt)("inlineCode",{parentName:"p"},"F5")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Ctrl(Command)+Shift+R"),".")),(0,r.kt)("h2",{id:"code"},"Code"),(0,r.kt)("h3",{id:"whole-code"},"Whole code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="autoFocus.tsx"',title:'"autoFocus.tsx"'},'import * as React from \'react\';\nimport { ReactMultiEmail } from \'react-multi-email\';\nimport \'react-multi-email/dist/style.css\';\n\nexport default function multiEmail () {\n  const [emails, setEmails] = React.useState<string[]>([]);\n  return (\n    <div style={styles}>\n      <h3>react-multi-email</h3>\n      <ReactMultiEmail\n        placeholder="Input your Email Address"\n        // autoFocus\n        autoFocus={true}\n        emails={emails}\n        onChange={(_emails: string[]) => {\n          setEmails(_emails);\n        }}\n        getLabel={(\n          email: string,\n          index: number,\n          removeEmail: (index: number) => void\n        ) => {\n          return (\n            <div data-tag key={index}>\n              {email}\n              <span data-tag-handle onClick={() => removeEmail(index)}>\n                \xd7\n              </span>\n            </div>\n          );\n        }}\n      />\n      <h4>react-multi-email value</h4>\n      <p>{emails.join(", ") || "empty"}</p>\n    </div>\n  );\n}\n\nconst styles = {\n  fontFamily: "sans-serif",\n  width: "500px",\n  border: "1px solid rgb(238, 238, 238)",\n  background: "rgb(243, 243, 243)",\n  padding: "25px",\n  margin: "20px",\n  color: "black",\n};\n')),(0,r.kt)("h3",{id:"specific-code"},"Specific code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="autoFocus.tsx"',title:'"autoFocus.tsx"'},"<ReactMultiEmail \n    autoFocus={true}\n/>\n")))}h.isMDXComponent=!0}}]);