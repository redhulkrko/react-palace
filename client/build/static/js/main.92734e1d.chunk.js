(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{122:function(e,n,t){"use strict";t.r(n);var a=t(8),r=t.n(a),l=t(10),i=t(0),c=t.n(i),o=t(51),s=t.n(o),u=t(19),m=t(4),p=t(7),d=t(11),b=(t(63),t(23)),f=function(e){var n=e.path,t=e.component,a=e.layout,r=Object(b.a)(e,["path","component","layout"]),l=Object(i.useContext)(hn),o=l.user,s=(l.setState,!!o);return console.log({loggedIn:s}),c.a.createElement(p.b,Object.assign({},r,{path:n,render:function(e){return s?c.a.createElement(a,null,c.a.createElement(t,e)):c.a.createElement(p.a,{to:"/login"})}}))},v=Object(p.g)((function(e){var n=e.path,t=e.component,a=Object(i.useContext)(hn),r=a.user,l=(a.setState,!!r);return console.log(l),c.a.createElement(p.b,{path:n,render:function(e){return l?c.a.createElement(p.a,{to:"/dashboard"}):c.a.createElement(t,e)}})})),g=t(2),h=t(3);function E(){var e=Object(g.a)(["\ndisplay: block;\ncolumn-count: 1;\ncolumn-gap: 20px;\nmargin: 20px;\n\n@media only screen and (min-width: 65.625em) {\ncolumn-count: 2;\n}\n"]);return E=function(){return e},e}function x(){var e=Object(g.a)(["\ngrid-area: main;\nbackground-color: #EAEDF1;\ncolor: #394263\n"]);return x=function(){return e},e}var O=h.b.main(x()),j=h.b.div(E()),y=function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement(O,null,c.a.createElement(j,null,c.a.createElement("h1",null,"Add Film"))))},w=t(16),N=t(14),k=t.n(N),S=Object(i.createContext)();function C(e){var n=e.children,t=Object(i.useState)([]),a=Object(m.a)(t,2),o=a[0],s=a[1],u=Object(i.useState)(!0),p=Object(m.a)(u,2),d=p[0],b=p[1];return Object(i.useEffect)((function(){function e(){return(e=Object(l.a)(r.a.mark((function e(){var n,t,a,l;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s([]),b(!0),n={VeeziAccessToken:"4nv3j36r58gkxfka0gneakmmnc"},e.next=5,k.a.get("https://api.us.veezi.com/v1/film",{headers:n});case 5:t=e.sent,a=t.data,console.log(a),l=Object(w.a)(a),s(l),b(!1);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),c.a.createElement(S.Provider,{value:{films:o,loading:d}},n)}var z=S;function F(){var e=Object(g.a)(["\ngrid-area: main;\n  height: 100vh;\n  margin: 0;\n  padding: 20px;\n"]);return F=function(){return e},e}var D=h.b.main(F()),T=function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement(C,null,c.a.createElement(D,null,c.a.createElement("h1",null,"Films"))))},L=t(6),A=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"Welcome!"),c.a.createElement(L.b,{to:"/login"},"Login"))},R=function(e){return fetch("api/session",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}})},M=function(){var e=Object(l.a)(r.a.mark((function e(){var n,t,a,l;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/session");case 2:return n=e.sent,e.next=5,n.json();case 5:return t=e.sent,a=t.user,console.log(n,a),l={},a&&(l={session:a}),e.abrupt("return",l);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function P(){var e=Object(g.a)(["\n  margin-top: 2rem;\n  display: grid;\n  justify-content: space-between;\n  align-items: center;\n  grid-template-columns: 1fr 1fr;\n\n  a {\n    font-size: 14px;\n    font-weight: 500;\n    text-decoration: none;\n    color: #1270e3;\n    transition: color .35s ease;\n  }\n\n  a:hover {\n    text-decoration: underline;\n    color: #666;\n  }\n\n  @media (min-width: 768px) {\n    a {\n      font-size: 18px;\n    }\n  }\n\n  @media (min-width: 992px) {\n    a {\n      font-size: 18px;\n    }  \n  }\n\n  @media (min-width: 1200px) {\n    a {\n      font-size: 14px;\n    } \n  }\n"]);return P=function(){return e},e}function I(){var e=Object(g.a)(["\n    cursor: pointer;\n    background: linear-gradient(120deg, #59c2ff, #1270e3);\n    background-size: 180%;\n    color: #fff;\n    font-weight: 500;\n    border: none;\n    transition: background .35s ease;\n"]);return I=function(){return e},e}function _(){var e=Object(g.a)(["\n  margin-top: 1.5rem;\n\n  input {\n    margin-top: 10px;\n    outline: none;\n    margin: 0;\n    border: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n    box-shadow: none;\n    display: block;\n    padding: 10px 1rem;\n    width: 100%;\n    font-family: inherit;\n    font-size: 1.15em;\n    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */\n    -moz-box-sizing: border-box;    /* Firefox, other Gecko */\n    box-sizing: border-box;         /* Opera/IE 8+ */\n  }\n  \n\n  @media (min-width: 768px) {\n    margin-top: 2rem;\n\n    input {\n      font-size: 1.4em;\n    }\n  }\n\n  @media (min-width: 992px) {\n    margin-top: 1.5rem;\n\n    input {\n      font-size: 1.4em;\n    }  \n  }\n\n  @media (min-width: 1200px) {\n    margin-top: 1.5rem;\n\n    input {\n      font-size: 100%;\n    } \n  }\n\n  input:focus {\n    border-color: #1270e3;\n    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, .1), 0 2px 4px -1px rgba(0, 0, 0, .06);\n  }\n"]);return _=function(){return e},e}function B(){var e=Object(g.a)(["\n  background-color: #fff;\n  padding: 3rem 2rem;\n  border-radius: 5px;\n  width: 90vw;\n  text-align: center;\n  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, .25);\n\n  h1 {\n    font-weight: 600;\n    font-size: 1.75rem;\n  }\n\n  @media (min-width: 768px) {\n    width: 80vw;\n    padding: 5rem;\n  }\n\n  @media (min-width: 992px) {\n    width: 65vw;\n    padding: 5rem 6rem;\n\n    h1 {\n      font-size: 1.95rem;\n    }\n  }\n\n  @media (min-width: 1200px) {\n    width: 35vw;\n    padding: 4rem 3rem;\n\n    h1 {\n      font-size: 1.55rem;\n    }\n  }\n\n  \n\n\n"]);return B=function(){return e},e}function U(){var e=Object(g.a)(["\n  height: 100vh;\n  display: grid;\n  justify-content: center;\n  align-items: center;\n"]);return U=function(){return e},e}function H(){var e=Object(g.a)(["\n  body {\n    height: 100vh;\n    background: linear-gradient(120deg, #59c2ff, #1270e3);\n  }\n"]);return H=function(){return e},e}var J=Object(h.a)(H()),W=h.b.div(U()),Y=h.b.div(B()),q=h.b.div(_()),G=h.b.input(I()),K=h.b.div(P()),V=(Object(p.g)((function(e){var n=e.path,t=e.component,a=Object(i.useContext)(hn),r=a.user,l=(a.setState,!!r);return console.log(l),c.a.createElement(p.b,{path:n,render:function(e){return l?c.a.createElement(p.a,{to:"/dashboard"}):c.a.createElement(t,e)}})})),function(e){var n=e.errors,t=(e.login,Object(i.useContext)(hn)),a=t.loginError,o=t.setState,s=Object(i.useState)(!1),u=Object(m.a)(s,2),p=u[0],d=u[1],b=function(){var e=Object(l.a)(r.a.mark((function e(n){var t,a,l;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),t={email:n.target[0].value,password:n.target[1].value},e.next=4,R(t);case 4:return a=e.sent,e.next=7,a.json();case 7:l=e.sent,console.log({response:a},{data:l}),a.ok?o({user:l,loginError:void 0}):o({loginError:a.statusText});case 10:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){fetch("/api/session").then((function(e){return e.json()})).then((function(e){var n=e.user;n&&n.userId&&o({user:n}),(!n||!n.userId)&&d(!0)}))}),[]),p&&c.a.createElement(c.a.Fragment,null,c.a.createElement(J,null),c.a.createElement(W,null,c.a.createElement(Y,null,c.a.createElement("h1",null,"Login"),c.a.createElement(q,null,c.a.createElement("p",null,n),c.a.createElement("form",{onSubmit:b},c.a.createElement("input",{type:"email",name:"email",placeholder:"Email"}),c.a.createElement("input",{type:"password",name:"password",placeholder:"Password"}),a||null,c.a.createElement(G,{type:"submit",value:"Login"}))),c.a.createElement(K,null,c.a.createElement("div",null,c.a.createElement(L.b,{to:"/signup"},"Sign Up?")),c.a.createElement("div",null,c.a.createElement(L.b,{to:"#"},"Homepage"))))))||null}),Q=function(e){var n=e.errors,t=e.signup;return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"Signup"),c.a.createElement("p",null,n),c.a.createElement("form",{onSubmit:function(e){e.preventDefault();var n={username:e.target[0].value,email:e.target[1].value,password:e.target[2].value};t(n)}},c.a.createElement("label",null,"Username:",c.a.createElement("input",{type:"text",name:"username"})),c.a.createElement("label",null,"Email:",c.a.createElement("input",{type:"email",name:"email"})),c.a.createElement("label",null,"Password:",c.a.createElement("input",{type:"password",name:"password"})),c.a.createElement("input",{type:"submit",value:"Submit"})),c.a.createElement(L.b,{to:"/login"},"Login"))},X=t(134),Z=t(29),$=t(30),ee=t(27),ne=t(32),te=t(31);function ae(){var e=Object(g.a)(["\nbackground-color: #ddd;\n    border: none;\n    color: black;\n    padding: 10px 20px;\n    text-align: center;\n    text-decoration: none;\n    display: block;\n    margin: 4px 2px;\n    cursor: pointer;\n    border-radius: 16px;\n  position:relative;\n  outline:none;\n"]);return ae=function(){return e},e}var re=h.b.button(ae()),le=function(e){var n=e.children,t=Object(b.a)(e,["children"]);return c.a.createElement(re,t,n)};function ie(){var e=Object(g.a)(['\n  position: absolute;\n  top: 54px;\n  right: -16px;\n  width: 220px;\n  height: auto;\n  z-index: 2;\n  background-color: #fff;\n  border-radius: 4px;\n  visibility: hidden;\n  opacity: 0;\n  transform: translateY(-10px);\n  transition: all .3s;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);\n\n  :before {\n    position: absolute;\n    content: "";\n    top: -6px;\n    right: 30px;\n    width: 0;\n    height: 0;\n    border-left: 4px solid transparent;\n    border-right: 4px solid transparent;\n    border-bottom: 6px solid #FFF;\n}\n']);return ie=function(){return e},e}function ce(){var e=Object(g.a)(["\n.dropdown-active {\n    visibility: visible;\n    opacity: 1;\n    transform: translateY(0);\n}\n\n.dropdown-list {\n    margin: 0;\n    padding: 0;\n    list-style-type: none;\n  }\n  \n  .dropdown-list-item {\n    padding: 12px 24px;\n    color: #777;\n    text-transform: capitalize;\n  }\n  \n  .dropdown-list-item:hover {\n    background-color: rgba(0, 0, 0, 0.1);\n  }\n"]);return ce=function(){return e},e}var oe=Object(h.a)(ce()),se=h.b.div(ie()),ue=function(e){Object(ne.a)(t,e);var n=Object(te.a)(t);function t(e){var a;return Object(Z.a)(this,t),(a=n.call(this,e)).state={menuShown:!1},a.toggleMenuBound=a.toggleMenu.bind(Object(ee.a)(a)),a.handleOutsideClick=a.handleOutsideClick.bind(Object(ee.a)(a)),a}return Object($.a)(t,[{key:"toggleMenu",value:function(){this.state.menuActive?document.removeEventListener("click",this.handleOutsideClick,!1):document.addEventListener("click",this.handleOutsideClick,!1),this.setState((function(e){return{menuActive:!e.menuActive}}))}},{key:"handleOutsideClick",value:function(e){this.node.contains(e.target)||this.toggleMenu()}},{key:"render",value:function(){var e=this,n=this.props.Type,t=this.props.Label,a=this.state.menuActive;return c.a.createElement(c.a.Fragment,null,c.a.createElement(n,{onClick:this.toggleMenuBound}," ",t,c.a.createElement(se,{ref:function(n){e.node=n},className:"".concat(a?"dropdown-active":"")},c.a.createElement("ul",{class:"dropdown-list"},c.a.createElement("li",{class:"dropdown-list-item"},c.a.createElement("span",{class:"dropdown-icon"},c.a.createElement("i",{class:"far fa-user"})),c.a.createElement("span",{class:"dropdown-title"},"my profile")),c.a.createElement("li",{class:"dropdown-list-item"},c.a.createElement("span",{class:"dropdown-icon"},c.a.createElement("i",{class:"fas fa-clipboard-list"})),c.a.createElement("span",{class:"dropdown-title"},"my account")),c.a.createElement("li",{class:"dropdown-list-item"},c.a.createElement("span",{class:"dropdown-icon"},c.a.createElement("i",{class:"fas fa-sign-out-alt"})),c.a.createElement("span",{class:"dropdown-title"},"log out"))))),c.a.createElement(oe,null))}}]),t}(i.Component);function me(){var e=Object(g.a)(['\n  background-image: url("./avatar.png");\n  background-size: cover;\n  background-repeat: no-repeat;\n  border-radius: 50%;\n  border: 2px solid rgba(255, 255, 255, 0.2);\n  position: relative;\n  margin: 2px 26px;\n  width: 38px;\n  height: 38px;\n  cursor: pointer;\n\n  :after {\n    position: absolute;\n  content: "";\n  width: 6px;\n  height: 6px;\n  background: none;\n  border-left: 2px solid #777;\n  border-bottom: 2px solid #777;\n  transform: rotate(-45deg) translateY(-50%);\n  top: 50%;\n  right: -18px;\n  }\n']);return me=function(){return e},e}ue.defaultProps={Type:le,Label:""};var pe=h.b.div(me()),de=function(e){var n=e.children,t=Object(b.a)(e,["children"]);return c.a.createElement(pe,t,n)};function be(){var e=Object(g.a)(["\n  width: 100%;\n  display: grid;\n  margin-top: 2px;\n  grid-template-columns: 1fr auto auto;\n"]);return be=function(){return e},e}function fe(){var e=Object(g.a)(["\n  grid-area: header;\n  box-shadow: 0 1px 0 0 #eaedf3;\n  padding: 0px 10px;\n  align-items: center;\n  justify-content: center;\n"]);return fe=function(){return e},e}function ve(){var e=Object(g.a)(["\n  position: fixed;\n  display: flex;\n  top: 3px;\n  left: 10px;\n  align-items: center;\n  justify-content: center;\n  z-index: 1;\n  cursor: pointer;\n  padding: 6px;\n"]);return ve=function(){return e},e}var ge=h.b.div(ve()),he=h.b.header(fe()),Ee=h.b.div(be()),xe=function(){var e=Object(i.useContext)(hn),n=(e.user,e.setState,Object(i.useState)([])),t=Object(m.a)(n,2),a=t[0],r=t[1];console.log({expandedMenuArray:a});return c.a.createElement(c.a.Fragment,null,c.a.createElement(ge,{className:"openIcon"},c.a.createElement(X.a,{onClick:function(){a.includes("sidenav")?r(a.filter((function(e){return"sidenav"!==e}))):r([].concat(Object(w.a)(a),["sidenav"]))}})),c.a.createElement(he,null,c.a.createElement(i.Fragment,null,c.a.createElement(Ee,null,c.a.createElement("div",null),c.a.createElement(ue,{Label:"+ NEW POST"}),c.a.createElement(ue,{Type:de})))))};function Oe(){var e=Object(g.a)(["\n  grid-area: footer;\n  display: flex;\n  background-color: #f9fafc;\n"]);return Oe=function(){return e},e}var je=h.b.div(Oe()),ye=function(e){Object(ne.a)(t,e);var n=Object(te.a)(t);function t(){return Object(Z.a)(this,t),n.apply(this,arguments)}return Object($.a)(t,[{key:"render",value:function(){return c.a.createElement(je,null)}}]),t}(i.Component),we=t(135),Ne=t(136),ke=t(137),Se=t(138),Ce=t(139),ze=t(140),Fe=t(141),De=t(142);function Te(){var e=Object(g.a)(["\n  position: absolute;\n  visibility: visible;\n  top: 8px;\n  right: 12px;\n  cursor: pointer;\n  font-size: 20px;\n  color: #ddd;\n\n  @media (min-width: 1200px) {\n    visibility: hidden;\n  }\n"]);return Te=function(){return e},e}function Le(){var e=Object(g.a)(["\n  font-size: 1.3em !important;\n  margin: 0;\n  padding: 0;\n  justify-content: left;\n\n  @media (min-width: 768px) {\n    font-size: 1.7em;\n  }\n\n  @media (min-width: 1200px) {\n    display: none;\n  }\n"]);return Le=function(){return e},e}function Ae(){var e=Object(g.a)(["\n  background-color: #252529;\n  grid-area: sidenav;\n  display: grid;\n  height: 100%;\n  overflow-y: auto;\n  z-index: 2;\n  box-shadow: 0 1px 0 0 #eaedf3;\n  width: 240px;\n  grid-template-columns: auto 1fr;\n  grid-template-rows: 110px repeat(4, 60px) 90px 60px;\n  align-items: end;\n\n  @media (min-width: 768px) {\n    grid-template-rows: 130px repeat(4, 60px) 110px 60px;\n  }\n\n  @media (min-width: 1200px) {\n    width: 60px;\n    justify-items: center;\n    align-items: end;\n    grid-template-rows: 100px repeat(4, 60px) 80px 60px;\n    grid-template-columns: 1fr;\n  }\n"]);return Ae=function(){return e},e}function Re(){var e=Object(g.a)(["\n    .activeRoute, .activeRoute svg {\n      color: purple;\n    }\n"]);return Re=function(){return e},e}var Me=Object(h.a)(Re()),Pe=h.b.aside(Ae()),Ie=h.b.div(Le()),_e=h.b.div(Te()),Be=Object(p.g)((function(){var e=Object(i.useState)([]),n=Object(m.a)(e,2),t=n[0],a=n[1];return console.log({expandedMenuArray:t}),c.a.createElement(c.a.Fragment,null,c.a.createElement(Pe,{className:"nav"+(t.includes("sidenav")?" active":"")},c.a.createElement(_e,{className:"closeIcon"},c.a.createElement(we.a,{onClick:function(){t.includes("sidenav")?a(t.filter((function(e){return"sidenav"!==e}))):a([].concat(Object(w.a)(t),["sidenav"]))}})),c.a.createElement(L.c,{exact:!0,to:"/dashboard",activeClassName:"activeRoute"},c.a.createElement(Ne.a,null),c.a.createElement(Ie,null,"Dashboard")),c.a.createElement(L.c,{exact:!0,to:"/dashboard/films",activeClassName:"activeRoute"},c.a.createElement(ke.a,null),c.a.createElement(Ie,null,"Films")),c.a.createElement(L.c,{exact:!0,to:"/dashboard/reviews",activeClassName:"activeRoute"},c.a.createElement(Se.a,null),c.a.createElement(Ie,null,"Reviews")),c.a.createElement(L.c,{exact:!0,to:"/dashboard/box-office",activeClassName:"activeRoute"},c.a.createElement(Ce.a,null),c.a.createElement(Ie,null,"Box Office")),c.a.createElement(L.c,{exact:!0,to:"/dashboard/trash",activeClassName:"activeRoute"},c.a.createElement(ze.a,null),c.a.createElement(Ie,null,"Trash")),c.a.createElement(L.c,{exact:!0,to:"/home",activeClassName:"activeRoute"},c.a.createElement(Fe.a,null),c.a.createElement(Ie,null,"Homepage")),c.a.createElement(L.c,{exact:!0,to:"/dashboard/logout",activeClassName:"activeRoute"},c.a.createElement(De.a,null),c.a.createElement(Ie,null,"Log Out"))),c.a.createElement(Me,null))})),Ue=function(e){var n=Object(i.useContext)(hn);n.user,n.setState;return c.a.createElement(c.a.Fragment,null,c.a.createElement(xe,null),c.a.createElement(Be,null),c.a.createElement(ye,null))},He=t(55),Je=t.n(He),We=(t(121),t(143)),Ye=t(144),qe=t(145);function Ge(){var e=Object(g.a)(["\n  display: flex;\n  justify-content: flex-end;\n"]);return Ge=function(){return e},e}function Ke(){var e=Object(g.a)(["\n  font-size: 1em;\n  padding: 5px 20px;\n  cursor: pointer;\n  opacity: 0.6;\n  background: white;\n  border: 0;\n  outline: 0;\n  ","\n"]);return Ke=function(){return e},e}var Ve=h.b.button(Ke(),(function(e){return e.active&&"\n    border-bottom: 2px solid purple;\n    opacity: 1;\n  "})),Qe=h.b.div(Ge()),Xe=[{title:"All",label:"All",content:function(e){return function(e){return e.Title.length>0}}},{title:"Now Showing",label:"Now",content:function(e){return function(n){return e>Date.parse(n.OpeningDate.substring(0,10))}}},{title:"Coming Soon",label:"Soon",content:function(e){return function(n){return e<Date.parse(n.OpeningDate.substring(0,10))}}}],Ze=new Array(4).fill({Id:"00000001",Title:"Placeholder",Rating:"N/A",FilmPosterUrl:"https://ticketing.eu.veezi.com/Media/Poster?siteToken=njvxyxv49n49mrr4xgetqrpfrw&code=0000000427&isHighRes=true",OpeningDate:"2021-01-02"});console.log(Ze);var $e=function(){var e=Object(i.useContext)(z),n=e.films,t=e.loading,a=new Date;console.log(n);var r=Object(i.useState)(Xe[0]),l=Object(m.a)(r,2),o=l[0],s=l[1],u=Object(i.useMemo)((function(){var e=n.filter(o.content(a));return e.length<5&&(e=e.concat(Ze)),e}),[n,o,a]);return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"title"},c.a.createElement("h1",null,"Movies: ",c.a.createElement("span",null,o.label))),c.a.createElement("div",{className:"tab-menu"},c.a.createElement(Qe,null,Xe.map((function(e){return c.a.createElement(Ve,{key:e.label,active:o===e,onClick:function(){return s(e)}},e.label)})))),c.a.createElement("div",{className:"filmcarousel"},c.a.createElement(Je.a,{mouseTrackingEnabled:!0,responsive:{0:{items:2},767:{items:4},992:{items:4},1024:{items:5}},buttonsDisabled:!0},t?c.a.createElement("div",null,"Loading ..."):u.map((function(e,n){return c.a.createElement("div",{class:"card",key:n},c.a.createElement("picture",{class:"thumbnail"},c.a.createElement("img",{src:e.FilmPosterUrl,alt:e.Title})),c.a.createElement("div",{class:"card-content"},c.a.createElement("div",{class:"title"},c.a.createElement("span",{class:"title"},e.Title)," ",c.a.createElement("span",{class:"cert"},"(",e.Rating,")")),c.a.createElement("div",{class:"controls"},c.a.createElement("span",null,new Date(e.OpeningDate).toLocaleDateString("en",{day:"2-digit",month:"short"})),c.a.createElement("span",{class:"icons"},c.a.createElement(We.a,null),c.a.createElement(Ye.a,null),c.a.createElement(ze.a,null),c.a.createElement(qe.a,null)))))})))))};function en(){var e=Object(g.a)(["\n  grid-area: updates;\n  box-shadow: 0 1px 0 0 #eaedf3;\n  background: purple;\n"]);return en=function(){return e},e}function nn(){var e=Object(g.a)(['\ngrid-area: main;\ndisplay:grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 50px auto;\n  height: 100vh;\n  margin: 0;\n  grid-template-areas: "movies movies" "overview office";\n  padding: 20px;\n']);return nn=function(){return e},e}var tn=h.b.main(nn()),an=h.b.div(en()),rn=function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement(C,null,c.a.createElement(tn,null,c.a.createElement($e,null),c.a.createElement("div",{class:"overview"}),c.a.createElement("div",{class:"office"})),c.a.createElement(an,null)))};function ln(){var e=Object(g.a)(["\ndisplay: grid;\ngrid-template-columns: 1fr;\ngrid-template-rows: 50px 1fr 50px;\ngrid-template-areas:\n'header'\n'main'\n'footer';\nheight: 100vh;\n\n@media (min-width: 992px) {\n  grid-template-columns: 1fr 25%;\n  grid-template-rows: 50px 1fr 50px;\n  grid-template-areas:\n  'header header'\n  'main updates'\n  'footer footer';\n}\n\n@media (min-width: 1200px) {\n    grid-template-columns: 60px 1fr 25%;\n    grid-template-areas:\n      \"sidenav header header\"\n      \"sidenav main updates\"\n      \"sidenav footer footer\";\n}\n"]);return ln=function(){return e},e}function cn(){var e=Object(g.a)(["\n    height: 100vh;\n"]);return cn=function(){return e},e}function on(){var e=Object(g.a)(["\n    * {\n        margin: 0;\n        padding: 0;\n        box-sizing: border-box;\n    }\n\n    html, body {\n        height: 100vh;\n    }\n"]);return on=function(){return e},e}var sn=Object(h.a)(on()),un=h.b.div(cn()),mn=h.b.div(ln()),pn=function(e){e.logout,e.session;var n=e.children;return c.a.createElement(c.a.Fragment,null,c.a.createElement(sn,null),c.a.createElement(un,null,c.a.createElement(mn,null,c.a.createElement(xe,null),c.a.createElement(Be,null),n,c.a.createElement(ye,null))))};var dn=Object(p.g)((function(e){var n=Object(i.useState)({id:"",title:"",synopsis:"",trailer:"",date:""}),t=Object(m.a)(n,2),a=t[0],r=t[1],l=Object(i.useState)(""),o=Object(m.a)(l,2),s=o[0],p=(o[1],Object(i.useState)(!1)),d=Object(m.a)(p,2),b=d[0],f=d[1],v=function(e){e.persist(),r(Object(u.a)(Object(u.a)({},a),{},{[e.target.name]:e.target.value}))};return c.a.createElement("div",null,b&&c.a.createElement("span",{className:"sr-only"},"Loading..."),c.a.createElement("div",{className:"page-wrapper bg-gra-02"},c.a.createElement("div",{className:"wrapper"},c.a.createElement("div",{className:"card card-4"},c.a.createElement("div",{className:"card-body"},c.a.createElement("h2",{className:"title"},"Add Movie"),c.a.createElement("form",{onSubmit:function(n){f(!0),n.preventDefault();var t=new FormData;for(var r in t.set("title",a.title),t.set("synopsis",a.synopsis),t.set("trailer",a.trailer),t.set("id",a.id),t.set("date",a.date),s[0])t.append("posters",s[0][r]);k.a.post("http://localhost:5000/api/movies/",t,"multipart/form-data").then((function(n){f(!1),console.log(n),e.history.push("/show/"+n.data.movie._id)})).catch((function(e){return f(!1)}))}},c.a.createElement("div",{className:"input-group full"},c.a.createElement("label",{className:"label"},"Title"),c.a.createElement("input",{className:"input--style-4",type:"text",name:"title",value:a.title,onChange:v})),c.a.createElement("div",{className:"input-group full"},c.a.createElement("label",{className:"label"},"Synopsis"),c.a.createElement("textarea",{className:"input--style-4",type:"text",name:"synopsis",rows:"12",value:a.synopsis,onChange:v})),c.a.createElement("div",{className:"input-group"},c.a.createElement("label",{className:"label"},"Trailer"),c.a.createElement("input",{className:"input--style-4",type:"text",name:"trailer",value:a.trailer,onChange:v})),c.a.createElement("div",{className:"input-group"},c.a.createElement("label",{className:"label"},"ID"),c.a.createElement("input",{className:"input--style-4",type:"text",name:"id",value:a.id,onChange:v})),c.a.createElement("div",{className:"input-group"},c.a.createElement("label",{className:"label"},"Date"),c.a.createElement("input",{className:"input--style-4",type:"date",name:"date",value:a.date,onChange:v})),c.a.createElement("div",{className:"p-t-15"},c.a.createElement("button",{className:"btn btn--radius-2 btn--blue",type:"submit"},"Submit"))))))))}));var bn=Object(p.g)((function(e){var n=Object(i.useState)({id:"",title:"",synopsis:"",trailer:""}),t=Object(m.a)(n,2),a=t[0],o=t[1],s=Object(i.useState)(""),p=Object(m.a)(s,2),d=p[0],b=(p[1],Object(i.useState)(!0)),f=Object(m.a)(b,2),v=f[0],g=f[1],h="http://localhost:5000/api/movies/"+e.match.params._id;Object(i.useEffect)((function(){g(!1),function(){var e=Object(l.a)(r.a.mark((function e(){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k()(h);case 2:n=e.sent,o(n.data),console.log(n.data),g(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[h]);var E=function(e){e.persist(),o(Object(u.a)(Object(u.a)({},a),{},{[e.target.name]:e.target.value}))};return c.a.createElement("div",null,v&&c.a.createElement("span",{className:"sr-only"},"Loading..."),c.a.createElement("div",{className:"page-wrapper bg-gra-02"},c.a.createElement("div",{className:"wrapper"},c.a.createElement("div",{className:"card card-4"},c.a.createElement("div",{className:"card-body"},c.a.createElement("h2",{className:"title"},"Add Movie"),c.a.createElement("form",{onSubmit:function(n){g(!0),n.preventDefault();var t=new FormData;for(var r in t.append("title",a.title),t.append("synopsis",a.synopsis),t.append("trailer",a.trailer),t.append("id",a.id),d[0])t.append("posters",d[0][r]);k.a.post(h,t,"multipart/form-data").then((function(n){g(!1),console.log(n),e.history.push("/show/"+e.match.params._id)})).catch((function(e){return g(!1)}))}},c.a.createElement("div",{className:"input-group full"},c.a.createElement("label",{className:"label"},"Title"),c.a.createElement("input",{className:"input--style-4",type:"text",name:"title",value:a.title,onChange:E})),c.a.createElement("div",{className:"input-group full"},c.a.createElement("label",{className:"label"},"Synopsis"),c.a.createElement("textarea",{className:"input--style-4",type:"text",name:"synopsis",rows:"12",value:a.synopsis,onChange:E})),c.a.createElement("div",{className:"input-group"},c.a.createElement("label",{className:"label"},"Trailer"),c.a.createElement("input",{className:"input--style-4",type:"text",name:"trailer",value:a.trailer,onChange:E})),c.a.createElement("div",{className:"input-group"},c.a.createElement("label",{className:"label"},"ID"),c.a.createElement("input",{className:"input--style-4",type:"text",name:"id",value:a.id,onChange:E})),c.a.createElement("div",{className:"p-t-15"},c.a.createElement("button",{className:"btn btn--radius-2 btn--blue",type:"submit"},"Submit"))))))))}));var fn=Object(p.g)((function(e){var n=Object(i.useState)({}),t=Object(m.a)(n,2),a=t[0],o=t[1],s=Object(i.useState)(!0),u=Object(m.a)(s,2),p=u[0],d=u[1],b="http://localhost:5000/api/movies/"+e.match.params._id;return Object(i.useEffect)((function(){d(!1),function(){var e=Object(l.a)(r.a.mark((function e(){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k()(b);case 2:n=e.sent,o(n.data),d(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[b]),c.a.createElement("div",null,p&&c.a.createElement("span",{className:"sr-only"},"Loading..."),c.a.createElement("div",null,c.a.createElement("h1",null,a.title),c.a.createElement("p",null,a.synopsis),c.a.createElement("p",null,c.a.createElement("a",{onClick:function(){var n;n=a._id,e.history.push({pathname:"/edit/"+n})}},"Edit"),"\xa0",c.a.createElement("a",{onClick:function(){!function(n){d(!0);var t={id:a.id,title:a.title,synopsis:a.synopsis,trailer:a.trailer,poster:a.poster,slide:a.slide};k.a.delete(b,t).then((function(n){d(!1),e.history.push("/list")})).catch((function(e){return d(!1)}))}(a._id)}},"Delete"))))}));var vn=Object(p.g)((function(e){var n=Object(i.useState)([]),t=Object(m.a)(n,2),a=t[0],o=t[1],s=Object(i.useState)(!0),u=Object(m.a)(s,2),p=u[0],d=u[1],b="http://localhost:5000/api/movies";return Object(i.useEffect)((function(){(function(){var e=Object(l.a)(r.a.mark((function e(){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k()(b);case 2:n=e.sent,o(n.data),d(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[b]),c.a.createElement("div",null,p&&c.a.createElement("span",{className:"sr-only"},"Loading..."),c.a.createElement("div",null,a.map((function(n,t){return c.a.createElement("div",{key:t,onClick:function(){var t;t=n._id,e.history.push({pathname:"/show/"+t})}},n.title)}))))})),gn=Object(d.a)(),hn=c.a.createContext({}),En=function(e){var n=Object(i.useState)({}),t=Object(m.a)(n,2),a=t[0],r=t[1],l=!!a.user;return c.a.createElement(c.a.Fragment,null,c.a.createElement(hn.Provider,{value:Object(u.a)(Object(u.a)({},a),{},{setState:r})},c.a.createElement(p.c,{history:gn},c.a.createElement(p.d,null,c.a.createElement(p.b,{exact:!0,path:"/add",component:dn}),c.a.createElement(p.b,{exact:!0,path:"/edit/:_id",component:bn}),c.a.createElement(p.b,{path:"/list",component:vn}),c.a.createElement(p.b,{exact:!0,path:"/show/:_id",component:fn}),c.a.createElement(p.b,{exact:!0,path:"/",component:A}),c.a.createElement(v,{path:"/login",component:V}),c.a.createElement(v,{path:"/signup",component:Q}),c.a.createElement(f,{exact:!0,path:"/dashboard",component:rn,layout:pn}),c.a.createElement(f,{exact:!0,path:"/dashboard/films",component:T,layout:pn}),c.a.createElement(f,{path:"/dashboard/films/add",component:y,layout:pn}),l&&c.a.createElement(Ue,null)||null))))},xn=function(e){s.a.render(c.a.createElement(L.a,null,c.a.createElement(En,null)),document.getElementById("root"))};Object(l.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=xn,e.next=3,M();case 3:return e.t1=e.sent,e.abrupt("return",(0,e.t0)(e.t1));case 5:case"end":return e.stop()}}),e)})))()},57:function(e,n,t){e.exports=t(122)},63:function(e,n,t){}},[[57,1,2]]]);
//# sourceMappingURL=main.92734e1d.chunk.js.map