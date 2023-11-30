"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[671],{4598:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>x,frontMatter:()=>u,metadata:()=>d,toc:()=>m});var n=l(5893),i=l(1151),s=l(7294),a=l(2113);function r(){const[e,t]=s.useState([]);return(0,n.jsxs)("div",{style:o,children:[(0,n.jsx)("h3",{children:"react-multi-email"}),(0,n.jsx)(a.Q,{placeholder:"Input your Email Address",style:{border:"1px solid red",marginLeft:"1rem",width:"300px"},emails:e,onChange:e=>{t(e)},getLabel:(e,t,l)=>(0,n.jsxs)("div",{"data-tag":!0,children:[e,(0,n.jsx)("span",{"data-tag-handle":!0,onClick:()=>l(t),children:"\xd7"})]},t)}),(0,n.jsx)("h4",{children:"react-multi-email value"}),(0,n.jsx)("p",{children:e.join(", ")||"empty"})]})}const o={fontFamily:"sans-serif",width:"500px",border:"1px solid rgb(238, 238, 238)",background:"rgb(243, 243, 243)",padding:"25px",margin:"20px",color:"black"},u={sidebar_position:15,title:"style",description:"Customize style"},c=void 0,d={id:"Props/style",title:"style",description:"Customize style",source:"@site/versioned_docs/version-1.0.16/Props/style.mdx",sourceDirName:"Props",slug:"/Props/style",permalink:"/react-multi-email-docs/docs/Props/style",draft:!1,unlisted:!1,tags:[],version:"1.0.16",sidebarPosition:15,frontMatter:{sidebar_position:15,title:"style",description:"Customize style"},sidebar:"tutorialSidebar",previous:{title:"spinner",permalink:"/react-multi-email-docs/docs/Props/spinner"},next:{title:"validateEmail",permalink:"/react-multi-email-docs/docs/Props/validateEmail"}},p={},m=[{value:"About style",id:"about-style",level:2},{value:"Demo",id:"demo",level:2},{value:"Code",id:"code",level:2},{value:"Full code",id:"full-code",level:3},{value:"Code snippet",id:"code-snippet",level:3}];function f(e){const t={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"style"})," prop allows you to easily apply your custom styles to the text area within the ",(0,n.jsx)(t.code,{children:"ReactMultiEmail"})," component,\nenhancing its aesthetic appeal and ensuring consistency with your application's design theme."]}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(t.h2,{id:"about-style",children:"About style"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Property: ",(0,n.jsx)(t.code,{children:"style"})]}),"\n",(0,n.jsxs)(t.li,{children:["Type: ",(0,n.jsx)(t.code,{children:"boolean"})]}),"\n",(0,n.jsxs)(t.li,{children:["Default: ",(0,n.jsx)(t.code,{children:"undefined"})]}),"\n"]}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(t.h2,{id:"demo",children:"Demo"}),"\n",(0,n.jsx)(t.p,{children:"The example below demonstrates how to add border, marginLeft, and width styles to the text area."}),"\n","\n","\n",(0,n.jsx)(r,{}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(t.h2,{id:"code",children:"Code"}),"\n",(0,n.jsx)(t.h3,{id:"full-code",children:"Full code"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",metastring:'title="Style.tsx"',children:'import * as React from \'react\';\nimport { ReactMultiEmail } from \'react-multi-email\';\nimport \'react-multi-email/dist/style.css\';\n\nexport default function multiEmail () {\n  const [emails, setEmails] = React.useState<string[]>([]);\n  return (\n    <div style={styles}>\n      <h3>react-multi-email</h3>\n      <ReactMultiEmail\n        // style prop\n        style={{ border: \'1px solid red\', marginLeft: \'1rem\', width: \'300px\' }}\n        placeholder="Input your Email Address"\n        emails={emails}\n        onChange={(_emails: string[]) => {\n          setEmails(_emails);\n        }}\n        getLabel={(\n          email: string,\n          index: number,\n          removeEmail: (index: number) => void\n        ) => {\n          return (\n            <div data-tag key={index}>\n              {email}\n              <span data-tag-handle onClick={() => removeEmail(index)}>\n                \xd7\n              </span>\n            </div>\n          );\n        }}\n      />\n      <h4>react-multi-email value</h4>\n      <p>{emails.join(", ") || "empty"}</p>\n    </div>\n  );\n}\n\nconst styles = {\n  fontFamily: "sans-serif",\n  width: "500px",\n  border: "1px solid rgb(238, 238, 238)",\n  background: "rgb(243, 243, 243)",\n  padding: "25px",\n  margin: "20px",\n  color: "black",\n};\n'})}),"\n",(0,n.jsx)(t.h3,{id:"code-snippet",children:"Code snippet"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",metastring:'title="Style.tsx"',children:"<ReactMultiEmail \n  style={{ YOUR OWN STYLE }}\n  // other props...\n/>\n"})})]})}function x(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(f,{...e})}):f(e)}},2113:(e,t,l)=>{l.d(t,{Q:()=>x});const n={requireTld:!0,allowUnderscores:!1,allowTrailingDot:!1},i={allowDisplayName:!1,requireDisplayName:!1,allowUtf8LocalPart:!0,requireTld:!0},s=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\,\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF\s]*<(.+)>$/i,a=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i,r=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i,o=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i,u=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i;function c(e,t){let l,n=0;const i=encodeURI(e).split(/%..|./).length-1;return t&&(n=Number(t.min)||0,l=Number(t.max)),i>=n&&(void 0===l||i<=l)}function d(e,t){if((t={...i,...t}).requireDisplayName||t.allowDisplayName){const l=e.match(s);if(l)e=l[1];else if(t.requireDisplayName)return!1}const l=e.split("@"),d=""+l.pop(),p=d.toLowerCase();let m=l.join("@");if("gmail.com"!==p&&"googlemail.com"!==p||(m=m.replace(/\./g,"").toLowerCase()),!c(m,{max:64})||!c(d,{max:254}))return!1;if(!function(e,t){(t={...n,...t}).allowTrailingDot&&"."===e[e.length-1]&&(e=e.substring(0,e.length-1));const l=e.split(".");if(t.requireTld){const e=""+l.pop();if(!l.length||!/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(e))return!1;if(/[\s\u2002-\u200B\u202F\u205F\u3000\uFEFF\uDB40\uDC20]/.test(e))return!1}for(let n,i=0;i<l.length;i++){if(n=l[i],t.allowUnderscores&&(n=n.replace(/_/g,"")),!/^[a-z\u00a1-\uffff0-9-]+$/i.test(n))return!1;if(/[\uff01-\uff5e]/.test(n))return!1;if("-"===n[0]||"-"===n[n.length-1])return!1}return!0}(d,{requireTld:t.requireTld}))return!1;if('"'===m[0])return m=m.slice(1,m.length-1),t.allowUtf8LocalPart?u.test(m):r.test(m);const f=t.allowUtf8LocalPart?o:a,x=m.split(".");for(let n=0;n<x.length;n++)if(!f.test(x[n]))return!1;return!0}var p=l(7294),m=l(5893);const f=e=>{if(void 0===e)return[];return e.filter((e=>d(e)))};function x(e){const{id:t,style:l,className:n="",noClass:i,placeholder:s,autoFocus:a,allowDisplayName:r=!1,stripDisplayName:o=!1,allowDuplicate:u=!1,delimiter:c=`[${r?"":" "},;]`,initialInputValue:x="",inputClassName:h,autoComplete:y,getLabel:g,enable:F,onDisabled:b,validateEmail:v,onChange:j,onChangeInput:C,onFocus:w,onBlur:D,onKeyDown:k,onKeyUp:E,spinner:N,disableOnBlurValidation:T=!1}=e,$=p.useRef(null),[P,L]=p.useState(!1),[S,z]=p.useState([]),[R,_]=p.useState(x),[A,U]=p.useState(!1),q=p.useCallback((async(e,t)=>{const l=[];let n="";const i=new RegExp(c,"g"),s=v||d,a=e=>{if(!u)for(let t=0,l=S.length;t<l;t++)if(S[t]===e)return!1;return l.push(e),!0};if(""!==e)if(i.test(e)){const t=[...new Set(e.split(i).filter((e=>e)))];do{const l=s(""+t[0].trim());if("boolean"==typeof l)if(l)a(""+t.shift());else if(r){if(s(""+t[0].trim(),{allowDisplayName:r})){a(""+(o?t.shift()?.split("<")[1].split(">")[0]:t.shift()))}else 1===t.length?n=""+t.shift():t.shift()}else n=""+t.shift();else U(!0),!0===await(v?.(e))?(a(""+t.shift()),U(!1)):1===t.length?n=""+t.shift():t.shift()}while(t.length)}else{if(F&&!F({emailCnt:S.length}))return void b?.();if(t){const t=s(e);if("boolean"==typeof t)if(t)a(e);else if(r){if(s(e,{allowDisplayName:r})){a(o?e.split("<")[1].split(">")[0]:e)}else n=e}else n=e;else U(!0),!0===await(v?.(e))?(a(e),U(!1)):n=e}else n=e}z([...S,...l]),_(n),l.length&&j?.([...S,...l]),n!=n&&C?.(n)}),[r,u,c,S,F,j,C,b,o,v]),M=p.useCallback((async e=>{await q(e),C?.(e)}),[q,C]),B=p.useCallback(((e,t)=>{if(t)return;const l=[...S.slice(0,e),...S.slice(e+1)];z(l),j?.(l)}),[S,j]),I=p.useCallback((e=>{switch(k?.(e),e.key){case"Enter":e.preventDefault();break;case"Backspace":e.currentTarget.value||B(S.length-1,!1)}}),[S.length,k,B]),K=p.useCallback((async e=>{if(E?.(e),"Enter"===e.key)await q(e.currentTarget.value,!0)}),[q,E]),O=p.useCallback((async e=>await M(e.currentTarget.value)),[M]),Q=p.useCallback((async e=>{L(!1),T||await q(e.currentTarget.value,!0),D?.()}),[T,q,D]),V=p.useCallback((()=>{L(!0),w?.()}),[w]);return p.useEffect((()=>{z(f(e.emails))}),[e.emails]),(0,m.jsxs)("div",{className:`${n} ${i?"":"react-multi-email"} ${P?"focused":""} ${""===R&&0===S.length?"empty":""}`,style:l,onClick:()=>$.current?.focus(),children:[A&&N?.(),s?(0,m.jsx)("span",{"data-placeholder":!0,children:s}):null,(0,m.jsx)("div",{className:"data-labels",style:{opacity:A?.45:1,display:"contents",flexWrap:"inherit"},children:S.map(((e,t)=>g(e,t,B)))}),(0,m.jsx)("input",{id:t,style:{opacity:A?.45:1},ref:$,type:"text",value:R,onFocus:V,onBlur:Q,onChange:O,onKeyDown:I,onKeyUp:K,autoFocus:a,className:h,autoComplete:y})]})}},1151:(e,t,l)=>{l.d(t,{Z:()=>r,a:()=>a});var n=l(7294);const i={},s=n.createContext(i);function a(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);