"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[369],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(n),f=l,m=p["".concat(u,".").concat(f)]||p[f]||d[f]||r;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:l,o[1]=i;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2113:(e,t,n)=>{n.d(t,{Q:()=>m});const a={requireTld:!0,allowUnderscores:!1,allowTrailingDot:!1},l={allowDisplayName:!1,requireDisplayName:!1,allowUtf8LocalPart:!0,requireTld:!0},r=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\,\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF\s]*<(.+)>$/i,o=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i,i=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i,u=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i,s=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i;function c(e,t){let n,a=0;const l=encodeURI(e).split(/%..|./).length-1;return t&&(a=Number(t.min)||0,n=Number(t.max)),l>=a&&(void 0===n||l<=n)}function p(e,t){if((t={...l,...t}).requireDisplayName||t.allowDisplayName){const n=e.match(r);if(n)e=n[1];else if(t.requireDisplayName)return!1}const n=e.split("@"),p=""+n.pop(),d=p.toLowerCase();let f=n.join("@");if("gmail.com"!==d&&"googlemail.com"!==d||(f=f.replace(/\./g,"").toLowerCase()),!c(f,{max:64})||!c(p,{max:254}))return!1;if(!function(e,t){(t={...a,...t}).allowTrailingDot&&"."===e[e.length-1]&&(e=e.substring(0,e.length-1));const n=e.split(".");if(t.requireTld){const e=""+n.pop();if(!n.length||!/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(e))return!1;if(/[\s\u2002-\u200B\u202F\u205F\u3000\uFEFF\uDB40\uDC20]/.test(e))return!1}for(let a,l=0;l<n.length;l++){if(a=n[l],t.allowUnderscores&&(a=a.replace(/_/g,"")),!/^[a-z\u00a1-\uffff0-9-]+$/i.test(a))return!1;if(/[\uff01-\uff5e]/.test(a))return!1;if("-"===a[0]||"-"===a[a.length-1])return!1}return!0}(p,{requireTld:t.requireTld}))return!1;if('"'===f[0])return f=f.slice(1,f.length-1),t.allowUtf8LocalPart?s.test(f):i.test(f);const m=t.allowUtf8LocalPart?u:o,g=f.split(".");for(let a=0;a<g.length;a++)if(!m.test(g[a]))return!1;return!0}var d=n(7294);const f=e=>{if(void 0===e)return[];return e.filter((e=>p(e)))};function m(e){const{id:t,style:n,className:a="",noClass:l,placeholder:r,autoFocus:o,allowDisplayName:i=!1,stripDisplayName:u=!1,allowDuplicate:s=!1,delimiter:c=`[${i?"":" "},;]`,initialInputValue:m="",inputClassName:g,autoComplete:y,getLabel:b,enable:h,onDisabled:x,validateEmail:F,onChange:v,onChangeInput:k,onFocus:w,onBlur:D,onKeyDown:C,onKeyUp:E,spinner:N,disableOnBlurValidation:B=!1}=e,O=d.useRef(null),[P,T]=d.useState(!1),[j,S]=d.useState([]),[$,R]=d.useState(m),[A,_]=d.useState(!1),L=d.useCallback((async(e,t)=>{const n=[];let a="";const l=new RegExp(c,"g"),r=F||p,o=e=>{if(!s)for(let t=0,n=j.length;t<n;t++)if(j[t]===e)return!1;return n.push(e),!0};if(""!==e)if(l.test(e)){const t=[...new Set(e.split(l).filter((e=>e)))];do{const n=r(""+t[0]);if("boolean"==typeof n)if(n)o(""+t.shift());else if(1===t.length)if(i){if(r(""+t[0],{allowDisplayName:i})){o(""+(u?t.shift()?.split("<")[1].split(">")[0]:t.shift()))}else 1===t.length?a=""+t.shift():t.shift()}else a=""+t.shift();else t.shift();else _(!0),!0===await(F?.(e))?(o(""+t.shift()),_(!1)):1===t.length?a=""+t.shift():t.shift()}while(t.length)}else{if(h&&!h({emailCnt:j.length}))return void x?.();if(t){const t=r(e);if("boolean"==typeof t)if(t)o(e);else if(i){if(r(e,{allowDisplayName:i})){o(u?e.split("<")[1].split(">")[0]:e)}else a=e}else a=e;else _(!0),!0===await(F?.(e))?(o(e),_(!1)):a=e}else a=e}S([...j,...n]),R(a),n.length&&v?.([...j,...n]),a!=a&&k?.(a)}),[i,s,c,j,h,v,k,x,u,F]),M=d.useCallback((async e=>{await L(e),k?.(e)}),[L,k]),q=d.useCallback(((e,t)=>{if(t)return;const n=[...j.slice(0,e),...j.slice(e+1)];S(n),v?.(n)}),[j,v]),U=d.useCallback((e=>{switch(C?.(e),e.key){case"Enter":e.preventDefault();break;case"Backspace":e.currentTarget.value||q(j.length-1,!1)}}),[j.length,C,q]),z=d.useCallback((async e=>{if(E?.(e),"Enter"===e.key)await L(e.currentTarget.value,!0)}),[L,E]),I=d.useCallback((async e=>await M(e.currentTarget.value)),[M]),K=d.useCallback((async e=>{T(!1),B||await L(e.currentTarget.value,!0),D?.()}),[B,L,D]),W=d.useCallback((()=>{T(!0),w?.()}),[w]);return d.useEffect((()=>{S(f(e.emails))}),[e.emails]),d.createElement("div",{className:`${a} ${l?"":"react-multi-email"} ${P?"focused":""} ${""===$&&0===j.length?"empty":""}`,style:n,onClick:()=>O.current?.focus()},A&&N?.(),r?d.createElement("span",{"data-placeholder":!0},r):null,d.createElement("div",{className:"data-labels",style:{opacity:A?.45:1,display:"contents",flexWrap:"inherit"}},j.map(((e,t)=>b(e,t,q)))),d.createElement("input",{id:t,style:{opacity:A?.45:1},ref:O,type:"text",value:$,onFocus:W,onBlur:K,onChange:I,onKeyDown:U,onKeyUp:z,autoFocus:o,className:g,autoComplete:y}))}},4864:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>y,frontMatter:()=>s,metadata:()=>p,toc:()=>f});var a=n(7462),l=n(7294),r=n(3905),o=n(2113);function i(){const[e,t]=l.useState([]),[n,a]=l.useState(u.background),r={...u,background:n};return l.createElement("div",{style:r},l.createElement("h3",null,"react-multi-email"),l.createElement(o.Q,{placeholder:"Input your Email Address",onFocus:()=>{a("#c32424")},onBlur:()=>{a(u.background)},emails:e,onChange:e=>{t(e)},getLabel:(e,t,n)=>l.createElement("div",{"data-tag":!0,key:t},e,l.createElement("span",{"data-tag-handle":!0,onClick:()=>n(t)},"\xd7"))}),l.createElement("h4",null,"react-multi-email value"),l.createElement("p",null,e.join(", ")||"empty"))}const u={fontFamily:"sans-serif",width:"500px",border:"1px solid rgb(238, 238, 238)",background:"rgb(243, 243, 243)",padding:"25px",margin:"20px",color:"black"},s={sidebar_position:4,description:"Run function when out of focus in text area"},c=void 0,p={unversionedId:"Props/onBlur",id:"version-1.0.16/Props/onBlur",title:"onBlur",description:"Run function when out of focus in text area",source:"@site/versioned_docs/version-1.0.16/Props/onBlur.mdx",sourceDirName:"Props",slug:"/Props/onBlur",permalink:"/react-multi-email-docs/docs/Props/onBlur",draft:!1,tags:[],version:"1.0.16",sidebarPosition:4,frontMatter:{sidebar_position:4,description:"Run function when out of focus in text area"},sidebar:"tutorialSidebar",previous:{title:"onFocus",permalink:"/react-multi-email-docs/docs/Props/onFocus"},next:{title:"style",permalink:"/react-multi-email-docs/docs/Props/style"}},d={},f=[{value:"About onBlur",id:"about-onblur",level:2},{value:"Demo",id:"demo",level:2},{value:"Code",id:"code",level:2},{value:"Whole code",id:"whole-code",level:3},{value:"Specific code",id:"specific-code",level:3}],m={toc:f},g="wrapper";function y(e){let{components:t,...n}=e;return(0,r.kt)(g,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"onBlur")," is the prop for the function that runs when it is out of focus. Mainly used with ",(0,r.kt)("inlineCode",{parentName:"p"},"onFocus"),"."),(0,r.kt)("h2",{id:"about-onblur"},"About onBlur"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Property: ",(0,r.kt)("inlineCode",{parentName:"li"},"onBlur")),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("inlineCode",{parentName:"li"},"() => void")),(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"() => {}"))),(0,r.kt)("h2",{id:"demo"},"Demo"),(0,r.kt)(i,{mdxType:"OnBlur"}),(0,r.kt)("h2",{id:"code"},"Code"),(0,r.kt)("h3",{id:"whole-code"},"Whole code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="onBlur.tsx"',title:'"onBlur.tsx"'},'import * as React from \'react\';\nimport { ReactMultiEmail } from \'react-multi-email\';\nimport \'react-multi-email/dist/style.css\';\n\nexport default function multiEmail () {\n  const [emails, setEmails] = React.useState<string[]>([]);\n  const [background, setBackground] = React.useState(styles.background);\n\n  const onFocusFunc = () => {\n    setBackground("#c32424");\n  }\n  const onBlurFunc = () => {\n    setBackground(styles.background);\n  }\n\n  const combinedStyles = {\n    ...styles,\n    background: background\n  };\n\n  \n  return (\n    <div style={combinedStyles}>\n      <h3>react-multi-email</h3>\n      <ReactMultiEmail\n        placeholder="Input your Email Address"\n        onFocus={onFocusFunc}\n        onBlur={onBlurFunc}\n        emails={emails}\n        onChange={(_emails: string[]) => {\n          setEmails(_emails);\n        }}\n        getLabel={(\n          email: string,\n          index: number,\n          removeEmail: (index: number) => void\n        ) => {\n          return (\n            <div data-tag key={index}>\n              {email}\n              <span data-tag-handle onClick={() => removeEmail(index)}>\n                \xd7\n              </span>\n            </div>\n          );\n        }}\n      />\n      <h4>react-multi-email value</h4>\n      <p>{emails.join(", ") || "empty"}</p>\n    </div>\n  );\n}\n\nconst styles = {\n  fontFamily: "sans-serif",\n  width: "500px",\n  border: "1px solid rgb(238, 238, 238)",\n  background: "rgb(243, 243, 243)",\n  padding: "25px",\n  margin: "20px",\n  color: "black",\n};\n')),(0,r.kt)("h3",{id:"specific-code"},"Specific code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="onBlur.tsx"',title:'"onBlur.tsx"'},"const onBlurFunc = () => {\n    // what you want to do when it is out of focus\n}\n\nreturn(\n    <ReactMultiEmail\n        onBlur={onBlurFunc}\n    />\n);\n")))}y.isMDXComponent=!0}}]);