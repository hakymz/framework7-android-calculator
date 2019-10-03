(function framework7ComponentLoader(e,t){void 0===t&&(t=!0);document,window;var a=e.$,r=(e.Template7,e.utils),n=(e.device,e.support,e.Class),s=(e.Modal,e.ConstructorMethods),o=(e.ModalMethods,function(e){function t(t,n){void 0===n&&(n={}),e.call(this,n,[t]);var s=this,o=r.extend({on:{}},t.params.smartSelect);void 0===o.searchbarDisableButton&&(o.searchbarDisableButton="aurora"!==t.theme),s.useModulesParams(o),s.params=r.extend({},o,n),s.app=t;var l=a(s.params.el).eq(0);if(0===l.length)return s;if(l[0].f7SmartSelect)return l[0].f7SmartSelect;var i,p=l.find("select").eq(0);if(0===p.length)return s;s.params.setValueText&&(0===(i=a(s.params.valueEl)).length&&(i=l.find(".item-after")),0===i.length&&(i=a('<div class="item-after"></div>')).insertAfter(l.find(".item-title")));var c=n.url;c||(l.attr("href")&&"#"!==l.attr("href")?c=l.attr("href"):p.attr("name")&&(c=p.attr("name").toLowerCase()+"-select/")),c||(c=s.params.url);var d=p[0].multiple,u=d?"checkbox":"radio",m=r.id();function v(){s.open()}function h(){var e=s.$selectEl.val();s.$el.trigger("smartselect:change",e),s.emit("local::change smartSelectChange",s,e),s.setValueText()}function f(){var e,t,r,n=this.value,o=[];if("checkbox"===this.type){for(var l=0;l<s.selectEl.options.length;l+=1)(e=s.selectEl.options[l]).value===n&&(e.selected=this.checked),e.selected&&(t=(r=e.dataset?e.dataset.displayAs:a(e).data("display-value-as"))&&void 0!==r?r:e.textContent,o.push(t.trim()));s.maxLength&&s.checkMaxLength()}else o=[t=(r=(e=s.$selectEl.find('option[value="'+n+'"]')[0]).dataset?e.dataset.displayAs:a(e).data("display-as"))&&void 0!==r?r:e.textContent],s.selectEl.value=n;s.$selectEl.trigger("change"),s.params.setValueText&&s.$valueEl.text(s.formatValueText(o)),s.params.closeOnSelect&&"radio"===s.inputType&&s.close()}return r.extend(s,{$el:l,el:l[0],$selectEl:p,selectEl:p[0],$valueEl:i,valueEl:i&&i[0],url:c,multiple:d,inputType:u,id:m,view:void 0,inputName:u+"-"+m,selectName:p.attr("name"),maxLength:p.attr("maxlength")||n.maxLength}),l[0].f7SmartSelect=s,s.attachEvents=function(){l.on("click",v),l.on("change","select",h)},s.detachEvents=function(){l.off("click",v),l.off("change","select",h)},s.attachInputsEvents=function(){s.$containerEl.on("change",'input[type="checkbox"], input[type="radio"]',f)},s.detachInputsEvents=function(){s.$containerEl.off("change",'input[type="checkbox"], input[type="radio"]',f)},s.useModules(),s.init(),s}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.setValue=function(e){var t,r,n,s=this,o=e,l=[];if(s.multiple){Array.isArray(o)||(o=[o]);for(var i=0;i<s.selectEl.options.length;i+=1)t=s.selectEl.options[i],o.indexOf(t.value)>=0?t.selected=!0:t.selected=!1,t.selected&&(n=(r=t.dataset?t.dataset.displayAs:a(t).data("display-value-as"))&&void 0!==r?r:t.textContent,l.push(n.trim()))}else(t=s.$selectEl.find('option[value="'+o+'"]')[0])&&(l=[n=(r=t.dataset?t.dataset.displayAs:a(t).data("display-as"))&&void 0!==r?r:t.textContent]),s.selectEl.value=o;return s.params.setValueText&&s.$valueEl.text(s.formatValueText(l)),s.$selectEl.trigger("change"),s},t.prototype.unsetValue=function(){var e=this;e.params.setValueText&&e.$valueEl.text(e.formatValueText([])),e.$selectEl.find("option").each(function(e,t){t.selected=!1,t.checked=!1}),e.$selectEl[0].value=null,e.$containerEl&&e.$containerEl.find('input[name="'+e.inputName+'"][type="checkbox"], input[name="'+e.inputName+'"][type="radio"]').prop("checked",!1),e.$selectEl.trigger("change")},t.prototype.getValue=function(){return this.$selectEl.val()},t.prototype.getView=function(){var e=this,t=e.view||e.params.view;if(t||(t=e.$el.parents(".view").length&&e.$el.parents(".view")[0].f7View),!t)throw Error("Smart Select requires initialized View");return e.view=t,t},t.prototype.checkMaxLength=function(){var e=this.$containerEl;this.selectEl.selectedOptions.length>=this.maxLength?e.find('input[type="checkbox"]').each(function(e,t){t.checked?a(t).parents("li").removeClass("disabled"):a(t).parents("li").addClass("disabled")}):e.find(".disabled").removeClass("disabled")},t.prototype.formatValueText=function(e){return this.params.formatValueText?this.params.formatValueText.call(this,e,this):e.join(", ")},t.prototype.setValueText=function(e){var t=[];void 0!==e?t=Array.isArray(e)?e:[e]:this.$selectEl.find("option").each(function(e,r){var n=a(r);if(r.selected){var s=r.dataset?r.dataset.displayAs:n.data("display-value-as");s&&void 0!==s?t.push(s):t.push(r.textContent.trim())}}),this.params.setValueText&&this.$valueEl.text(this.formatValueText(t))},t.prototype.getItemsData=function(){var e,t=this,r=[];return t.$selectEl.find("option").each(function(n,s){var o=a(s),l=o.dataset(),i=l.optionImage||t.params.optionImage,p=l.optionIcon||t.params.optionIcon,c=i||p,d=l.optionColor,u=l.optionClass||"";o[0].disabled&&(u+=" disabled");var m=o.parent("optgroup")[0],v=m&&m.label,h=!1;m&&m!==e&&(h=!0,e=m,r.push({groupLabel:v,isLabel:h})),r.push({value:o[0].value,text:o[0].textContent.trim(),selected:o[0].selected,groupEl:m,groupLabel:v,image:i,icon:p,color:d,className:u,disabled:o[0].disabled,id:t.id,hasMedia:c,checkbox:"checkbox"===t.inputType,radio:"radio"===t.inputType,inputName:t.inputName,inputType:t.inputType})}),t.items=r,r},t.prototype.renderSearchbar=function(){var e=this;return e.params.renderSearchbar?e.params.renderSearchbar.call(e):'\n      <form class="searchbar">\n        <div class="searchbar-inner">\n          <div class="searchbar-input-wrap">\n            <input type="search" placeholder="'+e.params.searchbarPlaceholder+'"/>\n            <i class="searchbar-icon"></i>\n            <span class="input-clear-button"></span>\n          </div>\n          '+(e.params.searchbarDisableButton?'\n          <span class="searchbar-disable-button">'+e.params.searchbarDisableText+"</span>\n          ":"")+"\n        </div>\n      </form>\n    "},t.prototype.renderItem=function(e,t){return this.params.renderItem?this.params.renderItem.call(this,e,t):e.isLabel?'<li class="item-divider">'+e.groupLabel+"</li>":'\n        <li class="'+(e.className||"")+'">\n          <label class="item-'+e.inputType+' item-content">\n            <input type="'+e.inputType+'" name="'+e.inputName+'" value="'+e.value+'" '+(e.selected?"checked":"")+'/>\n            <i class="icon icon-'+e.inputType+'"></i>\n            '+(e.hasMedia?'\n              <div class="item-media">\n                '+(e.icon?'<i class="icon '+e.icon+'"></i>':"")+"\n                "+(e.image?'<img src="'+e.image+'">':"")+"\n              </div>\n            ":"")+'\n            <div class="item-inner">\n              <div class="item-title'+(e.color?" color-"+e.color:"")+'">'+e.text+"</div>\n            </div>\n          </label>\n        </li>\n      "},t.prototype.renderItems=function(){var e=this;return e.params.renderItems?e.params.renderItems.call(e,e.items):"\n      "+e.items.map(function(t,a){return""+e.renderItem(t,a)}).join("")+"\n    "},t.prototype.renderPage=function(){var e=this;if(e.params.renderPage)return e.params.renderPage.call(e,e.items);var t=e.params.pageTitle;if(void 0===t){var a=e.$el.find(".item-title");t=a.length?a.text().trim():""}return'\n      <div class="page smart-select-page '+e.params.cssClass+'" data-name="smart-select-page" data-select-name="'+e.selectName+'">\n        <div class="navbar '+(e.params.navbarColorTheme?"color-"+e.params.navbarColorTheme:"")+'">\n          <div class="navbar-bg"></div>\n          <div class="navbar-inner sliding '+(e.params.navbarColorTheme?"color-"+e.params.navbarColorTheme:"")+'">\n            <div class="left">\n              <a class="link back">\n                <i class="icon icon-back"></i>\n                <span class="if-not-md">'+e.params.pageBackLinkText+"</span>\n              </a>\n            </div>\n            "+(t?'<div class="title">'+t+"</div>":"")+"\n            "+(e.params.searchbar?'<div class="subnavbar">'+e.renderSearchbar()+"</div>":"")+"\n          </div>\n        </div>\n        "+(e.params.searchbar?'<div class="searchbar-backdrop"></div>':"")+'\n        <div class="page-content">\n          <div class="list smart-select-list-'+e.id+" "+(e.params.virtualList?" virtual-list":"")+" "+(e.params.formColorTheme?"color-"+e.params.formColorTheme:"")+'">\n            <ul>'+(!e.params.virtualList&&e.renderItems(e.items))+"</ul>\n          </div>\n        </div>\n      </div>\n    "},t.prototype.renderPopup=function(){var e=this;if(e.params.renderPopup)return e.params.renderPopup.call(e,e.items);var t=e.params.pageTitle;if(void 0===t){var a=e.$el.find(".item-title");t=a.length?a.text().trim():""}return'\n      <div class="popup smart-select-popup '+(e.params.cssClass||"")+" "+(e.params.popupTabletFullscreen?"popup-tablet-fullscreen":"")+'" data-select-name="'+e.selectName+'">\n        <div class="view">\n          <div class="page smart-select-page '+(e.params.searchbar?"page-with-subnavbar":"")+'" data-name="smart-select-page">\n            <div class="navbar '+(e.params.navbarColorTheme?"color-"+e.params.navbarColorTheme:"")+'">\n              <div class="navbar-bg"></div>\n              <div class="navbar-inner sliding">\n                '+(t?'<div class="title">'+t+"</div>":"")+'\n                <div class="right">\n                  <a class="link popup-close" data-popup=".smart-select-popup[data-select-name=\''+e.selectName+"']\">"+e.params.popupCloseLinkText+"</span></a>\n                </div>\n                "+(e.params.searchbar?'<div class="subnavbar">'+e.renderSearchbar()+"</div>":"")+"\n              </div>\n            </div>\n            "+(e.params.searchbar?'<div class="searchbar-backdrop"></div>':"")+'\n            <div class="page-content">\n              <div class="list smart-select-list-'+e.id+" "+(e.params.virtualList?" virtual-list":"")+" "+(e.params.formColorTheme?"color-"+e.params.formColorTheme:"")+'">\n                <ul>'+(!e.params.virtualList&&e.renderItems(e.items))+"</ul>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    "},t.prototype.renderSheet=function(){var e=this;return e.params.renderSheet?e.params.renderSheet.call(e,e.items):'\n      <div class="sheet-modal smart-select-sheet '+e.params.cssClass+'" data-select-name="'+e.selectName+'">\n        <div class="toolbar toolbar-top '+(e.params.toolbarColorTheme?"color-"+e.params.toolbarColorTheme:"")+'">\n          <div class="toolbar-inner">\n            <div class="left"></div>\n            <div class="right">\n              <a class="link sheet-close">'+e.params.sheetCloseLinkText+'</a>\n            </div>\n          </div>\n        </div>\n        <div class="sheet-modal-inner">\n          <div class="page-content">\n            <div class="list smart-select-list-'+e.id+" "+(e.params.virtualList?" virtual-list":"")+" "+(e.params.formColorTheme?"color-"+e.params.formColorTheme:"")+'">\n              <ul>'+(!e.params.virtualList&&e.renderItems(e.items))+"</ul>\n            </div>\n          </div>\n        </div>\n      </div>\n    "},t.prototype.renderPopover=function(){var e=this;return e.params.renderPopover?e.params.renderPopover.call(e,e.items):'\n      <div class="popover smart-select-popover '+e.params.cssClass+'" data-select-name="'+e.selectName+'">\n        <div class="popover-inner">\n          <div class="list smart-select-list-'+e.id+" "+(e.params.virtualList?" virtual-list":"")+" "+(e.params.formColorTheme?"color-"+e.params.formColorTheme:"")+'">\n            <ul>'+(!e.params.virtualList&&e.renderItems(e.items))+"</ul>\n          </div>\n        </div>\n      </div>\n    "},t.prototype.scrollToSelectedItem=function(){var e=this,t=e.params,a=e.$containerEl;if(!e.opened)return e;if(t.virtualList){var r;e.vl.items.forEach(function(e,t){void 0===r&&e.selected&&(r=t)}),void 0!==r&&e.vl.scrollToItem(r)}else{var n=a.find("input:checked").parents("li"),s=a.find(".page-content");s.scrollTop(n.offset().top-s.offset().top-parseInt(s.css("padding-top"),10))}return e},t.prototype.onOpen=function(e,t){var n=this,s=n.app,o=a(t);if(n.$containerEl=o,n.openedIn=e,n.opened=!0,n.params.virtualList&&(n.vl=s.virtualList.create({el:o.find(".virtual-list"),items:n.items,renderItem:n.renderItem.bind(n),height:n.params.virtualListHeight,searchByItem:function(e,t){return!!(t.text&&t.text.toLowerCase().indexOf(e.trim().toLowerCase())>=0)}})),n.params.scrollToSelectedItem&&n.scrollToSelectedItem(),n.params.searchbar){var l=o.find(".searchbar");if("page"===e&&"ios"===s.theme&&(l=a(s.navbar.getElByPage(o)).find(".searchbar")),n.params.appendSearchbarNotFound&&("page"===e||"popup"===e)){var i=null;(i="string"==typeof n.params.appendSearchbarNotFound?a('<div class="block searchbar-not-found">'+n.params.appendSearchbarNotFound+"</div>"):"boolean"==typeof n.params.appendSearchbarNotFound?a('<div class="block searchbar-not-found">Nothing found</div>'):n.params.appendSearchbarNotFound)&&o.find(".page-content").append(i[0])}var p=r.extend({el:l,backdropEl:o.find(".searchbar-backdrop"),searchContainer:".smart-select-list-"+n.id,searchIn:".item-title"},"object"==typeof n.params.searchbar?n.params.searchbar:{});n.searchbar=s.searchbar.create(p)}n.maxLength&&n.checkMaxLength(),n.params.closeOnSelect&&n.$containerEl.find('input[type="radio"][name="'+n.inputName+'"]:checked').parents("label").once("click",function(){n.close()}),n.attachInputsEvents(),n.$el.trigger("smartselect:open"),n.emit("local::open smartSelectOpen",n)},t.prototype.onOpened=function(){this.$el.trigger("smartselect:opened"),this.emit("local::opened smartSelectOpened",this)},t.prototype.onClose=function(){var e=this;e.destroyed||(e.vl&&e.vl.destroy&&(e.vl.destroy(),e.vl=null,delete e.vl),e.searchbar&&e.searchbar.destroy&&(e.searchbar.destroy(),e.searchbar=null,delete e.searchbar),e.detachInputsEvents(),e.$el.trigger("smartselect:close"),e.emit("local::close smartSelectClose",e))},t.prototype.onClosed=function(){var e=this;e.destroyed||(e.opened=!1,e.$containerEl=null,delete e.$containerEl,e.$el.trigger("smartselect:closed"),e.emit("local::closed smartSelectClosed",e))},t.prototype.openPage=function(){var e=this;if(e.opened)return e;e.getItemsData();var t=e.renderPage(e.items);return e.getView().router.navigate({url:e.url,route:{content:t,path:e.url,on:{pageBeforeIn:function(t,a){e.onOpen("page",a.el)},pageAfterIn:function(t,a){e.onOpened("page",a.el)},pageBeforeOut:function(t,a){e.onClose("page",a.el)},pageAfterOut:function(t,a){e.onClosed("page",a.el)}}}}),e},t.prototype.openPopup=function(){var e=this;if(e.opened)return e;e.getItemsData();var t={content:e.renderPopup(e.items),push:e.params.popupPush,swipeToClose:e.params.popupSwipeToClose,on:{popupOpen:function(t){e.onOpen("popup",t.el)},popupOpened:function(t){e.onOpened("popup",t.el)},popupClose:function(t){e.onClose("popup",t.el)},popupClosed:function(t){e.onClosed("popup",t.el)}}};e.params.routableModals?e.getView().router.navigate({url:e.url,route:{path:e.url,popup:t}}):e.modal=e.app.popup.create(t).open();return e},t.prototype.openSheet=function(){var e=this;if(e.opened)return e;e.getItemsData();var t={content:e.renderSheet(e.items),backdrop:!1,scrollToEl:e.$el,closeByOutsideClick:!0,push:e.params.sheetPush,swipeToClose:e.params.sheetSwipeToClose,on:{sheetOpen:function(t){e.onOpen("sheet",t.el)},sheetOpened:function(t){e.onOpened("sheet",t.el)},sheetClose:function(t){e.onClose("sheet",t.el)},sheetClosed:function(t){e.onClosed("sheet",t.el)}}};e.params.routableModals?e.getView().router.navigate({url:e.url,route:{path:e.url,sheet:t}}):e.modal=e.app.sheet.create(t).open();return e},t.prototype.openPopover=function(){var e=this;if(e.opened)return e;e.getItemsData();var t={content:e.renderPopover(e.items),targetEl:e.$el,on:{popoverOpen:function(t){e.onOpen("popover",t.el)},popoverOpened:function(t){e.onOpened("popover",t.el)},popoverClose:function(t){e.onClose("popover",t.el)},popoverClosed:function(t){e.onClosed("popover",t.el)}}};e.params.routableModals?e.getView().router.navigate({url:e.url,route:{path:e.url,popover:t}}):e.modal=e.app.popover.create(t).open();return e},t.prototype.open=function(e){var t=this;if(t.opened)return t;var a=!1;function r(){a=!0}return t.$el&&t.$el.trigger("smartselect:beforeopen",{prevent:r}),t.emit("local::beforeOpen smartSelectBeforeOpen",t,r),a?t:(t["open"+(e||t.params.openIn).split("").map(function(e,t){return 0===t?e.toUpperCase():e}).join("")](),t)},t.prototype.close=function(){var e=this;if(!e.opened)return e;e.params.routableModals||"page"===e.openedIn?e.getView().router.back():(e.modal.once("modalClosed",function(){r.nextTick(function(){e.modal.destroy(),delete e.modal})}),e.modal.close());return e},t.prototype.init=function(){this.attachEvents(),this.setValueText()},t.prototype.destroy=function(){var e=this;e.emit("local::beforeDestroy smartSelectBeforeDestroy",e),e.$el.trigger("smartselect:beforedestroy"),e.detachEvents(),delete e.$el[0].f7SmartSelect,r.deleteProps(e),e.destroyed=!0},t}(n)),l={name:"smartSelect",params:{smartSelect:{el:void 0,valueEl:void 0,setValueText:!0,formatValueText:null,openIn:"page",popupPush:!0,popupSwipeToClose:void 0,sheetPush:!1,sheetSwipeToClose:void 0,pageTitle:void 0,pageBackLinkText:"Back",popupCloseLinkText:"Close",popupTabletFullscreen:!1,sheetCloseLinkText:"Done",searchbar:!1,searchbarPlaceholder:"Search",searchbarDisableText:"Cancel",searchbarDisableButton:void 0,closeOnSelect:!1,virtualList:!1,virtualListHeight:void 0,scrollToSelectedItem:!1,formColorTheme:void 0,navbarColorTheme:void 0,routableModals:!0,url:"select/",cssClass:"",renderPage:void 0,renderPopup:void 0,renderSheet:void 0,renderPopover:void 0,renderItems:void 0,renderItem:void 0,renderSearchbar:void 0}},static:{SmartSelect:o},create:function(){var e=this;e.smartSelect=r.extend(s({defaultSelector:".smart-select",constructor:o,app:e,domProp:"f7SmartSelect"}),{open:function(t){var a=e.smartSelect.get(t);if(a&&a.open)return a.open()},close:function(t){var a=e.smartSelect.get(t);if(a&&a.close)return a.close()}})},on:{tabMounted:function(e){var t=this;a(e).find(".smart-select-init").each(function(e,n){t.smartSelect.create(r.extend({el:n},a(n).dataset()))})},tabBeforeRemove:function(e){a(e).find(".smart-select-init").each(function(e,t){t.f7SmartSelect&&t.f7SmartSelect.destroy&&t.f7SmartSelect.destroy()})},pageInit:function(e){var t=this;e.$el.find(".smart-select-init").each(function(e,n){t.smartSelect.create(r.extend({el:n},a(n).dataset()))})},pageBeforeRemove:function(e){e.$el.find(".smart-select-init").each(function(e,t){t.f7SmartSelect&&t.f7SmartSelect.destroy&&t.f7SmartSelect.destroy()})}},clicks:{".smart-select":function(e,t){e[0].f7SmartSelect||this.smartSelect.create(r.extend({el:e},t)).open()}},vnode:{"smart-select-init":{insert:function(e){var t=e.elm;this.smartSelect.create(r.extend({el:t},a(t).dataset()))},destroy:function(e){var t=e.elm;t.f7SmartSelect&&t.f7SmartSelect.destroy&&t.f7SmartSelect.destroy()}}}};if(t){if(e.prototype.modules&&e.prototype.modules[l.name])return;e.use(l),e.instance&&(e.instance.useModuleParams(l,e.instance.params),e.instance.useModule(l))}return l}(Framework7, typeof Framework7AutoInstallComponent === 'undefined' ? undefined : Framework7AutoInstallComponent))
