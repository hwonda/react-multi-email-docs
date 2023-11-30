"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[617],{3447:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>x,frontMatter:()=>c,metadata:()=>d,toc:()=>p});var n=s(5893),l=s(1151),a=s(7294),i=s(2113);function o(){const[e,t]=a.useState([]);return(0,n.jsxs)("div",{style:r,children:[(0,n.jsx)("h3",{children:"react-multi-email"}),(0,n.jsx)(i.Q,{className:"customClassName",placeholder:"Input your Email Address",emails:e,onChange:e=>{t(e)},getLabel:(e,t,s)=>(0,n.jsxs)("div",{"data-tag":!0,children:[e,(0,n.jsx)("span",{"data-tag-handle":!0,onClick:()=>s(t),children:"\xd7"})]},t)}),(0,n.jsx)("h4",{children:"react-multi-email value"}),(0,n.jsx)("p",{children:e.join(", ")||"empty"})]})}const r={fontFamily:"sans-serif",width:"500px",border:"1px solid rgb(238, 238, 238)",background:"rgb(243, 243, 243)",padding:"25px",margin:"20px",color:"black"},c={sidebar_position:3,description:"Apply a custom class name to the root <div> element"},u=void 0,d={id:"Props/className",title:"className",description:"Apply a custom class name to the root <div> element",source:"@site/versioned_docs/version-1.0.16/Props/className.mdx",sourceDirName:"Props",slug:"/Props/className",permalink:"/react-multi-email-docs/docs/Props/className",draft:!1,unlisted:!1,tags:[],version:"1.0.16",sidebarPosition:3,frontMatter:{sidebar_position:3,description:"Apply a custom class name to the root <div> element"},sidebar:"tutorialSidebar",previous:{title:"autoFocus",permalink:"/react-multi-email-docs/docs/Props/autoFocus"},next:{title:"enable",permalink:"/react-multi-email-docs/docs/Props/enable"}},m={},p=[{value:"About className",id:"about-classname",level:2},{value:"Demo",id:"demo",level:2},{value:"Result",id:"result",level:2},{value:"Code",id:"code",level:2},{value:"Full code",id:"full-code",level:3},{value:"Code snippet",id:"code-snippet",level:3}];function h(e){const t={admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"className"})," prop allows you to assign ",(0,n.jsx)(t.strong,{children:"an additional CSS class name"})," to the ",(0,n.jsxs)(t.strong,{children:["root ",(0,n.jsx)(t.code,{children:"div"})," element"]})," of the component.\nThis enables easy external styling modifications to the component."]}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(t.h2,{id:"about-classname",children:"About className"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Property: ",(0,n.jsx)(t.code,{children:"className"})]}),"\n",(0,n.jsxs)(t.li,{children:["Type: ",(0,n.jsx)(t.code,{children:"string"})]}),"\n",(0,n.jsxs)(t.li,{children:["Default: ",(0,n.jsx)(t.code,{children:"''"})]}),"\n"]}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(t.h2,{id:"demo",children:"Demo"}),"\n","\n","\n",(0,n.jsx)(o,{}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["To verify the assigned class name, inspect the element in developer mode. ",(0,n.jsx)("br",{}),"\nThe assigned class name will be visible as depicted in the image below."]})}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(t.h2,{id:"result",children:"Result"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"My Image",src:s(9705).Z+"",width:"722",height:"34"})}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["When the text area is empty, the ",(0,n.jsx)(t.code,{children:"div"})," element will have the class name ",(0,n.jsx)(t.code,{children:"empty"}),"."]})}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(t.h2,{id:"code",children:"Code"}),"\n",(0,n.jsx)(t.h3,{id:"full-code",children:"Full code"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",metastring:'title="ClassName.tsx"',children:'import * as React from \'react\';\nimport { ReactMultiEmail } from \'react-multi-email\';\nimport \'react-multi-email/dist/style.css\';\n\nexport default function multiEmail () {\n  const [emails, setEmails] = React.useState<string[]>([]);\n  \n  return (\n    <div style={styles}>\n      <h3>react-multi-email</h3>\n      <ReactMultiEmail\n        // className prop\n        className="customClassName"\n        placeholder="Input your Email Address"\n        emails={emails}\n        onChange={(_emails: string[]) => {\n          setEmails(_emails);\n        }}\n        getLabel={(\n          email: string,\n          index: number,\n          removeEmail: (index: number) => void\n        ) => {\n          return (\n            <div data-tag key={index}>\n              {email}\n              <span data-tag-handle onClick={() => removeEmail(index)}>\n                \xd7\n              </span>\n            </div>\n          );\n        }}\n      />\n      <h4>react-multi-email value</h4>\n      <p>{emails.join(", ") || "empty"}</p>\n    </div>\n  );\n}\n\nconst styles = {\n  fontFamily: "sans-serif",\n  width: "500px",\n  border: "1px solid rgb(238, 238, 238)",\n  background: "rgb(243, 243, 243)",\n  padding: "25px",\n  margin: "20px",\n  color: "black",\n};\n\n'})}),"\n",(0,n.jsx)(t.h3,{id:"code-snippet",children:"Code snippet"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",metastring:'title="ClassName.tsx"',children:'<ReactMultiEmail\n  className="customClassName"\n  // other props...\n/>\n'})})]})}function x(e={}){const{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},2113:(e,t,s)=>{s.d(t,{Q:()=>x});const n={requireTld:!0,allowUnderscores:!1,allowTrailingDot:!1},l={allowDisplayName:!1,requireDisplayName:!1,allowUtf8LocalPart:!0,requireTld:!0},a=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\,\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF\s]*<(.+)>$/i,i=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i,o=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i,r=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i,c=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i;function u(e,t){let s,n=0;const l=encodeURI(e).split(/%..|./).length-1;return t&&(n=Number(t.min)||0,s=Number(t.max)),l>=n&&(void 0===s||l<=s)}function d(e,t){if((t={...l,...t}).requireDisplayName||t.allowDisplayName){const s=e.match(a);if(s)e=s[1];else if(t.requireDisplayName)return!1}const s=e.split("@"),d=""+s.pop(),m=d.toLowerCase();let p=s.join("@");if("gmail.com"!==m&&"googlemail.com"!==m||(p=p.replace(/\./g,"").toLowerCase()),!u(p,{max:64})||!u(d,{max:254}))return!1;if(!function(e,t){(t={...n,...t}).allowTrailingDot&&"."===e[e.length-1]&&(e=e.substring(0,e.length-1));const s=e.split(".");if(t.requireTld){const e=""+s.pop();if(!s.length||!/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(e))return!1;if(/[\s\u2002-\u200B\u202F\u205F\u3000\uFEFF\uDB40\uDC20]/.test(e))return!1}for(let n,l=0;l<s.length;l++){if(n=s[l],t.allowUnderscores&&(n=n.replace(/_/g,"")),!/^[a-z\u00a1-\uffff0-9-]+$/i.test(n))return!1;if(/[\uff01-\uff5e]/.test(n))return!1;if("-"===n[0]||"-"===n[n.length-1])return!1}return!0}(d,{requireTld:t.requireTld}))return!1;if('"'===p[0])return p=p.slice(1,p.length-1),t.allowUtf8LocalPart?c.test(p):o.test(p);const h=t.allowUtf8LocalPart?r:i,x=p.split(".");for(let n=0;n<x.length;n++)if(!h.test(x[n]))return!1;return!0}var m=s(7294),p=s(5893);const h=e=>{if(void 0===e)return[];return e.filter((e=>d(e)))};function x(e){const{id:t,style:s,className:n="",noClass:l,placeholder:a,autoFocus:i,allowDisplayName:o=!1,stripDisplayName:r=!1,allowDuplicate:c=!1,delimiter:u=`[${o?"":" "},;]`,initialInputValue:x="",inputClassName:f,autoComplete:g,getLabel:F,enable:b,onDisabled:y,validateEmail:v,onChange:j,onChangeInput:C,onFocus:N,onBlur:w,onKeyDown:D,onKeyUp:k,spinner:E,disableOnBlurValidation:T=!1}=e,$=m.useRef(null),[P,A]=m.useState(!1),[R,S]=m.useState([]),[_,q]=m.useState(x),[L,U]=m.useState(!1),z=m.useCallback((async(e,t)=>{const s=[];let n="";const l=new RegExp(u,"g"),a=v||d,i=e=>{if(!c)for(let t=0,s=R.length;t<s;t++)if(R[t]===e)return!1;return s.push(e),!0};if(""!==e)if(l.test(e)){const t=[...new Set(e.split(l).filter((e=>e)))];do{const s=a(""+t[0].trim());if("boolean"==typeof s)if(s)i(""+t.shift());else if(o){if(a(""+t[0].trim(),{allowDisplayName:o})){i(""+(r?t.shift()?.split("<")[1].split(">")[0]:t.shift()))}else 1===t.length?n=""+t.shift():t.shift()}else n=""+t.shift();else U(!0),!0===await(v?.(e))?(i(""+t.shift()),U(!1)):1===t.length?n=""+t.shift():t.shift()}while(t.length)}else{if(b&&!b({emailCnt:R.length}))return void y?.();if(t){const t=a(e);if("boolean"==typeof t)if(t)i(e);else if(o){if(a(e,{allowDisplayName:o})){i(r?e.split("<")[1].split(">")[0]:e)}else n=e}else n=e;else U(!0),!0===await(v?.(e))?(i(e),U(!1)):n=e}else n=e}S([...R,...s]),q(n),s.length&&j?.([...R,...s]),n!=n&&C?.(n)}),[o,c,u,R,b,j,C,y,r,v]),M=m.useCallback((async e=>{await z(e),C?.(e)}),[z,C]),B=m.useCallback(((e,t)=>{if(t)return;const s=[...R.slice(0,e),...R.slice(e+1)];S(s),j?.(s)}),[R,j]),I=m.useCallback((e=>{switch(D?.(e),e.key){case"Enter":e.preventDefault();break;case"Backspace":e.currentTarget.value||B(R.length-1,!1)}}),[R.length,D,B]),K=m.useCallback((async e=>{if(k?.(e),"Enter"===e.key)await z(e.currentTarget.value,!0)}),[z,k]),Z=m.useCallback((async e=>await M(e.currentTarget.value)),[M]),Q=m.useCallback((async e=>{A(!1),T||await z(e.currentTarget.value,!0),w?.()}),[T,z,w]),V=m.useCallback((()=>{A(!0),N?.()}),[N]);return m.useEffect((()=>{S(h(e.emails))}),[e.emails]),(0,p.jsxs)("div",{className:`${n} ${l?"":"react-multi-email"} ${P?"focused":""} ${""===_&&0===R.length?"empty":""}`,style:s,onClick:()=>$.current?.focus(),children:[L&&E?.(),a?(0,p.jsx)("span",{"data-placeholder":!0,children:a}):null,(0,p.jsx)("div",{className:"data-labels",style:{opacity:L?.45:1,display:"contents",flexWrap:"inherit"},children:R.map(((e,t)=>F(e,t,B)))}),(0,p.jsx)("input",{id:t,style:{opacity:L?.45:1},ref:$,type:"text",value:_,onFocus:V,onBlur:Q,onChange:Z,onKeyDown:I,onKeyUp:K,autoFocus:i,className:f,autoComplete:g})]})}},9705:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/className-81768542209ac31e90074edbd8b976c1.png"},1151:(e,t,s)=>{s.d(t,{Z:()=>o,a:()=>i});var n=s(7294);const l={},a=n.createContext(l);function i(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);