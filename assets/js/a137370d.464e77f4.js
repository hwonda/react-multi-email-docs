"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[234],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var l=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=l.createContext({}),c=function(e){var t=l.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return l.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(a),m=n,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||r;return a?l.createElement(f,i(i({ref:t},u),{},{components:a})):l.createElement(f,i({ref:t},u))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:n,i[1]=o;for(var c=2;c<r;c++)i[c]=a[c];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2113:(e,t,a)=>{a.d(t,{Q:()=>f});const l={requireTld:!0,allowUnderscores:!1,allowTrailingDot:!1},n={allowDisplayName:!1,requireDisplayName:!1,allowUtf8LocalPart:!0,requireTld:!0},r=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\,\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF\s]*<(.+)>$/i,i=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i,o=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i,s=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i,c=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i;function u(e,t){let a,l=0;const n=encodeURI(e).split(/%..|./).length-1;return t&&(l=Number(t.min)||0,a=Number(t.max)),n>=l&&(void 0===a||n<=a)}function p(e,t){if((t={...n,...t}).requireDisplayName||t.allowDisplayName){const a=e.match(r);if(a)e=a[1];else if(t.requireDisplayName)return!1}const a=e.split("@"),p=""+a.pop(),d=p.toLowerCase();let m=a.join("@");if("gmail.com"!==d&&"googlemail.com"!==d||(m=m.replace(/\./g,"").toLowerCase()),!u(m,{max:64})||!u(p,{max:254}))return!1;if(!function(e,t){(t={...l,...t}).allowTrailingDot&&"."===e[e.length-1]&&(e=e.substring(0,e.length-1));const a=e.split(".");if(t.requireTld){const e=""+a.pop();if(!a.length||!/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(e))return!1;if(/[\s\u2002-\u200B\u202F\u205F\u3000\uFEFF\uDB40\uDC20]/.test(e))return!1}for(let l,n=0;n<a.length;n++){if(l=a[n],t.allowUnderscores&&(l=l.replace(/_/g,"")),!/^[a-z\u00a1-\uffff0-9-]+$/i.test(l))return!1;if(/[\uff01-\uff5e]/.test(l))return!1;if("-"===l[0]||"-"===l[l.length-1])return!1}return!0}(p,{requireTld:t.requireTld}))return!1;if('"'===m[0])return m=m.slice(1,m.length-1),t.allowUtf8LocalPart?c.test(m):o.test(m);const f=t.allowUtf8LocalPart?s:i,h=m.split(".");for(let l=0;l<h.length;l++)if(!f.test(h[l]))return!1;return!0}var d=a(7294);const m=e=>{if(void 0===e)return[];return e.filter((e=>p(e)))};function f(e){const{id:t,style:a,className:l="",noClass:n,placeholder:r,autoFocus:i,allowDisplayName:o=!1,stripDisplayName:s=!1,allowDuplicate:c=!1,delimiter:u=`[${o?"":" "},;]`,initialInputValue:f="",inputClassName:h,autoComplete:g,getLabel:y,enable:b,onDisabled:x,validateEmail:v,onChange:F,onChangeInput:k,onFocus:w,onBlur:C,onKeyDown:D,onKeyUp:E,spinner:N,disableOnBlurValidation:P=!1}=e,O=d.useRef(null),[T,j]=d.useState(!1),[$,S]=d.useState([]),[R,_]=d.useState(f),[L,q]=d.useState(!1),A=d.useCallback((async(e,t)=>{const a=[];let l="";const n=new RegExp(u,"g"),r=v||p,i=e=>{if(!c)for(let t=0,a=$.length;t<a;t++)if($[t]===e)return!1;return a.push(e),!0};if(""!==e)if(n.test(e)){const t=[...new Set(e.split(n).filter((e=>e)))];do{const a=r(""+t[0]);if("boolean"==typeof a)if(a)i(""+t.shift());else if(1===t.length)if(o){if(r(""+t[0],{allowDisplayName:o})){i(""+(s?t.shift()?.split("<")[1].split(">")[0]:t.shift()))}else 1===t.length?l=""+t.shift():t.shift()}else l=""+t.shift();else t.shift();else q(!0),!0===await(v?.(e))?(i(""+t.shift()),q(!1)):1===t.length?l=""+t.shift():t.shift()}while(t.length)}else{if(b&&!b({emailCnt:$.length}))return void x?.();if(t){const t=r(e);if("boolean"==typeof t)if(t)i(e);else if(o){if(r(e,{allowDisplayName:o})){i(s?e.split("<")[1].split(">")[0]:e)}else l=e}else l=e;else q(!0),!0===await(v?.(e))?(i(e),q(!1)):l=e}else l=e}S([...$,...a]),_(l),a.length&&F?.([...$,...a]),l!=l&&k?.(l)}),[o,c,u,$,b,F,k,x,s,v]),M=d.useCallback((async e=>{await A(e),k?.(e)}),[A,k]),U=d.useCallback(((e,t)=>{if(t)return;const a=[...$.slice(0,e),...$.slice(e+1)];S(a),F?.(a)}),[$,F]),z=d.useCallback((e=>{switch(D?.(e),e.key){case"Enter":e.preventDefault();break;case"Backspace":e.currentTarget.value||U($.length-1,!1)}}),[$.length,D,U]),B=d.useCallback((async e=>{if(E?.(e),"Enter"===e.key)await A(e.currentTarget.value,!0)}),[A,E]),I=d.useCallback((async e=>await M(e.currentTarget.value)),[M]),K=d.useCallback((async e=>{j(!1),P||await A(e.currentTarget.value,!0),C?.()}),[P,A,C]),W=d.useCallback((()=>{j(!0),w?.()}),[w]);return d.useEffect((()=>{S(m(e.emails))}),[e.emails]),d.createElement("div",{className:`${l} ${n?"":"react-multi-email"} ${T?"focused":""} ${""===R&&0===$.length?"empty":""}`,style:a,onClick:()=>O.current?.focus()},L&&N?.(),r?d.createElement("span",{"data-placeholder":!0},r):null,d.createElement("div",{className:"data-labels",style:{opacity:L?.45:1,display:"contents",flexWrap:"inherit"}},$.map(((e,t)=>y(e,t,U)))),d.createElement("input",{id:t,style:{opacity:L?.45:1},ref:O,type:"text",value:R,onFocus:W,onBlur:K,onChange:I,onKeyDown:z,onKeyUp:B,autoFocus:i,className:h,autoComplete:g}))}},7193:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>g,frontMatter:()=>c,metadata:()=>p,toc:()=>m});var l=a(7462),n=a(7294),r=a(3905),i=a(2113);function o(){const[e,t]=n.useState([]);return n.createElement("div",{style:s},n.createElement("h3",null,"react-multi-email"),n.createElement(i.Q,{placeholder:"Type anything!",emails:e,onChange:e=>{t(e)},getLabel:(e,t,a)=>n.createElement("div",{"data-tag":!0,key:t},e,n.createElement("span",{"data-tag-handle":!0,onClick:()=>a(t)},"\xd7"))}),n.createElement("br",null),n.createElement("h4",null,"react-multi-email value"),n.createElement("p",null,e.join(", ")||"empty"))}const s={fontFamily:"sans-serif",width:"500px",border:"1px solid rgb(238, 238, 238)",background:"rgb(243, 243, 243)",padding:"25px",margin:"20px",color:"black"},c={sidebar_position:1,description:"Provide a guide to the text area"},u=void 0,p={unversionedId:"Props/placeholder",id:"version-1.0.16/Props/placeholder",title:"placeholder",description:"Provide a guide to the text area",source:"@site/versioned_docs/version-1.0.16/Props/placeholder.mdx",sourceDirName:"Props",slug:"/Props/placeholder",permalink:"/react-multi-email-docs/docs/Props/placeholder",draft:!1,tags:[],version:"1.0.16",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Provide a guide to the text area"},sidebar:"tutorialSidebar",previous:{title:"Props",permalink:"/react-multi-email-docs/docs/category/props"},next:{title:"autoFocus",permalink:"/react-multi-email-docs/docs/Props/autoFocus"}},d={},m=[{value:"About placeholder",id:"about-placeholder",level:2},{value:"Demo",id:"demo",level:2},{value:"Code",id:"code",level:2},{value:"Whole code",id:"whole-code",level:3},{value:"Specific code",id:"specific-code",level:3}],f={toc:m},h="wrapper";function g(e){let{components:t,...a}=e;return(0,r.kt)(h,(0,l.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Placeholder")," is one of the most basic features, and can ",(0,r.kt)("strong",{parentName:"p"},"provide a guide")," to the text area."),(0,r.kt)("p",null,"You can just replace the string in the placeholder props."),(0,r.kt)("h2",{id:"about-placeholder"},"About placeholder"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Property: ",(0,r.kt)("inlineCode",{parentName:"li"},"placeholder"),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},"default: ",(0,r.kt)("inlineCode",{parentName:"li"},"''"),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},"type: ",(0,r.kt)("inlineCode",{parentName:"li"},"string")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"React.ReactNode"))),(0,r.kt)("h2",{id:"demo"},"Demo"),(0,r.kt)(o,{mdxType:"Placeholder"}),(0,r.kt)("h2",{id:"code"},"Code"),(0,r.kt)("h3",{id:"whole-code"},"Whole code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="placeholder.tsx"',title:'"placeholder.tsx"'},'import * as React from \'react\';\nimport { ReactMultiEmail } from \'react-multi-email\';\nimport \'react-multi-email/dist/style.css\';\n\nexport default function multiEmail () {\n  const [emails, setEmails] = React.useState<string[]>([]);\n  return (\n    <div style={styles}>\n      <h3>react-multi-email</h3>\n      <ReactMultiEmail\n        // placeholder   \n        placeholder="Type anything!"\n        emails={emails}\n        onChange={(_emails: string[]) => {\n          setEmails(_emails);\n        }}\n        getLabel={(\n          email: string,\n          index: number,\n          removeEmail: (index: number) => void\n        ) => {\n          return (\n            <div data-tag key={index}>\n              {email}\n              <span data-tag-handle onClick={() => removeEmail(index)}>\n                \xd7\n              </span>\n            </div>\n          );\n        }}\n      />\n      <br />\n      <h4>react-multi-email value</h4>\n      <p>{emails.join(", ") || "empty"}</p>\n    </div>\n  );\n}\n\nconst styles = {\n  fontFamily: "sans-serif",\n  width: "500px",\n  border: "1px solid rgb(238, 238, 238)",\n  background: "rgb(243, 243, 243)",\n  padding: "25px",\n  margin: "20px",\n  color: "black",\n};\n')),(0,r.kt)("h3",{id:"specific-code"},"Specific code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="placeholder.tsx"',title:'"placeholder.tsx"'},'<ReactMultiEmail\n    placeholder="Type anything!"\n/>\n')))}g.isMDXComponent=!0}}]);