(this.webpackJsonpshop=this.webpackJsonpshop||[]).push([[3],{123:function(e,t,s){"use strict";s.r(t);var n=s(14),a=s(9),i=s(1),c=s.n(i),r=s(12),o=s(121),l=(s(22),s(3)),d=s(11),p=s(15);s(4);function u(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}var m=s(26),j=function(e,t){return e&&t&&t.split(" ").forEach((function(t){return n=t,void((s=e).classList?s.classList.remove(n):"string"===typeof s.className?s.className=u(s.className,n):s.setAttribute("class",u(s.className&&s.className.baseVal||"",n)));var s,n}))},b=function(e){function t(){for(var t,s=arguments.length,n=new Array(s),a=0;a<s;a++)n[a]=arguments[a];return(t=e.call.apply(e,[this].concat(n))||this).appliedClasses={appear:{},enter:{},exit:{}},t.onEnter=function(e,s){var n=t.resolveArguments(e,s),a=n[0],i=n[1];t.removeClasses(a,"exit"),t.addClass(a,i?"appear":"enter","base"),t.props.onEnter&&t.props.onEnter(e,s)},t.onEntering=function(e,s){var n=t.resolveArguments(e,s),a=n[0],i=n[1]?"appear":"enter";t.addClass(a,i,"active"),t.props.onEntering&&t.props.onEntering(e,s)},t.onEntered=function(e,s){var n=t.resolveArguments(e,s),a=n[0],i=n[1]?"appear":"enter";t.removeClasses(a,i),t.addClass(a,i,"done"),t.props.onEntered&&t.props.onEntered(e,s)},t.onExit=function(e){var s=t.resolveArguments(e)[0];t.removeClasses(s,"appear"),t.removeClasses(s,"enter"),t.addClass(s,"exit","base"),t.props.onExit&&t.props.onExit(e)},t.onExiting=function(e){var s=t.resolveArguments(e)[0];t.addClass(s,"exit","active"),t.props.onExiting&&t.props.onExiting(e)},t.onExited=function(e){var s=t.resolveArguments(e)[0];t.removeClasses(s,"exit"),t.addClass(s,"exit","done"),t.props.onExited&&t.props.onExited(e)},t.resolveArguments=function(e,s){return t.props.nodeRef?[t.props.nodeRef.current,e]:[e,s]},t.getClassNames=function(e){var s=t.props.classNames,n="string"===typeof s,a=n?""+(n&&s?s+"-":"")+e:s[e];return{baseClassName:a,activeClassName:n?a+"-active":s[e+"Active"],doneClassName:n?a+"-done":s[e+"Done"]}},t}Object(p.a)(t,e);var s=t.prototype;return s.addClass=function(e,t,s){var n=this.getClassNames(t)[s+"ClassName"],a=this.getClassNames("enter").doneClassName;"appear"===t&&"done"===s&&a&&(n+=" "+a),"active"===s&&e&&e.scrollTop,n&&(this.appliedClasses[t][s]=n,function(e,t){e&&t&&t.split(" ").forEach((function(t){return n=t,void((s=e).classList?s.classList.add(n):function(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")}(s,n)||("string"===typeof s.className?s.className=s.className+" "+n:s.setAttribute("class",(s.className&&s.className.baseVal||"")+" "+n)));var s,n}))}(e,n))},s.removeClasses=function(e,t){var s=this.appliedClasses[t],n=s.base,a=s.active,i=s.done;this.appliedClasses[t]={},n&&j(e,n),a&&j(e,a),i&&j(e,i)},s.render=function(){var e=this.props,t=(e.classNames,Object(d.a)(e,["classNames"]));return c.a.createElement(m.e,Object(l.a)({},t,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},t}(c.a.Component);b.defaultProps={classNames:""},b.propTypes={};var h=b,f=s(34),v=(s(33),s(0));function x(e){return Object(i.useEffect)((function(){e.animeC(!0)})),0===e.onTab?Object(v.jsxs)("div",{className:"tabContent",children:[Object(v.jsx)("div",{className:"tabFirst",children:Object(v.jsx)("img",{src:"https://raw.githubusercontent.com/WhiteDog1004/ShoesShop/main/shoes/shoes/detail_product.jpg"})}),Object(v.jsx)("p",{children:"\ub098\uc058\uc9c0\uc54a\ub124\uc694"}),Object(v.jsx)("p",{children:"\ub2f9\uc7a5 \uad6c\ub9e4 \u3131\u3131"})]}):1===e.onTab?Object(v.jsx)("div",{className:"tabContent",children:"1\ubc88\uc9f8 \ub0b4\uc6a9\uc785\ub2c8\ub2e4"}):2===e.onTab?Object(v.jsx)("div",{className:"tabContent",children:"2\ubc88\uc9f8 \ub0b4\uc6a9\uc785\ub2c8\ub2e4"}):void 0}t.default=Object(f.b)((function(e){return{state:e.reducer,alertOpen:e.reducer2}}))((function(e){var t=Object(i.useState)(Object(v.jsx)("div",{className:"alertBox",children:"\uc7ac\uace0\uac00 \uc5bc\ub9c8 \ub0a8\uc9c0 \uc54a\uc558\uc5b4\uc694!"})),s=Object(a.a)(t,2),c=s[0],l=s[1],d=Object(i.useState)(0),p=Object(a.a)(d,2),u=p[0],m=p[1],j=Object(i.useState)(!1),b=Object(a.a)(j,2),f=b[0],O=b[1],g=Object(r.g)().id,N=Object(r.f)(),C=Number(g),E=localStorage.getItem("getDefault"),k=(E=JSON.parse(E)).find((function(e){return e.id==g}));return Object(i.useEffect)((function(){if(k.stock<=10)var e=setTimeout((function(){return l(null),function(){clearTimeout(e)}}),2e3);else l(null)}),[c]),Object(i.useEffect)((function(){if(null==(e=localStorage.getItem("watched")))var e=[];else e=JSON.parse(e);var t=e.find((function(e){return e.id==g}));void 0===t&&e.push(k);var s=e.findIndex((function(e){return e.id==g}));void 0!==t&&s<=4&&(e.splice(s,1),e.push(k)),(e=Object(n.a)(e)).length>5&&e!==C&&e.splice(0,1),localStorage.setItem("watched",JSON.stringify(e))}),[]),Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("div",{className:"alertName",children:Object(v.jsx)("h1",{children:k.title})}),Object(v.jsx)("div",{className:"container",children:Object(v.jsxs)("div",{className:"row detailBg",children:[Object(v.jsx)("div",{className:"col-md-6",children:Object(v.jsx)("img",{src:"https://raw.githubusercontent.com/WhiteDog1004/ShoesShop/main/shoes/shoes"+(C+1)+".jpg",width:"100%"})}),Object(v.jsxs)("div",{className:"col-md-6 mt-4 textBox",children:[Object(v.jsx)("h4",{className:"pt-5",children:k.title}),Object(v.jsx)("p",{children:k.content}),Object(v.jsxs)("p",{children:[k.price,"\uc6d0"]}),Object(v.jsxs)("p",{children:["\uc7ac\uace0 : ",k.stock]}),Object(v.jsx)("button",{className:"btn btn-danger",onClick:function(){e.dispatch({type:"\ucd94\uac00",payload:{id:k.id,name:k.title,quan:1,price:k.price}}),N.push("/Cart")},children:"\uc8fc\ubb38\ud558\uae30"}),Object(v.jsx)("button",{className:"btn btn-primary",onClick:function(){N.goBack()},children:"\ub4a4\ub85c\uac00\uae30"})]})]})}),c,Object(v.jsxs)(o.a,{fill:!0,variant:"tabs",defaultActiveKey:"link-0",className:"tabMenu",children:[Object(v.jsx)(o.a.Item,{children:Object(v.jsx)(o.a.Link,{eventKey:"link-0",onClick:function(){O(!1),m(0)},children:"\uc0c1\ud488 \uc124\uba85"})}),Object(v.jsx)(o.a.Item,{children:Object(v.jsx)(o.a.Link,{eventKey:"link-1",onClick:function(){O(!1),m(1)},children:"\ubc30\uc1a1 \uc815\ubcf4"})}),Object(v.jsx)(o.a.Item,{children:Object(v.jsx)(o.a.Link,{eventKey:"link-2",onClick:function(){O(!1),m(2)},children:"\uae30\ud0c0"})})]}),Object(v.jsx)(h,{in:f,classNames:"tabAnime",timeout:500,children:Object(v.jsx)(x,{onTab:u,animeC:O})})]})}))}}]);
//# sourceMappingURL=3.7c22ffa2.chunk.js.map