"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[308],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||l;return n?i.createElement(f,r(r({ref:t},p),{},{components:n})):i.createElement(f,r({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:a,r[1]=o;for(var u=2;u<l;u++)r[u]=n[u];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2113:(e,t,n)=>{n.d(t,{Q:()=>f});const i={requireTld:!0,allowUnderscores:!1,allowTrailingDot:!1},a={allowDisplayName:!1,requireDisplayName:!1,allowUtf8LocalPart:!0,requireTld:!0},l=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\,\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF\s]*<(.+)>$/i,r=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i,o=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i,s=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i,u=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i;function p(e,t){let n,i=0;const a=encodeURI(e).split(/%..|./).length-1;return t&&(i=Number(t.min)||0,n=Number(t.max)),a>=i&&(void 0===n||a<=n)}function c(e,t){if((t={...a,...t}).requireDisplayName||t.allowDisplayName){const n=e.match(l);if(n)e=n[1];else if(t.requireDisplayName)return!1}const n=e.split("@"),c=""+n.pop(),d=c.toLowerCase();let m=n.join("@");if("gmail.com"!==d&&"googlemail.com"!==d||(m=m.replace(/\./g,"").toLowerCase()),!p(m,{max:64})||!p(c,{max:254}))return!1;if(!function(e,t){(t={...i,...t}).allowTrailingDot&&"."===e[e.length-1]&&(e=e.substring(0,e.length-1));const n=e.split(".");if(t.requireTld){const e=""+n.pop();if(!n.length||!/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(e))return!1;if(/[\s\u2002-\u200B\u202F\u205F\u3000\uFEFF\uDB40\uDC20]/.test(e))return!1}for(let i,a=0;a<n.length;a++){if(i=n[a],t.allowUnderscores&&(i=i.replace(/_/g,"")),!/^[a-z\u00a1-\uffff0-9-]+$/i.test(i))return!1;if(/[\uff01-\uff5e]/.test(i))return!1;if("-"===i[0]||"-"===i[i.length-1])return!1}return!0}(c,{requireTld:t.requireTld}))return!1;if('"'===m[0])return m=m.slice(1,m.length-1),t.allowUtf8LocalPart?u.test(m):o.test(m);const f=t.allowUtf8LocalPart?s:r,g=m.split(".");for(let i=0;i<g.length;i++)if(!f.test(g[i]))return!1;return!0}var d=n(7294);const m=e=>{if(void 0===e)return[];return e.filter((e=>c(e)))};function f(e){const{id:t,style:n,className:i="",noClass:a,placeholder:l,autoFocus:r,allowDisplayName:o=!1,stripDisplayName:s=!1,allowDuplicate:u=!1,delimiter:p=`[${o?"":" "},;]`,initialInputValue:f="",inputClassName:g,autoComplete:h,getLabel:y,enable:b,onDisabled:k,validateEmail:x,onChange:v,onChangeInput:F,onFocus:C,onBlur:w,onKeyDown:N,onKeyUp:D,spinner:E,disableOnBlurValidation:P=!1}=e,O=d.useRef(null),[T,S]=d.useState(!1),[j,I]=d.useState([]),[M,q]=d.useState(f),[$,R]=d.useState(!1),_=d.useCallback((async(e,t)=>{const n=[];let i="";const a=new RegExp(p,"g"),l=x||c,r=e=>{if(!u)for(let t=0,n=j.length;t<n;t++)if(j[t]===e)return!1;return n.push(e),!0};if(""!==e)if(a.test(e)){const t=[...new Set(e.split(a).filter((e=>e)))];do{const n=l(""+t[0].trim());if("boolean"==typeof n)if(n)r(""+t.shift());else if(o){if(l(""+t[0].trim(),{allowDisplayName:o})){r(""+(s?t.shift()?.split("<")[1].split(">")[0]:t.shift()))}else 1===t.length?i=""+t.shift():t.shift()}else i=""+t.shift();else R(!0),!0===await(x?.(e))?(r(""+t.shift()),R(!1)):1===t.length?i=""+t.shift():t.shift()}while(t.length)}else{if(b&&!b({emailCnt:j.length}))return void k?.();if(t){const t=l(e);if("boolean"==typeof t)if(t)r(e);else if(o){if(l(e,{allowDisplayName:o})){r(s?e.split("<")[1].split(">")[0]:e)}else i=e}else i=e;else R(!0),!0===await(x?.(e))?(r(e),R(!1)):i=e}else i=e}I([...j,...n]),q(i),n.length&&v?.([...j,...n]),i!=i&&F?.(i)}),[o,u,p,j,b,v,F,k,s,x]),L=d.useCallback((async e=>{await _(e),F?.(e)}),[_,F]),U=d.useCallback(((e,t)=>{if(t)return;const n=[...j.slice(0,e),...j.slice(e+1)];I(n),v?.(n)}),[j,v]),A=d.useCallback((e=>{switch(N?.(e),e.key){case"Enter":e.preventDefault();break;case"Backspace":e.currentTarget.value||U(j.length-1,!1)}}),[j.length,N,U]),z=d.useCallback((async e=>{if(D?.(e),"Enter"===e.key)await _(e.currentTarget.value,!0)}),[_,D]),B=d.useCallback((async e=>await L(e.currentTarget.value)),[L]),K=d.useCallback((async e=>{S(!1),P||await _(e.currentTarget.value,!0),w?.()}),[P,_,w]),Z=d.useCallback((()=>{S(!0),C?.()}),[C]);return d.useEffect((()=>{I(m(e.emails))}),[e.emails]),d.createElement("div",{className:`${i} ${a?"":"react-multi-email"} ${T?"focused":""} ${""===M&&0===j.length?"empty":""}`,style:n,onClick:()=>O.current?.focus()},$&&E?.(),l?d.createElement("span",{"data-placeholder":!0},l):null,d.createElement("div",{className:"data-labels",style:{opacity:$?.45:1,display:"contents",flexWrap:"inherit"}},j.map(((e,t)=>y(e,t,U)))),d.createElement("input",{id:t,style:{opacity:$?.45:1},ref:O,type:"text",value:M,onFocus:Z,onBlur:K,onChange:B,onKeyDown:A,onKeyUp:z,autoFocus:r,className:g,autoComplete:h}))}},8007:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>h,frontMatter:()=>u,metadata:()=>c,toc:()=>m});var i=n(7462),a=n(7294),l=n(3905),r=n(2113);function o(){const[e,t]=a.useState([]);return a.createElement("div",{style:s},a.createElement("h3",null,"react-multi-email"),a.createElement(r.Q,{placeholder:"Input your Email Address",emails:e,id:"email_field",onChange:e=>{t(e)},getLabel:(e,t,n)=>a.createElement("div",{"data-tag":!0,key:t},e,a.createElement("span",{"data-tag-handle":!0,onClick:()=>n(t)},"\xd7"))}),a.createElement("h4",null,"react-multi-email value"),a.createElement("p",null,e.join(", ")||"empty"))}const s={fontFamily:"sans-serif",width:"500px",border:"1px solid rgb(238, 238, 238)",background:"rgb(243, 243, 243)",padding:"25px",margin:"20px",color:"black"},u={sidebar_position:5,description:"Setting a Unique Identifier with the id Prop"},p=void 0,c={unversionedId:"Props/id",id:"version-1.0.16/Props/id",title:"id",description:"Setting a Unique Identifier with the id Prop",source:"@site/versioned_docs/version-1.0.16/Props/id.mdx",sourceDirName:"Props",slug:"/Props/id",permalink:"/react-multi-email-docs/docs/Props/id",draft:!1,tags:[],version:"1.0.16",sidebarPosition:5,frontMatter:{sidebar_position:5,description:"Setting a Unique Identifier with the id Prop"},sidebar:"tutorialSidebar",previous:{title:"enable",permalink:"/react-multi-email-docs/docs/Props/enable"},next:{title:"noClass",permalink:"/react-multi-email-docs/docs/Props/noClass"}},d={},m=[{value:"About id",id:"about-id",level:2},{value:"Demo",id:"demo",level:2},{value:"Result",id:"result",level:2},{value:"Code",id:"code",level:2},{value:"Full code",id:"full-code",level:3},{value:"Code snippet",id:"code-snippet",level:3}],f={toc:m},g="wrapper";function h(e){let{components:t,...a}=e;return(0,l.kt)(g,(0,i.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"In ",(0,l.kt)("inlineCode",{parentName:"p"},"ReactMultiEmail"),", the ",(0,l.kt)("inlineCode",{parentName:"p"},"id")," prop corresponds to the ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"id")," attribute in HTML,")," universally utilized to grant a unique identifier to each HTML element on a webpage.\nIt\u2019s crucial that each id within a page is unique to prevent conflicts and ensure proper element identification."),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"id")," prop in ",(0,l.kt)("inlineCode",{parentName:"p"},"ReactMultiEmail")," is designated to assign a unique identifier to the input element rendered by the component."),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"about-id"},"About id"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Property: ",(0,l.kt)("inlineCode",{parentName:"li"},"id")),(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"string")),(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"undefined"))),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"demo"},"Demo"),(0,l.kt)(o,{mdxType:"Id"}),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"result"},"Result"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"My Image",src:n(5251).Z,width:"848",height:"38"})),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"The ",(0,l.kt)("inlineCode",{parentName:"p"},"id")," assigned as a prop is reflected in the ",(0,l.kt)("strong",{parentName:"p"},"input box"),".")),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"code"},"Code"),(0,l.kt)("h3",{id:"full-code"},"Full code"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="Id.tsx"',title:'"Id.tsx"'},'import * as React from \'react\';\nimport { ReactMultiEmail } from \'react-multi-email\';\nimport \'react-multi-email/dist/style.css\';\n\nexport default function multiEmail() {\n  const [emails, setEmails] = React.useState<string[]>([]);\n\n  return (\n    <div style={styles}>\n      <h3>react-multi-email</h3>\n      <ReactMultiEmail\n        // id prop\n        id="email_field"\n        placeholder="Input your Email Address"\n        emails={emails}\n        onChange={(_emails: string[]) => {\n          setEmails(_emails);\n        }}\n        getLabel={(\n          email: string,\n          index: number,\n          removeEmail: (index: number) => void\n        ) => {\n          return (\n            <div data-tag key={index}>\n              {email}\n              <span data-tag-handle onClick={() => removeEmail(index)}>\n                \xd7\n              </span>\n            </div>\n          );\n        }}\n      />\n      <h4>react-multi-email value</h4>\n      <p>{emails.join(", ") || "empty"}</p>\n    </div>\n  );\n}\n\nconst styles = {\n  fontFamily: "sans-serif",\n  width: "500px",\n  border: "1px solid rgb(238, 238, 238)",\n  background: "rgb(243, 243, 243)",\n  padding: "25px",\n  margin: "20px",\n  color: "black",\n};\n')),(0,l.kt)("h3",{id:"code-snippet"},"Code snippet"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="Id.tsx"',title:'"Id.tsx"'},'<ReactMultiEmail\n  id="email_field"\n  // other props...\n/>\n')),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("admonition",{title:"Practical Uses of id Prop",type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"Within the ReactMultiEmail component, the ",(0,l.kt)("inlineCode",{parentName:"p"},"id")," prop is predominantly used for:"),(0,l.kt)("ol",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"DOM Manipulation & Query"),": Direct manipulation or querying a DOM element using JavaScript often requires the use of the id prop to access specific elements easily."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Styling and Scripting"),": The ",(0,l.kt)("inlineCode",{parentName:"li"},"id")," prop can target a specific ",(0,l.kt)("inlineCode",{parentName:"li"},"input")," element for the application of CSS styles or the execution of JavaScript functions."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Label Association"),":  By employing the ",(0,l.kt)("inlineCode",{parentName:"li"},"id")," value, a ",(0,l.kt)("inlineCode",{parentName:"li"},"label")," element can be associated with an input field, enhancing user experience by enabling the focusing of the corresponding input field through label interaction."))))}h.isMDXComponent=!0},5251:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/id-2d47830bda5c4a52fb9155213ce2fe4e.png"}}]);