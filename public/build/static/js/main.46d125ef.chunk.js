(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(n,t,e){n.exports=e(69)},37:function(n,t,e){},69:function(n,t,e){"use strict";e.r(t);var r=e(0),a=e.n(r),i=e(5),u=e.n(i),c=(e(37),e(21)),l=e(22),o=e(29),d=e(23),f=e(30),p=e(2),m=e(24),s=e.n(m),h=e(3);function x(){var n=Object(p.a)(["\n  height: 400px;\n"]);return x=function(){return n},n}function g(){var n=Object(p.a)(["\n  padding-left: 10px;\n  text-align: left;\n"]);return g=function(){return n},n}function v(){var n=Object(p.a)(["\n  padding-left: 10px;\n  text-align: left;\n"]);return v=function(){return n},n}function w(){var n=Object(p.a)(["\n  display: flex;\n\tflex-direction: column;\n  width: 65%;\n  @media (max-width: 800px) {\n    width: 100%;\n  }\n"]);return w=function(){return n},n}var b=h.a.div(w()),O=h.a.h1(v()),j=h.a.p(g()),E=h.a.img(x());function y(n){var t=n.item,e=t.id,r=t.artwork,i=(t.title,t.content);return a.a.createElement(b,null,a.a.createElement(E,{src:r,alt:e}),a.a.createElement(O,null,"Lorem Ipsum"),a.a.createElement(j,null,i.substring(0,180)))}function k(){var n=Object(p.a)(["\n  height: 250px;\n"]);return k=function(){return n},n}function L(){var n=Object(p.a)(["\n  padding-left: 10px;\n  text-align: left;\n"]);return L=function(){return n},n}function S(){var n=Object(p.a)(["\n  padding-left: 10px;\n  text-align: left;\n"]);return S=function(){return n},n}function I(){var n=Object(p.a)(["\n  display: flex;\n\tflex-direction: column;\n  width: 32%;\n  @media (max-width: 800px) {\n    width: 48%;\n  }\n  @media (max-width: 400px) {\n    width: 100%;\n  }\n"]);return I=function(){return n},n}var C=h.a.div(I()),A=h.a.h1(S()),F=h.a.p(L()),q=h.a.img(k());function M(n){var t=n.item,e=t.id,r=t.artwork,i=(t.title,t.content);return a.a.createElement(C,null,a.a.createElement(q,{src:r,alt:e}),a.a.createElement(A,null,"Lorem Ipsum"),a.a.createElement(F,null,i.substring(0,150)))}function R(){var n=Object(p.a)(["\n  height: 200px;\n"]);return R=function(){return n},n}function T(){var n=Object(p.a)(["\n  padding-left: 10px;\n  text-align: left;\n"]);return T=function(){return n},n}function J(){var n=Object(p.a)(["\n  padding-left: 10px;\n  text-align: left;\n"]);return J=function(){return n},n}function N(){var n=Object(p.a)(["\n  display: flex;\n\tflex-direction: column;\n  width: 23%;\n  @media (max-width: 800px) {\n    width: 48%;\n  }\n  @media (max-width: 400px) {\n    width: 100%;\n  }\n"]);return N=function(){return n},n}var B=h.a.div(N()),D=h.a.h1(J()),P=h.a.p(T()),z=h.a.img(R());function G(n){var t=n.item,e=t.id,r=t.artwork,i=(t.title,t.content);return a.a.createElement(B,null,a.a.createElement(z,{src:r,alt:e}),a.a.createElement(D,null,"Lorem Ipsum"),a.a.createElement(P,null,i.substring(0,100)))}function H(){var n=Object(p.a)(["\n  height: 150px;\n"]);return H=function(){return n},n}function K(){var n=Object(p.a)(["\n  padding-left: 10px;\n  text-align: left;\n"]);return K=function(){return n},n}function Q(){var n=Object(p.a)(["\n  padding-left: 10px;\n  text-align: left;\n"]);return Q=function(){return n},n}function U(){var n=Object(p.a)(["\n  display: flex;\n\tflex-direction: column;\n  width: 16%;\n  @media (max-width: 800px) {\n    width: 32%;\n  }\n  @media (max-width: 400px) {\n    width: 45%;\n  }\n"]);return U=function(){return n},n}var V=h.a.div(U()),W=h.a.h1(Q()),X=h.a.p(K()),Y=h.a.img(H());function Z(n){var t=n.item,e=t.id,r=t.artwork,i=(t.title,t.content);return a.a.createElement(V,null,a.a.createElement(Y,{src:r,alt:e}),a.a.createElement(W,null,"Lorem Ipsum"),a.a.createElement(X,null,i.substring(0,70)))}var $=e(27);function _(){var n=Object(p.a)(["\n  display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap;\n"]);return _=function(){return n},n}function nn(){var n=Object(p.a)(["\n  display: flex;\n  justify-content: space-around;\n  @media (max-width: 800px) {\n    flex-wrap: wrap;\n  }\n"]);return nn=function(){return n},n}function tn(){var n=Object(p.a)(["\n  display: flex;\n  justify-content: space-around;\n  @media (max-width: 800px) {\n    flex-wrap: wrap;\n  }\n"]);return tn=function(){return n},n}var en=h.a.div(tn()),rn=h.a.div(nn()),an=h.a.div(_()),un=function(n){function t(){var n,e;Object(c.a)(this,t);for(var r=arguments.length,i=new Array(r),u=0;u<r;u++)i[u]=arguments[u];return(e=Object(o.a)(this,(n=Object(d.a)(t)).call.apply(n,[this].concat(i)))).state={data:[],photoIndex:-1,isOpen:!0},e.renderFirstAndSecond=function(){if(e.state.data.length>0)return a.a.createElement(an,null,e.state.data.slice(0,5).map(function(n,t){return 0===t?a.a.createElement(y,{item:n,key:n.id,onClick:function(){return e.openLightbox(t)}}):a.a.createElement(M,{item:n,key:n.id,onClick:function(){return e.openLightbox(t)}})}))},e.renderThird=function(){if(e.state.data.length>0)return a.a.createElement(rn,null,e.state.data.slice(6,10).map(function(n,t){return a.a.createElement(G,{item:n,key:n.id,onClick:function(){return e.openLightbox(t)}})}))},e.renderFourth=function(){if(e.state.data.length>0)return a.a.createElement(en,null,e.state.data.slice(10,16).map(function(n,t){return a.a.createElement(Z,{item:n,key:n.id,onClick:function(){return e.openLightbox(t)}})}))},e.openLightbox=function(n){e.setState({photoIndex:n,isOpen:!0})},e.showLightbox=function(){var n=e.state,t=n.isOpen,r=n.images;if(t&&r&&r.length>0)return a.a.createElement($.a,{mainSrc:r[2],nextSrc:r[3%r.length],prevSrc:r[(2+r.length-1)%r.length],imageTitle:"3/"+r.length,onCloseRequest:function(){return e.setState({isOpen:!1})},onMovePrevRequest:function(){return e.setState({photoIndex:(2+r.length-1)%r.length})},onMoveNextRequest:function(){return e.setState({photoIndex:3%r.length})}})},e}return Object(f.a)(t,n),Object(l.a)(t,[{key:"componentDidMount",value:function(){var n=this;s.a.get("http://localhost:5000/").then(function(t){var e=t.data,r=[];e.map(function(n){return r.push(n.artwork)}),n.setState({data:e,images:r})})}},{key:"render",value:function(){return a.a.createElement("div",{className:"App"},this.renderFirstAndSecond(),this.renderThird(),this.renderFourth())}}]),t}(r.Component);u.a.render(a.a.createElement(un,null),document.getElementById("root"))}},[[32,2,1]]]);
//# sourceMappingURL=main.46d125ef.chunk.js.map