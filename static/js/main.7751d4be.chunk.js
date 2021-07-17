(this["webpackJsonptictactoe-ts"]=this["webpackJsonptictactoe-ts"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var c=n(2),s=n.n(c),i=n(9),a=n.n(i),r=(n(15),n(16),n(3)),l=n(10),o=n(7),d=n(1),u=function(e){var t=e.stepNumber,n=e.setStepNumber,s=e.isReset,i=e.setShouldShowWinnerModal;Object(c.useEffect)((function(){p(Array(9).fill(0)),g(!1)}),[s]);var a=function(){return Object(d.jsx)("div",{className:"bg-gray-200"})},u=function(){return Object(d.jsx)("div",{className:"p-2 text-yellow-400",children:Object(d.jsx)(o.b,{className:"h-full w-full"})})},j=function(){return Object(d.jsx)("div",{className:"p-2 h-full w-full text-yellow-400",children:Object(d.jsx)(o.a,{className:"h-full w-full"})})},b=Object(c.useState)(!1),f=Object(r.a)(b,2),x=f[0],O=f[1],h=Object(c.useState)(Array(9).fill(0)),m=Object(r.a)(h,2),v=m[0],p=m[1],w=Object(c.useState)(!1),N=Object(r.a)(w,2),y=N[0],g=N[1],S=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],k=function(e){switch(e){case 0:return Object(d.jsx)(a,{});case 1:return Object(d.jsx)(u,{});case 2:return Object(d.jsx)(j,{})}},C=function(e){var c=e.index;return Object(d.jsx)("div",{className:"bg-white h-20 w-20 shadow-lg cursor-pointer",onClick:function(){0!==v[c]||y||(function(e){var n=v;n[e]=t%2===0?2:1,p(n)}(c),O(!0),n(t+1),function(){for(var e=0;e<S.length;e++){var t=S[e],n=Object(r.a)(t,3),c=n[0],s=n[1],a=n[2],l=v[c];l&&l===v[s]&&l===v[a]&&(i({state:!0,winner:l}),g(!0))}}()),t>=9&&(i({state:!0,winner:null}),g(!0))},children:x&&k(v[c])})};return Object(d.jsx)("div",{className:"grid grid-cols-3 grid-rows-3 gap-4",children:Object(l.a)(Array(9)).map((function(e,t){return Object(d.jsx)("div",{children:Object(d.jsx)(C,{index:t})},"box-".concat(t))}))})},j=function(e){var t=e.setIsReset;return Object(d.jsx)("div",{className:"bg-white cursor-pointer p-2 shadow-lg font-medium rounded",onClick:function(){return t(!0)},children:"RESET"})},b=Object(c.forwardRef)((function(e,t){var n=e.title,s=e.onClose,i=e.testId,a=e.children,l=e.isOpened,o=Object(c.useState)(!1),u=Object(r.a)(o,2),j=u[0],b=u[1];Object(c.useEffect)((function(){return l&&(setTimeout((function(){h()}),10),document.body.classList.add("overflow-hidden")),function(){document.body.classList.remove("overflow-hidden")}}),[l]);var f="modal-backdrop transition-opacity ".concat(j?"opacity-1":"opacity-0"," fixed inset-0 z-999 bg-black opacity-60 duration-300 transition-opacity backdrop-blur"),x="\n             absolute rounded-lg z-1000 sm:my-90p duration-100 transition-all ".concat(j?"opacity-1":"opacity-0 transform-y-40p"," bg-gray-200"),O=function(){b(!1),s&&s()},h=function(){b(!0)};return l?Object(d.jsxs)("div",{className:"fixed flex items-center justify-around w-full h-full top-0 left-0 right-0 bottom-0 z-998 overflow-y-auto",children:[Object(d.jsx)("div",{className:f,onClick:O}),Object(d.jsxs)("div",{className:x,onTransitionEnd:function(){j||O()},"data-testid":i,children:[Object(d.jsx)("div",{className:"relative px-20 py-5 font-bold text-black",children:n&&Object(d.jsx)("h2",{"data-testid":"modal-heading",className:"text-22 sm:text-26 font-semibold tracking-3 text-black",children:n})}),a]})]}):null})),f=n(8),x=function(){var e=Object(c.useState)(0),t=Object(r.a)(e,2),n=t[0],s=t[1],i=Object(c.useState)(!1),a=Object(r.a)(i,2),l=a[0],o=a[1],x=Object(c.useState)({state:!1,winner:null}),O=Object(r.a)(x,2),h=O[0],m=O[1];Object(c.useEffect)((function(){s(1),o(!1)}),[l]);var v="h-12 w-12 text-yellow-400";return Object(d.jsxs)("div",{className:"h-screen w-screen bg-yellow-400",children:[Object(d.jsxs)("div",{className:"flex flex-col pt-20 h-full w-full",children:[Object(d.jsx)("div",{className:"text-white font-bold text-4xl text-center mb-12",children:"Tic-Tac-Toe"}),Object(d.jsx)("div",{className:"max-h-400p self-center mb-12",children:Object(d.jsx)(u,{stepNumber:n,setStepNumber:s,isReset:l,setShouldShowWinnerModal:m})}),Object(d.jsx)("div",{className:"self-center",children:Object(d.jsx)(j,{setIsReset:o})})]}),Object(d.jsx)("div",{className:"center",children:h.state&&Object(d.jsx)(b,{title:h.winner?"WINNERRR":"MATCH TIED",ref:void 0,onClose:function(){return m({state:!1,winner:null})},isOpened:h.state,children:Object(d.jsxs)("div",{className:"text-center flex flex-col justify-evenly p-5",children:[Object(d.jsxs)("div",{className:"flex flex-row justify-around mb-6",children:[h.winner?Object(d.jsx)(f.b,{className:v}):Object(d.jsx)(f.a,{className:v}),h.winner&&Object(d.jsx)("div",{className:"font-medium pt-2.5",children:1===h.winner?"X Won":"O Won"})]}),Object(d.jsx)("div",{className:"self-end p-2 bg-gray-300 rounded cursor-pointer",onClick:function(){o(!0),m({state:!1,winner:null}),s(1)},children:"Restart"})]})})})]})};var O=function(){return Object(d.jsx)(x,{})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),i(e),a(e)}))};a.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(O,{})}),document.getElementById("root")),h()}},[[18,1,2]]]);
//# sourceMappingURL=main.7751d4be.chunk.js.map