// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"84Rv8":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "7dd44675b7a05eb9";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"jeorp":[function(require,module,exports) {
var _header = require("./component/header");
var _todoItem = require("./component/todo-item");
var _form = require("./component/form");
var _state = require("./state");
var _inicio = require("./page/inicio");
(function() {
    const root = document.querySelector("#root");
    //console.log(root);
    (0, _state.state).init();
    (0, _inicio.initHome)(root);
})();

},{"./component/header":"bsv6P","./component/todo-item":"cjxyZ","./component/form":"diFdK","./state":"1Yeju","./page/inicio":"03r3z"}],"bsv6P":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Headre", ()=>Headre);
class Headre extends HTMLElement {
    constructor(){
        super();
        this.shadow = this.attachShadow({
            mode: "open"
        });
        this.render();
    }
    render() {
        this.shadow.innerHTML = `
              <header class="header">
                  <h1 class="header__title">Lista de tareas</h1>
              </header>
              `;
        const style = document.createElement("style");
        style.innerHTML = `
              .header {
                
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  height: 60px ;
                  width: 100%;
                  background: #FF8282;
                }
                @media (min-width: 960px) {
                  .header {
                    height: 80px;
                  }
                }

              .header__title {
                  font-size: 18px;
                  font-family: "Roboto";
                  font-weight: 500;
              }
              `;
        this.shadow.appendChild(style);
    }
}
customElements.define("custon-header", Headre);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"cjxyZ":[function(require,module,exports) {
var _state = require("../../state");
const deleteImg = require("186615a05a855ac8");
customElements.define("custon-todo-item", class extends HTMLElement {
    checked = false;
    constructor(){
        super();
        this.shadow = this.attachShadow({
            mode: "open"
        });
    }
    connectedCallback() {
        this.title = this.getAttribute("title") || "";
        this.id = this.getAttribute("id") || "";
        this.checked = this.hasAttribute("checked");
        // console.log(this.checked, "soy el checked");
        const style = document.createElement("style");
        style.innerHTML = `
      .root {
        display: flex;
        justify-content: space-evenly;
        gap: 2rem;
        width:311px;
        height:111px;
        font-weight: 500;
        border-radius: 4px;
        background-color: #fff599;
        padding: 22px 13px;
        margin: 10px;
        font-size: 18px;
        }
        @media (min-width: 960px) {
          .root {
        padding:0;
        margin: 0;
        
          }

        }




        .root_checked {
          display: flex;
          flex-direction: column;
          justify-content: space-Evenly;
          align-items: center;
        }
          
      .titulo {
        font-family: 'Roboto', sans-serif;
        font-weight: 00;
        color: #000000;
        text-align: center;
        font-size: 18px;
        

      }

      .titulo.checked {
        text-decoration: line-through;
      } 
      
      .root:hover .deleteTag {
      display: block;; 
      }
       .deleteTag {
          display: none;
        }

       
       `;
        this.render();
        this.shadow.appendChild(style);
    }
    addCallback() {
        const checkbox = this.shadow.querySelector(".checkbox-input");
        checkbox.addEventListener("click", (e)=>{
            const checked = e.target;
            const event = new CustomEvent("change", {
                detail: {
                    id: this.id,
                    value: checked.checked
                }
            });
            this.dispatchEvent(event);
        // console.log(checked.checked, "soy el checkbox");
        });
    }
    render() {
        const div = document.createElement("div");
        div.classList.add("root");
        div.innerHTML = `
      
      <h4 class = "titulo ${this.checked ? "checked" : ""}">
      ${this.title}
      </h4>
      
      <div class = "root_checked"> 
       <input  class= "checkbox-input"  type="checkbox"
        ${this.checked ? "checked" : ""}/>

        <a class = "deleteTag" href = "#" ><img src ="${deleteImg}" alt= "Delete" ></a>
        
        
      </div >`;
        const deleteTag = div.querySelector(".deleteTag");
        deleteTag?.addEventListener("click", (e)=>{
            e.preventDefault();
            //  console.log(this.getAttribute("id"), "soy el id");
            localStorage.removeItem(this.getAttribute("id") || "");
            (0, _state.state).deleteItem(this.getAttribute("id"));
        });
        this.shadow.appendChild(div);
        this.addCallback();
    }
});

},{"../../state":"1Yeju","186615a05a855ac8":"kAmvn"}],"1Yeju":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state);
const state = {
    data: {
        tasks: [
            {
                id: 1,
                title: " primer titulo",
                complete: false
            },
            {
                id: 2,
                title: " segundo titulo",
                complete: true
            },
            {
                id: 3,
                title: " tercero titulo",
                delete: true
            }
        ]
    },
    listeners: [],
    /*esta función intenta cargar datos guardados en el
  almacenamiento local del navegador y actualiza el estado con estos datos.*/ init () {
        const loalStorage = localStorage.getItem("save-state");
        this.setState(JSON.parse(loalStorage));
    },
    /*   esta función devuelve el objeto "data" actual. */ getState () {
        return this.data;
    },
    /*
   esta función actualiza el estado con el nuevo estado especificado.
   */ setState (newState) {
        this.data = newState;
        for (const cb of this.listeners)cb(newState);
        localStorage.setItem("save-state", JSON.stringify(newState));
    // console.log(" soy el state y e cambiado", this.data);
    },
    /*esta función permite que otras partes del código se suscriban a 
  cambios en el estado y se les notifique cuando estos cambios ocurran. */ subscribe (callback) {
        this.listeners.push(callback);
    },
    /*esta función agrega una nueva tarea a la matriz de tareas con
   los valores especificados para  title. */ addList (id, title) {
        const currentList = this.getState();
        currentList.tasks.push({
            id: id,
            title: title,
            complete: false
        });
        this.setState(currentList);
    //console.log("soy el state y e cambiado addlist", this.data);
    },
    /* esta función devuelve una matriz de tareas que no tienen el 
  valor "delete" establecido en verdadero.*/ getEnavelTasks () {
        const currentList = this.getState();
        return currentList.tasks.filter((i)=>!i.delete);
    },
    /*  esta función busca una tarea específica por su id 
  y cambia su estado "completed" al valor especificado. */ chargList (id, value) {
        const currentList = this.getState();
        const list = currentList.tasks.find((i)=>i.id == id);
        list.complete = value;
        this.setState(currentList);
    //  console.log(list, "soy la lista");
    // console.log(id, value);
    },
    /* esta función elimina una tarea específica de la matriz de tareas. */ deleteItem (iten) {
        const currentList = this.getState();
        const newList = currentList.tasks.filter((i)=>i.id != iten);
        currentList.tasks = newList;
        this.setState(currentList);
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kAmvn":[function(require,module,exports) {
module.exports = require("4d5c9da70da48b69").getBundleURL("aNMIV") + "delete1.384d42c1.png" + "?" + Date.now();

},{"4d5c9da70da48b69":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"diFdK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Form", ()=>Form);
class Form extends HTMLElement {
    constructor(){
        super();
        this.shadow = this.attachShadow({
            mode: "open"
        });
        this.render();
    }
    render() {
        const form = document.createElement("form");
        form.classList.add("form");
        form.innerHTML = `
<h1 class = "title"> Mis  Pendiente  </h1>
  <div class="form__content">
  
  <label class ="form__div-label" for="text">Agregar tarea</label>
  <div class="form__div-input">


  <input class =" form__input" type="text" name="text" id="text" placeholder= " agregar tarea" />
  <button class="addButon"> Agregar elemento </button>
  </div>
  </div>

`;
        const style = document.createElement("style");
        style.innerHTML = `
    
    .form {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 10px;
        width: 100vh;
        height: 39vh;
      }
      @media (min-width: 960px) {
        .form {
          
        }
      }
      
      .title {
        font-size: 52px;
        font-weight: 700;
        color: #00000;
        margin-top: 41px;
        margin-bottom: 25px;
        text-align: left;
        height: 122px;
        width: 271px;
      }
      @media (min-width: 960px) {
        .title {
          width: 100%;
        }
        } 

      .form__content {
           text-align: left; 
      }
      @media (min-width: 960px) {
        .form__content {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        
        }
      }
      .form__div-input {
        display: flex;
        flex-direction: column;
        text-align: left;
      }
      @media (min-width: 960px) {
        .form__div-input {
          width: 100%;
        flex-direction: row;
        align-items: center;

        }}
  
        .form__input {
        height: 55px;
          border-radius: 4px;
          font-size: 2.1rem;

        }
        @media (min-width: 960px) {
          .form__input {
         

          }
        }

       .addButon {
          background-color: #9CBBE9;
          border:4px #9CBBE9;
          border-radius: 4px;
          color: black;
          font-size: 16px;
          text-align: center;
          height: 55px;
          margin-top: 10px;
          
        }
        
        @media (min-width: 960px) {
          .addButon {
            margin-left: 10px;
      
margin-top: 0px;
          }
        }
        
      
    
    
    `;
        this.shadow.appendChild(form);
        this.shadow.appendChild(style);
    }
}
customElements.define("custon-form", Form);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"03r3z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initHome", ()=>initHome);
var _state = require("../state");
function initHome(container) {
    const div = document.createElement("div");
    const style = document.createElement("style");
    // console.log(div, "soy el div");
    const tasks = (0, _state.state).getEnavelTasks();
    div.innerHTML = ` 

  <div class="container"> 
  <custon-header></custon-header>
  <div class = " conteiner-form">

  <custon-form class = "custon-form"></custon-form>
  <ul class = "lista"> </ul>
  
  
  </div>  
  </div>  
  `;
    style.innerHTML = `

  <link rel="stylesheet" href="../style.css" /> 

  
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet">
div{
  box-sizing: border-box;
}
.container {

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.5rem;
  }


  .conteiner-form {
    display: flex;
    flex-direction: column;

    align-items: center;
  
  }
  
  .lista {
    padding-inline-start: 0;
  }
@media (min-width: 960px) {
  .lista {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    width: 100vh;
  }
}


  `;
    const lista = div.querySelector(".lista");
    // console.log(lista, "soy la lista");
    function createTrasks(items) {
        const itemsMapeados = items.map((t)=>`
       <custon-todo-item title="${t.title}" checket = "${t.complete || t.delete}"></custon-todo-item>

      `);
        lista.innerHTML = "";
        for (const iten of items){
            const todoItem = document.createElement("custon-todo-item");
            todoItem.setAttribute("title", iten.title);
            todoItem.setAttribute("id", iten.id);
            if (iten.complete || iten.delete) todoItem.setAttribute("checked", "true");
            todoItem.addEventListener("change", (e)=>{
                (0, _state.state).chargList(e.detail.id, e.detail.value);
            // console.log(e, "soy el evento 1");
            });
            todoItem.addEventListener("delete", (e)=>{
                (0, _state.state).deleteItem(e.detail.id);
            // console.log(e, "soy el evento 2");
            });
            lista.appendChild(todoItem);
        }
    // lista.innerHTML = itemsMapeados.join("");
    }
    // console.log(tesks, " soy el estado");
    (0, _state.state).subscribe(()=>{
        const crateEl = createTrasks((0, _state.state).getEnavelTasks());
    // console.log(crateEl, "soy el estado");
    });
    createTrasks(tasks);
    // const form = div.querySelector(".form") as HTMLElement;
    // form.addEventListener("submit", (e) => {
    //   e.preventDefault();
    //   const input = div.querySelector("#text") as HTMLInputElement;
    //   console.log(input.value, "soy el input", input);
    //   const value = input.value;
    //   state.addList(Math.floor(Math.random() * 100), value);
    //   input.value = "";
    //   //console.log(value, "soy el valor");
    // });
    const tag = div?.querySelector("custon-form")?.shadowRoot?.querySelector(".form__div-input")?.querySelector(".addButon");
    //console.log(tag, "soy el tag");
    tag?.addEventListener("click", (e)=>{
        e.preventDefault();
        const inputEl = div?.querySelector("custon-form")?.shadowRoot?.querySelector(".form__input");
        // console.log(inputEl, "soy el input");
        (0, _state.state).addList(Math.floor(Math.random() * 100), inputEl.value);
        inputEl.value = "";
    });
    div.appendChild(style);
    container.appendChild(div);
}

},{"../state":"1Yeju","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["84Rv8","jeorp"], "jeorp", "parcelRequireb883")

//# sourceMappingURL=index.b7a05eb9.js.map
