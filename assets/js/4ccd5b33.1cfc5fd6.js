"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[333],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),d=l,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||r;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:l,i[1]=o;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2113:(e,t,n)=>{n.d(t,{Q:()=>f});const a={requireTld:!0,allowUnderscores:!1,allowTrailingDot:!1},l={allowDisplayName:!1,requireDisplayName:!1,allowUtf8LocalPart:!0,requireTld:!0},r=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\,\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF\s]*<(.+)>$/i,i=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i,o=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i,s=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i,u=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i;function c(e,t){let n,a=0;const l=encodeURI(e).split(/%..|./).length-1;return t&&(a=Number(t.min)||0,n=Number(t.max)),l>=a&&(void 0===n||l<=n)}function p(e,t){if((t={...l,...t}).requireDisplayName||t.allowDisplayName){const n=e.match(r);if(n)e=n[1];else if(t.requireDisplayName)return!1}const n=e.split("@"),p=""+n.pop(),m=p.toLowerCase();let d=n.join("@");if("gmail.com"!==m&&"googlemail.com"!==m||(d=d.replace(/\./g,"").toLowerCase()),!c(d,{max:64})||!c(p,{max:254}))return!1;if(!function(e,t){(t={...a,...t}).allowTrailingDot&&"."===e[e.length-1]&&(e=e.substring(0,e.length-1));const n=e.split(".");if(t.requireTld){const e=""+n.pop();if(!n.length||!/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(e))return!1;if(/[\s\u2002-\u200B\u202F\u205F\u3000\uFEFF\uDB40\uDC20]/.test(e))return!1}for(let a,l=0;l<n.length;l++){if(a=n[l],t.allowUnderscores&&(a=a.replace(/_/g,"")),!/^[a-z\u00a1-\uffff0-9-]+$/i.test(a))return!1;if(/[\uff01-\uff5e]/.test(a))return!1;if("-"===a[0]||"-"===a[a.length-1])return!1}return!0}(p,{requireTld:t.requireTld}))return!1;if('"'===d[0])return d=d.slice(1,d.length-1),t.allowUtf8LocalPart?u.test(d):o.test(d);const f=t.allowUtf8LocalPart?s:i,b=d.split(".");for(let a=0;a<b.length;a++)if(!f.test(b[a]))return!1;return!0}var m=n(7294);const d=e=>{if(void 0===e)return[];return e.filter((e=>p(e)))};function f(e){const{id:t,style:n,className:a="",noClass:l,placeholder:r,autoFocus:i,allowDisplayName:o=!1,stripDisplayName:s=!1,allowDuplicate:u=!1,delimiter:c=`[${o?"":" "},;]`,initialInputValue:f="",inputClassName:b,autoComplete:g,getLabel:y,enable:h,onDisabled:x,validateEmail:v,onChange:F,onChangeInput:k,onFocus:C,onBlur:w,onKeyDown:D,onKeyUp:E,spinner:N,disableOnBlurValidation:O=!1}=e,P=m.useRef(null),[T,j]=m.useState(!1),[$,S]=m.useState([]),[A,R]=m.useState(f),[_,I]=m.useState(!1),L=m.useCallback((async(e,t)=>{const n=[];let a="";const l=new RegExp(c,"g"),r=v||p,i=e=>{if(!u)for(let t=0,n=$.length;t<n;t++)if($[t]===e)return!1;return n.push(e),!0};if(""!==e)if(l.test(e)){const t=[...new Set(e.split(l).filter((e=>e)))];do{const n=r(""+t[0]);if("boolean"==typeof n)if(n)i(""+t.shift());else if(1===t.length)if(o){if(r(""+t[0],{allowDisplayName:o})){i(""+(s?t.shift()?.split("<")[1].split(">")[0]:t.shift()))}else 1===t.length?a=""+t.shift():t.shift()}else a=""+t.shift();else t.shift();else I(!0),!0===await(v?.(e))?(i(""+t.shift()),I(!1)):1===t.length?a=""+t.shift():t.shift()}while(t.length)}else{if(h&&!h({emailCnt:$.length}))return void x?.();if(t){const t=r(e);if("boolean"==typeof t)if(t)i(e);else if(o){if(r(e,{allowDisplayName:o})){i(s?e.split("<")[1].split(">")[0]:e)}else a=e}else a=e;else I(!0),!0===await(v?.(e))?(i(e),I(!1)):a=e}else a=e}S([...$,...n]),R(a),n.length&&F?.([...$,...n]),a!=a&&k?.(a)}),[o,u,c,$,h,F,k,x,s,v]),M=m.useCallback((async e=>{await L(e),k?.(e)}),[L,k]),U=m.useCallback(((e,t)=>{if(t)return;const n=[...$.slice(0,e),...$.slice(e+1)];S(n),F?.(n)}),[$,F]),q=m.useCallback((e=>{switch(D?.(e),e.key){case"Enter":e.preventDefault();break;case"Backspace":e.currentTarget.value||U($.length-1,!1)}}),[$.length,D,U]),z=m.useCallback((async e=>{if(E?.(e),"Enter"===e.key)await L(e.currentTarget.value,!0)}),[L,E]),B=m.useCallback((async e=>await M(e.currentTarget.value)),[M]),K=m.useCallback((async e=>{j(!1),O||await L(e.currentTarget.value,!0),w?.()}),[O,L,w]),W=m.useCallback((()=>{j(!0),C?.()}),[C]);return m.useEffect((()=>{S(d(e.emails))}),[e.emails]),m.createElement("div",{className:`${a} ${l?"":"react-multi-email"} ${T?"focused":""} ${""===A&&0===$.length?"empty":""}`,style:n,onClick:()=>P.current?.focus()},_&&N?.(),r?m.createElement("span",{"data-placeholder":!0},r):null,m.createElement("div",{className:"data-labels",style:{opacity:_?.45:1,display:"contents",flexWrap:"inherit"}},$.map(((e,t)=>y(e,t,U)))),m.createElement("input",{id:t,style:{opacity:_?.45:1},ref:P,type:"text",value:A,onFocus:W,onBlur:K,onChange:B,onKeyDown:q,onKeyUp:z,autoFocus:i,className:b,autoComplete:g}))}},2513:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>g,frontMatter:()=>u,metadata:()=>p,toc:()=>d});var a=n(7462),l=n(7294),r=n(3905),i=n(2113);function o(){const[e,t]=l.useState([]);return l.createElement("div",{style:s},l.createElement("h3",null,"react-multi-email"),l.createElement(i.Q,{placeholder:"Input your Email Address",enable:e=>{let{emailCnt:t}=e;return t<2},emails:e,onChange:e=>{t(e)},getLabel:(e,t,n)=>l.createElement("div",{"data-tag":!0,key:t},e,l.createElement("span",{"data-tag-handle":!0,onClick:()=>n(t)},"\xd7"))}),l.createElement("h4",null,"react-multi-email value"),l.createElement("p",null,e.join(", ")||"empty"))}const s={fontFamily:"sans-serif",width:"500px",border:"1px solid rgb(238, 238, 238)",background:"rgb(243, 243, 243)",padding:"25px",margin:"20px",color:"black"},u={sidebar_position:6,description:"Determines the number of emails a user can add"},c=void 0,p={unversionedId:"Props/enable",id:"version-1.0.16/Props/enable",title:"enable",description:"Determines the number of emails a user can add",source:"@site/versioned_docs/version-1.0.16/Props/enable.mdx",sourceDirName:"Props",slug:"/Props/enable",permalink:"/react-multi-email-docs/docs/Props/enable",draft:!1,tags:[],version:"1.0.16",sidebarPosition:6,frontMatter:{sidebar_position:6,description:"Determines the number of emails a user can add"},sidebar:"tutorialSidebar",previous:{title:"style",permalink:"/react-multi-email-docs/docs/Props/style"},next:{title:"onDisabled",permalink:"/react-multi-email-docs/docs/Props/onDisabled"}},m={},d=[{value:"About enable",id:"about-enable",level:2},{value:"Demo",id:"demo",level:2},{value:"Code",id:"code",level:2},{value:"Whole code",id:"whole-code",level:3},{value:"Specific code",id:"specific-code",level:3}],f={toc:d},b="wrapper";function g(e){let{components:t,...n}=e;return(0,r.kt)(b,(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This prop determines ",(0,r.kt)("strong",{parentName:"p"},"whether a user can add an email"),".\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"emailCnt")," parameter represents ",(0,r.kt)("strong",{parentName:"p"},"the current count of added emails"),".\nIf this function returns ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", an email can be added. If it returns ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),", an email cannot be added."),(0,r.kt)("h2",{id:"about-enable"},"About enable"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Property: ",(0,r.kt)("inlineCode",{parentName:"li"},"enable")),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("inlineCode",{parentName:"li"},"({ emailCnt }: { emailCnt: number }) => boolean;")," "),(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"() => true"))),(0,r.kt)("h2",{id:"demo"},"Demo"),(0,r.kt)("p",null,"The example below prevents you from adding more than ",(0,r.kt)("strong",{parentName:"p"},"two(2) emails"),". You can limit any number of inputs."),(0,r.kt)(o,{mdxType:"Enable"}),(0,r.kt)("h2",{id:"code"},"Code"),(0,r.kt)("h3",{id:"whole-code"},"Whole code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="enable.tsx"',title:'"enable.tsx"'},'import * as React from \'react\';\nimport { ReactMultiEmail } from \'react-multi-email\';\nimport \'react-multi-email/dist/style.css\';\n\nexport default function multiEmail () {\n  const [emails, setEmails] = React.useState<string[]>([]);\n  return (\n    <div style={styles}>\n      <h3>react-multi-email</h3>\n      <ReactMultiEmail\n        placeholder="Input your Email Address"\n        // enable prop\n        enable={({ emailCnt }) => emailCnt < 2}\n        emails={emails}\n        onChange={(_emails: string[]) => {\n          setEmails(_emails);\n        }}\n        getLabel={(\n          email: string,\n          index: number,\n          removeEmail: (index: number) => void\n        ) => {\n          return (\n            <div data-tag key={index}>\n              {email}\n              <span data-tag-handle onClick={() => removeEmail(index)}>\n                \xd7\n              </span>\n            </div>\n          );\n        }}\n      />\n      <h4>react-multi-email value</h4>\n      <p>{emails.join(", ") || "empty"}</p>\n    </div>\n  );\n}\n\nconst styles = {\n  fontFamily: "sans-serif",\n  width: "500px",\n  border: "1px solid rgb(238, 238, 238)",\n  background: "rgb(243, 243, 243)",\n  padding: "25px",\n  margin: "20px",\n  color: "black",\n};\n')),(0,r.kt)("h3",{id:"specific-code"},"Specific code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="enable.tsx"',title:'"enable.tsx"'},"<ReactMultiEmail \n  enable={({ emailCnt }) => emailCnt < NUMBER }\n/>\n")))}g.isMDXComponent=!0}}]);