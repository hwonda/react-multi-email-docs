"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[398],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},A="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),A=u(n),m=l,d=A["".concat(s,".").concat(m)]||A[m]||p[m]||i;return n?a.createElement(d,o(o({ref:t},c),{},{components:n})):a.createElement(d,o({ref:t},c))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,o=new Array(i);o[0]=m;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[A]="string"==typeof e?e:l,o[1]=r;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2113:(e,t,n)=>{n.d(t,{Q:()=>d});const a={requireTld:!0,allowUnderscores:!1,allowTrailingDot:!1},l={allowDisplayName:!1,requireDisplayName:!1,allowUtf8LocalPart:!0,requireTld:!0},i=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\,\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF\s]*<(.+)>$/i,o=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i,r=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i,s=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i,u=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i;function c(e,t){let n,a=0;const l=encodeURI(e).split(/%..|./).length-1;return t&&(a=Number(t.min)||0,n=Number(t.max)),l>=a&&(void 0===n||l<=n)}function A(e,t){if((t={...l,...t}).requireDisplayName||t.allowDisplayName){const n=e.match(i);if(n)e=n[1];else if(t.requireDisplayName)return!1}const n=e.split("@"),A=""+n.pop(),p=A.toLowerCase();let m=n.join("@");if("gmail.com"!==p&&"googlemail.com"!==p||(m=m.replace(/\./g,"").toLowerCase()),!c(m,{max:64})||!c(A,{max:254}))return!1;if(!function(e,t){(t={...a,...t}).allowTrailingDot&&"."===e[e.length-1]&&(e=e.substring(0,e.length-1));const n=e.split(".");if(t.requireTld){const e=""+n.pop();if(!n.length||!/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(e))return!1;if(/[\s\u2002-\u200B\u202F\u205F\u3000\uFEFF\uDB40\uDC20]/.test(e))return!1}for(let a,l=0;l<n.length;l++){if(a=n[l],t.allowUnderscores&&(a=a.replace(/_/g,"")),!/^[a-z\u00a1-\uffff0-9-]+$/i.test(a))return!1;if(/[\uff01-\uff5e]/.test(a))return!1;if("-"===a[0]||"-"===a[a.length-1])return!1}return!0}(A,{requireTld:t.requireTld}))return!1;if('"'===m[0])return m=m.slice(1,m.length-1),t.allowUtf8LocalPart?u.test(m):r.test(m);const d=t.allowUtf8LocalPart?s:o,f=m.split(".");for(let a=0;a<f.length;a++)if(!d.test(f[a]))return!1;return!0}var p=n(7294);const m=e=>{if(void 0===e)return[];return e.filter((e=>A(e)))};function d(e){const{id:t,style:n,className:a="",noClass:l,placeholder:i,autoFocus:o,allowDisplayName:r=!1,stripDisplayName:s=!1,allowDuplicate:u=!1,delimiter:c=`[${r?"":" "},;]`,initialInputValue:d="",inputClassName:f,autoComplete:g,getLabel:b,enable:v,onDisabled:h,validateEmail:C,onChange:x,onChangeInput:y,onFocus:k,onBlur:D,onKeyDown:N,onKeyUp:w,spinner:F,disableOnBlurValidation:B=!1}=e,E=p.useRef(null),[O,I]=p.useState(!1),[j,P]=p.useState([]),[R,G]=p.useState(d),[Z,H]=p.useState(!1),Y=p.useCallback((async(e,t)=>{const n=[];let a="";const l=new RegExp(c,"g"),i=C||A,o=e=>{if(!u)for(let t=0,n=j.length;t<n;t++)if(j[t]===e)return!1;return n.push(e),!0};if(""!==e)if(l.test(e)){const t=[...new Set(e.split(l).filter((e=>e)))];do{const n=i(""+t[0].trim());if("boolean"==typeof n)if(n)o(""+t.shift());else if(r){if(i(""+t[0].trim(),{allowDisplayName:r})){o(""+(s?t.shift()?.split("<")[1].split(">")[0]:t.shift()))}else 1===t.length?a=""+t.shift():t.shift()}else a=""+t.shift();else H(!0),!0===await(C?.(e))?(o(""+t.shift()),H(!1)):1===t.length?a=""+t.shift():t.shift()}while(t.length)}else{if(v&&!v({emailCnt:j.length}))return void h?.();if(t){const t=i(e);if("boolean"==typeof t)if(t)o(e);else if(r){if(i(e,{allowDisplayName:r})){o(s?e.split("<")[1].split(">")[0]:e)}else a=e}else a=e;else H(!0),!0===await(C?.(e))?(o(e),H(!1)):a=e}else a=e}P([...j,...n]),G(a),n.length&&x?.([...j,...n]),a!=a&&y?.(a)}),[r,u,c,j,v,x,y,h,s,C]),J=p.useCallback((async e=>{await Y(e),y?.(e)}),[Y,y]),X=p.useCallback(((e,t)=>{if(t)return;const n=[...j.slice(0,e),...j.slice(e+1)];P(n),x?.(n)}),[j,x]),M=p.useCallback((e=>{switch(N?.(e),e.key){case"Enter":e.preventDefault();break;case"Backspace":e.currentTarget.value||X(j.length-1,!1)}}),[j.length,N,X]),z=p.useCallback((async e=>{if(w?.(e),"Enter"===e.key)await Y(e.currentTarget.value,!0)}),[Y,w]),S=p.useCallback((async e=>await J(e.currentTarget.value)),[J]),Q=p.useCallback((async e=>{I(!1),B||await Y(e.currentTarget.value,!0),D?.()}),[B,Y,D]),T=p.useCallback((()=>{I(!0),k?.()}),[k]);return p.useEffect((()=>{P(m(e.emails))}),[e.emails]),p.createElement("div",{className:`${a} ${l?"":"react-multi-email"} ${O?"focused":""} ${""===R&&0===j.length?"empty":""}`,style:n,onClick:()=>E.current?.focus()},Z&&F?.(),i?p.createElement("span",{"data-placeholder":!0},i):null,p.createElement("div",{className:"data-labels",style:{opacity:Z?.45:1,display:"contents",flexWrap:"inherit"}},j.map(((e,t)=>b(e,t,X)))),p.createElement("input",{id:t,style:{opacity:Z?.45:1},ref:E,type:"text",value:R,onFocus:T,onBlur:Q,onChange:S,onKeyDown:M,onKeyUp:z,autoFocus:o,className:f,autoComplete:g}))}},5739:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>g,frontMatter:()=>u,metadata:()=>A,toc:()=>m});var a=n(7462),l=n(7294),i=n(3905),o=n(2113);function r(){const[e,t]=l.useState([]);return l.createElement("div",{style:s},l.createElement("h3",null,"react-multi-email"),l.createElement(o.Q,{noClass:!0,emails:e,onChange:e=>{t(e)},getLabel:(e,t,n)=>l.createElement("div",{"data-tag":!0,key:t},e,l.createElement("span",{"data-tag-handle":!0,onClick:()=>n(t)},"\xd7"))}),l.createElement("h4",null,"react-multi-email value"),l.createElement("p",null,e.join(", ")||"empty"))}const s={fontFamily:"sans-serif",width:"500px",border:"1px solid rgb(238, 238, 238)",background:"rgb(243, 243, 243)",padding:"25px",margin:"20px",color:"black"},u={sidebar_position:8,title:"noClass",description:"add custom class name to the root <div> element"},c=void 0,A={unversionedId:"Props/noClass",id:"version-1.0.16/Props/noClass",title:"noClass",description:"add custom class name to the root <div> element",source:"@site/versioned_docs/version-1.0.16/Props/noClass.mdx",sourceDirName:"Props",slug:"/Props/noClass",permalink:"/react-multi-email-docs/docs/Props/noClass",draft:!1,tags:[],version:"1.0.16",sidebarPosition:8,frontMatter:{sidebar_position:8,title:"noClass",description:"add custom class name to the root <div> element"},sidebar:"tutorialSidebar",previous:{title:"className",permalink:"/react-multi-email-docs/docs/Props/className"},next:{title:"enable",permalink:"/react-multi-email-docs/docs/Props/enable"}},p={},m=[{value:"About noClass",id:"about-noclass",level:2},{value:"Demo",id:"demo",level:2},{value:"Result",id:"result",level:2},{value:"Code",id:"code",level:2},{value:"Whole code",id:"whole-code",level:3},{value:"Specific code",id:"specific-code",level:3}],d={toc:m},f="wrapper";function g(e){let{components:t,...l}=e;return(0,i.kt)(f,(0,a.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"noClass")," prop is to determine whether to add the default provided class name ",(0,i.kt)("inlineCode",{parentName:"p"},"react-multi-email")," to the top-level div of the component.",(0,i.kt)("br",null)),(0,i.kt)("p",null,"If ",(0,i.kt)("inlineCode",{parentName:"p"},"noClass")," is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", the default class name ",(0,i.kt)("inlineCode",{parentName:"p"},"react-multi-email")," won't be included. On the other hand, if ",(0,i.kt)("inlineCode",{parentName:"p"},"noClass")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," or ",(0,i.kt)("strong",{parentName:"p"},"not set"),", the ",(0,i.kt)("inlineCode",{parentName:"p"},"react-multi-email")," class will be added to that ",(0,i.kt)("inlineCode",{parentName:"p"},"div")," element.",(0,i.kt)("br",null)),(0,i.kt)("p",null,"This functionality exists so that you can opt out of the default styling of the react-multi-email component if they wish. By setting the noClass prop to true, ",(0,i.kt)("strong",{parentName:"p"},"you can deactivate the default styling and apply their own custom styles.")),(0,i.kt)("h2",{id:"about-noclass"},"About noClass"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Property: ",(0,i.kt)("inlineCode",{parentName:"li"},"noClass")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean")),(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"))),(0,i.kt)("h2",{id:"demo"},"Demo"),(0,i.kt)(r,{mdxType:"NoClass"}),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Open developer mode and check class name. There is a difference in style because the default class(",(0,i.kt)("inlineCode",{parentName:"p"},"react-multi-email"),") is not applied.",(0,i.kt)("br",null),"\nYou can see that the class name is not specified in the picture below.")),(0,i.kt)("h2",{id:"result"},"Result"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"My Image",src:n(9221).Z,width:"304",height:"34"})),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"If the text area is empty, the ",(0,i.kt)("inlineCode",{parentName:"p"},"div")," element will have the class name ",(0,i.kt)("inlineCode",{parentName:"p"},"empty"),".")),(0,i.kt)("h2",{id:"code"},"Code"),(0,i.kt)("h3",{id:"whole-code"},"Whole code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="noClass.tsx"',title:'"noClass.tsx"'},'import * as React from \'react\';\nimport { ReactMultiEmail } from \'react-multi-email\';\nimport \'react-multi-email/dist/style.css\';\n\nexport default function multiEmail () {\n  const [emails, setEmails] = React.useState<string[]>([]);\n  \n  return (\n    <div style={styles}>\n      <h3>react-multi-email</h3>\n      <ReactMultiEmail\n        // noClass prop\n        noClass={true}\n        emails={emails}\n        onChange={(_emails: string[]) => {\n          setEmails(_emails);\n        }}\n        getLabel={(\n          email: string,\n          index: number,\n          removeEmail: (index: number) => void\n        ) => {\n          return (\n            <div data-tag key={index}>\n              {email}\n              <span data-tag-handle onClick={() => removeEmail(index)}>\n                \xd7\n              </span>\n            </div>\n          );\n        }}\n      />\n      <h4>react-multi-email value</h4>\n      <p>{emails.join(", ") || "empty"}</p>\n    </div>\n  );\n}\n\nconst styles = {\n  fontFamily: "sans-serif",\n  width: "500px",\n  border: "1px solid rgb(238, 238, 238)",\n  background: "rgb(243, 243, 243)",\n  padding: "25px",\n  margin: "20px",\n  color: "black",\n};\n')),(0,i.kt)("h3",{id:"specific-code"},"Specific code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="onDisabled.tsx"',title:'"onDisabled.tsx"'},"<ReactMultiEmail\n  noClass={true}\n/>\n")))}g.isMDXComponent=!0},9221:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,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"}}]);