!function(e){var t,i,n,o,a,r,s,l=function(){},c=!!window.jQuery,p=e(window),d=function(e,i){t.ev.on("mfp"+e+".mfp",i)},u=function(t,i,n,o){var a=document.createElement("div");return a.className="mfp-"+t,n&&(a.innerHTML=n),o?i&&i.appendChild(a):(a=e(a),i&&a.appendTo(i)),a},f=function(i,n){t.ev.triggerHandler("mfp"+i,n),t.st.callbacks&&(i=i.charAt(0).toLowerCase()+i.slice(1),t.st.callbacks[i]&&t.st.callbacks[i].apply(t,e.isArray(n)?n:[n]))},m=function(i){return i===s&&t.currTemplate.closeBtn||(t.currTemplate.closeBtn=e(t.st.closeMarkup.replace("%title%",t.st.tClose)),s=i),t.currTemplate.closeBtn},g=function(){e.magnificPopup.instance||((t=new l).init(),e.magnificPopup.instance=t)};l.prototype={constructor:l,init:function(){var i=navigator.appVersion;t.isIE7=-1!==i.indexOf("MSIE 7."),t.isIE8=-1!==i.indexOf("MSIE 8."),t.isLowIE=t.isIE7||t.isIE8,t.isAndroid=/android/gi.test(i),t.isIOS=/iphone|ipad|ipod/gi.test(i),t.supportsTransition=function(){var e=document.createElement("p").style,t=["ms","O","Moz","Webkit"];if(void 0!==e.transition)return!0;for(;t.length;)if(t.pop()+"Transition"in e)return!0;return!1}(),t.probablyMobile=t.isAndroid||t.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),n=e(document.body),o=e(document),t.popupsCache={}},open:function(i){var n;if(!1===i.isObj){t.items=i.items.toArray(),t.index=0;var a,s=i.items;for(n=0;n<s.length;n++)if((a=s[n]).parsed&&(a=a.el[0]),a===i.el[0]){t.index=n;break}}else t.items=e.isArray(i.items)?i.items:[i.items],t.index=i.index||0;if(!t.isOpen){t.types=[],r="",i.mainEl&&i.mainEl.length?t.ev=i.mainEl.eq(0):t.ev=o,i.key?(t.popupsCache[i.key]||(t.popupsCache[i.key]={}),t.currTemplate=t.popupsCache[i.key]):t.currTemplate={},t.st=e.extend(!0,{},e.magnificPopup.defaults,i),t.fixedContentPos="auto"===t.st.fixedContentPos?!t.probablyMobile:t.st.fixedContentPos,t.st.modal&&(t.st.closeOnContentClick=!1,t.st.closeOnBgClick=!1,t.st.showCloseBtn=!1,t.st.enableEscapeKey=!1),t.bgOverlay||(t.bgOverlay=u("bg").on("click.mfp",function(){t.close()}),t.wrap=u("wrap").attr("tabindex",-1).on("click.mfp",function(e){t._checkIfClose(e.target)&&t.close()}),t.container=u("container",t.wrap)),t.contentContainer=u("content"),t.st.preloader&&(t.preloader=u("preloader",t.container,t.st.tLoading));var l=e.magnificPopup.modules;for(n=0;n<l.length;n++){var c=l[n];c=c.charAt(0).toUpperCase()+c.slice(1),t["init"+c].call(t)}f("BeforeOpen"),t.st.showCloseBtn&&(t.st.closeBtnInside?(d("MarkupParse",function(e,t,i,n){i.close_replaceWith=m(n.type)}),r+=" mfp-close-btn-in"):t.wrap.append(m())),t.st.alignTop&&(r+=" mfp-align-top"),t.fixedContentPos?t.wrap.css({overflow:t.st.overflowY,overflowX:"hidden",overflowY:t.st.overflowY}):t.wrap.css({top:p.scrollTop(),position:"absolute"}),(!1===t.st.fixedBgPos||"auto"===t.st.fixedBgPos&&!t.fixedContentPos)&&t.bgOverlay.css({height:o.height(),position:"absolute"}),t.st.enableEscapeKey&&o.on("keyup.mfp",function(e){27===e.keyCode&&t.close()}),p.on("resize.mfp",function(){t.updateSize()}),t.st.closeOnContentClick||(r+=" mfp-auto-cursor"),r&&t.wrap.addClass(r);var g=t.wH=p.height(),h={};if(t.fixedContentPos&&t._hasScrollBar(g)){var v=t._getScrollbarSize();v&&(h.marginRight=v)}t.fixedContentPos&&(t.isIE7?e("body, html").css("overflow","hidden"):h.overflow="hidden");var C=t.st.mainClass;return t.isIE7&&(C+=" mfp-ie7"),C&&t._addClassToMFP(C),t.updateItemHTML(),f("BuildControls"),e("html").css(h),t.bgOverlay.add(t.wrap).prependTo(document.body),t._lastFocusedEl=document.activeElement,setTimeout(function(){t.content?(t._addClassToMFP("mfp-ready"),t._setFocus()):t.bgOverlay.addClass("mfp-ready"),o.on("focusin.mfp",t._onFocusIn)},16),t.isOpen=!0,t.updateSize(g),f("Open"),i}t.updateItemHTML()},close:function(){t.isOpen&&(f("BeforeClose"),t.isOpen=!1,t.st.removalDelay&&!t.isLowIE&&t.supportsTransition?(t._addClassToMFP("mfp-removing"),setTimeout(function(){t._close()},t.st.removalDelay)):t._close())},_close:function(){f("Close");var i="mfp-removing mfp-ready ";if(t.bgOverlay.detach(),t.wrap.detach(),t.container.empty(),t.st.mainClass&&(i+=t.st.mainClass+" "),t._removeClassFromMFP(i),t.fixedContentPos){var n={marginRight:""};t.isIE7?e("body, html").css("overflow",""):n.overflow="",e("html").css(n)}o.off("keyup.mfp focusin.mfp"),t.ev.off(".mfp"),t.wrap.attr("class","mfp-wrap").removeAttr("style"),t.bgOverlay.attr("class","mfp-bg"),t.container.attr("class","mfp-container"),!t.st.showCloseBtn||t.st.closeBtnInside&&!0!==t.currTemplate[t.currItem.type]||t.currTemplate.closeBtn&&t.currTemplate.closeBtn.detach(),t._lastFocusedEl&&e(t._lastFocusedEl).focus(),t.currItem=null,t.content=null,t.currTemplate=null,t.prevHeight=0,f("AfterClose")},updateSize:function(e){if(t.isIOS){var i=document.documentElement.clientWidth/window.innerWidth,n=window.innerHeight*i;t.wrap.css("height",n),t.wH=n}else t.wH=e||p.height();t.fixedContentPos||t.wrap.css("height",t.wH),f("Resize")},updateItemHTML:function(){var i=t.items[t.index];t.contentContainer.detach(),t.content&&t.content.detach(),i.parsed||(i=t.parseEl(t.index));var n=i.type;if(f("BeforeChange",[t.currItem?t.currItem.type:"",n]),t.currItem=i,!t.currTemplate[n]){var o=!!t.st[n]&&t.st[n].markup;f("FirstMarkupParse",o),t.currTemplate[n]=!o||e(o)}a&&a!==i.type&&t.container.removeClass("mfp-"+a+"-holder");var r=t["get"+n.charAt(0).toUpperCase()+n.slice(1)](i,t.currTemplate[n]);t.appendContent(r,n),i.preloaded=!0,f("Change",i),a=i.type,t.container.prepend(t.contentContainer),f("AfterChange")},appendContent:function(e,i){t.content=e,e?t.st.showCloseBtn&&t.st.closeBtnInside&&!0===t.currTemplate[i]?t.content.find(".mfp-close").length||t.content.append(m()):t.content=e:t.content="",f("BeforeAppend"),t.container.addClass("mfp-"+i+"-holder"),t.contentContainer.append(t.content)},parseEl:function(i){var n=t.items[i],o=n.type;if((n=n.tagName?{el:e(n)}:{data:n,src:n.src}).el){for(var a=t.types,r=0;r<a.length;r++)if(n.el.hasClass("mfp-"+a[r])){o=a[r];break}n.src=n.el.attr("data-mfp-src"),n.src||(n.src=n.el.attr("href"))}return n.type=o||t.st.type||"inline",n.index=i,n.parsed=!0,t.items[i]=n,f("ElementParse",n),t.items[i]},addGroup:function(e,i){var n=function(n){n.mfpEl=this,t._openClick(n,e,i)};i||(i={});var o="click.magnificPopup";i.mainEl=e,i.items?(i.isObj=!0,e.off(o).on(o,n)):(i.isObj=!1,i.delegate?e.off(o).on(o,i.delegate,n):(i.items=e,e.off(o).on(o,n)))},_openClick:function(i,n,o){if((void 0!==o.midClick?o.midClick:e.magnificPopup.defaults.midClick)||2!==i.which&&!i.ctrlKey&&!i.metaKey){var a=void 0!==o.disableOn?o.disableOn:e.magnificPopup.defaults.disableOn;if(a)if(e.isFunction(a)){if(!a.call(t))return!0}else if(p.width()<a)return!0;i.type&&(i.preventDefault(),t.isOpen&&i.stopPropagation()),o.el=e(i.mfpEl),o.delegate&&(o.items=n.find(o.delegate)),t.open(o)}},updateStatus:function(e,n){if(t.preloader){i!==e&&t.container.removeClass("mfp-s-"+i),n||"loading"!==e||(n=t.st.tLoading);var o={status:e,text:n};f("UpdateStatus",o),e=o.status,n=o.text,t.preloader.html(n),t.preloader.find("a").on("click",function(e){e.stopImmediatePropagation()}),t.container.addClass("mfp-s-"+e),i=e}},_checkIfClose:function(i){if(!e(i).hasClass("mfp-prevent-close")){var n=t.st.closeOnContentClick,o=t.st.closeOnBgClick;if(n&&o)return!0;if(!t.content||e(i).hasClass("mfp-close")||t.preloader&&i===t.preloader[0])return!0;if(i===t.content[0]||e.contains(t.content[0],i)){if(n)return!0}else if(o&&e.contains(document,i))return!0;return!1}},_addClassToMFP:function(e){t.bgOverlay.addClass(e),t.wrap.addClass(e)},_removeClassFromMFP:function(e){this.bgOverlay.removeClass(e),t.wrap.removeClass(e)},_hasScrollBar:function(e){return(t.isIE7?o.height():document.body.scrollHeight)>(e||p.height())},_setFocus:function(){(t.st.focus?t.content.find(t.st.focus).eq(0):t.wrap).focus()},_onFocusIn:function(i){if(i.target!==t.wrap[0]&&!e.contains(t.wrap[0],i.target))return t._setFocus(),!1},_parseMarkup:function(t,i,n){var o;n.data&&(i=e.extend(n.data,i)),f("MarkupParse",[t,i,n]),e.each(i,function(e,i){if(void 0===i||!1===i)return!0;if((o=e.split("_")).length>1){var n=t.find(".mfp-"+o[0]);if(n.length>0){var a=o[1];"replaceWith"===a?n[0]!==i[0]&&n.replaceWith(i):"img"===a?n.is("img")?n.attr("src",i):n.replaceWith('<img src="'+i+'" class="'+n.attr("class")+'" />'):n.attr(o[1],i)}}else t.find(".mfp-"+e).html(i)})},_getScrollbarSize:function(){if(void 0===t.scrollbarSize){var e=document.createElement("div");e.id="mfp-sbm",e.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(e),t.scrollbarSize=e.offsetWidth-e.clientWidth,document.body.removeChild(e)}return t.scrollbarSize}},e.magnificPopup={instance:null,proto:l.prototype,modules:[],open:function(t,i){return g(),(t=t?e.extend(!0,{},t):{}).isObj=!0,t.index=i||0,this.instance.open(t)},close:function(){return e.magnificPopup.instance&&e.magnificPopup.instance.close()},registerModule:function(t,i){i.options&&(e.magnificPopup.defaults[t]=i.options),e.extend(this.proto,i.proto),this.modules.push(t)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&times;</button>',tClose:"Close (Esc)",tLoading:"Loading..."}},e.fn.magnificPopup=function(i){g();var n=e(this);if("string"==typeof i)if("open"===i){var o,a=c?n.data("magnificPopup"):n[0].magnificPopup,r=parseInt(arguments[1],10)||0;a.items?o=a.items[r]:(o=n,a.delegate&&(o=o.find(a.delegate)),o=o.eq(r)),t._openClick({mfpEl:o},n,a)}else t.isOpen&&t[i].apply(t,Array.prototype.slice.call(arguments,1));else i=e.extend(!0,{},i),c?n.data("magnificPopup",i):n[0].magnificPopup=i,t.addGroup(n,i);return n};var h,v,C,y=function(){C&&(v.after(C.addClass(h)).detach(),C=null)};e.magnificPopup.registerModule("inline",{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){t.types.push("inline"),d("Close.inline",function(){y()})},getInline:function(i,n){if(y(),i.src){var o=t.st.inline,a=e(i.src);if(a.length){var r=a[0].parentNode;r&&r.tagName&&(v||(h=o.hiddenClass,v=u(h),h="mfp-"+h),C=a.after(v).detach().removeClass(h)),t.updateStatus("ready")}else t.updateStatus("error",o.tNotFound),a=e("<div>");return i.inlineElement=a,a}return t.updateStatus("ready"),t._parseMarkup(n,{},i),n}}});var w,b=function(){w&&n.removeClass(w)},I=function(){b(),t.req&&t.req.abort()};e.magnificPopup.registerModule("ajax",{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){t.types.push("ajax"),w=t.st.ajax.cursor,d("Close.ajax",I),d("BeforeChange.ajax",I)},getAjax:function(i){w&&n.addClass(w),t.updateStatus("loading");var o=e.extend({url:i.src,success:function(n,o,a){var r={data:n,xhr:a};f("ParseAjax",r),t.appendContent(e(r.data),"ajax"),i.finished=!0,b(),t._setFocus(),setTimeout(function(){t.wrap.addClass("mfp-ready")},16),t.updateStatus("ready"),f("AjaxContentAdded")},error:function(){b(),i.finished=i.loadError=!0,t.updateStatus("error",t.st.ajax.tError.replace("%url%",i.src))}},t.st.ajax.settings);return t.req=e.ajax(o),""}}});var x,k=function(i){if(i.data&&void 0!==i.data.title)return i.data.title;var n=t.st.image.titleSrc;if(n){if(e.isFunction(n))return n.call(t,i);if(i.el)return i.el.attr(n)||""}return""};e.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var e=t.st.image,i=".image";t.types.push("image"),d("Open"+i,function(){"image"===t.currItem.type&&e.cursor&&n.addClass(e.cursor)}),d("Close"+i,function(){e.cursor&&n.removeClass(e.cursor),p.off("resize.mfp")}),d("Resize"+i,t.resizeImage),t.isLowIE&&d("AfterChange",t.resizeImage)},resizeImage:function(){var e=t.currItem;if(e&&e.img&&t.st.image.verticalFit){var i=0;t.isLowIE&&(i=parseInt(e.img.css("padding-top"),10)+parseInt(e.img.css("padding-bottom"),10)),e.img.css("max-height",t.wH-i)}},_onImageHasSize:function(e){e.img&&(e.hasSize=!0,x&&clearInterval(x),e.isCheckingImgSize=!1,f("ImageHasSize",e),e.imgHidden&&(t.content&&t.content.removeClass("mfp-loading"),e.imgHidden=!1))},findImageSize:function(e){var i=0,n=e.img[0],o=function(a){x&&clearInterval(x),x=setInterval(function(){n.naturalWidth>0?t._onImageHasSize(e):(i>200&&clearInterval(x),3===++i?o(10):40===i?o(50):100===i&&o(500))},a)};o(1)},getImage:function(i,n){var o=0,a=function(){i&&(i.img[0].complete?(i.img.off(".mfploader"),i===t.currItem&&(t._onImageHasSize(i),t.updateStatus("ready")),i.hasSize=!0,i.loaded=!0,f("ImageLoadComplete")):++o<200?setTimeout(a,100):r())},r=function(){i&&(i.img.off(".mfploader"),i===t.currItem&&(t._onImageHasSize(i),t.updateStatus("error",s.tError.replace("%url%",i.src))),i.hasSize=!0,i.loaded=!0,i.loadError=!0)},s=t.st.image,l=n.find(".mfp-img");if(l.length){var c=document.createElement("img");c.className="mfp-img",i.img=e(c).on("load.mfploader",a).on("error.mfploader",r),c.src=i.src,l.is("img")&&(i.img=i.img.clone()),i.img[0].naturalWidth>0&&(i.hasSize=!0)}return t._parseMarkup(n,{title:k(i),img_replaceWith:i.img},i),t.resizeImage(),i.hasSize?(x&&clearInterval(x),i.loadError?(n.addClass("mfp-loading"),t.updateStatus("error",s.tError.replace("%url%",i.src))):(n.removeClass("mfp-loading"),t.updateStatus("ready")),n):(t.updateStatus("loading"),i.loading=!0,i.hasSize||(i.imgHidden=!0,n.addClass("mfp-loading"),t.findImageSize(i)),n)}}});var T;e.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(e){return e.is("img")?e:e.find("img")}},proto:{initZoom:function(){var e,i=t.st.zoom,n=".zoom";if(i.enabled&&t.supportsTransition){var o,a,r=i.duration,s=function(e){var t=e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),n="all "+i.duration/1e3+"s "+i.easing,o={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},a="transition";return o["-webkit-"+a]=o["-moz-"+a]=o["-o-"+a]=o[a]=n,t.css(o),t},l=function(){t.content.css("visibility","visible")};d("BuildControls"+n,function(){if(t._allowZoom()){if(clearTimeout(o),t.content.css("visibility","hidden"),!(e=t._getItemToZoom()))return void l();(a=s(e)).css(t._getOffset()),t.wrap.append(a),o=setTimeout(function(){a.css(t._getOffset(!0)),o=setTimeout(function(){l(),setTimeout(function(){a.remove(),e=a=null,f("ZoomAnimationEnded")},16)},r)},16)}}),d("BeforeClose"+n,function(){if(t._allowZoom()){if(clearTimeout(o),t.st.removalDelay=r,!e){if(!(e=t._getItemToZoom()))return;a=s(e)}a.css(t._getOffset(!0)),t.wrap.append(a),t.content.css("visibility","hidden"),setTimeout(function(){a.css(t._getOffset())},16)}}),d("Close"+n,function(){t._allowZoom()&&(l(),a&&a.remove(),e=null)})}},_allowZoom:function(){return"image"===t.currItem.type},_getItemToZoom:function(){return!!t.currItem.hasSize&&t.currItem.img},_getOffset:function(i){var n,o=(n=i?t.currItem.img:t.st.zoom.opener(t.currItem.el||t.currItem)).offset(),a=parseInt(n.css("padding-top"),10),r=parseInt(n.css("padding-bottom"),10);o.top-=e(window).scrollTop()-a;var s={width:n.width(),height:(c?n.innerHeight():n[0].offsetHeight)-r-a};return void 0===T&&(T=void 0!==document.createElement("p").style.MozTransform),T?s["-moz-transform"]=s.transform="translate("+o.left+"px,"+o.top+"px)":(s.left=o.left,s.top=o.top),s}}});var E=function(e){if(t.currTemplate.iframe){var i=t.currTemplate.iframe.find("iframe");i.length&&(e||(i[0].src="//about:blank"),t.isIE8&&i.css("display",e?"block":"none"))}};e.magnificPopup.registerModule("iframe",{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){t.types.push("iframe"),d("BeforeChange",function(e,t,i){t!==i&&("iframe"===t?E():"iframe"===i&&E(!0))}),d("Close.iframe",function(){E()})},getIframe:function(i,n){var o=i.src,a=t.st.iframe;e.each(a.patterns,function(){if(o.indexOf(this.index)>-1)return this.id&&(o="string"==typeof this.id?o.substr(o.lastIndexOf(this.id)+this.id.length,o.length):this.id.call(this,o)),o=this.src.replace("%id%",o),!1});var r={};return a.srcAction&&(r[a.srcAction]=o),t._parseMarkup(n,r,i),t.updateStatus("ready"),n}}});var _=function(e){var i=t.items.length;return e>i-1?e-i:e<0?i+e:e},P=function(e,t,i){return e.replace(/%curr%/gi,t+1).replace(/%total%/gi,i)};e.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var i=t.st.gallery,n=".mfp-gallery",a=Boolean(e.fn.mfpFastClick);if(t.direction=!0,!i||!i.enabled)return!1;r+=" mfp-gallery",d("Open"+n,function(){i.navigateByImgClick&&t.wrap.on("click"+n,".mfp-img",function(){if(t.items.length>1)return t.next(),!1}),o.on("keydown"+n,function(e){37===e.keyCode?t.prev():39===e.keyCode&&t.next()})}),d("UpdateStatus"+n,function(e,i){i.text&&(i.text=P(i.text,t.currItem.index,t.items.length))}),d("MarkupParse"+n,function(e,n,o,a){var r=t.items.length;o.counter=r>1?P(i.tCounter,a.index,r):""}),d("BuildControls"+n,function(){if(t.items.length>1&&i.arrows&&!t.arrowLeft){var n=i.arrowMarkup,o=t.arrowLeft=e(n.replace(/%title%/gi,i.tPrev).replace(/%dir%/gi,"left")).addClass("mfp-prevent-close"),r=t.arrowRight=e(n.replace(/%title%/gi,i.tNext).replace(/%dir%/gi,"right")).addClass("mfp-prevent-close"),s=a?"mfpFastClick":"click";o[s](function(){t.prev()}),r[s](function(){t.next()}),t.isIE7&&(u("b",o[0],!1,!0),u("a",o[0],!1,!0),u("b",r[0],!1,!0),u("a",r[0],!1,!0)),t.container.append(o.add(r))}}),d("Change"+n,function(){t._preloadTimeout&&clearTimeout(t._preloadTimeout),t._preloadTimeout=setTimeout(function(){t.preloadNearbyImages(),t._preloadTimeout=null},16)}),d("Close"+n,function(){o.off(n),t.wrap.off("click"+n),t.arrowLeft&&a&&t.arrowLeft.add(t.arrowRight).destroyMfpFastClick(),t.arrowRight=t.arrowLeft=null})},next:function(){t.direction=!0,t.index=_(t.index+1),t.updateItemHTML()},prev:function(){t.direction=!1,t.index=_(t.index-1),t.updateItemHTML()},goTo:function(e){t.direction=e>=t.index,t.index=e,t.updateItemHTML()},preloadNearbyImages:function(){var e,i=t.st.gallery.preload,n=Math.min(i[0],t.items.length),o=Math.min(i[1],t.items.length);for(e=1;e<=(t.direction?o:n);e++)t._preloadItem(t.index+e);for(e=1;e<=(t.direction?n:o);e++)t._preloadItem(t.index-e)},_preloadItem:function(i){if(i=_(i),!t.items[i].preloaded){var n=t.items[i];n.parsed||(n=t.parseEl(i)),f("LazyLoad",n),"image"===n.type&&(n.img=e('<img class="mfp-img" />').on("load.mfploader",function(){n.hasSize=!0}).on("error.mfploader",function(){n.hasSize=!0,n.loadError=!0,f("LazyLoadError",n)}).attr("src",n.src)),n.preloaded=!0}}}});var S,O,M;e.magnificPopup.registerModule("retina",{options:{replaceSrc:function(e){return e.src.replace(/\.\w+$/,function(e){return"@2x"+e})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var e=t.st.retina,i=e.ratio;(i=isNaN(i)?i():i)>1&&(d("ImageHasSize.retina",function(e,t){t.img.css({"max-width":t.img[0].naturalWidth/i,width:"100%"})}),d("ElementParse.retina",function(t,n){n.src=e.replaceSrc(n,i)}))}}}}),S="ontouchstart"in window,O=function(){p.off("touchmove"+M+" touchend"+M)},M=".mfpFastClick",e.fn.mfpFastClick=function(t){return e(this).each(function(){var i,n,o,a,r,s,l,c=e(this);S&&c.on("touchstart"+M,function(e){r=!1,l=1,s=e.originalEvent?e.originalEvent.touches[0]:e.touches[0],o=s.clientX,a=s.clientY,p.on("touchmove"+M,function(e){s=e.originalEvent?e.originalEvent.touches:e.touches,l=s.length,s=s[0],(Math.abs(s.clientX-o)>10||Math.abs(s.clientY-a)>10)&&(r=!0,O())}).on("touchend"+M,function(e){O(),r||l>1||(i=!0,e.preventDefault(),clearTimeout(n),n=setTimeout(function(){i=!1},1e3),t())})}),c.on("click"+M,function(){i||t()})})},e.fn.destroyMfpFastClick=function(){e(this).off("touchstart"+M+" click"+M),S&&p.off("touchmove"+M+" touchend"+M)},g()}(window.jQuery||window.Zepto);
