! function(t, e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
        if (!t.document) throw new Error("jQuery requires a window with a document");
        return e(t)
    } : e(t)
}("undefined" != typeof window ? window : this, function(t, e) {
    function n(t) {
        var e = t.length,
            n = J.type(t);
        return "function" === n || J.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
    }

    function i(t, e, n) {
        if (J.isFunction(e)) return J.grep(t, function(t, i) {
            return !!e.call(t, i, t) !== n
        });
        if (e.nodeType) return J.grep(t, function(t) {
            return t === e !== n
        });
        if ("string" == typeof e) {
            if (st.test(e)) return J.filter(e, t, n);
            e = J.filter(e, t)
        }
        return J.grep(t, function(t) {
            return X.call(e, t) >= 0 !== n
        })
    }

    function r(t, e) {
        for (;
            (t = t[e]) && 1 !== t.nodeType;);
        return t
    }

    function o(t) {
        var e = ht[t] = {};
        return J.each(t.match(ft) || [], function(t, n) {
            e[n] = !0
        }), e
    }

    function a() {
        Z.removeEventListener("DOMContentLoaded", a, !1), t.removeEventListener("load", a, !1), J.ready()
    }

    function s() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {}
            }
        }), this.expando = J.expando + s.uid++
    }

    function l(t, e, n) {
        var i;
        if (void 0 === n && 1 === t.nodeType)
            if (i = "data-" + e.replace(bt, "-$1").toLowerCase(), n = t.getAttribute(i), "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : xt.test(n) ? J.parseJSON(n) : n
                } catch (r) {}
                yt.set(t, e, n)
            } else n = void 0;
        return n
    }

    function c() {
        return !0
    }

    function u() {
        return !1
    }

    function d() {
        try {
            return Z.activeElement
        } catch (t) {}
    }

    function p(t, e) {
        return J.nodeName(t, "table") && J.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
    }

    function f(t) {
        return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
    }

    function h(t) {
        var e = Ot.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t
    }

    function g(t, e) {
        for (var n = 0, i = t.length; i > n; n++) vt.set(t[n], "globalEval", !e || vt.get(e[n], "globalEval"))
    }

    function m(t, e) {
        var n, i, r, o, a, s, l, c;
        if (1 === e.nodeType) {
            if (vt.hasData(t) && (o = vt.access(t), a = vt.set(e, o), c = o.events)) {
                delete a.handle, a.events = {};
                for (r in c)
                    for (n = 0, i = c[r].length; i > n; n++) J.event.add(e, r, c[r][n])
            }
            yt.hasData(t) && (s = yt.access(t), l = J.extend({}, s), yt.set(e, l))
        }
    }

    function v(t, e) {
        var n = t.getElementsByTagName ? t.getElementsByTagName(e || "*") : t.querySelectorAll ? t.querySelectorAll(e || "*") : [];
        return void 0 === e || e && J.nodeName(t, e) ? J.merge([t], n) : n
    }

    function y(t, e) {
        var n = e.nodeName.toLowerCase();
        "input" === n && kt.test(t.type) ? e.checked = t.checked : ("input" === n || "textarea" === n) && (e.defaultValue = t.defaultValue)
    }

    function x(e, n) {
        var i, r = J(n.createElement(e)).appendTo(n.body),
            o = t.getDefaultComputedStyle && (i = t.getDefaultComputedStyle(r[0])) ? i.display : J.css(r[0], "display");
        return r.detach(), o
    }

    function b(t) {
        var e = Z,
            n = Mt[t];
        return n || (n = x(t, e), "none" !== n && n || (Ht = (Ht || J("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = Ht[0].contentDocument, e.write(), e.close(), n = x(t, e), Ht.detach()), Mt[t] = n), n
    }

    function w(t, e, n) {
        var i, r, o, a, s = t.style;
        return n = n || Bt(t), n && (a = n.getPropertyValue(e) || n[e]), n && ("" !== a || J.contains(t.ownerDocument, t) || (a = J.style(t, e)), qt.test(a) && Ft.test(e) && (i = s.width, r = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = r, s.maxWidth = o)), void 0 !== a ? a + "" : a
    }

    function C(t, e) {
        return {
            get: function() {
                return t() ? void delete this.get : (this.get = e).apply(this, arguments)
            }
        }
    }

    function T(t, e) {
        if (e in t) return e;
        for (var n = e[0].toUpperCase() + e.slice(1), i = e, r = Yt.length; r--;)
            if (e = Yt[r] + n, e in t) return e;
        return i
    }

    function k(t, e, n) {
        var i = $t.exec(e);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : e
    }

    function E(t, e, n, i, r) {
        for (var o = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, a = 0; 4 > o; o += 2) "margin" === n && (a += J.css(t, n + Ct[o], !0, r)), i ? ("content" === n && (a -= J.css(t, "padding" + Ct[o], !0, r)), "margin" !== n && (a -= J.css(t, "border" + Ct[o] + "Width", !0, r))) : (a += J.css(t, "padding" + Ct[o], !0, r), "padding" !== n && (a += J.css(t, "border" + Ct[o] + "Width", !0, r)));
        return a
    }

    function S(t, e, n) {
        var i = !0,
            r = "width" === e ? t.offsetWidth : t.offsetHeight,
            o = Bt(t),
            a = "border-box" === J.css(t, "boxSizing", !1, o);
        if (0 >= r || null == r) {
            if (r = w(t, e, o), (0 > r || null == r) && (r = t.style[e]), qt.test(r)) return r;
            i = a && (Q.boxSizingReliable() || r === t.style[e]), r = parseFloat(r) || 0
        }
        return r + E(t, e, n || (a ? "border" : "content"), i, o) + "px"
    }

    function I(t, e) {
        for (var n, i, r, o = [], a = 0, s = t.length; s > a; a++) i = t[a], i.style && (o[a] = vt.get(i, "olddisplay"), n = i.style.display, e ? (o[a] || "none" !== n || (i.style.display = ""), "" === i.style.display && Tt(i) && (o[a] = vt.access(i, "olddisplay", b(i.nodeName)))) : (r = Tt(i), "none" === n && r || vt.set(i, "olddisplay", r ? n : J.css(i, "display"))));
        for (a = 0; s > a; a++) i = t[a], i.style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? o[a] || "" : "none"));
        return t
    }

    function L(t, e, n, i, r) {
        return new L.prototype.init(t, e, n, i, r)
    }

    function _() {
        return setTimeout(function() {
            Qt = void 0
        }), Qt = J.now()
    }

    function z(t, e) {
        var n, i = 0,
            r = {
                height: t
            };
        for (e = e ? 1 : 0; 4 > i; i += 2 - e) n = Ct[i], r["margin" + n] = r["padding" + n] = t;
        return e && (r.opacity = r.width = t), r
    }

    function P(t, e, n) {
        for (var i, r = (ne[e] || []).concat(ne["*"]), o = 0, a = r.length; a > o; o++)
            if (i = r[o].call(n, e, t)) return i
    }

    function D(t, e, n) {
        var i, r, o, a, s, l, c, u, d = this,
            p = {},
            f = t.style,
            h = t.nodeType && Tt(t),
            g = vt.get(t, "fxshow");
        n.queue || (s = J._queueHooks(t, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function() {
            s.unqueued || l()
        }), s.unqueued++, d.always(function() {
            d.always(function() {
                s.unqueued--, J.queue(t, "fx").length || s.empty.fire()
            })
        })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], c = J.css(t, "display"), u = "none" === c ? vt.get(t, "olddisplay") || b(t.nodeName) : c, "inline" === u && "none" === J.css(t, "float") && (f.display = "inline-block")), n.overflow && (f.overflow = "hidden", d.always(function() {
            f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
        }));
        for (i in e)
            if (r = e[i], Kt.exec(r)) {
                if (delete e[i], o = o || "toggle" === r, r === (h ? "hide" : "show")) {
                    if ("show" !== r || !g || void 0 === g[i]) continue;
                    h = !0
                }
                p[i] = g && g[i] || J.style(t, i)
            } else c = void 0;
        if (J.isEmptyObject(p)) "inline" === ("none" === c ? b(t.nodeName) : c) && (f.display = c);
        else {
            g ? "hidden" in g && (h = g.hidden) : g = vt.access(t, "fxshow", {}), o && (g.hidden = !h), h ? J(t).show() : d.done(function() {
                J(t).hide()
            }), d.done(function() {
                var e;
                vt.remove(t, "fxshow");
                for (e in p) J.style(t, e, p[e])
            });
            for (i in p) a = P(h ? g[i] : 0, i, d), i in g || (g[i] = a.start, h && (a.end = a.start, a.start = "width" === i || "height" === i ? 1 : 0))
        }
    }

    function A(t, e) {
        var n, i, r, o, a;
        for (n in t)
            if (i = J.camelCase(n), r = e[i], o = t[n], J.isArray(o) && (r = o[1], o = t[n] = o[0]), n !== i && (t[i] = o, delete t[n]), a = J.cssHooks[i], a && "expand" in a) {
                o = a.expand(o), delete t[i];
                for (n in o) n in t || (t[n] = o[n], e[n] = r)
            } else e[i] = r
    }

    function N(t, e, n) {
        var i, r, o = 0,
            a = ee.length,
            s = J.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (r) return !1;
                for (var e = Qt || _(), n = Math.max(0, c.startTime + c.duration - e), i = n / c.duration || 0, o = 1 - i, a = 0, l = c.tweens.length; l > a; a++) c.tweens[a].run(o);
                return s.notifyWith(t, [c, o, n]), 1 > o && l ? n : (s.resolveWith(t, [c]), !1)
            },
            c = s.promise({
                elem: t,
                props: J.extend({}, e),
                opts: J.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: e,
                originalOptions: n,
                startTime: Qt || _(),
                duration: n.duration,
                tweens: [],
                createTween: function(e, n) {
                    var i = J.Tween(t, c.opts, e, n, c.opts.specialEasing[e] || c.opts.easing);
                    return c.tweens.push(i), i
                },
                stop: function(e) {
                    var n = 0,
                        i = e ? c.tweens.length : 0;
                    if (r) return this;
                    for (r = !0; i > n; n++) c.tweens[n].run(1);
                    return e ? s.resolveWith(t, [c, e]) : s.rejectWith(t, [c, e]), this
                }
            }),
            u = c.props;
        for (A(u, c.opts.specialEasing); a > o; o++)
            if (i = ee[o].call(c, t, u, c.opts)) return i;
        return J.map(u, P, c), J.isFunction(c.opts.start) && c.opts.start.call(t, c), J.fx.timer(J.extend(l, {
            elem: t,
            anim: c,
            queue: c.opts.queue
        })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }

    function j(t) {
        return function(e, n) {
            "string" != typeof e && (n = e, e = "*");
            var i, r = 0,
                o = e.toLowerCase().match(ft) || [];
            if (J.isFunction(n))
                for (; i = o[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
        }
    }

    function O(t, e, n, i) {
        function r(s) {
            var l;
            return o[s] = !0, J.each(t[s] || [], function(t, s) {
                var c = s(e, n, i);
                return "string" != typeof c || a || o[c] ? a ? !(l = c) : void 0 : (e.dataTypes.unshift(c), r(c), !1)
            }), l
        }
        var o = {},
            a = t === xe;
        return r(e.dataTypes[0]) || !o["*"] && r("*")
    }

    function U(t, e) {
        var n, i, r = J.ajaxSettings.flatOptions || {};
        for (n in e) void 0 !== e[n] && ((r[n] ? t : i || (i = {}))[n] = e[n]);
        return i && J.extend(!0, t, i), t
    }

    function R(t, e, n) {
        for (var i, r, o, a, s = t.contents, l = t.dataTypes;
            "*" === l[0];) l.shift(), void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
        if (i)
            for (r in s)
                if (s[r] && s[r].test(i)) {
                    l.unshift(r);
                    break
                }
        if (l[0] in n) o = l[0];
        else {
            for (r in n) {
                if (!l[0] || t.converters[r + " " + l[0]]) {
                    o = r;
                    break
                }
                a || (a = r)
            }
            o = o || a
        }
        return o ? (o !== l[0] && l.unshift(o), n[o]) : void 0
    }

    function H(t, e, n, i) {
        var r, o, a, s, l, c = {},
            u = t.dataTypes.slice();
        if (u[1])
            for (a in t.converters) c[a.toLowerCase()] = t.converters[a];
        for (o = u.shift(); o;)
            if (t.responseFields[o] && (n[t.responseFields[o]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = u.shift())
                if ("*" === o) o = l;
                else if ("*" !== l && l !== o) {
            if (a = c[l + " " + o] || c["* " + o], !a)
                for (r in c)
                    if (s = r.split(" "), s[1] === o && (a = c[l + " " + s[0]] || c["* " + s[0]])) {
                        a === !0 ? a = c[r] : c[r] !== !0 && (o = s[0], u.unshift(s[1]));
                        break
                    }
            if (a !== !0)
                if (a && t["throws"]) e = a(e);
                else try {
                    e = a(e)
                } catch (d) {
                    return {
                        state: "parsererror",
                        error: a ? d : "No conversion from " + l + " to " + o
                    }
                }
        }
        return {
            state: "success",
            data: e
        }
    }

    function M(t, e, n, i) {
        var r;
        if (J.isArray(e)) J.each(e, function(e, r) {
            n || ke.test(t) ? i(t, r) : M(t + "[" + ("object" == typeof r ? e : "") + "]", r, n, i)
        });
        else if (n || "object" !== J.type(e)) i(t, e);
        else
            for (r in e) M(t + "[" + r + "]", e[r], n, i)
    }

    function F(t) {
        return J.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
    }
    var q = [],
        B = q.slice,
        W = q.concat,
        $ = q.push,
        X = q.indexOf,
        G = {},
        V = G.toString,
        Y = G.hasOwnProperty,
        Q = {},
        Z = t.document,
        K = "2.1.3",
        J = function(t, e) {
            return new J.fn.init(t, e)
        },
        tt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        et = /^-ms-/,
        nt = /-([\da-z])/gi,
        it = function(t, e) {
            return e.toUpperCase()
        };
    J.fn = J.prototype = {
        jquery: K,
        constructor: J,
        selector: "",
        length: 0,
        toArray: function() {
            return B.call(this)
        },
        get: function(t) {
            return null != t ? 0 > t ? this[t + this.length] : this[t] : B.call(this)
        },
        pushStack: function(t) {
            var e = J.merge(this.constructor(), t);
            return e.prevObject = this, e.context = this.context, e
        },
        each: function(t, e) {
            return J.each(this, t, e)
        },
        map: function(t) {
            return this.pushStack(J.map(this, function(e, n) {
                return t.call(e, n, e)
            }))
        },
        slice: function() {
            return this.pushStack(B.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(t) {
            var e = this.length,
                n = +t + (0 > t ? e : 0);
            return this.pushStack(n >= 0 && e > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: $,
        sort: q.sort,
        splice: q.splice
    }, J.extend = J.fn.extend = function() {
        var t, e, n, i, r, o, a = arguments[0] || {},
            s = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof a && (c = a, a = arguments[s] || {}, s++), "object" == typeof a || J.isFunction(a) || (a = {}), s === l && (a = this, s--); l > s; s++)
            if (null != (t = arguments[s]))
                for (e in t) n = a[e], i = t[e], a !== i && (c && i && (J.isPlainObject(i) || (r = J.isArray(i))) ? (r ? (r = !1, o = n && J.isArray(n) ? n : []) : o = n && J.isPlainObject(n) ? n : {}, a[e] = J.extend(c, o, i)) : void 0 !== i && (a[e] = i));
        return a
    }, J.extend({
        expando: "jQuery" + (K + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(t) {
            throw new Error(t)
        },
        noop: function() {},
        isFunction: function(t) {
            return "function" === J.type(t)
        },
        isArray: Array.isArray,
        isWindow: function(t) {
            return null != t && t === t.window
        },
        isNumeric: function(t) {
            return !J.isArray(t) && t - parseFloat(t) + 1 >= 0
        },
        isPlainObject: function(t) {
            return "object" !== J.type(t) || t.nodeType || J.isWindow(t) ? !1 : t.constructor && !Y.call(t.constructor.prototype, "isPrototypeOf") ? !1 : !0
        },
        isEmptyObject: function(t) {
            var e;
            for (e in t) return !1;
            return !0
        },
        type: function(t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? G[V.call(t)] || "object" : typeof t
        },
        globalEval: function(t) {
            var e, n = eval;
            t = J.trim(t), t && (1 === t.indexOf("use strict") ? (e = Z.createElement("script"), e.text = t, Z.head.appendChild(e).parentNode.removeChild(e)) : n(t))
        },
        camelCase: function(t) {
            return t.replace(et, "ms-").replace(nt, it)
        },
        nodeName: function(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        },
        each: function(t, e, i) {
            var r, o = 0,
                a = t.length,
                s = n(t);
            if (i) {
                if (s)
                    for (; a > o && (r = e.apply(t[o], i), r !== !1); o++);
                else
                    for (o in t)
                        if (r = e.apply(t[o], i), r === !1) break
            } else if (s)
                for (; a > o && (r = e.call(t[o], o, t[o]), r !== !1); o++);
            else
                for (o in t)
                    if (r = e.call(t[o], o, t[o]), r === !1) break; return t
        },
        trim: function(t) {
            return null == t ? "" : (t + "").replace(tt, "")
        },
        makeArray: function(t, e) {
            var i = e || [];
            return null != t && (n(Object(t)) ? J.merge(i, "string" == typeof t ? [t] : t) : $.call(i, t)), i
        },
        inArray: function(t, e, n) {
            return null == e ? -1 : X.call(e, t, n)
        },
        merge: function(t, e) {
            for (var n = +e.length, i = 0, r = t.length; n > i; i++) t[r++] = e[i];
            return t.length = r, t
        },
        grep: function(t, e, n) {
            for (var i, r = [], o = 0, a = t.length, s = !n; a > o; o++) i = !e(t[o], o), i !== s && r.push(t[o]);
            return r
        },
        map: function(t, e, i) {
            var r, o = 0,
                a = t.length,
                s = n(t),
                l = [];
            if (s)
                for (; a > o; o++) r = e(t[o], o, i), null != r && l.push(r);
            else
                for (o in t) r = e(t[o], o, i), null != r && l.push(r);
            return W.apply([], l)
        },
        guid: 1,
        proxy: function(t, e) {
            var n, i, r;
            return "string" == typeof e && (n = t[e], e = t, t = n), J.isFunction(t) ? (i = B.call(arguments, 2), r = function() {
                return t.apply(e || this, i.concat(B.call(arguments)))
            }, r.guid = t.guid = t.guid || J.guid++, r) : void 0
        },
        now: Date.now,
        support: Q
    }), J.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
        G["[object " + e + "]"] = e.toLowerCase()
    });
    var rt = function(t) {
        function e(t, e, n, i) {
            var r, o, a, s, l, c, d, f, h, g;
            if ((e ? e.ownerDocument || e : M) !== D && P(e), e = e || D, n = n || [], s = e.nodeType, "string" != typeof t || !t || 1 !== s && 9 !== s && 11 !== s) return n;
            if (!i && N) {
                if (11 !== s && (r = yt.exec(t)))
                    if (a = r[1]) {
                        if (9 === s) {
                            if (o = e.getElementById(a), !o || !o.parentNode) return n;
                            if (o.id === a) return n.push(o), n
                        } else if (e.ownerDocument && (o = e.ownerDocument.getElementById(a)) && R(e, o) && o.id === a) return n.push(o), n
                    } else {
                        if (r[2]) return K.apply(n, e.getElementsByTagName(t)), n;
                        if ((a = r[3]) && w.getElementsByClassName) return K.apply(n, e.getElementsByClassName(a)), n
                    }
                if (w.qsa && (!j || !j.test(t))) {
                    if (f = d = H, h = e, g = 1 !== s && t, 1 === s && "object" !== e.nodeName.toLowerCase()) {
                        for (c = E(t), (d = e.getAttribute("id")) ? f = d.replace(bt, "\\$&") : e.setAttribute("id", f), f = "[id='" + f + "'] ", l = c.length; l--;) c[l] = f + p(c[l]);
                        h = xt.test(t) && u(e.parentNode) || e, g = c.join(",")
                    }
                    if (g) try {
                        return K.apply(n, h.querySelectorAll(g)), n
                    } catch (m) {} finally {
                        d || e.removeAttribute("id")
                    }
                }
            }
            return I(t.replace(lt, "$1"), e, n, i)
        }

        function n() {
            function t(n, i) {
                return e.push(n + " ") > C.cacheLength && delete t[e.shift()], t[n + " "] = i
            }
            var e = [];
            return t
        }

        function i(t) {
            return t[H] = !0, t
        }

        function r(t) {
            var e = D.createElement("div");
            try {
                return !!t(e)
            } catch (n) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e), e = null
            }
        }

        function o(t, e) {
            for (var n = t.split("|"), i = t.length; i--;) C.attrHandle[n[i]] = e
        }

        function a(t, e) {
            var n = e && t,
                i = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || G) - (~t.sourceIndex || G);
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === e) return -1;
            return t ? 1 : -1
        }

        function s(t) {
            return function(e) {
                var n = e.nodeName.toLowerCase();
                return "input" === n && e.type === t
            }
        }

        function l(t) {
            return function(e) {
                var n = e.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && e.type === t
            }
        }

        function c(t) {
            return i(function(e) {
                return e = +e, i(function(n, i) {
                    for (var r, o = t([], n.length, e), a = o.length; a--;) n[r = o[a]] && (n[r] = !(i[r] = n[r]))
                })
            })
        }

        function u(t) {
            return t && "undefined" != typeof t.getElementsByTagName && t
        }

        function d() {}

        function p(t) {
            for (var e = 0, n = t.length, i = ""; n > e; e++) i += t[e].value;
            return i
        }

        function f(t, e, n) {
            var i = e.dir,
                r = n && "parentNode" === i,
                o = q++;
            return e.first ? function(e, n, o) {
                for (; e = e[i];)
                    if (1 === e.nodeType || r) return t(e, n, o)
            } : function(e, n, a) {
                var s, l, c = [F, o];
                if (a) {
                    for (; e = e[i];)
                        if ((1 === e.nodeType || r) && t(e, n, a)) return !0
                } else
                    for (; e = e[i];)
                        if (1 === e.nodeType || r) {
                            if (l = e[H] || (e[H] = {}), (s = l[i]) && s[0] === F && s[1] === o) return c[2] = s[2];
                            if (l[i] = c, c[2] = t(e, n, a)) return !0
                        }
            }
        }

        function h(t) {
            return t.length > 1 ? function(e, n, i) {
                for (var r = t.length; r--;)
                    if (!t[r](e, n, i)) return !1;
                return !0
            } : t[0]
        }

        function g(t, n, i) {
            for (var r = 0, o = n.length; o > r; r++) e(t, n[r], i);
            return i
        }

        function m(t, e, n, i, r) {
            for (var o, a = [], s = 0, l = t.length, c = null != e; l > s; s++)(o = t[s]) && (!n || n(o, i, r)) && (a.push(o), c && e.push(s));
            return a
        }

        function v(t, e, n, r, o, a) {
            return r && !r[H] && (r = v(r)), o && !o[H] && (o = v(o, a)), i(function(i, a, s, l) {
                var c, u, d, p = [],
                    f = [],
                    h = a.length,
                    v = i || g(e || "*", s.nodeType ? [s] : s, []),
                    y = !t || !i && e ? v : m(v, p, t, s, l),
                    x = n ? o || (i ? t : h || r) ? [] : a : y;
                if (n && n(y, x, s, l), r)
                    for (c = m(x, f), r(c, [], s, l), u = c.length; u--;)(d = c[u]) && (x[f[u]] = !(y[f[u]] = d));
                if (i) {
                    if (o || t) {
                        if (o) {
                            for (c = [], u = x.length; u--;)(d = x[u]) && c.push(y[u] = d);
                            o(null, x = [], c, l)
                        }
                        for (u = x.length; u--;)(d = x[u]) && (c = o ? tt(i, d) : p[u]) > -1 && (i[c] = !(a[c] = d))
                    }
                } else x = m(x === a ? x.splice(h, x.length) : x), o ? o(null, a, x, l) : K.apply(a, x)
            })
        }

        function y(t) {
            for (var e, n, i, r = t.length, o = C.relative[t[0].type], a = o || C.relative[" "], s = o ? 1 : 0, l = f(function(t) {
                    return t === e
                }, a, !0), c = f(function(t) {
                    return tt(e, t) > -1
                }, a, !0), u = [function(t, n, i) {
                    var r = !o && (i || n !== L) || ((e = n).nodeType ? l(t, n, i) : c(t, n, i));
                    return e = null, r
                }]; r > s; s++)
                if (n = C.relative[t[s].type]) u = [f(h(u), n)];
                else {
                    if (n = C.filter[t[s].type].apply(null, t[s].matches), n[H]) {
                        for (i = ++s; r > i && !C.relative[t[i].type]; i++);
                        return v(s > 1 && h(u), s > 1 && p(t.slice(0, s - 1).concat({
                            value: " " === t[s - 2].type ? "*" : ""
                        })).replace(lt, "$1"), n, i > s && y(t.slice(s, i)), r > i && y(t = t.slice(i)), r > i && p(t))
                    }
                    u.push(n)
                }
            return h(u)
        }

        function x(t, n) {
            var r = n.length > 0,
                o = t.length > 0,
                a = function(i, a, s, l, c) {
                    var u, d, p, f = 0,
                        h = "0",
                        g = i && [],
                        v = [],
                        y = L,
                        x = i || o && C.find.TAG("*", c),
                        b = F += null == y ? 1 : Math.random() || .1,
                        w = x.length;
                    for (c && (L = a !== D && a); h !== w && null != (u = x[h]); h++) {
                        if (o && u) {
                            for (d = 0; p = t[d++];)
                                if (p(u, a, s)) {
                                    l.push(u);
                                    break
                                }
                            c && (F = b)
                        }
                        r && ((u = !p && u) && f--, i && g.push(u))
                    }
                    if (f += h, r && h !== f) {
                        for (d = 0; p = n[d++];) p(g, v, a, s);
                        if (i) {
                            if (f > 0)
                                for (; h--;) g[h] || v[h] || (v[h] = Q.call(l));
                            v = m(v)
                        }
                        K.apply(l, v), c && !i && v.length > 0 && f + n.length > 1 && e.uniqueSort(l)
                    }
                    return c && (F = b, L = y), g
                };
            return r ? i(a) : a
        }
        var b, w, C, T, k, E, S, I, L, _, z, P, D, A, N, j, O, U, R, H = "sizzle" + 1 * new Date,
            M = t.document,
            F = 0,
            q = 0,
            B = n(),
            W = n(),
            $ = n(),
            X = function(t, e) {
                return t === e && (z = !0), 0
            },
            G = 1 << 31,
            V = {}.hasOwnProperty,
            Y = [],
            Q = Y.pop,
            Z = Y.push,
            K = Y.push,
            J = Y.slice,
            tt = function(t, e) {
                for (var n = 0, i = t.length; i > n; n++)
                    if (t[n] === e) return n;
                return -1
            },
            et = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            nt = "[\\x20\\t\\r\\n\\f]",
            it = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            rt = it.replace("w", "w#"),
            ot = "\\[" + nt + "*(" + it + ")(?:" + nt + "*([*^$|!~]?=)" + nt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + rt + "))|)" + nt + "*\\]",
            at = ":(" + it + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ot + ")*)|.*)\\)|)",
            st = new RegExp(nt + "+", "g"),
            lt = new RegExp("^" + nt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + nt + "+$", "g"),
            ct = new RegExp("^" + nt + "*," + nt + "*"),
            ut = new RegExp("^" + nt + "*([>+~]|" + nt + ")" + nt + "*"),
            dt = new RegExp("=" + nt + "*([^\\]'\"]*?)" + nt + "*\\]", "g"),
            pt = new RegExp(at),
            ft = new RegExp("^" + rt + "$"),
            ht = {
                ID: new RegExp("^#(" + it + ")"),
                CLASS: new RegExp("^\\.(" + it + ")"),
                TAG: new RegExp("^(" + it.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + ot),
                PSEUDO: new RegExp("^" + at),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + nt + "*(even|odd|(([+-]|)(\\d*)n|)" + nt + "*(?:([+-]|)" + nt + "*(\\d+)|))" + nt + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + et + ")$", "i"),
                needsContext: new RegExp("^" + nt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + nt + "*((?:-\\d)?\\d*)" + nt + "*\\)|)(?=[^-]|$)", "i")
            },
            gt = /^(?:input|select|textarea|button)$/i,
            mt = /^h\d$/i,
            vt = /^[^{]+\{\s*\[native \w/,
            yt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            xt = /[+~]/,
            bt = /'|\\/g,
            wt = new RegExp("\\\\([\\da-f]{1,6}" + nt + "?|(" + nt + ")|.)", "ig"),
            Ct = function(t, e, n) {
                var i = "0x" + e - 65536;
                return i !== i || n ? e : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            },
            Tt = function() {
                P()
            };
        try {
            K.apply(Y = J.call(M.childNodes), M.childNodes), Y[M.childNodes.length].nodeType
        } catch (kt) {
            K = {
                apply: Y.length ? function(t, e) {
                    Z.apply(t, J.call(e))
                } : function(t, e) {
                    for (var n = t.length, i = 0; t[n++] = e[i++];);
                    t.length = n - 1
                }
            }
        }
        w = e.support = {}, k = e.isXML = function(t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return e ? "HTML" !== e.nodeName : !1
        }, P = e.setDocument = function(t) {
            var e, n, i = t ? t.ownerDocument || t : M;
            return i !== D && 9 === i.nodeType && i.documentElement ? (D = i, A = i.documentElement, n = i.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", Tt, !1) : n.attachEvent && n.attachEvent("onunload", Tt)), N = !k(i), w.attributes = r(function(t) {
                return t.className = "i", !t.getAttribute("className")
            }), w.getElementsByTagName = r(function(t) {
                return t.appendChild(i.createComment("")), !t.getElementsByTagName("*").length
            }), w.getElementsByClassName = vt.test(i.getElementsByClassName), w.getById = r(function(t) {
                return A.appendChild(t).id = H, !i.getElementsByName || !i.getElementsByName(H).length
            }), w.getById ? (C.find.ID = function(t, e) {
                if ("undefined" != typeof e.getElementById && N) {
                    var n = e.getElementById(t);
                    return n && n.parentNode ? [n] : []
                }
            }, C.filter.ID = function(t) {
                var e = t.replace(wt, Ct);
                return function(t) {
                    return t.getAttribute("id") === e
                }
            }) : (delete C.find.ID, C.filter.ID = function(t) {
                var e = t.replace(wt, Ct);
                return function(t) {
                    var n = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                    return n && n.value === e
                }
            }), C.find.TAG = w.getElementsByTagName ? function(t, e) {
                return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : w.qsa ? e.querySelectorAll(t) : void 0
            } : function(t, e) {
                var n, i = [],
                    r = 0,
                    o = e.getElementsByTagName(t);
                if ("*" === t) {
                    for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                    return i
                }
                return o
            }, C.find.CLASS = w.getElementsByClassName && function(t, e) {
                return N ? e.getElementsByClassName(t) : void 0
            }, O = [], j = [], (w.qsa = vt.test(i.querySelectorAll)) && (r(function(t) {
                A.appendChild(t).innerHTML = "<a id='" + H + "'></a><select id='" + H + "-\f]' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && j.push("[*^$]=" + nt + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || j.push("\\[" + nt + "*(?:value|" + et + ")"), t.querySelectorAll("[id~=" + H + "-]").length || j.push("~="), t.querySelectorAll(":checked").length || j.push(":checked"), t.querySelectorAll("a#" + H + "+*").length || j.push(".#.+[+~]")
            }), r(function(t) {
                var e = i.createElement("input");
                e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && j.push("name" + nt + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || j.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), j.push(",.*:")
            })), (w.matchesSelector = vt.test(U = A.matches || A.webkitMatchesSelector || A.mozMatchesSelector || A.oMatchesSelector || A.msMatchesSelector)) && r(function(t) {
                w.disconnectedMatch = U.call(t, "div"), U.call(t, "[s!='']:x"), O.push("!=", at)
            }), j = j.length && new RegExp(j.join("|")), O = O.length && new RegExp(O.join("|")), e = vt.test(A.compareDocumentPosition), R = e || vt.test(A.contains) ? function(t, e) {
                var n = 9 === t.nodeType ? t.documentElement : t,
                    i = e && e.parentNode;
                return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
            } : function(t, e) {
                if (e)
                    for (; e = e.parentNode;)
                        if (e === t) return !0;
                return !1
            }, X = e ? function(t, e) {
                if (t === e) return z = !0, 0;
                var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return n ? n : (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & n || !w.sortDetached && e.compareDocumentPosition(t) === n ? t === i || t.ownerDocument === M && R(M, t) ? -1 : e === i || e.ownerDocument === M && R(M, e) ? 1 : _ ? tt(_, t) - tt(_, e) : 0 : 4 & n ? -1 : 1)
            } : function(t, e) {
                if (t === e) return z = !0, 0;
                var n, r = 0,
                    o = t.parentNode,
                    s = e.parentNode,
                    l = [t],
                    c = [e];
                if (!o || !s) return t === i ? -1 : e === i ? 1 : o ? -1 : s ? 1 : _ ? tt(_, t) - tt(_, e) : 0;
                if (o === s) return a(t, e);
                for (n = t; n = n.parentNode;) l.unshift(n);
                for (n = e; n = n.parentNode;) c.unshift(n);
                for (; l[r] === c[r];) r++;
                return r ? a(l[r], c[r]) : l[r] === M ? -1 : c[r] === M ? 1 : 0
            }, i) : D
        }, e.matches = function(t, n) {
            return e(t, null, null, n)
        }, e.matchesSelector = function(t, n) {
            if ((t.ownerDocument || t) !== D && P(t), n = n.replace(dt, "='$1']"), !(!w.matchesSelector || !N || O && O.test(n) || j && j.test(n))) try {
                var i = U.call(t, n);
                if (i || w.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
            } catch (r) {}
            return e(n, D, null, [t]).length > 0
        }, e.contains = function(t, e) {
            return (t.ownerDocument || t) !== D && P(t), R(t, e)
        }, e.attr = function(t, e) {
            (t.ownerDocument || t) !== D && P(t);
            var n = C.attrHandle[e.toLowerCase()],
                i = n && V.call(C.attrHandle, e.toLowerCase()) ? n(t, e, !N) : void 0;
            return void 0 !== i ? i : w.attributes || !N ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
        }, e.error = function(t) {
            throw new Error("Syntax error, unrecognized expression: " + t)
        }, e.uniqueSort = function(t) {
            var e, n = [],
                i = 0,
                r = 0;
            if (z = !w.detectDuplicates, _ = !w.sortStable && t.slice(0), t.sort(X), z) {
                for (; e = t[r++];) e === t[r] && (i = n.push(r));
                for (; i--;) t.splice(n[i], 1)
            }
            return _ = null, t
        }, T = e.getText = function(t) {
            var e, n = "",
                i = 0,
                r = t.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof t.textContent) return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling) n += T(t)
                } else if (3 === r || 4 === r) return t.nodeValue
            } else
                for (; e = t[i++];) n += T(e);
            return n
        }, C = e.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: ht,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(t) {
                    return t[1] = t[1].replace(wt, Ct), t[3] = (t[3] || t[4] || t[5] || "").replace(wt, Ct), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                },
                CHILD: function(t) {
                    return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                },
                PSEUDO: function(t) {
                    var e, n = !t[6] && t[2];
                    return ht.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && pt.test(n) && (e = E(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                }
            },
            filter: {
                TAG: function(t) {
                    var e = t.replace(wt, Ct).toLowerCase();
                    return "*" === t ? function() {
                        return !0
                    } : function(t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    }
                },
                CLASS: function(t) {
                    var e = B[t + " "];
                    return e || (e = new RegExp("(^|" + nt + ")" + t + "(" + nt + "|$)")) && B(t, function(t) {
                        return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
                    })
                },
                ATTR: function(t, n, i) {
                    return function(r) {
                        var o = e.attr(r, t);
                        return null == o ? "!=" === n : n ? (o += "", "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o.replace(st, " ") + " ").indexOf(i) > -1 : "|=" === n ? o === i || o.slice(0, i.length + 1) === i + "-" : !1) : !0
                    }
                },
                CHILD: function(t, e, n, i, r) {
                    var o = "nth" !== t.slice(0, 3),
                        a = "last" !== t.slice(-4),
                        s = "of-type" === e;
                    return 1 === i && 0 === r ? function(t) {
                        return !!t.parentNode
                    } : function(e, n, l) {
                        var c, u, d, p, f, h, g = o !== a ? "nextSibling" : "previousSibling",
                            m = e.parentNode,
                            v = s && e.nodeName.toLowerCase(),
                            y = !l && !s;
                        if (m) {
                            if (o) {
                                for (; g;) {
                                    for (d = e; d = d[g];)
                                        if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                    h = g = "only" === t && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? m.firstChild : m.lastChild], a && y) {
                                for (u = m[H] || (m[H] = {}), c = u[t] || [], f = c[0] === F && c[1], p = c[0] === F && c[2], d = f && m.childNodes[f]; d = ++f && d && d[g] || (p = f = 0) || h.pop();)
                                    if (1 === d.nodeType && ++p && d === e) {
                                        u[t] = [F, f, p];
                                        break
                                    }
                            } else if (y && (c = (e[H] || (e[H] = {}))[t]) && c[0] === F) p = c[1];
                            else
                                for (;
                                    (d = ++f && d && d[g] || (p = f = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++p || (y && ((d[H] || (d[H] = {}))[t] = [F, p]), d !== e)););
                            return p -= r, p === i || p % i === 0 && p / i >= 0
                        }
                    }
                },
                PSEUDO: function(t, n) {
                    var r, o = C.pseudos[t] || C.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                    return o[H] ? o(n) : o.length > 1 ? (r = [t, t, "", n], C.setFilters.hasOwnProperty(t.toLowerCase()) ? i(function(t, e) {
                        for (var i, r = o(t, n), a = r.length; a--;) i = tt(t, r[a]), t[i] = !(e[i] = r[a])
                    }) : function(t) {
                        return o(t, 0, r)
                    }) : o
                }
            },
            pseudos: {
                not: i(function(t) {
                    var e = [],
                        n = [],
                        r = S(t.replace(lt, "$1"));
                    return r[H] ? i(function(t, e, n, i) {
                        for (var o, a = r(t, null, i, []), s = t.length; s--;)(o = a[s]) && (t[s] = !(e[s] = o))
                    }) : function(t, i, o) {
                        return e[0] = t, r(e, null, o, n), e[0] = null, !n.pop()
                    }
                }),
                has: i(function(t) {
                    return function(n) {
                        return e(t, n).length > 0
                    }
                }),
                contains: i(function(t) {
                    return t = t.replace(wt, Ct),
                        function(e) {
                            return (e.textContent || e.innerText || T(e)).indexOf(t) > -1
                        }
                }),
                lang: i(function(t) {
                    return ft.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(wt, Ct).toLowerCase(),
                        function(e) {
                            var n;
                            do
                                if (n = N ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return n = n.toLowerCase(), n === t || 0 === n.indexOf(t + "-");
                            while ((e = e.parentNode) && 1 === e.nodeType);
                            return !1
                        }
                }),
                target: function(e) {
                    var n = t.location && t.location.hash;
                    return n && n.slice(1) === e.id
                },
                root: function(t) {
                    return t === A
                },
                focus: function(t) {
                    return t === D.activeElement && (!D.hasFocus || D.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                },
                enabled: function(t) {
                    return t.disabled === !1
                },
                disabled: function(t) {
                    return t.disabled === !0
                },
                checked: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !!t.checked || "option" === e && !!t.selected
                },
                selected: function(t) {
                    return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                },
                empty: function(t) {
                    for (t = t.firstChild; t; t = t.nextSibling)
                        if (t.nodeType < 6) return !1;
                    return !0
                },
                parent: function(t) {
                    return !C.pseudos.empty(t)
                },
                header: function(t) {
                    return mt.test(t.nodeName)
                },
                input: function(t) {
                    return gt.test(t.nodeName)
                },
                button: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e
                },
                text: function(t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                },
                first: c(function() {
                    return [0]
                }),
                last: c(function(t, e) {
                    return [e - 1]
                }),
                eq: c(function(t, e, n) {
                    return [0 > n ? n + e : n]
                }),
                even: c(function(t, e) {
                    for (var n = 0; e > n; n += 2) t.push(n);
                    return t
                }),
                odd: c(function(t, e) {
                    for (var n = 1; e > n; n += 2) t.push(n);
                    return t
                }),
                lt: c(function(t, e, n) {
                    for (var i = 0 > n ? n + e : n; --i >= 0;) t.push(i);
                    return t
                }),
                gt: c(function(t, e, n) {
                    for (var i = 0 > n ? n + e : n; ++i < e;) t.push(i);
                    return t
                })
            }
        }, C.pseudos.nth = C.pseudos.eq;
        for (b in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) C.pseudos[b] = s(b);
        for (b in {
                submit: !0,
                reset: !0
            }) C.pseudos[b] = l(b);
        return d.prototype = C.filters = C.pseudos, C.setFilters = new d, E = e.tokenize = function(t, n) {
            var i, r, o, a, s, l, c, u = W[t + " "];
            if (u) return n ? 0 : u.slice(0);
            for (s = t, l = [], c = C.preFilter; s;) {
                (!i || (r = ct.exec(s))) && (r && (s = s.slice(r[0].length) || s), l.push(o = [])), i = !1, (r = ut.exec(s)) && (i = r.shift(), o.push({
                    value: i,
                    type: r[0].replace(lt, " ")
                }), s = s.slice(i.length));
                for (a in C.filter) !(r = ht[a].exec(s)) || c[a] && !(r = c[a](r)) || (i = r.shift(), o.push({
                    value: i,
                    type: a,
                    matches: r
                }), s = s.slice(i.length));
                if (!i) break
            }
            return n ? s.length : s ? e.error(t) : W(t, l).slice(0)
        }, S = e.compile = function(t, e) {
            var n, i = [],
                r = [],
                o = $[t + " "];
            if (!o) {
                for (e || (e = E(t)), n = e.length; n--;) o = y(e[n]), o[H] ? i.push(o) : r.push(o);
                o = $(t, x(r, i)), o.selector = t
            }
            return o
        }, I = e.select = function(t, e, n, i) {
            var r, o, a, s, l, c = "function" == typeof t && t,
                d = !i && E(t = c.selector || t);
            if (n = n || [], 1 === d.length) {
                if (o = d[0] = d[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && w.getById && 9 === e.nodeType && N && C.relative[o[1].type]) {
                    if (e = (C.find.ID(a.matches[0].replace(wt, Ct), e) || [])[0], !e) return n;
                    c && (e = e.parentNode), t = t.slice(o.shift().value.length)
                }
                for (r = ht.needsContext.test(t) ? 0 : o.length; r-- && (a = o[r], !C.relative[s = a.type]);)
                    if ((l = C.find[s]) && (i = l(a.matches[0].replace(wt, Ct), xt.test(o[0].type) && u(e.parentNode) || e))) {
                        if (o.splice(r, 1), t = i.length && p(o), !t) return K.apply(n, i), n;
                        break
                    }
            }
            return (c || S(t, d))(i, e, !N, n, xt.test(t) && u(e.parentNode) || e), n
        }, w.sortStable = H.split("").sort(X).join("") === H, w.detectDuplicates = !!z, P(), w.sortDetached = r(function(t) {
            return 1 & t.compareDocumentPosition(D.createElement("div"))
        }), r(function(t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function(t, e, n) {
            return n ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }), w.attributes && r(function(t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
        }) || o("value", function(t, e, n) {
            return n || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
        }), r(function(t) {
            return null == t.getAttribute("disabled")
        }) || o(et, function(t, e, n) {
            var i;
            return n ? void 0 : t[e] === !0 ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
        }), e
    }(t);
    J.find = rt, J.expr = rt.selectors, J.expr[":"] = J.expr.pseudos, J.unique = rt.uniqueSort, J.text = rt.getText, J.isXMLDoc = rt.isXML, J.contains = rt.contains;
    var ot = J.expr.match.needsContext,
        at = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        st = /^.[^:#\[\.,]*$/;
    J.filter = function(t, e, n) {
        var i = e[0];
        return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? J.find.matchesSelector(i, t) ? [i] : [] : J.find.matches(t, J.grep(e, function(t) {
            return 1 === t.nodeType
        }))
    }, J.fn.extend({
        find: function(t) {
            var e, n = this.length,
                i = [],
                r = this;
            if ("string" != typeof t) return this.pushStack(J(t).filter(function() {
                for (e = 0; n > e; e++)
                    if (J.contains(r[e], this)) return !0
            }));
            for (e = 0; n > e; e++) J.find(t, r[e], i);
            return i = this.pushStack(n > 1 ? J.unique(i) : i), i.selector = this.selector ? this.selector + " " + t : t, i
        },
        filter: function(t) {
            return this.pushStack(i(this, t || [], !1))
        },
        not: function(t) {
            return this.pushStack(i(this, t || [], !0))
        },
        is: function(t) {
            return !!i(this, "string" == typeof t && ot.test(t) ? J(t) : t || [], !1).length
        }
    });
    var lt, ct = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        ut = J.fn.init = function(t, e) {
            var n, i;
            if (!t) return this;
            if ("string" == typeof t) {
                if (n = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : ct.exec(t), !n || !n[1] && e) return !e || e.jquery ? (e || lt).find(t) : this.constructor(e).find(t);
                if (n[1]) {
                    if (e = e instanceof J ? e[0] : e, J.merge(this, J.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : Z, !0)), at.test(n[1]) && J.isPlainObject(e))
                        for (n in e) J.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                    return this
                }
                return i = Z.getElementById(n[2]), i && i.parentNode && (this.length = 1, this[0] = i), this.context = Z, this.selector = t, this
            }
            return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : J.isFunction(t) ? "undefined" != typeof lt.ready ? lt.ready(t) : t(J) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), J.makeArray(t, this))
        };
    ut.prototype = J.fn, lt = J(Z);
    var dt = /^(?:parents|prev(?:Until|All))/,
        pt = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    J.extend({
        dir: function(t, e, n) {
            for (var i = [], r = void 0 !== n;
                (t = t[e]) && 9 !== t.nodeType;)
                if (1 === t.nodeType) {
                    if (r && J(t).is(n)) break;
                    i.push(t)
                }
            return i
        },
        sibling: function(t, e) {
            for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
            return n
        }
    }), J.fn.extend({
        has: function(t) {
            var e = J(t, this),
                n = e.length;
            return this.filter(function() {
                for (var t = 0; n > t; t++)
                    if (J.contains(this, e[t])) return !0
            })
        },
        closest: function(t, e) {
            for (var n, i = 0, r = this.length, o = [], a = ot.test(t) || "string" != typeof t ? J(t, e || this.context) : 0; r > i; i++)
                for (n = this[i]; n && n !== e; n = n.parentNode)
                    if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && J.find.matchesSelector(n, t))) {
                        o.push(n);
                        break
                    }
            return this.pushStack(o.length > 1 ? J.unique(o) : o)
        },
        index: function(t) {
            return t ? "string" == typeof t ? X.call(J(t), this[0]) : X.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(t, e) {
            return this.pushStack(J.unique(J.merge(this.get(), J(t, e))))
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), J.each({
        parent: function(t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function(t) {
            return J.dir(t, "parentNode")
        },
        parentsUntil: function(t, e, n) {
            return J.dir(t, "parentNode", n)
        },
        next: function(t) {
            return r(t, "nextSibling")
        },
        prev: function(t) {
            return r(t, "previousSibling")
        },
        nextAll: function(t) {
            return J.dir(t, "nextSibling")
        },
        prevAll: function(t) {
            return J.dir(t, "previousSibling")
        },
        nextUntil: function(t, e, n) {
            return J.dir(t, "nextSibling", n)
        },
        prevUntil: function(t, e, n) {
            return J.dir(t, "previousSibling", n)
        },
        siblings: function(t) {
            return J.sibling((t.parentNode || {}).firstChild, t)
        },
        children: function(t) {
            return J.sibling(t.firstChild)
        },
        contents: function(t) {
            return t.contentDocument || J.merge([], t.childNodes)
        }
    }, function(t, e) {
        J.fn[t] = function(n, i) {
            var r = J.map(this, e, n);
            return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (r = J.filter(i, r)), this.length > 1 && (pt[t] || J.unique(r), dt.test(t) && r.reverse()), this.pushStack(r)
        }
    });
    var ft = /\S+/g,
        ht = {};
    J.Callbacks = function(t) {
        t = "string" == typeof t ? ht[t] || o(t) : J.extend({}, t);
        var e, n, i, r, a, s, l = [],
            c = !t.once && [],
            u = function(o) {
                for (e = t.memory && o, n = !0, s = r || 0, r = 0, a = l.length, i = !0; l && a > s; s++)
                    if (l[s].apply(o[0], o[1]) === !1 && t.stopOnFalse) {
                        e = !1;
                        break
                    }
                i = !1, l && (c ? c.length && u(c.shift()) : e ? l = [] : d.disable())
            },
            d = {
                add: function() {
                    if (l) {
                        var n = l.length;
                        ! function o(e) {
                            J.each(e, function(e, n) {
                                var i = J.type(n);
                                "function" === i ? t.unique && d.has(n) || l.push(n) : n && n.length && "string" !== i && o(n)
                            })
                        }(arguments), i ? a = l.length : e && (r = n, u(e))
                    }
                    return this
                },
                remove: function() {
                    return l && J.each(arguments, function(t, e) {
                        for (var n;
                            (n = J.inArray(e, l, n)) > -1;) l.splice(n, 1), i && (a >= n && a--, s >= n && s--)
                    }), this
                },
                has: function(t) {
                    return t ? J.inArray(t, l) > -1 : !(!l || !l.length)
                },
                empty: function() {
                    return l = [], a = 0, this
                },
                disable: function() {
                    return l = c = e = void 0, this
                },
                disabled: function() {
                    return !l
                },
                lock: function() {
                    return c = void 0, e || d.disable(), this
                },
                locked: function() {
                    return !c
                },
                fireWith: function(t, e) {
                    return !l || n && !c || (e = e || [], e = [t, e.slice ? e.slice() : e], i ? c.push(e) : u(e)), this
                },
                fire: function() {
                    return d.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!n
                }
            };
        return d
    }, J.extend({
        Deferred: function(t) {
            var e = [
                    ["resolve", "done", J.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", J.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", J.Callbacks("memory")]
                ],
                n = "pending",
                i = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return r.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var t = arguments;
                        return J.Deferred(function(n) {
                            J.each(e, function(e, o) {
                                var a = J.isFunction(t[e]) && t[e];
                                r[o[1]](function() {
                                    var t = a && a.apply(this, arguments);
                                    t && J.isFunction(t.promise) ? t.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === i ? n.promise() : this, a ? [t] : arguments)
                                })
                            }), t = null
                        }).promise()
                    },
                    promise: function(t) {
                        return null != t ? J.extend(t, i) : i
                    }
                },
                r = {};
            return i.pipe = i.then, J.each(e, function(t, o) {
                var a = o[2],
                    s = o[3];
                i[o[1]] = a.add, s && a.add(function() {
                    n = s
                }, e[1 ^ t][2].disable, e[2][2].lock), r[o[0]] = function() {
                    return r[o[0] + "With"](this === r ? i : this, arguments), this
                }, r[o[0] + "With"] = a.fireWith
            }), i.promise(r), t && t.call(r, r), r
        },
        when: function(t) {
            var e, n, i, r = 0,
                o = B.call(arguments),
                a = o.length,
                s = 1 !== a || t && J.isFunction(t.promise) ? a : 0,
                l = 1 === s ? t : J.Deferred(),
                c = function(t, n, i) {
                    return function(r) {
                        n[t] = this, i[t] = arguments.length > 1 ? B.call(arguments) : r, i === e ? l.notifyWith(n, i) : --s || l.resolveWith(n, i)
                    }
                };
            if (a > 1)
                for (e = new Array(a), n = new Array(a), i = new Array(a); a > r; r++) o[r] && J.isFunction(o[r].promise) ? o[r].promise().done(c(r, i, o)).fail(l.reject).progress(c(r, n, e)) : --s;
            return s || l.resolveWith(i, o), l.promise()
        }
    });
    var gt;
    J.fn.ready = function(t) {
        return J.ready.promise().done(t), this
    }, J.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(t) {
            t ? J.readyWait++ : J.ready(!0)
        },
        ready: function(t) {
            (t === !0 ? --J.readyWait : J.isReady) || (J.isReady = !0, t !== !0 && --J.readyWait > 0 || (gt.resolveWith(Z, [J]), J.fn.triggerHandler && (J(Z).triggerHandler("ready"), J(Z).off("ready"))))
        }
    }), J.ready.promise = function(e) {
        return gt || (gt = J.Deferred(), "complete" === Z.readyState ? setTimeout(J.ready) : (Z.addEventListener("DOMContentLoaded", a, !1), t.addEventListener("load", a, !1))), gt.promise(e)
    }, J.ready.promise();
    var mt = J.access = function(t, e, n, i, r, o, a) {
        var s = 0,
            l = t.length,
            c = null == n;
        if ("object" === J.type(n)) {
            r = !0;
            for (s in n) J.access(t, e, s, n[s], !0, o, a)
        } else if (void 0 !== i && (r = !0, J.isFunction(i) || (a = !0), c && (a ? (e.call(t, i), e = null) : (c = e, e = function(t, e, n) {
                return c.call(J(t), n)
            })), e))
            for (; l > s; s++) e(t[s], n, a ? i : i.call(t[s], s, e(t[s], n)));
        return r ? t : c ? e.call(t) : l ? e(t[0], n) : o
    };
    J.acceptData = function(t) {
        return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
    }, s.uid = 1, s.accepts = J.acceptData, s.prototype = {
        key: function(t) {
            if (!s.accepts(t)) return 0;
            var e = {},
                n = t[this.expando];
            if (!n) {
                n = s.uid++;
                try {
                    e[this.expando] = {
                        value: n
                    }, Object.defineProperties(t, e)
                } catch (i) {
                    e[this.expando] = n, J.extend(t, e)
                }
            }
            return this.cache[n] || (this.cache[n] = {}), n
        },
        set: function(t, e, n) {
            var i, r = this.key(t),
                o = this.cache[r];
            if ("string" == typeof e) o[e] = n;
            else if (J.isEmptyObject(o)) J.extend(this.cache[r], e);
            else
                for (i in e) o[i] = e[i];
            return o
        },
        get: function(t, e) {
            var n = this.cache[this.key(t)];
            return void 0 === e ? n : n[e]
        },
        access: function(t, e, n) {
            var i;
            return void 0 === e || e && "string" == typeof e && void 0 === n ? (i = this.get(t, e), void 0 !== i ? i : this.get(t, J.camelCase(e))) : (this.set(t, e, n), void 0 !== n ? n : e)
        },
        remove: function(t, e) {
            var n, i, r, o = this.key(t),
                a = this.cache[o];
            if (void 0 === e) this.cache[o] = {};
            else {
                J.isArray(e) ? i = e.concat(e.map(J.camelCase)) : (r = J.camelCase(e), e in a ? i = [e, r] : (i = r, i = i in a ? [i] : i.match(ft) || [])), n = i.length;
                for (; n--;) delete a[i[n]]
            }
        },
        hasData: function(t) {
            return !J.isEmptyObject(this.cache[t[this.expando]] || {})
        },
        discard: function(t) {
            t[this.expando] && delete this.cache[t[this.expando]]
        }
    };
    var vt = new s,
        yt = new s,
        xt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        bt = /([A-Z])/g;
    J.extend({
        hasData: function(t) {
            return yt.hasData(t) || vt.hasData(t)
        },
        data: function(t, e, n) {
            return yt.access(t, e, n)
        },
        removeData: function(t, e) {
            yt.remove(t, e)
        },
        _data: function(t, e, n) {
            return vt.access(t, e, n)
        },
        _removeData: function(t, e) {
            vt.remove(t, e)
        }
    }), J.fn.extend({
        data: function(t, e) {
            var n, i, r, o = this[0],
                a = o && o.attributes;
            if (void 0 === t) {
                if (this.length && (r = yt.get(o), 1 === o.nodeType && !vt.get(o, "hasDataAttrs"))) {
                    for (n = a.length; n--;) a[n] && (i = a[n].name, 0 === i.indexOf("data-") && (i = J.camelCase(i.slice(5)), l(o, i, r[i])));
                    vt.set(o, "hasDataAttrs", !0)
                }
                return r
            }
            return "object" == typeof t ? this.each(function() {
                yt.set(this, t)
            }) : mt(this, function(e) {
                var n, i = J.camelCase(t);
                if (o && void 0 === e) {
                    if (n = yt.get(o, t), void 0 !== n) return n;
                    if (n = yt.get(o, i), void 0 !== n) return n;
                    if (n = l(o, i, void 0), void 0 !== n) return n
                } else this.each(function() {
                    var n = yt.get(this, i);
                    yt.set(this, i, e), -1 !== t.indexOf("-") && void 0 !== n && yt.set(this, t, e)
                })
            }, null, e, arguments.length > 1, null, !0)
        },
        removeData: function(t) {
            return this.each(function() {
                yt.remove(this, t)
            })
        }
    }), J.extend({
        queue: function(t, e, n) {
            var i;
            return t ? (e = (e || "fx") + "queue", i = vt.get(t, e), n && (!i || J.isArray(n) ? i = vt.access(t, e, J.makeArray(n)) : i.push(n)), i || []) : void 0
        },
        dequeue: function(t, e) {
            e = e || "fx";
            var n = J.queue(t, e),
                i = n.length,
                r = n.shift(),
                o = J._queueHooks(t, e),
                a = function() {
                    J.dequeue(t, e)
                };
            "inprogress" === r && (r = n.shift(), i--), r && ("fx" === e && n.unshift("inprogress"), delete o.stop, r.call(t, a, o)), !i && o && o.empty.fire()
        },
        _queueHooks: function(t, e) {
            var n = e + "queueHooks";
            return vt.get(t, n) || vt.access(t, n, {
                empty: J.Callbacks("once memory").add(function() {
                    vt.remove(t, [e + "queue", n])
                })
            })
        }
    }), J.fn.extend({
        queue: function(t, e) {
            var n = 2;
            return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? J.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                var n = J.queue(this, t, e);
                J._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && J.dequeue(this, t)
            })
        },
        dequeue: function(t) {
            return this.each(function() {
                J.dequeue(this, t)
            })
        },
        clearQueue: function(t) {
            return this.queue(t || "fx", [])
        },
        promise: function(t, e) {
            var n, i = 1,
                r = J.Deferred(),
                o = this,
                a = this.length,
                s = function() {
                    --i || r.resolveWith(o, [o])
                };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; a--;) n = vt.get(o[a], t + "queueHooks"), n && n.empty && (i++, n.empty.add(s));
            return s(), r.promise(e)
        }
    });
    var wt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Ct = ["Top", "Right", "Bottom", "Left"],
        Tt = function(t, e) {
            return t = e || t, "none" === J.css(t, "display") || !J.contains(t.ownerDocument, t)
        },
        kt = /^(?:checkbox|radio)$/i;
    ! function() {
        var t = Z.createDocumentFragment(),
            e = t.appendChild(Z.createElement("div")),
            n = Z.createElement("input");
        n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), e.appendChild(n), Q.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", Q.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
    }();
    var Et = "undefined";
    Q.focusinBubbles = "onfocusin" in t;
    var St = /^key/,
        It = /^(?:mouse|pointer|contextmenu)|click/,
        Lt = /^(?:focusinfocus|focusoutblur)$/,
        _t = /^([^.]*)(?:\.(.+)|)$/;
    J.event = {
        global: {},
        add: function(t, e, n, i, r) {
            var o, a, s, l, c, u, d, p, f, h, g, m = vt.get(t);
            if (m)
                for (n.handler && (o = n, n = o.handler, r = o.selector), n.guid || (n.guid = J.guid++), (l = m.events) || (l = m.events = {}), (a = m.handle) || (a = m.handle = function(e) {
                        return typeof J !== Et && J.event.triggered !== e.type ? J.event.dispatch.apply(t, arguments) : void 0
                    }), e = (e || "").match(ft) || [""], c = e.length; c--;) s = _t.exec(e[c]) || [], f = g = s[1], h = (s[2] || "").split(".").sort(), f && (d = J.event.special[f] || {}, f = (r ? d.delegateType : d.bindType) || f, d = J.event.special[f] || {}, u = J.extend({
                    type: f,
                    origType: g,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: r,
                    needsContext: r && J.expr.match.needsContext.test(r),
                    namespace: h.join(".")
                }, o), (p = l[f]) || (p = l[f] = [], p.delegateCount = 0, d.setup && d.setup.call(t, i, h, a) !== !1 || t.addEventListener && t.addEventListener(f, a, !1)), d.add && (d.add.call(t, u), u.handler.guid || (u.handler.guid = n.guid)), r ? p.splice(p.delegateCount++, 0, u) : p.push(u), J.event.global[f] = !0)
        },
        remove: function(t, e, n, i, r) {
            var o, a, s, l, c, u, d, p, f, h, g, m = vt.hasData(t) && vt.get(t);
            if (m && (l = m.events)) {
                for (e = (e || "").match(ft) || [""], c = e.length; c--;)
                    if (s = _t.exec(e[c]) || [], f = g = s[1], h = (s[2] || "").split(".").sort(), f) {
                        for (d = J.event.special[f] || {}, f = (i ? d.delegateType : d.bindType) || f, p = l[f] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length; o--;) u = p[o], !r && g !== u.origType || n && n.guid !== u.guid || s && !s.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (p.splice(o, 1), u.selector && p.delegateCount--, d.remove && d.remove.call(t, u));
                        a && !p.length && (d.teardown && d.teardown.call(t, h, m.handle) !== !1 || J.removeEvent(t, f, m.handle), delete l[f])
                    } else
                        for (f in l) J.event.remove(t, f + e[c], n, i, !0);
                J.isEmptyObject(l) && (delete m.handle, vt.remove(t, "events"))
            }
        },
        trigger: function(e, n, i, r) {
            var o, a, s, l, c, u, d, p = [i || Z],
                f = Y.call(e, "type") ? e.type : e,
                h = Y.call(e, "namespace") ? e.namespace.split(".") : [];
            if (a = s = i = i || Z, 3 !== i.nodeType && 8 !== i.nodeType && !Lt.test(f + J.event.triggered) && (f.indexOf(".") >= 0 && (h = f.split("."), f = h.shift(), h.sort()), c = f.indexOf(":") < 0 && "on" + f, e = e[J.expando] ? e : new J.Event(f, "object" == typeof e && e), e.isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), n = null == n ? [e] : J.makeArray(n, [e]), d = J.event.special[f] || {}, r || !d.trigger || d.trigger.apply(i, n) !== !1)) {
                if (!r && !d.noBubble && !J.isWindow(i)) {
                    for (l = d.delegateType || f, Lt.test(l + f) || (a = a.parentNode); a; a = a.parentNode) p.push(a), s = a;
                    s === (i.ownerDocument || Z) && p.push(s.defaultView || s.parentWindow || t)
                }
                for (o = 0;
                    (a = p[o++]) && !e.isPropagationStopped();) e.type = o > 1 ? l : d.bindType || f, u = (vt.get(a, "events") || {})[e.type] && vt.get(a, "handle"), u && u.apply(a, n), u = c && a[c], u && u.apply && J.acceptData(a) && (e.result = u.apply(a, n), e.result === !1 && e.preventDefault());
                return e.type = f, r || e.isDefaultPrevented() || d._default && d._default.apply(p.pop(), n) !== !1 || !J.acceptData(i) || c && J.isFunction(i[f]) && !J.isWindow(i) && (s = i[c], s && (i[c] = null), J.event.triggered = f, i[f](), J.event.triggered = void 0, s && (i[c] = s)), e.result
            }
        },
        dispatch: function(t) {
            t = J.event.fix(t);
            var e, n, i, r, o, a = [],
                s = B.call(arguments),
                l = (vt.get(this, "events") || {})[t.type] || [],
                c = J.event.special[t.type] || {};
            if (s[0] = t, t.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, t) !== !1) {
                for (a = J.event.handlers.call(this, t, l), e = 0;
                    (r = a[e++]) && !t.isPropagationStopped();)
                    for (t.currentTarget = r.elem, n = 0;
                        (o = r.handlers[n++]) && !t.isImmediatePropagationStopped();)(!t.namespace_re || t.namespace_re.test(o.namespace)) && (t.handleObj = o, t.data = o.data, i = ((J.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, s), void 0 !== i && (t.result = i) === !1 && (t.preventDefault(), t.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, t), t.result
            }
        },
        handlers: function(t, e) {
            var n, i, r, o, a = [],
                s = e.delegateCount,
                l = t.target;
            if (s && l.nodeType && (!t.button || "click" !== t.type))
                for (; l !== this; l = l.parentNode || this)
                    if (l.disabled !== !0 || "click" !== t.type) {
                        for (i = [], n = 0; s > n; n++) o = e[n], r = o.selector + " ", void 0 === i[r] && (i[r] = o.needsContext ? J(r, this).index(l) >= 0 : J.find(r, this, null, [l]).length), i[r] && i.push(o);
                        i.length && a.push({
                            elem: l,
                            handlers: i
                        })
                    }
            return s < e.length && a.push({
                elem: this,
                handlers: e.slice(s)
            }), a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(t, e) {
                return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(t, e) {
                var n, i, r, o = e.button;
                return null == t.pageX && null != e.clientX && (n = t.target.ownerDocument || Z, i = n.documentElement, r = n.body, t.pageX = e.clientX + (i && i.scrollLeft || r && r.scrollLeft || 0) - (i && i.clientLeft || r && r.clientLeft || 0), t.pageY = e.clientY + (i && i.scrollTop || r && r.scrollTop || 0) - (i && i.clientTop || r && r.clientTop || 0)), t.which || void 0 === o || (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), t
            }
        },
        fix: function(t) {
            if (t[J.expando]) return t;
            var e, n, i, r = t.type,
                o = t,
                a = this.fixHooks[r];
            for (a || (this.fixHooks[r] = a = It.test(r) ? this.mouseHooks : St.test(r) ? this.keyHooks : {}), i = a.props ? this.props.concat(a.props) : this.props, t = new J.Event(o), e = i.length; e--;) n = i[e], t[n] = o[n];
            return t.target || (t.target = Z), 3 === t.target.nodeType && (t.target = t.target.parentNode), a.filter ? a.filter(t, o) : t
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== d() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === d() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && J.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function(t) {
                    return J.nodeName(t.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        },
        simulate: function(t, e, n, i) {
            var r = J.extend(new J.Event, n, {
                type: t,
                isSimulated: !0,
                originalEvent: {}
            });
            i ? J.event.trigger(r, null, e) : J.event.dispatch.call(e, r), r.isDefaultPrevented() && n.preventDefault()
        }
    }, J.removeEvent = function(t, e, n) {
        t.removeEventListener && t.removeEventListener(e, n, !1)
    }, J.Event = function(t, e) {
        return this instanceof J.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? c : u) : this.type = t, e && J.extend(this, e), this.timeStamp = t && t.timeStamp || J.now(), void(this[J.expando] = !0)) : new J.Event(t, e)
    }, J.Event.prototype = {
        isDefaultPrevented: u,
        isPropagationStopped: u,
        isImmediatePropagationStopped: u,
        preventDefault: function() {
            var t = this.originalEvent;
            this.isDefaultPrevented = c, t && t.preventDefault && t.preventDefault()
        },
        stopPropagation: function() {
            var t = this.originalEvent;
            this.isPropagationStopped = c, t && t.stopPropagation && t.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = c, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
        }
    }, J.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(t, e) {
        J.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function(t) {
                var n, i = this,
                    r = t.relatedTarget,
                    o = t.handleObj;
                return (!r || r !== i && !J.contains(i, r)) && (t.type = o.origType, n = o.handler.apply(this, arguments), t.type = e), n
            }
        }
    }), Q.focusinBubbles || J.each({
        focus: "focusin",
        blur: "focusout"
    }, function(t, e) {
        var n = function(t) {
            J.event.simulate(e, t.target, J.event.fix(t), !0)
        };
        J.event.special[e] = {
            setup: function() {
                var i = this.ownerDocument || this,
                    r = vt.access(i, e);
                r || i.addEventListener(t, n, !0), vt.access(i, e, (r || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this,
                    r = vt.access(i, e) - 1;
                r ? vt.access(i, e, r) : (i.removeEventListener(t, n, !0), vt.remove(i, e))
            }
        }
    }), J.fn.extend({
        on: function(t, e, n, i, r) {
            var o, a;
            if ("object" == typeof t) {
                "string" != typeof e && (n = n || e, e = void 0);
                for (a in t) this.on(a, e, n, t[a], r);
                return this
            }
            if (null == n && null == i ? (i = e, n = e = void 0) : null == i && ("string" == typeof e ? (i = n, n = void 0) : (i = n, n = e, e = void 0)), i === !1) i = u;
            else if (!i) return this;
            return 1 === r && (o = i, i = function(t) {
                return J().off(t), o.apply(this, arguments)
            }, i.guid = o.guid || (o.guid = J.guid++)), this.each(function() {
                J.event.add(this, t, i, n, e)
            })
        },
        one: function(t, e, n, i) {
            return this.on(t, e, n, i, 1)
        },
        off: function(t, e, n) {
            var i, r;
            if (t && t.preventDefault && t.handleObj) return i = t.handleObj, J(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof t) {
                for (r in t) this.off(r, e, t[r]);
                return this
            }
            return (e === !1 || "function" == typeof e) && (n = e, e = void 0), n === !1 && (n = u), this.each(function() {
                J.event.remove(this, t, n, e)
            })
        },
        trigger: function(t, e) {
            return this.each(function() {
                J.event.trigger(t, e, this)
            })
        },
        triggerHandler: function(t, e) {
            var n = this[0];
            return n ? J.event.trigger(t, e, n, !0) : void 0
        }
    });
    var zt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Pt = /<([\w:]+)/,
        Dt = /<|&#?\w+;/,
        At = /<(?:script|style|link)/i,
        Nt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        jt = /^$|\/(?:java|ecma)script/i,
        Ot = /^true\/(.*)/,
        Ut = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Rt = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Rt.optgroup = Rt.option, Rt.tbody = Rt.tfoot = Rt.colgroup = Rt.caption = Rt.thead, Rt.th = Rt.td, J.extend({
        clone: function(t, e, n) {
            var i, r, o, a, s = t.cloneNode(!0),
                l = J.contains(t.ownerDocument, t);
            if (!(Q.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || J.isXMLDoc(t)))
                for (a = v(s), o = v(t), i = 0, r = o.length; r > i; i++) y(o[i], a[i]);
            if (e)
                if (n)
                    for (o = o || v(t), a = a || v(s), i = 0, r = o.length; r > i; i++) m(o[i], a[i]);
                else m(t, s);
            return a = v(s, "script"), a.length > 0 && g(a, !l && v(t, "script")), s
        },
        buildFragment: function(t, e, n, i) {
            for (var r, o, a, s, l, c, u = e.createDocumentFragment(), d = [], p = 0, f = t.length; f > p; p++)
                if (r = t[p], r || 0 === r)
                    if ("object" === J.type(r)) J.merge(d, r.nodeType ? [r] : r);
                    else if (Dt.test(r)) {
                for (o = o || u.appendChild(e.createElement("div")), a = (Pt.exec(r) || ["", ""])[1].toLowerCase(), s = Rt[a] || Rt._default, o.innerHTML = s[1] + r.replace(zt, "<$1></$2>") + s[2], c = s[0]; c--;) o = o.lastChild;
                J.merge(d, o.childNodes), o = u.firstChild, o.textContent = ""
            } else d.push(e.createTextNode(r));
            for (u.textContent = "", p = 0; r = d[p++];)
                if ((!i || -1 === J.inArray(r, i)) && (l = J.contains(r.ownerDocument, r), o = v(u.appendChild(r), "script"), l && g(o), n))
                    for (c = 0; r = o[c++];) jt.test(r.type || "") && n.push(r);
            return u
        },
        cleanData: function(t) {
            for (var e, n, i, r, o = J.event.special, a = 0; void 0 !== (n = t[a]); a++) {
                if (J.acceptData(n) && (r = n[vt.expando], r && (e = vt.cache[r]))) {
                    if (e.events)
                        for (i in e.events) o[i] ? J.event.remove(n, i) : J.removeEvent(n, i, e.handle);
                    vt.cache[r] && delete vt.cache[r]
                }
                delete yt.cache[n[yt.expando]]
            }
        }
    }), J.fn.extend({
        text: function(t) {
            return mt(this, function(t) {
                return void 0 === t ? J.text(this) : this.empty().each(function() {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = t)
                })
            }, null, t, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = p(this, t);
                    e.appendChild(t)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = p(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        remove: function(t, e) {
            for (var n, i = t ? J.filter(t, this) : this, r = 0; null != (n = i[r]); r++) e || 1 !== n.nodeType || J.cleanData(v(n)), n.parentNode && (e && J.contains(n.ownerDocument, n) && g(v(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (J.cleanData(v(t, !1)), t.textContent = "");
            return this
        },
        clone: function(t, e) {
            return t = null == t ? !1 : t, e = null == e ? t : e, this.map(function() {
                return J.clone(this, t, e)
            })
        },
        html: function(t) {
            return mt(this, function(t) {
                var e = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                if ("string" == typeof t && !At.test(t) && !Rt[(Pt.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = t.replace(zt, "<$1></$2>");
                    try {
                        for (; i > n; n++) e = this[n] || {}, 1 === e.nodeType && (J.cleanData(v(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (r) {}
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function() {
            var t = arguments[0];
            return this.domManip(arguments, function(e) {
                t = this.parentNode, J.cleanData(v(this)), t && t.replaceChild(e, this)
            }), t && (t.length || t.nodeType) ? this : this.remove()
        },
        detach: function(t) {
            return this.remove(t, !0)
        },
        domManip: function(t, e) {
            t = W.apply([], t);
            var n, i, r, o, a, s, l = 0,
                c = this.length,
                u = this,
                d = c - 1,
                p = t[0],
                g = J.isFunction(p);
            if (g || c > 1 && "string" == typeof p && !Q.checkClone && Nt.test(p)) return this.each(function(n) {
                var i = u.eq(n);
                g && (t[0] = p.call(this, n, i.html())), i.domManip(t, e)
            });
            if (c && (n = J.buildFragment(t, this[0].ownerDocument, !1, this), i = n.firstChild, 1 === n.childNodes.length && (n = i), i)) {
                for (r = J.map(v(n, "script"), f), o = r.length; c > l; l++) a = n, l !== d && (a = J.clone(a, !0, !0), o && J.merge(r, v(a, "script"))), e.call(this[l], a, l);
                if (o)
                    for (s = r[r.length - 1].ownerDocument, J.map(r, h), l = 0; o > l; l++) a = r[l], jt.test(a.type || "") && !vt.access(a, "globalEval") && J.contains(s, a) && (a.src ? J._evalUrl && J._evalUrl(a.src) : J.globalEval(a.textContent.replace(Ut, "")))
            }
            return this
        }
    }), J.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(t, e) {
        J.fn[t] = function(t) {
            for (var n, i = [], r = J(t), o = r.length - 1, a = 0; o >= a; a++) n = a === o ? this : this.clone(!0), J(r[a])[e](n), $.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var Ht, Mt = {},
        Ft = /^margin/,
        qt = new RegExp("^(" + wt + ")(?!px)[a-z%]+$", "i"),
        Bt = function(e) {
            return e.ownerDocument.defaultView.opener ? e.ownerDocument.defaultView.getComputedStyle(e, null) : t.getComputedStyle(e, null)
        };
    ! function() {
        function e() {
            a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", a.innerHTML = "", r.appendChild(o);
            var e = t.getComputedStyle(a, null);
            n = "1%" !== e.top, i = "4px" === e.width, r.removeChild(o)
        }
        var n, i, r = Z.documentElement,
            o = Z.createElement("div"),
            a = Z.createElement("div");
        a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", Q.clearCloneStyle = "content-box" === a.style.backgroundClip, o.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", o.appendChild(a), t.getComputedStyle && J.extend(Q, {
            pixelPosition: function() {
                return e(), n
            },
            boxSizingReliable: function() {
                return null == i && e(), i
            },
            reliableMarginRight: function() {
                var e, n = a.appendChild(Z.createElement("div"));
                return n.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", a.style.width = "1px", r.appendChild(o), e = !parseFloat(t.getComputedStyle(n, null).marginRight), r.removeChild(o), a.removeChild(n), e
            }
        }))
    }(), J.swap = function(t, e, n, i) {
        var r, o, a = {};
        for (o in e) a[o] = t.style[o], t.style[o] = e[o];
        r = n.apply(t, i || []);
        for (o in e) t.style[o] = a[o];
        return r
    };
    var Wt = /^(none|table(?!-c[ea]).+)/,
        $t = new RegExp("^(" + wt + ")(.*)$", "i"),
        Xt = new RegExp("^([+-])=(" + wt + ")", "i"),
        Gt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Vt = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Yt = ["Webkit", "O", "Moz", "ms"];
    J.extend({
        cssHooks: {
            opacity: {
                get: function(t, e) {
                    if (e) {
                        var n = w(t, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(t, e, n, i) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var r, o, a, s = J.camelCase(e),
                    l = t.style;
                return e = J.cssProps[s] || (J.cssProps[s] = T(l, s)), a = J.cssHooks[e] || J.cssHooks[s], void 0 === n ? a && "get" in a && void 0 !== (r = a.get(t, !1, i)) ? r : l[e] : (o = typeof n, "string" === o && (r = Xt.exec(n)) && (n = (r[1] + 1) * r[2] + parseFloat(J.css(t, e)), o = "number"), void(null != n && n === n && ("number" !== o || J.cssNumber[s] || (n += "px"), Q.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (l[e] = "inherit"), a && "set" in a && void 0 === (n = a.set(t, n, i)) || (l[e] = n))))
            }
        },
        css: function(t, e, n, i) {
            var r, o, a, s = J.camelCase(e);
            return e = J.cssProps[s] || (J.cssProps[s] = T(t.style, s)), a = J.cssHooks[e] || J.cssHooks[s], a && "get" in a && (r = a.get(t, !0, n)), void 0 === r && (r = w(t, e, i)), "normal" === r && e in Vt && (r = Vt[e]), "" === n || n ? (o = parseFloat(r), n === !0 || J.isNumeric(o) ? o || 0 : r) : r
        }
    }), J.each(["height", "width"], function(t, e) {
        J.cssHooks[e] = {
            get: function(t, n, i) {
                return n ? Wt.test(J.css(t, "display")) && 0 === t.offsetWidth ? J.swap(t, Gt, function() {
                    return S(t, e, i)
                }) : S(t, e, i) : void 0
            },
            set: function(t, n, i) {
                var r = i && Bt(t);
                return k(t, n, i ? E(t, e, i, "border-box" === J.css(t, "boxSizing", !1, r), r) : 0)
            }
        }
    }), J.cssHooks.marginRight = C(Q.reliableMarginRight, function(t, e) {
        return e ? J.swap(t, {
            display: "inline-block"
        }, w, [t, "marginRight"]) : void 0
    }), J.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(t, e) {
        J.cssHooks[t + e] = {
            expand: function(n) {
                for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) r[t + Ct[i] + e] = o[i] || o[i - 2] || o[0];
                return r
            }
        }, Ft.test(t) || (J.cssHooks[t + e].set = k)
    }), J.fn.extend({
        css: function(t, e) {
            return mt(this, function(t, e, n) {
                var i, r, o = {},
                    a = 0;
                if (J.isArray(e)) {
                    for (i = Bt(t), r = e.length; r > a; a++) o[e[a]] = J.css(t, e[a], !1, i);
                    return o
                }
                return void 0 !== n ? J.style(t, e, n) : J.css(t, e)
            }, t, e, arguments.length > 1)
        },
        show: function() {
            return I(this, !0)
        },
        hide: function() {
            return I(this)
        },
        toggle: function(t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                Tt(this) ? J(this).show() : J(this).hide()
            })
        }
    }), J.Tween = L, L.prototype = {
        constructor: L,
        init: function(t, e, n, i, r, o) {
            this.elem = t, this.prop = n, this.easing = r || "swing", this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = o || (J.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var t = L.propHooks[this.prop];
            return t && t.get ? t.get(this) : L.propHooks._default.get(this)
        },
        run: function(t) {
            var e, n = L.propHooks[this.prop];
            return this.pos = e = this.options.duration ? J.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : L.propHooks._default.set(this), this
        }
    }, L.prototype.init.prototype = L.prototype, L.propHooks = {
        _default: {
            get: function(t) {
                var e;
                return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = J.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
            },
            set: function(t) {
                J.fx.step[t.prop] ? J.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[J.cssProps[t.prop]] || J.cssHooks[t.prop]) ? J.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
            }
        }
    }, L.propHooks.scrollTop = L.propHooks.scrollLeft = {
        set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, J.easing = {
        linear: function(t) {
            return t
        },
        swing: function(t) {
            return .5 - Math.cos(t * Math.PI) / 2
        }
    }, J.fx = L.prototype.init, J.fx.step = {};
    var Qt, Zt, Kt = /^(?:toggle|show|hide)$/,
        Jt = new RegExp("^(?:([+-])=|)(" + wt + ")([a-z%]*)$", "i"),
        te = /queueHooks$/,
        ee = [D],
        ne = {
            "*": [function(t, e) {
                var n = this.createTween(t, e),
                    i = n.cur(),
                    r = Jt.exec(e),
                    o = r && r[3] || (J.cssNumber[t] ? "" : "px"),
                    a = (J.cssNumber[t] || "px" !== o && +i) && Jt.exec(J.css(n.elem, t)),
                    s = 1,
                    l = 20;
                if (a && a[3] !== o) {
                    o = o || a[3], r = r || [], a = +i || 1;
                    do s = s || ".5", a /= s, J.style(n.elem, t, a + o); while (s !== (s = n.cur() / i) && 1 !== s && --l)
                }
                return r && (a = n.start = +a || +i || 0, n.unit = o, n.end = r[1] ? a + (r[1] + 1) * r[2] : +r[2]), n
            }]
        };
    J.Animation = J.extend(N, {
            tweener: function(t, e) {
                J.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
                for (var n, i = 0, r = t.length; r > i; i++) n = t[i], ne[n] = ne[n] || [], ne[n].unshift(e)
            },
            prefilter: function(t, e) {
                e ? ee.unshift(t) : ee.push(t)
            }
        }), J.speed = function(t, e, n) {
            var i = t && "object" == typeof t ? J.extend({}, t) : {
                complete: n || !n && e || J.isFunction(t) && t,
                duration: t,
                easing: n && e || e && !J.isFunction(e) && e
            };
            return i.duration = J.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in J.fx.speeds ? J.fx.speeds[i.duration] : J.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                J.isFunction(i.old) && i.old.call(this), i.queue && J.dequeue(this, i.queue)
            }, i
        }, J.fn.extend({
            fadeTo: function(t, e, n, i) {
                return this.filter(Tt).css("opacity", 0).show().end().animate({
                    opacity: e
                }, t, n, i)
            },
            animate: function(t, e, n, i) {
                var r = J.isEmptyObject(t),
                    o = J.speed(e, n, i),
                    a = function() {
                        var e = N(this, J.extend({}, t), o);
                        (r || vt.get(this, "finish")) && e.stop(!0)
                    };
                return a.finish = a, r || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
            },
            stop: function(t, e, n) {
                var i = function(t) {
                    var e = t.stop;
                    delete t.stop, e(n)
                };
                return "string" != typeof t && (n = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function() {
                    var e = !0,
                        r = null != t && t + "queueHooks",
                        o = J.timers,
                        a = vt.get(this);
                    if (r) a[r] && a[r].stop && i(a[r]);
                    else
                        for (r in a) a[r] && a[r].stop && te.test(r) && i(a[r]);
                    for (r = o.length; r--;) o[r].elem !== this || null != t && o[r].queue !== t || (o[r].anim.stop(n), e = !1, o.splice(r, 1));
                    (e || !n) && J.dequeue(this, t)
                })
            },
            finish: function(t) {
                return t !== !1 && (t = t || "fx"), this.each(function() {
                    var e, n = vt.get(this),
                        i = n[t + "queue"],
                        r = n[t + "queueHooks"],
                        o = J.timers,
                        a = i ? i.length : 0;
                    for (n.finish = !0, J.queue(this, t, []), r && r.stop && r.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0),
                        o.splice(e, 1));
                    for (e = 0; a > e; e++) i[e] && i[e].finish && i[e].finish.call(this);
                    delete n.finish
                })
            }
        }), J.each(["toggle", "show", "hide"], function(t, e) {
            var n = J.fn[e];
            J.fn[e] = function(t, i, r) {
                return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(z(e, !0), t, i, r)
            }
        }), J.each({
            slideDown: z("show"),
            slideUp: z("hide"),
            slideToggle: z("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(t, e) {
            J.fn[t] = function(t, n, i) {
                return this.animate(e, t, n, i)
            }
        }), J.timers = [], J.fx.tick = function() {
            var t, e = 0,
                n = J.timers;
            for (Qt = J.now(); e < n.length; e++) t = n[e], t() || n[e] !== t || n.splice(e--, 1);
            n.length || J.fx.stop(), Qt = void 0
        }, J.fx.timer = function(t) {
            J.timers.push(t), t() ? J.fx.start() : J.timers.pop()
        }, J.fx.interval = 13, J.fx.start = function() {
            Zt || (Zt = setInterval(J.fx.tick, J.fx.interval))
        }, J.fx.stop = function() {
            clearInterval(Zt), Zt = null
        }, J.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, J.fn.delay = function(t, e) {
            return t = J.fx ? J.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function(e, n) {
                var i = setTimeout(e, t);
                n.stop = function() {
                    clearTimeout(i)
                }
            })
        },
        function() {
            var t = Z.createElement("input"),
                e = Z.createElement("select"),
                n = e.appendChild(Z.createElement("option"));
            t.type = "checkbox", Q.checkOn = "" !== t.value, Q.optSelected = n.selected, e.disabled = !0, Q.optDisabled = !n.disabled, t = Z.createElement("input"), t.value = "t", t.type = "radio", Q.radioValue = "t" === t.value
        }();
    var ie, re, oe = J.expr.attrHandle;
    J.fn.extend({
        attr: function(t, e) {
            return mt(this, J.attr, t, e, arguments.length > 1)
        },
        removeAttr: function(t) {
            return this.each(function() {
                J.removeAttr(this, t)
            })
        }
    }), J.extend({
        attr: function(t, e, n) {
            var i, r, o = t.nodeType;
            return t && 3 !== o && 8 !== o && 2 !== o ? typeof t.getAttribute === Et ? J.prop(t, e, n) : (1 === o && J.isXMLDoc(t) || (e = e.toLowerCase(), i = J.attrHooks[e] || (J.expr.match.bool.test(e) ? re : ie)), void 0 === n ? i && "get" in i && null !== (r = i.get(t, e)) ? r : (r = J.find.attr(t, e), null == r ? void 0 : r) : null !== n ? i && "set" in i && void 0 !== (r = i.set(t, n, e)) ? r : (t.setAttribute(e, n + ""), n) : void J.removeAttr(t, e)) : void 0
        },
        removeAttr: function(t, e) {
            var n, i, r = 0,
                o = e && e.match(ft);
            if (o && 1 === t.nodeType)
                for (; n = o[r++];) i = J.propFix[n] || n, J.expr.match.bool.test(n) && (t[i] = !1), t.removeAttribute(n)
        },
        attrHooks: {
            type: {
                set: function(t, e) {
                    if (!Q.radioValue && "radio" === e && J.nodeName(t, "input")) {
                        var n = t.value;
                        return t.setAttribute("type", e), n && (t.value = n), e
                    }
                }
            }
        }
    }), re = {
        set: function(t, e, n) {
            return e === !1 ? J.removeAttr(t, n) : t.setAttribute(n, n), n
        }
    }, J.each(J.expr.match.bool.source.match(/\w+/g), function(t, e) {
        var n = oe[e] || J.find.attr;
        oe[e] = function(t, e, i) {
            var r, o;
            return i || (o = oe[e], oe[e] = r, r = null != n(t, e, i) ? e.toLowerCase() : null, oe[e] = o), r
        }
    });
    var ae = /^(?:input|select|textarea|button)$/i;
    J.fn.extend({
        prop: function(t, e) {
            return mt(this, J.prop, t, e, arguments.length > 1)
        },
        removeProp: function(t) {
            return this.each(function() {
                delete this[J.propFix[t] || t]
            })
        }
    }), J.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(t, e, n) {
            var i, r, o, a = t.nodeType;
            return t && 3 !== a && 8 !== a && 2 !== a ? (o = 1 !== a || !J.isXMLDoc(t), o && (e = J.propFix[e] || e, r = J.propHooks[e]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : t[e] = n : r && "get" in r && null !== (i = r.get(t, e)) ? i : t[e]) : void 0
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    return t.hasAttribute("tabindex") || ae.test(t.nodeName) || t.href ? t.tabIndex : -1
                }
            }
        }
    }), Q.optSelected || (J.propHooks.selected = {
        get: function(t) {
            var e = t.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex, null
        }
    }), J.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        J.propFix[this.toLowerCase()] = this
    });
    var se = /[\t\r\n\f]/g;
    J.fn.extend({
        addClass: function(t) {
            var e, n, i, r, o, a, s = "string" == typeof t && t,
                l = 0,
                c = this.length;
            if (J.isFunction(t)) return this.each(function(e) {
                J(this).addClass(t.call(this, e, this.className))
            });
            if (s)
                for (e = (t || "").match(ft) || []; c > l; l++)
                    if (n = this[l], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(se, " ") : " ")) {
                        for (o = 0; r = e[o++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                        a = J.trim(i), n.className !== a && (n.className = a)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, i, r, o, a, s = 0 === arguments.length || "string" == typeof t && t,
                l = 0,
                c = this.length;
            if (J.isFunction(t)) return this.each(function(e) {
                J(this).removeClass(t.call(this, e, this.className))
            });
            if (s)
                for (e = (t || "").match(ft) || []; c > l; l++)
                    if (n = this[l], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(se, " ") : "")) {
                        for (o = 0; r = e[o++];)
                            for (; i.indexOf(" " + r + " ") >= 0;) i = i.replace(" " + r + " ", " ");
                        a = t ? J.trim(i) : "", n.className !== a && (n.className = a)
                    }
            return this
        },
        toggleClass: function(t, e) {
            var n = typeof t;
            return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : this.each(J.isFunction(t) ? function(n) {
                J(this).toggleClass(t.call(this, n, this.className, e), e)
            } : function() {
                if ("string" === n)
                    for (var e, i = 0, r = J(this), o = t.match(ft) || []; e = o[i++];) r.hasClass(e) ? r.removeClass(e) : r.addClass(e);
                else(n === Et || "boolean" === n) && (this.className && vt.set(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : vt.get(this, "__className__") || "")
            })
        },
        hasClass: function(t) {
            for (var e = " " + t + " ", n = 0, i = this.length; i > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(se, " ").indexOf(e) >= 0) return !0;
            return !1
        }
    });
    var le = /\r/g;
    J.fn.extend({
        val: function(t) {
            var e, n, i, r = this[0];
            return arguments.length ? (i = J.isFunction(t), this.each(function(n) {
                var r;
                1 === this.nodeType && (r = i ? t.call(this, n, J(this).val()) : t, null == r ? r = "" : "number" == typeof r ? r += "" : J.isArray(r) && (r = J.map(r, function(t) {
                    return null == t ? "" : t + ""
                })), e = J.valHooks[this.type] || J.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, r, "value") || (this.value = r))
            })) : r ? (e = J.valHooks[r.type] || J.valHooks[r.nodeName.toLowerCase()], e && "get" in e && void 0 !== (n = e.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(le, "") : null == n ? "" : n)) : void 0
        }
    }), J.extend({
        valHooks: {
            option: {
                get: function(t) {
                    var e = J.find.attr(t, "value");
                    return null != e ? e : J.trim(J.text(t))
                }
            },
            select: {
                get: function(t) {
                    for (var e, n, i = t.options, r = t.selectedIndex, o = "select-one" === t.type || 0 > r, a = o ? null : [], s = o ? r + 1 : i.length, l = 0 > r ? s : o ? r : 0; s > l; l++)
                        if (n = i[l], !(!n.selected && l !== r || (Q.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && J.nodeName(n.parentNode, "optgroup"))) {
                            if (e = J(n).val(), o) return e;
                            a.push(e)
                        }
                    return a
                },
                set: function(t, e) {
                    for (var n, i, r = t.options, o = J.makeArray(e), a = r.length; a--;) i = r[a], (i.selected = J.inArray(i.value, o) >= 0) && (n = !0);
                    return n || (t.selectedIndex = -1), o
                }
            }
        }
    }), J.each(["radio", "checkbox"], function() {
        J.valHooks[this] = {
            set: function(t, e) {
                return J.isArray(e) ? t.checked = J.inArray(J(t).val(), e) >= 0 : void 0
            }
        }, Q.checkOn || (J.valHooks[this].get = function(t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    }), J.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
        J.fn[e] = function(t, n) {
            return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
        }
    }), J.fn.extend({
        hover: function(t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        },
        bind: function(t, e, n) {
            return this.on(t, null, e, n)
        },
        unbind: function(t, e) {
            return this.off(t, null, e)
        },
        delegate: function(t, e, n, i) {
            return this.on(e, t, n, i)
        },
        undelegate: function(t, e, n) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
        }
    });
    var ce = J.now(),
        ue = /\?/;
    J.parseJSON = function(t) {
        return JSON.parse(t + "")
    }, J.parseXML = function(t) {
        var e, n;
        if (!t || "string" != typeof t) return null;
        try {
            n = new DOMParser, e = n.parseFromString(t, "text/xml")
        } catch (i) {
            e = void 0
        }
        return (!e || e.getElementsByTagName("parsererror").length) && J.error("Invalid XML: " + t), e
    };
    var de = /#.*$/,
        pe = /([?&])_=[^&]*/,
        fe = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        he = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        ge = /^(?:GET|HEAD)$/,
        me = /^\/\//,
        ve = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        ye = {},
        xe = {},
        be = "*/".concat("*"),
        we = t.location.href,
        Ce = ve.exec(we.toLowerCase()) || [];
    J.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: we,
            type: "GET",
            isLocal: he.test(Ce[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": be,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": J.parseJSON,
                "text xml": J.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(t, e) {
            return e ? U(U(t, J.ajaxSettings), e) : U(J.ajaxSettings, t)
        },
        ajaxPrefilter: j(ye),
        ajaxTransport: j(xe),
        ajax: function(t, e) {
            function n(t, e, n, a) {
                var l, u, v, y, b, C = e;
                2 !== x && (x = 2, s && clearTimeout(s), i = void 0, o = a || "", w.readyState = t > 0 ? 4 : 0, l = t >= 200 && 300 > t || 304 === t, n && (y = R(d, w, n)), y = H(d, y, w, l), l ? (d.ifModified && (b = w.getResponseHeader("Last-Modified"), b && (J.lastModified[r] = b), b = w.getResponseHeader("etag"), b && (J.etag[r] = b)), 204 === t || "HEAD" === d.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = y.state, u = y.data, v = y.error, l = !v)) : (v = C, (t || !C) && (C = "error", 0 > t && (t = 0))), w.status = t, w.statusText = (e || C) + "", l ? h.resolveWith(p, [u, C, w]) : h.rejectWith(p, [w, C, v]), w.statusCode(m), m = void 0, c && f.trigger(l ? "ajaxSuccess" : "ajaxError", [w, d, l ? u : v]), g.fireWith(p, [w, C]), c && (f.trigger("ajaxComplete", [w, d]), --J.active || J.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (e = t, t = void 0), e = e || {};
            var i, r, o, a, s, l, c, u, d = J.ajaxSetup({}, e),
                p = d.context || d,
                f = d.context && (p.nodeType || p.jquery) ? J(p) : J.event,
                h = J.Deferred(),
                g = J.Callbacks("once memory"),
                m = d.statusCode || {},
                v = {},
                y = {},
                x = 0,
                b = "canceled",
                w = {
                    readyState: 0,
                    getResponseHeader: function(t) {
                        var e;
                        if (2 === x) {
                            if (!a)
                                for (a = {}; e = fe.exec(o);) a[e[1].toLowerCase()] = e[2];
                            e = a[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    },
                    getAllResponseHeaders: function() {
                        return 2 === x ? o : null
                    },
                    setRequestHeader: function(t, e) {
                        var n = t.toLowerCase();
                        return x || (t = y[n] = y[n] || t, v[t] = e), this
                    },
                    overrideMimeType: function(t) {
                        return x || (d.mimeType = t), this
                    },
                    statusCode: function(t) {
                        var e;
                        if (t)
                            if (2 > x)
                                for (e in t) m[e] = [m[e], t[e]];
                            else w.always(t[w.status]);
                        return this
                    },
                    abort: function(t) {
                        var e = t || b;
                        return i && i.abort(e), n(0, e), this
                    }
                };
            if (h.promise(w).complete = g.add, w.success = w.done, w.error = w.fail, d.url = ((t || d.url || we) + "").replace(de, "").replace(me, Ce[1] + "//"), d.type = e.method || e.type || d.method || d.type, d.dataTypes = J.trim(d.dataType || "*").toLowerCase().match(ft) || [""], null == d.crossDomain && (l = ve.exec(d.url.toLowerCase()), d.crossDomain = !(!l || l[1] === Ce[1] && l[2] === Ce[2] && (l[3] || ("http:" === l[1] ? "80" : "443")) === (Ce[3] || ("http:" === Ce[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = J.param(d.data, d.traditional)), O(ye, d, e, w), 2 === x) return w;
            c = J.event && d.global, c && 0 === J.active++ && J.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !ge.test(d.type), r = d.url, d.hasContent || (d.data && (r = d.url += (ue.test(r) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = pe.test(r) ? r.replace(pe, "$1_=" + ce++) : r + (ue.test(r) ? "&" : "?") + "_=" + ce++)), d.ifModified && (J.lastModified[r] && w.setRequestHeader("If-Modified-Since", J.lastModified[r]), J.etag[r] && w.setRequestHeader("If-None-Match", J.etag[r])), (d.data && d.hasContent && d.contentType !== !1 || e.contentType) && w.setRequestHeader("Content-Type", d.contentType), w.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + be + "; q=0.01" : "") : d.accepts["*"]);
            for (u in d.headers) w.setRequestHeader(u, d.headers[u]);
            if (d.beforeSend && (d.beforeSend.call(p, w, d) === !1 || 2 === x)) return w.abort();
            b = "abort";
            for (u in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) w[u](d[u]);
            if (i = O(xe, d, e, w)) {
                w.readyState = 1, c && f.trigger("ajaxSend", [w, d]), d.async && d.timeout > 0 && (s = setTimeout(function() {
                    w.abort("timeout")
                }, d.timeout));
                try {
                    x = 1, i.send(v, n)
                } catch (C) {
                    if (!(2 > x)) throw C;
                    n(-1, C)
                }
            } else n(-1, "No Transport");
            return w
        },
        getJSON: function(t, e, n) {
            return J.get(t, e, n, "json")
        },
        getScript: function(t, e) {
            return J.get(t, void 0, e, "script")
        }
    }), J.each(["get", "post"], function(t, e) {
        J[e] = function(t, n, i, r) {
            return J.isFunction(n) && (r = r || i, i = n, n = void 0), J.ajax({
                url: t,
                type: e,
                dataType: r,
                data: n,
                success: i
            })
        }
    }), J._evalUrl = function(t) {
        return J.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, J.fn.extend({
        wrapAll: function(t) {
            var e;
            return J.isFunction(t) ? this.each(function(e) {
                J(this).wrapAll(t.call(this, e))
            }) : (this[0] && (e = J(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                return t
            }).append(this)), this)
        },
        wrapInner: function(t) {
            return this.each(J.isFunction(t) ? function(e) {
                J(this).wrapInner(t.call(this, e))
            } : function() {
                var e = J(this),
                    n = e.contents();
                n.length ? n.wrapAll(t) : e.append(t)
            })
        },
        wrap: function(t) {
            var e = J.isFunction(t);
            return this.each(function(n) {
                J(this).wrapAll(e ? t.call(this, n) : t)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                J.nodeName(this, "body") || J(this).replaceWith(this.childNodes)
            }).end()
        }
    }), J.expr.filters.hidden = function(t) {
        return t.offsetWidth <= 0 && t.offsetHeight <= 0
    }, J.expr.filters.visible = function(t) {
        return !J.expr.filters.hidden(t)
    };
    var Te = /%20/g,
        ke = /\[\]$/,
        Ee = /\r?\n/g,
        Se = /^(?:submit|button|image|reset|file)$/i,
        Ie = /^(?:input|select|textarea|keygen)/i;
    J.param = function(t, e) {
        var n, i = [],
            r = function(t, e) {
                e = J.isFunction(e) ? e() : null == e ? "" : e, i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
            };
        if (void 0 === e && (e = J.ajaxSettings && J.ajaxSettings.traditional), J.isArray(t) || t.jquery && !J.isPlainObject(t)) J.each(t, function() {
            r(this.name, this.value)
        });
        else
            for (n in t) M(n, t[n], e, r);
        return i.join("&").replace(Te, "+")
    }, J.fn.extend({
        serialize: function() {
            return J.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var t = J.prop(this, "elements");
                return t ? J.makeArray(t) : this
            }).filter(function() {
                var t = this.type;
                return this.name && !J(this).is(":disabled") && Ie.test(this.nodeName) && !Se.test(t) && (this.checked || !kt.test(t))
            }).map(function(t, e) {
                var n = J(this).val();
                return null == n ? null : J.isArray(n) ? J.map(n, function(t) {
                    return {
                        name: e.name,
                        value: t.replace(Ee, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: n.replace(Ee, "\r\n")
                }
            }).get()
        }
    }), J.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest
        } catch (t) {}
    };
    var Le = 0,
        _e = {},
        ze = {
            0: 200,
            1223: 204
        },
        Pe = J.ajaxSettings.xhr();
    t.attachEvent && t.attachEvent("onunload", function() {
        for (var t in _e) _e[t]()
    }), Q.cors = !!Pe && "withCredentials" in Pe, Q.ajax = Pe = !!Pe, J.ajaxTransport(function(t) {
        var e;
        return Q.cors || Pe && !t.crossDomain ? {
            send: function(n, i) {
                var r, o = t.xhr(),
                    a = ++Le;
                if (o.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (r in t.xhrFields) o[r] = t.xhrFields[r];
                t.mimeType && o.overrideMimeType && o.overrideMimeType(t.mimeType), t.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                for (r in n) o.setRequestHeader(r, n[r]);
                e = function(t) {
                    return function() {
                        e && (delete _e[a], e = o.onload = o.onerror = null, "abort" === t ? o.abort() : "error" === t ? i(o.status, o.statusText) : i(ze[o.status] || o.status, o.statusText, "string" == typeof o.responseText ? {
                            text: o.responseText
                        } : void 0, o.getAllResponseHeaders()))
                    }
                }, o.onload = e(), o.onerror = e("error"), e = _e[a] = e("abort");
                try {
                    o.send(t.hasContent && t.data || null)
                } catch (s) {
                    if (e) throw s
                }
            },
            abort: function() {
                e && e()
            }
        } : void 0
    }), J.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(t) {
                return J.globalEval(t), t
            }
        }
    }), J.ajaxPrefilter("script", function(t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
    }), J.ajaxTransport("script", function(t) {
        if (t.crossDomain) {
            var e, n;
            return {
                send: function(i, r) {
                    e = J("<script>").prop({
                        async: !0,
                        charset: t.scriptCharset,
                        src: t.url
                    }).on("load error", n = function(t) {
                        e.remove(), n = null, t && r("error" === t.type ? 404 : 200, t.type)
                    }), Z.head.appendChild(e[0])
                },
                abort: function() {
                    n && n()
                }
            }
        }
    });
    var De = [],
        Ae = /(=)\?(?=&|$)|\?\?/;
    J.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = De.pop() || J.expando + "_" + ce++;
            return this[t] = !0, t
        }
    }), J.ajaxPrefilter("json jsonp", function(e, n, i) {
        var r, o, a, s = e.jsonp !== !1 && (Ae.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ae.test(e.data) && "data");
        return s || "jsonp" === e.dataTypes[0] ? (r = e.jsonpCallback = J.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(Ae, "$1" + r) : e.jsonp !== !1 && (e.url += (ue.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
            return a || J.error(r + " was not called"), a[0]
        }, e.dataTypes[0] = "json", o = t[r], t[r] = function() {
            a = arguments
        }, i.always(function() {
            t[r] = o, e[r] && (e.jsonpCallback = n.jsonpCallback, De.push(r)), a && J.isFunction(o) && o(a[0]), a = o = void 0
        }), "script") : void 0
    }), J.parseHTML = function(t, e, n) {
        if (!t || "string" != typeof t) return null;
        "boolean" == typeof e && (n = e, e = !1), e = e || Z;
        var i = at.exec(t),
            r = !n && [];
        return i ? [e.createElement(i[1])] : (i = J.buildFragment([t], e, r), r && r.length && J(r).remove(), J.merge([], i.childNodes))
    };
    var Ne = J.fn.load;
    J.fn.load = function(t, e, n) {
        if ("string" != typeof t && Ne) return Ne.apply(this, arguments);
        var i, r, o, a = this,
            s = t.indexOf(" ");
        return s >= 0 && (i = J.trim(t.slice(s)), t = t.slice(0, s)), J.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (r = "POST"), a.length > 0 && J.ajax({
            url: t,
            type: r,
            dataType: "html",
            data: e
        }).done(function(t) {
            o = arguments, a.html(i ? J("<div>").append(J.parseHTML(t)).find(i) : t)
        }).complete(n && function(t, e) {
            a.each(n, o || [t.responseText, e, t])
        }), this
    }, J.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
        J.fn[e] = function(t) {
            return this.on(e, t)
        }
    }), J.expr.filters.animated = function(t) {
        return J.grep(J.timers, function(e) {
            return t === e.elem
        }).length
    };
    var je = t.document.documentElement;
    J.offset = {
        setOffset: function(t, e, n) {
            var i, r, o, a, s, l, c, u = J.css(t, "position"),
                d = J(t),
                p = {};
            "static" === u && (t.style.position = "relative"), s = d.offset(), o = J.css(t, "top"), l = J.css(t, "left"), c = ("absolute" === u || "fixed" === u) && (o + l).indexOf("auto") > -1, c ? (i = d.position(), a = i.top, r = i.left) : (a = parseFloat(o) || 0, r = parseFloat(l) || 0), J.isFunction(e) && (e = e.call(t, n, s)), null != e.top && (p.top = e.top - s.top + a), null != e.left && (p.left = e.left - s.left + r), "using" in e ? e.using.call(t, p) : d.css(p)
        }
    }, J.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                J.offset.setOffset(this, t, e)
            });
            var e, n, i = this[0],
                r = {
                    top: 0,
                    left: 0
                },
                o = i && i.ownerDocument;
            return o ? (e = o.documentElement, J.contains(e, i) ? (typeof i.getBoundingClientRect !== Et && (r = i.getBoundingClientRect()), n = F(o), {
                top: r.top + n.pageYOffset - e.clientTop,
                left: r.left + n.pageXOffset - e.clientLeft
            }) : r) : void 0
        },
        position: function() {
            if (this[0]) {
                var t, e, n = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === J.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), J.nodeName(t[0], "html") || (i = t.offset()), i.top += J.css(t[0], "borderTopWidth", !0), i.left += J.css(t[0], "borderLeftWidth", !0)), {
                    top: e.top - i.top - J.css(n, "marginTop", !0),
                    left: e.left - i.left - J.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent || je; t && !J.nodeName(t, "html") && "static" === J.css(t, "position");) t = t.offsetParent;
                return t || je
            })
        }
    }), J.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, n) {
        var i = "pageYOffset" === n;
        J.fn[e] = function(r) {
            return mt(this, function(e, r, o) {
                var a = F(e);
                return void 0 === o ? a ? a[n] : e[r] : void(a ? a.scrollTo(i ? t.pageXOffset : o, i ? o : t.pageYOffset) : e[r] = o)
            }, e, r, arguments.length, null)
        }
    }), J.each(["top", "left"], function(t, e) {
        J.cssHooks[e] = C(Q.pixelPosition, function(t, n) {
            return n ? (n = w(t, e), qt.test(n) ? J(t).position()[e] + "px" : n) : void 0
        })
    }), J.each({
        Height: "height",
        Width: "width"
    }, function(t, e) {
        J.each({
            padding: "inner" + t,
            content: e,
            "": "outer" + t
        }, function(n, i) {
            J.fn[i] = function(i, r) {
                var o = arguments.length && (n || "boolean" != typeof i),
                    a = n || (i === !0 || r === !0 ? "margin" : "border");
                return mt(this, function(e, n, i) {
                    var r;
                    return J.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + t], r["scroll" + t], e.body["offset" + t], r["offset" + t], r["client" + t])) : void 0 === i ? J.css(e, n, a) : J.style(e, n, i, a)
                }, e, o ? i : void 0, o, null)
            }
        })
    }), J.fn.size = function() {
        return this.length
    }, J.fn.andSelf = J.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return J
    });
    var Oe = t.jQuery,
        Ue = t.$;
    return J.noConflict = function(e) {
        return t.$ === J && (t.$ = Ue), e && t.jQuery === J && (t.jQuery = Oe), J
    }, typeof e === Et && (t.jQuery = t.$ = J), J
}),
function() {
    function t(t, e) {
        return e = e || "", "string" != typeof t && (t.global && e.indexOf("g") < 0 && (e += "g"), t.ignoreCase && e.indexOf("i") < 0 && (e += "i"), t.multiline && e.indexOf("m") < 0 && (e += "m"), t = t.source), new RegExp(t.replace(/#\{(\w+)\}/g, function(t, e) {
            var n = o.txt.regexen[e] || "";
            return "string" != typeof n && (n = n.source), n
        }), e)
    }

    function e(t, e) {
        return t.replace(/#\{(\w+)\}/g, function(t, n) {
            return e[n] || ""
        })
    }

    function n(t, e, n) {
        var i = String.fromCharCode(e);
        return n !== e && (i += "-" + String.fromCharCode(n)), t.push(i), t
    }

    function i(t) {
        var e = {};
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        return e
    }

    function r(t, e, n) {
        return n ? !t || t.match(e) && RegExp["$&"] === t : "string" == typeof t && t.match(e) && RegExp["$&"] === t
    }
    if ("undefined" == typeof o || null === o) var o = {};
    o.txt = {}, o.txt.regexen = {};
    var a = {
        "&": "&amp;",
        ">": "&gt;",
        "<": "&lt;",
        '"': "&quot;",
        "'": "&#39;"
    };
    o.txt.htmlEscape = function(t) {
        return t && t.replace(/[&"'><]/g, function(t) {
            return a[t]
        })
    }, o.txt.regexSupplant = t, o.txt.stringSupplant = e, o.txt.addCharsToCharClass = n;
    var s = String.fromCharCode,
        l = [s(32), s(133), s(160), s(5760), s(6158), s(8232), s(8233), s(8239), s(8287), s(12288)];
    n(l, 9, 13), n(l, 8192, 8202);
    var c = [s(65534), s(65279), s(65535)];
    n(c, 8234, 8238), o.txt.regexen.spaces_group = t(l.join("")), o.txt.regexen.spaces = t("[" + l.join("") + "]"), o.txt.regexen.invalid_chars_group = t(c.join("")), o.txt.regexen.punct = /\!'#%&'\(\)*\+,\\\-\.\/:;<=>\?@\[\]\^_{|}~\$/, o.txt.regexen.rtl_chars = /[\u0600-\u06FF]|[\u0750-\u077F]|[\u0590-\u05FF]|[\uFE70-\uFEFF]/gm, o.txt.regexen.non_bmp_code_pairs = /[\uD800-\uDBFF][\uDC00-\uDFFF]/gm;
    var u = [];
    n(u, 192, 214), n(u, 216, 246), n(u, 248, 255), n(u, 256, 591), n(u, 595, 596), n(u, 598, 599), n(u, 601, 601), n(u, 603, 603), n(u, 611, 611), n(u, 616, 616), n(u, 623, 623), n(u, 626, 626), n(u, 649, 649), n(u, 651, 651), n(u, 699, 699), n(u, 768, 879), n(u, 7680, 7935), o.txt.regexen.latinAccentChars = t(u.join(""));
    var d = "A-Za-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙա-ևא-תװ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࢠ-ࢲऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘౙౠౡಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൠൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛱ-ᛸᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᧁ-ᧇᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᳩ-ᳬᳮ-ᳱᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎↃↄⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々〆〱-〵〻〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿌ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛥꜗ-ꜟꜢ-ꞈꞋ-ꞎꞐ-ꞭꞰꞱꟷ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭟꭤꭥꯀ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ̀-ͯ҃-҉֑-ׇֽֿׁׂׅׄؐ-ًؚ-ٰٟۖ-ۜ۟-۪ۤۧۨ-ܑۭܰ-݊ަ-ް߫-߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛ࣤ-ःऺ-़ा-ॏ॑-ॗॢॣঁ-ঃ়া-ৄেৈো-্ৗৢৣਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑੰੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣଁ-ଃ଼ା-ୄେୈୋ-୍ୖୗୢୣஂா-ூெ-ைொ-்ௗఀ-ఃా-ౄె-ైొ-్ౕౖౢౣಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣഁ-ഃാ-ൄെ-ൈൊ-്ൗൢൣංඃ්ා-ුූෘ-ෟෲෳัิ-ฺ็-๎ັິ-ູົຼ່-ໍ༹༘༙༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏႚ-ႝ፝-፟ᜒ-᜔ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝᠋-᠍ᢩᤠ-ᤫᤰ-᤻ᦰ-ᧀᧈᧉᨗ-ᨛᩕ-ᩞ᩠-᩿᩼᪰-᪾ᬀ-ᬄ᬴-᭄᭫-᭳ᮀ-ᮂᮡ-ᮭ᯦-᯳ᰤ-᰷᳐-᳔᳒-᳨᳭ᳲ-᳴᳸᳹᷀-᷵᷼-᷿⃐-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯꙯-꙲ꙴ-꙽ꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧꢀꢁꢴ-꣄꣠-꣱ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀ꧥꨩ-ꨶꩃꩌꩍꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭ﬞ︀-️︠-︭",
        p = "0-9٠-٩۰-۹߀-߉०-९০-৯੦-੯૦-૯୦-୯௦-௯౦-౯೦-೯൦-൯෦-෯๐-๙໐-໙༠-༩၀-၉႐-႙០-៩᠐-᠙᥆-᥏᧐-᧙᪀-᪉᪐-᪙᭐-᭙᮰-᮹᱀-᱉᱐-᱙꘠-꘩꣐-꣙꤀-꤉꧐-꧙꧰-꧹꩐-꩙꯰-꯹０-９",
        f = "_‌‍꙾־׳״゛゜゠・〃་༌·";
    o.txt.regexen.hashSigns = /[#＃]/, o.txt.regexen.hashtagAlpha = new RegExp("[" + d + "]"), o.txt.regexen.hashtagAlphaNumeric = new RegExp("[" + d + p + f + "]"), o.txt.regexen.endHashtagMatch = t(/^(?:#{hashSigns}|:\/\/)/), o.txt.regexen.hashtagBoundary = new RegExp("(?:^|$|[^&" + d + p + f + "])"), o.txt.regexen.validHashtag = t(/(#{hashtagBoundary})(#{hashSigns})(#{hashtagAlphaNumeric}*#{hashtagAlpha}#{hashtagAlphaNumeric}*)/gi), o.txt.regexen.validMentionPrecedingChars = /(?:^|[^a-zA-Z0-9_!#$%&*@＠]|(?:^|[^a-zA-Z0-9_+~.-])(?:rt|RT|rT|Rt):?)/, o.txt.regexen.atSigns = /[@＠]/, o.txt.regexen.validMentionOrList = t("(#{validMentionPrecedingChars})(#{atSigns})([a-zA-Z0-9_]{1,20})(/[a-zA-Z][a-zA-Z0-9_-]{0,24})?", "g"), o.txt.regexen.validReply = t(/^(?:#{spaces})*#{atSigns}([a-zA-Z0-9_]{1,20})/), o.txt.regexen.endMentionMatch = t(/^(?:#{atSigns}|[#{latinAccentChars}]|:\/\/)/), o.txt.regexen.validUrlPrecedingChars = t(/(?:[^A-Za-z0-9@＠$#＃#{invalid_chars_group}]|^)/), o.txt.regexen.invalidUrlWithoutProtocolPrecedingChars = /[-_.\/]$/, o.txt.regexen.invalidDomainChars = e("#{punct}#{spaces_group}#{invalid_chars_group}", o.txt.regexen), o.txt.regexen.validDomainChars = t(/[^#{invalidDomainChars}]/), o.txt.regexen.validSubdomain = t(/(?:(?:#{validDomainChars}(?:[_-]|#{validDomainChars})*)?#{validDomainChars}\.)/), o.txt.regexen.validDomainName = t(/(?:(?:#{validDomainChars}(?:-|#{validDomainChars})*)?#{validDomainChars}\.)/), o.txt.regexen.validGTLD = t(RegExp("(?:(?:abb|abbott|abogado|academy|accenture|accountant|accountants|aco|active|actor|ads|adult|aeg|aero|afl|agency|aig|airforce|airtel|allfinanz|alsace|amsterdam|android|apartments|app|aquarelle|archi|army|arpa|asia|associates|attorney|auction|audio|auto|autos|axa|azure|band|bank|bar|barcelona|barclaycard|barclays|bargains|bauhaus|bayern|bbc|bbva|bcn|beer|bentley|berlin|best|bet|bharti|bible|bid|bike|bing|bingo|bio|biz|black|blackfriday|bloomberg|blue|bmw|bnl|bnpparibas|boats|bond|boo|boots|boutique|bradesco|bridgestone|broker|brother|brussels|budapest|build|builders|business|buzz|bzh|cab|cafe|cal|camera|camp|cancerresearch|canon|capetown|capital|caravan|cards|care|career|careers|cars|cartier|casa|cash|casino|cat|catering|cba|cbn|ceb|center|ceo|cern|cfa|cfd|chanel|channel|chat|cheap|chloe|christmas|chrome|church|cisco|citic|city|claims|cleaning|click|clinic|clothing|cloud|club|coach|codes|coffee|college|cologne|com|commbank|community|company|computer|condos|construction|consulting|contractors|cooking|cool|coop|corsica|country|coupons|courses|credit|creditcard|cricket|crown|crs|cruises|cuisinella|cymru|cyou|dabur|dad|dance|date|dating|datsun|day|dclk|deals|degree|delivery|delta|democrat|dental|dentist|desi|design|dev|diamonds|diet|digital|direct|directory|discount|dnp|docs|dog|doha|domains|doosan|download|drive|durban|dvag|earth|eat|edu|education|email|emerck|energy|engineer|engineering|enterprises|epson|equipment|erni|esq|estate|eurovision|eus|events|everbank|exchange|expert|exposed|express|fage|fail|faith|family|fan|fans|farm|fashion|feedback|film|finance|financial|firmdale|fish|fishing|fit|fitness|flights|florist|flowers|flsmidth|fly|foo|football|forex|forsale|forum|foundation|frl|frogans|fund|furniture|futbol|fyi|gal|gallery|game|garden|gbiz|gdn|gent|genting|ggee|gift|gifts|gives|giving|glass|gle|global|globo|gmail|gmo|gmx|gold|goldpoint|golf|goo|goog|google|gop|gov|graphics|gratis|green|gripe|group|guge|guide|guitars|guru|hamburg|hangout|haus|healthcare|help|here|hermes|hiphop|hitachi|hiv|hockey|holdings|holiday|homedepot|homes|honda|horse|host|hosting|hoteles|hotmail|house|how|hsbc|ibm|icbc|ice|icu|ifm|iinet|immo|immobilien|industries|infiniti|info|ing|ink|institute|insure|int|international|investments|ipiranga|irish|ist|istanbul|itau|iwc|java|jcb|jetzt|jewelry|jlc|jll|jobs|joburg|jprs|juegos|kaufen|kddi|kim|kitchen|kiwi|koeln|komatsu|krd|kred|kyoto|lacaixa|lancaster|land|lasalle|lat|latrobe|law|lawyer|lds|lease|leclerc|legal|lexus|lgbt|liaison|lidl|life|lighting|limited|limo|link|live|lixil|loan|loans|lol|london|lotte|lotto|love|ltda|lupin|luxe|luxury|madrid|maif|maison|man|management|mango|market|marketing|markets|marriott|mba|media|meet|melbourne|meme|memorial|men|menu|miami|microsoft|mil|mini|mma|mobi|moda|moe|mom|monash|money|montblanc|mormon|mortgage|moscow|motorcycles|mov|movie|movistar|mtn|mtpc|museum|nadex|nagoya|name|navy|nec|net|netbank|network|neustar|new|news|nexus|ngo|nhk|nico|ninja|nissan|nokia|nra|nrw|ntt|nyc|office|okinawa|omega|one|ong|onl|online|ooo|oracle|orange|org|organic|osaka|otsuka|ovh|page|panerai|paris|partners|parts|party|pet|pharmacy|philips|photo|photography|photos|physio|piaget|pics|pictet|pictures|pink|pizza|place|play|plumbing|plus|pohl|poker|porn|post|praxi|press|pro|prod|productions|prof|properties|property|pub|qpon|quebec|racing|realtor|realty|recipes|red|redstone|rehab|reise|reisen|reit|ren|rent|rentals|repair|report|republican|rest|restaurant|review|reviews|rich|ricoh|rio|rip|rocks|rodeo|rsvp|ruhr|run|ryukyu|saarland|sakura|sale|samsung|sandvik|sandvikcoromant|sanofi|sap|sarl|saxo|sca|scb|schmidt|scholarships|school|schule|schwarz|science|scor|scot|seat|seek|sener|services|sew|sex|sexy|shiksha|shoes|show|shriram|singles|site|ski|sky|skype|sncf|soccer|social|software|sohu|solar|solutions|sony|soy|space|spiegel|spreadbetting|srl|starhub|statoil|studio|study|style|sucks|supplies|supply|support|surf|surgery|suzuki|swatch|swiss|sydney|systems|taipei|tatamotors|tatar|tattoo|tax|taxi|team|tech|technology|tel|telefonica|temasek|tennis|thd|theater|tickets|tienda|tips|tires|tirol|today|tokyo|tools|top|toray|toshiba|tours|town|toyota|toys|trade|trading|training|travel|trust|tui|ubs|university|uno|uol|vacations|vegas|ventures|vermögensberater|vermögensberatung|versicherung|vet|viajes|video|villas|vin|vision|vista|vistaprint|vlaanderen|vodka|vote|voting|voto|voyage|wales|walter|wang|watch|webcam|website|wed|wedding|weir|whoswho|wien|wiki|williamhill|win|windows|wine|wme|work|works|world|wtc|wtf|xbox|xerox|xin|xperia|xxx|xyz|yachts|yandex|yodobashi|yoga|yokohama|youtube|zip|zone|zuerich|дети|ком|москва|онлайн|орг|рус|сайт|קום|بازار|شبكة|كوم|موقع|कॉम|नेट|संगठन|คอม|みんな|グーグル|コム|世界|中信|中文网|企业|佛山|信息|健康|八卦|公司|公益|商城|商店|商标|在线|大拿|娱乐|工行|广东|慈善|我爱你|手机|政务|政府|新闻|时尚|机构|淡马锡|游戏|点看|移动|组织机构|网址|网店|网络|谷歌|集团|飞利浦|餐厅|닷넷|닷컴|삼성|onion)(?=[^0-9a-zA-Z@]|$))")), o.txt.regexen.validCCTLD = t(RegExp("(?:(?:ac|ad|ae|af|ag|ai|al|am|an|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bl|bm|bn|bo|bq|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cu|cv|cw|cx|cy|cz|de|dj|dk|dm|do|dz|ec|ee|eg|eh|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mf|mg|mh|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|ss|st|su|sv|sx|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|um|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|za|zm|zw|ελ|бел|мкд|мон|рф|срб|укр|қаз|հայ|الاردن|الجزائر|السعودية|المغرب|امارات|ایران|بھارت|تونس|سودان|سورية|عراق|عمان|فلسطين|قطر|مصر|مليسيا|پاکستان|भारत|বাংলা|ভারত|ਭਾਰਤ|ભારત|இந்தியா|இலங்கை|சிங்கப்பூர்|భారత్|ලංකා|ไทย|გე|中国|中國|台湾|台灣|新加坡|澳門|香港|한국)(?=[^0-9a-zA-Z@]|$))")), o.txt.regexen.validPunycode = t(/(?:xn--[0-9a-z]+)/), o.txt.regexen.validSpecialCCTLD = t(RegExp("(?:(?:co|tv)(?=[^0-9a-zA-Z@]|$))")), o.txt.regexen.validDomain = t(/(?:#{validSubdomain}*#{validDomainName}(?:#{validGTLD}|#{validCCTLD}|#{validPunycode}))/), o.txt.regexen.validAsciiDomain = t(/(?:(?:[\-a-z0-9#{latinAccentChars}]+)\.)+(?:#{validGTLD}|#{validCCTLD}|#{validPunycode})/gi), o.txt.regexen.invalidShortDomain = t(/^#{validDomainName}#{validCCTLD}$/i), o.txt.regexen.validSpecialShortDomain = t(/^#{validDomainName}#{validSpecialCCTLD}$/i), o.txt.regexen.validPortNumber = t(/[0-9]+/), o.txt.regexen.validGeneralUrlPathChars = t(/[a-z0-9!\*';:=\+,\.\$\/%#\[\]\-_~@|&#{latinAccentChars}]/i), o.txt.regexen.validUrlBalancedParens = t("\\((?:#{validGeneralUrlPathChars}+|(?:#{validGeneralUrlPathChars}*\\(#{validGeneralUrlPathChars}+\\)#{validGeneralUrlPathChars}*))\\)", "i"), o.txt.regexen.validUrlPathEndingChars = t(/[\+\-a-z0-9=_#\/#{latinAccentChars}]|(?:#{validUrlBalancedParens})/i), o.txt.regexen.validUrlPath = t("(?:(?:#{validGeneralUrlPathChars}*(?:#{validUrlBalancedParens}#{validGeneralUrlPathChars}*)*#{validUrlPathEndingChars})|(?:@#{validGeneralUrlPathChars}+/))", "i"), o.txt.regexen.validUrlQueryChars = /[a-z0-9!?\*'@\(\);:&=\+\$\/%#\[\]\-_\.,~|]/i, o.txt.regexen.validUrlQueryEndingChars = /[a-z0-9_&=#\/]/i,
        o.txt.regexen.extractUrl = t("((#{validUrlPrecedingChars})((https?:\\/\\/)?(#{validDomain})(?::(#{validPortNumber}))?(\\/#{validUrlPath}*)?(\\?#{validUrlQueryChars}*#{validUrlQueryEndingChars})?))", "gi"), o.txt.regexen.validTcoUrl = /^https?:\/\/t\.co\/[a-z0-9]+/i, o.txt.regexen.urlHasProtocol = /^https?:\/\//i, o.txt.regexen.urlHasHttps = /^https:\/\//i, o.txt.regexen.cashtag = /[a-z]{1,6}(?:[._][a-z]{1,2})?/i, o.txt.regexen.validCashtag = t("(^|#{spaces})(\\$)(#{cashtag})(?=$|\\s|[#{punct}])", "gi"), o.txt.regexen.validateUrlUnreserved = /[a-z0-9\-._~]/i, o.txt.regexen.validateUrlPctEncoded = /(?:%[0-9a-f]{2})/i, o.txt.regexen.validateUrlSubDelims = /[!$&'()*+,;=]/i, o.txt.regexen.validateUrlPchar = t("(?:#{validateUrlUnreserved}|#{validateUrlPctEncoded}|#{validateUrlSubDelims}|[:|@])", "i"), o.txt.regexen.validateUrlScheme = /(?:[a-z][a-z0-9+\-.]*)/i, o.txt.regexen.validateUrlUserinfo = t("(?:#{validateUrlUnreserved}|#{validateUrlPctEncoded}|#{validateUrlSubDelims}|:)*", "i"), o.txt.regexen.validateUrlDecOctet = /(?:[0-9]|(?:[1-9][0-9])|(?:1[0-9]{2})|(?:2[0-4][0-9])|(?:25[0-5]))/i, o.txt.regexen.validateUrlIpv4 = t(/(?:#{validateUrlDecOctet}(?:\.#{validateUrlDecOctet}){3})/i), o.txt.regexen.validateUrlIpv6 = /(?:\[[a-f0-9:\.]+\])/i, o.txt.regexen.validateUrlIp = t("(?:#{validateUrlIpv4}|#{validateUrlIpv6})", "i"), o.txt.regexen.validateUrlSubDomainSegment = /(?:[a-z0-9](?:[a-z0-9_\-]*[a-z0-9])?)/i, o.txt.regexen.validateUrlDomainSegment = /(?:[a-z0-9](?:[a-z0-9\-]*[a-z0-9])?)/i, o.txt.regexen.validateUrlDomainTld = /(?:[a-z](?:[a-z0-9\-]*[a-z0-9])?)/i, o.txt.regexen.validateUrlDomain = t(/(?:(?:#{validateUrlSubDomainSegment]}\.)*(?:#{validateUrlDomainSegment]}\.)#{validateUrlDomainTld})/i), o.txt.regexen.validateUrlHost = t("(?:#{validateUrlIp}|#{validateUrlDomain})", "i"), o.txt.regexen.validateUrlUnicodeSubDomainSegment = /(?:(?:[a-z0-9]|[^\u0000-\u007f])(?:(?:[a-z0-9_\-]|[^\u0000-\u007f])*(?:[a-z0-9]|[^\u0000-\u007f]))?)/i, o.txt.regexen.validateUrlUnicodeDomainSegment = /(?:(?:[a-z0-9]|[^\u0000-\u007f])(?:(?:[a-z0-9\-]|[^\u0000-\u007f])*(?:[a-z0-9]|[^\u0000-\u007f]))?)/i, o.txt.regexen.validateUrlUnicodeDomainTld = /(?:(?:[a-z]|[^\u0000-\u007f])(?:(?:[a-z0-9\-]|[^\u0000-\u007f])*(?:[a-z0-9]|[^\u0000-\u007f]))?)/i, o.txt.regexen.validateUrlUnicodeDomain = t(/(?:(?:#{validateUrlUnicodeSubDomainSegment}\.)*(?:#{validateUrlUnicodeDomainSegment}\.)#{validateUrlUnicodeDomainTld})/i), o.txt.regexen.validateUrlUnicodeHost = t("(?:#{validateUrlIp}|#{validateUrlUnicodeDomain})", "i"), o.txt.regexen.validateUrlPort = /[0-9]{1,5}/, o.txt.regexen.validateUrlUnicodeAuthority = t("(?:(#{validateUrlUserinfo})@)?(#{validateUrlUnicodeHost})(?::(#{validateUrlPort}))?", "i"), o.txt.regexen.validateUrlAuthority = t("(?:(#{validateUrlUserinfo})@)?(#{validateUrlHost})(?::(#{validateUrlPort}))?", "i"), o.txt.regexen.validateUrlPath = t(/(\/#{validateUrlPchar}*)*/i), o.txt.regexen.validateUrlQuery = t(/(#{validateUrlPchar}|\/|\?)*/i), o.txt.regexen.validateUrlFragment = t(/(#{validateUrlPchar}|\/|\?)*/i), o.txt.regexen.validateUrlUnencoded = t("^(?:([^:/?#]+):\\/\\/)?([^/?#]*)([^?#]*)(?:\\?([^#]*))?(?:#(.*))?$", "i");
    var h = "tweet-url list-slug",
        g = "tweet-url username",
        m = "tweet-url hashtag",
        v = "tweet-url cashtag",
        y = {
            urlClass: !0,
            listClass: !0,
            usernameClass: !0,
            hashtagClass: !0,
            cashtagClass: !0,
            usernameUrlBase: !0,
            listUrlBase: !0,
            hashtagUrlBase: !0,
            cashtagUrlBase: !0,
            usernameUrlBlock: !0,
            listUrlBlock: !0,
            hashtagUrlBlock: !0,
            linkUrlBlock: !0,
            usernameIncludeSymbol: !0,
            suppressLists: !0,
            suppressNoFollow: !0,
            targetBlank: !0,
            suppressDataScreenName: !0,
            urlEntities: !0,
            symbolTag: !0,
            textWithSymbolTag: !0,
            urlTarget: !0,
            invisibleTagAttrs: !0,
            linkAttributeBlock: !0,
            linkTextBlock: !0,
            htmlEscapeNonEntities: !0
        },
        x = {
            disabled: !0,
            readonly: !0,
            multiple: !0,
            checked: !0
        };
    o.txt.tagAttrs = function(t) {
        var e = "";
        for (var n in t) {
            var i = t[n];
            x[n] && (i = i ? n : null), null != i && (e += " " + o.txt.htmlEscape(n) + '="' + o.txt.htmlEscape(i.toString()) + '"')
        }
        return e
    }, o.txt.linkToText = function(t, n, i, r) {
        r.suppressNoFollow || (i.rel = "nofollow"), r.linkAttributeBlock && r.linkAttributeBlock(t, i), r.linkTextBlock && (n = r.linkTextBlock(t, n));
        var a = {
            text: n,
            attr: o.txt.tagAttrs(i)
        };
        return e("<a#{attr}>#{text}</a>", a)
    }, o.txt.linkToTextWithSymbol = function(t, e, n, i, r) {
        var a = r.symbolTag ? "<" + r.symbolTag + ">" + e + "</" + r.symbolTag + ">" : e;
        n = o.txt.htmlEscape(n);
        var s = r.textWithSymbolTag ? "<" + r.textWithSymbolTag + ">" + n + "</" + r.textWithSymbolTag + ">" : n;
        return r.usernameIncludeSymbol || !e.match(o.txt.regexen.atSigns) ? o.txt.linkToText(t, a + s, i, r) : a + o.txt.linkToText(t, s, i, r)
    }, o.txt.linkToHashtag = function(t, e, n) {
        var r = e.substring(t.indices[0], t.indices[0] + 1),
            a = o.txt.htmlEscape(t.hashtag),
            s = i(n.htmlAttrs || {});
        return s.href = n.hashtagUrlBase + a, s.title = "#" + a, s["class"] = n.hashtagClass, a.charAt(0).match(o.txt.regexen.rtl_chars) && (s["class"] += " rtl"), n.targetBlank && (s.target = "_blank"), o.txt.linkToTextWithSymbol(t, r, a, s, n)
    }, o.txt.linkToCashtag = function(t, e, n) {
        var r = o.txt.htmlEscape(t.cashtag),
            a = i(n.htmlAttrs || {});
        return a.href = n.cashtagUrlBase + r, a.title = "$" + r, a["class"] = n.cashtagClass, n.targetBlank && (a.target = "_blank"), o.txt.linkToTextWithSymbol(t, "$", r, a, n)
    }, o.txt.linkToMentionAndList = function(t, e, n) {
        var r = e.substring(t.indices[0], t.indices[0] + 1),
            a = o.txt.htmlEscape(t.screenName),
            s = o.txt.htmlEscape(t.listSlug),
            l = t.listSlug && !n.suppressLists,
            c = i(n.htmlAttrs || {});
        return c["class"] = l ? n.listClass : n.usernameClass, c.href = l ? n.listUrlBase + a + s : n.usernameUrlBase + a, l || n.suppressDataScreenName || (c["data-screen-name"] = a), n.targetBlank && (c.target = "_blank"), o.txt.linkToTextWithSymbol(t, r, l ? a + s : a, c, n)
    }, o.txt.linkToUrl = function(t, e, n) {
        var r = t.url,
            a = r,
            s = o.txt.htmlEscape(a),
            l = n.urlEntities && n.urlEntities[r] || t;
        l.display_url && (s = o.txt.linkTextWithEntity(l, n));
        var c = i(n.htmlAttrs || {});
        return r.match(o.txt.regexen.urlHasProtocol) || (r = "http://" + r), c.href = r, n.targetBlank && (c.target = "_blank"), n.urlClass && (c["class"] = n.urlClass), n.urlTarget && (c.target = n.urlTarget), !n.title && l.display_url && (c.title = l.expanded_url), o.txt.linkToText(t, s, c, n)
    }, o.txt.linkTextWithEntity = function(t, n) {
        var i = t.display_url,
            r = t.expanded_url,
            a = i.replace(/…/g, "");
        if (-1 != r.indexOf(a)) {
            var s = r.indexOf(a),
                l = {
                    displayUrlSansEllipses: a,
                    beforeDisplayUrl: r.substr(0, s),
                    afterDisplayUrl: r.substr(s + a.length),
                    precedingEllipsis: i.match(/^…/) ? "…" : "",
                    followingEllipsis: i.match(/…$/) ? "…" : ""
                };
            for (var c in l) l.hasOwnProperty(c) && (l[c] = o.txt.htmlEscape(l[c]));
            return l.invisible = n.invisibleTagAttrs, e("<span class='tco-ellipsis'>#{precedingEllipsis}<span #{invisible}>&nbsp;</span></span><span #{invisible}>#{beforeDisplayUrl}</span><span class='js-display-url'>#{displayUrlSansEllipses}</span><span #{invisible}>#{afterDisplayUrl}</span><span class='tco-ellipsis'><span #{invisible}>&nbsp;</span>#{followingEllipsis}</span>", l)
        }
        return i
    }, o.txt.autoLinkEntities = function(t, e, n) {
        n = i(n || {}), n.hashtagClass = n.hashtagClass || m, n.hashtagUrlBase = n.hashtagUrlBase || "https://twitter.com/#!/search?q=%23", n.cashtagClass = n.cashtagClass || v, n.cashtagUrlBase = n.cashtagUrlBase || "https://twitter.com/#!/search?q=%24", n.listClass = n.listClass || h, n.usernameClass = n.usernameClass || g, n.usernameUrlBase = n.usernameUrlBase || "https://twitter.com/", n.listUrlBase = n.listUrlBase || "https://twitter.com/", n.htmlAttrs = o.txt.extractHtmlAttrsFromOptions(n), n.invisibleTagAttrs = n.invisibleTagAttrs || "style='position:absolute;left:-9999px;'";
        var r, a, s;
        if (n.urlEntities) {
            for (r = {}, a = 0, s = n.urlEntities.length; s > a; a++) r[n.urlEntities[a].url] = n.urlEntities[a];
            n.urlEntities = r
        }
        var l = "",
            c = 0;
        e.sort(function(t, e) {
            return t.indices[0] - e.indices[0]
        });
        for (var u = n.htmlEscapeNonEntities ? o.txt.htmlEscape : function(t) {
                return t
            }, a = 0; a < e.length; a++) {
            var d = e[a];
            l += u(t.substring(c, d.indices[0])), d.url ? l += o.txt.linkToUrl(d, t, n) : d.hashtag ? l += o.txt.linkToHashtag(d, t, n) : d.screenName ? l += o.txt.linkToMentionAndList(d, t, n) : d.cashtag && (l += o.txt.linkToCashtag(d, t, n)), c = d.indices[1]
        }
        return l += u(t.substring(c, t.length))
    }, o.txt.autoLinkWithJSON = function(t, e, n) {
        if (e.user_mentions)
            for (var i = 0; i < e.user_mentions.length; i++) e.user_mentions[i].screenName = e.user_mentions[i].screen_name;
        if (e.hashtags)
            for (var i = 0; i < e.hashtags.length; i++) e.hashtags[i].hashtag = e.hashtags[i].text;
        if (e.symbols)
            for (var i = 0; i < e.symbols.length; i++) e.symbols[i].cashtag = e.symbols[i].text;
        var r = [];
        for (var a in e) r = r.concat(e[a]);
        return o.txt.modifyIndicesFromUnicodeToUTF16(t, r), o.txt.autoLinkEntities(t, r, n)
    }, o.txt.extractHtmlAttrsFromOptions = function(t) {
        var e = {};
        for (var n in t) {
            var i = t[n];
            y[n] || (x[n] && (i = i ? n : null), null != i && (e[n] = i))
        }
        return e
    }, o.txt.autoLink = function(t, e) {
        var n = o.txt.extractEntitiesWithIndices(t, {
            extractUrlsWithoutProtocol: !1
        });
        return o.txt.autoLinkEntities(t, n, e)
    }, o.txt.autoLinkUsernamesOrLists = function(t, e) {
        var n = o.txt.extractMentionsOrListsWithIndices(t);
        return o.txt.autoLinkEntities(t, n, e)
    }, o.txt.autoLinkHashtags = function(t, e) {
        var n = o.txt.extractHashtagsWithIndices(t);
        return o.txt.autoLinkEntities(t, n, e)
    }, o.txt.autoLinkCashtags = function(t, e) {
        var n = o.txt.extractCashtagsWithIndices(t);
        return o.txt.autoLinkEntities(t, n, e)
    }, o.txt.autoLinkUrlsCustom = function(t, e) {
        var n = o.txt.extractUrlsWithIndices(t, {
            extractUrlsWithoutProtocol: !1
        });
        return o.txt.autoLinkEntities(t, n, e)
    }, o.txt.removeOverlappingEntities = function(t) {
        t.sort(function(t, e) {
            return t.indices[0] - e.indices[0]
        });
        for (var e = t[0], n = 1; n < t.length; n++) e.indices[1] > t[n].indices[0] ? (t.splice(n, 1), n--) : e = t[n]
    }, o.txt.extractEntitiesWithIndices = function(t, e) {
        var n = o.txt.extractUrlsWithIndices(t, e).concat(o.txt.extractMentionsOrListsWithIndices(t)).concat(o.txt.extractHashtagsWithIndices(t, {
            checkUrlOverlap: !1
        })).concat(o.txt.extractCashtagsWithIndices(t));
        return 0 == n.length ? [] : (o.txt.removeOverlappingEntities(n), n)
    }, o.txt.extractMentions = function(t) {
        for (var e = [], n = o.txt.extractMentionsWithIndices(t), i = 0; i < n.length; i++) {
            var r = n[i].screenName;
            e.push(r)
        }
        return e
    }, o.txt.extractMentionsWithIndices = function(t) {
        for (var e, n = [], i = o.txt.extractMentionsOrListsWithIndices(t), r = 0; r < i.length; r++) e = i[r], "" == e.listSlug && n.push({
            screenName: e.screenName,
            indices: e.indices
        });
        return n
    }, o.txt.extractMentionsOrListsWithIndices = function(t) {
        if (!t || !t.match(o.txt.regexen.atSigns)) return [];
        var e = [];
        return t.replace(o.txt.regexen.validMentionOrList, function(t, n, i, r, a, s, l) {
            var c = l.slice(s + t.length);
            if (!c.match(o.txt.regexen.endMentionMatch)) {
                a = a || "";
                var u = s + n.length,
                    d = u + r.length + a.length + 1;
                e.push({
                    screenName: r,
                    listSlug: a,
                    indices: [u, d]
                })
            }
        }), e
    }, o.txt.extractReplies = function(t) {
        if (!t) return null;
        var e = t.match(o.txt.regexen.validReply);
        return !e || RegExp.rightContext.match(o.txt.regexen.endMentionMatch) ? null : e[1]
    }, o.txt.extractUrls = function(t, e) {
        for (var n = [], i = o.txt.extractUrlsWithIndices(t, e), r = 0; r < i.length; r++) n.push(i[r].url);
        return n
    }, o.txt.extractUrlsWithIndices = function(t, e) {
        if (e || (e = {
                extractUrlsWithoutProtocol: !0
            }), !t || (e.extractUrlsWithoutProtocol ? !t.match(/\./) : !t.match(/:/))) return [];
        for (var n = []; o.txt.regexen.extractUrl.exec(t);) {
            var i = RegExp.$2,
                r = RegExp.$3,
                a = RegExp.$4,
                s = RegExp.$5,
                l = RegExp.$7,
                c = o.txt.regexen.extractUrl.lastIndex,
                u = c - r.length;
            if (a) r.match(o.txt.regexen.validTcoUrl) && (r = RegExp.lastMatch, c = u + r.length), n.push({
                url: r,
                indices: [u, c]
            });
            else {
                if (!e.extractUrlsWithoutProtocol || i.match(o.txt.regexen.invalidUrlWithoutProtocolPrecedingChars)) continue;
                var d = null,
                    p = 0;
                if (s.replace(o.txt.regexen.validAsciiDomain, function(t) {
                        var e = s.indexOf(t, p);
                        p = e + t.length, d = {
                            url: t,
                            indices: [u + e, u + p]
                        }, (l || t.match(o.txt.regexen.validSpecialShortDomain) || !t.match(o.txt.regexen.invalidShortDomain)) && n.push(d)
                    }), null == d) continue;
                l && (d.url = r.replace(s, d.url), d.indices[1] = c)
            }
        }
        return n
    }, o.txt.extractHashtags = function(t) {
        for (var e = [], n = o.txt.extractHashtagsWithIndices(t), i = 0; i < n.length; i++) e.push(n[i].hashtag);
        return e
    }, o.txt.extractHashtagsWithIndices = function(t, e) {
        if (e || (e = {
                checkUrlOverlap: !0
            }), !t || !t.match(o.txt.regexen.hashSigns)) return [];
        var n = [];
        if (t.replace(o.txt.regexen.validHashtag, function(t, e, i, r, a, s) {
                var l = s.slice(a + t.length);
                if (!l.match(o.txt.regexen.endHashtagMatch)) {
                    var c = a + e.length,
                        u = c + r.length + 1;
                    n.push({
                        hashtag: r,
                        indices: [c, u]
                    })
                }
            }), e.checkUrlOverlap) {
            var i = o.txt.extractUrlsWithIndices(t);
            if (i.length > 0) {
                var r = n.concat(i);
                o.txt.removeOverlappingEntities(r), n = [];
                for (var a = 0; a < r.length; a++) r[a].hashtag && n.push(r[a])
            }
        }
        return n
    }, o.txt.extractCashtags = function(t) {
        for (var e = [], n = o.txt.extractCashtagsWithIndices(t), i = 0; i < n.length; i++) e.push(n[i].cashtag);
        return e
    }, o.txt.extractCashtagsWithIndices = function(t) {
        if (!t || -1 == t.indexOf("$")) return [];
        var e = [];
        return t.replace(o.txt.regexen.validCashtag, function(t, n, i, r, o, a) {
            var s = o + n.length,
                l = s + r.length + 1;
            e.push({
                cashtag: r,
                indices: [s, l]
            })
        }), e
    }, o.txt.modifyIndicesFromUnicodeToUTF16 = function(t, e) {
        o.txt.convertUnicodeIndices(t, e, !1)
    }, o.txt.modifyIndicesFromUTF16ToUnicode = function(t, e) {
        o.txt.convertUnicodeIndices(t, e, !0)
    }, o.txt.getUnicodeTextLength = function(t) {
        return t.replace(o.txt.regexen.non_bmp_code_pairs, " ").length
    }, o.txt.convertUnicodeIndices = function(t, e, n) {
        if (0 != e.length) {
            var i = 0,
                r = 0;
            e.sort(function(t, e) {
                return t.indices[0] - e.indices[0]
            });
            for (var o = 0, a = e[0]; i < t.length;) {
                if (a.indices[0] == (n ? i : r)) {
                    var s = a.indices[1] - a.indices[0];
                    if (a.indices[0] = n ? r : i, a.indices[1] = a.indices[0] + s, o++, o == e.length) break;
                    a = e[o]
                }
                var l = t.charCodeAt(i);
                l >= 55296 && 56319 >= l && i < t.length - 1 && (l = t.charCodeAt(i + 1), l >= 56320 && 57343 >= l && i++), r++, i++
            }
        }
    }, o.txt.splitTags = function(t) {
        for (var e, n, i = t.split("<"), r = [], o = 0; o < i.length; o += 1)
            if (n = i[o]) {
                e = n.split(">");
                for (var a = 0; a < e.length; a += 1) r.push(e[a])
            } else r.push("");
        return r
    }, o.txt.hitHighlight = function(t, e, n) {
        var i = "em";
        if (e = e || [], n = n || {}, 0 === e.length) return t;
        var r, a, s, l, c, u, d, p = n.tag || i,
            f = ["<" + p + ">", "</" + p + ">"],
            h = o.txt.splitTags(t),
            g = "",
            m = 0,
            v = h[0],
            y = 0,
            x = 0,
            b = !1,
            w = v,
            C = [];
        for (r = 0; r < e.length; r += 1)
            for (a = 0; a < e[r].length; a += 1) C.push(e[r][a]);
        for (s = 0; s < C.length; s += 1) {
            for (l = C[s], c = f[s % 2], u = !1; null != v && l >= y + v.length;) g += w.slice(x), b && l === y + w.length && (g += c, u = !0), h[m + 1] && (g += "<" + h[m + 1] + ">"), y += w.length, x = 0, m += 2, v = h[m], w = v, b = !1;
            u || null == v ? u || (u = !0, g += c) : (d = l - y, g += w.slice(x, d) + c, x = d, b = s % 2 === 0 ? !0 : !1)
        }
        if (null != v)
            for (x < w.length && (g += w.slice(x)), s = m + 1; s < h.length; s += 1) g += s % 2 === 0 ? h[s] : "<" + h[s] + ">";
        return g
    };
    var b = 140,
        w = [s(65534), s(65279), s(65535), s(8234), s(8235), s(8236), s(8237), s(8238)];
    o.txt.getTweetLength = function(t, e) {
        e || (e = {
            short_url_length: 23,
            short_url_length_https: 23
        });
        var n = o.txt.getUnicodeTextLength(t),
            i = o.txt.extractUrlsWithIndices(t);
        o.txt.modifyIndicesFromUTF16ToUnicode(t, i);
        for (var r = 0; r < i.length; r++) n += i[r].indices[0] - i[r].indices[1], n += i[r].url.toLowerCase().match(o.txt.regexen.urlHasHttps) ? e.short_url_length_https : e.short_url_length;
        return n
    }, o.txt.isInvalidTweet = function(t) {
        return t ? o.txt.getTweetLength(t) > b ? "too_long" : o.txt.hasInvalidCharacters(t) ? "invalid_characters" : !1 : "empty"
    }, o.txt.hasInvalidCharacters = function(t) {
        for (var e = 0; e < w.length; e++)
            if (t.indexOf(w[e]) >= 0) return !0;
        return !1
    }, o.txt.isValidTweetText = function(t) {
        return !o.txt.isInvalidTweet(t)
    }, o.txt.isValidUsername = function(t) {
        if (!t) return !1;
        var e = o.txt.extractMentions(t);
        return 1 === e.length && e[0] === t.slice(1)
    };
    var C = t(/^#{validMentionOrList}$/);
    if (o.txt.isValidList = function(t) {
            var e = t.match(C);
            return !(!e || "" != e[1] || !e[4])
        }, o.txt.isValidHashtag = function(t) {
            if (!t) return !1;
            var e = o.txt.extractHashtags(t);
            return 1 === e.length && e[0] === t.slice(1)
        }, o.txt.isValidUrl = function(t, e, n) {
            if (null == e && (e = !0), null == n && (n = !0), !t) return !1;
            var i = t.match(o.txt.regexen.validateUrlUnencoded);
            if (!i || i[0] !== t) return !1;
            var a = i[1],
                s = i[2],
                l = i[3],
                c = i[4],
                u = i[5];
            return (!n || r(a, o.txt.regexen.validateUrlScheme) && a.match(/^https?$/i)) && r(l, o.txt.regexen.validateUrlPath) && r(c, o.txt.regexen.validateUrlQuery, !0) && r(u, o.txt.regexen.validateUrlFragment, !0) ? e && r(s, o.txt.regexen.validateUrlUnicodeAuthority) || !e && r(s, o.txt.regexen.validateUrlAuthority) : !1
        }, "undefined" != typeof module && module.exports && (module.exports = o.txt), "function" == typeof define && define.amd && define([], o.txt), "undefined" != typeof window)
        if (window.twttr)
            for (var T in o) window.twttr[T] = o[T];
        else window.twttr = o
}(), ! function(t) {
    function e() {}

    function n(t) {
        function n(e) {
            e.prototype.option || (e.prototype.option = function(e) {
                t.isPlainObject(e) && (this.options = t.extend(!0, this.options, e))
            })
        }

        function r(e, n) {
            t.fn[e] = function(r) {
                if ("string" == typeof r) {
                    for (var a = i.call(arguments, 1), s = 0, l = this.length; l > s; s++) {
                        var c = this[s],
                            u = t.data(c, e);
                        if (u)
                            if (t.isFunction(u[r]) && "_" !== r.charAt(0)) {
                                var d = u[r].apply(u, a);
                                if (void 0 !== d) return d
                            } else o("no such method '" + r + "' for " + e + " instance");
                        else o("cannot call methods on " + e + " prior to initialization; attempted to call '" + r + "'")
                    }
                    return this
                }
                return this.each(function() {
                    var i = t.data(this, e);
                    i ? (i.option(r), i._init()) : (i = new n(this, r), t.data(this, e, i))
                })
            }
        }
        if (t) {
            var o = "undefined" == typeof console ? e : function(t) {
                console.error(t)
            };
            return t.bridget = function(t, e) {
                n(e), r(t, e)
            }, t.bridget
        }
    }
    var i = Array.prototype.slice;
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], n) : n("object" == typeof exports ? require("jquery") : t.jQuery)
}(window),
function(t) {
    function e(t) {
        return new RegExp("(^|\\s+)" + t + "(\\s+|$)")
    }

    function n(t, e) {
        var n = i(t, e) ? o : r;
        n(t, e)
    }
    var i, r, o;
    "classList" in document.documentElement ? (i = function(t, e) {
        return t.classList.contains(e)
    }, r = function(t, e) {
        t.classList.add(e)
    }, o = function(t, e) {
        t.classList.remove(e)
    }) : (i = function(t, n) {
        return e(n).test(t.className)
    }, r = function(t, e) {
        i(t, e) || (t.className = t.className + " " + e)
    }, o = function(t, n) {
        t.className = t.className.replace(e(n), " ")
    });
    var a = {
        hasClass: i,
        addClass: r,
        removeClass: o,
        toggleClass: n,
        has: i,
        add: r,
        remove: o,
        toggle: n
    };
    "function" == typeof define && define.amd ? define("classie/classie", a) : "object" == typeof exports ? module.exports = a : t.classie = a
}(window),
function(t) {
    function e(t) {
        if (t) {
            if ("string" == typeof i[t]) return t;
            t = t.charAt(0).toUpperCase() + t.slice(1);
            for (var e, r = 0, o = n.length; o > r; r++)
                if (e = n[r] + t, "string" == typeof i[e]) return e
        }
    }
    var n = "Webkit Moz ms Ms O".split(" "),
        i = document.documentElement.style;
    "function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function() {
        return e
    }) : "object" == typeof exports ? module.exports = e : t.getStyleProperty = e
}(window),
function(t, e) {
    function n(t) {
        var e = parseFloat(t),
            n = -1 === t.indexOf("%") && !isNaN(e);
        return n && e
    }

    function i() {}

    function r() {
        for (var t = {
                width: 0,
                height: 0,
                innerWidth: 0,
                innerHeight: 0,
                outerWidth: 0,
                outerHeight: 0
            }, e = 0, n = s.length; n > e; e++) {
            var i = s[e];
            t[i] = 0
        }
        return t
    }

    function o(e) {
        function i() {
            if (!p) {
                p = !0;
                var i = t.getComputedStyle;
                if (c = function() {
                        var t = i ? function(t) {
                            return i(t, null)
                        } : function(t) {
                            return t.currentStyle
                        };
                        return function(e) {
                            var n = t(e);
                            return n || a("Style returned " + n + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), n
                        }
                    }(), u = e("boxSizing")) {
                    var r = document.createElement("div");
                    r.style.width = "200px", r.style.padding = "1px 2px 3px 4px", r.style.borderStyle = "solid", r.style.borderWidth = "1px 2px 3px 4px", r.style[u] = "border-box";
                    var o = document.body || document.documentElement;
                    o.appendChild(r);
                    var s = c(r);
                    d = 200 === n(s.width), o.removeChild(r)
                }
            }
        }

        function o(t) {
            if (i(), "string" == typeof t && (t = document.querySelector(t)), t && "object" == typeof t && t.nodeType) {
                var e = c(t);
                if ("none" === e.display) return r();
                var o = {};
                o.width = t.offsetWidth, o.height = t.offsetHeight;
                for (var a = o.isBorderBox = !(!u || !e[u] || "border-box" !== e[u]), p = 0, f = s.length; f > p; p++) {
                    var h = s[p],
                        g = e[h];
                    g = l(t, g);
                    var m = parseFloat(g);
                    o[h] = isNaN(m) ? 0 : m
                }
                var v = o.paddingLeft + o.paddingRight,
                    y = o.paddingTop + o.paddingBottom,
                    x = o.marginLeft + o.marginRight,
                    b = o.marginTop + o.marginBottom,
                    w = o.borderLeftWidth + o.borderRightWidth,
                    C = o.borderTopWidth + o.borderBottomWidth,
                    T = a && d,
                    k = n(e.width);
                k !== !1 && (o.width = k + (T ? 0 : v + w));
                var E = n(e.height);
                return E !== !1 && (o.height = E + (T ? 0 : y + C)), o.innerWidth = o.width - (v + w), o.innerHeight = o.height - (y + C), o.outerWidth = o.width + x, o.outerHeight = o.height + b, o
            }
        }

        function l(e, n) {
            if (t.getComputedStyle || -1 === n.indexOf("%")) return n;
            var i = e.style,
                r = i.left,
                o = e.runtimeStyle,
                a = o && o.left;
            return a && (o.left = e.currentStyle.left), i.left = n, n = i.pixelLeft, i.left = r, a && (o.left = a), n
        }
        var c, u, d, p = !1;
        return o
    }
    var a = "undefined" == typeof console ? i : function(t) {
            console.error(t)
        },
        s = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
    "function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], o) : "object" == typeof exports ? module.exports = o(require("desandro-get-style-property")) : t.getSize = o(t.getStyleProperty)
}(window),
function(t) {
    function e(e) {
        var n = t.event;
        return n.target = n.target || n.srcElement || e, n
    }
    var n = document.documentElement,
        i = function() {};
    n.addEventListener ? i = function(t, e, n) {
        t.addEventListener(e, n, !1)
    } : n.attachEvent && (i = function(t, n, i) {
        t[n + i] = i.handleEvent ? function() {
            var n = e(t);
            i.handleEvent.call(i, n)
        } : function() {
            var n = e(t);
            i.call(t, n)
        }, t.attachEvent("on" + n, t[n + i])
    });
    var r = function() {};
    n.removeEventListener ? r = function(t, e, n) {
        t.removeEventListener(e, n, !1)
    } : n.detachEvent && (r = function(t, e, n) {
        t.detachEvent("on" + e, t[e + n]);
        try {
            delete t[e + n]
        } catch (i) {
            t[e + n] = void 0
        }
    });
    var o = {
        bind: i,
        unbind: r
    };
    "function" == typeof define && define.amd ? define("eventie/eventie", o) : "object" == typeof exports ? module.exports = o : t.eventie = o
}(window),
function() {
    function t() {}

    function e(t, e) {
        for (var n = t.length; n--;)
            if (t[n].listener === e) return n;
        return -1
    }

    function n(t) {
        return function() {
            return this[t].apply(this, arguments)
        }
    }
    var i = t.prototype,
        r = this,
        o = r.EventEmitter;
    i.getListeners = function(t) {
        var e, n, i = this._getEvents();
        if (t instanceof RegExp) {
            e = {};
            for (n in i) i.hasOwnProperty(n) && t.test(n) && (e[n] = i[n])
        } else e = i[t] || (i[t] = []);
        return e
    }, i.flattenListeners = function(t) {
        var e, n = [];
        for (e = 0; e < t.length; e += 1) n.push(t[e].listener);
        return n
    }, i.getListenersAsObject = function(t) {
        var e, n = this.getListeners(t);
        return n instanceof Array && (e = {}, e[t] = n), e || n
    }, i.addListener = function(t, n) {
        var i, r = this.getListenersAsObject(t),
            o = "object" == typeof n;
        for (i in r) r.hasOwnProperty(i) && -1 === e(r[i], n) && r[i].push(o ? n : {
            listener: n,
            once: !1
        });
        return this
    }, i.on = n("addListener"), i.addOnceListener = function(t, e) {
        return this.addListener(t, {
            listener: e,
            once: !0
        })
    }, i.once = n("addOnceListener"), i.defineEvent = function(t) {
        return this.getListeners(t), this
    }, i.defineEvents = function(t) {
        for (var e = 0; e < t.length; e += 1) this.defineEvent(t[e]);
        return this
    }, i.removeListener = function(t, n) {
        var i, r, o = this.getListenersAsObject(t);
        for (r in o) o.hasOwnProperty(r) && (i = e(o[r], n), -1 !== i && o[r].splice(i, 1));
        return this
    }, i.off = n("removeListener"), i.addListeners = function(t, e) {
        return this.manipulateListeners(!1, t, e)
    }, i.removeListeners = function(t, e) {
        return this.manipulateListeners(!0, t, e)
    }, i.manipulateListeners = function(t, e, n) {
        var i, r, o = t ? this.removeListener : this.addListener,
            a = t ? this.removeListeners : this.addListeners;
        if ("object" != typeof e || e instanceof RegExp)
            for (i = n.length; i--;) o.call(this, e, n[i]);
        else
            for (i in e) e.hasOwnProperty(i) && (r = e[i]) && ("function" == typeof r ? o.call(this, i, r) : a.call(this, i, r));
        return this
    }, i.removeEvent = function(t) {
        var e, n = typeof t,
            i = this._getEvents();
        if ("string" === n) delete i[t];
        else if (t instanceof RegExp)
            for (e in i) i.hasOwnProperty(e) && t.test(e) && delete i[e];
        else delete this._events;
        return this
    }, i.removeAllListeners = n("removeEvent"), i.emitEvent = function(t, e) {
        var n, i, r, o, a = this.getListenersAsObject(t);
        for (r in a)
            if (a.hasOwnProperty(r))
                for (i = a[r].length; i--;) n = a[r][i], n.once === !0 && this.removeListener(t, n.listener), o = n.listener.apply(this, e || []), o === this._getOnceReturnValue() && this.removeListener(t, n.listener);
        return this
    }, i.trigger = n("emitEvent"), i.emit = function(t) {
        var e = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(t, e)
    }, i.setOnceReturnValue = function(t) {
        return this._onceReturnValue = t, this
    }, i._getOnceReturnValue = function() {
        return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
    }, i._getEvents = function() {
        return this._events || (this._events = {})
    }, t.noConflict = function() {
        return r.EventEmitter = o, t
    }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
        return t
    }) : "object" == typeof module && module.exports ? module.exports = t : r.EventEmitter = t
}.call(this),
    function(t) {
        function e(t) {
            "function" == typeof t && (e.isReady ? t() : a.push(t))
        }

        function n(t) {
            var n = "readystatechange" === t.type && "complete" !== o.readyState;
            e.isReady || n || i()
        }

        function i() {
            e.isReady = !0;
            for (var t = 0, n = a.length; n > t; t++) {
                var i = a[t];
                i()
            }
        }

        function r(r) {
            return "complete" === o.readyState ? i() : (r.bind(o, "DOMContentLoaded", n), r.bind(o, "readystatechange", n), r.bind(t, "load", n)), e
        }
        var o = t.document,
            a = [];
        e.isReady = !1, "function" == typeof define && define.amd ? define("doc-ready/doc-ready", ["eventie/eventie"], r) : "object" == typeof exports ? module.exports = r(require("eventie")) : t.docReady = r(t.eventie)
    }(window),
    function(t) {
        function e(t, e) {
            return t[a](e)
        }

        function n(t) {
            if (!t.parentNode) {
                var e = document.createDocumentFragment();
                e.appendChild(t)
            }
        }

        function i(t, e) {
            n(t);
            for (var i = t.parentNode.querySelectorAll(e), r = 0, o = i.length; o > r; r++)
                if (i[r] === t) return !0;
            return !1
        }

        function r(t, i) {
            return n(t), e(t, i)
        }
        var o, a = function() {
            if (t.matches) return "matches";
            if (t.matchesSelector) return "matchesSelector";
            for (var e = ["webkit", "moz", "ms", "o"], n = 0, i = e.length; i > n; n++) {
                var r = e[n],
                    o = r + "MatchesSelector";
                if (t[o]) return o
            }
        }();
        if (a) {
            var s = document.createElement("div"),
                l = e(s, "div");
            o = l ? e : r
        } else o = i;
        "function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function() {
            return o
        }) : "object" == typeof exports ? module.exports = o : window.matchesSelector = o
    }(Element.prototype),
    function(t, e) {
        "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["doc-ready/doc-ready", "matches-selector/matches-selector"], function(n, i) {
            return e(t, n, i)
        }) : "object" == typeof exports ? module.exports = e(t, require("doc-ready"), require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.docReady, t.matchesSelector)
    }(window, function(t, e, n) {
        var i = {};
        i.extend = function(t, e) {
            for (var n in e) t[n] = e[n];
            return t
        }, i.modulo = function(t, e) {
            return (t % e + e) % e
        };
        var r = Object.prototype.toString;
        i.isArray = function(t) {
            return "[object Array]" == r.call(t)
        }, i.makeArray = function(t) {
            var e = [];
            if (i.isArray(t)) e = t;
            else if (t && "number" == typeof t.length)
                for (var n = 0, r = t.length; r > n; n++) e.push(t[n]);
            else e.push(t);
            return e
        }, i.indexOf = Array.prototype.indexOf ? function(t, e) {
            return t.indexOf(e)
        } : function(t, e) {
            for (var n = 0, i = t.length; i > n; n++)
                if (t[n] === e) return n;
            return -1
        }, i.removeFrom = function(t, e) {
            var n = i.indexOf(t, e); - 1 != n && t.splice(n, 1)
        }, i.isElement = "function" == typeof HTMLElement || "object" == typeof HTMLElement ? function(t) {
            return t instanceof HTMLElement
        } : function(t) {
            return t && "object" == typeof t && 1 == t.nodeType && "string" == typeof t.nodeName
        }, i.setText = function() {
            function t(t, n) {
                e = e || (void 0 !== document.documentElement.textContent ? "textContent" : "innerText"), t[e] = n
            }
            var e;
            return t
        }(), i.getParent = function(t, e) {
            for (; t != document.body;)
                if (t = t.parentNode, n(t, e)) return t
        }, i.getQueryElement = function(t) {
            return "string" == typeof t ? document.querySelector(t) : t
        }, i.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, i.filterFindElements = function(t, e) {
            t = i.makeArray(t);
            for (var r = [], o = 0, a = t.length; a > o; o++) {
                var s = t[o];
                if (i.isElement(s))
                    if (e) {
                        n(s, e) && r.push(s);
                        for (var l = s.querySelectorAll(e), c = 0, u = l.length; u > c; c++) r.push(l[c])
                    } else r.push(s)
            }
            return r
        }, i.debounceMethod = function(t, e, n) {
            var i = t.prototype[e],
                r = e + "Timeout";
            t.prototype[e] = function() {
                var t = this[r];
                t && clearTimeout(t);
                var e = arguments,
                    o = this;
                this[r] = setTimeout(function() {
                    i.apply(o, e), delete o[r]
                }, n || 100)
            }
        }, i.toDashed = function(t) {
            return t.replace(/(.)([A-Z])/g, function(t, e, n) {
                return e + "-" + n
            }).toLowerCase()
        };
        var o = t.console;
        return i.htmlInit = function(n, r) {
            e(function() {
                for (var e = i.toDashed(r), a = document.querySelectorAll(".js-" + e), s = "data-" + e + "-options", l = 0, c = a.length; c > l; l++) {
                    var u, d = a[l],
                        p = d.getAttribute(s);
                    try {
                        u = p && JSON.parse(p)
                    } catch (f) {
                        o && o.error("Error parsing " + s + " on " + d.nodeName.toLowerCase() + (d.id ? "#" + d.id : "") + ": " + f);
                        continue
                    }
                    var h = new n(d, u),
                        g = t.jQuery;
                    g && g.data(d, r, h)
                }
            })
        }, i
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property", "fizzy-ui-utils/utils"], function(n, i, r, o) {
            return e(t, n, i, r, o)
        }) : "object" == typeof exports ? module.exports = e(t, require("wolfy87-eventemitter"), require("get-size"), require("desandro-get-style-property"), require("fizzy-ui-utils")) : (t.Outlayer = {}, t.Outlayer.Item = e(t, t.EventEmitter, t.getSize, t.getStyleProperty, t.fizzyUIUtils))
    }(window, function(t, e, n, i, r) {
        function o(t) {
            for (var e in t) return !1;
            return e = null, !0
        }

        function a(t, e) {
            t && (this.element = t, this.layout = e, this.position = {
                x: 0,
                y: 0
            }, this._create())
        }

        function s(t) {
            return t.replace(/([A-Z])/g, function(t) {
                return "-" + t.toLowerCase()
            })
        }
        var l = t.getComputedStyle,
            c = l ? function(t) {
                return l(t, null)
            } : function(t) {
                return t.currentStyle
            },
            u = i("transition"),
            d = i("transform"),
            p = u && d,
            f = !!i("perspective"),
            h = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "otransitionend",
                transition: "transitionend"
            }[u],
            g = ["transform", "transition", "transitionDuration", "transitionProperty"],
            m = function() {
                for (var t = {}, e = 0, n = g.length; n > e; e++) {
                    var r = g[e],
                        o = i(r);
                    o && o !== r && (t[r] = o)
                }
                return t
            }();
        r.extend(a.prototype, e.prototype), a.prototype._create = function() {
            this._transn = {
                ingProperties: {},
                clean: {},
                onEnd: {}
            }, this.css({
                position: "absolute"
            })
        }, a.prototype.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, a.prototype.getSize = function() {
            this.size = n(this.element)
        }, a.prototype.css = function(t) {
            var e = this.element.style;
            for (var n in t) {
                var i = m[n] || n;
                e[i] = t[n]
            }
        }, a.prototype.getPosition = function() {
            var t = c(this.element),
                e = this.layout.options,
                n = e.isOriginLeft,
                i = e.isOriginTop,
                r = t[n ? "left" : "right"],
                o = t[i ? "top" : "bottom"],
                a = this.layout.size,
                s = -1 != r.indexOf("%") ? parseFloat(r) / 100 * a.width : parseInt(r, 10),
                l = -1 != o.indexOf("%") ? parseFloat(o) / 100 * a.height : parseInt(o, 10);
            s = isNaN(s) ? 0 : s, l = isNaN(l) ? 0 : l, s -= n ? a.paddingLeft : a.paddingRight, l -= i ? a.paddingTop : a.paddingBottom, this.position.x = s, this.position.y = l
        }, a.prototype.layoutPosition = function() {
            var t = this.layout.size,
                e = this.layout.options,
                n = {},
                i = e.isOriginLeft ? "paddingLeft" : "paddingRight",
                r = e.isOriginLeft ? "left" : "right",
                o = e.isOriginLeft ? "right" : "left",
                a = this.position.x + t[i];
            n[r] = this.getXValue(a), n[o] = "";
            var s = e.isOriginTop ? "paddingTop" : "paddingBottom",
                l = e.isOriginTop ? "top" : "bottom",
                c = e.isOriginTop ? "bottom" : "top",
                u = this.position.y + t[s];
            n[l] = this.getYValue(u), n[c] = "", this.css(n), this.emitEvent("layout", [this])
        }, a.prototype.getXValue = function(t) {
            var e = this.layout.options;
            return e.percentPosition && !e.isHorizontal ? t / this.layout.size.width * 100 + "%" : t + "px"
        }, a.prototype.getYValue = function(t) {
            var e = this.layout.options;
            return e.percentPosition && e.isHorizontal ? t / this.layout.size.height * 100 + "%" : t + "px"
        }, a.prototype._transitionTo = function(t, e) {
            this.getPosition();
            var n = this.position.x,
                i = this.position.y,
                r = parseInt(t, 10),
                o = parseInt(e, 10),
                a = r === this.position.x && o === this.position.y;
            if (this.setPosition(t, e), a && !this.isTransitioning) return void this.layoutPosition();
            var s = t - n,
                l = e - i,
                c = {};
            c.transform = this.getTranslate(s, l), this.transition({
                to: c,
                onTransitionEnd: {
                    transform: this.layoutPosition
                },
                isCleaning: !0
            })
        }, a.prototype.getTranslate = function(t, e) {
            var n = this.layout.options;
            return t = n.isOriginLeft ? t : -t, e = n.isOriginTop ? e : -e, f ? "translate3d(" + t + "px, " + e + "px, 0)" : "translate(" + t + "px, " + e + "px)"
        }, a.prototype.goTo = function(t, e) {
            this.setPosition(t, e), this.layoutPosition()
        }, a.prototype.moveTo = p ? a.prototype._transitionTo : a.prototype.goTo, a.prototype.setPosition = function(t, e) {
            this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10)
        }, a.prototype._nonTransition = function(t) {
            this.css(t.to), t.isCleaning && this._removeStyles(t.to);
            for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this)
        }, a.prototype._transition = function(t) {
            if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t);
            var e = this._transn;
            for (var n in t.onTransitionEnd) e.onEnd[n] = t.onTransitionEnd[n];
            for (n in t.to) e.ingProperties[n] = !0, t.isCleaning && (e.clean[n] = !0);
            if (t.from) {
                this.css(t.from);
                var i = this.element.offsetHeight;
                i = null
            }
            this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
        };
        var v = "opacity," + s(m.transform || "transform");
        a.prototype.enableTransition = function() {
            this.isTransitioning || (this.css({
                transitionProperty: v,
                transitionDuration: this.layout.options.transitionDuration
            }), this.element.addEventListener(h, this, !1))
        }, a.prototype.transition = a.prototype[u ? "_transition" : "_nonTransition"], a.prototype.onwebkitTransitionEnd = function(t) {
            this.ontransitionend(t)
        }, a.prototype.onotransitionend = function(t) {
            this.ontransitionend(t)
        };
        var y = {
            "-webkit-transform": "transform",
            "-moz-transform": "transform",
            "-o-transform": "transform"
        };
        a.prototype.ontransitionend = function(t) {
            if (t.target === this.element) {
                var e = this._transn,
                    n = y[t.propertyName] || t.propertyName;
                if (delete e.ingProperties[n], o(e.ingProperties) && this.disableTransition(), n in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[n]), n in e.onEnd) {
                    var i = e.onEnd[n];
                    i.call(this), delete e.onEnd[n]
                }
                this.emitEvent("transitionEnd", [this])
            }
        }, a.prototype.disableTransition = function() {
            this.removeTransitionStyles(), this.element.removeEventListener(h, this, !1), this.isTransitioning = !1
        }, a.prototype._removeStyles = function(t) {
            var e = {};
            for (var n in t) e[n] = "";
            this.css(e)
        };
        var x = {
            transitionProperty: "",
            transitionDuration: ""
        };
        return a.prototype.removeTransitionStyles = function() {
            this.css(x)
        }, a.prototype.removeElem = function() {
            this.element.parentNode.removeChild(this.element), this.css({
                display: ""
            }), this.emitEvent("remove", [this])
        }, a.prototype.remove = function() {
            if (!u || !parseFloat(this.layout.options.transitionDuration)) return void this.removeElem();
            var t = this;
            this.once("transitionEnd", function() {
                t.removeElem()
            }), this.hide()
        }, a.prototype.reveal = function() {
            delete this.isHidden, this.css({
                display: ""
            });
            var t = this.layout.options,
                e = {},
                n = this.getHideRevealTransitionEndProperty("visibleStyle");
            e[n] = this.onRevealTransitionEnd, this.transition({
                from: t.hiddenStyle,
                to: t.visibleStyle,
                isCleaning: !0,
                onTransitionEnd: e
            })
        }, a.prototype.onRevealTransitionEnd = function() {
            this.isHidden || this.emitEvent("reveal")
        }, a.prototype.getHideRevealTransitionEndProperty = function(t) {
            var e = this.layout.options[t];
            if (e.opacity) return "opacity";
            for (var n in e) return n
        }, a.prototype.hide = function() {
            this.isHidden = !0, this.css({
                display: ""
            });
            var t = this.layout.options,
                e = {},
                n = this.getHideRevealTransitionEndProperty("hiddenStyle");
            e[n] = this.onHideTransitionEnd, this.transition({
                from: t.visibleStyle,
                to: t.hiddenStyle,
                isCleaning: !0,
                onTransitionEnd: e
            })
        }, a.prototype.onHideTransitionEnd = function() {
            this.isHidden && (this.css({
                display: "none"
            }), this.emitEvent("hide"))
        }, a.prototype.destroy = function() {
            this.css({
                position: "",
                left: "",
                right: "",
                top: "",
                bottom: "",
                transition: "",
                transform: ""
            })
        }, a
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "eventEmitter/EventEmitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(n, i, r, o, a) {
            return e(t, n, i, r, o, a)
        }) : "object" == typeof exports ? module.exports = e(t, require("eventie"), require("wolfy87-eventemitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.eventie, t.EventEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item)
    }(window, function(t, e, n, i, r, o) {
        function a(t, e) {
            var n = r.getQueryElement(t);
            if (!n) return void(s && s.error("Bad element for " + this.constructor.namespace + ": " + (n || t)));
            this.element = n, l && (this.$element = l(this.element)), this.options = r.extend({}, this.constructor.defaults), this.option(e);
            var i = ++u;
            this.element.outlayerGUID = i, d[i] = this, this._create(), this.options.isInitLayout && this.layout()
        }
        var s = t.console,
            l = t.jQuery,
            c = function() {},
            u = 0,
            d = {};
        return a.namespace = "outlayer", a.Item = o, a.defaults = {
            containerStyle: {
                position: "relative"
            },
            isInitLayout: !0,
            isOriginLeft: !0,
            isOriginTop: !0,
            isResizeBound: !0,
            isResizingContainer: !0,
            transitionDuration: "0.4s",
            hiddenStyle: {
                opacity: 0,
                transform: "scale(0.001)"
            },
            visibleStyle: {
                opacity: 1,
                transform: "scale(1)"
            }
        }, r.extend(a.prototype, n.prototype), a.prototype.option = function(t) {
            r.extend(this.options, t)
        }, a.prototype._create = function() {
            this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), r.extend(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize()
        }, a.prototype.reloadItems = function() {
            this.items = this._itemize(this.element.children)
        }, a.prototype._itemize = function(t) {
            for (var e = this._filterFindItemElements(t), n = this.constructor.Item, i = [], r = 0, o = e.length; o > r; r++) {
                var a = e[r],
                    s = new n(a, this);
                i.push(s)
            }
            return i
        }, a.prototype._filterFindItemElements = function(t) {
            return r.filterFindElements(t, this.options.itemSelector)
        }, a.prototype.getItemElements = function() {
            for (var t = [], e = 0, n = this.items.length; n > e; e++) t.push(this.items[e].element);
            return t
        }, a.prototype.layout = function() {
            this._resetLayout(), this._manageStamps();
            var t = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
            this.layoutItems(this.items, t), this._isLayoutInited = !0
        }, a.prototype._init = a.prototype.layout, a.prototype._resetLayout = function() {
            this.getSize()
        }, a.prototype.getSize = function() {
            this.size = i(this.element)
        }, a.prototype._getMeasurement = function(t, e) {
            var n, o = this.options[t];
            o ? ("string" == typeof o ? n = this.element.querySelector(o) : r.isElement(o) && (n = o), this[t] = n ? i(n)[e] : o) : this[t] = 0
        }, a.prototype.layoutItems = function(t, e) {
            t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
        }, a.prototype._getItemsForLayout = function(t) {
            for (var e = [], n = 0, i = t.length; i > n; n++) {
                var r = t[n];
                r.isIgnored || e.push(r)
            }
            return e
        }, a.prototype._layoutItems = function(t, e) {
            if (this._emitCompleteOnItems("layout", t), t && t.length) {
                for (var n = [], i = 0, r = t.length; r > i; i++) {
                    var o = t[i],
                        a = this._getItemLayoutPosition(o);
                    a.item = o, a.isInstant = e || o.isLayoutInstant, n.push(a)
                }
                this._processLayoutQueue(n)
            }
        }, a.prototype._getItemLayoutPosition = function() {
            return {
                x: 0,
                y: 0
            }
        }, a.prototype._processLayoutQueue = function(t) {
            for (var e = 0, n = t.length; n > e; e++) {
                var i = t[e];
                this._positionItem(i.item, i.x, i.y, i.isInstant)
            }
        }, a.prototype._positionItem = function(t, e, n, i) {
            i ? t.goTo(e, n) : t.moveTo(e, n)
        }, a.prototype._postLayout = function() {
            this.resizeContainer()
        }, a.prototype.resizeContainer = function() {
            if (this.options.isResizingContainer) {
                var t = this._getContainerSize();
                t && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1))
            }
        }, a.prototype._getContainerSize = c, a.prototype._setContainerMeasure = function(t, e) {
            if (void 0 !== t) {
                var n = this.size;
                n.isBorderBox && (t += e ? n.paddingLeft + n.paddingRight + n.borderLeftWidth + n.borderRightWidth : n.paddingBottom + n.paddingTop + n.borderTopWidth + n.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
            }
        }, a.prototype._emitCompleteOnItems = function(t, e) {
            function n() {
                r.dispatchEvent(t + "Complete", null, [e])
            }

            function i() {
                a++, a === o && n()
            }
            var r = this,
                o = e.length;
            if (!e || !o) return void n();
            for (var a = 0, s = 0, l = e.length; l > s; s++) {
                var c = e[s];
                c.once(t, i)
            }
        }, a.prototype.dispatchEvent = function(t, e, n) {
            var i = e ? [e].concat(n) : n;
            if (this.emitEvent(t, i), l)
                if (this.$element = this.$element || l(this.element), e) {
                    var r = l.Event(e);
                    r.type = t, this.$element.trigger(r, n)
                } else this.$element.trigger(t, n)
        }, a.prototype.ignore = function(t) {
            var e = this.getItem(t);
            e && (e.isIgnored = !0)
        }, a.prototype.unignore = function(t) {
            var e = this.getItem(t);
            e && delete e.isIgnored
        }, a.prototype.stamp = function(t) {
            if (t = this._find(t)) {
                this.stamps = this.stamps.concat(t);
                for (var e = 0, n = t.length; n > e; e++) {
                    var i = t[e];
                    this.ignore(i)
                }
            }
        }, a.prototype.unstamp = function(t) {
            if (t = this._find(t))
                for (var e = 0, n = t.length; n > e; e++) {
                    var i = t[e];
                    r.removeFrom(this.stamps, i), this.unignore(i)
                }
        }, a.prototype._find = function(t) {
            return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)), t = r.makeArray(t)) : void 0
        }, a.prototype._manageStamps = function() {
            if (this.stamps && this.stamps.length) {
                this._getBoundingRect();
                for (var t = 0, e = this.stamps.length; e > t; t++) {
                    var n = this.stamps[t];
                    this._manageStamp(n)
                }
            }
        }, a.prototype._getBoundingRect = function() {
            var t = this.element.getBoundingClientRect(),
                e = this.size;
            this._boundingRect = {
                left: t.left + e.paddingLeft + e.borderLeftWidth,
                top: t.top + e.paddingTop + e.borderTopWidth,
                right: t.right - (e.paddingRight + e.borderRightWidth),
                bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
            }
        }, a.prototype._manageStamp = c, a.prototype._getElementOffset = function(t) {
            var e = t.getBoundingClientRect(),
                n = this._boundingRect,
                r = i(t),
                o = {
                    left: e.left - n.left - r.marginLeft,
                    top: e.top - n.top - r.marginTop,
                    right: n.right - e.right - r.marginRight,
                    bottom: n.bottom - e.bottom - r.marginBottom
                };
            return o
        }, a.prototype.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, a.prototype.bindResize = function() {
            this.isResizeBound || (e.bind(t, "resize", this), this.isResizeBound = !0)
        }, a.prototype.unbindResize = function() {
            this.isResizeBound && e.unbind(t, "resize", this), this.isResizeBound = !1
        }, a.prototype.onresize = function() {
            function t() {
                e.resize(), delete e.resizeTimeout
            }
            this.resizeTimeout && clearTimeout(this.resizeTimeout);
            var e = this;
            this.resizeTimeout = setTimeout(t, 100)
        }, a.prototype.resize = function() {
            this.isResizeBound && this.needsResizeLayout() && this.layout()
        }, a.prototype.needsResizeLayout = function() {
            var t = i(this.element),
                e = this.size && t;
            return e && t.innerWidth !== this.size.innerWidth
        }, a.prototype.addItems = function(t) {
            var e = this._itemize(t);
            return e.length && (this.items = this.items.concat(e)), e
        }, a.prototype.appended = function(t) {
            var e = this.addItems(t);
            e.length && (this.layoutItems(e, !0), this.reveal(e))
        }, a.prototype.prepended = function(t) {
            var e = this._itemize(t);
            if (e.length) {
                var n = this.items.slice(0);
                this.items = e.concat(n), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(n)
            }
        }, a.prototype.reveal = function(t) {
            this._emitCompleteOnItems("reveal", t);
            for (var e = t && t.length, n = 0; e && e > n; n++) {
                var i = t[n];
                i.reveal()
            }
        }, a.prototype.hide = function(t) {
            this._emitCompleteOnItems("hide", t);
            for (var e = t && t.length, n = 0; e && e > n; n++) {
                var i = t[n];
                i.hide()
            }
        }, a.prototype.revealItemElements = function(t) {
            var e = this.getItems(t);
            this.reveal(e)
        }, a.prototype.hideItemElements = function(t) {
            var e = this.getItems(t);
            this.hide(e)
        }, a.prototype.getItem = function(t) {
            for (var e = 0, n = this.items.length; n > e; e++) {
                var i = this.items[e];
                if (i.element === t) return i
            }
        }, a.prototype.getItems = function(t) {
            t = r.makeArray(t);
            for (var e = [], n = 0, i = t.length; i > n; n++) {
                var o = t[n],
                    a = this.getItem(o);
                a && e.push(a)
            }
            return e
        }, a.prototype.remove = function(t) {
            var e = this.getItems(t);
            if (this._emitCompleteOnItems("remove", e), e && e.length)
                for (var n = 0, i = e.length; i > n; n++) {
                    var o = e[n];
                    o.remove(), r.removeFrom(this.items, o)
                }
        }, a.prototype.destroy = function() {
            var t = this.element.style;
            t.height = "", t.position = "", t.width = "";
            for (var e = 0, n = this.items.length; n > e; e++) {
                var i = this.items[e];
                i.destroy()
            }
            this.unbindResize();
            var r = this.element.outlayerGUID;
            delete d[r], delete this.element.outlayerGUID, l && l.removeData(this.element, this.constructor.namespace)
        }, a.data = function(t) {
            t = r.getQueryElement(t);
            var e = t && t.outlayerGUID;
            return e && d[e]
        }, a.create = function(t, e) {
            function n() {
                a.apply(this, arguments)
            }
            return Object.create ? n.prototype = Object.create(a.prototype) : r.extend(n.prototype, a.prototype), n.prototype.constructor = n, n.defaults = r.extend({}, a.defaults), r.extend(n.defaults, e), n.prototype.settings = {}, n.namespace = t, n.data = a.data, n.Item = function() {
                o.apply(this, arguments)
            }, n.Item.prototype = new o, r.htmlInit(n, t), l && l.bridget && l.bridget(t, n), n
        }, a.Item = o, a
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("packery/js/rect", e) : "object" == typeof exports ? module.exports = e() : (t.Packery = t.Packery || {}, t.Packery.Rect = e())
    }(window, function() {
        function t(e) {
            for (var n in t.defaults) this[n] = t.defaults[n];
            for (n in e) this[n] = e[n]
        }
        var e = window.Packery = function() {};
        return e.Rect = t, t.defaults = {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        }, t.prototype.contains = function(t) {
            var e = t.width || 0,
                n = t.height || 0;
            return this.x <= t.x && this.y <= t.y && this.x + this.width >= t.x + e && this.y + this.height >= t.y + n
        }, t.prototype.overlaps = function(t) {
            var e = this.x + this.width,
                n = this.y + this.height,
                i = t.x + t.width,
                r = t.y + t.height;
            return this.x < i && e > t.x && this.y < r && n > t.y
        }, t.prototype.getMaximalFreeRects = function(e) {
            if (!this.overlaps(e)) return !1;
            var n, i = [],
                r = this.x + this.width,
                o = this.y + this.height,
                a = e.x + e.width,
                s = e.y + e.height;
            return this.y < e.y && (n = new t({
                x: this.x,
                y: this.y,
                width: this.width,
                height: e.y - this.y
            }), i.push(n)), r > a && (n = new t({
                x: a,
                y: this.y,
                width: r - a,
                height: this.height
            }), i.push(n)), o > s && (n = new t({
                x: this.x,
                y: s,
                width: this.width,
                height: o - s
            }), i.push(n)), this.x < e.x && (n = new t({
                x: this.x,
                y: this.y,
                width: e.x - this.x,
                height: this.height
            }), i.push(n)), i
        }, t.prototype.canFit = function(t) {
            return this.width >= t.width && this.height >= t.height
        }, t
    }),
    function(t, e) {
        if ("function" == typeof define && define.amd) define("packery/js/packer", ["./rect"], e);
        else if ("object" == typeof exports) module.exports = e(require("./rect"));
        else {
            var n = t.Packery = t.Packery || {};
            n.Packer = e(n.Rect)
        }
    }(window, function(t) {
        function e(t, e, n) {
            this.width = t || 0, this.height = e || 0, this.sortDirection = n || "downwardLeftToRight", this.reset()
        }
        e.prototype.reset = function() {
            this.spaces = [], this.newSpaces = [];
            var e = new t({
                x: 0,
                y: 0,
                width: this.width,
                height: this.height
            });
            this.spaces.push(e), this.sorter = n[this.sortDirection] || n.downwardLeftToRight
        }, e.prototype.pack = function(t) {
            for (var e = 0, n = this.spaces.length; n > e; e++) {
                var i = this.spaces[e];
                if (i.canFit(t)) {
                    this.placeInSpace(t, i);
                    break
                }
            }
        }, e.prototype.placeInSpace = function(t, e) {
            t.x = e.x, t.y = e.y, this.placed(t)
        }, e.prototype.placed = function(t) {
            for (var e = [], n = 0, i = this.spaces.length; i > n; n++) {
                var r = this.spaces[n],
                    o = r.getMaximalFreeRects(t);
                o ? e.push.apply(e, o) : e.push(r)
            }
            this.spaces = e, this.mergeSortSpaces()
        }, e.prototype.mergeSortSpaces = function() {
            e.mergeRects(this.spaces), this.spaces.sort(this.sorter)
        }, e.prototype.addSpace = function(t) {
            this.spaces.push(t), this.mergeSortSpaces()
        }, e.mergeRects = function(t) {
            for (var e = 0, n = t.length; n > e; e++) {
                var i = t[e];
                if (i) {
                    var r = t.slice(0);
                    r.splice(e, 1);
                    for (var o = 0, a = 0, s = r.length; s > a; a++) {
                        var l = r[a],
                            c = e > a ? 0 : 1;
                        i.contains(l) && (t.splice(a + c - o, 1), o++)
                    }
                }
            }
            return t
        };
        var n = {
            downwardLeftToRight: function(t, e) {
                return t.y - e.y || t.x - e.x
            },
            rightwardTopToBottom: function(t, e) {
                return t.x - e.x || t.y - e.y
            }
        };
        return e
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("packery/js/item", ["get-style-property/get-style-property", "outlayer/outlayer", "./rect"], e) : "object" == typeof exports ? module.exports = e(require("desandro-get-style-property"), require("outlayer"), require("./rect")) : t.Packery.Item = e(t.getStyleProperty, t.Outlayer, t.Packery.Rect)
    }(window, function(t, e, n) {
        var i = t("transform"),
            r = function() {
                e.Item.apply(this, arguments)
            };
        r.prototype = new e.Item;
        var o = r.prototype._create;
        return r.prototype._create = function() {
            o.call(this), this.rect = new n, this.placeRect = new n
        }, r.prototype.dragStart = function() {
            this.getPosition(), this.removeTransitionStyles(), this.isTransitioning && i && (this.element.style[i] = "none"), this.getSize(), this.isPlacing = !0, this.needsPositioning = !1, this.positionPlaceRect(this.position.x, this.position.y), this.isTransitioning = !1, this.didDrag = !1
        }, r.prototype.dragMove = function(t, e) {
            this.didDrag = !0;
            var n = this.layout.size;
            t -= n.paddingLeft, e -= n.paddingTop, this.positionPlaceRect(t, e)
        }, r.prototype.dragStop = function() {
            this.getPosition();
            var t = this.position.x != this.placeRect.x,
                e = this.position.y != this.placeRect.y;
            this.needsPositioning = t || e, this.didDrag = !1
        }, r.prototype.positionPlaceRect = function(t, e, n) {
            this.placeRect.x = this.getPlaceRectCoord(t, !0), this.placeRect.y = this.getPlaceRectCoord(e, !1, n)
        }, r.prototype.getPlaceRectCoord = function(t, e, n) {
            var i = e ? "Width" : "Height",
                r = this.size["outer" + i],
                o = this.layout[e ? "columnWidth" : "rowHeight"],
                a = this.layout.size["inner" + i];
            e || (a = Math.max(a, this.layout.maxY), this.layout.rowHeight || (a -= this.layout.gutter));
            var s;
            if (o) {
                o += this.layout.gutter, a += e ? this.layout.gutter : 0, t = Math.round(t / o);
                var l;
                l = this.layout.options.isHorizontal ? e ? "ceil" : "floor" : e ? "floor" : "ceil";
                var c = Math[l](a / o);
                c -= Math.ceil(r / o), s = c
            } else s = a - r;
            return t = n ? t : Math.min(t, s), t *= o || 1, Math.max(0, t)
        }, r.prototype.copyPlaceRectPosition = function() {
            this.rect.x = this.placeRect.x, this.rect.y = this.placeRect.y
        }, r.prototype.removeElem = function() {
            this.element.parentNode.removeChild(this.element), this.layout.packer.addSpace(this.rect), this.emitEvent("remove", [this])
        }, r
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define(["classie/classie", "get-size/get-size", "outlayer/outlayer", "packery/js/rect", "packery/js/packer", "packery/js/item"], e) : "object" == typeof exports ? module.exports = e(require("desandro-classie"), require("get-size"), require("outlayer"), require("./rect"), require("./packer"), require("./item")) : t.Packery = e(t.classie, t.getSize, t.Outlayer, t.Packery.Rect, t.Packery.Packer, t.Packery.Item)
    }(window, function(t, e, n, i, r, o) {
        function a(t, e) {
            return t.position.y - e.position.y || t.position.x - e.position.x
        }

        function s(t, e) {
            return t.position.x - e.position.x || t.position.y - e.position.y
        }
        i.prototype.canFit = function(t) {
            return this.width >= t.width - 1 && this.height >= t.height - 1
        };
        var l = n.create("packery");
        return l.Item = o, l.prototype._create = function() {
            n.prototype._create.call(this), this.packer = new r, this.stamp(this.options.stamped);
            var t = this;
            this.handleDraggabilly = {
                dragStart: function() {
                    t.itemDragStart(this.element)
                },
                dragMove: function() {
                    t.itemDragMove(this.element, this.position.x, this.position.y)
                },
                dragEnd: function() {
                    t.itemDragEnd(this.element)
                }
            }, this.handleUIDraggable = {
                start: function(e, n) {
                    n && t.itemDragStart(e.currentTarget)
                },
                drag: function(e, n) {
                    n && t.itemDragMove(e.currentTarget, n.position.left, n.position.top)
                },
                stop: function(e, n) {
                    n && t.itemDragEnd(e.currentTarget)
                }
            }
        }, l.prototype._resetLayout = function() {
            this.getSize(), this._getMeasurements();
            var t = this.packer;
            this.options.isHorizontal ? (t.width = Number.POSITIVE_INFINITY, t.height = this.size.innerHeight + this.gutter, t.sortDirection = "rightwardTopToBottom") : (t.width = this.size.innerWidth + this.gutter, t.height = Number.POSITIVE_INFINITY, t.sortDirection = "downwardLeftToRight"), t.reset(), this.maxY = 0, this.maxX = 0
        }, l.prototype._getMeasurements = function() {
            this._getMeasurement("columnWidth", "width"), this._getMeasurement("rowHeight", "height"), this._getMeasurement("gutter", "width")
        }, l.prototype._getItemLayoutPosition = function(t) {
            return this._packItem(t), t.rect
        }, l.prototype._packItem = function(t) {
            this._setRectSize(t.element, t.rect), this.packer.pack(t.rect), this._setMaxXY(t.rect)
        }, l.prototype._setMaxXY = function(t) {
            this.maxX = Math.max(t.x + t.width, this.maxX), this.maxY = Math.max(t.y + t.height, this.maxY)
        }, l.prototype._setRectSize = function(t, n) {
            var i = e(t),
                r = i.outerWidth,
                o = i.outerHeight;
            (r || o) && (r = this._applyGridGutter(r, this.columnWidth), o = this._applyGridGutter(o, this.rowHeight)), n.width = Math.min(r, this.packer.width), n.height = Math.min(o, this.packer.height)
        }, l.prototype._applyGridGutter = function(t, e) {
            if (!e) return t + this.gutter;
            e += this.gutter;
            var n = t % e,
                i = n && 1 > n ? "round" : "ceil";
            return t = Math[i](t / e) * e
        }, l.prototype._getContainerSize = function() {
            return this.options.isHorizontal ? {
                width: this.maxX - this.gutter
            } : {
                height: this.maxY - this.gutter
            }
        }, l.prototype._manageStamp = function(t) {
            var e, n = this.getItem(t);
            if (n && n.isPlacing) e = n.placeRect;
            else {
                var r = this._getElementOffset(t);
                e = new i({
                    x: this.options.isOriginLeft ? r.left : r.right,
                    y: this.options.isOriginTop ? r.top : r.bottom
                })
            }
            this._setRectSize(t, e), this.packer.placed(e), this._setMaxXY(e)
        }, l.prototype.sortItemsByPosition = function() {
            var t = this.options.isHorizontal ? s : a;
            this.items.sort(t)
        }, l.prototype.fit = function(t, e, n) {
            var i = this.getItem(t);
            i && (this._getMeasurements(), this.stamp(i.element), i.getSize(), i.isPlacing = !0, e = void 0 === e ? i.rect.x : e, n = void 0 === n ? i.rect.y : n, i.positionPlaceRect(e, n, !0), this._bindFitEvents(i), i.moveTo(i.placeRect.x, i.placeRect.y), this.layout(), this.unstamp(i.element), this.sortItemsByPosition(), i.isPlacing = !1, i.copyPlaceRectPosition())
        }, l.prototype._bindFitEvents = function(t) {
            function e() {
                i++, 2 == i && n.dispatchEvent("fitComplete", null, [t])
            }
            var n = this,
                i = 0;
            t.on("layout", function() {
                return e(), !0
            }), this.on("layoutComplete", function() {
                return e(), !0
            })
        }, l.prototype.resize = function() {
            var t = e(this.element),
                n = this.size && t,
                i = this.options.isHorizontal ? "innerHeight" : "innerWidth";
            n && t[i] == this.size[i] || this.layout()
        }, l.prototype.itemDragStart = function(t) {
            this.stamp(t);
            var e = this.getItem(t);
            e && e.dragStart()
        }, l.prototype.itemDragMove = function(t, e, n) {
            function i() {
                o.layout(), delete o.dragTimeout
            }
            var r = this.getItem(t);
            r && r.dragMove(e, n);
            var o = this;
            this.clearDragTimeout(), this.dragTimeout = setTimeout(i, 40)
        }, l.prototype.clearDragTimeout = function() {
            this.dragTimeout && clearTimeout(this.dragTimeout)
        }, l.prototype.itemDragEnd = function(e) {
            var n, i = this.getItem(e);
            if (i && (n = i.didDrag, i.dragStop()), !i || !n && !i.needsPositioning) return void this.unstamp(e);
            t.add(i.element, "is-positioning-post-drag");
            var r = this._getDragEndLayoutComplete(e, i);
            i.needsPositioning ? (i.on("layout", r), i.moveTo(i.placeRect.x, i.placeRect.y)) : i && i.copyPlaceRectPosition(), this.clearDragTimeout(), this.on("layoutComplete", r), this.layout()
        }, l.prototype._getDragEndLayoutComplete = function(e, n) {
            var i = n && n.needsPositioning,
                r = 0,
                o = i ? 2 : 1,
                a = this;
            return function() {
                return r++, r != o ? !0 : (n && (t.remove(n.element, "is-positioning-post-drag"), n.isPlacing = !1, n.copyPlaceRectPosition()), a.unstamp(e), a.sortItemsByPosition(), i && a.dispatchEvent("dragItemPositioned", null, [n]), !0)
            }
        }, l.prototype.bindDraggabillyEvents = function(t) {
            t.on("dragStart", this.handleDraggabilly.dragStart), t.on("dragMove", this.handleDraggabilly.dragMove), t.on("dragEnd", this.handleDraggabilly.dragEnd)
        }, l.prototype.bindUIDraggableEvents = function(t) {
            t.on("dragstart", this.handleUIDraggable.start).on("drag", this.handleUIDraggable.drag).on("dragstop", this.handleUIDraggable.stop)
        }, l.Rect = i, l.Packer = r, l
    }), ! function(t, e, n, i) {
        "use strict";

        function r(e, n) {
            this.element = e, this.options = t.extend({}, a, n), this._defaults = a, this._name = o, this.init()
        }
        var o = "photosetGrid",
            a = {
                width: "100%",
                gutter: "0px",
                highresLinks: !1,
                lowresWidth: 500,
                rel: "",
                onInit: function() {},
                onComplete: function() {}
            };
        r.prototype = {
            init: function() {
                this.options.onInit(), this._setupRows(this.element, this.options), this._setupColumns(this.element, this.options)
            },
            _callback: function(t) {
                this.options.onComplete(t)
            },
            _setupRows: function(e, n) {
                if (n.layout) this.layout = n.layout;
                else if (t(e).attr("data-layout")) this.layout = t(e).attr("data-layout");
                else {
                    for (var i = "", r = 1, o = 0; o < t(e).find("img").length; o++) i += r.toString();
                    this.layout = i
                }
                this.rows = this.layout.split("");
                for (var a in this.rows) this.rows[a] = parseInt(this.rows[a], 10);
                var s = t(e).find("img"),
                    l = 0;
                t.each(this.rows, function(t, e) {
                    var n = l,
                        i = l + e;
                    s.slice(n, i).wrapAll('<div class="photoset-row cols-' + e + '"></div>'), l = i
                }), t(e).find(".photoset-row:not(:last-child)").css({
                    "margin-bottom": n.gutter
                })
            },
            _setupColumns: function(n, i) {
                var r = this,
                    o = function(r) {
                        function o() {
                            var e = t(n).width().toString();
                            e !== t(n).attr("data-width") && (a.each(function() {
                                var e = t(this).find("img:eq(0)");
                                t(this).find("img").each(function() {
                                    var n = t(this);
                                    n.attr("height") < e.attr("height") && (e = t(this)), parseInt(n.css("width"), 10) > i.lowresWidth && n.attr("data-highres") && n.attr("src", n.attr("data-highres"))
                                });
                                var n = e.attr("height") * parseInt(e.css("width"), 10) / e.attr("width"),
                                    r = Math.floor(.025 * n);
                                t(this).height(n - r), t(this).find("img").each(function() {
                                    var e = t(this).attr("height") * parseInt(t(this).css("width"), 10) / t(this).attr("width"),
                                        i = .5 * (n - e) + "px";
                                    t(this).css({
                                        "margin-top": i
                                    })
                                })
                            }), t(n).attr("data-width", e))
                        }
                        var a = t(n).find(".photoset-row"),
                            s = t(n).find("img");
                        i.highresLinks ? (s.each(function() {
                            var e;
                            e = t(this).attr(t(this).attr("data-highres") ? "data-highres" : "src"), t(this).wrapAll('<a href="' + e + '" class="photoset-cell highres-link" />')
                        }), i.rel && s.parent().attr("rel", i.rel)) : s.each(function() {
                            t(this).wrapAll('<div class="photoset-cell" />')
                        });
                        var l = t(n).find(".photoset-cell"),
                            c = t(n).find(".cols-1 .photoset-cell"),
                            u = t(n).find(".cols-2 .photoset-cell"),
                            d = t(n).find(".cols-3 .photoset-cell"),
                            p = t(n).find(".cols-4 .photoset-cell"),
                            f = t(n).find(".cols-5 .photoset-cell");
                        t(n).css({
                            width: i.width
                        }), a.css({
                            clear: "left",
                            display: "block",
                            overflow: "hidden"
                        }), l.css({
                            "float": "left",
                            display: "block",
                            "line-height": "0",
                            "-webkit-box-sizing": "border-box",
                            "-moz-box-sizing": "border-box",
                            "box-sizing": "border-box"
                        }), s.css({
                            width: "100%",
                            height: "auto"
                        }), r && s.each(function() {
                            t(this).attr("height", t(this).height()), t(this).attr("width", t(this).width())
                        }), c.css({
                            width: "100%"
                        }), u.css({
                            width: "50%"
                        }), d.css({
                            width: "33.3%"
                        }), p.css({
                            width: "25%"
                        }), f.css({
                            width: "20%"
                        });
                        var h = parseInt(i.gutter, 10);
                        t(n).find(".photoset-cell:not(:last-child)").css({
                            "padding-right": h / 2 + "px"
                        }), t(n).find(".photoset-cell:not(:first-child)").css({
                            "padding-left": h / 2 + "px"
                        }), o(), t(e).on("resize", function() {
                            o()
                        })
                    },
                    a = !0,
                    s = !0;
                t(n).find("img").each(function() {
                    s &= !!t(this).attr("height") & !!t(this).attr("width")
                }), a = !s, a ? t(n).imagesLoaded(function() {
                    o(a), r._callback(n)
                }) : (o(a), r._callback(n))
            }
        }, t.fn[o] = function(e) {
            return this.each(function() {
                t.data(this, "plugin_" + o) || t.data(this, "plugin_" + o, new r(this, e))
            })
        };
        var s = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
        t.fn.imagesLoaded = function(e) {
            function n() {
                var n = t(p),
                    i = t(f);
                l && (f.length ? l.reject(u, n, i) : l.resolve(u)), t.isFunction(e) && e.call(a, u, n, i)
            }

            function r(t) {
                o(t.target, "error" === t.type)
            }

            function o(e, i) {
                e.src !== s && -1 === t.inArray(e, d) && (d.push(e), i ? f.push(e) : p.push(e), t.data(e, "imagesLoaded", {
                    isBroken: i,
                    src: e.src
                }), c && l.notifyWith(t(e), [i, u, t(p), t(f)]), u.length === d.length && (setTimeout(n), u.unbind(".imagesLoaded", r)))
            }
            var a = this,
                l = t.isFunction(t.Deferred) ? t.Deferred() : 0,
                c = t.isFunction(l.notify),
                u = a.find("img").add(a.filter("img")),
                d = [],
                p = [],
                f = [];
            return t.isPlainObject(e) && t.each(e, function(t, n) {
                "callback" === t ? e = n : l && l[t](n)
            }), u.length ? u.bind("load.imagesLoaded error.imagesLoaded", r).each(function(e, n) {
                var r = n.src,
                    a = t.data(n, "imagesLoaded");
                return a && a.src === r ? void o(n, a.isBroken) : n.complete && n.naturalWidth !== i ? void o(n, 0 === n.naturalWidth || 0 === n.naturalHeight) : void((n.readyState || n.complete) && (n.src = s, n.src = r))
            }) : n(), l ? l.promise(a) : a
        };
        var l, c, u, d = t.event,
            p = {
                _: 0
            },
            f = 0;
        l = d.special.throttledresize = {
            setup: function() {
                t(this).on("resize", l.handler)
            },
            teardown: function() {
                t(this).off("resize", l.handler)
            },
            handler: function(e, n) {
                var i = this,
                    r = arguments;
                c = !0, u || (setInterval(function() {
                    f++, (f > l.threshold && c || n) && (e.type = "throttledresize", d.dispatch.apply(i, r), c = !1, f = 0), f > 9 && (t(p).stop(), u = !1, f = 0)
                }, 30), u = !0)
            },
            threshold: 0
        }
    }(jQuery, window, document), ! function(t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : t("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
    }(function(t) {
        var e, n, i, r, o, a, s = "Close",
            l = "BeforeClose",
            c = "AfterClose",
            u = "BeforeAppend",
            d = "MarkupParse",
            p = "Open",
            f = "Change",
            h = "mfp",
            g = "." + h,
            m = "mfp-ready",
            v = "mfp-removing",
            y = "mfp-prevent-close",
            x = function() {},
            b = !!window.jQuery,
            w = t(window),
            C = function(t, n) {
                e.ev.on(h + t + g, n)
            },
            T = function(e, n, i, r) {
                var o = document.createElement("div");
                return o.className = "mfp-" + e, i && (o.innerHTML = i), r ? n && n.appendChild(o) : (o = t(o), n && o.appendTo(n)), o
            },
            k = function(n, i) {
                e.ev.triggerHandler(h + n, i), e.st.callbacks && (n = n.charAt(0).toLowerCase() + n.slice(1), e.st.callbacks[n] && e.st.callbacks[n].apply(e, t.isArray(i) ? i : [i]))
            },
            E = function(n) {
                return n === a && e.currTemplate.closeBtn || (e.currTemplate.closeBtn = t(e.st.closeMarkup.replace("%title%", e.st.tClose)), a = n), e.currTemplate.closeBtn
            },
            S = function() {
                t.magnificPopup.instance || (e = new x, e.init(), t.magnificPopup.instance = e)
            },
            I = function() {
                var t = document.createElement("p").style,
                    e = ["ms", "O", "Moz", "Webkit"];
                if (void 0 !== t.transition) return !0;
                for (; e.length;)
                    if (e.pop() + "Transition" in t) return !0;
                return !1
            };
        x.prototype = {
            constructor: x,
            init: function() {
                var n = navigator.appVersion;
                e.isIE7 = -1 !== n.indexOf("MSIE 7."), e.isIE8 = -1 !== n.indexOf("MSIE 8."), e.isLowIE = e.isIE7 || e.isIE8, e.isAndroid = /android/gi.test(n), e.isIOS = /iphone|ipad|ipod/gi.test(n), e.supportsTransition = I(), e.probablyMobile = e.isAndroid || e.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), i = t(document), e.popupsCache = {}
            },
            open: function(n) {
                var r;
                if (n.isObj === !1) {
                    e.items = n.items.toArray(), e.index = 0;
                    var a, s = n.items;
                    for (r = 0; r < s.length; r++)
                        if (a = s[r], a.parsed && (a = a.el[0]), a === n.el[0]) {
                            e.index = r;
                            break
                        }
                } else e.items = t.isArray(n.items) ? n.items : [n.items], e.index = n.index || 0;
                if (e.isOpen) return void e.updateItemHTML();
                e.types = [], o = "", n.mainEl && n.mainEl.length ? e.ev = n.mainEl.eq(0) : e.ev = i, n.key ? (e.popupsCache[n.key] || (e.popupsCache[n.key] = {}), e.currTemplate = e.popupsCache[n.key]) : e.currTemplate = {}, e.st = t.extend(!0, {}, t.magnificPopup.defaults, n), e.fixedContentPos = "auto" === e.st.fixedContentPos ? !e.probablyMobile : e.st.fixedContentPos, e.st.modal && (e.st.closeOnContentClick = !1, e.st.closeOnBgClick = !1, e.st.showCloseBtn = !1, e.st.enableEscapeKey = !1), e.bgOverlay || (e.bgOverlay = T("bg").on("click" + g, function() {
                    e.close()
                }), e.wrap = T("wrap").attr("tabindex", -1).on("click" + g, function(t) {
                    e._checkIfClose(t.target) && e.close()
                }), e.container = T("container", e.wrap)), e.contentContainer = T("content"), e.st.preloader && (e.preloader = T("preloader", e.container, e.st.tLoading));
                var l = t.magnificPopup.modules;
                for (r = 0; r < l.length; r++) {
                    var c = l[r];
                    c = c.charAt(0).toUpperCase() + c.slice(1), e["init" + c].call(e)
                }
                k("BeforeOpen"), e.st.showCloseBtn && (e.st.closeBtnInside ? (C(d, function(t, e, n, i) {
                    n.close_replaceWith = E(i.type)
                }), o += " mfp-close-btn-in") : e.wrap.append(E())), e.st.alignTop && (o += " mfp-align-top"), e.fixedContentPos ? e.wrap.css({
                    overflow: e.st.overflowY,
                    overflowX: "hidden",
                    overflowY: e.st.overflowY
                }) : e.wrap.css({
                    top: w.scrollTop(),
                    position: "absolute"
                }), (e.st.fixedBgPos === !1 || "auto" === e.st.fixedBgPos && !e.fixedContentPos) && e.bgOverlay.css({
                    height: i.height(),
                    position: "absolute"
                }), e.st.enableEscapeKey && i.on("keyup" + g, function(t) {
                    27 === t.keyCode && e.close()
                }), w.on("resize" + g, function() {
                    e.updateSize()
                }), e.st.closeOnContentClick || (o += " mfp-auto-cursor"), o && e.wrap.addClass(o);
                var u = e.wH = w.height(),
                    f = {};
                if (e.fixedContentPos && e._hasScrollBar(u)) {
                    var h = e._getScrollbarSize();
                    h && (f.marginRight = h)
                }
                e.fixedContentPos && (e.isIE7 ? t("body, html").css("overflow", "hidden") : f.overflow = "hidden");
                var v = e.st.mainClass;
                return e.isIE7 && (v += " mfp-ie7"), v && e._addClassToMFP(v), e.updateItemHTML(), k("BuildControls"), t("html").css(f), e.bgOverlay.add(e.wrap).prependTo(e.st.prependTo || t(document.body)), e._lastFocusedEl = document.activeElement, setTimeout(function() {
                    e.content ? (e._addClassToMFP(m), e._setFocus()) : e.bgOverlay.addClass(m), i.on("focusin" + g, e._onFocusIn)
                }, 16), e.isOpen = !0, e.updateSize(u), k(p), n
            },
            close: function() {
                e.isOpen && (k(l), e.isOpen = !1, e.st.removalDelay && !e.isLowIE && e.supportsTransition ? (e._addClassToMFP(v), setTimeout(function() {
                    e._close()
                }, e.st.removalDelay)) : e._close())
            },
            _close: function() {
                k(s);
                var n = v + " " + m + " ";
                if (e.bgOverlay.detach(), e.wrap.detach(), e.container.empty(), e.st.mainClass && (n += e.st.mainClass + " "), e._removeClassFromMFP(n), e.fixedContentPos) {
                    var r = {
                        marginRight: ""
                    };
                    e.isIE7 ? t("body, html").css("overflow", "") : r.overflow = "", t("html").css(r)
                }
                i.off("keyup" + g + " focusin" + g), e.ev.off(g), e.wrap.attr("class", "mfp-wrap").removeAttr("style"), e.bgOverlay.attr("class", "mfp-bg"), e.container.attr("class", "mfp-container"), !e.st.showCloseBtn || e.st.closeBtnInside && e.currTemplate[e.currItem.type] !== !0 || e.currTemplate.closeBtn && e.currTemplate.closeBtn.detach(), e.st.autoFocusLast && e._lastFocusedEl && t(e._lastFocusedEl).focus(), e.currItem = null, e.content = null, e.currTemplate = null, e.prevHeight = 0, k(c)
            },
            updateSize: function(t) {
                if (e.isIOS) {
                    var n = document.documentElement.clientWidth / window.innerWidth,
                        i = window.innerHeight * n;
                    e.wrap.css("height", i), e.wH = i
                } else e.wH = t || w.height();
                e.fixedContentPos || e.wrap.css("height", e.wH), k("Resize")
            },
            updateItemHTML: function() {
                var n = e.items[e.index];
                e.contentContainer.detach(), e.content && e.content.detach(), n.parsed || (n = e.parseEl(e.index));
                var i = n.type;
                if (k("BeforeChange", [e.currItem ? e.currItem.type : "", i]), e.currItem = n, !e.currTemplate[i]) {
                    var o = e.st[i] ? e.st[i].markup : !1;
                    k("FirstMarkupParse", o), o ? e.currTemplate[i] = t(o) : e.currTemplate[i] = !0
                }
                r && r !== n.type && e.container.removeClass("mfp-" + r + "-holder");
                var a = e["get" + i.charAt(0).toUpperCase() + i.slice(1)](n, e.currTemplate[i]);
                e.appendContent(a, i), n.preloaded = !0, k(f, n), r = n.type, e.container.prepend(e.contentContainer), k("AfterChange")
            },
            appendContent: function(t, n) {
                e.content = t, t ? e.st.showCloseBtn && e.st.closeBtnInside && e.currTemplate[n] === !0 ? e.content.find(".mfp-close").length || e.content.append(E()) : e.content = t : e.content = "", k(u), e.container.addClass("mfp-" + n + "-holder"), e.contentContainer.append(e.content)
            },
            parseEl: function(n) {
                var i, r = e.items[n];
                if (r.tagName ? r = {
                        el: t(r)
                    } : (i = r.type, r = {
                        data: r,
                        src: r.src
                    }), r.el) {
                    for (var o = e.types, a = 0; a < o.length; a++)
                        if (r.el.hasClass("mfp-" + o[a])) {
                            i = o[a];
                            break
                        }
                    r.src = r.el.attr("data-mfp-src"), r.src || (r.src = r.el.attr("href"))
                }
                return r.type = i || e.st.type || "inline", r.index = n, r.parsed = !0, e.items[n] = r, k("ElementParse", r), e.items[n]
            },
            addGroup: function(t, n) {
                var i = function(i) {
                    i.mfpEl = this, e._openClick(i, t, n)
                };
                n || (n = {});
                var r = "click.magnificPopup";
                n.mainEl = t, n.items ? (n.isObj = !0, t.off(r).on(r, i)) : (n.isObj = !1,
                    n.delegate ? t.off(r).on(r, n.delegate, i) : (n.items = t, t.off(r).on(r, i)))
            },
            _openClick: function(n, i, r) {
                var o = void 0 !== r.midClick ? r.midClick : t.magnificPopup.defaults.midClick;
                if (o || !(2 === n.which || n.ctrlKey || n.metaKey || n.altKey || n.shiftKey)) {
                    var a = void 0 !== r.disableOn ? r.disableOn : t.magnificPopup.defaults.disableOn;
                    if (a)
                        if (t.isFunction(a)) {
                            if (!a.call(e)) return !0
                        } else if (w.width() < a) return !0;
                    n.type && (n.preventDefault(), e.isOpen && n.stopPropagation()), r.el = t(n.mfpEl), r.delegate && (r.items = i.find(r.delegate)), e.open(r)
                }
            },
            updateStatus: function(t, i) {
                if (e.preloader) {
                    n !== t && e.container.removeClass("mfp-s-" + n), i || "loading" !== t || (i = e.st.tLoading);
                    var r = {
                        status: t,
                        text: i
                    };
                    k("UpdateStatus", r), t = r.status, i = r.text, e.preloader.html(i), e.preloader.find("a").on("click", function(t) {
                        t.stopImmediatePropagation()
                    }), e.container.addClass("mfp-s-" + t), n = t
                }
            },
            _checkIfClose: function(n) {
                if (!t(n).hasClass(y)) {
                    var i = e.st.closeOnContentClick,
                        r = e.st.closeOnBgClick;
                    if (i && r) return !0;
                    if (!e.content || t(n).hasClass("mfp-close") || e.preloader && n === e.preloader[0]) return !0;
                    if (n === e.content[0] || t.contains(e.content[0], n)) {
                        if (i) return !0
                    } else if (r && t.contains(document, n)) return !0;
                    return !1
                }
            },
            _addClassToMFP: function(t) {
                e.bgOverlay.addClass(t), e.wrap.addClass(t)
            },
            _removeClassFromMFP: function(t) {
                this.bgOverlay.removeClass(t), e.wrap.removeClass(t)
            },
            _hasScrollBar: function(t) {
                return (e.isIE7 ? i.height() : document.body.scrollHeight) > (t || w.height())
            },
            _setFocus: function() {
                (e.st.focus ? e.content.find(e.st.focus).eq(0) : e.wrap).focus()
            },
            _onFocusIn: function(n) {
                return n.target === e.wrap[0] || t.contains(e.wrap[0], n.target) ? void 0 : (e._setFocus(), !1)
            },
            _parseMarkup: function(e, n, i) {
                var r;
                i.data && (n = t.extend(i.data, n)), k(d, [e, n, i]), t.each(n, function(t, n) {
                    if (void 0 === n || n === !1) return !0;
                    if (r = t.split("_"), r.length > 1) {
                        var i = e.find(g + "-" + r[0]);
                        if (i.length > 0) {
                            var o = r[1];
                            "replaceWith" === o ? i[0] !== n[0] && i.replaceWith(n) : "img" === o ? i.is("img") ? i.attr("src", n) : i.replaceWith('<img src="' + n + '" class="' + i.attr("class") + '" />') : i.attr(r[1], n)
                        }
                    } else e.find(g + "-" + t).html(n)
                })
            },
            _getScrollbarSize: function() {
                if (void 0 === e.scrollbarSize) {
                    var t = document.createElement("div");
                    t.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(t), e.scrollbarSize = t.offsetWidth - t.clientWidth, document.body.removeChild(t)
                }
                return e.scrollbarSize
            }
        }, t.magnificPopup = {
            instance: null,
            proto: x.prototype,
            modules: [],
            open: function(e, n) {
                return S(), e = e ? t.extend(!0, {}, e) : {}, e.isObj = !0, e.index = n || 0, this.instance.open(e)
            },
            close: function() {
                return t.magnificPopup.instance && t.magnificPopup.instance.close()
            },
            registerModule: function(e, n) {
                n.options && (t.magnificPopup.defaults[e] = n.options), t.extend(this.proto, n.proto), this.modules.push(e)
            },
            defaults: {
                disableOn: 0,
                key: null,
                midClick: !1,
                mainClass: "",
                preloader: !0,
                focus: "",
                closeOnContentClick: !1,
                closeOnBgClick: !0,
                closeBtnInside: !0,
                showCloseBtn: !0,
                enableEscapeKey: !0,
                modal: !1,
                alignTop: !1,
                removalDelay: 0,
                prependTo: null,
                fixedContentPos: "auto",
                fixedBgPos: "auto",
                overflowY: "auto",
                closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
                tClose: "Close (Esc)",
                tLoading: "Loading...",
                autoFocusLast: !0
            }
        }, t.fn.magnificPopup = function(n) {
            S();
            var i = t(this);
            if ("string" == typeof n)
                if ("open" === n) {
                    var r, o = b ? i.data("magnificPopup") : i[0].magnificPopup,
                        a = parseInt(arguments[1], 10) || 0;
                    o.items ? r = o.items[a] : (r = i, o.delegate && (r = r.find(o.delegate)), r = r.eq(a)), e._openClick({
                        mfpEl: r
                    }, i, o)
                } else e.isOpen && e[n].apply(e, Array.prototype.slice.call(arguments, 1));
            else n = t.extend(!0, {}, n), b ? i.data("magnificPopup", n) : i[0].magnificPopup = n, e.addGroup(i, n);
            return i
        };
        var L, _, z, P = "inline",
            D = function() {
                z && (_.after(z.addClass(L)).detach(), z = null)
            };
        t.magnificPopup.registerModule(P, {
            options: {
                hiddenClass: "hide",
                markup: "",
                tNotFound: "Content not found"
            },
            proto: {
                initInline: function() {
                    e.types.push(P), C(s + "." + P, function() {
                        D()
                    })
                },
                getInline: function(n, i) {
                    if (D(), n.src) {
                        var r = e.st.inline,
                            o = t(n.src);
                        if (o.length) {
                            var a = o[0].parentNode;
                            a && a.tagName && (_ || (L = r.hiddenClass, _ = T(L), L = "mfp-" + L), z = o.after(_).detach().removeClass(L)), e.updateStatus("ready")
                        } else e.updateStatus("error", r.tNotFound), o = t("<div>");
                        return n.inlineElement = o, o
                    }
                    return e.updateStatus("ready"), e._parseMarkup(i, {}, n), i
                }
            }
        });
        var A, N = "ajax",
            j = function() {
                A && t(document.body).removeClass(A)
            },
            O = function() {
                j(), e.req && e.req.abort()
            };
        t.magnificPopup.registerModule(N, {
            options: {
                settings: null,
                cursor: "mfp-ajax-cur",
                tError: '<a href="%url%">The content</a> could not be loaded.'
            },
            proto: {
                initAjax: function() {
                    e.types.push(N), A = e.st.ajax.cursor, C(s + "." + N, O), C("BeforeChange." + N, O)
                },
                getAjax: function(n) {
                    A && t(document.body).addClass(A), e.updateStatus("loading");
                    var i = t.extend({
                        url: n.src,
                        success: function(i, r, o) {
                            var a = {
                                data: i,
                                xhr: o
                            };
                            k("ParseAjax", a), e.appendContent(t(a.data), N), n.finished = !0, j(), e._setFocus(), setTimeout(function() {
                                e.wrap.addClass(m)
                            }, 16), e.updateStatus("ready"), k("AjaxContentAdded")
                        },
                        error: function() {
                            j(), n.finished = n.loadError = !0, e.updateStatus("error", e.st.ajax.tError.replace("%url%", n.src))
                        }
                    }, e.st.ajax.settings);
                    return e.req = t.ajax(i), ""
                }
            }
        });
        var U, R = function(n) {
            if (n.data && void 0 !== n.data.title) return n.data.title;
            var i = e.st.image.titleSrc;
            if (i) {
                if (t.isFunction(i)) return i.call(e, n);
                if (n.el) return n.el.attr(i) || ""
            }
            return ""
        };
        t.magnificPopup.registerModule("image", {
            options: {
                markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
                cursor: "mfp-zoom-out-cur",
                titleSrc: "title",
                verticalFit: !0,
                tError: '<a href="%url%">The image</a> could not be loaded.'
            },
            proto: {
                initImage: function() {
                    var n = e.st.image,
                        i = ".image";
                    e.types.push("image"), C(p + i, function() {
                        "image" === e.currItem.type && n.cursor && t(document.body).addClass(n.cursor)
                    }), C(s + i, function() {
                        n.cursor && t(document.body).removeClass(n.cursor), w.off("resize" + g)
                    }), C("Resize" + i, e.resizeImage), e.isLowIE && C("AfterChange", e.resizeImage)
                },
                resizeImage: function() {
                    var t = e.currItem;
                    if (t && t.img && e.st.image.verticalFit) {
                        var n = 0;
                        e.isLowIE && (n = parseInt(t.img.css("padding-top"), 10) + parseInt(t.img.css("padding-bottom"), 10)), t.img.css("max-height", e.wH - n)
                    }
                },
                _onImageHasSize: function(t) {
                    t.img && (t.hasSize = !0, U && clearInterval(U), t.isCheckingImgSize = !1, k("ImageHasSize", t), t.imgHidden && (e.content && e.content.removeClass("mfp-loading"), t.imgHidden = !1))
                },
                findImageSize: function(t) {
                    var n = 0,
                        i = t.img[0],
                        r = function(o) {
                            U && clearInterval(U), U = setInterval(function() {
                                return i.naturalWidth > 0 ? void e._onImageHasSize(t) : (n > 200 && clearInterval(U), n++, void(3 === n ? r(10) : 40 === n ? r(50) : 100 === n && r(500)))
                            }, o)
                        };
                    r(1)
                },
                getImage: function(n, i) {
                    var r = 0,
                        o = function() {
                            n && (n.img[0].complete ? (n.img.off(".mfploader"), n === e.currItem && (e._onImageHasSize(n), e.updateStatus("ready")), n.hasSize = !0, n.loaded = !0, k("ImageLoadComplete")) : (r++, 200 > r ? setTimeout(o, 100) : a()))
                        },
                        a = function() {
                            n && (n.img.off(".mfploader"), n === e.currItem && (e._onImageHasSize(n), e.updateStatus("error", s.tError.replace("%url%", n.src))), n.hasSize = !0, n.loaded = !0, n.loadError = !0)
                        },
                        s = e.st.image,
                        l = i.find(".mfp-img");
                    if (l.length) {
                        var c = document.createElement("img");
                        c.className = "mfp-img", n.el && n.el.find("img").length && (c.alt = n.el.find("img").attr("alt")), n.img = t(c).on("load.mfploader", o).on("error.mfploader", a), c.src = n.src, l.is("img") && (n.img = n.img.clone()), c = n.img[0], c.naturalWidth > 0 ? n.hasSize = !0 : c.width || (n.hasSize = !1)
                    }
                    return e._parseMarkup(i, {
                        title: R(n),
                        img_replaceWith: n.img
                    }, n), e.resizeImage(), n.hasSize ? (U && clearInterval(U), n.loadError ? (i.addClass("mfp-loading"), e.updateStatus("error", s.tError.replace("%url%", n.src))) : (i.removeClass("mfp-loading"), e.updateStatus("ready")), i) : (e.updateStatus("loading"), n.loading = !0, n.hasSize || (n.imgHidden = !0, i.addClass("mfp-loading"), e.findImageSize(n)), i)
                }
            }
        });
        var H, M = function() {
            return void 0 === H && (H = void 0 !== document.createElement("p").style.MozTransform), H
        };
        t.magnificPopup.registerModule("zoom", {
            options: {
                enabled: !1,
                easing: "ease-in-out",
                duration: 300,
                opener: function(t) {
                    return t.is("img") ? t : t.find("img")
                }
            },
            proto: {
                initZoom: function() {
                    var t, n = e.st.zoom,
                        i = ".zoom";
                    if (n.enabled && e.supportsTransition) {
                        var r, o, a = n.duration,
                            c = function(t) {
                                var e = t.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                                    i = "all " + n.duration / 1e3 + "s " + n.easing,
                                    r = {
                                        position: "fixed",
                                        zIndex: 9999,
                                        left: 0,
                                        top: 0,
                                        "-webkit-backface-visibility": "hidden"
                                    },
                                    o = "transition";
                                return r["-webkit-" + o] = r["-moz-" + o] = r["-o-" + o] = r[o] = i, e.css(r), e
                            },
                            u = function() {
                                e.content.css("visibility", "visible")
                            };
                        C("BuildControls" + i, function() {
                            if (e._allowZoom()) {
                                if (clearTimeout(r), e.content.css("visibility", "hidden"), t = e._getItemToZoom(), !t) return void u();
                                o = c(t), o.css(e._getOffset()), e.wrap.append(o), r = setTimeout(function() {
                                    o.css(e._getOffset(!0)), r = setTimeout(function() {
                                        u(), setTimeout(function() {
                                            o.remove(), t = o = null, k("ZoomAnimationEnded")
                                        }, 16)
                                    }, a)
                                }, 16)
                            }
                        }), C(l + i, function() {
                            if (e._allowZoom()) {
                                if (clearTimeout(r), e.st.removalDelay = a, !t) {
                                    if (t = e._getItemToZoom(), !t) return;
                                    o = c(t)
                                }
                                o.css(e._getOffset(!0)), e.wrap.append(o), e.content.css("visibility", "hidden"), setTimeout(function() {
                                    o.css(e._getOffset())
                                }, 16)
                            }
                        }), C(s + i, function() {
                            e._allowZoom() && (u(), o && o.remove(), t = null)
                        })
                    }
                },
                _allowZoom: function() {
                    return "image" === e.currItem.type
                },
                _getItemToZoom: function() {
                    return e.currItem.hasSize ? e.currItem.img : !1
                },
                _getOffset: function(n) {
                    var i;
                    i = n ? e.currItem.img : e.st.zoom.opener(e.currItem.el || e.currItem);
                    var r = i.offset(),
                        o = parseInt(i.css("padding-top"), 10),
                        a = parseInt(i.css("padding-bottom"), 10);
                    r.top -= t(window).scrollTop() - o;
                    var s = {
                        width: i.width(),
                        height: (b ? i.innerHeight() : i[0].offsetHeight) - a - o
                    };
                    return M() ? s["-moz-transform"] = s.transform = "translate(" + r.left + "px," + r.top + "px)" : (s.left = r.left, s.top = r.top), s
                }
            }
        });
        var F = "iframe",
            q = "//about:blank",
            B = function(t) {
                if (e.currTemplate[F]) {
                    var n = e.currTemplate[F].find("iframe");
                    n.length && (t || (n[0].src = q), e.isIE8 && n.css("display", t ? "block" : "none"))
                }
            };
        t.magnificPopup.registerModule(F, {
            options: {
                markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
                srcAction: "iframe_src",
                patterns: {
                    youtube: {
                        index: "youtube.com",
                        id: "v=",
                        src: "//www.youtube.com/embed/%id%?autoplay=1"
                    },
                    vimeo: {
                        index: "vimeo.com/",
                        id: "/",
                        src: "//player.vimeo.com/video/%id%?autoplay=1"
                    },
                    gmaps: {
                        index: "//maps.google.",
                        src: "%id%&output=embed"
                    }
                }
            },
            proto: {
                initIframe: function() {
                    e.types.push(F), C("BeforeChange", function(t, e, n) {
                        e !== n && (e === F ? B() : n === F && B(!0))
                    }), C(s + "." + F, function() {
                        B()
                    })
                },
                getIframe: function(n, i) {
                    var r = n.src,
                        o = e.st.iframe;
                    t.each(o.patterns, function() {
                        return r.indexOf(this.index) > -1 ? (this.id && (r = "string" == typeof this.id ? r.substr(r.lastIndexOf(this.id) + this.id.length, r.length) : this.id.call(this, r)), r = this.src.replace("%id%", r), !1) : void 0
                    });
                    var a = {};
                    return o.srcAction && (a[o.srcAction] = r), e._parseMarkup(i, a, n), e.updateStatus("ready"), i
                }
            }
        });
        var W = function(t) {
                var n = e.items.length;
                return t > n - 1 ? t - n : 0 > t ? n + t : t
            },
            $ = function(t, e, n) {
                return t.replace(/%curr%/gi, e + 1).replace(/%total%/gi, n)
            };
        t.magnificPopup.registerModule("gallery", {
            options: {
                enabled: !1,
                arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
                preload: [0, 2],
                navigateByImgClick: !0,
                arrows: !0,
                tPrev: "Previous (Left arrow key)",
                tNext: "Next (Right arrow key)",
                tCounter: "%curr% of %total%"
            },
            proto: {
                initGallery: function() {
                    var n = e.st.gallery,
                        r = ".mfp-gallery",
                        a = Boolean(t.fn.mfpFastClick);
                    return e.direction = !0, n && n.enabled ? (o += " mfp-gallery", C(p + r, function() {
                        n.navigateByImgClick && e.wrap.on("click" + r, ".mfp-img", function() {
                            return e.items.length > 1 ? (e.next(), !1) : void 0
                        }), i.on("keydown" + r, function(t) {
                            37 === t.keyCode ? e.prev() : 39 === t.keyCode && e.next()
                        })
                    }), C("UpdateStatus" + r, function(t, n) {
                        n.text && (n.text = $(n.text, e.currItem.index, e.items.length))
                    }), C(d + r, function(t, i, r, o) {
                        var a = e.items.length;
                        r.counter = a > 1 ? $(n.tCounter, o.index, a) : ""
                    }), C("BuildControls" + r, function() {
                        if (e.items.length > 1 && n.arrows && !e.arrowLeft) {
                            var i = n.arrowMarkup,
                                r = e.arrowLeft = t(i.replace(/%title%/gi, n.tPrev).replace(/%dir%/gi, "left")).addClass(y),
                                o = e.arrowRight = t(i.replace(/%title%/gi, n.tNext).replace(/%dir%/gi, "right")).addClass(y),
                                s = a ? "mfpFastClick" : "click";
                            r[s](function() {
                                e.prev()
                            }), o[s](function() {
                                e.next()
                            }), e.isIE7 && (T("b", r[0], !1, !0), T("a", r[0], !1, !0), T("b", o[0], !1, !0), T("a", o[0], !1, !0)), e.container.append(r.add(o))
                        }
                    }), C(f + r, function() {
                        e._preloadTimeout && clearTimeout(e._preloadTimeout), e._preloadTimeout = setTimeout(function() {
                            e.preloadNearbyImages(), e._preloadTimeout = null
                        }, 16)
                    }), void C(s + r, function() {
                        i.off(r), e.wrap.off("click" + r), e.arrowLeft && a && e.arrowLeft.add(e.arrowRight).destroyMfpFastClick(), e.arrowRight = e.arrowLeft = null
                    })) : !1
                },
                next: function() {
                    e.direction = !0, e.index = W(e.index + 1), e.updateItemHTML()
                },
                prev: function() {
                    e.direction = !1, e.index = W(e.index - 1), e.updateItemHTML()
                },
                goTo: function(t) {
                    e.direction = t >= e.index, e.index = t, e.updateItemHTML()
                },
                preloadNearbyImages: function() {
                    var t, n = e.st.gallery.preload,
                        i = Math.min(n[0], e.items.length),
                        r = Math.min(n[1], e.items.length);
                    for (t = 1; t <= (e.direction ? r : i); t++) e._preloadItem(e.index + t);
                    for (t = 1; t <= (e.direction ? i : r); t++) e._preloadItem(e.index - t)
                },
                _preloadItem: function(n) {
                    if (n = W(n), !e.items[n].preloaded) {
                        var i = e.items[n];
                        i.parsed || (i = e.parseEl(n)), k("LazyLoad", i), "image" === i.type && (i.img = t('<img class="mfp-img" />').on("load.mfploader", function() {
                            i.hasSize = !0
                        }).on("error.mfploader", function() {
                            i.hasSize = !0, i.loadError = !0, k("LazyLoadError", i)
                        }).attr("src", i.src)), i.preloaded = !0
                    }
                }
            }
        });
        var X = "retina";
        t.magnificPopup.registerModule(X, {
                options: {
                    replaceSrc: function(t) {
                        return t.src.replace(/\.\w+$/, function(t) {
                            return "@2x" + t
                        })
                    },
                    ratio: 1
                },
                proto: {
                    initRetina: function() {
                        if (window.devicePixelRatio > 1) {
                            var t = e.st.retina,
                                n = t.ratio;
                            n = isNaN(n) ? n() : n, n > 1 && (C("ImageHasSize." + X, function(t, e) {
                                e.img.css({
                                    "max-width": e.img[0].naturalWidth / n,
                                    width: "100%"
                                })
                            }), C("ElementParse." + X, function(e, i) {
                                i.src = t.replaceSrc(i, n)
                            }))
                        }
                    }
                }
            }),
            function() {
                var e = 1e3,
                    n = "ontouchstart" in window,
                    i = function() {
                        w.off("touchmove" + o + " touchend" + o)
                    },
                    r = "mfpFastClick",
                    o = "." + r;
                t.fn.mfpFastClick = function(r) {
                    return t(this).each(function() {
                        var a, s = t(this);
                        if (n) {
                            var l, c, u, d, p, f;
                            s.on("touchstart" + o, function(t) {
                                d = !1, f = 1, p = t.originalEvent ? t.originalEvent.touches[0] : t.touches[0], c = p.clientX, u = p.clientY, w.on("touchmove" + o, function(t) {
                                    p = t.originalEvent ? t.originalEvent.touches : t.touches, f = p.length, p = p[0], (Math.abs(p.clientX - c) > 10 || Math.abs(p.clientY - u) > 10) && (d = !0, i())
                                }).on("touchend" + o, function(t) {
                                    i(), d || f > 1 || (a = !0, t.preventDefault(), clearTimeout(l), l = setTimeout(function() {
                                        a = !1
                                    }, e), r())
                                })
                            })
                        }
                        s.on("click" + o, function() {
                            a || r()
                        })
                    })
                }, t.fn.destroyMfpFastClick = function() {
                    t(this).off("touchstart" + o + " click" + o), n && w.off("touchmove" + o + " touchend" + o)
                }
            }(), S()
    });