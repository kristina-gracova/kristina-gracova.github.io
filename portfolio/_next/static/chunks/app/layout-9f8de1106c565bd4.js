(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{5235:function(e,t,r){Promise.resolve().then(r.t.bind(r,3385,23)),Promise.resolve().then(r.bind(r,2853))},2853:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return w}});var n=r(7437),s=r(5313),i=r(2265),u=r(5526);function o(){let e=(0,i.useRef)(!1);return(0,u.L)(()=>(e.current=!0,()=>{e.current=!1}),[]),e}var l=r(4205),c=r(4561),f=r(2435),a=r(3449);class d extends i.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){let e=this.props.sizeRef.current;e.height=t.offsetHeight||0,e.width=t.offsetWidth||0,e.top=t.offsetTop,e.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function h({children:e,isPresent:t}){let r=(0,i.useId)(),s=(0,i.useRef)(null),u=(0,i.useRef)({width:0,height:0,top:0,left:0}),{nonce:o}=(0,i.useContext)(a._);return(0,i.useInsertionEffect)(()=>{let{width:e,height:n,top:i,left:l}=u.current;if(t||!s.current||!e||!n)return;s.current.dataset.motionPopId=r;let c=document.createElement("style");return o&&(c.nonce=o),document.head.appendChild(c),c.sheet&&c.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${n}px !important;
            top: ${i}px !important;
            left: ${l}px !important;
          }
        `),()=>{document.head.removeChild(c)}},[t]),(0,n.jsx)(d,{isPresent:t,childRef:s,sizeRef:u,children:i.cloneElement(e,{ref:s})})}let p=({children:e,initial:t,isPresent:r,onExitComplete:s,custom:u,presenceAffectsLayout:o,mode:l})=>{let a=(0,f.h)(m),d=(0,i.useId)(),p=(0,i.useMemo)(()=>({id:d,initial:t,isPresent:r,custom:u,onExitComplete:e=>{for(let t of(a.set(e,!0),a.values()))if(!t)return;s&&s()},register:e=>(a.set(e,!1),()=>a.delete(e))}),o?[Math.random()]:[r]);return(0,i.useMemo)(()=>{a.forEach((e,t)=>a.set(t,!1))},[r]),i.useEffect(()=>{r||a.size||!s||s()},[r]),"popLayout"===l&&(e=(0,n.jsx)(h,{isPresent:r,children:e})),(0,n.jsx)(c.O.Provider,{value:p,children:e})};function m(){return new Map}var x=r(3856),E=r(9908);let R=e=>e.key||"",v=({children:e,custom:t,initial:r=!0,onExitComplete:s,exitBeforeEnter:c,presenceAffectsLayout:f=!0,mode:a="sync"})=>{var d;(0,E.k)(!c,"Replace exitBeforeEnter with mode='wait'");let h=(0,i.useContext)(x.p).forceRender||function(){let e=o(),[t,r]=(0,i.useState)(0),n=(0,i.useCallback)(()=>{e.current&&r(t+1)},[t]);return[(0,i.useCallback)(()=>l.Wi.postRender(n),[n]),t]}()[0],m=o(),v=function(e){let t=[];return i.Children.forEach(e,e=>{(0,i.isValidElement)(e)&&t.push(e)}),t}(e),C=v,P=(0,i.useRef)(new Map).current,j=(0,i.useRef)(C),w=(0,i.useRef)(new Map).current,y=(0,i.useRef)(!0);if((0,u.L)(()=>{y.current=!1,function(e,t){e.forEach(e=>{let r=R(e);t.set(r,e)})}(v,w),j.current=C}),d=()=>{y.current=!0,w.clear(),P.clear()},(0,i.useEffect)(()=>()=>d(),[]),y.current)return(0,n.jsx)(n.Fragment,{children:C.map(e=>(0,n.jsx)(p,{isPresent:!0,initial:!!r&&void 0,presenceAffectsLayout:f,mode:a,children:e},R(e)))});C=[...C];let g=j.current.map(R),k=v.map(R),L=g.length;for(let e=0;e<L;e++){let t=g[e];-1!==k.indexOf(t)||P.has(t)||P.set(t,void 0)}return"wait"===a&&P.size&&(C=[]),P.forEach((e,r)=>{if(-1!==k.indexOf(r))return;let i=w.get(r);if(!i)return;let u=g.indexOf(r),o=e;o||(o=(0,n.jsx)(p,{isPresent:!1,onExitComplete:()=>{P.delete(r);let e=Array.from(w.keys()).filter(e=>!k.includes(e));if(e.forEach(e=>w.delete(e)),j.current=v.filter(t=>{let n=R(t);return n===r||e.includes(n)}),!P.size){if(!1===m.current)return;h(),s&&s()}},custom:t,presenceAffectsLayout:f,mode:a,children:i},R(i)),P.set(r,o)),C.splice(u,0,o)}),C=C.map(e=>{let t=e.key;return P.has(t)?e:(0,n.jsx)(p,{isPresent:!0,presenceAffectsLayout:f,mode:a,children:e},R(e))}),(0,n.jsx)(n.Fragment,{children:P.size?C:C.map(e=>(0,i.cloneElement)(e))})};var C=r(4539),P=r(8599),j=e=>{let{children:t}=e,r=(0,i.useContext)(P.LayoutRouterContext),s=(0,i.useRef)(r).current;return(0,n.jsx)(P.LayoutRouterContext.Provider,{value:s,children:t})},w=e=>{let{children:t}=e,r=(0,s.usePathname)();return(0,n.jsx)(v,{mode:"wait",children:(0,n.jsx)(C.E.div,{children:(0,n.jsx)(j,{children:t})},r)})}},3385:function(){}},function(e){e.O(0,[539,971,69,744],function(){return e(e.s=5235)}),_N_E=e.O()}]);