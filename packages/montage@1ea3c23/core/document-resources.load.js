montageDefine("1ea3c23","core/document-resources",{dependencies:["./core","./promise","./mini-url"],factory:function(e,t){var n=e("./core").Montage,r=e("./promise").Promise,i=e("./mini-url"),a=n.specialize({_SCRIPT_TIMEOUT:{value:5e3},_document:{value:null},_resources:{value:null},_preloaded:{value:null},_expectedStyles:{value:null},constructor:{value:function a(){this.super(),this._expectedStyles=[]}},initWithDocument:{value:function(e){return this.clear(),this._document=e,this._populateWithDocument(e),this}},_populateWithDocument:{value:function(e){var t=e.querySelectorAll("script"),n=Array.prototype.forEach;n.call(t,function(e){e.src&&this._addResource(this.normalizeUrl(e.src))},this);var r=e.querySelectorAll("link");n.call(r,function(e){"stylesheet"===e.rel&&this._addResource(this.normalizeUrl(e.href))},this)}},clear:{value:function(){this._resources=Object.create(null),this._preloaded=Object.create(null)}},_addResource:{value:function(e){this._resources[e]=!0}},hasResource:{value:function(e){return e in this._resources}},isResourcePreloaded:{value:function(e){return this._preloaded[e]===!0}},isResourcePreloading:{value:function(e){return r.isPromise(this._preloaded[e])}},setResourcePreloadedPromise:{value:function(e,t){this._preloaded[e]=t}},setResourcePreloaded:{value:function(e){this._preloaded[e]=!0}},getResourcePreloadedPromise:{value:function(e){return this._preloaded[e]}},addScript:{value:function(e){var t=this.normalizeUrl(e.src);return t?this.isResourcePreloaded(t)?r.resolve():this.isResourcePreloading(t)?this.getResourcePreloadedPromise(t):this._importScript(e):this._importScript(e)}},_importScript:{value:function(e){var t,n,i=this,a=this._document,s=a.head,o=r.defer(),u=e.src;return u?(i._addResource(u),t=function(){i.setResourcePreloaded(u),e.removeEventListener("load",t),e.removeEventListener("error",t),clearTimeout(n),o.resolve()},e.addEventListener("load",t,!1),e.addEventListener("error",t,!1),n=setTimeout(function(){i.setResourcePreloaded(u),o.resolve()},this._SCRIPT_TIMEOUT),this.setResourcePreloadedPromise(u,o.promise)):o.resolve(),s.appendChild(a.createComment("Inserted from FIXME")),s.appendChild(e),o.promise}},addStyle:{value:function(e){var t,n=e.getAttribute("href");if(n){if(n=this.normalizeUrl(n),this.hasResource(n))return;this._addResource(n),this._expectedStyles.push(n)}t=this._document.head,t.insertBefore(e,t.firstChild)}},normalizeUrl:{value:function(e,t){return t||(t=this._document.location.href),i.resolve(t,e)}},domain:{value:window.location.protocol+"//"+window.location.host},isCrossDomain:{value:function(e){return 0!==e.indexOf(this.domain+"/")||0===e.indexOf("file://")}},preloadResource:{value:function(e,t){var n;return e=this.normalizeUrl(e),!t&&this.isCrossDomain(e)&&(n=!0),n||this.isResourcePreloaded(e)?r.resolve():this.isResourcePreloading(e)?this.getResourcePreloadedPromise(e):this._preloadResource(e)}},_preloadResource:{value:function(e){var t,n,i=this,a=new XMLHttpRequest,s=r.defer();return a.open("GET",e),t=function(){i.setResourcePreloaded(e),a.removeEventListener("load",t),a.removeEventListener("error",t),clearTimeout(n),s.resolve()},a.addEventListener("load",t,!1),a.addEventListener("error",t,!1),a.send(),n=setTimeout(function(){i.setResourcePreloaded(e),s.resolve()},this._SCRIPT_TIMEOUT),this.setResourcePreloadedPromise(e,s.promise),s.promise}},areStylesLoaded:{get:function(){var e,t;if(this._expectedStyles.length>0){e=this._document.styleSheets;for(var n,r=0;n=e[r];r++)t=this._expectedStyles.indexOf(n.href),t>=0&&this._expectedStyles.splice(t,1)}return 0===this._expectedStyles.length}}},{getInstanceForDocument:{value:function(e){var t=e.__montage_resources__;return t||(t=e.__montage_resources__=(new a).initWithDocument(e)),t}}});t.DocumentResources=a}});