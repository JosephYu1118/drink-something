(function(e){function t(t){for(var c,r,o=t[0],s=t[1],l=t[2],b=0,u=[];b<o.length;b++)r=o[b],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&u.push(i[r][0]),i[r]=0;for(c in s)Object.prototype.hasOwnProperty.call(s,c)&&(e[c]=s[c]);d&&d(t);while(u.length)u.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],c=!0,o=1;o<n.length;o++){var s=n[o];0!==i[s]&&(c=!1)}c&&(a.splice(t--,1),e=r(r.s=n[0]))}return e}var c={},i={app:0},a=[];function r(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=c,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)r.d(n,c,function(t){return e[t]}.bind(null,c));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],s=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var d=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"305e":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23");function i(e,t){var n=Object(c["x"])("router-view");return Object(c["q"])(),Object(c["e"])(n)}n("aae6");const a={};a.render=i;var r=a,o=n("6c02"),s=Object(c["E"])("data-v-c07b7406");Object(c["t"])("data-v-c07b7406");var l={class:"home"};Object(c["r"])();var d=s((function(e,t,n,i,a,r){var o=Object(c["x"])("Order");return Object(c["q"])(),Object(c["e"])("div",l,[Object(c["h"])(o)])})),b=(n("b0c0"),n("a4d3"),n("e01a"),Object(c["E"])("data-v-33ce68bb"));Object(c["t"])("data-v-33ce68bb");var u={class:"order"},O={class:"tools-block"},p={class:"table-block"},m={class:"table-head"},h={class:"table-item"},j=Object(c["g"])(" Name "),f={class:"sort-block"},v={class:"table-item"},I=Object(c["g"])(" Price "),y={class:"sort-block"},T=Object(c["h"])("li",{class:"table-item description"},"Description",-1),E=Object(c["h"])("li",{class:"table-item status"},"Status",-1),g={class:"table-body"},D={class:"table-item"},_={class:"table-item"},M={class:"table-item description"},S={class:"table-item status"};Object(c["r"])();var k=b((function(e,t,n,i,a,r){var o=Object(c["x"])("Modal");return Object(c["q"])(),Object(c["e"])("div",u,[Object(c["h"])("div",O,[Object(c["h"])("button",{class:"btn-add",onClick:t[1]||(t[1]=function(){return r.handleAdd&&r.handleAdd.apply(r,arguments)})},"Add")]),Object(c["h"])("div",p,[Object(c["h"])("ul",m,[Object(c["h"])("li",h,[j,Object(c["h"])("div",f,[Object(c["h"])("button",{class:"btn-sort",onClick:t[2]||(t[2]=function(e){return r.handleSort("name","ascending")})},"^"),Object(c["h"])("button",{class:"btn-sort",onClick:t[3]||(t[3]=function(e){return r.handleSort("name","descending")})},"v")])]),Object(c["h"])("li",v,[I,Object(c["h"])("div",y,[Object(c["h"])("button",{class:"btn-sort",onClick:t[4]||(t[4]=function(e){return r.handleSort("price","ascending")})},"^"),Object(c["h"])("button",{class:"btn-sort",onClick:t[5]||(t[5]=function(e){return r.handleSort("price","descending")})},"v")])]),T,E]),Object(c["h"])("ul",g,[(Object(c["q"])(!0),Object(c["e"])(c["a"],null,Object(c["w"])(e.itemList,(function(e){return Object(c["q"])(),Object(c["e"])("li",{class:"table-row",key:e.id},[Object(c["h"])("p",D,Object(c["z"])(e.name),1),Object(c["h"])("p",_,"NT$ "+Object(c["z"])(e.price),1),Object(c["h"])("p",M,Object(c["z"])(e.description),1),Object(c["h"])("div",S,[Object(c["h"])("button",{class:"btn-edit",onClick:function(t){return r.handleEdit(e)}},"Edit",8,["onClick"]),Object(c["h"])("button",{class:"btn-delete",onClick:function(t){return r.handleDelete(e.id)}},"Delete",8,["onClick"])])])})),128))])]),(Object(c["q"])(),Object(c["e"])(c["b"],{to:"#app"},[Object(c["h"])(o,{isVisible:e.isModalVisible,"onUpdate:isVisible":t[6]||(t[6]=function(t){return e.isModalVisible=t}),modalType:e.modalType,currentItem:e.currentItem},null,8,["isVisible","modalType","currentItem"])]))])})),x=n("5530"),L=n("5502"),w={ADD:"ADD",EDIT:"EDIT"},V=Object(c["E"])("data-v-04fe7f36");Object(c["t"])("data-v-04fe7f36");var C={key:0,class:"modal"},A=Object(c["h"])("div",{class:"modal-mask"},null,-1),P={class:"modal-wrapper"},q={class:"header"},B={class:"body"},z=Object(c["h"])("p",null,"Name",-1),R=Object(c["h"])("p",null,"Price",-1),U=Object(c["h"])("p",null,"Description",-1),N={class:"message"},Y={class:"footer"};Object(c["r"])();var H=V((function(e,t,n,i,a,r){return n.isVisible?(Object(c["q"])(),Object(c["e"])("div",C,[A,Object(c["h"])("div",P,[Object(c["h"])("button",{class:"btn-close",onClick:t[1]||(t[1]=function(){return r.hide&&r.hide.apply(r,arguments)})},"x"),Object(c["h"])("div",q,Object(c["z"])(n.modalType),1),Object(c["h"])("div",B,[Object(c["h"])("label",null,[z,Object(c["D"])(Object(c["h"])("input",{type:"text",placeholder:"Your item's name","onUpdate:modelValue":t[2]||(t[2]=function(t){return e.editingItem.name=t})},null,512),[[c["B"],e.editingItem.name]])]),Object(c["h"])("label",null,[R,Object(c["D"])(Object(c["h"])("input",{type:"number",placeholder:"Your item's price","onUpdate:modelValue":t[3]||(t[3]=function(t){return e.editingItem.price=t})},null,512),[[c["B"],e.editingItem.price,void 0,{number:!0}]])]),Object(c["h"])("label",null,[U,Object(c["D"])(Object(c["h"])("textarea",{rows:"3",placeholder:"Your item's description","onUpdate:modelValue":t[4]||(t[4]=function(t){return e.editingItem.description=t})},null,512),[[c["B"],e.editingItem.description]])])]),Object(c["h"])("p",N,Object(c["z"])(e.message),1),Object(c["h"])("div",Y,[Object(c["h"])("button",{class:"btn-save",onClick:t[5]||(t[5]=function(){return r.handleSave&&r.handleSave.apply(r,arguments)})},"Save"),Object(c["h"])("button",{class:"btn-cancel",onClick:t[6]||(t[6]=function(){return r.hide&&r.hide.apply(r,arguments)})},"Cancel")])])])):Object(c["f"])("",!0)})),J=(n("159b"),n("b64b"),n("99af"),n("a15b"),{name:"Modal",props:{isVisible:{type:Boolean,default:!1},modalType:{type:String,default:""},currentItem:{type:Object,default:function(){return{}}}},data:function(){return{message:"",editingItem:null}},watch:{currentItem:function(e){this.editingItem=Object(x["a"])({},e)}},methods:Object(x["a"])(Object(x["a"])({},Object(L["b"])(["addItem","editItem"])),{},{hide:function(){this.$emit("update:isVisible",!1)},handleSave:function(){var e=this.modalType,t=this.editingItem,n=[];Object.keys(t).forEach((function(e){t[e]||n.push(e)})),n.length?this.message="\n          ".concat(n.join(", ")," ").concat(n.length>1?"are":"is"," required!\n        "):(e===w.ADD?this.addItem(t):e===w.EDIT&&this.editItem(t),this.hide())}})});n("6d74");J.render=H,J.__scopeId="data-v-04fe7f36";var $=J,F={components:{Modal:$},data:function(){return{isModalVisible:!1,modalType:"",currentItem:null}},computed:Object(x["a"])({},Object(L["c"])(["itemList"])),methods:Object(x["a"])(Object(x["a"])({},Object(L["b"])(["deleteItem","sortItemList"])),{},{handleAdd:function(){this.modalType=w.ADD,this.currentItem={name:"",price:"",description:""},this.isModalVisible=!0},handleEdit:function(e){this.modalType=w.EDIT,this.currentItem=e,this.isModalVisible=!0},handleDelete:function(e){this.deleteItem(e)},handleSort:function(e,t){this.sortItemList({sortBy:e,sortOrder:t})}})};n("e57f");F.render=k,F.__scopeId="data-v-33ce68bb";var G=F,K={name:"Home",components:{Order:G}};n("c363");K.render=d,K.__scopeId="data-v-c07b7406";var Q,W=K,X=[{path:"/",name:"Home",component:W}],Z=Object(o["a"])({history:Object(o["b"])(),routes:X}),ee=Z,te=n("ade3"),ne=n("2909"),ce=(n("c740"),n("4de4"),n("4e82"),n("ac1f"),n("5319"),n("d3b7"),n("25f0"),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"xxyxxyxx";return e.replace(/[xy]/g,(function(e){var t=16*Math.random()|0,n="x"===e?t:3&t|8;return n.toString(16)}))}),ie=ce,ae={ADD_ITEM:"ADD_ITEM",EDIT_ITEM:"EDIT_ITEM",DELETE_ITEM:"DELETE_ITEM",SORT_ITEM_LIST:"SORT_ITEM_LIST"},re=ae,oe=Object(L["a"])({state:{itemList:[{id:"123456",name:"星巴克咖啡",price:120,description:"eeeee"},{id:"234567",name:"珍珠奶茶",price:50,description:"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"},{id:"345678",name:"檸檬紅茶",price:30,description:"yyyyyyyyyyy"}]},mutations:(Q={},Object(te["a"])(Q,re.ADD_ITEM,(function(e,t){var n=ie();e.itemList.push(Object(x["a"])(Object(x["a"])({},t),{},{id:n}))})),Object(te["a"])(Q,re.EDIT_ITEM,(function(e,t){var n=e.itemList,c=t.id,i=n.findIndex((function(e){return e.id===c}));n[i]=Object(x["a"])({},t),e.itemList=Object(ne["a"])(n)})),Object(te["a"])(Q,re.DELETE_ITEM,(function(e,t){var n=e.itemList;e.itemList=n.filter((function(e){return e.id!==t}))})),Object(te["a"])(Q,re.SORT_ITEM_LIST,(function(e,t){var n=e.itemList,c=t.sortBy,i=t.sortOrder;e.itemList=n.sort((function(e,t){return"descending"===i?e[c]<t[c]?1:-1:e[c]>t[c]?1:-1}))})),Q),actions:{addItem:function(e,t){var n=e.commit;n(re.ADD_ITEM,t)},editItem:function(e,t){var n=e.commit;n(re.EDIT_ITEM,t)},deleteItem:function(e,t){var n=e.commit;n(re.DELETE_ITEM,t)},sortItemList:function(e,t){var n=e.commit;n(re.SORT_ITEM_LIST,t)}}});Object(c["d"])(r).use(oe).use(ee).mount("#app")},"6d74":function(e,t,n){"use strict";n("305e")},aae6:function(e,t,n){"use strict";n("c504")},b0f9:function(e,t,n){},c363:function(e,t,n){"use strict";n("e56d")},c504:function(e,t,n){},e56d:function(e,t,n){},e57f:function(e,t,n){"use strict";n("b0f9")}});
//# sourceMappingURL=app.c3501088.js.map