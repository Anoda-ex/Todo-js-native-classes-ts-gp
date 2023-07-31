(()=>{"use strict";var t={812:(t,e,n)=>{n.d(e,{Z:()=>s});var r=n(81),o=n.n(r),i=n(645),a=n.n(i)()(o());a.push([t.id,"*{\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\na, a:visited{\r\n    color: inherit;\r\n    text-decoration: none;\r\n}\r\nul{\r\n    list-style: none;\r\n}\r\n:root{\r\n    --header-height: 60px;\r\n    --footer-height: 60px;\r\n    --app-bg-color: rgb(243, 243, 243);\r\n}\r\ninput{\r\n    padding: 5px;\r\n    outline: none;   \r\n    border-radius: 5px;\r\n    border: 1px solid black;\r\n}\r\nselect{\r\n    padding: 5px;\r\n    outline: none;   \r\n    border-radius: 5px;\r\n    border: 1px solid black;\r\n}",""]);const s=a},771:(t,e,n)=>{n.d(e,{Z:()=>s});var r=n(81),o=n.n(r),i=n(645),a=n.n(i)()(o());a.push([t.id,"body{\r\n    background-color: var(--app-bg-color);\r\n}\r\n.header{\r\n    height: var(--header-height);\r\n \r\n}\r\n.header__wrapper{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}\r\n.logo img{\r\n    height: 50px;\r\n    width: 50px;\r\n}\r\n.container{\r\n    max-width: 1170px;\r\n    margin: auto;\r\n    padding: 0 15px;\r\n}\r\n.links-list{\r\n    display: flex;\r\n    gap: 15px;\r\n    color: black;\r\n}\r\n.links-list__link{\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n/* .links-list__link img{\r\n    margin-right: 10px;\r\n} */\r\n.links-list__link-icon{\r\n    width: 24px;\r\n    height: 24px;\r\n    margin-right: 3px;\r\n}\r\n.links-list__item{\r\n    border-bottom: 3px solid transparent;\r\n    padding-bottom: 3px;\r\n}\r\n\r\n\r\n\r\n.links-list__item.active{\r\n    border-bottom: 3px solid rgb(89, 174, 244);\r\n}\r\n/* .links-list:has(.links-list__item:hover) .links-list__item.active{\r\n    border-bottom: 3px solid transparent;\r\n} */\r\n\r\n.links-list__item:hover{\r\n    border-bottom: 3px solid rgb(89, 174, 244);\r\n}\r\n.footer{\r\n    height: var(--footer-height);\r\n  \r\n}\r\n.footer__wrapper{\r\n    display: flex;\r\n    flex-direction: row-reverse;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}\r\n.main{\r\n    height: calc( 100dvh - var(--footer-height) - var(--header-height) );\r\n}\r\n\r\n.plus-button{\r\n    border-radius: 50%;\r\n    height: 40px;\r\n    width: 40px;\r\n    background-color: rgb(89, 174, 244);\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    border: 1px solid black;\r\n    cursor: pointer;\r\n}\r\n.plus-button:hover{\r\n    background-color: rgba(89, 174, 244, 0.669);\r\n}\r\n.plus-button img{\r\n    height: 90%;\r\n}\r\n.plus-wrapper{\r\n    display: flex;\r\n    justify-content: center;\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n}\r\n\r\n.popup{\r\n    display: none;\r\n    position: fixed;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    background-color: rgba(143, 143, 143, 0.553);\r\n    align-items: center;\r\n    justify-content: center;\r\n    padding: 0 20px;\r\n}\r\n.popup.active{\r\n    display: flex;\r\n}\r\n.popup__body{\r\n    background-color: white;\r\n    max-width: 460px;\r\n    /* height: 400px; */\r\n    border-radius: 10px;\r\n    padding: 20px;\r\n    width: 100%;\r\n    position: relative;\r\n}\r\n.popup-title{\r\n    font-size: 20px;\r\n    text-align: center;\r\n}\r\n.add-form{\r\n    margin-top: 30px;\r\n}\r\n.add-form__block{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}\r\n.add-form__input{\r\n    width: 80%;\r\n    margin-left: 10px;\r\n}\r\n.add-form__input input, .add-form__input select{\r\n    width: 100%;\r\n}\r\n.add-form__block+.add-form__block{\r\n    margin-top: 20px;\r\n}\r\n\r\n.popup-close{\r\n    position: absolute;\r\n    top: 23px;\r\n    right: 20px;\r\n    /* padding: 3px; */\r\n    border: 1px solid black;\r\n    border-radius: 5px;\r\n    height: 15px;\r\n    width: 15px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    cursor: pointer;\r\n}\r\n.popup-close img{\r\n    height: 8px;\r\n    width: 8px;\r\n}\r\n.form-sumbit{\r\n    margin-top: 20px;\r\n    display: flex;\r\n    justify-content: center;\r\n  \r\n\r\n}\r\n.form-sumbit__button{\r\n    background-color: transparent;\r\n    padding: 5px 10px;\r\n    outline: none;\r\n    border: 1px solid black;\r\n    border-radius: 5px;\r\n    cursor: pointer;\r\n    transition: all 0.3s;\r\n}\r\n.form-sumbit__button:hover{\r\n    background-color: rgb(231, 231, 231);\r\n}\r\n.btn{\r\n    background: none;\r\n    background-color: none;\r\n    outline: none;\r\n    border: none;\r\n}\r\n.btn.disabled{\r\n    pointer-events: none;\r\n    cursor:not-allowed;\r\n    background-color: rgb(232, 232, 232);\r\n}\r\n.todo-item{\r\n    background-color: white;\r\n    border-radius: 10px;\r\n    padding: 15px;\r\n    position: relative;\r\n}\r\n.todo-list{\r\n    display: grid;\r\n    grid-template-columns: repeat(3, 1fr);\r\n    gap: 10px 15px;\r\n    overflow: auto;\r\n    max-height: 100%;\r\n}\r\n.todo-item__delete{\r\n    position: absolute;\r\n    top: 10px;\r\n    right: 10px;\r\n    width: 20px;\r\n    height: 20px;\r\n    cursor: pointer;\r\n}\r\n.todo-item__delete svg{\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n.todo-item__type{\r\n    padding: 2px 8px;\r\n    display: flex;\r\n}\r\n.todo-item__type-wrapper{\r\n    display: flex;\r\n\r\n}\r\nselect:not(option).todo-item__type.todo-item__type--plan{\r\n    border: 1px solid gray;\r\n    border-radius: 5px;\r\n}\r\nselect:not(option).todo-item__type.todo-item__type--completed{\r\n    border-radius: 5px;\r\n    background-color: rgb(113, 255, 47);\r\n}\r\nselect:not(option).todo-item__type.todo-item__type--process{\r\n    border-radius: 5px;\r\n    background-color: yellow;\r\n}\r\n.todo-item__footer{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    margin-top: 15px;\r\n}\r\nselect option{\r\n    background-color: white;\r\n}\r\n.main__wrapper{\r\n    height: 100%;\r\n    padding-bottom: 60px;\r\n    position: relative;\r\n}\r\nmain .container{\r\n    height: 100%;\r\n}\r\n.form-sumbit__button{\r\n    border: 1px solid gray;\r\n}\r\n@media (max-width: 1200px) {\r\n\r\n    .todo-item__footer{\r\n        flex-direction: column;\r\n        align-items: start;\r\n        justify-content: end;\r\n    }\r\n    .todo-item__type-data{\r\n        margin-top: 15px;\r\n    }\r\n}\r\n@media (max-width: 768px) {\r\n    .links-list__link-text{\r\n        display: none;\r\n    }\r\n}\r\n@media (max-width: 600px) {\r\n    .todo-list{\r\n        grid-template-columns: repeat(2, 1fr);\r\n    }\r\n}\r\n@media (max-width: 450px) {\r\n    .todo-list{\r\n        grid-template-columns: repeat(1, 1fr);\r\n    }\r\n    .links-list{\r\n        gap: 10px;\r\n    }\r\n}",""]);const s=a},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,o,i){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var p=this[s][0];null!=p&&(a[p]=!0)}for(var d=0;d<t.length;d++){var c=[].concat(t[d]);r&&a[c[0]]||(void 0!==i&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=i),n&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=n):c[2]=n),o&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=o):c[4]="".concat(o)),e.push(c))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var i={},a=[],s=0;s<t.length;s++){var p=t[s],d=r.base?p[0]+r.base:p[0],c=i[d]||0,l="".concat(d," ").concat(c);i[d]=c+1;var u=n(l),m={css:p[1],media:p[2],sourceMap:p[3],supports:p[4],layer:p[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var h=o(m,r);r.byIndex=s,e.splice(s,0,{identifier:l,updater:h,references:1})}a.push(l)}return a}function o(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,o){var i=r(t=t||[],o=o||{});return function(t){t=t||[];for(var a=0;a<i.length;a++){var s=n(i[a]);e[s].references--}for(var p=r(t,o),d=0;d<i.length;d++){var c=n(i[d]);0===e[c].references&&(e[c].updater(),e.splice(c,1))}i=p}}},569:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return t[r](i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t,e;(e=t||(t={})).PLAN="План",e.COMPLETED="Виконано",e.PROCESS="В процесі";var r,o=new(function(){function t(){this.counter=0}return t.prototype.generateTimestamp=function(){return Date.now().toString(36)},t.prototype.generateRandomString=function(){return Math.random().toString(36).substr(2,5)},t.prototype.generateUID=function(){var t=this.generateTimestamp(),e=this.generateRandomString(),n="".concat(t).concat(e).concat(this.counter.toString(36));return this.counter++,n},t}()),i=(r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},r(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),a=function(){function t(t,e,n){this.id=t,this.title=e,this.type=n}return t.prototype.changeData=function(t,e){this.title=t,this.type=e},t}(),s=function(t){function e(e,n,r){return t.call(this,e,n,r)||this}return i(e,t),e}(a),p=function(t){function e(e,n,r,o){var i=t.call(this,e,n,r)||this;return i.completedDate=o,i}return i(e,t),e}(a),d=function(t){function e(e,n,r,o){var i=t.call(this,e,n,r)||this;return i.processDate=o,i}return i(e,t),e}(a);function c(t,e){window.localStorage.setItem("save-id-".concat(t),JSON.stringify(e))}function l(t){var e=String(t.getDate()).padStart(2,"0"),n=String(t.getMonth()+1).padStart(2,"0"),r=t.getFullYear(),o=String(t.getHours()).padStart(2,"0"),i=String(t.getMinutes()).padStart(2,"0");return"".concat(o,":").concat(i," ").concat(e,".").concat(n,".").concat(r)}var u=function(){return u=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},u.apply(this,arguments)},m=function(){function e(e){var n,r;this.items=(n=document.querySelector(".todo-list"),r=function(e){var n="",r="todo-item__type--plan";e.type===t.COMPLETED&&(n='<div class="todo-item__type-data">\n                        Finish on '.concat(l(e.completedDate),"\n                    </div>"),r="todo-item__type--completed"),e.type===t.PROCESS&&(n='<div class="todo-item__type-data">\n                        Starts on '.concat(l(e.processDate),"\n                    </div>"),r="todo-item__type--process");var o='<button class="btn todo-item__delete" data-remove-id='.concat(e.id,'>\n                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><path d="M 20.5 4 A 1.50015 1.50015 0 0 0 19.066406 6 L 14.640625 6 C 12.803372 6 11.082924 6.9194511 10.064453 8.4492188 L 7.6972656 12 L 7.5 12 A 1.50015 1.50015 0 1 0 7.5 15 L 8.2636719 15 A 1.50015 1.50015 0 0 0 8.6523438 15.007812 L 11.125 38.085938 C 11.423352 40.868277 13.795836 43 16.59375 43 L 31.404297 43 C 34.202211 43 36.574695 40.868277 36.873047 38.085938 L 39.347656 15.007812 A 1.50015 1.50015 0 0 0 39.728516 15 L 40.5 15 A 1.50015 1.50015 0 1 0 40.5 12 L 40.302734 12 L 37.935547 8.4492188 C 36.916254 6.9202798 35.196001 6 33.359375 6 L 28.933594 6 A 1.50015 1.50015 0 0 0 27.5 4 L 20.5 4 z M 14.640625 9 L 33.359375 9 C 34.196749 9 34.974746 9.4162203 35.439453 10.113281 L 36.697266 12 L 11.302734 12 L 12.560547 10.113281 A 1.50015 1.50015 0 0 0 12.5625 10.111328 C 13.025982 9.4151428 13.801878 9 14.640625 9 z M 11.669922 15 L 36.330078 15 L 33.890625 37.765625 C 33.752977 39.049286 32.694383 40 31.404297 40 L 16.59375 40 C 15.303664 40 14.247023 39.049286 14.109375 37.765625 L 11.669922 15 z"/></svg>\n                </button>'),i="";return Object.values(t).forEach((function(t){i+="<option ".concat(t===e.type?"selected":"",' value="').concat(t,'">').concat(t,"</option>")})),' <div class="todo-item" data-id="'.concat(e.id,'">\n                    <div class="todo-item__name">').concat(e.title,'</div>\n                    <div class="todo-item__footer">\n                        <div class="todo-item__type-wrapper">\n                            <select class="todo-item__type ').concat(r,'"  data-select-id=').concat(e.id,">\n                                ").concat(i,"\n                            </select>\n                        </div>\n                       ").concat(n,"\n                    </div>\n                    ").concat(o,"\n                </div>")},new Proxy([],{get:function(t,e,r){if(c(n.id,t),"splice"===e){console.log("SPLICE",r);var o=t[e];return function(){for(var e=[],i=0;i<arguments.length;i++)e[i]=arguments[i];console.log("splicedElement",e);var a=document.querySelector('[data-id="'.concat(r[e[0]].id,'"]'));a&&a.remove(),o.apply(t,e),c(n.id,t)}}return Reflect.get(t,e,r)},set:function(t,e,o,i){if(c(n.id,t),Number.isNaN(Number(e)))return!0;t[Number(e)]=o;var a,s,p=r(o),d=document.querySelector('[data-id="'.concat(o.id,'"]'));return d?d.replaceWith((a=p,(s=document.createElement("div")).innerHTML=a.trim(),s.firstChild)):n.insertAdjacentHTML("beforeend",p),c(n.id,t),!0}})),this.todoAppElements=e,this.closePopupListener=this.closePopupListener.bind(this),this.overlayPopupListener=this.overlayPopupListener.bind(this),this.generateNewTodoItem=this.generateNewTodoItem.bind(this),this.openPopupListener=this.openPopupListener.bind(this),this.addTodoListener=this.addTodoListener.bind(this),this.removeListener=this.removeListener.bind(this),this.addItem=this.addItem.bind(this),this.inputListener=this.inputListener.bind(this),this.changeListener=this.changeListener.bind(this),this.removeItem=this.removeItem.bind(this),this.initSelect(),this.initListeners(),this.initGetData()}return e.prototype.generateNewTodoItem=function(e){var n=e.id,r=e.title,o=e.type,i=e.completedDate,a=e.processDate,c=null;return o===t.COMPLETED?c=new p(n,r,o,i||new Date):o===t.PROCESS?c=new d(n,r,o,a||new Date):o===t.PLAN&&(c=new s(n,r,o)),c},e.prototype.addItem=function(t){var e=t.id,n=t.title,r=t.type,o=t.completedDate,i=t.processDate,a=this.generateNewTodoItem({id:e,title:n,type:r,completedDate:o,processDate:i});a&&this.items.push(a)},e.prototype.removeItem=function(t){var e=this.items.findIndex((function(e){return e.id===t}));e>-1&&this.items.splice(e,1)},e.prototype.changeItem=function(t,e){var n=e.title,r=e.type,o=this.items.findIndex((function(e){return e.id===t}));if(o>-1){var i=this.generateNewTodoItem({id:t,title:n,type:r});this.items[o]=i}},e.prototype.initListeners=function(){this.todoAppElements.openPopupButton.addEventListener("click",this.openPopupListener),this.todoAppElements.closePopupButton.addEventListener("click",this.closePopupListener),this.todoAppElements.addTodoPopup.addEventListener("click",this.overlayPopupListener),this.todoAppElements.inputNameElement.addEventListener("input",this.inputListener),this.todoAppElements.addTodoButton.addEventListener("click",this.addTodoListener),document.addEventListener("click",this.removeListener),document.addEventListener("click",this.changeListener),this.inputListener()},e.prototype.initSelect=function(){var e=document.querySelector(".add-form__input select");Object.values(t).forEach((function(t,n){var r=document.createElement("option");0===n&&(r.selected=!0),r.value=t,r.innerText=t,e.append(r)}))},e.prototype.openPopupListener=function(){this.inputListener(),this.todoAppElements.addTodoPopup.classList.add("active")},e.prototype.closePopupListener=function(){this.todoAppElements.addTodoPopup.classList.remove("active"),this.todoAppElements.inputNameElement.value=""},e.prototype.removeListener=function(t){var e=t.target.closest(".todo-item__delete");e&&this.removeItem(e.getAttribute("data-remove-id"))},e.prototype.inputListener=function(){0===this.todoAppElements.inputNameElement.value.length?this.todoAppElements.addTodoButton.classList.add("disabled"):this.todoAppElements.addTodoButton.classList.remove("disabled")},e.prototype.addTodoListener=function(){this.addItem({id:o.generateUID(),title:this.todoAppElements.inputNameElement.value,type:this.todoAppElements.inputTypeElement.value}),this.closePopupListener()},e.prototype.changeListener=function(t){var e=t.target.closest(".todo-item__type");if(e){var n=e.value,r=e.getAttribute("data-select-id"),o=this.items.find((function(t){return t.id===r}));o.type!==n&&this.changeItem(r,{id:r,title:o.title,type:e.value})}},e.prototype.overlayPopupListener=function(t){t.target.id===this.todoAppElements.addTodoPopup.id&&this.closePopupListener()},e.prototype.initGetData=function(){var t=this,e=window.localStorage.getItem("save-id-todo-list");e&&JSON.parse(e).forEach((function(e){t.addItem(u(u({},e),{completedDate:e.completedDate&&new Date(e.completedDate),processDate:e.processDate&&new Date(e.processDate)}))}))},e}(),h=n(379),f=n.n(h),g=n(795),v=n.n(g),y=n(569),b=n.n(y),x=n(565),_=n.n(x),L=n(216),w=n.n(L),E=n(589),k=n.n(E),S=n(812),P={};P.styleTagTransform=k(),P.setAttributes=_(),P.insert=b().bind(null,"head"),P.domAPI=v(),P.insertStyleElement=w(),f()(S.Z,P),S.Z&&S.Z.locals&&S.Z.locals;var T=n(771),A={};A.styleTagTransform=k(),A.setAttributes=_(),A.insert=b().bind(null,"head"),A.domAPI=v(),A.insertStyleElement=w(),f()(T.Z,A),T.Z&&T.Z.locals&&T.Z.locals,new m({addTodoPopup:document.querySelector("#add-todo-popup"),openPopupButton:document.querySelector("#open-popup-button"),closePopupButton:document.querySelector("#close-popup-button"),inputNameElement:document.querySelector("#input-name"),inputTypeElement:document.querySelector("#input-type"),addTodoButton:document.querySelector("#add-todo-button")})})()})();