(this["webpackJsonpmath-magicians"]=this["webpackJsonpmath-magicians"]||[]).push([[0],{27:function(t,e,n){},28:function(t,e,n){},30:function(t,e,n){},31:function(t,e,n){},32:function(t,e,n){},41:function(t,e,n){},42:function(t,e,n){"use strict";n.r(e);var o=n(1),i=n.n(o),s=n(15),a=n.n(s),l=n(8),c=(n(27),n(16)),r=n(17),u=n(22),b=n(20),d=n(2),h=n(14),m=n(21),p=(n(28),n(12)),j=n.n(p);function x(t,e,n){var o=j()(t),i=j()(e);if("+"===n)return o.plus(i).toString();if("-"===n)return o.minus(i).toString();if("x"===n)return o.times(i).toString();if("\xf7"===n)try{return o.div(i).toString()}catch(s){return"Can't divide by zero"}if("%"===n)return o.mod(i).toString();throw Error("Unknown operation '".concat(n,"'"))}var f=n(0),y=function(){var t=Object(o.useState)({total:0,next:0,operation:""}),e=Object(m.a)(t,2),n=e[0],i=e[1];function s(t){var e,o;i(Object(h.a)(Object(h.a)({},n),(e=n,"AC"===(o=t.target.innerHTML)?{total:null,next:null,operation:null}:o.match(/[0-9]+/)?"0"===o&&"0"===e.next?{}:e.operation?e.next?{next:e.next+o}:{next:o}:e.next?{next:e.next+o,total:null}:{next:o,total:null}:"."===o?e.next?e.next.includes(".")?{}:{next:"".concat(e.next," + .")}:e.operation?{next:"0."}:e.total?e.total.includes(".")?{}:{total:"".concat(e.total," + .")}:{total:"0."}:"="===o?e.next&&e.operation?{total:x(e.total,e.next,e.operation),next:null,operation:null}:{}:"+/-"===o?e.next?{next:(-1*parseFloat(e.next)).toString()}:e.total?{total:(-1*parseFloat(e.total)).toString()}:{}:e.operation?{total:x(e.total,e.next,e.operation),next:null,operation:o}:e.next?{total:e.next,next:null,operation:o}:{operation:o})))}return Object(o.useEffect)((function(){var t=n.total,e=n.next,o=document.querySelector("input");null!==e?o.value=e:Number.isNaN(t)||(o.value=t)}),[n]),Object(f.jsxs)("div",{className:"calculator-root",children:[Object(f.jsx)("h1",{children:"Let's do some math!"}),Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)("input",{className:"input-box",placeholder:"0",readOnly:!0}),Object(f.jsxs)("div",{className:"sub-container",children:[Object(f.jsx)("button",{type:"button",className:"ac button-width left-button",onClick:s,children:"AC"}),Object(f.jsx)("button",{type:"button",className:"plus-minus button-width left-button",onClick:s,children:"+/-"}),Object(f.jsx)("button",{type:"button",className:"percent button-width left-button",onClick:s,children:"%"}),Object(f.jsx)("button",{type:"button",className:"divide button-width right-button",onClick:s,children:"\xf7"})]}),Object(f.jsxs)("div",{className:"sub-container",children:[Object(f.jsx)("button",{type:"button",className:"seven button-width left-button",onClick:s,children:"7"}),Object(f.jsx)("button",{type:"button",className:"eight button-width left-button",onClick:s,children:"8"}),Object(f.jsx)("button",{type:"button",className:"nine button-width left-button",onClick:s,children:"9"}),Object(f.jsx)("button",{type:"button",className:"times button-width right-button",onClick:s,children:"x"})]}),Object(f.jsxs)("div",{className:"sub-container",children:[Object(f.jsx)("button",{type:"button",className:"four button-width left-button",onClick:s,children:"4"}),Object(f.jsx)("button",{type:"button",className:"five button-width left-button",onClick:s,children:"5"}),Object(f.jsx)("button",{type:"button",className:"six button-width left-button",onClick:s,children:"6"}),Object(f.jsx)("button",{type:"button",className:"minus button-width right-button",onClick:s,children:"-"})]}),Object(f.jsxs)("div",{className:"sub-container",children:[Object(f.jsx)("button",{type:"button",className:"four button-width left-button",onClick:s,children:"1"}),Object(f.jsx)("button",{type:"button",className:"five button-width left-button",onClick:s,children:"2"}),Object(f.jsx)("button",{type:"button",className:"six button-width left-button",onClick:s,children:"3"}),Object(f.jsx)("button",{type:"button",className:"minus button-width right-button",onClick:s,children:"+"})]}),Object(f.jsxs)("div",{className:"last-container",children:[Object(f.jsx)("button",{type:"button",id:"zero-button",className:"zero left-button",onClick:s,children:"0"}),Object(f.jsx)("button",{type:"button",className:"dot button-width left-button",onClick:s,children:"."}),Object(f.jsx)("button",{type:"button",className:"equal button-width right-button",onClick:s,children:"="})]})]})]})},g=(n(30),n(31),function(){return Object(f.jsx)("div",{className:"quote-container",children:Object(f.jsx)("h2",{children:"Mathematics possesses not only truth, but supreme beauty -- a beauty cold and austere, like that of sculpture. -- Bertrand Russell"})})}),O=(n(32),function(){return Object(f.jsxs)("nav",{className:"navbar",children:[Object(f.jsx)("div",{children:Object(f.jsx)("h1",{children:"Math Magicians"})}),Object(f.jsx)("ul",{className:"menu-items",children:[{id:1,path:"/",text:"Home"},{id:2,path:"/calculator",text:"Calculator"},{id:3,path:"/quote",text:"Quote"}].map((function(t){return Object(f.jsx)("li",{className:3===t.id?"":"link-border",children:Object(f.jsx)(l.b,{to:t.path,className:"link-margin",children:t.text})},t.id)}))})]})}),k=(n(41),function(){return Object(f.jsxs)("div",{className:"header",children:[Object(f.jsx)("h2",{children:"Welcome to our page!"}),Object(f.jsx)("p",{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)"}),Object(f.jsx)("p",{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)"})]})}),v=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(t){var o;return Object(c.a)(this,n),(o=e.call(this,t)).state={},o}return Object(r.a)(n,[{key:"render",value:function(){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(O,{}),Object(f.jsxs)(d.c,{children:[Object(f.jsx)(d.a,{exact:!0,path:"/",children:Object(f.jsx)(k,{})}),Object(f.jsx)(d.a,{path:"/calculator",children:Object(f.jsx)(y,{})}),Object(f.jsx)(d.a,{path:"/quote",children:Object(f.jsx)(g,{})})]})]})}}]),n}(i.a.Component);a.a.render(Object(f.jsx)(i.a.StrictMode,{children:Object(f.jsx)(l.a,{children:Object(f.jsx)(v,{})})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.69b4c4ef.chunk.js.map