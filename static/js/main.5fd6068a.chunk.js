(this.webpackJsonpmytodolist=this.webpackJsonpmytodolist||[]).push([[0],{13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var c=n(1),o=n.n(c),s=n(8),i=n.n(s),r=(n(13),n(4)),a=n(6),j=n(0);function l(t){var e=t.todo,n=t.setTodo,o=Object(c.useState)(""),s=Object(r.a)(o,2),i=s[0],l=s[1];return Object(j.jsxs)("form",{children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{children:"Routine"}),Object(j.jsx)("input",{type:"text",onChange:function(t){l(t.target.value)},value:i})]}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{type:"submit",onClick:function(t){t.preventDefault(),n([].concat(Object(a.a)(e),[{task:i,completed:!1,key:Math.max.apply(Math,Object(a.a)(e.map((function(t){return t.key}))).concat([0]))+1}])),l("")},children:"submit"})})]})}var d=n(7);function u(t){var e=t.content,n=t.setTodo,c=t.todo;return Object(j.jsxs)("div",{className:"list-card",children:[Object(j.jsx)("p",{style:e.completed?{textDecoration:"line-through"}:{textDecoration:"none"},children:e.task}),Object(j.jsxs)("div",{children:[Object(j.jsxs)("button",{onClick:function(){return t=e.key,void n(c.filter((function(e){return e.key!==t})));var t},children:["Remove",Object(j.jsx)("i",{className:"fi-rr-add"})]}),Object(j.jsx)("button",{onClick:function(){var t=!e.completed;n(c.map((function(n){return n.key===e.key?Object(d.a)(Object(d.a)({},n),{},{completed:t}):n})))},children:"Done"})]})]})}function b(t){var e=t.todo,n=t.setTodo;return 0===e.length?null:Object(j.jsxs)("div",{className:"list",children:[Object(j.jsx)("h1",{children:"Todo List"}),e.map((function(t){return Object(j.jsx)(u,{content:t,setTodo:n,todo:e},t.key)}))]})}function O(){var t=Object(c.useState)([]),e=Object(r.a)(t,2),n=e[0],o=e[1];return Object(c.useEffect)((function(){var t=JSON.parse(localStorage.getItem("list"));null!==t&&o(t)}),[]),Object(c.useEffect)((function(){localStorage.setItem("list",JSON.stringify(n))})),Object(j.jsxs)("div",{className:"main",children:[Object(j.jsx)(l,{todo:n,setTodo:o}),Object(j.jsx)(b,{todo:n,setTodo:o})]})}var f=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(O,{})})};i.a.render(Object(j.jsx)(o.a.StrictMode,{children:Object(j.jsx)(f,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.5fd6068a.chunk.js.map