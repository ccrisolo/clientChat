(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{105:function(e,t){},108:function(e,t,a){},109:function(e,t,a){},110:function(e,t,a){},153:function(e,t,a){},154:function(e,t,a){},155:function(e,t,a){"use strict";a.r(t);var n,c=a(0),r=a.n(c),s=a(58),o=a.n(s),l=a(19),m=a(1),i=a(9),u=(a(71),function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(""),o=Object(i.a)(s,2),m=o[0],u=o[1];return r.a.createElement("div",{className:"joinOuterContainer"},r.a.createElement("div",{className:"joinInnerContainer"},r.a.createElement("h1",{className:"heading"},"Join"),r.a.createElement("div",null,r.a.createElement("input",{placeholder:"Name",className:"joinInput",type:"text",onChange:function(e){return n(e.target.value)}})),r.a.createElement("div",null,r.a.createElement("input",{placeholder:"Room",className:"joinInput mt-20",type:"text",onChange:function(e){return u(e.target.value)}})),r.a.createElement(l.b,{onClick:function(e){return a&&m?null:e.preventDefault()},to:"/chat?name=".concat(a,"&room=").concat(m)},r.a.createElement("button",{className:"button mt-20",type:"submit"},"Sign In"))))}),A=a(65),E=a(60),p=a.n(E),f=a(61),g=a.n(f),h=(a(108),a(62)),d=a.n(h),v=a(63),N=a.n(v),k=(a(109),function(e){var t=e.room;return r.a.createElement("div",{className:"infoBar"},r.a.createElement("div",{className:"leftInnerContainer"},r.a.createElement("img",{className:"onlineIcon",src:N.a,alt:"online"}),r.a.createElement("h3",null,t)),r.a.createElement("div",{className:"rightInnerContainer"},r.a.createElement("a",{href:"/"},r.a.createElement("img",{src:d.a,alt:"close"}))))}),b=(a(110),function(e){var t=e.message,a=e.setMessage,n=e.sendMessage;return r.a.createElement("form",{className:"form"},r.a.createElement("input",{className:"input",type:"text",placeholder:"Type a message...",value:t,onChange:function(e){return a(e.target.value)},onKeyPress:function(e){return"Enter"===e.key?n(e):null}}),r.a.createElement("button",{className:"sendButton",onClick:function(e){return n(e)}},"Send"))}),B=a(64),j=a.n(B),C=(a(153),a(32)),O=a.n(C),w=function(e){var t=e.message,a=t.text,n=t.user,c=!1,s=e.name.trim().toLowerCase();return n===s&&(c=!0),c?r.a.createElement("div",{className:"messageContainer justifyEnd"},r.a.createElement("p",{className:"sentText pr-10"},s),r.a.createElement("div",{className:"messageBox backgroundBlue"},r.a.createElement("p",{className:"messageText colorWhite"},O.a.emojify(a)))):r.a.createElement("div",{className:"messageContainer justifyStart"},r.a.createElement("div",{className:"messageBox backgroundLight"},r.a.createElement("p",{className:"messageText colorDark"},O.a.emojify(a))),r.a.createElement("p",{className:"sentText pl-10 "},n))},I=(a(154),function(e){var t=e.messages,a=e.name;return r.a.createElement(j.a,{className:"messages"},t.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement(w,{message:e,name:a}))})))}),y=function(e){var t=e.location,a=Object(c.useState)(""),s=Object(i.a)(a,2),o=s[0],l=s[1],m=Object(c.useState)(""),u=Object(i.a)(m,2),E=u[0],f=u[1],h=Object(c.useState)(""),d=Object(i.a)(h,2),v=d[0],N=d[1],B=Object(c.useState)([]),j=Object(i.a)(B,2),C=j[0],O=j[1],w="https://react-real-time-chat-site.herokuapp.com/";Object(c.useEffect)((function(){var e=p.a.parse(t.search),a=e.name,c=e.room;return n=g()(w),l(a),f(c),n.emit("join",{name:a,room:c},(function(){})),function(){n.emit("disconnect"),n.off()}}),[w,t.search]),Object(c.useEffect)((function(){n.on("message",(function(e){O([].concat(Object(A.a)(C),[e]))}))}),[C]);return console.log(v,C),r.a.createElement("div",{className:"outerContainer"},r.a.createElement("div",{className:"container"},r.a.createElement(k,{room:E}),r.a.createElement(I,{messages:C,name:o}),r.a.createElement(b,{message:v,setMessage:N,sendMessage:function(e){e.preventDefault(),v&&n.emit("sendMessage",v,(function(){return N("")}))}})))},Q=function(){return r.a.createElement(l.a,null,r.a.createElement(m.a,{path:"/",exact:!0,component:u}),r.a.createElement(m.a,{path:"/chat",component:y}))};o.a.render(r.a.createElement(Q,null),document.querySelector("#root"))},62:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAABmJLR0QA/wD/AP+gvaeTAAABBUlEQVRIid2WTwqCQBSHv9oFXaCrlEGb7AphgXapqJN4A6ldXSXFFhW2cKRh0HFkHBf94IH4hvfN+zPDwE974ArkQGFpOXABdig69xC8yU5yJq4glQWIFF2DkpGo50StZc/KR4LoXOMhICagD3AANkBW48+ELwLebTBdEyNpnQekki8FlpI/bImldfrKpipYKr5lrW1AdQG9hn8PG1BB2YcVzVoYQIxAOpgppLAd705n0LZ0c3ooXZdhkEff6Xj7ulhtPZopkBiYCosVmLy2VrqMXpQn3qe+NKnwhWJtY6z/vL2fA3DyMXAfAHSD8klkcg3Z2LYinhxCjmp6AZDQ3wMykTP5AkwcV3k39dYwAAAAAElFTkSuQmCC"},63:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAABmJLR0QA/wD/AP+gvaeTAAABwklEQVRIie2UTStEcRTGf4iivE0kLxuUl6VPQHbEMFn4AiJ8BUnIVlaiZGFhI4aYDcoXQFZeN7JTZGY7GIs51zwz/oNrRTk1i/s7z3OeO+f+74X/+os1BtwCcz/wzgF3wOhXwiDwAiSAV6DQR0iR+RI2I5hNWAPERBz2EeLVrvhjNvNDLYvoCggY7wbmgXqHpw6YBXrtOgBcy5xllyEugnbjIeDZ2I4jaIvUqgaNdcicuM1+r3Fp7hurBB6FrzmCVqT/BFQZPxA+roaINIaMTQk7B8ocQWXAheimjQ8L21PDpTSajZ0K6zfWCGzbr8FYSHSnxlqEXWiQnrZiY1FhJcZ2hHmnslRY1FixsBhArmMdXuU4WOIT/bdK9+yt7kxYyFgDyX8SJrW6AdEdG2sly+r2pOEdhpkMseswlJP+fCeNjwjbVYPreFeR/pxWHUEb0n8AKowfCh9TQ7YXdpDUt2/TEXRivWegz1inzIkDtZmmJRFck/oE9ZBcY7UjqA1YBLrsOgDcyJwlh4ca0lcVcYm+KH3xo1luDkh+HL1VvQD5PkIKMrw92szLEF8B90ATsAAc+QjyQmqBCWDdh/e/fkG9Acr3suFUif5aAAAAAElFTkSuQmCC"},66:function(e,t,a){e.exports=a(155)},71:function(e,t,a){}},[[66,1,2]]]);
//# sourceMappingURL=main.cd91bb7b.chunk.js.map