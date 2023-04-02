"use strict";(self.webpackChunkdemo_lit_privacy_app=self.webpackChunkdemo_lit_privacy_app||[]).push([[280],{10280:function(e,t,n){n.r(t),n.d(t,{Web3Modal:function(){return _}});var r,o=n(74165),a=n(15861),i=n(15671),s=n(43144),c=n(37762),l=(n(42982),n(70885)),u=n(61631),d=n(19778),f=function(){if(r)return r;throw new Error("ClientCtrl has no client set")},v=(0,u.sj)({address:void 0,profileName:void 0,profileAvatar:void 0,profileLoading:!1,balanceLoading:!1,balance:void 0,isConnected:!1}),p={state:v,subscribe:function(e){return(0,u.Ld)(v,(function(){return e(v)}))},getAccount:function(){var e=f().getAccount();v.address=e.address,v.isConnected=e.isConnected},fetchProfile:function(e,t){return(0,a.Z)((0,o.Z)().mark((function n(){var r,a,i,s,c,u,d;return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,v.profileLoading=!0,r=null!==t&&void 0!==t?t:v.address,a=f().getDefaultChain(),i=a.id,!r||1!==i){n.next=16;break}return n.next=6,Promise.all([f().fetchEnsName({address:r,chainId:1}),f().fetchEnsAvatar({address:r,chainId:1})]);case 6:if(s=n.sent,c=(0,l.Z)(s,2),u=c[0],d=c[1],n.t0=d,!n.t0){n.next=14;break}return n.next=14,e(d);case 14:v.profileName=u,v.profileAvatar=d;case 16:return n.prev=16,v.profileLoading=!1,n.finish(16);case 19:case"end":return n.stop()}}),n,null,[[0,,16,19]])})))()},fetchBalance:function(e){return(0,a.Z)((0,o.Z)().mark((function t(){var n,r;return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,v.balanceLoading=!0,!(n=null!==e&&void 0!==e?e:v.address)){t.next=8;break}return t.next=6,f().fetchBalance({address:n});case 6:r=t.sent,v.balance={amount:r.formatted,symbol:r.symbol};case 8:return t.prev=8,v.balanceLoading=!1,t.finish(8);case 11:case"end":return t.stop()}}),t,null,[[0,,8,11]])})))()},setAddress:function(e){v.address=e},setIsConnected:function(e){v.isConnected=e},resetBalance:function(){v.balance=void 0},resetAccount:function(){v.address=void 0,v.isConnected=!1,v.profileName=void 0,v.profileAvatar=void 0,v.balance=void 0}},h={WALLETCONNECT_DEEPLINK_CHOICE:"WALLETCONNECT_DEEPLINK_CHOICE",W3M_VERSION:"W3M_VERSION",isMobile:function(){return typeof window<"u"&&!(!window.matchMedia("(pointer:coarse)").matches&&!/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/.test(navigator.userAgent))},isAndroid:function(){return h.isMobile()&&navigator.userAgent.toLowerCase().includes("android")},isEmptyObject:function(e){return Object.getPrototypeOf(e)===Object.prototype&&0===Object.getOwnPropertyNames(e).length&&0===Object.getOwnPropertySymbols(e).length},isHttpUrl:function(e){return e.startsWith("http://")||e.startsWith("https://")},formatNativeUrl:function(e,t,n){if(h.isHttpUrl(e))return this.formatUniversalUrl(e,t,n);var r=e;r.includes("://")||(r=e.replaceAll("/","").replaceAll(":",""),r="".concat(r,"://")),this.setWalletConnectDeepLink(r,n);var o=encodeURIComponent(t);return"".concat(r,"wc?uri=").concat(o)},formatUniversalUrl:function(e,t,n){if(!h.isHttpUrl(e))return this.formatNativeUrl(e,t,n);var r=e;e.endsWith("/")&&(r=e.slice(0,-1)),this.setWalletConnectDeepLink(r,n);var o=encodeURIComponent(t);return"".concat(r,"/wc?uri=").concat(o)},wait:function(e){return(0,a.Z)((0,o.Z)().mark((function t(){return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t){setTimeout(t,e)})));case 1:case"end":return t.stop()}}),t)})))()},openHref:function(e,t){window.open(e,t,"noreferrer noopener")},setWalletConnectDeepLink:function(e,t){localStorage.setItem(h.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:e,name:t}))},setWalletConnectAndroidDeepLink:function(e){var t=e.split("?"),n=(0,l.Z)(t,1)[0];localStorage.setItem(h.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:n,name:"Android"}))},removeWalletConnectDeepLink:function(){localStorage.removeItem(h.WALLETCONNECT_DEEPLINK_CHOICE)},isNull:function(e){return null===e},setWeb3ModalVersionInStorage:function(){typeof localStorage<"u"&&localStorage.setItem(h.W3M_VERSION,"2.2.2")}},b=(0,u.sj)({selectedChain:void 0,chains:void 0,standaloneChains:void 0,standaloneUri:void 0,isStandalone:!1,isCustomDesktop:!1,isCustomMobile:!1,isDataLoaded:!1,isUiLoaded:!1,walletConnectVersion:1}),w={state:b,subscribe:function(e){return(0,u.Ld)(b,(function(){return e(b)}))},setChains:function(e){b.chains=e},setStandaloneChains:function(e){b.standaloneChains=e},setStandaloneUri:function(e){b.standaloneUri=e},getSelectedChain:function(){var e=f().getNetwork().chain;return e&&(b.selectedChain=e),b.selectedChain},setSelectedChain:function(e){b.selectedChain=e},setIsStandalone:function(e){b.isStandalone=e},setIsCustomDesktop:function(e){b.isCustomDesktop=e},setIsCustomMobile:function(e){b.isCustomMobile=e},setIsDataLoaded:function(e){b.isDataLoaded=e},setIsUiLoaded:function(e){b.isUiLoaded=e},setWalletConnectVersion:function(e){b.walletConnectVersion=e}},g=(0,u.sj)({projectId:"",mobileWallets:void 0,desktopWallets:void 0,walletImages:void 0,chainImages:void 0,tokenImages:void 0,standaloneChains:void 0,enableStandaloneMode:!1,enableNetworkView:!1,enableAccountView:!0,enableExplorer:!0,defaultChain:void 0,explorerAllowList:void 0,explorerDenyList:void 0,termsOfServiceUrl:void 0,privacyPolicyUrl:void 0}),m={state:g,subscribe:function(e){return(0,u.Ld)(g,(function(){return e(g)}))},setConfig:function(e){var t,n,r,o;if(w.setStandaloneChains(e.standaloneChains),w.setIsStandalone(!(null==(t=e.standaloneChains)||!t.length)||!!e.enableStandaloneMode),w.setIsCustomMobile(!(null==(n=e.mobileWallets)||!n.length)),w.setIsCustomDesktop(!(null==(r=e.desktopWallets)||!r.length)),w.setWalletConnectVersion(null!=(o=e.walletConnectVersion)?o:1),!w.state.isStandalone){var a=f().getDefaultChain();w.setSelectedChain(a),w.setChains(f().chains)}e.defaultChain&&w.setSelectedChain(e.defaultChain),h.setWeb3ModalVersionInStorage(),Object.assign(g,e)}};(0,u.sj)({wallets:{listings:[],total:0,page:1},search:{listings:[],total:0,page:1},previewWallets:[],recomendedWallets:[]});var C=(0,u.sj)({history:["ConnectWallet"],view:"ConnectWallet",data:void 0}),y=function(e){C.view=e,C.history=[e]},O=(0,u.sj)({open:!1}),E=function(e){return(0,u.Ld)(O,(function(){return e(O)}))},L=function(e){return(0,a.Z)((0,o.Z)().mark((function t(){return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t){var n=w.state,r=n.isStandalone,o=n.isUiLoaded,a=n.isDataLoaded,i=p.state.isConnected,s=m.state.enableNetworkView;if(r?(w.setStandaloneUri(null===e||void 0===e?void 0:e.uri),w.setStandaloneChains(null===e||void 0===e?void 0:e.standaloneChains),y("ConnectWallet")):null!=e&&e.route?y(e.route):y(i?"Account":s?"SelectNetwork":"ConnectWallet"),o&&a)O.open=!0,t();else var c=setInterval((function(){w.state.isUiLoaded&&w.state.isDataLoaded&&(clearInterval(c),O.open=!0,t())}),200)})));case 1:case"end":return t.stop()}}),t)})))()},S=function(){O.open=!1},j=Object.defineProperty,I=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable,P=function(e,t,n){return t in e?j(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n};var A=(0,u.sj)({themeMode:typeof matchMedia<"u"&&matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}),N=function(e){var t=e.themeMode,n=e.themeVariables;t&&(A.themeMode=t),n&&(A.themeVariables=function(e,t){for(var n in t||(t={}))k.call(t,n)&&P(e,n,t[n]);if(I){var r,o=(0,c.Z)(I(t));try{for(o.s();!(r=o.n()).done;)n=r.value,W.call(t,n)&&P(e,n,t[n])}catch(a){o.e(a)}finally{o.f()}}return e}({},n))};(0,u.sj)({open:!1,message:"",variant:"success"});typeof window<"u"&&(window.Buffer||(window.Buffer=d.Buffer),window.global||(window.global=window),window.process||(window.process={env:{}}));var M=Object.defineProperty,Z=Object.getOwnPropertySymbols,D=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable,x=function(e,t,n){return t in e?M(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},_=function(){function e(t){(0,i.Z)(this,e),this.openModal=L,this.closeModal=S,this.subscribeModal=E,this.setTheme=N,N(t),m.setConfig(function(e,t){for(var n in t||(t={}))D.call(t,n)&&x(e,n,t[n]);if(Z){var r,o=(0,c.Z)(Z(t));try{for(o.s();!(r=o.n()).done;)n=r.value,U.call(t,n)&&x(e,n,t[n])}catch(a){o.e(a)}finally{o.f()}}return e}({enableStandaloneMode:!0},t)),this.initUi()}return(0,s.Z)(e,[{key:"initUi",value:function(){var e=(0,a.Z)((0,o.Z)().mark((function e(){var t;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(typeof window<"u")){e.next=5;break}return e.next=3,n.e(938).then(n.bind(n,65938));case 3:t=document.createElement("w3m-modal"),document.body.insertAdjacentElement("beforeend",t),w.setIsUiLoaded(!0);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}]),e}()},61631:function(e,t,n){n.d(t,{sj:function(){return b},Ld:function(){return w}});var r=n(42982),o=n(70885),a=(Symbol(),Symbol()),i=Object.getPrototypeOf,s=new WeakMap,c=function(e){return e&&(s.has(e)?s.get(e):i(e)===Object.prototype||i(e)===Array.prototype)},l=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];s.set(e,t)},u=function(e){return"object"===typeof e&&null!==e},d=new WeakMap,f=new WeakSet,v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Object.is,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(e,t){return new Proxy(e,t)},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(e){return u(e)&&!f.has(e)&&(Array.isArray(e)||!(Symbol.iterator in e))&&!(e instanceof WeakMap)&&!(e instanceof WeakSet)&&!(e instanceof Error)&&!(e instanceof Number)&&!(e instanceof Date)&&!(e instanceof String)&&!(e instanceof RegExp)&&!(e instanceof ArrayBuffer)},i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:throw e}},s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:new WeakMap,v=arguments.length>5&&void 0!==arguments[5]?arguments[5]:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:i,r=s.get(e);if((null==r?void 0:r[0])===t)return r[1];var a=Array.isArray(e)?[]:Object.create(Object.getPrototypeOf(e));return l(a,!0),s.set(e,[t,a]),Reflect.ownKeys(e).forEach((function(t){if(!Object.getOwnPropertyDescriptor(a,t)){var r=Reflect.get(e,t),i={value:r,enumerable:!0,configurable:!0};if(f.has(r))l(r,!1);else if(r instanceof Promise)delete i.value,i.get=function(){return n(r)};else if(d.has(r)){var s=d.get(r),c=(0,o.Z)(s,2),u=c[0],p=c[1];i.value=v(u,p(),n)}Object.defineProperty(a,t,i)}})),a},p=arguments.length>6&&void 0!==arguments[6]?arguments[6]:new WeakMap,h=arguments.length>7&&void 0!==arguments[7]?arguments[7]:[1,1],b=arguments.length>8&&void 0!==arguments[8]?arguments[8]:function(i){if(!u(i))throw new Error("object required");var s=p.get(i);if(s)return s;var l=h[0],w=new Set,g=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:++h[0];l!==t&&(l=t,w.forEach((function(n){return n(e,t)})))},m=h[1],C=function(e){return function(t,n){var o=(0,r.Z)(t);o[1]=[e].concat((0,r.Z)(o[1])),g(o,n)}},y=new Map,O=function(e){var t,n=y.get(e);n&&(y.delete(e),null==(t=n[1])||t.call(n))},E=Array.isArray(i)?[]:Object.create(Object.getPrototypeOf(i)),L={deleteProperty:function(e,t){var n=Reflect.get(e,t);O(t);var r=Reflect.deleteProperty(e,t);return r&&g(["delete",[t],n]),r},set:function(t,r,o,i){var s=Reflect.has(t,r),l=Reflect.get(t,r,i);if(s&&(e(l,o)||p.has(o)&&e(l,p.get(o))))return!0;O(r),u(o)&&(o=function(e){return c(e)&&e[a]||null}(o)||o);var v=o;if(o instanceof Promise)o.then((function(e){o.status="fulfilled",o.value=e,g(["resolve",[r],e])})).catch((function(e){o.status="rejected",o.reason=e,g(["reject",[r],e])}));else{!d.has(o)&&n(o)&&(v=b(o));var h=!f.has(v)&&d.get(v);h&&function(e,t){if(y.has(e))throw new Error("prop listener already exists");if(w.size){var n=t[3](C(e));y.set(e,[t,n])}else y.set(e,[t])}(r,h)}return Reflect.set(t,r,v,i),g(["set",[r],o,l]),!0}},S=t(E,L);p.set(i,S);var j=[E,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:++h[1];return m===e||w.size||(m=e,y.forEach((function(t){var n=(0,o.Z)(t,1)[0][1](e);n>l&&(l=n)}))),l},v,function(e){w.add(e),1===w.size&&y.forEach((function(e,t){var n=(0,o.Z)(e,2),r=n[0];if(n[1])throw new Error("remove already exists");var a=r[3](C(t));y.set(t,[r,a])}));return function(){w.delete(e),0===w.size&&y.forEach((function(e,t){var n=(0,o.Z)(e,2),r=n[0],a=n[1];a&&(a(),y.set(t,[r]))}))}}];return d.set(S,j),Reflect.ownKeys(i).forEach((function(e){var t=Object.getOwnPropertyDescriptor(i,e);"value"in t&&(S[e]=i[e],delete t.value,delete t.writable),Object.defineProperty(E,e,t)})),S};return[b,d,f,e,t,n,i,s,v,p,h]},p=v(),h=(0,o.Z)(p,1)[0];function b(){return h(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{})}function w(e,t,n){var r,o=d.get(e);o||console.warn("Please use proxy object");var a=[],i=o[3],s=!1,c=i((function(e){a.push(e),n?t(a.splice(0)):r||(r=Promise.resolve().then((function(){r=void 0,s&&t(a.splice(0))})))}));return s=!0,function(){s=!1,c()}}}}]);
//# sourceMappingURL=280.7dbdefdc.chunk.js.map