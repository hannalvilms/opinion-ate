(this["webpackJsonpopinion-ate"]=this["webpackJsonpopinion-ate"]||[]).push([[0],{80:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),c=n(12),s=n.n(c),o=n(27),i=n(46),u=n(45),d=n.n(u),j=n(111),l=n(112),h=n(113),b=n(114),O=n(28),p=n(115),f=n(13),x=n(42),R=n(43),v="START_LOADING",g="STORE_RESTAURANTS",y="RECORD_LOADING_ERROR",E=function(){return{type:v}},m=function(t){return{type:g,records:t}},w=function(){return{type:y}},A=Object(f.combineReducers)({records:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case g:return e.records;default:return t}},loading:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case v:return!0;case g:case y:return!1;default:return t}},loadError:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case v:return!1;case y:return!0;default:return t}}}),L=Object(f.combineReducers)({restaurants:A}),S=n(44),T=n.n(S).a.create({baseURL:"https://outside-in-dev-api.herokuapp.com/uUyXHOZw0n1pLp74uyZwBaKfnLoFsNxL"}),N={loadRestaurants:function(){return T.get("/restaurants").then((function(t){return t.data}))}},_=Object(f.createStore)(L,Object(f.compose)(Object(f.applyMiddleware)(x.a.withExtraArgument(N)),Object(R.devToolsEnhancer)())),k=n(109),D=n(110),I=n(107),U=n(105),B=n(118),G=n(108),J=n(116),M=n(5),Z={loadRestaurants:function(){return function(t,e,n){t(E()),n.loadRestaurants().then((function(e){t(m(e))})).catch((function(){t(w())}))}}},C=Object(o.b)((function(t){return{restaurants:t.restaurants.records,loading:t.restaurants.loading,loadError:t.restaurants.loadError}}),Z)((function(t){var e=t.loadRestaurants,n=t.restaurants,a=t.loading,c=t.loadError;return Object(r.useEffect)((function(){e()}),[e]),Object(M.jsxs)(U.a,{children:[a&&Object(M.jsx)(I.a,{"data-testid":"loading-indicator"}),c&&Object(M.jsx)(J.a,{severity:"error",children:"Restaurants could not be loaded."}),n.map((function(t){return Object(M.jsx)(B.a,{children:Object(M.jsx)(G.a,{children:t.name})},t.id)}))]})})),F=function(){return Object(M.jsx)(k.a,{children:Object(M.jsxs)(D.a,{children:[Object(M.jsx)(O.a,{variant:"h5",children:"Restaurants"}),Object(M.jsx)(C,{})]})})},H=Object(i.a)({palette:{primary:d.a}}),K=function(){return Object(M.jsx)(o.a,{store:_,children:Object(M.jsxs)(j.a,{theme:H,children:[Object(M.jsx)(l.a,{}),Object(M.jsx)(h.a,{position:"static",children:Object(M.jsx)(b.a,{children:Object(M.jsx)(O.a,{variant:"h6",children:"Opinion Ate"})})}),Object(M.jsx)(p.a,{children:Object(M.jsx)(F,{})})]})})};s.a.render(Object(M.jsx)(a.a.StrictMode,{children:Object(M.jsx)(K,{})}),document.getElementById("root"))}},[[80,1,2]]]);
//# sourceMappingURL=main.e5839f55.chunk.js.map