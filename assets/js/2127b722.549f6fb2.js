"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[57],{8737:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>u,default:()=>y,frontMatter:()=>c,metadata:()=>d,toc:()=>h});var i=t(5893),a=t(1151),l=t(7294),s=t(2113);function o(){const[e,n]=l.useState([]),[t,a]=l.useState(""),[o,c]=l.useState("");return(0,i.jsxs)("div",{style:r,children:[(0,i.jsx)("h3",{children:"react-multi-email"}),(0,i.jsx)(s.Q,{placeholder:"Input your Email Address",emails:e,onChange:e=>{n(e)},onKeyDown:e=>{console.log(e.key),a(e.key)},onKeyUp:e=>{console.log(e.key),c(e.key)},getLabel:(e,n,t)=>(0,i.jsxs)("div",{"data-tag":!0,children:[e,(0,i.jsx)("span",{"data-tag-handle":!0,onClick:()=>t(n),children:"\xd7"})]},n)}),(0,i.jsx)("h4",{children:"react-multi-email value"}),(0,i.jsx)("p",{children:e.join(", ")||"empty"}),(0,i.jsxs)("div",{children:["currentKey(keyDown): ",t]}),(0,i.jsxs)("div",{children:["currentKey(keyUp): ",o]})]})}const r={fontFamily:"sans-serif",width:"500px",border:"1px solid rgb(238, 238, 238)",background:"rgb(243, 243, 243)",padding:"25px",margin:"20px",color:"black"},c={sidebar_position:12,description:"onKeyUp activates when a key is released."},u=void 0,d={id:"Props/onKeyUp",title:"onKeyUp",description:"onKeyUp activates when a key is released.",source:"@site/versioned_docs/version-1.0.16/Props/onKeyUp.mdx",sourceDirName:"Props",slug:"/Props/onKeyUp",permalink:"/react-multi-email-docs/docs/Props/onKeyUp",draft:!1,unlisted:!1,tags:[],version:"1.0.16",sidebarPosition:12,frontMatter:{sidebar_position:12,description:"onKeyUp activates when a key is released."},sidebar:"tutorialSidebar",previous:{title:"onKeyDown",permalink:"/react-multi-email-docs/docs/Props/onKeyDown"},next:{title:"placeholder",permalink:"/react-multi-email-docs/docs/Props/placeholder"}},p={},h=[{value:"About onKeyUp",id:"about-onkeyup",level:2},{value:"Demo",id:"demo",level:2},{value:"Code",id:"code",level:2},{value:"Full code",id:"full-code",level:3},{value:"Code snippet",id:"code-snippet",level:3},{value:"Internal logic code (handleOnKeyUp)",id:"internal-logic-code-handleonkeyup",level:3}];function m(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"onKeyUp"})," prop in the ",(0,i.jsx)(n.code,{children:"ReactMultiEmail"})," component is designed to handle events occurring when a user releases a keyboard key. This callback is invoked every time a key is released, with the KeyboardEvent object provided as an argument detailing the specific key release event."]}),"\n",(0,i.jsxs)(n.p,{children:["This prop allows the seamless integration of user-provided onKeyUp handlers with the component's internal mechanism, ",(0,i.jsx)(n.a,{href:"https://github.com/axisj/react-multi-email/blob/master/react-multi-email/ReactMultiEmail.tsx",children:"handleOnKeyUp"}),", ensuring the synchronous execution of both the inherent component operations and any external logic associated with the ",(0,i.jsx)(n.code,{children:"onKeyUp"})," prop upon the release of a key."]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.h2,{id:"about-onkeyup",children:"About onKeyUp"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Property: ",(0,i.jsx)(n.code,{children:"onKeyUp"})]}),"\n",(0,i.jsxs)(n.li,{children:["Type: ",(0,i.jsx)(n.code,{children:"(evt: React.KeyboardEvent) => void;"})]}),"\n",(0,i.jsxs)(n.li,{children:["Default: ",(0,i.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.h2,{id:"demo",children:"Demo"}),"\n","\n","\n",(0,i.jsx)(o,{}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"onKeyUp"})," is triggered upon the release of a key, and hence, executes subsequent to ",(0,i.jsx)(n.code,{children:"onKeyDown"}),".\nExperiment with this behavior in the demo above by continuously pressing the ",(0,i.jsx)(n.code,{children:"backspace"})," key after entering long words."]})}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.h2,{id:"code",children:"Code"}),"\n",(0,i.jsx)(n.h3,{id:"full-code",children:"Full code"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",metastring:'title="OnKeyUp.tsx"',children:'import * as React from \'react\';\nimport { ReactMultiEmail } from \'react-multi-email\';\nimport \'react-multi-email/dist/style.css\';\n\nexport default function multiEmail() {\n  const [emails, setEmails] = React.useState<string[]>([]);\n  const [currentKeyDown, setCurrentKeyDown] = React.useState<string>("");\n  const [currentKeyUp, setCurrentKeyUp] = React.useState<string>("");\n\n  const onKeyDownFunc = (event: React.KeyboardEvent<HTMLInputElement>) => {\n    console.log(event.key);\n    setCurrentKeyDown(event.key);\n  };\n\n  const onKeyUpFunc = (event: React.KeyboardEvent<HTMLInputElement>) => {\n    console.log(event.key);\n    setCurrentKeyUp(event.key);\n  };\n\n  return (\n    <div style={styles}>\n      <h3>react-multi-email</h3>\n      <ReactMultiEmail\n        // onKeyup prop\n        onKeyUp={onKeyUpFunc}\n        onKeyDown={onKeyDownFunc}\n        placeholder="Input your Email Address"\n        emails={emails}\n        onChange={(_emails: string[]) => {\n          setEmails(_emails);\n        }}\n        getLabel={(\n          email: string,\n          index: number,\n          removeEmail: (index: number) => void\n        ) => {\n          return (\n            <div data-tag key={index}>\n              {email}\n              <span data-tag-handle onClick={() => removeEmail(index)}>\n                \xd7\n              </span>\n            </div>\n          );\n        }}\n      />\n      <h4>react-multi-email value</h4>\n      <p>{emails.join(", ") || "empty"}</p>\n      <div>currentKey(keyDown): {currentKeyDown}</div>\n      <div>currentKey(keyUp): {currentKeyUp}</div>\n    </div>\n  );\n}\n\nconst styles = {\n  fontFamily: "sans-serif",\n  width: "500px",\n  border: "1px solid rgb(238, 238, 238)",\n  background: "rgb(243, 243, 243)",\n  padding: "25px",\n  margin: "20px",\n  color: "black",\n};\n\n'})}),"\n",(0,i.jsx)(n.h3,{id:"code-snippet",children:"Code snippet"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",metastring:'title="OnKeyUp.tsx"',children:"const onKeyUpFunc = (event: React.KeyboardEvent<HTMLInputElement>) => {\n  // do something\n};\n\n<ReactMultiEmail\n  onKeyUp={onKeyUpFunc}\n  // other props...\n/>\n"})}),"\n",(0,i.jsx)(n.h3,{id:"internal-logic-code-handleonkeyup",children:"Internal logic code (handleOnKeyUp)"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",metastring:'title="ReactMultiEmail.tsx"',children:"const handleOnKeyup = React.useCallback(\n  async (e: React.KeyboardEvent<HTMLInputElement>) => {\n    onKeyUp?.(e);\n\n    switch (e.key) {\n      case 'Enter':\n        await findEmailAddress(e.currentTarget.value, true);\n        break;\n      default:\n    }\n  },\n  [findEmailAddress, onKeyUp],\n);\n"})})]})}function y(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}},2113:(e,n,t)=>{t.d(n,{Q:()=>y});const i={requireTld:!0,allowUnderscores:!1,allowTrailingDot:!1},a={allowDisplayName:!1,requireDisplayName:!1,allowUtf8LocalPart:!0,requireTld:!0},l=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\,\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF\s]*<(.+)>$/i,s=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i,o=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i,r=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i,c=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i;function u(e,n){let t,i=0;const a=encodeURI(e).split(/%..|./).length-1;return n&&(i=Number(n.min)||0,t=Number(n.max)),a>=i&&(void 0===t||a<=t)}function d(e,n){if((n={...a,...n}).requireDisplayName||n.allowDisplayName){const t=e.match(l);if(t)e=t[1];else if(n.requireDisplayName)return!1}const t=e.split("@"),d=""+t.pop(),p=d.toLowerCase();let h=t.join("@");if("gmail.com"!==p&&"googlemail.com"!==p||(h=h.replace(/\./g,"").toLowerCase()),!u(h,{max:64})||!u(d,{max:254}))return!1;if(!function(e,n){(n={...i,...n}).allowTrailingDot&&"."===e[e.length-1]&&(e=e.substring(0,e.length-1));const t=e.split(".");if(n.requireTld){const e=""+t.pop();if(!t.length||!/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(e))return!1;if(/[\s\u2002-\u200B\u202F\u205F\u3000\uFEFF\uDB40\uDC20]/.test(e))return!1}for(let i,a=0;a<t.length;a++){if(i=t[a],n.allowUnderscores&&(i=i.replace(/_/g,"")),!/^[a-z\u00a1-\uffff0-9-]+$/i.test(i))return!1;if(/[\uff01-\uff5e]/.test(i))return!1;if("-"===i[0]||"-"===i[i.length-1])return!1}return!0}(d,{requireTld:n.requireTld}))return!1;if('"'===h[0])return h=h.slice(1,h.length-1),n.allowUtf8LocalPart?c.test(h):o.test(h);const m=n.allowUtf8LocalPart?r:s,y=h.split(".");for(let i=0;i<y.length;i++)if(!m.test(y[i]))return!1;return!0}var p=t(7294),h=t(5893);const m=e=>{if(void 0===e)return[];return e.filter((e=>d(e)))};function y(e){const{id:n,style:t,className:i="",noClass:a,placeholder:l,autoFocus:s,allowDisplayName:o=!1,stripDisplayName:r=!1,allowDuplicate:c=!1,delimiter:u=`[${o?"":" "},;]`,initialInputValue:y="",inputClassName:x,autoComplete:f,getLabel:g,enable:v,onDisabled:b,validateEmail:F,onChange:K,onChangeInput:k,onFocus:w,onBlur:j,onKeyDown:D,onKeyUp:C,spinner:U,disableOnBlurValidation:E=!1}=e,T=p.useRef(null),[N,R]=p.useState(!1),[$,P]=p.useState([]),[M,L]=p.useState(y),[S,A]=p.useState(!1),I=p.useCallback((async(e,n)=>{const t=[];let i="";const a=new RegExp(u,"g"),l=F||d,s=e=>{if(!c)for(let n=0,t=$.length;n<t;n++)if($[n]===e)return!1;return t.push(e),!0};if(""!==e)if(a.test(e)){const n=[...new Set(e.split(a).filter((e=>e)))];do{const t=l(""+n[0].trim());if("boolean"==typeof t)if(t)s(""+n.shift());else if(o){if(l(""+n[0].trim(),{allowDisplayName:o})){s(""+(r?n.shift()?.split("<")[1].split(">")[0]:n.shift()))}else 1===n.length?i=""+n.shift():n.shift()}else i=""+n.shift();else A(!0),!0===await(F?.(e))?(s(""+n.shift()),A(!1)):1===n.length?i=""+n.shift():n.shift()}while(n.length)}else{if(v&&!v({emailCnt:$.length}))return void b?.();if(n){const n=l(e);if("boolean"==typeof n)if(n)s(e);else if(o){if(l(e,{allowDisplayName:o})){s(r?e.split("<")[1].split(">")[0]:e)}else i=e}else i=e;else A(!0),!0===await(F?.(e))?(s(e),A(!1)):i=e}else i=e}P([...$,...t]),L(i),t.length&&K?.([...$,...t]),i!=i&&k?.(i)}),[o,c,u,$,v,K,k,b,r,F]),_=p.useCallback((async e=>{await I(e),k?.(e)}),[I,k]),q=p.useCallback(((e,n)=>{if(n)return;const t=[...$.slice(0,e),...$.slice(e+1)];P(t),K?.(t)}),[$,K]),z=p.useCallback((e=>{switch(D?.(e),e.key){case"Enter":e.preventDefault();break;case"Backspace":e.currentTarget.value||q($.length-1,!1)}}),[$.length,D,q]),O=p.useCallback((async e=>{if(C?.(e),"Enter"===e.key)await I(e.currentTarget.value,!0)}),[I,C]),B=p.useCallback((async e=>await _(e.currentTarget.value)),[_]),H=p.useCallback((async e=>{R(!1),E||await I(e.currentTarget.value,!0),j?.()}),[E,I,j]),Q=p.useCallback((()=>{R(!0),w?.()}),[w]);return p.useEffect((()=>{P(m(e.emails))}),[e.emails]),(0,h.jsxs)("div",{className:`${i} ${a?"":"react-multi-email"} ${N?"focused":""} ${""===M&&0===$.length?"empty":""}`,style:t,onClick:()=>T.current?.focus(),children:[S&&U?.(),l?(0,h.jsx)("span",{"data-placeholder":!0,children:l}):null,(0,h.jsx)("div",{className:"data-labels",style:{opacity:S?.45:1,display:"contents",flexWrap:"inherit"},children:$.map(((e,n)=>g(e,n,q)))}),(0,h.jsx)("input",{id:n,style:{opacity:S?.45:1},ref:T,type:"text",value:M,onFocus:Q,onBlur:H,onChange:B,onKeyDown:z,onKeyUp:O,autoFocus:s,className:x,autoComplete:f})]})}},1151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>s});var i=t(7294);const a={},l=i.createContext(a);function s(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);