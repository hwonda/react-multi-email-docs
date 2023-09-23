"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[931],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),m=i,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return n?a.createElement(f,r(r({ref:t},c),{},{components:n})):a.createElement(f,r({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:i,r[1]=o;for(var u=2;u<l;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2113:(e,t,n)=>{n.d(t,{Q:()=>f});const a={requireTld:!0,allowUnderscores:!1,allowTrailingDot:!1},i={allowDisplayName:!1,requireDisplayName:!1,allowUtf8LocalPart:!0,requireTld:!0},l=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\,\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF\s]*<(.+)>$/i,r=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i,o=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i,s=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i,u=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i;function c(e,t){let n,a=0;const i=encodeURI(e).split(/%..|./).length-1;return t&&(a=Number(t.min)||0,n=Number(t.max)),i>=a&&(void 0===n||i<=n)}function p(e,t){if((t={...i,...t}).requireDisplayName||t.allowDisplayName){const n=e.match(l);if(n)e=n[1];else if(t.requireDisplayName)return!1}const n=e.split("@"),p=""+n.pop(),d=p.toLowerCase();let m=n.join("@");if("gmail.com"!==d&&"googlemail.com"!==d||(m=m.replace(/\./g,"").toLowerCase()),!c(m,{max:64})||!c(p,{max:254}))return!1;if(!function(e,t){(t={...a,...t}).allowTrailingDot&&"."===e[e.length-1]&&(e=e.substring(0,e.length-1));const n=e.split(".");if(t.requireTld){const e=""+n.pop();if(!n.length||!/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(e))return!1;if(/[\s\u2002-\u200B\u202F\u205F\u3000\uFEFF\uDB40\uDC20]/.test(e))return!1}for(let a,i=0;i<n.length;i++){if(a=n[i],t.allowUnderscores&&(a=a.replace(/_/g,"")),!/^[a-z\u00a1-\uffff0-9-]+$/i.test(a))return!1;if(/[\uff01-\uff5e]/.test(a))return!1;if("-"===a[0]||"-"===a[a.length-1])return!1}return!0}(p,{requireTld:t.requireTld}))return!1;if('"'===m[0])return m=m.slice(1,m.length-1),t.allowUtf8LocalPart?u.test(m):o.test(m);const f=t.allowUtf8LocalPart?s:r,g=m.split(".");for(let a=0;a<g.length;a++)if(!f.test(g[a]))return!1;return!0}var d=n(7294);const m=e=>{if(void 0===e)return[];return e.filter((e=>p(e)))};function f(e){const{id:t,style:n,className:a="",noClass:i,placeholder:l,autoFocus:r,allowDisplayName:o=!1,stripDisplayName:s=!1,allowDuplicate:u=!1,delimiter:c=`[${o?"":" "},;]`,initialInputValue:f="",inputClassName:g,autoComplete:h,getLabel:y,enable:v,onDisabled:b,validateEmail:x,onChange:C,onChangeInput:k,onFocus:F,onBlur:w,onKeyDown:D,onKeyUp:E,spinner:N,disableOnBlurValidation:I=!1}=e,O=d.useRef(null),[S,P]=d.useState(!1),[T,j]=d.useState([]),[$,R]=d.useState(f),[_,L]=d.useState(!1),q=d.useCallback((async(e,t)=>{const n=[];let a="";const i=new RegExp(c,"g"),l=x||p,r=e=>{if(!u)for(let t=0,n=T.length;t<n;t++)if(T[t]===e)return!1;return n.push(e),!0};if(""!==e)if(i.test(e)){const t=[...new Set(e.split(i).filter((e=>e)))];do{const n=l(""+t[0].trim());if("boolean"==typeof n)if(n)r(""+t.shift());else if(o){if(l(""+t[0].trim(),{allowDisplayName:o})){r(""+(s?t.shift()?.split("<")[1].split(">")[0]:t.shift()))}else 1===t.length?a=""+t.shift():t.shift()}else a=""+t.shift();else L(!0),!0===await(x?.(e))?(r(""+t.shift()),L(!1)):1===t.length?a=""+t.shift():t.shift()}while(t.length)}else{if(v&&!v({emailCnt:T.length}))return void b?.();if(t){const t=l(e);if("boolean"==typeof t)if(t)r(e);else if(o){if(l(e,{allowDisplayName:o})){r(s?e.split("<")[1].split(">")[0]:e)}else a=e}else a=e;else L(!0),!0===await(x?.(e))?(r(e),L(!1)):a=e}else a=e}j([...T,...n]),R(a),n.length&&C?.([...T,...n]),a!=a&&k?.(a)}),[o,u,c,T,v,C,k,b,s,x]),A=d.useCallback((async e=>{await q(e),k?.(e)}),[q,k]),M=d.useCallback(((e,t)=>{if(t)return;const n=[...T.slice(0,e),...T.slice(e+1)];j(n),C?.(n)}),[T,C]),U=d.useCallback((e=>{switch(D?.(e),e.key){case"Enter":e.preventDefault();break;case"Backspace":e.currentTarget.value||M(T.length-1,!1)}}),[T.length,D,M]),z=d.useCallback((async e=>{if(E?.(e),"Enter"===e.key)await q(e.currentTarget.value,!0)}),[q,E]),B=d.useCallback((async e=>await A(e.currentTarget.value)),[A]),K=d.useCallback((async e=>{P(!1),I||await q(e.currentTarget.value,!0),w?.()}),[I,q,w]),V=d.useCallback((()=>{P(!0),F?.()}),[F]);return d.useEffect((()=>{j(m(e.emails))}),[e.emails]),d.createElement("div",{className:`${a} ${i?"":"react-multi-email"} ${S?"focused":""} ${""===$&&0===T.length?"empty":""}`,style:n,onClick:()=>O.current?.focus()},_&&N?.(),l?d.createElement("span",{"data-placeholder":!0},l):null,d.createElement("div",{className:"data-labels",style:{opacity:_?.45:1,display:"contents",flexWrap:"inherit"}},T.map(((e,t)=>y(e,t,M)))),d.createElement("input",{id:t,style:{opacity:_?.45:1},ref:O,type:"text",value:$,onFocus:V,onBlur:K,onChange:B,onKeyDown:U,onKeyUp:z,autoFocus:r,className:g,autoComplete:h}))}},9047:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>u,metadata:()=>p,toc:()=>m});var a=n(7462),i=n(7294),l=n(3905),r=n(2113);function o(){const[e,t]=i.useState([]),[n,a]=i.useState({});return i.createElement("div",{style:s},i.createElement("h3",null,"react-multi-email"),i.createElement(r.Q,{onChangeInput:e=>{const t=/\S+@\S+\.\S+/.test(e);a(!t&&e?{borderColor:"red"}:{})},style:n,emails:e,onChange:e=>{t(e)},getLabel:(e,t,n)=>i.createElement("div",{"data-tag":!0,key:t},e,i.createElement("span",{"data-tag-handle":!0,onClick:()=>n(t)},"\xd7"))}),i.createElement("h4",null,"react-multi-email value"),i.createElement("p",null,e.join(", ")||"empty"))}const s={fontFamily:"sans-serif",width:"500px",border:"1px solid rgb(238, 238, 238)",background:"rgb(243, 243, 243)",padding:"25px",margin:"20px",color:"black"},u={sidebar_position:13,description:"onChangeInput is triggered whenever the input field's value change"},c=void 0,p={unversionedId:"Props/onChangeInput",id:"version-1.0.16/Props/onChangeInput",title:"onChangeInput",description:"onChangeInput is triggered whenever the input field's value change",source:"@site/versioned_docs/version-1.0.16/Props/onChangeInput.mdx",sourceDirName:"Props",slug:"/Props/onChangeInput",permalink:"/react-multi-email-docs/docs/Props/onChangeInput",draft:!1,tags:[],version:"1.0.16",sidebarPosition:13,frontMatter:{sidebar_position:13,description:"onChangeInput is triggered whenever the input field's value change"},sidebar:"tutorialSidebar",previous:{title:"validateEmail",permalink:"/react-multi-email-docs/docs/Props/validateEmail"},next:{title:"onKeyDown",permalink:"/react-multi-email-docs/docs/Props/onKeyDown"}},d={},m=[{value:"About onChangeInput",id:"about-onchangeinput",level:2},{value:"Demo",id:"demo",level:2},{value:"Code",id:"code",level:2},{value:"Whole code",id:"whole-code",level:3},{value:"Specific code",id:"specific-code",level:3}],f={toc:m},g="wrapper";function h(e){let{components:t,...n}=e;return(0,l.kt)(g,(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"onChangeInput")," prop is a callback function invoked each time a user types into the internal ",(0,l.kt)("inlineCode",{parentName:"p"},"input")," field. "),(0,l.kt)("p",null,"This callback is ",(0,l.kt)("strong",{parentName:"p"},"useful for providing immediate feedback or processing input values as the user types.")),(0,l.kt)("p",null,"The function specified for this prop is triggered ",(0,l.kt)("strong",{parentName:"p"},"whenever the input field's value changes")," and ",(0,l.kt)("strong",{parentName:"p"},"receives the current input value as its argument"),".\nThis allows ",(0,l.kt)("strong",{parentName:"p"},"tracking of real-time input")," and the ability to ",(0,l.kt)("strong",{parentName:"p"},"apply necessary logic or actions based on that input"),"."),(0,l.kt)("h2",{id:"about-onchangeinput"},"About onChangeInput"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Property: ",(0,l.kt)("inlineCode",{parentName:"li"},"onChangeInput")),(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"(value: string) => void;")),(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"()=>{}"))),(0,l.kt)("h2",{id:"demo"},"Demo"),(0,l.kt)(o,{mdxType:"OnChangeInput"}),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"Dynamic styling: Changes the style of the input field based on the input value. If there is an ",(0,l.kt)("strong",{parentName:"p"},"incorrect input"),", change the color of the text to ",(0,l.kt)("strong",{parentName:"p"},"red"),".")),(0,l.kt)("h2",{id:"code"},"Code"),(0,l.kt)("h3",{id:"whole-code"},"Whole code"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="onChangeInput.tsx"',title:'"onChangeInput.tsx"'},'import * as React from \'react\';\nimport { ReactMultiEmail } from \'react-multi-email\';\nimport \'react-multi-email/dist/style.css\';\n\nexport default function multiEmail() {\n  const [emails, setEmails] = React.useState<string[]>([]);\n  const [inputStyle, setInputStyle] = React.useState<React.CSSProperties>({});\n\n  const handleInputChange = (value: string) => {\n    // simple validation example\n    const isValidEmail = /\\S+@\\S+\\.\\S+/.test(value);\n    if (!isValidEmail && value) {\n      setInputStyle({ borderColor: \'red\' });\n    } else {\n      setInputStyle({});\n    }\n  };\n\n  return (\n    <div style={styles}>\n      <h3>react-multi-email</h3>\n      <ReactMultiEmail\n        // onChangeInput prop\n        onChangeInput={handleInputChange}\n        style={inputStyle}\n        emails={emails}\n        onChange={(_emails: string[]) => {\n          setEmails(_emails);\n        }}\n        getLabel={(\n          email: string,\n          index: number,\n          removeEmail: (index: number) => void\n        ) => {\n          return (\n            <div data-tag key={index}>\n              {email}\n              <span data-tag-handle onClick={() => removeEmail(index)}>\n                \xd7\n              </span>\n            </div>\n          );\n        }}\n      />\n      <h4>react-multi-email value</h4>\n      <p>{emails.join(", ") || "empty"}</p>\n    </div>\n  );\n}\n\nconst styles = {\n  fontFamily: "sans-serif",\n  width: "500px",\n  border: "1px solid rgb(238, 238, 238)",\n  background: "rgb(243, 243, 243)",\n  padding: "25px",\n  margin: "20px",\n  color: "black",\n};\n')),(0,l.kt)("h3",{id:"specific-code"},"Specific code"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="onChangeInput.tsx"',title:'"onChangeInput.tsx"'},"const handleInputChange = (value: string) => {\n  // do something\n};\n\n<ReactMultiEmail\n  onChangeInput={handleInputChange}\n/>\n")))}h.isMDXComponent=!0}}]);