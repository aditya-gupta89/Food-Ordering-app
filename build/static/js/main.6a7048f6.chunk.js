(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,function(e,t,n){e.exports={form:"Checkout_form__Z_aKf",control:"Checkout_control__2Iriq",actions:"Checkout_actions__1jrs0",submit:"Checkout_submit__22gV1",invalid:"Checkout_invalid__3epkM"}},,function(e,t,n){e.exports={"cart-items":"Cart_cart-items__2KdRI",total:"Cart_total__1hGGp",actions:"Cart_actions__2wJxQ","button--alt":"Cart_button--alt__2ihbo",button:"Cart_button__srHHt"}},,function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__3XwGe",summary:"CartItem_summary__2qaIt",price:"CartItem_price__3GN3D",amount:"CartItem_amount__3rm6l",actions:"CartItem_actions__2k6P3"}},,,,,function(e,t,n){e.exports={button:"HeaderCartButton_button__13Fbe",icon:"HeaderCartButton_icon__2gu3_",badge:"HeaderCartButton_badge__2BKrQ",bump:"HeaderCartButton_bump__23tZG"}},function(e,t,n){e.exports={backdrop:"Modal_backdrop__1dLI4",modal:"Modal_modal__24i55","slide-down":"Modal_slide-down__13CEr"}},function(e,t,n){e.exports={meal:"MealItem_meal__3w97-",description:"MealItem_description__FqFfB",price:"MealItem_price__11fCW"}},,function(e,t,n){e.exports={header:"Header_header__17OyK","main-image":"Header_main-image__3HpcO"}},function(e,t,n){e.exports={meals:"AvailableMeals_meals__38jRE","meals-appear":"AvailableMeals_meals-appear__3cFy0",MealsLoading:"AvailableMeals_MealsLoading__18ZrD"}},,function(e,t,n){e.exports={card:"Card_card__39ShV"}},function(e,t,n){e.exports={form:"MealItemForm_form__CWqxc"}},function(e,t,n){e.exports={input:"Input_input__3UhXo"}},function(e,t,n){e.exports={summary:"MealsSummary_summary__2dC4r"}},,,,,function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);var c=n(8),a=n.n(c),r=(n(27),n(2)),i=n(1),s=n.n(i),o=n(16),l=n.n(o),d=n.p+"static/media/meals.2971f633.jpg",u=n(0),j=function(){return Object(u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(u.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},m=n(12),b=n.n(m),O=n(11),x=n(4),h=n(6),p=n.n(h),f=n(5),_=n.n(f),v=n(13),C=n.n(v),y=function(e){return Object(u.jsx)("div",{className:C.a.backdrop,onClick:e.onclose})},N=function(e){return Object(u.jsx)("div",{className:C.a.modal,children:Object(u.jsx)("div",{className:C.a.content,children:e.children})})},g=document.getElementById("overlays"),I=function(e){return Object(u.jsxs)(i.Fragment,{children:[a.a.createPortal(Object(u.jsx)(y,{onclose:e.onclose}),g),a.a.createPortal(Object(u.jsx)(N,{children:e.children}),g)]})},k=n(7),A=n.n(k),M=function(e){var t="$".concat(e.price.toFixed(2));return Object(u.jsxs)("li",{className:A.a["cart-item"],children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:e.name}),Object(u.jsxs)("div",{className:A.a.summary,children:[Object(u.jsx)("span",{className:A.a.price,children:t}),Object(u.jsxs)("span",{className:A.a.amount,children:["x ",e.amount]})]})]}),Object(u.jsxs)("div",{className:A.a.actions,children:[Object(u.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(u.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},w=n(3),F=n.n(w),S=function(e){return""===e.trim()},H=function(e){var t=Object(i.useState)({name:!0,street:!0,city:!0,postalCode:!0}),n=Object(r.a)(t,2),c=n[0],a=n[1],s=Object(i.useRef)(),o=Object(i.useRef)(),l=Object(i.useRef)(),d=Object(i.useRef)(),j="".concat(F.a.control," ").concat(c.name?"":F.a.invalid),m="".concat(F.a.control," ").concat(c.street?"":F.a.invalid),b="".concat(F.a.control," ").concat(c.postalCode?"":F.a.invalid),O="".concat(F.a.control," ").concat(c.city?"":F.a.invalid);return Object(u.jsxs)("form",{className:F.a.form,onSubmit:function(t){t.preventDefault();var n=s.current.value,c=o.current.value,r=l.current.value,i=d.current.value,u=!S(n),j=!S(c),m=!S(i),b=6===r.trim().length;a({name:u,street:j,city:m,postalCode:b}),u&&j&&m&&b&&e.onConfirm({name:n,street:c,city:i,postalCode:r})},children:[Object(u.jsxs)("div",{className:j,children:[Object(u.jsx)("label",{htmlFor:"name",children:"Your Name"}),Object(u.jsx)("input",{type:"text",id:"name",ref:s}),!c.name&&Object(u.jsx)("p",{children:"Please enter a valid name!"})]}),Object(u.jsxs)("div",{className:m,children:[Object(u.jsx)("label",{htmlFor:"street",children:"Street"}),Object(u.jsx)("input",{type:"text",id:"street",ref:o}),!c.street&&Object(u.jsx)("p",{children:"Please enter a valid street!"})]}),Object(u.jsxs)("div",{className:b,children:[Object(u.jsx)("label",{htmlFor:"postal",children:"Postal Code"}),Object(u.jsx)("input",{type:"text",id:"postal",ref:l}),!c.postalCode&&Object(u.jsx)("p",{children:"Please enter a valid postal code (5 characters long)!"})]}),Object(u.jsxs)("div",{className:O,children:[Object(u.jsx)("label",{htmlFor:"city",children:"City"}),Object(u.jsx)("input",{type:"text",id:"city",ref:d}),!c.city&&Object(u.jsx)("p",{children:"Please enter a valid city!"})]}),Object(u.jsxs)("div",{className:F.a.actions,children:[Object(u.jsx)("button",{type:"button",onClick:e.onCancel,children:"Cancel"}),Object(u.jsx)("button",{className:F.a.submit,children:"Confirm"})]})]})},R=function(e){var t=Object(i.useState)(!1),n=Object(r.a)(t,2),c=n[0],a=n[1],o=Object(i.useState)(!1),l=Object(r.a)(o,2),d=l[0],j=l[1],m=Object(i.useState)(!1),b=Object(r.a)(m,2),h=b[0],f=b[1],v=Object(i.useContext)(P),C="$".concat(v.totalAmount.toFixed(2)),y=v.items.length>0,N=function(e){v.addItem(Object(x.a)(Object(x.a)({},e),{},{amount:1}))},g=function(e){v.removeItem(e)},k=function(){var e=Object(O.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(!0),e.next=3,fetch("https://food-order-ad81c-default-rtdb.firebaseio.com/orders.json",{method:"POST",body:JSON.stringify({user:t,orderedItem:v.items})});case 3:e.sent,j(!1),f(!0),v.clearCart();case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=Object(u.jsx)("ul",{className:_.a["cart-items"],children:v.items.map((function(e){return Object(u.jsx)(M,{name:e.name,amount:e.amount,price:e.price,onRemove:g.bind(null,e.id),onAdd:N.bind(null,e)},e.id)}))}),w=Object(u.jsxs)("div",{className:_.a.actions,children:[Object(u.jsx)("button",{className:_.a["button--alt"],onClick:e.onclose,children:"Close"}),y&&Object(u.jsx)("button",{className:_.a.button,onClick:function(){a(!0)},children:"Order"})]}),F=Object(u.jsxs)(s.a.Fragment,{children:[A,Object(u.jsxs)("div",{className:_.a.total,children:[Object(u.jsx)("span",{children:"Total Amount"}),Object(u.jsx)("span",{children:C})]}),c&&Object(u.jsx)(H,{onConfirm:k,onCancel:e.onclose}),!c&&w]}),S=Object(u.jsx)("p",{children:"Sending order data..."}),R=Object(u.jsxs)(s.a.Fragment,{children:[Object(u.jsx)("p",{children:"Successfully sent the order!"}),Object(u.jsx)("div",{className:_.a.actions,children:Object(u.jsx)("button",{className:_.a.button,onClick:e.onclose,children:"Close"})})]});return Object(u.jsxs)(I,{onclose:e.onclose,children:[!d&&!h&&F,d&&S,!d&&h&&R]})},P=s.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){},clearCart:function(){}}),D=function(e){var t=Object(i.useContext)(P).items.reduce((function(e,t){return e+t.amount}),0);return Object(u.jsxs)("button",{className:b.a.button,onClick:e.onClick,children:[Object(u.jsx)("span",{className:b.a.icon,children:Object(u.jsx)(j,{})}),Object(u.jsx)("span",{children:"Your Cart"}),Object(u.jsx)("span",{className:b.a.badge,children:t})]})},E=function(e){return Object(u.jsxs)(i.Fragment,{children:[Object(u.jsxs)("header",{className:l.a.header,children:[Object(u.jsx)("h1",{children:"ReactMeals"}),Object(u.jsx)(D,{onClick:e.onShowCart})]}),Object(u.jsx)("div",{className:l.a["main-image"],children:Object(u.jsx)("img",{src:d})})]})},B=n(17),L=n.n(B),q=n(19),G=n.n(q),T=function(e){return Object(u.jsx)("div",{className:G.a.card,children:e.children})},V=n(14),J=n.n(V),K=n(20),z=n.n(K),Y=n(21),Z=n.n(Y),$=s.a.forwardRef((function(e,t){return Object(u.jsxs)("div",{className:Z.a.input,children:[Object(u.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(u.jsx)("input",Object(x.a)({ref:t},e.input))]})})),Q=function(e){var t=Object(i.useState)(!0),n=Object(r.a)(t,2),c=n[0],a=n[1],s=Object(i.useRef)();return Object(u.jsxs)("form",{className:z.a.form,onSubmit:function(t){t.preventDefault();var n=s.current.value,c=+n;0===n.trim().length||c<1||c>5?a(!1):e.onAddToCart(c)},children:[Object(u.jsx)($,{label:"Amount",ref:s,input:{id:e.id,type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(u.jsx)("button",{children:"+ Add"}),!c&&Object(u.jsx)("p",{children:"Please enter a valid amount (1-5)."})]})},W=function(e){var t="$".concat(e.price.toFixed(2)),n=Object(i.useContext)(P);return Object(u.jsxs)("li",{className:J.a.meal,children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:e.name}),Object(u.jsx)("div",{className:J.a.description,children:e.description}),Object(u.jsx)("div",{className:J.a.price,children:t})]}),Object(u.jsx)("div",{children:Object(u.jsx)(Q,{id:e.id,onAddToCart:function(t){n.addItem({id:e.id,name:e.name,amount:t,price:e.price})}})})]})},X=function(){var e=Object(i.useState)([]),t=Object(r.a)(e,2),n=t[0],c=t[1],a=Object(i.useState)(!0),s=Object(r.a)(a,2),o=s[0],l=s[1];if(Object(i.useEffect)((function(){var e=function(){var e=Object(O.a)(p.a.mark((function e(){var t,n,a,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://food-order-ad81c-default-rtdb.firebaseio.com/meals.json");case 2:return t=e.sent,e.next=5,t.json();case 5:for(r in n=e.sent,console.log(n),a=[],n)a.push({id:r,name:n[r].name,description:n[r].description,price:n[r].price});c(a),l(!1);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),o)return Object(u.jsx)("section",{className:L.a.MealsLoading,children:Object(u.jsx)("p",{children:"Loading..."})});var d=n.map((function(e){return Object(u.jsx)(W,{id:e.id,name:e.name,price:e.price,description:e.description},e.id)}));return Object(u.jsx)("section",{className:L.a.meals,children:Object(u.jsx)(T,{children:Object(u.jsx)("ul",{children:d})})})},U=n(22),ee=n.n(U),te=function(){return Object(u.jsxs)("section",{className:ee.a.summary,children:[Object(u.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(u.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(u.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},ne=function(){return Object(u.jsxs)(i.Fragment,{children:[Object(u.jsx)(te,{}),Object(u.jsx)(X,{})]})},ce=n(18),ae={items:[],totalAmount:0},re=function(e,t){if("ADD"===t.type){var n=e.totalAmount+t.item.price*t.item.amount;console.log(e);var c,a=e.items.findIndex((function(e){return e.id===t.item.id})),r=e.items[a];if(r){var i=Object(x.a)(Object(x.a)({},r),{},{amount:r.amount+t.item.amount});(c=Object(ce.a)(e.items))[a]=i}else c=e.items.concat(t.item);return{items:c,totalAmount:n}}if("REMOVE"===t.type){var s,o=e.items.findIndex((function(e){return e.id===t.id})),l=e.items[o],d=e.totalAmount-l.price;if(1===l.amount)s=e.items.filter((function(e){return e.id!==t.id}));else{var u=Object(x.a)(Object(x.a)({},l),{},{amount:l.amount-1});(s=Object(ce.a)(e.items))[o]=u}return{items:s,totalAmount:d}}return t.type,ae},ie=function(e){var t=Object(i.useReducer)(re,ae),n=Object(r.a)(t,2),c=n[0],a=n[1],s={items:c.items,totalAmount:c.totalAmount,addItem:function(e){a({type:"ADD",item:e})},removeItem:function(e){a({type:"REMOVE",id:e})},clearCart:function(){a({type:"CLEAN"})}};return Object(u.jsx)(P.Provider,{value:s,children:e.children})};var se=function(){var e=Object(i.useState)(!1),t=Object(r.a)(e,2),n=t[0],c=t[1];return Object(u.jsxs)(ie,{children:[n&&Object(u.jsx)(R,{onclose:function(){c(!1)}}),Object(u.jsx)(E,{onShowCart:function(){c(!0)}}),Object(u.jsx)("main",{children:Object(u.jsx)(ne,{})})]})};a.a.render(Object(u.jsx)(se,{}),document.getElementById("root"))}],[[30,1,2]]]);
//# sourceMappingURL=main.6a7048f6.chunk.js.map