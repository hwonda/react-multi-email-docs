"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[336],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>y});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(t),m=r,y=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return t?a.createElement(y,o(o({ref:n},c),{},{components:t})):a.createElement(y,o({ref:n},c))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2113:(e,n,t)=>{t.d(n,{Q:()=>y});const a={requireTld:!0,allowUnderscores:!1,allowTrailingDot:!1},r={allowDisplayName:!1,requireDisplayName:!1,allowUtf8LocalPart:!0,requireTld:!0},l=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\,\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF\s]*<(.+)>$/i,o=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i,i=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i,s=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i,u=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i;function c(e,n){let t,a=0;const r=encodeURI(e).split(/%..|./).length-1;return n&&(a=Number(n.min)||0,t=Number(n.max)),r>=a&&(void 0===t||r<=t)}function p(e,n){if((n={...r,...n}).requireDisplayName||n.allowDisplayName){const t=e.match(l);if(t)e=t[1];else if(n.requireDisplayName)return!1}const t=e.split("@"),p=""+t.pop(),d=p.toLowerCase();let m=t.join("@");if("gmail.com"!==d&&"googlemail.com"!==d||(m=m.replace(/\./g,"").toLowerCase()),!c(m,{max:64})||!c(p,{max:254}))return!1;if(!function(e,n){(n={...a,...n}).allowTrailingDot&&"."===e[e.length-1]&&(e=e.substring(0,e.length-1));const t=e.split(".");if(n.requireTld){const e=""+t.pop();if(!t.length||!/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(e))return!1;if(/[\s\u2002-\u200B\u202F\u205F\u3000\uFEFF\uDB40\uDC20]/.test(e))return!1}for(let a,r=0;r<t.length;r++){if(a=t[r],n.allowUnderscores&&(a=a.replace(/_/g,"")),!/^[a-z\u00a1-\uffff0-9-]+$/i.test(a))return!1;if(/[\uff01-\uff5e]/.test(a))return!1;if("-"===a[0]||"-"===a[a.length-1])return!1}return!0}(p,{requireTld:n.requireTld}))return!1;if('"'===m[0])return m=m.slice(1,m.length-1),n.allowUtf8LocalPart?u.test(m):i.test(m);const y=n.allowUtf8LocalPart?s:o,f=m.split(".");for(let a=0;a<f.length;a++)if(!y.test(f[a]))return!1;return!0}var d=t(7294);const m=e=>{if(void 0===e)return[];return e.filter((e=>p(e)))};function y(e){const{id:n,style:t,className:a="",noClass:r,placeholder:l,autoFocus:o,allowDisplayName:i=!1,stripDisplayName:s=!1,allowDuplicate:u=!1,delimiter:c=`[${i?"":" "},;]`,initialInputValue:y="",inputClassName:f,autoComplete:g,getLabel:h,enable:w,onDisabled:k,validateEmail:b,onChange:v,onChangeInput:D,onFocus:x,onBlur:F,onKeyDown:E,onKeyUp:C,spinner:K,disableOnBlurValidation:N=!1}=e,O=d.useRef(null),[T,P]=d.useState(!1),[j,R]=d.useState([]),[$,S]=d.useState(y),[M,I]=d.useState(!1),L=d.useCallback((async(e,n)=>{const t=[];let a="";const r=new RegExp(c,"g"),l=b||p,o=e=>{if(!u)for(let n=0,t=j.length;n<t;n++)if(j[n]===e)return!1;return t.push(e),!0};if(""!==e)if(r.test(e)){const n=[...new Set(e.split(r).filter((e=>e)))];do{const t=l(""+n[0].trim());if("boolean"==typeof t)if(t)o(""+n.shift());else if(i){if(l(""+n[0].trim(),{allowDisplayName:i})){o(""+(s?n.shift()?.split("<")[1].split(">")[0]:n.shift()))}else 1===n.length?a=""+n.shift():n.shift()}else a=""+n.shift();else I(!0),!0===await(b?.(e))?(o(""+n.shift()),I(!1)):1===n.length?a=""+n.shift():n.shift()}while(n.length)}else{if(w&&!w({emailCnt:j.length}))return void k?.();if(n){const n=l(e);if("boolean"==typeof n)if(n)o(e);else if(i){if(l(e,{allowDisplayName:i})){o(s?e.split("<")[1].split(">")[0]:e)}else a=e}else a=e;else I(!0),!0===await(b?.(e))?(o(e),I(!1)):a=e}else a=e}R([...j,...t]),S(a),t.length&&v?.([...j,...t]),a!=a&&D?.(a)}),[i,u,c,j,w,v,D,k,s,b]),U=d.useCallback((async e=>{await L(e),D?.(e)}),[L,D]),A=d.useCallback(((e,n)=>{if(n)return;const t=[...j.slice(0,e),...j.slice(e+1)];R(t),v?.(t)}),[j,v]),_=d.useCallback((e=>{switch(E?.(e),e.key){case"Enter":e.preventDefault();break;case"Backspace":e.currentTarget.value||A(j.length-1,!1)}}),[j.length,E,A]),q=d.useCallback((async e=>{if(C?.(e),"Enter"===e.key)await L(e.currentTarget.value,!0)}),[L,C]),z=d.useCallback((async e=>await U(e.currentTarget.value)),[U]),B=d.useCallback((async e=>{P(!1),N||await L(e.currentTarget.value,!0),F?.()}),[N,L,F]),H=d.useCallback((()=>{P(!0),x?.()}),[x]);return d.useEffect((()=>{R(m(e.emails))}),[e.emails]),d.createElement("div",{className:`${a} ${r?"":"react-multi-email"} ${T?"focused":""} ${""===$&&0===j.length?"empty":""}`,style:t,onClick:()=>O.current?.focus()},M&&K?.(),l?d.createElement("span",{"data-placeholder":!0},l):null,d.createElement("div",{className:"data-labels",style:{opacity:M?.45:1,display:"contents",flexWrap:"inherit"}},j.map(((e,n)=>h(e,n,A)))),d.createElement("input",{id:n,style:{opacity:M?.45:1},ref:O,type:"text",value:$,onFocus:H,onBlur:B,onChange:z,onKeyDown:_,onKeyUp:q,autoFocus:o,className:f,autoComplete:g}))}},3915:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>g,frontMatter:()=>u,metadata:()=>p,toc:()=>m});var a=t(7462),r=t(7294),l=t(3905),o=t(2113);function i(){const[e,n]=r.useState([]),[t,a]=r.useState("");return r.createElement("div",{style:s},r.createElement("h3",null,"react-multi-email"),r.createElement(o.Q,{placeholder:"Input your Email Address",emails:e,onChange:e=>{n(e)},onKeyDown:e=>{console.log(e.key),a(e.key)},getLabel:(e,n,t)=>r.createElement("div",{"data-tag":!0,key:n},e,r.createElement("span",{"data-tag-handle":!0,onClick:()=>t(n)},"\xd7"))}),r.createElement("h4",null,"react-multi-email value"),r.createElement("p",null,e.join(", ")||"empty"),r.createElement("div",null,"currentKey(keyDown): ",t))}const s={fontFamily:"sans-serif",width:"500px",border:"1px solid rgb(238, 238, 238)",background:"rgb(243, 243, 243)",padding:"25px",margin:"20px",color:"black"},u={sidebar_position:11,description:"onKeyDown triggers when a key is pressed"},c=void 0,p={unversionedId:"Props/onKeyDown",id:"version-1.0.16/Props/onKeyDown",title:"onKeyDown",description:"onKeyDown triggers when a key is pressed",source:"@site/versioned_docs/version-1.0.16/Props/onKeyDown.mdx",sourceDirName:"Props",slug:"/Props/onKeyDown",permalink:"/react-multi-email-docs/docs/Props/onKeyDown",draft:!1,tags:[],version:"1.0.16",sidebarPosition:11,frontMatter:{sidebar_position:11,description:"onKeyDown triggers when a key is pressed"},sidebar:"tutorialSidebar",previous:{title:"onFocus",permalink:"/react-multi-email-docs/docs/Props/onFocus"},next:{title:"onKeyUp",permalink:"/react-multi-email-docs/docs/Props/onKeyUp"}},d={},m=[{value:"About onKeyDown",id:"about-onkeydown",level:2},{value:"Demo",id:"demo",level:2},{value:"Code",id:"code",level:2},{value:"Full code",id:"full-code",level:3},{value:"Code snippet",id:"code-snippet",level:3},{value:"Internal logic code (handleOnKeyDown)",id:"internal-logic-code-handleonkeydown",level:3}],y={toc:m},f="wrapper";function g(e){let{components:n,...t}=e;return(0,l.kt)(f,(0,a.Z)({},y,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"onKeyDown")," prop is used to handle the event when a user presses down on a keyboard key."),(0,l.kt)("p",null,"This callback is invoked ",(0,l.kt)("strong",{parentName:"p"},"every time a keypress event occurs"),". The ",(0,l.kt)("inlineCode",{parentName:"p"},"KeyboardEvent object")," passed as an argument ",(0,l.kt)("strong",{parentName:"p"},"provides detailed information")," about ",(0,l.kt)("strong",{parentName:"p"},"the specific keypress event"),"."),(0,l.kt)("p",null,"This code essentially integrates the user-provided ",(0,l.kt)("inlineCode",{parentName:"p"},"onKeyDown")," handler with ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/axisj/react-multi-email/blob/master/react-multi-email/ReactMultiEmail.tsx"},"the internal logic of the component - ",(0,l.kt)("inlineCode",{parentName:"a"},"handleOnKeyDown")),", ensuring that both the component's internal behavior and any external logic associated with the ",(0,l.kt)("inlineCode",{parentName:"p"},"onKeyDown")," prop are executed when a key is pressed."),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"about-onkeydown"},"About onKeyDown"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Property: ",(0,l.kt)("inlineCode",{parentName:"li"},"onKeyDown")),(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"(evt: React.KeyboardEvent) => void;")),(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"undefined"))),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"demo"},"Demo"),(0,l.kt)(i,{mdxType:"OnKeyDown"}),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("inlineCode",{parentName:"p"},"OnKeyDown")," works when ",(0,l.kt)("strong",{parentName:"p"},"the keyboard is pressed"),". So it ",(0,l.kt)("strong",{parentName:"p"},"runs before")," the ",(0,l.kt)("inlineCode",{parentName:"p"},"onKeyUp")," function.")),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"code"},"Code"),(0,l.kt)("h3",{id:"full-code"},"Full code"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="OnKeyDown.tsx"',title:'"OnKeyDown.tsx"'},'import * as React from \'react\';\nimport { ReactMultiEmail } from \'react-multi-email\';\nimport \'react-multi-email/dist/style.css\';\n\nexport default function multiEmail() {\n  const [emails, setEmails] = React.useState<string[]>([]);\n  const [currentKeyDown, setCurrentKeyDown] = React.useState<string>("");\n\n  const onKeyDownFunc = (event: React.KeyboardEvent<HTMLInputElement>) => {\n    console.log(event.key);\n    setCurrentKeyDown(event.key);\n  };\n\n  return (\n    <div style={styles}>\n      <h3>react-multi-email</h3>\n      <ReactMultiEmail\n        // onKetDown prop\n        onKeyDown={onKeyDownFunc}\n        placeholder="Input your Email Address"\n        emails={emails}\n        onChange={(_emails: string[]) => {\n          setEmails(_emails);\n        }}\n        getLabel={(\n          email: string,\n          index: number,\n          removeEmail: (index: number) => void\n        ) => {\n          return (\n            <div data-tag key={index}>\n              {email}\n              <span data-tag-handle onClick={() => removeEmail(index)}>\n                \xd7\n              </span>\n            </div>\n          );\n        }}\n      />\n      <h4>react-multi-email value</h4>\n      <p>{emails.join(", ") || "empty"}</p>\n      <div>currentKey(keyDown): {currentKeyDown}</div>\n    </div>\n  );\n}\n\nconst styles = {\n  fontFamily: "sans-serif",\n  width: "500px",\n  border: "1px solid rgb(238, 238, 238)",\n  background: "rgb(243, 243, 243)",\n  padding: "25px",\n  margin: "20px",\n  color: "black",\n};\n\n')),(0,l.kt)("h3",{id:"code-snippet"},"Code snippet"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="OnKeyDown.tsx"',title:'"OnKeyDown.tsx"'},"const onKeyDownFunc = (event: React.KeyboardEvent<HTMLInputElement>) => {\n  // do something\n};\n\n<ReactMultiEmail\n  onKeyDown={onKeyDownFunc}\n/>\n")),(0,l.kt)("h3",{id:"internal-logic-code-handleonkeydown"},"Internal logic code (handleOnKeyDown)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="ReactMultiEmail.tsx"',title:'"ReactMultiEmail.tsx"'},"const handleOnKeydown = React.useCallback(\n  (e: React.KeyboardEvent<HTMLInputElement>) => {\n    onKeyDown?.(e);\n\n    switch (e.key) {\n      case 'Enter':\n        e.preventDefault();\n        break;\n      case 'Backspace':\n        if (!e.currentTarget.value) {\n          removeEmail(emails.length - 1, false);\n        }\n        break;\n      default:\n    }\n  },\n  [emails.length, onKeyDown, removeEmail],\n);\n")))}g.isMDXComponent=!0}}]);