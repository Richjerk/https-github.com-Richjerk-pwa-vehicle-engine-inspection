import "./chunk-GWBPVOL2.js";

// node_modules/@pwabuilder/pwainstall/dist/pwa-install.js
var t = typeof window != "undefined" && window.customElements != null && window.customElements.polyfillWrapFlushCallback !== void 0;
var e = (t2, e2, i2 = null) => {
  for (; e2 !== i2; ) {
    const i3 = e2.nextSibling;
    t2.removeChild(e2), e2 = i3;
  }
};
var i = `{{lit-${String(Math.random()).slice(2)}}}`;
var n = `<!--${i}-->`;
var s = new RegExp(`${i}|${n}`);
var o = class {
  constructor(t2, e2) {
    this.parts = [], this.element = e2;
    const n2 = [], o2 = [], a2 = document.createTreeWalker(e2.content, 133, null, false);
    let p2 = 0, h2 = -1, c2 = 0;
    const { strings: u2, values: { length: m2 } } = t2;
    for (; c2 < m2; ) {
      const t3 = a2.nextNode();
      if (t3 !== null) {
        if (h2++, t3.nodeType === 1) {
          if (t3.hasAttributes()) {
            const e3 = t3.attributes, { length: i2 } = e3;
            let n3 = 0;
            for (let t4 = 0; t4 < i2; t4++)
              r(e3[t4].name, "$lit$") && n3++;
            for (; n3-- > 0; ) {
              const e4 = u2[c2], i3 = d.exec(e4)[2], n4 = i3.toLowerCase() + "$lit$", o3 = t3.getAttribute(n4);
              t3.removeAttribute(n4);
              const r2 = o3.split(s);
              this.parts.push({ type: "attribute", index: h2, name: i3, strings: r2 }), c2 += r2.length - 1;
            }
          }
          t3.tagName === "TEMPLATE" && (o2.push(t3), a2.currentNode = t3.content);
        } else if (t3.nodeType === 3) {
          const e3 = t3.data;
          if (e3.indexOf(i) >= 0) {
            const i2 = t3.parentNode, o3 = e3.split(s), a3 = o3.length - 1;
            for (let e4 = 0; e4 < a3; e4++) {
              let n3, s2 = o3[e4];
              if (s2 === "")
                n3 = l();
              else {
                const t4 = d.exec(s2);
                t4 !== null && r(t4[2], "$lit$") && (s2 = s2.slice(0, t4.index) + t4[1] + t4[2].slice(0, -"$lit$".length) + t4[3]), n3 = document.createTextNode(s2);
              }
              i2.insertBefore(n3, t3), this.parts.push({ type: "node", index: ++h2 });
            }
            o3[a3] === "" ? (i2.insertBefore(l(), t3), n2.push(t3)) : t3.data = o3[a3], c2 += a3;
          }
        } else if (t3.nodeType === 8)
          if (t3.data === i) {
            const e3 = t3.parentNode;
            t3.previousSibling !== null && h2 !== p2 || (h2++, e3.insertBefore(l(), t3)), p2 = h2, this.parts.push({ type: "node", index: h2 }), t3.nextSibling === null ? t3.data = "" : (n2.push(t3), h2--), c2++;
          } else {
            let e3 = -1;
            for (; (e3 = t3.data.indexOf(i, e3 + 1)) !== -1; )
              this.parts.push({ type: "node", index: -1 }), c2++;
          }
      } else
        a2.currentNode = o2.pop();
    }
    for (const t3 of n2)
      t3.parentNode.removeChild(t3);
  }
};
var r = (t2, e2) => {
  const i2 = t2.length - e2.length;
  return i2 >= 0 && t2.slice(i2) === e2;
};
var a = (t2) => t2.index !== -1;
var l = () => document.createComment("");
var d = /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
function p(t2, e2) {
  const { element: { content: i2 }, parts: n2 } = t2, s2 = document.createTreeWalker(i2, 133, null, false);
  let o2 = c(n2), r2 = n2[o2], a2 = -1, l2 = 0;
  const d2 = [];
  let p2 = null;
  for (; s2.nextNode(); ) {
    a2++;
    const t3 = s2.currentNode;
    for (t3.previousSibling === p2 && (p2 = null), e2.has(t3) && (d2.push(t3), p2 === null && (p2 = t3)), p2 !== null && l2++; r2 !== void 0 && r2.index === a2; )
      r2.index = p2 !== null ? -1 : r2.index - l2, o2 = c(n2, o2), r2 = n2[o2];
  }
  d2.forEach((t3) => t3.parentNode.removeChild(t3));
}
var h = (t2) => {
  let e2 = t2.nodeType === 11 ? 0 : 1;
  const i2 = document.createTreeWalker(t2, 133, null, false);
  for (; i2.nextNode(); )
    e2++;
  return e2;
};
var c = (t2, e2 = -1) => {
  for (let i2 = e2 + 1; i2 < t2.length; i2++) {
    const e3 = t2[i2];
    if (a(e3))
      return i2;
  }
  return -1;
};
var u = /* @__PURE__ */ new WeakMap();
var m = (t2) => typeof t2 == "function" && u.has(t2);
var f = {};
var g = {};
var y = class {
  constructor(t2, e2, i2) {
    this.__parts = [], this.template = t2, this.processor = e2, this.options = i2;
  }
  update(t2) {
    let e2 = 0;
    for (const i2 of this.__parts)
      i2 !== void 0 && i2.setValue(t2[e2]), e2++;
    for (const t3 of this.__parts)
      t3 !== void 0 && t3.commit();
  }
  _clone() {
    const e2 = t ? this.template.element.content.cloneNode(true) : document.importNode(this.template.element.content, true), i2 = [], n2 = this.template.parts, s2 = document.createTreeWalker(e2, 133, null, false);
    let o2, r2 = 0, l2 = 0, d2 = s2.nextNode();
    for (; r2 < n2.length; )
      if (o2 = n2[r2], a(o2)) {
        for (; l2 < o2.index; )
          l2++, d2.nodeName === "TEMPLATE" && (i2.push(d2), s2.currentNode = d2.content), (d2 = s2.nextNode()) === null && (s2.currentNode = i2.pop(), d2 = s2.nextNode());
        if (o2.type === "node") {
          const t2 = this.processor.handleTextExpression(this.options);
          t2.insertAfterNode(d2.previousSibling), this.__parts.push(t2);
        } else
          this.__parts.push(...this.processor.handleAttributeExpressions(d2, o2.name, o2.strings, this.options));
        r2++;
      } else
        this.__parts.push(void 0), r2++;
    return t && (document.adoptNode(e2), customElements.upgrade(e2)), e2;
  }
};
var v = ` ${i} `;
var b = class {
  constructor(t2, e2, i2, n2) {
    this.strings = t2, this.values = e2, this.type = i2, this.processor = n2;
  }
  getHTML() {
    const t2 = this.strings.length - 1;
    let e2 = "", s2 = false;
    for (let o2 = 0; o2 < t2; o2++) {
      const t3 = this.strings[o2], r2 = t3.lastIndexOf("<!--");
      s2 = (r2 > -1 || s2) && t3.indexOf("-->", r2 + 1) === -1;
      const a2 = d.exec(t3);
      e2 += a2 === null ? t3 + (s2 ? v : n) : t3.substr(0, a2.index) + a2[1] + a2[2] + "$lit$" + a2[3] + i;
    }
    return e2 += this.strings[t2], e2;
  }
  getTemplateElement() {
    const t2 = document.createElement("template");
    return t2.innerHTML = this.getHTML(), t2;
  }
};
var x = (t2) => t2 === null || !(typeof t2 == "object" || typeof t2 == "function");
var w = (t2) => Array.isArray(t2) || !(!t2 || !t2[Symbol.iterator]);
var _ = class {
  constructor(t2, e2, i2) {
    this.dirty = true, this.element = t2, this.name = e2, this.strings = i2, this.parts = [];
    for (let t3 = 0; t3 < i2.length - 1; t3++)
      this.parts[t3] = this._createPart();
  }
  _createPart() {
    return new S(this);
  }
  _getValue() {
    const t2 = this.strings, e2 = t2.length - 1;
    let i2 = "";
    for (let n2 = 0; n2 < e2; n2++) {
      i2 += t2[n2];
      const e3 = this.parts[n2];
      if (e3 !== void 0) {
        const t3 = e3.value;
        if (x(t3) || !w(t3))
          i2 += typeof t3 == "string" ? t3 : String(t3);
        else
          for (const e4 of t3)
            i2 += typeof e4 == "string" ? e4 : String(e4);
      }
    }
    return i2 += t2[e2], i2;
  }
  commit() {
    this.dirty && (this.dirty = false, this.element.setAttribute(this.name, this._getValue()));
  }
};
var S = class {
  constructor(t2) {
    this.value = void 0, this.committer = t2;
  }
  setValue(t2) {
    t2 === f || x(t2) && t2 === this.value || (this.value = t2, m(t2) || (this.committer.dirty = true));
  }
  commit() {
    for (; m(this.value); ) {
      const t2 = this.value;
      this.value = f, t2(this);
    }
    this.value !== f && this.committer.commit();
  }
};
var C = class {
  constructor(t2) {
    this.value = void 0, this.__pendingValue = void 0, this.options = t2;
  }
  appendInto(t2) {
    this.startNode = t2.appendChild(l()), this.endNode = t2.appendChild(l());
  }
  insertAfterNode(t2) {
    this.startNode = t2, this.endNode = t2.nextSibling;
  }
  appendIntoPart(t2) {
    t2.__insert(this.startNode = l()), t2.__insert(this.endNode = l());
  }
  insertAfterPart(t2) {
    t2.__insert(this.startNode = l()), this.endNode = t2.endNode, t2.endNode = this.startNode;
  }
  setValue(t2) {
    this.__pendingValue = t2;
  }
  commit() {
    if (this.startNode.parentNode === null)
      return;
    for (; m(this.__pendingValue); ) {
      const t3 = this.__pendingValue;
      this.__pendingValue = f, t3(this);
    }
    const t2 = this.__pendingValue;
    t2 !== f && (x(t2) ? t2 !== this.value && this.__commitText(t2) : t2 instanceof b ? this.__commitTemplateResult(t2) : t2 instanceof Node ? this.__commitNode(t2) : w(t2) ? this.__commitIterable(t2) : t2 === g ? (this.value = g, this.clear()) : this.__commitText(t2));
  }
  __insert(t2) {
    this.endNode.parentNode.insertBefore(t2, this.endNode);
  }
  __commitNode(t2) {
    this.value !== t2 && (this.clear(), this.__insert(t2), this.value = t2);
  }
  __commitText(t2) {
    const e2 = this.startNode.nextSibling, i2 = typeof (t2 = t2 == null ? "" : t2) == "string" ? t2 : String(t2);
    e2 === this.endNode.previousSibling && e2.nodeType === 3 ? e2.data = i2 : this.__commitNode(document.createTextNode(i2)), this.value = t2;
  }
  __commitTemplateResult(t2) {
    const e2 = this.options.templateFactory(t2);
    if (this.value instanceof y && this.value.template === e2)
      this.value.update(t2.values);
    else {
      const i2 = new y(e2, t2.processor, this.options), n2 = i2._clone();
      i2.update(t2.values), this.__commitNode(n2), this.value = i2;
    }
  }
  __commitIterable(t2) {
    Array.isArray(this.value) || (this.value = [], this.clear());
    const e2 = this.value;
    let i2, n2 = 0;
    for (const s2 of t2)
      i2 = e2[n2], i2 === void 0 && (i2 = new C(this.options), e2.push(i2), n2 === 0 ? i2.appendIntoPart(this) : i2.insertAfterPart(e2[n2 - 1])), i2.setValue(s2), i2.commit(), n2++;
    n2 < e2.length && (e2.length = n2, this.clear(i2 && i2.endNode));
  }
  clear(t2 = this.startNode) {
    e(this.startNode.parentNode, t2.nextSibling, this.endNode);
  }
};
var P = class {
  constructor(t2, e2, i2) {
    if (this.value = void 0, this.__pendingValue = void 0, i2.length !== 2 || i2[0] !== "" || i2[1] !== "")
      throw new Error("Boolean attributes can only contain a single expression");
    this.element = t2, this.name = e2, this.strings = i2;
  }
  setValue(t2) {
    this.__pendingValue = t2;
  }
  commit() {
    for (; m(this.__pendingValue); ) {
      const t3 = this.__pendingValue;
      this.__pendingValue = f, t3(this);
    }
    if (this.__pendingValue === f)
      return;
    const t2 = !!this.__pendingValue;
    this.value !== t2 && (t2 ? this.element.setAttribute(this.name, "") : this.element.removeAttribute(this.name), this.value = t2), this.__pendingValue = f;
  }
};
var k = class extends _ {
  constructor(t2, e2, i2) {
    super(t2, e2, i2), this.single = i2.length === 2 && i2[0] === "" && i2[1] === "";
  }
  _createPart() {
    return new N(this);
  }
  _getValue() {
    return this.single ? this.parts[0].value : super._getValue();
  }
  commit() {
    this.dirty && (this.dirty = false, this.element[this.name] = this._getValue());
  }
};
var N = class extends S {
};
var E = false;
(() => {
  try {
    const t2 = { get capture() {
      return E = true, false;
    } };
    window.addEventListener("test", t2, t2), window.removeEventListener("test", t2, t2);
  } catch (t2) {
  }
})();
var A = class {
  constructor(t2, e2, i2) {
    this.value = void 0, this.__pendingValue = void 0, this.element = t2, this.eventName = e2, this.eventContext = i2, this.__boundHandleEvent = (t3) => this.handleEvent(t3);
  }
  setValue(t2) {
    this.__pendingValue = t2;
  }
  commit() {
    for (; m(this.__pendingValue); ) {
      const t3 = this.__pendingValue;
      this.__pendingValue = f, t3(this);
    }
    if (this.__pendingValue === f)
      return;
    const t2 = this.__pendingValue, e2 = this.value, i2 = t2 == null || e2 != null && (t2.capture !== e2.capture || t2.once !== e2.once || t2.passive !== e2.passive), n2 = t2 != null && (e2 == null || i2);
    i2 && this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options), n2 && (this.__options = T(t2), this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options)), this.value = t2, this.__pendingValue = f;
  }
  handleEvent(t2) {
    typeof this.value == "function" ? this.value.call(this.eventContext || this.element, t2) : this.value.handleEvent(t2);
  }
};
var T = (t2) => t2 && (E ? { capture: t2.capture, passive: t2.passive, once: t2.once } : t2.capture);
function $(t2) {
  let e2 = M.get(t2.type);
  e2 === void 0 && (e2 = { stringsArray: /* @__PURE__ */ new WeakMap(), keyString: /* @__PURE__ */ new Map() }, M.set(t2.type, e2));
  let n2 = e2.stringsArray.get(t2.strings);
  if (n2 !== void 0)
    return n2;
  const s2 = t2.strings.join(i);
  return n2 = e2.keyString.get(s2), n2 === void 0 && (n2 = new o(t2, t2.getTemplateElement()), e2.keyString.set(s2, n2)), e2.stringsArray.set(t2.strings, n2), n2;
}
var M = /* @__PURE__ */ new Map();
var B = /* @__PURE__ */ new WeakMap();
var V = new class {
  handleAttributeExpressions(t2, e2, i2, n2) {
    const s2 = e2[0];
    if (s2 === ".") {
      return new k(t2, e2.slice(1), i2).parts;
    }
    if (s2 === "@")
      return [new A(t2, e2.slice(1), n2.eventContext)];
    if (s2 === "?")
      return [new P(t2, e2.slice(1), i2)];
    return new _(t2, e2, i2).parts;
  }
  handleTextExpression(t2) {
    return new C(t2);
  }
}();
typeof window != "undefined" && (window.litHtmlVersions || (window.litHtmlVersions = [])).push("1.2.1");
var O = (t2, ...e2) => new b(t2, e2, "html", V);
var U = (t2, e2) => `${t2}--${e2}`;
var z = true;
window.ShadyCSS === void 0 ? z = false : window.ShadyCSS.prepareTemplateDom === void 0 && (console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."), z = false);
var j = (t2) => (e2) => {
  const n2 = U(e2.type, t2);
  let s2 = M.get(n2);
  s2 === void 0 && (s2 = { stringsArray: /* @__PURE__ */ new WeakMap(), keyString: /* @__PURE__ */ new Map() }, M.set(n2, s2));
  let r2 = s2.stringsArray.get(e2.strings);
  if (r2 !== void 0)
    return r2;
  const a2 = e2.strings.join(i);
  if (r2 = s2.keyString.get(a2), r2 === void 0) {
    const i2 = e2.getTemplateElement();
    z && window.ShadyCSS.prepareTemplateDom(i2, t2), r2 = new o(e2, i2), s2.keyString.set(a2, r2);
  }
  return s2.stringsArray.set(e2.strings, r2), r2;
};
var R = ["html", "svg"];
var L = /* @__PURE__ */ new Set();
var I = (t2, e2, i2) => {
  L.add(t2);
  const n2 = i2 ? i2.element : document.createElement("template"), s2 = e2.querySelectorAll("style"), { length: o2 } = s2;
  if (o2 === 0)
    return void window.ShadyCSS.prepareTemplateStyles(n2, t2);
  const r2 = document.createElement("style");
  for (let t3 = 0; t3 < o2; t3++) {
    const e3 = s2[t3];
    e3.parentNode.removeChild(e3), r2.textContent += e3.textContent;
  }
  ((t3) => {
    R.forEach((e3) => {
      const i3 = M.get(U(e3, t3));
      i3 !== void 0 && i3.keyString.forEach((t4) => {
        const { element: { content: e4 } } = t4, i4 = /* @__PURE__ */ new Set();
        Array.from(e4.querySelectorAll("style")).forEach((t5) => {
          i4.add(t5);
        }), p(t4, i4);
      });
    });
  })(t2);
  const a2 = n2.content;
  i2 ? function(t3, e3, i3 = null) {
    const { element: { content: n3 }, parts: s3 } = t3;
    if (i3 == null)
      return void n3.appendChild(e3);
    const o3 = document.createTreeWalker(n3, 133, null, false);
    let r3 = c(s3), a3 = 0, l3 = -1;
    for (; o3.nextNode(); ) {
      l3++;
      for (o3.currentNode === i3 && (a3 = h(e3), i3.parentNode.insertBefore(e3, i3)); r3 !== -1 && s3[r3].index === l3; ) {
        if (a3 > 0) {
          for (; r3 !== -1; )
            s3[r3].index += a3, r3 = c(s3, r3);
          return;
        }
        r3 = c(s3, r3);
      }
    }
  }(i2, r2, a2.firstChild) : a2.insertBefore(r2, a2.firstChild), window.ShadyCSS.prepareTemplateStyles(n2, t2);
  const l2 = a2.querySelector("style");
  if (window.ShadyCSS.nativeShadow && l2 !== null)
    e2.insertBefore(l2.cloneNode(true), e2.firstChild);
  else if (i2) {
    a2.insertBefore(r2, a2.firstChild);
    const t3 = /* @__PURE__ */ new Set();
    t3.add(r2), p(i2, t3);
  }
};
window.JSCompiler_renameProperty = (t2, e2) => t2;
var D = { toAttribute(t2, e2) {
  switch (e2) {
    case Boolean:
      return t2 ? "" : null;
    case Object:
    case Array:
      return t2 == null ? t2 : JSON.stringify(t2);
  }
  return t2;
}, fromAttribute(t2, e2) {
  switch (e2) {
    case Boolean:
      return t2 !== null;
    case Number:
      return t2 === null ? null : Number(t2);
    case Object:
    case Array:
      return JSON.parse(t2);
  }
  return t2;
} };
var F = (t2, e2) => e2 !== t2 && (e2 == e2 || t2 == t2);
var q = { attribute: true, type: String, converter: D, reflect: false, hasChanged: F };
var W = class extends HTMLElement {
  constructor() {
    super(), this._updateState = 0, this._instanceProperties = void 0, this._updatePromise = new Promise((t2) => this._enableUpdatingResolver = t2), this._changedProperties = /* @__PURE__ */ new Map(), this._reflectingProperties = void 0, this.initialize();
  }
  static get observedAttributes() {
    this.finalize();
    const t2 = [];
    return this._classProperties.forEach((e2, i2) => {
      const n2 = this._attributeNameForProperty(i2, e2);
      n2 !== void 0 && (this._attributeToPropertyMap.set(n2, i2), t2.push(n2));
    }), t2;
  }
  static _ensureClassProperties() {
    if (!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties", this))) {
      this._classProperties = /* @__PURE__ */ new Map();
      const t2 = Object.getPrototypeOf(this)._classProperties;
      t2 !== void 0 && t2.forEach((t3, e2) => this._classProperties.set(e2, t3));
    }
  }
  static createProperty(t2, e2 = q) {
    if (this._ensureClassProperties(), this._classProperties.set(t2, e2), e2.noAccessor || this.prototype.hasOwnProperty(t2))
      return;
    const i2 = typeof t2 == "symbol" ? Symbol() : "__" + t2, n2 = this.getPropertyDescriptor(t2, i2, e2);
    n2 !== void 0 && Object.defineProperty(this.prototype, t2, n2);
  }
  static getPropertyDescriptor(t2, e2, i2) {
    return { get() {
      return this[e2];
    }, set(i3) {
      const n2 = this[t2];
      this[e2] = i3, this._requestUpdate(t2, n2);
    }, configurable: true, enumerable: true };
  }
  static getPropertyOptions(t2) {
    return this._classProperties && this._classProperties.get(t2) || q;
  }
  static finalize() {
    const t2 = Object.getPrototypeOf(this);
    if (t2.hasOwnProperty("finalized") || t2.finalize(), this.finalized = true, this._ensureClassProperties(), this._attributeToPropertyMap = /* @__PURE__ */ new Map(), this.hasOwnProperty(JSCompiler_renameProperty("properties", this))) {
      const t3 = this.properties, e2 = [...Object.getOwnPropertyNames(t3), ...typeof Object.getOwnPropertySymbols == "function" ? Object.getOwnPropertySymbols(t3) : []];
      for (const i2 of e2)
        this.createProperty(i2, t3[i2]);
    }
  }
  static _attributeNameForProperty(t2, e2) {
    const i2 = e2.attribute;
    return i2 === false ? void 0 : typeof i2 == "string" ? i2 : typeof t2 == "string" ? t2.toLowerCase() : void 0;
  }
  static _valueHasChanged(t2, e2, i2 = F) {
    return i2(t2, e2);
  }
  static _propertyValueFromAttribute(t2, e2) {
    const i2 = e2.type, n2 = e2.converter || D, s2 = typeof n2 == "function" ? n2 : n2.fromAttribute;
    return s2 ? s2(t2, i2) : t2;
  }
  static _propertyValueToAttribute(t2, e2) {
    if (e2.reflect === void 0)
      return;
    const i2 = e2.type, n2 = e2.converter;
    return (n2 && n2.toAttribute || D.toAttribute)(t2, i2);
  }
  initialize() {
    this._saveInstanceProperties(), this._requestUpdate();
  }
  _saveInstanceProperties() {
    this.constructor._classProperties.forEach((t2, e2) => {
      if (this.hasOwnProperty(e2)) {
        const t3 = this[e2];
        delete this[e2], this._instanceProperties || (this._instanceProperties = /* @__PURE__ */ new Map()), this._instanceProperties.set(e2, t3);
      }
    });
  }
  _applyInstanceProperties() {
    this._instanceProperties.forEach((t2, e2) => this[e2] = t2), this._instanceProperties = void 0;
  }
  connectedCallback() {
    this.enableUpdating();
  }
  enableUpdating() {
    this._enableUpdatingResolver !== void 0 && (this._enableUpdatingResolver(), this._enableUpdatingResolver = void 0);
  }
  disconnectedCallback() {
  }
  attributeChangedCallback(t2, e2, i2) {
    e2 !== i2 && this._attributeToProperty(t2, i2);
  }
  _propertyToAttribute(t2, e2, i2 = q) {
    const n2 = this.constructor, s2 = n2._attributeNameForProperty(t2, i2);
    if (s2 !== void 0) {
      const t3 = n2._propertyValueToAttribute(e2, i2);
      if (t3 === void 0)
        return;
      this._updateState = 8 | this._updateState, t3 == null ? this.removeAttribute(s2) : this.setAttribute(s2, t3), this._updateState = -9 & this._updateState;
    }
  }
  _attributeToProperty(t2, e2) {
    if (8 & this._updateState)
      return;
    const i2 = this.constructor, n2 = i2._attributeToPropertyMap.get(t2);
    if (n2 !== void 0) {
      const t3 = i2.getPropertyOptions(n2);
      this._updateState = 16 | this._updateState, this[n2] = i2._propertyValueFromAttribute(e2, t3), this._updateState = -17 & this._updateState;
    }
  }
  _requestUpdate(t2, e2) {
    let i2 = true;
    if (t2 !== void 0) {
      const n2 = this.constructor, s2 = n2.getPropertyOptions(t2);
      n2._valueHasChanged(this[t2], e2, s2.hasChanged) ? (this._changedProperties.has(t2) || this._changedProperties.set(t2, e2), s2.reflect !== true || 16 & this._updateState || (this._reflectingProperties === void 0 && (this._reflectingProperties = /* @__PURE__ */ new Map()), this._reflectingProperties.set(t2, s2))) : i2 = false;
    }
    !this._hasRequestedUpdate && i2 && (this._updatePromise = this._enqueueUpdate());
  }
  requestUpdate(t2, e2) {
    return this._requestUpdate(t2, e2), this.updateComplete;
  }
  async _enqueueUpdate() {
    this._updateState = 4 | this._updateState;
    try {
      await this._updatePromise;
    } catch (t3) {
    }
    const t2 = this.performUpdate();
    return t2 != null && await t2, !this._hasRequestedUpdate;
  }
  get _hasRequestedUpdate() {
    return 4 & this._updateState;
  }
  get hasUpdated() {
    return 1 & this._updateState;
  }
  performUpdate() {
    this._instanceProperties && this._applyInstanceProperties();
    let t2 = false;
    const e2 = this._changedProperties;
    try {
      t2 = this.shouldUpdate(e2), t2 ? this.update(e2) : this._markUpdated();
    } catch (e3) {
      throw t2 = false, this._markUpdated(), e3;
    }
    t2 && (1 & this._updateState || (this._updateState = 1 | this._updateState, this.firstUpdated(e2)), this.updated(e2));
  }
  _markUpdated() {
    this._changedProperties = /* @__PURE__ */ new Map(), this._updateState = -5 & this._updateState;
  }
  get updateComplete() {
    return this._getUpdateComplete();
  }
  _getUpdateComplete() {
    return this._updatePromise;
  }
  shouldUpdate(t2) {
    return true;
  }
  update(t2) {
    this._reflectingProperties !== void 0 && this._reflectingProperties.size > 0 && (this._reflectingProperties.forEach((t3, e2) => this._propertyToAttribute(e2, this[e2], t3)), this._reflectingProperties = void 0), this._markUpdated();
  }
  updated(t2) {
  }
  firstUpdated(t2) {
  }
};
W.finalized = true;
var H = (t2, e2) => e2.kind === "method" && e2.descriptor && !("value" in e2.descriptor) ? Object.assign(Object.assign({}, e2), { finisher(i2) {
  i2.createProperty(e2.key, t2);
} }) : { kind: "field", key: Symbol(), placement: "own", descriptor: {}, initializer() {
  typeof e2.initializer == "function" && (this[e2.key] = e2.initializer.call(this));
}, finisher(i2) {
  i2.createProperty(e2.key, t2);
} };
function J(t2) {
  return (e2, i2) => i2 !== void 0 ? ((t3, e3, i3) => {
    e3.constructor.createProperty(i3, t3);
  })(t2, e2, i2) : H(t2, e2);
}
var Y = "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
var K = Symbol();
var Z = class {
  constructor(t2, e2) {
    if (e2 !== K)
      throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t2;
  }
  get styleSheet() {
    return this._styleSheet === void 0 && (Y ? (this._styleSheet = new CSSStyleSheet(), this._styleSheet.replaceSync(this.cssText)) : this._styleSheet = null), this._styleSheet;
  }
  toString() {
    return this.cssText;
  }
};
var G = (t2, ...e2) => {
  const i2 = e2.reduce((e3, i3, n2) => e3 + ((t3) => {
    if (t3 instanceof Z)
      return t3.cssText;
    if (typeof t3 == "number")
      return t3;
    throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t3}. Use 'unsafeCSS' to pass non-literal values, but
            take care to ensure page security.`);
  })(i3) + t2[n2 + 1], t2[0]);
  return new Z(i2, K);
};
(window.litElementVersions || (window.litElementVersions = [])).push("2.3.1");
var Q = {};
var X = class extends W {
  static getStyles() {
    return this.styles;
  }
  static _getUniqueStyles() {
    if (this.hasOwnProperty(JSCompiler_renameProperty("_styles", this)))
      return;
    const t2 = this.getStyles();
    if (t2 === void 0)
      this._styles = [];
    else if (Array.isArray(t2)) {
      const e2 = (t3, i3) => t3.reduceRight((t4, i4) => Array.isArray(i4) ? e2(i4, t4) : (t4.add(i4), t4), i3), i2 = e2(t2, /* @__PURE__ */ new Set()), n2 = [];
      i2.forEach((t3) => n2.unshift(t3)), this._styles = n2;
    } else
      this._styles = [t2];
  }
  initialize() {
    super.initialize(), this.constructor._getUniqueStyles(), this.renderRoot = this.createRenderRoot(), window.ShadowRoot && this.renderRoot instanceof window.ShadowRoot && this.adoptStyles();
  }
  createRenderRoot() {
    return this.attachShadow({ mode: "open" });
  }
  adoptStyles() {
    const t2 = this.constructor._styles;
    t2.length !== 0 && (window.ShadyCSS === void 0 || window.ShadyCSS.nativeShadow ? Y ? this.renderRoot.adoptedStyleSheets = t2.map((t3) => t3.styleSheet) : this._needsShimAdoptedStyleSheets = true : window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t2.map((t3) => t3.cssText), this.localName));
  }
  connectedCallback() {
    super.connectedCallback(), this.hasUpdated && window.ShadyCSS !== void 0 && window.ShadyCSS.styleElement(this);
  }
  update(t2) {
    const e2 = this.render();
    super.update(t2), e2 !== Q && this.constructor.render(e2, this.renderRoot, { scopeName: this.localName, eventContext: this }), this._needsShimAdoptedStyleSheets && (this._needsShimAdoptedStyleSheets = false, this.constructor._styles.forEach((t3) => {
      const e3 = document.createElement("style");
      e3.textContent = t3.cssText, this.renderRoot.appendChild(e3);
    }));
  }
  render() {
    return Q;
  }
};
X.finalized = true, X.render = (t2, i2, n2) => {
  if (!n2 || typeof n2 != "object" || !n2.scopeName)
    throw new Error("The `scopeName` option is required.");
  const s2 = n2.scopeName, o2 = B.has(i2), r2 = z && i2.nodeType === 11 && !!i2.host, a2 = r2 && !L.has(s2), l2 = a2 ? document.createDocumentFragment() : i2;
  if (((t3, i3, n3) => {
    let s3 = B.get(i3);
    s3 === void 0 && (e(i3, i3.firstChild), B.set(i3, s3 = new C(Object.assign({ templateFactory: $ }, n3))), s3.appendInto(i3)), s3.setValue(t3), s3.commit();
  })(t2, l2, Object.assign({ templateFactory: j(s2) }, n2)), a2) {
    const t3 = B.get(l2);
    B.delete(l2);
    const n3 = t3.value instanceof y ? t3.value.template : void 0;
    I(s2, l2, n3), e(i2, i2.firstChild), i2.appendChild(l2), B.set(i2, t3);
  }
  !o2 && r2 && window.ShadyCSS.styleElement(i2.host);
};
var tt = function(t2, e2, i2, n2) {
  var s2, o2 = arguments.length, r2 = o2 < 3 ? e2 : n2 === null ? n2 = Object.getOwnPropertyDescriptor(e2, i2) : n2;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    r2 = Reflect.decorate(t2, e2, i2, n2);
  else
    for (var a2 = t2.length - 1; a2 >= 0; a2--)
      (s2 = t2[a2]) && (r2 = (o2 < 3 ? s2(r2) : o2 > 3 ? s2(e2, i2, r2) : s2(e2, i2)) || r2);
  return o2 > 3 && r2 && Object.defineProperty(e2, i2, r2), r2;
};
var et = class extends X {
  constructor() {
    super(), this.manifestpath = "manifest.json", this.openmodal = false, this.hasprompt = false, this.relatedApps = [], this.explainer = "This app can be installed on your PC or mobile device.  This will allow this web app to look and behave like any other installed app.  You will find it in your app lists and be able to pin it to your home screen, start menus or task bars.  This installed web app will also be able to safely interact with other apps and your operating system. ", this.featuresheader = "Key Features", this.descriptionheader = "Description", this.installbuttontext = "Install", this.cancelbuttontext = "Cancel", this.iosinstallinfotext = "Tap the share button and then 'Add to Homescreen'", this.isSupportingBrowser = window.hasOwnProperty("BeforeInstallPromptEvent"), this.isIOS = navigator.userAgent.includes("iPhone") || navigator.userAgent.includes("iPad") || navigator.userAgent.includes("Macintosh") && navigator.maxTouchPoints && navigator.maxTouchPoints > 2, this.installed = false, window.addEventListener("beforeinstallprompt", (t2) => this.handleInstallPromptEvent(t2)), document.addEventListener("keyup", (t2) => {
      t2.key === "Escape" && this.cancel();
    });
  }
  static get styles() {
    return G`:host{--install-focus-color:#919c9c;--install-button-color:#0078d4;--modal-z-index:9999;--background-z-index:9998;--modal-background-color:white}button{outline:0}#installModalWrapper{height:100vh;width:100vw;overflow:auto;position:fixed;bottom:0;top:0;left:0;right:0;z-index:var(--modal-z-index);display:flex;justify-content:center;align-items:center}#descriptionWrapper{margin-bottom:3em}#installModal{position:absolute;background:var(--modal-background-color);font-family:sans-serif;box-shadow:0 25px 26px rgba(32,36,50,.25),0 5px 9px rgba(51,58,83,.53);border-radius:10px;display:flex;flex-direction:column;padding:0;animation-name:opened;animation-duration:150ms;z-index:var(--modal-z-index);max-width:56em}@keyframes opened{from{transform:scale(.8,.8);opacity:.4}to{transform:scale(1,1);opacity:1}}@keyframes mobile{from{opacity:.6}to{opacity:1}}@keyframes fadein{from{opacity:.2}to{opacity:1}}#background{position:fixed;top:0;bottom:0;left:0;right:0;background:#e3e3e3b0;backdrop-filter:blur(5px);z-index:var(--background-z-index);animation-name:fadein;animation-duration:250ms}#headerContainer{display:flex;justify-content:space-between;margin:40px;margin-bottom:32px}#headerContainer h1{font-size:34px;color:#3c3c3c;margin-top:20px;margin-bottom:7px}#headerContainer img{height:122px;width:122px;background:#d3d3d3;border-radius:10px;padding:12px;border-radius:24px;margin-right:24px}#buttonsContainer{display:flex;justify-content:flex-end;position:relative;height:100px;background:#dedede75;width:100%;right:0;border-radius:0 0 12px 12px}#installButton,#installCancelButton,#openButton{text-align:center;align-content:center;align-self:center;vertical-align:middle;justify-self:flex-end;line-height:200%;flex:0 0 auto;display:inline-block;background:#0078d4;color:#fff;cursor:pointer;border:solid 1px transparent;outline:0}#openButton{background:var(--install-button-color)}#openButton:focus{outline:auto;outline:-webkit-focus-ring-color auto 1px}#installButton,#installCancelButton{min-width:130px;margin-right:30px;background:var(--install-button-color);border-radius:20px;font-weight:600;font-size:14px;line-height:21px;padding-top:10px;padding-bottom:9px;padding-left:20px;padding-right:20px;outline:0;color:#fff}#closeButton{background:0 0;border:none;color:#000;padding-left:12px;padding-right:12px;padding-top:4px;padding-bottom:4px;border-radius:20px;font-weight:600;outline:0;cursor:pointer;align-self:self-end}#closeButton:focus,#installButton:focus,#installCancelButton:focus{box-shadow:0 0 0 3px var(--install-focus-color)}#contentContainer{margin-left:40px;margin-right:40px;flex:1}#contentContainer h3{font-size:22px;color:#3c3c3c;margin-bottom:12px}#contentContainer p{font-size:14px;color:#3c3c3c}#featuresScreenDiv{display:flex;justify-content:space-around;align-items:center;margin-right:20px}#featuresScreenDiv h3{font-style:normal;font-weight:600;font-size:22px;line-height:225%;margin-top:0}#keyFeatures{overflow:hidden;padding-right:2em}#keyFeatures ul{padding-inline-start:22px;margin-block-start:12px}#featuresScreenDiv #keyFeatures li{font-style:normal;font-weight:600;font-size:16px;line-height:29px;color:rgba(51,51,51,.72)}#screenshotsContainer{max-height:220px;display:flex;max-width:30em}#screenshotsContainer button{border:none;width:4em;transition:background-color .2s}#screenshotsContainer button:focus,#screenshotsContainer button:hover{background-color:#bbb}#screenshotsContainer button svg{width:28px;fill:#6b6969}#screenshots{display:flex;scroll-snap-type:x mandatory;flex-wrap:wrap;flex-direction:column;overflow-x:scroll;width:22em;max-height:220px;-webkit-overflow-scrolling:touch}#screenshots div{display:flex;align-items:center;justify-content:center;scroll-snap-align:start;height:14em;width:100%;background:#efefef}#screenshots img{height:100%;object-fit:contain}#screenshots::-webkit-scrollbar{display:none}#tagsDiv{margin-top:1em;margin-bottom:1em}#desc{width:100%;max-width:40em;font-size:14px;color:#7e7e7e;text-overflow:ellipsis;overflow:hidden}#logoContainer{display:flex}#tagsDiv span{background:grey;color:#fff;padding-left:12px;padding-right:12px;padding-bottom:4px;font-weight:700;border-radius:24px;margin-right:12px;padding-top:1px}#iosText{color:var(--install-button-color);text-align:center;font-weight:700;position:fixed;bottom:0;left:0;right:0;backdrop-filter:blur(10px);background:rgba(239,239,239,.17);margin:0;padding:2em}#manifest-description{white-space:pre-wrap}@media (max-height:780px){#buttonsContainer{height:70px;background:0 0}}@media (max-width:1220px){#installModal{margin:0;border-radius:0;min-height:100%;width:100%;animation-name:mobile;animation-duration:250ms}#screenshots{justify-content:center}}@media (max-width:962px){#headerContainer h1{margin-top:0;margin-bottom:0}#logoContainer{align-items:center}#desc{display:none}#headerContainer{margin-bottom:24px}#headerContainer img{height:42px;width:42px}}@media (max-width:800px){#background{display:none}#installModal{overflow:scroll;box-shadow:none;max-width:100%;height:100%}#screenshotsContainer{width:100%}#screenshots img{height:180px}#buttonsContainer{display:flex;justify-content:center;bottom:0;margin-bottom:0;border-radius:0;padding-top:1em;padding-bottom:1em}#buttonsContainer #installButton{margin-right:0}#featuresScreenDiv{flex-direction:column;align-items:flex-start;margin-right:0}#headerContainer{margin:20px}#desc{display:none}#contentContainer{margin-left:20px;margin-right:20px;margin-bottom:5em}#headerContainer img{height:60px;width:60px;margin-right:12px}#buttonsContainer{position:fixed;bottom:0;background:#efefef2b;backdrop-filter:blur(10px)}}@media (max-width:400px){#headerContainer h1{font-size:26px}#headerContainer img{height:40px;width:40px}#featuresScreenDiv h3{font-size:18px;margin-bottom:0}#keyFeatures ul{margin-top:0}}@media all and (display-mode:standalone){button{display:none}}@media (prefers-color-scheme:dark){:host{--modal-background-color:black}#featuresScreenDiv #keyFeatures li,#installModal h1,#installModal h2,#installModal h3,#installModal p{color:#fff}#closeButton svg path{fill:#fff;opacity:1}#buttonsContainer{background:rgb(36 36 36)}}@media (inverted-colors:inverted){:host{--install-focus-color:#6e6363;--install-button-color:#ff872b;--modal-background-color:black}#featuresScreenDiv #keyFeatures li,#installModal h1,#installModal h2,#installModal h3,#installModal p{color:#fff}#closeButton svg path{fill:#fff;opacity:1}#buttonsContainer{background:rgb(36 36 36)}}`;
  }
  async firstUpdated() {
    if (this.manifestpath)
      try {
        await this.getManifestData();
      } catch (t2) {
        console.error("Error getting manifest, check that you have a valid web manifest");
      }
    "getInstalledRelatedApps" in navigator && (this.relatedApps = await navigator.getInstalledRelatedApps());
  }
  handleInstallPromptEvent(t2) {
    this.deferredprompt = t2, this.hasprompt = true, t2.preventDefault();
  }
  checkManifest(t2) {
    t2.icons && t2.icons[0] ? t2.name ? t2.description || console.error("Your web manifest must have a description listed") : console.error("Your web manifest must have a name listed") : console.error("Your web manifest must have atleast one icon listed");
  }
  async getManifestData() {
    try {
      const t2 = await fetch(this.manifestpath), e2 = await t2.json();
      if (this.manifestdata = e2, this.manifestdata)
        return this.checkManifest(this.manifestdata), e2;
    } catch (t2) {
      return null;
    }
  }
  scrollToLeft() {
    const t2 = this.shadowRoot.querySelector("#screenshots");
    t2.scrollBy({ left: -t2.clientWidth, top: 0, behavior: "smooth" });
  }
  scrollToRight() {
    const t2 = this.shadowRoot.querySelector("#screenshots");
    t2.scrollBy({ left: t2.clientWidth, top: 0, behavior: "smooth" });
  }
  openPrompt() {
    this.openmodal = true;
    let t2 = new CustomEvent("show");
    this.dispatchEvent(t2);
  }
  closePrompt() {
    this.openmodal = false;
    let t2 = new CustomEvent("hide");
    this.dispatchEvent(t2);
  }
  shouldShowInstall() {
    return this.isSupportingBrowser && this.relatedApps.length < 1 && (this.hasprompt || this.isIOS);
  }
  async install() {
    if (this.deferredprompt) {
      this.deferredprompt.prompt();
      let t2 = new CustomEvent("show");
      this.dispatchEvent(t2);
      if ((await this.deferredprompt.userChoice).outcome === "accepted") {
        await this.cancel(), this.installed = true;
        let t3 = new CustomEvent("hide");
        return this.dispatchEvent(t3), true;
      }
      {
        await this.cancel(), this.installed = true;
        let t3 = new CustomEvent("hide");
        return this.dispatchEvent(t3), false;
      }
    }
  }
  getInstalledStatus() {
    return navigator.standalone ? navigator.standalone : !!matchMedia("(display-mode: standalone)").matches;
  }
  cancel() {
    return new Promise((t2, e2) => {
      this.openmodal = false, this.hasAttribute("openmodal") && this.removeAttribute("openmodal");
      let i2 = new CustomEvent("hide");
      this.dispatchEvent(i2), t2();
    });
  }
  render() {
    return O`${"standalone" in navigator && navigator.standalone === false || this.usecustom !== true && this.shouldShowInstall() && this.installed === false ? O`<button part="openButton" id="openButton" @click="${() => this.openPrompt()}"><slot>${this.installbuttontext}</slot></button>` : null} ${this.openmodal === true ? O`<div id="installModalWrapper">${this.openmodal ? O`<div id="background" @click="${() => this.cancel()}"></div>` : null}<div id="installModal" part="installModal"><div id="headerContainer"><div id="logoContainer"><img src="${this.iconpath ? this.iconpath : this.manifestdata.icons[0].src}" alt="App Logo"><div id="installTitle"><h1>${this.manifestdata.short_name || this.manifestdata.name}</h1><p id="desc">${this.explainer}</p></div></div><button id="closeButton" @click="${() => this.cancel()}" aria-label="Close"><svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.33" fill-rule="evenodd" clip-rule="evenodd" d="M1.11932 0.357981C1.59693 -0.119327 2.37129 -0.119327 2.8489 0.357981L11.7681 9.27152L20.6873 0.357981C21.165 -0.119327 21.9393 -0.119327 22.4169 0.357981C22.8945 0.835288 22.8945 1.60916 22.4169 2.08646L13.4977 11L22.4169 19.9135C22.8945 20.3908 22.8945 21.1647 22.4169 21.642C21.9393 22.1193 21.165 22.1193 20.6873 21.642L11.7681 12.7285L2.8489 21.642C2.37129 22.1193 1.59693 22.1193 1.11932 21.642C0.641705 21.1647 0.641705 20.3908 1.11932 19.9135L10.0385 11L1.11932 2.08646C0.641705 1.60916 0.641705 0.835288 1.11932 0.357981Z" fill="#60656D"/></svg></button></div><div id="contentContainer"><div id="featuresScreenDiv">${this.manifestdata.features ? O`<div id="keyFeatures"><h3>${this.featuresheader}</h3><ul>${this.manifestdata.features ? this.manifestdata.features.map((t2) => O`<li>${t2}</li>`) : null}</ul></div>` : null} ${this.manifestdata.screenshots ? O`<div id="screenshotsContainer"><button @click="${() => this.scrollToLeft()}" aria-label="previous image"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M401.4 224h-214l83-79.4c11.9-12.5 11.9-32.7 0-45.2s-31.2-12.5-43.2 0L89 233.4c-6 5.8-9 13.7-9 22.4v.4c0 8.7 3 16.6 9 22.4l138.1 134c12 12.5 31.3 12.5 43.2 0 11.9-12.5 11.9-32.7 0-45.2l-83-79.4h214c16.9 0 30.6-14.3 30.6-32 .1-18-13.6-32-30.5-32z"/></svg></button><section id="screenshots">${this.manifestdata.screenshots.map((t2) => O`<div><img alt="App Screenshot" src="${t2.src}"></div>`)}</section><button @click="${() => this.scrollToRight()}" aria-label="next image"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M284.9 412.6l138.1-134c6-5.8 9-13.7 9-22.4v-.4c0-8.7-3-16.6-9-22.4l-138.1-134c-12-12.5-31.3-12.5-43.2 0-11.9 12.5-11.9 32.7 0 45.2l83 79.4h-214c-17 0-30.7 14.3-30.7 32 0 18 13.7 32 30.6 32h214l-83 79.4c-11.9 12.5-11.9 32.7 0 45.2 12 12.5 31.3 12.5 43.3 0z"/></svg></button></div>` : null}</div><div id="descriptionWrapper"><h3>${this.descriptionheader}</h3><p id="manifest-description">${this.manifestdata.description}</p></div></div>${this.isIOS ? O`<p id="iosText">${this.iosinstallinfotext}</p>` : O`<div id="buttonsContainer">${this.deferredprompt ? O`<button id="installButton" @click="${() => this.install()}">${this.installbuttontext} ${this.manifestdata.short_name}</button>` : O`<button @click="${() => this.cancel()}" id="installCancelButton">${this.cancelbuttontext}</button>`}</div>`}</div></div>` : null}`;
  }
};
var it;
tt([J({ type: String })], et.prototype, "manifestpath", void 0), tt([J({ type: String })], et.prototype, "iconpath", void 0), tt([J({ type: Object })], et.prototype, "manifestdata", void 0), tt([J({ type: Boolean })], et.prototype, "openmodal", void 0), tt([J({ type: Boolean })], et.prototype, "showopen", void 0), tt([J({ type: Boolean })], et.prototype, "isSupportingBrowser", void 0), tt([J({ type: Boolean })], et.prototype, "isIOS", void 0), tt([J({ type: Boolean })], et.prototype, "installed", void 0), tt([J({ type: Boolean })], et.prototype, "hasprompt", void 0), tt([J({ type: Boolean })], et.prototype, "usecustom", void 0), tt([J({ type: Array })], et.prototype, "relatedApps", void 0), tt([J({ type: String })], et.prototype, "explainer", void 0), tt([J({ type: String })], et.prototype, "featuresheader", void 0), tt([J({ type: String })], et.prototype, "descriptionheader", void 0), tt([J({ type: String })], et.prototype, "installbuttontext", void 0), tt([J({ type: String })], et.prototype, "cancelbuttontext", void 0), tt([J({ type: String })], et.prototype, "iosinstallinfotext", void 0), tt([J()], et.prototype, "deferredprompt", void 0), et = tt([(it = "pwa-install", (t2) => typeof t2 == "function" ? ((t3, e2) => (window.customElements.define(t3, e2), e2))(it, t2) : ((t3, e2) => {
  const { kind: i2, elements: n2 } = e2;
  return { kind: i2, elements: n2, finisher(e3) {
    window.customElements.define(t3, e3);
  } };
})(it, t2))], et);
export {
  et as pwainstall
};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
//# sourceMappingURL=@pwabuilder_pwainstall.js.map
