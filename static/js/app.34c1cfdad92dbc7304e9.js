webpackJsonp([1],{"G0/5":function(t,e){},Jmt5:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("7+uW"),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var o=i("VU/8")({name:"App"},a,!1,function(t){i("s347")},null,null).exports,n=i("/ocq"),r=i("bOdI"),d=i.n(r),l=i("mvHQ"),h=i.n(l),c=(i("Qbok"),{name:"history",data:function(){return{history:[],save_days:5}},mounted:function(){this.parseHistory()},methods:{parseOneDay:function(t,e){var i=window.localStorage.getItem(t+"-todo"),s=window.localStorage.getItem(t+"-doing"),a=window.localStorage.getItem(t+"-ok");if(i||s||a){var o={};o.key=t.replace(".","月"),o.id=e,i&&(o.todo=JSON.parse(i)),s&&(o.doing=JSON.parse(s)),a&&(o.ok=JSON.parse(a)),this.history.push(o)}},parseHistory:function(){for(var t=[this.dayjs().format("MM.DD")],e=1;e<this.save_days;e++){var i=this.dayjs().subtract(e,"day").format("MM.DD");this.parseOneDay(i,"t"+e),t.push(i)}this.clearMoreDay(t)},clearMoreDay:function(t){for(var e=void 0,i=void 0,s=0;s<window.localStorage.length;s++)i=(e=window.localStorage.key(s)).split("-")[0],t.indexOf(i)<0&&window.localStorage.removeItem(e)},fakeData:function(){var t=["吃饭","睡觉","看电视","打酱油"],e=this.dayjs().subtract(1,"day").format("MM.DD"),i=this.dayjs().subtract(2,"day").format("MM.DD"),s=this.dayjs().subtract(3,"day").format("MM.DD"),a=this.dayjs().subtract(4,"day").format("MM.DD");window.localStorage.setItem(e+"-todo",t),window.localStorage.setItem(e+"-doing",t),window.localStorage.setItem(e+"-ok",t),window.localStorage.setItem(i+"-todo",t),window.localStorage.setItem(i+"-doing",t),window.localStorage.setItem(i+"-ok",t),window.localStorage.setItem(s+"-todo",t),window.localStorage.setItem(s+"-doing",t),window.localStorage.setItem(s+"-ok",t),window.localStorage.setItem(a+"-todo",t),window.localStorage.setItem(a+"-ok",t)}}}),u={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"accordion",attrs:{id:"accordionExample"}},t._l(t.history,function(e){return i("div",{staticClass:"card"},[i("div",{staticClass:"card-header",attrs:{id:"headingOne"}},[i("button",{staticClass:"btn",staticStyle:{"background-color":"transparent"},attrs:{type:"button","data-toggle":"collapse","data-target":"#"+e.id,"aria-expanded":"false","aria-controls":e.id}},[i("h5",{staticClass:"mb-0"},[t._v("\n          "+t._s(e.key)+"日の任务池\n          ")])])]),t._v(" "),i("div",{staticClass:"collapse",attrs:{id:e.id,"aria-labelledby":"headingOne","data-parent":"#accordionExample"}},[i("div",{staticClass:"card-body row"},[i("fieldset",{staticClass:"t-card col-sm-4 "},[i("legend",{staticClass:"t-legend t-text-gray"},[t._v("待办")]),t._v(" "),i("ul",{staticClass:"list-group"},t._l(e.todo,function(e){return i("li",{staticClass:"list-group-item"},[t._v(t._s(e))])}))]),t._v(" "),i("fieldset",{staticClass:"t-card col-sm-4"},[i("legend",{staticClass:"t-legend t-text-gray"},[t._v("正在做")]),t._v(" "),i("ul",{staticClass:"list-group "},t._l(e.doing,function(e){return i("li",{staticClass:"list-group-item"},[t._v(t._s(e))])}))]),t._v(" "),i("fieldset",{staticClass:"t-card col-sm-4"},[i("legend",{staticClass:"t-legend t-text-gray"},[t._v("已完成")]),t._v(" "),i("ul",{staticClass:"list-group "},t._l(e.ok,function(e){return i("li",{staticClass:"list-group-item"},[t._v(t._s(e))])}))])])])])}))},staticRenderFns:[]};var g=i("VU/8")(c,u,!1,function(t){i("Pne6")},"data-v-1694022b",null).exports,v=i("Zrlr"),m=i.n(v),f=i("wxAW"),p=i.n(f);Array.prototype.remove=function(t){for(var e=-1,i=0;i<this.length;i++)this[i]==t&&(e=i);e>-1&&this.splice(e,1)};var w,y=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.body;m()(this,t),this.el=e,this.count=1,this.size=10,this.snake=new Array,this.snakeColor="#666666",this.foodColor="red",this.TIME=20,this.count=1,this.levelCount=0,this.judgeDirArray=[1,2,3,4],this.canvas=this.newCanvas(),this.context=this.canvas.getContext("2d"),this.head=this.randomPoint(),this.setFood(),this.dir=Math.floor(4*Math.random()+1),this.lastDir=this.dir,this.run=!0,this.bindEvent(),this.drawSnake(),this.drawCanvas()}return p()(t,[{key:"bindEvent",value:function(){var t=this;document.addEventListener("dblclick",function(){t.run=!t.run,t.run&&t.drawCanvas()}),document.addEventListener("visibilitychange",function(){"hidden"==document.visibilityState?t.run=!t.run:(t.run=!0,t.drawCanvas())}),window.onresize=function(){console.log("size change"),t.canvas.width=t.el.clientWidth,t.canvas.height=t.el.clientHeight}}},{key:"requestFrame",value:function(t){var e=this;this.tid=requestAnimationFrame(function(){return t.call(e)})}},{key:"drawCanvas",value:function(){setTimeout(this.moveSnake.bind(this),this.TIME)}},{key:"newCanvas",value:function(){"static"===getComputedStyle(this.el).position&&(this.el.style.position="relative"),console.log("create new canvas.");document.body.style.cssText="width:100%;height:100%",document.documentElement.style.cssText="width:100%;height:100%";var t=document.createElement("canvas");return t.style.cssText="display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;opacity:0.5",t.width=this.el.clientWidth,t.height=this.el.clientHeight,this.el.appendChild(t),t}},{key:"randomPoint",value:function(){return{x:this.size*Math.floor(Math.random()*this.canvas.width/this.size),y:this.size*Math.floor(Math.random()*this.canvas.height/this.size)}}},{key:"moveSnake",value:function(){var t=this.canvas.width,e=this.canvas.height;switch(this.head.x<this.food.x?2!=this.dir?this.dir=4:this.head.y+this.size>=e?this.dir=3:this.dir=1:this.head.x>this.food.x?4!=this.dir?this.dir=2:this.head.y+this.size>=e?this.dir=3:this.dir=1:this.head.x==this.food.x&&(this.head.y<this.food.y?3!=this.dir?this.dir=1:this.head.x+this.size>=t?this.dir=2:this.dir=4:this.head.y>this.food.y&&(1!=this.dir?this.dir=3:this.head.x+this.size>=t?this.dir=2:this.dir=4)),this.dir){case 1:this.head.y=this.head.y+this.size;break;case 2:this.head.x=this.head.x-this.size;break;case 3:this.head.y=this.head.y-this.size;break;case 4:this.head.x=this.head.x+this.size}this.moveOne(this.head.x,this.head.y),this.setLevel(),this.snake.length<t/this.size*e/this.size&&this.run&&this.drawCanvas()}},{key:"judgeDir",value:function(){var t=!1,e=this.head.x,i=this.head.y;switch(this.dir){case 1:i=this.head.y+this.size;break;case 2:e=this.head.x-this.size;break;case 3:i=this.head.y-this.size;break;case 4:e=this.head.x+this.size}if((e>this.canvas.width||i>this.canvas.height||e<0||i<0)&&(t=!0),!t)for(var s=1;s<this.snake.length;s++)e==this.snake[s][0]&&i==this.snake[s][1]&&(t=!0);return t?0!=this.judgeDirArray.length&&(this.judgeDirArray.remove(this.dir),this.dir=this.judgeDirArray.pop(),console.log("other dir: ",this.dir),void this.judgeDir()):(console.log("nice dir: ",this.dir),this.judgeDirArray=[1,2,3,4],this.head.x=e,this.head.y=i,!0)}},{key:"drawSnake",value:function(){this.context.fillStyle=this.snakeColor,this.context.fillRect(this.head.x,this.head.y,this.size,this.size),this.snake.push([this.head.x,this.head.y])}},{key:"setFood",value:function(){do{this.food=this.randomPoint()}while(this.foodInSnake());this.context.fillStyle=this.foodColor,this.context.fillRect(this.food.x,this.food.y,this.size,this.size)}},{key:"foodInSnake",value:function(){for(var t=0;t<this.snake.length;t++)if(this.food.x==this.snake[t][0]&&this.food.y==this.snake[t][1])return!0;return!1}},{key:"setLevel",value:function(){40==this.levelCount&&(this.TIME<80&&(this.TIME+=10),this.levelCount=0)}},{key:"moveOne",value:function(t,e){this.context.fillStyle=this.snakeColor;var i,s,a=this.size,o=this.size;this.lastDir!=this.dir?(1==this.lastDir&&2==this.dir||3==this.lastDir&&2==this.dir?(i=t+this.size,s=e):2==this.lastDir&&3==this.dir||4==this.lastDir&&3==this.dir?(i=t,s=e+this.size):3==this.lastDir&&4==this.dir||1==this.lastDir&&4==this.dir?(i=t-this.size,s=e):(2==this.lastDir&&1==this.dir||4==this.lastDir&&1==this.dir)&&(i=t,s=e-this.size),this.context.fillRect(i,s,this.size,this.size)):1==this.dir||3==this.dir?o-=1:a-=1,this.context.fillRect(t,e,a,o);var n=[[t,e]];if(this.snake=n.concat(this.snake),0==this.eatFood()){for(var r=this.snake.pop(),d=!0,l=0;l<this.snake.length;l++)r[0]==this.snake[l][0]&&r[1]==this.snake[l][1]&&(d=!1);d&&this.context.clearRect(r[0],r[1],this.size,this.size)}this.lastDir=this.dir}},{key:"eatFood",value:function(){return this.head.x==this.food.x&&this.head.y==this.food.y&&(this.context.fillStyle=this.snakeColor,this.context.fillRect(this.food.x,this.food.y,this.size,this.size),this.setFood(),this.count+=1,this.levelCount+=1,!0)}},{key:"destroy",value:function(){console.log("i am dead...=_="),window.clearTimeout(),this.canvas.parentNode.removeChild(this.canvas)}}]),t}(),k=(w={name:"Index",components:{History:g},data:function(){return{todoitem:[],doingitem:[],okitem:[],dragnow:[],dragenternow:"",fieldActive:!1,fieldActiveId:"",newItem:""}}},d()(w,"components",{History:g}),d()(w,"mounted",function(){this.parseLastDay(),this.parseToday(),new y}),d()(w,"methods",{removeItem:function(t,e){for(var i=0;i<t.length;i++)if(t[i].trim()==e)return void t.splice(i,1)},parseLastDay:function(){var t=this.dayjs().subtract(1,"day").format("MM.DD");if(console.log("day_last",t),!window.localStorage.getItem(t+"-parse")){var e=window.localStorage.getItem(t+"-todo"),i=window.localStorage.getItem(t+"-doing"),s=[];e&&(e=JSON.parse(e),s=s.concat(e)),i&&(i=JSON.parse(i),s=s.concat(i)),this.todoitem=this.todoitem.concat(s),window.localStorage.setItem(t+"-parse","true")}},parseToday:function(){var t=this.dayjs().format("MM.DD"),e=t+"-todo",i=t+"-doing",s=t+"-ok",a=window.localStorage.getItem(e),o=window.localStorage.getItem(i),n=window.localStorage.getItem(s);console.log(a),console.log(JSON.parse(a)),a&&(this.todoitem=this.todoitem.concat(JSON.parse(a))),o&&(this.doingitem=this.doingitem.concat(JSON.parse(o))),n&&(this.okitem=this.okitem.concat(JSON.parse(n)))},dragStart:function(t){t.dataTransfer.setData("item",t.target.innerText),t.target.style.opacity=1,t.target.style.boxShadow="0 2px 2px 0 rgba(47, 222, 50, .14), 0 3px 1px -2px rgba(47, 222, 50, .2), 0 1px 5px 0 rgba(47, 222, 50, .12)",this.dragnow=t.target.parentNode.parentNode.id,console.log("drag now is",this.dragnow),this.fieldActive=!0},dragEnter:function(t){t.preventDefault(),t.target.id&&(this.dragenternow=t.target.id,this.fieldActiveId=t.target.id),console.log("enter now",this.dragenternow)},dragOver:function(t){t.preventDefault()},dragLeave:function(t){t.preventDefault()},dragDrop:function(t){t.stopPropagation(),t.preventDefault();var e=t.dataTransfer.getData("item");e&&""!=this.dragenternow&&this.dragnow!=this.dragenternow&&(console.log(this.dragnow,"remove",e),this.removeItem(this[this.dragnow],e.trim()),this[this.dragenternow].push(e))},dragEnd:function(t){t.target.style.boxShadow="",this.dragenternow="",this.dragnow="",this.fieldActive=!1,this.fieldActiveId=""},addNewItem:function(){this.newItem&&(this.todoitem.push(this.newItem),this.newItem="")},addLocal:function(t,e){var i=this.dayjs().format("MM.DD")+"-"+t;console.log("add local"),window.localStorage.setItem(i,h()(e))},removeSelectItem:function(t,e){confirm("确认删除: "+this[t][e])&&this[t].splice(e,1)},upItem:function(t,e){if(0==e)return!0;if(e>=this[t].length)return!0;console.log(e);var i=e-1,s=this[t][i];this[t].splice(i,1,this[t][e]),this[t].splice(e,1,s)},exportTask:function(){for(var t="",e=void 0,i=0;i<window.localStorage.length;i++)t+=(e=window.localStorage.key(i))+"//"+window.localStorage.getItem(e)+"\n";var s=new Blob([t]),a=document.createElement("a"),o=this.dayjs().format("MMDD");a.download="exportTask-"+o+".txt",a.style.display="none",a.href=URL.createObjectURL(s),document.body.appendChild(a),a.click(),document.body.removeChild(a)},importTask:function(){var t=document.getElementById("upload-file"),e=t.value;if(e){console.log(e);var i=t.files[0],s=new FileReader;s.onload=function(t){for(var e=t.target.result.split("\n"),i=0;i<e.length;i++){var s=e[i].split("//");if(2==s.length){var a=window.localStorage.getItem(s[0]);console.log(s[1]),a&&!s[0].endsWith("parse")?(a=(a=JSON.parse(a)).concat(JSON.parse(s[1])),window.localStorage.setItem(s[0],h()(a))):window.localStorage.setItem(s[0],s[1])}}window.location.reload()},s.readAsText(i)}},itemAddLevel:function(){return console.log("hello right"),!1}}),d()(w,"watch",{todoitem:function(){this.addLocal("todo",this.todoitem)},doingitem:function(){this.addLocal("doing",this.doingitem)},okitem:function(){this.addLocal("ok",this.okitem)}}),w),C={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container-fluid"},[i("nav",{staticClass:"navbar navbar-expand-lg navbar-light"},[i("a",{staticClass:"navbar-brand",attrs:{href:"/"}},[t._v("TaskPool")]),t._v(" "),i("ul",{staticClass:"navbar-nav "},[i("li",{staticClass:"nav-item"},[i("span",{staticClass:"nav-link",on:{click:t.exportTask}},[t._v("导出")])]),t._v(" "),i("li",{staticClass:"nav-item"},[i("span",{staticClass:"nav-link import-task"},[t._v("导入"),i("input",{staticClass:"import-input",attrs:{type:"file",id:"upload-file"},on:{change:t.importTask}})])])])]),t._v(" "),i("div",{staticClass:"row input-area"},[i("div",{staticClass:"col-sm-12"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.newItem,expression:"newItem"}],staticClass:"form-control add-input",attrs:{type:"text"},domProps:{value:t.newItem},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.addNewItem(e):null},input:function(e){e.target.composing||(t.newItem=e.target.value)}}}),t._v(" "),i("button",{staticClass:"btn btn-primary",on:{click:t.addNewItem}},[t._v("add")])])]),t._v(" "),i("div",{staticClass:"row"},[i("fieldset",{staticClass:"t-card col-sm-4",class:{field:t.fieldActive,"field-active":"todoitem"==t.fieldActiveId},attrs:{id:"todoitem"},on:{drop:t.dragDrop,dragover:t.dragOver,dragenter:t.dragEnter,dragleave:t.dragLeave}},[i("legend",{staticClass:"t-legend text-danger"},[t._v("待办")]),t._v(" "),i("ul",{staticClass:"list-group"},[i("i",{staticClass:"right-arrow"}),t._v(" "),t._l(t.todoitem,function(e,s){return i("li",{staticClass:"list-group-item",class:{"item-loss":t.fieldActive},attrs:{draggable:"true"},on:{dragstart:t.dragStart,dragend:t.dragEnd,click:function(e){return"button"in e||!t._k(e.keyCode,"left",37,e.key,["Left","ArrowLeft"])?"button"in e&&0!==e.button?null:t.itemAddLevel(e):null}}},[t._v(t._s(e)+"\n          "),i("i",{staticClass:"up-item",on:{click:function(e){t.upItem("todoitem",s)}}}),t._v(" "),i("i",{staticClass:"kill-item",on:{click:function(e){t.removeSelectItem("todoitem",s)}}})])})],2)]),t._v(" "),i("fieldset",{staticClass:"t-card col-sm-4",class:{field:t.fieldActive,"field-active":"doingitem"==t.fieldActiveId},attrs:{id:"doingitem"},on:{drop:t.dragDrop,dragover:t.dragOver,dragenter:t.dragEnter,dragleave:t.dragLeave}},[i("legend",{staticClass:"t-legend text-primary"},[t._v("正在做")]),t._v(" "),i("ul",{staticClass:"list-group"},[i("i",{staticClass:"right-arrow"}),t._v(" "),t._l(t.doingitem,function(e,s){return i("li",{staticClass:"list-group-item",class:{"item-loss":t.fieldActive},attrs:{draggable:"true"},on:{dragstart:t.dragStart,dragend:t.dragEnd}},[t._v(t._s(e)+"\n          "),i("i",{staticClass:"up-item",on:{click:function(e){t.upItem("doingitem",s)}}}),t._v(" "),i("i",{staticClass:"kill-item",on:{click:function(e){t.removeSelectItem("doingitem",s)}}})])})],2)]),t._v(" "),i("fieldset",{staticClass:" t-card col-sm-4",class:{field:t.fieldActive,"field-active":"okitem"==t.fieldActiveId},attrs:{id:"okitem"},on:{drop:t.dragDrop,dragover:t.dragOver,dragenter:t.dragEnter,dragleave:t.dragLeave}},[i("legend",{staticClass:"t-legend text-success"},[t._v("已完成")]),t._v(" "),i("ul",{staticClass:"list-group"},t._l(t.okitem,function(e,s){return i("li",{staticClass:"list-group-item",class:{"item-loss":t.fieldActive},attrs:{draggable:"true"},on:{dragstart:t.dragStart,dragend:t.dragEnd}},[t._v(t._s(e)+"\n          "),i("i",{staticClass:"up-item",on:{click:function(e){t.upItem("okitem",s)}}}),t._v(" "),i("i",{staticClass:"kill-item",on:{click:function(e){t.removeSelectItem("okitem",s)}}})])}))])]),t._v(" "),i("history")],1)},staticRenderFns:[]};var x=i("VU/8")(k,C,!1,function(t){i("G0/5")},"data-v-1663777e",null).exports;s.a.use(n.a);var _=new n.a({mode:"history",routes:[{path:"/",name:"Index",component:x}]}),S=(i("7t+N"),i("oqQY")),I=i.n(S);i("K3J8"),i("Jmt5");s.a.config.productionTip=!1,s.a.prototype.dayjs=I.a,s.a.use(I.a),new s.a({el:"#app",router:_,components:{App:o},template:"<App/>"})},Pne6:function(t,e){},Qbok:function(t,e){},s347:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.34c1cfdad92dbc7304e9.js.map