"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[671],{3905:(e,t,l)=>{l.d(t,{Zo:()=>c,kt:()=>f});var n=l(7294);function a(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function r(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function i(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?r(Object(l),!0).forEach((function(t){a(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function o(e,t){if(null==e)return{};var l,n,a=function(e,t){if(null==e)return{};var l,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),l=t;return e&&(l="function"==typeof e?e(t):i(i({},t),e)),l},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var l=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(l),d=a,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||r;return l?n.createElement(f,i(i({ref:t},c),{},{components:l})):n.createElement(f,i({ref:t},c))}));function f(e,t){var l=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=l.length,i=new Array(r);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<r;u++)i[u]=l[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,l)}d.displayName="MDXCreateElement"},2113:(e,t,l)=>{l.d(t,{Q:()=>f});const n={requireTld:!0,allowUnderscores:!1,allowTrailingDot:!1},a={allowDisplayName:!1,requireDisplayName:!1,allowUtf8LocalPart:!0,requireTld:!0},r=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\,\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF\s]*<(.+)>$/i,i=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i,o=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i,s=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i,u=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i;function c(e,t){let l,n=0;const a=encodeURI(e).split(/%..|./).length-1;return t&&(n=Number(t.min)||0,l=Number(t.max)),a>=n&&(void 0===l||a<=l)}function p(e,t){if((t={...a,...t}).requireDisplayName||t.allowDisplayName){const l=e.match(r);if(l)e=l[1];else if(t.requireDisplayName)return!1}const l=e.split("@"),p=""+l.pop(),m=p.toLowerCase();let d=l.join("@");if("gmail.com"!==m&&"googlemail.com"!==m||(d=d.replace(/\./g,"").toLowerCase()),!c(d,{max:64})||!c(p,{max:254}))return!1;if(!function(e,t){(t={...n,...t}).allowTrailingDot&&"."===e[e.length-1]&&(e=e.substring(0,e.length-1));const l=e.split(".");if(t.requireTld){const e=""+l.pop();if(!l.length||!/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(e))return!1;if(/[\s\u2002-\u200B\u202F\u205F\u3000\uFEFF\uDB40\uDC20]/.test(e))return!1}for(let n,a=0;a<l.length;a++){if(n=l[a],t.allowUnderscores&&(n=n.replace(/_/g,"")),!/^[a-z\u00a1-\uffff0-9-]+$/i.test(n))return!1;if(/[\uff01-\uff5e]/.test(n))return!1;if("-"===n[0]||"-"===n[n.length-1])return!1}return!0}(p,{requireTld:t.requireTld}))return!1;if('"'===d[0])return d=d.slice(1,d.length-1),t.allowUtf8LocalPart?u.test(d):o.test(d);const f=t.allowUtf8LocalPart?s:i,y=d.split(".");for(let n=0;n<y.length;n++)if(!f.test(y[n]))return!1;return!0}var m=l(7294);const d=e=>{if(void 0===e)return[];return e.filter((e=>p(e)))};function f(e){const{id:t,style:l,className:n="",noClass:a,placeholder:r,autoFocus:i,allowDisplayName:o=!1,stripDisplayName:s=!1,allowDuplicate:u=!1,delimiter:c=`[${o?"":" "},;]`,initialInputValue:f="",inputClassName:y,autoComplete:g,getLabel:b,enable:x,onDisabled:h,validateEmail:v,onChange:F,onChangeInput:k,onFocus:w,onBlur:C,onKeyDown:D,onKeyUp:E,spinner:N,disableOnBlurValidation:O=!1}=e,P=m.useRef(null),[T,j]=m.useState(!1),[S,$]=m.useState([]),[L,z]=m.useState(f),[A,R]=m.useState(!1),_=m.useCallback((async(e,t)=>{const l=[];let n="";const a=new RegExp(c,"g"),r=v||p,i=e=>{if(!u)for(let t=0,l=S.length;t<l;t++)if(S[t]===e)return!1;return l.push(e),!0};if(""!==e)if(a.test(e)){const t=[...new Set(e.split(a).filter((e=>e)))];do{const l=r(""+t[0].trim());if("boolean"==typeof l)if(l)i(""+t.shift());else if(o){if(r(""+t[0].trim(),{allowDisplayName:o})){i(""+(s?t.shift()?.split("<")[1].split(">")[0]:t.shift()))}else 1===t.length?n=""+t.shift():t.shift()}else n=""+t.shift();else R(!0),!0===await(v?.(e))?(i(""+t.shift()),R(!1)):1===t.length?n=""+t.shift():t.shift()}while(t.length)}else{if(x&&!x({emailCnt:S.length}))return void h?.();if(t){const t=r(e);if("boolean"==typeof t)if(t)i(e);else if(o){if(r(e,{allowDisplayName:o})){i(s?e.split("<")[1].split(">")[0]:e)}else n=e}else n=e;else R(!0),!0===await(v?.(e))?(i(e),R(!1)):n=e}else n=e}$([...S,...l]),z(n),l.length&&F?.([...S,...l]),n!=n&&k?.(n)}),[o,u,c,S,x,F,k,h,s,v]),U=m.useCallback((async e=>{await _(e),k?.(e)}),[_,k]),q=m.useCallback(((e,t)=>{if(t)return;const l=[...S.slice(0,e),...S.slice(e+1)];$(l),F?.(l)}),[S,F]),B=m.useCallback((e=>{switch(D?.(e),e.key){case"Enter":e.preventDefault();break;case"Backspace":e.currentTarget.value||q(S.length-1,!1)}}),[S.length,D,q]),M=m.useCallback((async e=>{if(E?.(e),"Enter"===e.key)await _(e.currentTarget.value,!0)}),[_,E]),I=m.useCallback((async e=>await U(e.currentTarget.value)),[U]),K=m.useCallback((async e=>{j(!1),O||await _(e.currentTarget.value,!0),C?.()}),[O,_,C]),W=m.useCallback((()=>{j(!0),w?.()}),[w]);return m.useEffect((()=>{$(d(e.emails))}),[e.emails]),m.createElement("div",{className:`${n} ${a?"":"react-multi-email"} ${T?"focused":""} ${""===L&&0===S.length?"empty":""}`,style:l,onClick:()=>P.current?.focus()},A&&N?.(),r?m.createElement("span",{"data-placeholder":!0},r):null,m.createElement("div",{className:"data-labels",style:{opacity:A?.45:1,display:"contents",flexWrap:"inherit"}},S.map(((e,t)=>b(e,t,q)))),m.createElement("input",{id:t,style:{opacity:A?.45:1},ref:P,type:"text",value:L,onFocus:W,onBlur:K,onChange:I,onKeyDown:B,onKeyUp:M,autoFocus:i,className:y,autoComplete:g}))}},3323:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>g,frontMatter:()=>u,metadata:()=>p,toc:()=>d});var n=l(7462),a=l(7294),r=l(3905),i=l(2113);function o(){const[e,t]=a.useState([]);return a.createElement("div",{style:s},a.createElement("h3",null,"react-multi-email"),a.createElement(i.Q,{placeholder:"Input your Email Address",style:{border:"1px solid red",marginLeft:"1rem",width:"300px"},emails:e,onChange:e=>{t(e)},getLabel:(e,t,l)=>a.createElement("div",{"data-tag":!0,key:t},e,a.createElement("span",{"data-tag-handle":!0,onClick:()=>l(t)},"\xd7"))}),a.createElement("h4",null,"react-multi-email value"),a.createElement("p",null,e.join(", ")||"empty"))}const s={fontFamily:"sans-serif",width:"500px",border:"1px solid rgb(238, 238, 238)",background:"rgb(243, 243, 243)",padding:"25px",margin:"20px",color:"black"},u={sidebar_position:5,title:"style",description:"Customize style"},c=void 0,p={unversionedId:"Props/style",id:"version-1.0.16/Props/style",title:"style",description:"Customize style",source:"@site/versioned_docs/version-1.0.16/Props/style.mdx",sourceDirName:"Props",slug:"/Props/style",permalink:"/react-multi-email-docs/docs/Props/style",draft:!1,tags:[],version:"1.0.16",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"style",description:"Customize style"},sidebar:"tutorialSidebar",previous:{title:"onBlur",permalink:"/react-multi-email-docs/docs/Props/onBlur"},next:{title:"enable",permalink:"/react-multi-email-docs/docs/Props/enable"}},m={},d=[{value:"About style",id:"about-style",level:2},{value:"Demo",id:"demo",level:2},{value:"Code",id:"code",level:2},{value:"Whole code",id:"whole-code",level:3},{value:"Specific code",id:"specific-code",level:3}],f={toc:d},y="wrapper";function g(e){let{components:t,...l}=e;return(0,r.kt)(y,(0,n.Z)({},f,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"You can easily give your own style of the text area using ",(0,r.kt)("inlineCode",{parentName:"p"},"style"),". ",(0,r.kt)("br",null),"\nPlease refer to the information below. ",(0,r.kt)("br",null)),(0,r.kt)("h2",{id:"about-style"},"About style"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Property: ",(0,r.kt)("inlineCode",{parentName:"li"},"style")),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean")," "),(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"))),(0,r.kt)("h2",{id:"demo"},"Demo"),(0,r.kt)("p",null,"The example below adds border, marginLeft, and width styles to the text area."),(0,r.kt)(o,{mdxType:"StyleExam"}),(0,r.kt)("h2",{id:"code"},"Code"),(0,r.kt)("h3",{id:"whole-code"},"Whole code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="style.tsx"',title:'"style.tsx"'},'import * as React from \'react\';\nimport { ReactMultiEmail } from \'react-multi-email\';\nimport \'react-multi-email/dist/style.css\';\n\nexport default function multiEmail () {\n  const [emails, setEmails] = React.useState<string[]>([]);\n  return (\n    <div style={styles}>\n      <h3>react-multi-email</h3>\n      <ReactMultiEmail\n        placeholder="Input your Email Address"\n        // custom style\n        style={{ border: \'1px solid red\', marginLeft: \'1rem\', width: \'300px\' }}\n        emails={emails}\n        onChange={(_emails: string[]) => {\n          setEmails(_emails);\n        }}\n        getLabel={(\n          email: string,\n          index: number,\n          removeEmail: (index: number) => void\n        ) => {\n          return (\n            <div data-tag key={index}>\n              {email}\n              <span data-tag-handle onClick={() => removeEmail(index)}>\n                \xd7\n              </span>\n            </div>\n          );\n        }}\n      />\n      <h4>react-multi-email value</h4>\n      <p>{emails.join(", ") || "empty"}</p>\n    </div>\n  );\n}\n\nconst styles = {\n  fontFamily: "sans-serif",\n  width: "500px",\n  border: "1px solid rgb(238, 238, 238)",\n  background: "rgb(243, 243, 243)",\n  padding: "25px",\n  margin: "20px",\n  color: "black",\n};\n')),(0,r.kt)("h3",{id:"specific-code"},"Specific code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="style.tsx"',title:'"style.tsx"'},"<ReactMultiEmail \n  style={{ YOUR OWN STYLE }}\n/>\n")))}g.isMDXComponent=!0}}]);