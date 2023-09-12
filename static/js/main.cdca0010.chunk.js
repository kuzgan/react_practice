(this["webpackJsonpreact_product-categories-practice"]=this["webpackJsonpreact_product-categories-practice"]||[]).push([[0],{12:function(e,a,c){},14:function(e,a,c){"use strict";c.r(a);c(1);var t=c(4),s=c.n(t),r=(c(10),c(11),c(3)),d=(c(12),c(5)),i=c.n(d),n=[{id:1,name:"Roma",sex:"m"},{id:2,name:"Anna",sex:"f"},{id:3,name:"Max",sex:"m"},{id:4,name:"John",sex:"m"}],l=[{id:1,title:"Grocery",icon:"\ud83c\udf5e",ownerId:2},{id:2,title:"Drinks",icon:"\ud83c\udf7a",ownerId:1},{id:3,title:"Fruits",icon:"\ud83c\udf4f",ownerId:2},{id:4,title:"Electronics",icon:"\ud83d\udcbb",ownerId:1},{id:5,title:"Clothes",icon:"\ud83d\udc5a",ownerId:3}],j=c(0),o=[{id:1,name:"Milk",categoryId:2},{id:2,name:"Bread",categoryId:1},{id:3,name:"Eggs",categoryId:1},{id:4,name:"Jacket",categoryId:5},{id:5,name:"Sugar",categoryId:1},{id:6,name:"Banana",categoryId:3},{id:7,name:"Beer",categoryId:2},{id:8,name:"Socks",categoryId:5},{id:9,name:"Apples",categoryId:3}].map((function(e){var a=l.find((function(a){return e.categoryId===a.id})),c=n.find((function(e){return a.ownerId===e.id}));return Object(r.a)(Object(r.a)({},e),{},{category:a,user:c})})),h=function(){return Object(j.jsx)("div",{className:"section",children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h1",{className:"title",children:"Product Categories"}),Object(j.jsx)("div",{className:"block",children:Object(j.jsxs)("nav",{className:"panel",children:[Object(j.jsx)("p",{className:"panel-heading",children:"Filters"}),Object(j.jsxs)("p",{className:"panel-tabs has-text-weight-bold",children:[Object(j.jsx)("a",{"data-cy":"FilterAllUsers",href:"#/",children:"All"}),Object(j.jsx)("a",{"data-cy":"FilterUser",href:"#/",children:"User 1"}),Object(j.jsx)("a",{"data-cy":"FilterUser",href:"#/",className:"is-active",children:"User 2"}),Object(j.jsx)("a",{"data-cy":"FilterUser",href:"#/",children:"User 3"})]}),Object(j.jsx)("div",{className:"panel-block",children:Object(j.jsxs)("p",{className:"control has-icons-left has-icons-right",children:[Object(j.jsx)("input",{"data-cy":"SearchField",type:"text",className:"input",placeholder:"Search",value:"qwe"}),Object(j.jsx)("span",{className:"icon is-left",children:Object(j.jsx)("i",{className:"fas fa-search","aria-hidden":"true"})}),Object(j.jsx)("span",{className:"icon is-right",children:Object(j.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete"})})]})}),Object(j.jsxs)("div",{className:"panel-block is-flex-wrap-wrap",children:[Object(j.jsx)("a",{href:"#/","data-cy":"AllCategories",className:"button is-success mr-6 is-outlined",children:"All"}),Object(j.jsx)("a",{"data-cy":"Category",className:"button mr-2 my-1 is-info",href:"#/",children:"Category 1"}),Object(j.jsx)("a",{"data-cy":"Category",className:"button mr-2 my-1",href:"#/",children:"Category 2"}),Object(j.jsx)("a",{"data-cy":"Category",className:"button mr-2 my-1 is-info",href:"#/",children:"Category 3"}),Object(j.jsx)("a",{"data-cy":"Category",className:"button mr-2 my-1",href:"#/",children:"Category 4"})]}),Object(j.jsx)("div",{className:"panel-block",children:Object(j.jsx)("a",{"data-cy":"ResetAllButton",href:"#/",className:"button is-link is-outlined is-fullwidth",children:"Reset all filters"})})]})}),Object(j.jsxs)("div",{className:"box table-container",children:[Object(j.jsx)("p",{"data-cy":"NoMatchingMessage",children:"No products matching selected criteria"}),Object(j.jsxs)("table",{"data-cy":"ProductTable",className:"table is-striped is-narrow is-fullwidth",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:Object(j.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["ID",Object(j.jsx)("a",{href:"#/",children:Object(j.jsx)("span",{className:"icon",children:Object(j.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort"})})})]})}),Object(j.jsx)("th",{children:Object(j.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Product",Object(j.jsx)("a",{href:"#/",children:Object(j.jsx)("span",{className:"icon",children:Object(j.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort-down"})})})]})}),Object(j.jsx)("th",{children:Object(j.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Category",Object(j.jsx)("a",{href:"#/",children:Object(j.jsx)("span",{className:"icon",children:Object(j.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort-up"})})})]})}),Object(j.jsx)("th",{children:Object(j.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["User",Object(j.jsx)("a",{href:"#/",children:Object(j.jsx)("span",{className:"icon",children:Object(j.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort"})})})]})})]})}),Object(j.jsxs)("tbody",{children:[Object(j.jsxs)("tr",{"data-cy":"Product",children:[Object(j.jsx)("td",{className:"has-text-weight-bold","data-cy":"ProductId",children:"1"}),Object(j.jsx)("td",{"data-cy":"ProductName",children:"Milk"}),Object(j.jsx)("td",{"data-cy":"ProductCategory",children:"\ud83c\udf7a - Drinks"}),Object(j.jsx)("td",{"data-cy":"ProductUser",className:"has-text-link",children:"Max"})]}),Object(j.jsxs)("tr",{"data-cy":"Product",children:[Object(j.jsx)("td",{className:"has-text-weight-bold","data-cy":"ProductId",children:"2"}),Object(j.jsx)("td",{"data-cy":"ProductName",children:"Bread"}),Object(j.jsx)("td",{"data-cy":"ProductCategory",children:"\ud83c\udf5e - Grocery"}),Object(j.jsx)("td",{"data-cy":"ProductUser",className:"has-text-danger",children:"Anna"})]}),Object(j.jsxs)("tr",{"data-cy":"Product",children:[Object(j.jsx)("td",{className:"has-text-weight-bold","data-cy":"ProductId",children:"3"}),Object(j.jsx)("td",{"data-cy":"ProductName",children:"iPhone"}),Object(j.jsx)("td",{"data-cy":"ProductCategory",children:"\ud83d\udcbb - Electronics"}),Object(j.jsx)("td",{"data-cy":"ProductUser",className:"has-text-link",children:"Roma"})]})]})]}),Object(j.jsxs)("table",{"data-cy":"ProductTable",className:"table is-striped is-narrow is-fullwidth",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:Object(j.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["ID",Object(j.jsx)("a",{href:"#/",children:Object(j.jsx)("span",{className:"icon",children:Object(j.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort"})})})]})}),Object(j.jsx)("th",{children:Object(j.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Product",Object(j.jsx)("a",{href:"#/",children:Object(j.jsx)("span",{className:"icon",children:Object(j.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort-down"})})})]})}),Object(j.jsx)("th",{children:Object(j.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Category",Object(j.jsx)("a",{href:"#/",children:Object(j.jsx)("span",{className:"icon",children:Object(j.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort-up"})})})]})}),Object(j.jsx)("th",{children:Object(j.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["User",Object(j.jsx)("a",{href:"#/",children:Object(j.jsx)("span",{className:"icon",children:Object(j.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort"})})})]})})]})}),Object(j.jsx)("tbody",{children:o.map((function(e){return Object(j.jsxs)("tr",{"data-cy":"Product",children:[Object(j.jsx)("td",{className:"has-text-weight-bold","data-cy":"ProductId",children:e.id}),Object(j.jsx)("td",{"data-cy":"ProductName",children:e.name}),Object(j.jsx)("td",{"data-cy":"ProductCategory",children:"".concat(e.category.icon," - ").concat(e.category.title)}),Object(j.jsx)("td",{"data-cy":"ProductUser",className:i()({"has-text-link":"m"===e.user.sex,"has-text-danger":"f"===e.user.sex}),children:e.user.name})]})}))})]})]})]})})};s.a.render(Object(j.jsx)(h,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.cdca0010.chunk.js.map