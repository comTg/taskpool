webpackJsonp([1],{Jmt5:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("7+uW"),o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var s=a("VU/8")({name:"App"},o,!1,function(t){a("s347")},null,null).exports,n=a("/ocq"),r=a("bOdI"),l=a.n(r),d=a("mvHQ"),c=a.n(d),g=(a("Qbok"),{name:"history",data:function(){return{history:[],save_days:5}},mounted:function(){this.parseHistory()},methods:{parseOneDay:function(t,e){var a=window.localStorage.getItem(t+"-todo"),i=window.localStorage.getItem(t+"-doing"),o=window.localStorage.getItem(t+"-ok");if(a||i||o){var s={};s.key=t.replace(".","月"),s.id=e,a&&(s.todo=JSON.parse(a)),i&&(s.doing=JSON.parse(i)),o&&(s.ok=JSON.parse(o)),this.history.push(s)}},parseHistory:function(){for(var t=[this.dayjs().format("MM.DD")],e=1;e<this.save_days;e++){var a=this.dayjs().subtract(e,"day").format("MM.DD");this.parseOneDay(a,"t"+e),t.push(a)}this.clearMoreDay(t)},clearMoreDay:function(t){for(var e=void 0,a=void 0,i=0;i<window.localStorage.length;i++)a=(e=window.localStorage.key(i)).split("-")[0],t.indexOf(a)<0&&window.localStorage.removeItem(e)},fakeData:function(){var t=["吃饭","睡觉","看电视","打酱油"],e=this.dayjs().subtract(1,"day").format("MM.DD"),a=this.dayjs().subtract(2,"day").format("MM.DD"),i=this.dayjs().subtract(3,"day").format("MM.DD"),o=this.dayjs().subtract(4,"day").format("MM.DD");window.localStorage.setItem(e+"-todo",t),window.localStorage.setItem(e+"-doing",t),window.localStorage.setItem(e+"-ok",t),window.localStorage.setItem(a+"-todo",t),window.localStorage.setItem(a+"-doing",t),window.localStorage.setItem(a+"-ok",t),window.localStorage.setItem(i+"-todo",t),window.localStorage.setItem(i+"-doing",t),window.localStorage.setItem(i+"-ok",t),window.localStorage.setItem(o+"-todo",t),window.localStorage.setItem(o+"-ok",t)}}}),m={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"accordion",attrs:{id:"accordionExample"}},t._l(t.history,function(e){return a("div",{staticClass:"card"},[a("div",{staticClass:"card-header",attrs:{id:"headingOne"}},[a("h5",{staticClass:"mb-0"},[a("button",{staticClass:"btn btn-link",attrs:{type:"button","data-toggle":"collapse","data-target":"#"+e.id,"aria-expanded":"false","aria-controls":e.id}},[t._v("\n          "+t._s(e.key)+"日的任务池\n        ")])])]),t._v(" "),a("div",{staticClass:"collapse",attrs:{id:e.id,"aria-labelledby":"headingOne","data-parent":"#accordionExample"}},[a("div",{staticClass:"card-body row"},[a("fieldset",{staticClass:"t-card col-sm-4"},[a("legend",{staticClass:"t-legend t-text-gray"},[t._v("待办")]),t._v(" "),a("ul",{staticClass:"list-group "},t._l(e.todo,function(e){return a("li",{staticClass:"list-group-item"},[t._v(t._s(e))])}))]),t._v(" "),a("fieldset",{staticClass:"t-card col-sm-4"},[a("legend",{staticClass:"t-legend t-text-gray"},[t._v("正在做")]),t._v(" "),a("ul",{staticClass:"list-group "},t._l(e.doing,function(e){return a("li",{staticClass:"list-group-item"},[t._v(t._s(e))])}))]),t._v(" "),a("fieldset",{staticClass:"t-card col-sm-4"},[a("legend",{staticClass:"t-legend t-text-gray"},[t._v("已完成")]),t._v(" "),a("ul",{staticClass:"list-group "},t._l(e.ok,function(e){return a("li",{staticClass:"list-group-item"},[t._v(t._s(e))])}))])])])])}))},staticRenderFns:[]};var u,v=a("VU/8")(g,m,!1,function(t){a("iQzQ")},"data-v-24fb3c35",null).exports,p=(u={name:"Index",components:{History:v},data:function(){return{todoitem:[],doingitem:[],okitem:[],dragnow:[],dragenternow:"",fieldActive:!1,fieldActiveId:"",newItem:""}}},l()(u,"components",{History:v}),l()(u,"mounted",function(){this.parseLastDay(),this.parseToday()}),l()(u,"methods",{removeItem:function(t,e){for(var a=0;a<t.length;a++)if(t[a].trim()==e)return void t.splice(a,1)},parseLastDay:function(){var t=this.dayjs().subtract(1,"day").format("MM.DD");if(console.log("day_last",t),!window.localStorage.getItem(t+"-parse")){var e=window.localStorage.getItem(t+"-todo"),a=window.localStorage.getItem(t+"-doing"),i=[];e&&(e=JSON.parse(e),i=i.concat(e)),a&&(a=JSON.parse(a),i=i.concat(a)),this.todoitem=this.todoitem.concat(i),window.localStorage.setItem(t+"-parse","true")}},parseToday:function(){var t=this.dayjs().format("MM.DD"),e=t+"-todo",a=t+"-doing",i=t+"-ok",o=window.localStorage.getItem(e),s=window.localStorage.getItem(a),n=window.localStorage.getItem(i);o&&(this.todoitem=this.todoitem.concat(JSON.parse(o))),s&&(this.doingitem=this.doingitem.concat(JSON.parse(s))),n&&(this.okitem=this.okitem.concat(JSON.parse(n)))},dragStart:function(t){t.dataTransfer.setData("item",t.target.innerText),t.target.style.opacity=1,t.target.style.boxShadow="0 2px 2px 0 rgba(47, 222, 50, .14), 0 3px 1px -2px rgba(47, 222, 50, .2), 0 1px 5px 0 rgba(47, 222, 50, .12)",this.dragnow=t.target.parentNode.parentNode.id,console.log("drag now is",this.dragnow),this.fieldActive=!0},dragEnter:function(t){t.preventDefault(),t.target.id&&(this.dragenternow=t.target.id,this.fieldActiveId=t.target.id),console.log("enter now",this.dragenternow)},dragOver:function(t){t.preventDefault()},dragLeave:function(t){t.preventDefault()},dragDrop:function(t){t.stopPropagation(),t.preventDefault();var e=t.dataTransfer.getData("item");e&&""!=this.dragenternow&&""!=this.dragnow&&(console.log(this.dragnow,"remove",e),this.removeItem(this[this.dragnow],e.trim()),this[this.dragenternow].push(e))},dragEnd:function(t){t.target.style.boxShadow="",this.dragenternow="",this.dragnow="",this.fieldActive=!1,this.fieldActiveId=""},addNewItem:function(){this.newItem&&(this.todoitem.push(this.newItem),this.newItem="")},addLocal:function(t,e){var a=this.dayjs().format("MM.DD")+"-"+t;window.localStorage.setItem(a,c()(e))},removeSelectItem:function(t,e){confirm("确认删除: "+this[t][e])&&this[t].splice(e,1)},upItem:function(t,e){if(0==e)return!0;if(e>=this[t].length)return!0;console.log(e);var a=e-1,i=this[t][a];this[t].splice(a,1,this[t][e]),this[t].splice(e,1,i)},exportTask:function(){for(var t="",e=void 0,a=void 0,i=0;i<window.localStorage.length;i++)e=window.localStorage.key(i),a=window.localStorage.getItem(e),t+=e+"//"+c()(a)+"\n";var o=new Blob([t]),s=document.createElement("a");s.download="exportTask.txt",s.style.display="none",s.href=URL.createObjectURL(o),document.body.appendChild(s),s.click(),document.body.removeChild(s)},importTask:function(){var t=document.getElementById("upload-file"),e=t.value;if(e){console.log(e);var a=t.files[0],i=new FileReader;i.onload=function(t){for(var e=t.target.result.split("\n"),a=0;a<e.length;a++){var i=e[a].split("//");if(console.log(i),2==i.length){var o=window.localStorage.getItem(i[0]);o&&!i[0].endsWith("parse")?(o=(o=JSON.parse(o)).concat(i[1].split(",")),window.localStorage.setItem(i[0],c()(o))):window.localStorage.setItem(i[0],c()(i[1].split(",")))}}window.location.reload()},i.readAsText(a)}}}),l()(u,"watch",{todoitem:function(){this.addLocal("todo",this.todoitem)},doingitem:function(){this.addLocal("doing",this.doingitem)},okitem:function(){this.addLocal("ok",this.okitem)}}),u),f={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid"},[a("nav",{staticClass:"navbar navbar-expand-lg navbar-light"},[a("a",{staticClass:"navbar-brand",attrs:{href:"/"}},[t._v("TaskPool")]),t._v(" "),a("ul",{staticClass:"navbar-nav "},[a("li",{staticClass:"nav-item"},[a("span",{staticClass:"nav-link",on:{click:t.exportTask}},[t._v("导出")])]),t._v(" "),a("li",{staticClass:"nav-item"},[a("span",{staticClass:"nav-link import-task"},[t._v("导入"),a("input",{staticClass:"import-input",attrs:{type:"file",id:"upload-file"},on:{change:t.importTask}})])])])]),t._v(" "),a("div",{staticClass:"row input-area"},[a("div",{staticClass:"col-sm-12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newItem,expression:"newItem"}],staticClass:"form-control add-input",attrs:{type:"text"},domProps:{value:t.newItem},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.addNewItem(e):null},input:function(e){e.target.composing||(t.newItem=e.target.value)}}}),t._v(" "),a("button",{staticClass:"btn btn-primary",on:{click:t.addNewItem}},[t._v("add")])])]),t._v(" "),a("div",{staticClass:"row"},[a("fieldset",{staticClass:"t-card col-sm-4",class:{field:t.fieldActive,"field-active":"todoitem"==t.fieldActiveId},attrs:{id:"todoitem"},on:{drop:t.dragDrop,dragover:t.dragOver,dragenter:t.dragEnter,dragleave:t.dragLeave}},[a("legend",{staticClass:"t-legend text-danger"},[t._v("待办")]),t._v(" "),a("ul",{staticClass:"list-group"},[a("i",{staticClass:"right-arrow"}),t._v(" "),t._l(t.todoitem,function(e,i){return a("li",{staticClass:"list-group-item",class:{"item-loss":t.fieldActive},attrs:{draggable:"true"},on:{dragstart:t.dragStart,dragend:t.dragEnd}},[t._v(t._s(e)+"\n          "),a("i",{staticClass:"up-item",on:{click:function(e){t.upItem("todoitem",i)}}}),t._v(" "),a("i",{staticClass:"kill-item",on:{click:function(e){t.removeSelectItem("todoitem",i)}}})])})],2)]),t._v(" "),a("fieldset",{staticClass:"t-card col-sm-4",class:{field:t.fieldActive,"field-active":"doingitem"==t.fieldActiveId},attrs:{id:"doingitem"},on:{drop:t.dragDrop,dragover:t.dragOver,dragenter:t.dragEnter,dragleave:t.dragLeave}},[a("legend",{staticClass:"t-legend text-primary"},[t._v("正在做")]),t._v(" "),a("ul",{staticClass:"list-group"},[a("i",{staticClass:"right-arrow"}),t._v(" "),t._l(t.doingitem,function(e,i){return a("li",{staticClass:"list-group-item",class:{"item-loss":t.fieldActive},attrs:{draggable:"true"},on:{dragstart:t.dragStart,dragend:t.dragEnd}},[t._v(t._s(e)+"\n          "),a("i",{staticClass:"up-item",on:{click:function(e){t.upItem("doingitem",i)}}}),t._v(" "),a("i",{staticClass:"kill-item",on:{click:function(e){t.removeSelectItem("doingitem",i)}}})])})],2)]),t._v(" "),a("fieldset",{staticClass:" t-card col-sm-4",class:{field:t.fieldActive,"field-active":"okitem"==t.fieldActiveId},attrs:{id:"okitem"},on:{drop:t.dragDrop,dragover:t.dragOver,dragenter:t.dragEnter,dragleave:t.dragLeave}},[a("legend",{staticClass:"t-legend text-success"},[t._v("已完成")]),t._v(" "),a("ul",{staticClass:"list-group"},t._l(t.okitem,function(e,i){return a("li",{staticClass:"list-group-item",class:{"item-loss":t.fieldActive},attrs:{draggable:"true"},on:{dragstart:t.dragStart,dragend:t.dragEnd}},[t._v(t._s(e)+"\n          "),a("i",{staticClass:"up-item",on:{click:function(e){t.upItem("okitem",i)}}}),t._v(" "),a("i",{staticClass:"kill-item",on:{click:function(e){t.removeSelectItem("okitem",i)}}})])}))])]),t._v(" "),a("history")],1)},staticRenderFns:[]};var w=a("VU/8")(p,f,!1,function(t){a("dHhc")},"data-v-04d70ca4",null).exports;i.a.use(n.a);var h=new n.a({mode:"history",routes:[{path:"/",name:"Index",component:w}]}),y=(a("7t+N"),a("oqQY")),_=a.n(y);a("K3J8"),a("Jmt5");i.a.config.productionTip=!1,i.a.prototype.dayjs=_.a,i.a.use(_.a),new i.a({el:"#app",router:h,components:{App:s},template:"<App/>"})},Qbok:function(t,e){},dHhc:function(t,e){},iQzQ:function(t,e){},s347:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.b8156ac0086890e554eb.js.map