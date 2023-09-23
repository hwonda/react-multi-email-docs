"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[281],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=a.createContext({}),u=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=u(e.components);return a.createElement(o.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(t),d=i,f=c["".concat(o,".").concat(d)]||c[d]||m[d]||r;return t?a.createElement(f,l(l({ref:n},p),{},{components:t})):a.createElement(f,l({ref:n},p))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=d;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s[c]="string"==typeof e?e:i,l[1]=s;for(var u=2;u<r;u++)l[u]=t[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2113:(e,n,t)=>{t.d(n,{Q:()=>f});const a={requireTld:!0,allowUnderscores:!1,allowTrailingDot:!1},i={allowDisplayName:!1,requireDisplayName:!1,allowUtf8LocalPart:!0,requireTld:!0},r=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\,\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF\s]*<(.+)>$/i,l=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i,s=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i,o=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i,u=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i;function p(e,n){let t,a=0;const i=encodeURI(e).split(/%..|./).length-1;return n&&(a=Number(n.min)||0,t=Number(n.max)),i>=a&&(void 0===t||i<=t)}function c(e,n){if((n={...i,...n}).requireDisplayName||n.allowDisplayName){const t=e.match(r);if(t)e=t[1];else if(n.requireDisplayName)return!1}const t=e.split("@"),c=""+t.pop(),m=c.toLowerCase();let d=t.join("@");if("gmail.com"!==m&&"googlemail.com"!==m||(d=d.replace(/\./g,"").toLowerCase()),!p(d,{max:64})||!p(c,{max:254}))return!1;if(!function(e,n){(n={...a,...n}).allowTrailingDot&&"."===e[e.length-1]&&(e=e.substring(0,e.length-1));const t=e.split(".");if(n.requireTld){const e=""+t.pop();if(!t.length||!/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(e))return!1;if(/[\s\u2002-\u200B\u202F\u205F\u3000\uFEFF\uDB40\uDC20]/.test(e))return!1}for(let a,i=0;i<t.length;i++){if(a=t[i],n.allowUnderscores&&(a=a.replace(/_/g,"")),!/^[a-z\u00a1-\uffff0-9-]+$/i.test(a))return!1;if(/[\uff01-\uff5e]/.test(a))return!1;if("-"===a[0]||"-"===a[a.length-1])return!1}return!0}(c,{requireTld:n.requireTld}))return!1;if('"'===d[0])return d=d.slice(1,d.length-1),n.allowUtf8LocalPart?u.test(d):s.test(d);const f=n.allowUtf8LocalPart?o:l,h=d.split(".");for(let a=0;a<h.length;a++)if(!f.test(h[a]))return!1;return!0}var m=t(7294);const d=e=>{if(void 0===e)return[];return e.filter((e=>c(e)))};function f(e){const{id:n,style:t,className:a="",noClass:i,placeholder:r,autoFocus:l,allowDisplayName:s=!1,stripDisplayName:o=!1,allowDuplicate:u=!1,delimiter:p=`[${s?"":" "},;]`,initialInputValue:f="",inputClassName:h,autoComplete:g,getLabel:y,enable:b,onDisabled:v,validateEmail:x,onChange:k,onChangeInput:F,onFocus:w,onBlur:C,onKeyDown:E,onKeyUp:N,spinner:D,disableOnBlurValidation:P=!1}=e,O=m.useRef(null),[S,T]=m.useState(!1),[j,$]=m.useState([]),[L,R]=m.useState(f),[_,A]=m.useState(!1),q=m.useCallback((async(e,n)=>{const t=[];let a="";const i=new RegExp(p,"g"),r=x||c,l=e=>{if(!u)for(let n=0,t=j.length;n<t;n++)if(j[n]===e)return!1;return t.push(e),!0};if(""!==e)if(i.test(e)){const n=[...new Set(e.split(i).filter((e=>e)))];do{const t=r(""+n[0].trim());if("boolean"==typeof t)if(t)l(""+n.shift());else if(s){if(r(""+n[0].trim(),{allowDisplayName:s})){l(""+(o?n.shift()?.split("<")[1].split(">")[0]:n.shift()))}else 1===n.length?a=""+n.shift():n.shift()}else a=""+n.shift();else A(!0),!0===await(x?.(e))?(l(""+n.shift()),A(!1)):1===n.length?a=""+n.shift():n.shift()}while(n.length)}else{if(b&&!b({emailCnt:j.length}))return void v?.();if(n){const n=r(e);if("boolean"==typeof n)if(n)l(e);else if(s){if(r(e,{allowDisplayName:s})){l(o?e.split("<")[1].split(">")[0]:e)}else a=e}else a=e;else A(!0),!0===await(x?.(e))?(l(e),A(!1)):a=e}else a=e}$([...j,...t]),R(a),t.length&&k?.([...j,...t]),a!=a&&F?.(a)}),[s,u,p,j,b,k,F,v,o,x]),I=m.useCallback((async e=>{await q(e),F?.(e)}),[q,F]),M=m.useCallback(((e,n)=>{if(n)return;const t=[...j.slice(0,e),...j.slice(e+1)];$(t),k?.(t)}),[j,k]),U=m.useCallback((e=>{switch(E?.(e),e.key){case"Enter":e.preventDefault();break;case"Backspace":e.currentTarget.value||M(j.length-1,!1)}}),[j.length,E,M]),z=m.useCallback((async e=>{if(N?.(e),"Enter"===e.key)await q(e.currentTarget.value,!0)}),[q,N]),B=m.useCallback((async e=>await I(e.currentTarget.value)),[I]),K=m.useCallback((async e=>{T(!1),P||await q(e.currentTarget.value,!0),C?.()}),[P,q,C]),V=m.useCallback((()=>{T(!0),w?.()}),[w]);return m.useEffect((()=>{$(d(e.emails))}),[e.emails]),m.createElement("div",{className:`${a} ${i?"":"react-multi-email"} ${S?"focused":""} ${""===L&&0===j.length?"empty":""}`,style:t,onClick:()=>O.current?.focus()},_&&D?.(),r?m.createElement("span",{"data-placeholder":!0},r):null,m.createElement("div",{className:"data-labels",style:{opacity:_?.45:1,display:"contents",flexWrap:"inherit"}},j.map(((e,n)=>y(e,n,M)))),m.createElement("input",{id:n,style:{opacity:_?.45:1},ref:O,type:"text",value:L,onFocus:V,onBlur:K,onChange:B,onKeyDown:U,onKeyUp:z,autoFocus:l,className:h,autoComplete:g}))}},4822:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>p,default:()=>g,frontMatter:()=>u,metadata:()=>c,toc:()=>d});var a=t(7462),i=t(7294),r=t(3905),l=t(2113);function s(){const[e,n]=i.useState([]);return i.createElement("div",{style:o},i.createElement("h3",null,"react-multi-email"),i.createElement(l.Q,{enableSpinner:!0,spinner:()=>i.createElement("div",null,"Loading..."),emails:e,onChange:e=>{n(e)},validateEmail:async e=>{try{const n=await fetch(`https://api.example.com/validate-email?email=${e}`);return(await n.json()).isValid}catch(n){return!1}},getLabel:(e,n,t)=>i.createElement("div",{"data-tag":!0,key:n},e,i.createElement("span",{"data-tag-handle":!0,onClick:()=>t(n)},"\xd7"))}),i.createElement("h4",null,"react-multi-email value"),i.createElement("p",null,e.join(", ")||"empty"))}const o={fontFamily:"sans-serif",width:"500px",border:"1px solid rgb(238, 238, 238)",background:"rgb(243, 243, 243)",padding:"25px",margin:"20px",color:"black"},u={sidebar_position:13,description:"Spinner"},p=void 0,c={unversionedId:"Props/spinner",id:"version-1.0.16/Props/spinner",title:"spinner",description:"Spinner",source:"@site/versioned_docs/version-1.0.16/Props/spinner.mdx",sourceDirName:"Props",slug:"/Props/spinner",permalink:"/react-multi-email-docs/docs/Props/spinner",draft:!1,tags:[],version:"1.0.16",sidebarPosition:13,frontMatter:{sidebar_position:13,description:"Spinner"},sidebar:"tutorialSidebar",previous:{title:"validateEmail",permalink:"/react-multi-email-docs/docs/Props/validateEmail"},next:{title:"onChangeInput",permalink:"/react-multi-email-docs/docs/Props/onChangeInput"}},m={},d=[{value:"About spinner &amp; enableSpinner",id:"about-spinner--enablespinner",level:2},{value:"spinner",id:"spinner",level:3},{value:"enableSpinner",id:"enablespinner",level:3},{value:"Demo",id:"demo",level:2},{value:"Code",id:"code",level:2},{value:"Whole code",id:"whole-code",level:3},{value:"Specific code",id:"specific-code",level:3}],f={toc:d},h="wrapper";function g(e){let{components:n,...t}=e;return(0,r.kt)(h,(0,a.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"spinner")," prop is provided in the react-multi-email component to visually represent the loading status to the user when the email address is being validated asynchronously (i.e., ",(0,r.kt)("strong",{parentName:"p"},"when validateEmail returns a Promise"),"). "),(0,r.kt)("p",null,"However, this spinner is only ",(0,r.kt)("strong",{parentName:"p"},"activated")," when ",(0,r.kt)("inlineCode",{parentName:"p"},"enableSpinner")," is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),".\nThrough the ",(0,r.kt)("inlineCode",{parentName:"p"},"spinner")," function, users can render a custom loading interface."),(0,r.kt)("h2",{id:"about-spinner--enablespinner"},"About spinner & enableSpinner"),(0,r.kt)("h3",{id:"spinner"},"spinner"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Property: ",(0,r.kt)("inlineCode",{parentName:"li"},"spinner")),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("inlineCode",{parentName:"li"},"() => React.ReactNode")),(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"() => {}"))),(0,r.kt)("h3",{id:"enablespinner"},"enableSpinner"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Property: ",(0,r.kt)("inlineCode",{parentName:"li"},"enableSpinner")),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean")),(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"))),(0,r.kt)("h2",{id:"demo"},"Demo"),(0,r.kt)(s,{mdxType:"Spinner"}),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The asynchronous validation illustrated in the ",(0,r.kt)("strong",{parentName:"p"},"example isn't connected to a functional API"),".",(0,r.kt)("br",null),"\nThus, when an email is entered, the ",(0,r.kt)("inlineCode",{parentName:"p"},"spinner")," will continue to ",(0,r.kt)("strong",{parentName:"p"},"run indefinitely"),".")),(0,r.kt)("h2",{id:"code"},"Code"),(0,r.kt)("h3",{id:"whole-code"},"Whole code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="spinner.tsx"',title:'"spinner.tsx"'},'import * as React from \'react\';\nimport { ReactMultiEmail } from \'react-multi-email\';\nimport \'react-multi-email/dist/style.css\';\n\nexport default function multiEmail() {\n  const [emails, setEmails] = React.useState<string[]>([]);\n\n  const validateEmailFunc = async (email: string) => {\n    try {\n      const response = await fetch(`https://api.example.com/validate-email?email=${email}`);\n      const data = await response.json();\n      return data.isValid;\n    } catch (error) {\n      return false;\n    }\n  };\n\n  return (\n    <div style={styles}>\n      <h3>react-multi-email</h3>\n      <ReactMultiEmail\n        // enableSpinner & spinner props\n        enableSpinner={true}\n        spinner={() => <div>Loading...</div>}\n        validateEmail={validateEmailFunc}\n        emails={emails}\n        onChange={(_emails: string[]) => {\n          setEmails(_emails);\n        }}\n        getLabel={(\n          email: string,\n          index: number,\n          removeEmail: (index: number) => void\n        ) => {\n          return (\n            <div data-tag key={index}>\n              {email}\n              <span data-tag-handle onClick={() => removeEmail(index)}>\n                \xd7\n              </span>\n            </div>\n          );\n        }}\n      />\n      <h4>react-multi-email value</h4>\n      <p>{emails.join(", ") || "empty"}</p>\n    </div>\n  );\n}\n\nconst styles = {\n  fontFamily: "sans-serif",\n  width: "500px",\n  border: "1px solid rgb(238, 238, 238)",\n  background: "rgb(243, 243, 243)",\n  padding: "25px",\n  margin: "20px",\n  color: "black",\n};\n\n')),(0,r.kt)("h3",{id:"specific-code"},"Specific code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="spinner.tsx"',title:'"spinner.tsx"'},"<ReactMultiEmail\n  enableSpinner={true}\n  spinner={()=>{ return(<div>Loading...</div>)}}\n/>\n")))}g.isMDXComponent=!0}}]);