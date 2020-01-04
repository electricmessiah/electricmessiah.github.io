var $Stammy, $contsize, $gridset, $mobile, $rerun, $updateLoadProgress, Footnotes, WebP, initPhotoSwipeFromDOM, start;
!function(t, e) {
    "use strict";
    if ("IntersectionObserver"in t && "IntersectionObserverEntry"in t && "intersectionRatio"in t.IntersectionObserverEntry.prototype)
        "isIntersecting"in t.IntersectionObserverEntry.prototype || Object.defineProperty(t.IntersectionObserverEntry.prototype, "isIntersecting", {
            get: function() {
                return this.intersectionRatio > 0
            }
        });
    else {
        var n = [];
        i.prototype.THROTTLE_TIMEOUT = 100,
        i.prototype.POLL_INTERVAL = null,
        i.prototype.USE_MUTATION_OBSERVER = !0,
        i.prototype.observe = function(t) {
            if (!this._observationTargets.some(function(e) {
                return e.element == t
            })) {
                if (!t || 1 != t.nodeType)
                    throw new Error("target must be an Element");
                this._registerInstance(),
                this._observationTargets.push({
                    element: t,
                    entry: null
                }),
                this._monitorIntersections(),
                this._checkForIntersections()
            }
        }
        ,
        i.prototype.unobserve = function(t) {
            this._observationTargets = this._observationTargets.filter(function(e) {
                return e.element != t
            }),
            this._observationTargets.length || (this._unmonitorIntersections(),
            this._unregisterInstance())
        }
        ,
        i.prototype.disconnect = function() {
            this._observationTargets = [],
            this._unmonitorIntersections(),
            this._unregisterInstance()
        }
        ,
        i.prototype.takeRecords = function() {
            var t = this._queuedEntries.slice();
            return this._queuedEntries = [],
            t
        }
        ,
        i.prototype._initThresholds = function(t) {
            var e = t || [0];
            return Array.isArray(e) || (e = [e]),
            e.sort().filter(function(t, e, n) {
                if ("number" != typeof t || isNaN(t) || t < 0 || t > 1)
                    throw new Error("threshold must be a number between 0 and 1 inclusively");
                return t !== n[e - 1]
            })
        }
        ,
        i.prototype._parseRootMargin = function(t) {
            var e = (t || "0px").split(/\s+/).map(function(t) {
                var e = /^(-?\d*\.?\d+)(px|%)$/.exec(t);
                if (!e)
                    throw new Error("rootMargin must be specified in pixels or percent");
                return {
                    value: parseFloat(e[1]),
                    unit: e[2]
                }
            });
            return e[1] = e[1] || e[0],
            e[2] = e[2] || e[0],
            e[3] = e[3] || e[1],
            e
        }
        ,
        i.prototype._monitorIntersections = function() {
            this._monitoringIntersections || (this._monitoringIntersections = !0,
            this.POLL_INTERVAL ? this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL) : (r(t, "resize", this._checkForIntersections, !0),
            r(e, "scroll", this._checkForIntersections, !0),
            this.USE_MUTATION_OBSERVER && "MutationObserver"in t && (this._domObserver = new MutationObserver(this._checkForIntersections),
            this._domObserver.observe(e, {
                attributes: !0,
                childList: !0,
                characterData: !0,
                subtree: !0
            }))))
        }
        ,
        i.prototype._unmonitorIntersections = function() {
            this._monitoringIntersections && (this._monitoringIntersections = !1,
            clearInterval(this._monitoringInterval),
            this._monitoringInterval = null,
            a(t, "resize", this._checkForIntersections, !0),
            a(e, "scroll", this._checkForIntersections, !0),
            this._domObserver && (this._domObserver.disconnect(),
            this._domObserver = null))
        }
        ,
        i.prototype._checkForIntersections = function() {
            var e = this._rootIsInDom()
              , n = e ? this._getRootRect() : {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                width: 0,
                height: 0
            };
            this._observationTargets.forEach(function(i) {
                var r = i.element
                  , a = s(r)
                  , l = this._rootContainsTarget(r)
                  , c = i.entry
                  , u = e && l && this._computeTargetAndRootIntersection(r, n)
                  , d = i.entry = new o({
                    time: t.performance && performance.now && performance.now(),
                    target: r,
                    boundingClientRect: a,
                    rootBounds: n,
                    intersectionRect: u
                });
                c ? e && l ? this._hasCrossedThreshold(c, d) && this._queuedEntries.push(d) : c && c.isIntersecting && this._queuedEntries.push(d) : this._queuedEntries.push(d)
            }, this),
            this._queuedEntries.length && this._callback(this.takeRecords(), this)
        }
        ,
        i.prototype._computeTargetAndRootIntersection = function(n, o) {
            if ("none" != t.getComputedStyle(n).display) {
                for (var i, r, a, l, u, d, p, h, m = s(n), f = c(n), g = !1; !g; ) {
                    var v = null
                      , y = 1 == f.nodeType ? t.getComputedStyle(f) : {};
                    if ("none" == y.display)
                        return;
                    if (f == this.root || f == e ? (g = !0,
                    v = o) : f != e.body && f != e.documentElement && "visible" != y.overflow && (v = s(f)),
                    v && (i = v,
                    r = m,
                    a = void 0,
                    l = void 0,
                    u = void 0,
                    d = void 0,
                    p = void 0,
                    h = void 0,
                    a = Math.max(i.top, r.top),
                    l = Math.min(i.bottom, r.bottom),
                    u = Math.max(i.left, r.left),
                    d = Math.min(i.right, r.right),
                    h = l - a,
                    !(m = (p = d - u) >= 0 && h >= 0 && {
                        top: a,
                        bottom: l,
                        left: u,
                        right: d,
                        width: p,
                        height: h
                    })))
                        break;
                    f = c(f)
                }
                return m
            }
        }
        ,
        i.prototype._getRootRect = function() {
            var t;
            if (this.root)
                t = s(this.root);
            else {
                var n = e.documentElement
                  , o = e.body;
                t = {
                    top: 0,
                    left: 0,
                    right: n.clientWidth || o.clientWidth,
                    width: n.clientWidth || o.clientWidth,
                    bottom: n.clientHeight || o.clientHeight,
                    height: n.clientHeight || o.clientHeight
                }
            }
            return this._expandRectByRootMargin(t)
        }
        ,
        i.prototype._expandRectByRootMargin = function(t) {
            var e = this._rootMarginValues.map(function(e, n) {
                return "px" == e.unit ? e.value : e.value * (n % 2 ? t.width : t.height) / 100
            })
              , n = {
                top: t.top - e[0],
                right: t.right + e[1],
                bottom: t.bottom + e[2],
                left: t.left - e[3]
            };
            return n.width = n.right - n.left,
            n.height = n.bottom - n.top,
            n
        }
        ,
        i.prototype._hasCrossedThreshold = function(t, e) {
            var n = t && t.isIntersecting ? t.intersectionRatio || 0 : -1
              , o = e.isIntersecting ? e.intersectionRatio || 0 : -1;
            if (n !== o)
                for (var i = 0; i < this.thresholds.length; i++) {
                    var r = this.thresholds[i];
                    if (r == n || r == o || r < n != r < o)
                        return !0
                }
        }
        ,
        i.prototype._rootIsInDom = function() {
            return !this.root || l(e, this.root)
        }
        ,
        i.prototype._rootContainsTarget = function(t) {
            return l(this.root || e, t)
        }
        ,
        i.prototype._registerInstance = function() {
            n.indexOf(this) < 0 && n.push(this)
        }
        ,
        i.prototype._unregisterInstance = function() {
            var t = n.indexOf(this);
            -1 != t && n.splice(t, 1)
        }
        ,
        t.IntersectionObserver = i,
        t.IntersectionObserverEntry = o
    }
    function o(t) {
        this.time = t.time,
        this.target = t.target,
        this.rootBounds = t.rootBounds,
        this.boundingClientRect = t.boundingClientRect,
        this.intersectionRect = t.intersectionRect || {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            width: 0,
            height: 0
        },
        this.isIntersecting = !!t.intersectionRect;
        var e = this.boundingClientRect
          , n = e.width * e.height
          , o = this.intersectionRect
          , i = o.width * o.height;
        this.intersectionRatio = n ? Number((i / n).toFixed(4)) : this.isIntersecting ? 1 : 0
    }
    function i(t, e) {
        var n, o, i, r = e || {};
        if ("function" != typeof t)
            throw new Error("callback must be a function");
        if (r.root && 1 != r.root.nodeType)
            throw new Error("root must be an Element");
        this._checkForIntersections = (n = this._checkForIntersections.bind(this),
        o = this.THROTTLE_TIMEOUT,
        i = null,
        function() {
            i || (i = setTimeout(function() {
                n(),
                i = null
            }, o))
        }
        ),
        this._callback = t,
        this._observationTargets = [],
        this._queuedEntries = [],
        this._rootMarginValues = this._parseRootMargin(r.rootMargin),
        this.thresholds = this._initThresholds(r.threshold),
        this.root = r.root || null,
        this.rootMargin = this._rootMarginValues.map(function(t) {
            return t.value + t.unit
        }).join(" ")
    }
    function r(t, e, n, o) {
        "function" == typeof t.addEventListener ? t.addEventListener(e, n, o || !1) : "function" == typeof t.attachEvent && t.attachEvent("on" + e, n)
    }
    function a(t, e, n, o) {
        "function" == typeof t.removeEventListener ? t.removeEventListener(e, n, o || !1) : "function" == typeof t.detatchEvent && t.detatchEvent("on" + e, n)
    }
    function s(t) {
        var e;
        try {
            e = t.getBoundingClientRect()
        } catch (t) {}
        return e ? (e.width && e.height || (e = {
            top: e.top,
            right: e.right,
            bottom: e.bottom,
            left: e.left,
            width: e.right - e.left,
            height: e.bottom - e.top
        }),
        e) : {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            width: 0,
            height: 0
        }
    }
    function l(t, e) {
        for (var n = e; n; ) {
            if (n == t)
                return !0;
            n = c(n)
        }
        return !1
    }
    function c(t) {
        var e = t.parentNode;
        return e && 11 == e.nodeType && e.host ? e.host : e && e.assignedSlot ? e.assignedSlot.parentNode : e
    }
}(window, document),
function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.lozad = e()
}(this, function() {
    "use strict";
    var t = Object.assign || function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var o in n)
                Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
        }
        return t
    }
      , e = "undefined" != typeof document && document.documentMode
      , n = {
        rootMargin: "0px",
        threshold: 0,
        load: function(t) {
            if ("picture" === t.nodeName.toLowerCase()) {
                var n = document.createElement("img");
                e && t.getAttribute("data-iesrc") && (n.src = t.getAttribute("data-iesrc")),
                t.getAttribute("data-alt") && (n.alt = t.getAttribute("data-alt")),
                t.appendChild(n)
            }
            t.getAttribute("data-src") && (t.src = t.getAttribute("data-src")),
            t.getAttribute("data-srcset") && t.setAttribute("srcset", t.getAttribute("data-srcset")),
            t.getAttribute("data-background-image") && (t.style.backgroundImage = "url('" + t.getAttribute("data-background-image") + "')"),
            t.getAttribute("data-toggle-class") && t.classList.toggle(t.getAttribute("data-toggle-class"))
        },
        loaded: function() {}
    };
    function o(t) {
        t.setAttribute("data-loaded", !0)
    }
    var i = function(t) {
        return "true" === t.getAttribute("data-loaded")
    };
    return function() {
        var e, r, a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : ".lozad", s = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, l = t({}, n, s), c = l.root, u = l.rootMargin, d = l.threshold, p = l.load, h = l.loaded, m = void 0;
        return window.IntersectionObserver && (m = new IntersectionObserver((e = p,
        r = h,
        function(t, n) {
            t.forEach(function(t) {
                (0 < t.intersectionRatio || t.isIntersecting) && (n.unobserve(t.target),
                i(t.target) || (e(t.target),
                o(t.target),
                r(t.target)))
            })
        }
        ),{
            root: c,
            rootMargin: u,
            threshold: d
        })),
        {
            observe: function() {
                for (var t = function(t) {
                    var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : document;
                    return t instanceof Element ? [t] : t instanceof NodeList ? t : e.querySelectorAll(t)
                }(a, c), e = 0; e < t.length; e++)
                    i(t[e]) || (m ? m.observe(t[e]) : (p(t[e]),
                    o(t[e]),
                    h(t[e])))
            },
            triggerLoad: function(t) {
                i(t) || (p(t),
                o(t),
                h(t))
            },
            observer: m
        }
    }
}),
function(t, e) {
    var n, o = t.jQuery || t.Cowboy || (t.Cowboy = {});
    o.throttle = n = function(t, n, i, r) {
        var a, s = 0;
        function l() {
            var o = this
              , l = +new Date - s
              , c = arguments;
            function u() {
                s = +new Date,
                i.apply(o, c)
            }
            r && !a && u(),
            a && clearTimeout(a),
            r === e && l > t ? u() : !0 !== n && (a = setTimeout(r ? function() {
                a = e
            }
            : u, r === e ? t - l : t))
        }
        return "boolean" != typeof n && (r = i,
        i = n,
        n = e),
        o.guid && (l.guid = i.guid = i.guid || o.guid++),
        l
    }
    ,
    o.debounce = function(t, o, i) {
        return i === e ? n(t, o, !1) : n(t, i, !1 !== o)
    }
}(this),
function(t) {
    "use strict";
    t.fn.fitVids = function(e) {
        var n = {
            customSelector: null
        };
        if (!document.getElementById("fit-vids-style")) {
            var o = document.createElement("div")
              , i = document.getElementsByTagName("base")[0] || document.getElementsByTagName("script")[0];
            o.className = "fit-vids-style",
            o.id = "fit-vids-style",
            o.style.display = "none",
            o.innerHTML = "&shy;<style>.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>",
            i.parentNode.insertBefore(o, i)
        }
        return e && t.extend(n, e),
        this.each(function() {
            var e = ["iframe[src*='player.vimeo.com']", "iframe[src*='youtube.com']", "iframe[src*='youtube-nocookie.com']", "iframe[src*='kickstarter.com'][src*='video.html']", "object", "embed"];
            n.customSelector && e.push(n.customSelector);
            var o = t(this).find(e.join(","));
            (o = o.not("object object")).each(function() {
                var e = t(this);
                if (!("embed" === this.tagName.toLowerCase() && e.parent("object").length || e.parent(".fluid-width-video-wrapper").length)) {
                    var n = ("object" === this.tagName.toLowerCase() || e.attr("height") && !isNaN(parseInt(e.attr("height"), 10)) ? parseInt(e.attr("height"), 10) : e.height()) / (isNaN(parseInt(e.attr("width"), 10)) ? e.width() : parseInt(e.attr("width"), 10));
                    if (!e.attr("id")) {
                        var o = "fitvid" + Math.floor(999999 * Math.random());
                        e.attr("id", o)
                    }
                    e.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top", 100 * n + "%"),
                    e.removeAttr("height").removeAttr("width")
                }
            })
        })
    }
}(window.jQuery || window.Zepto),
function(t, e, n) {
    function o(t, e) {
        return typeof t === e
    }
    function i(t) {
        return t.replace(/([a-z])-([a-z])/g, function(t, e, n) {
            return e + n.toUpperCase()
        }).replace(/^-/, "")
    }
    function r(t) {
        return t.replace(/([A-Z])/g, function(t, e) {
            return "-" + e.toLowerCase()
        }).replace(/^ms-/, "-ms-")
    }
    function a() {
        return "function" != typeof e.createElement ? e.createElement(arguments[0]) : y ? e.createElementNS.call(e, "http://www.w3.org/2000/svg", arguments[0]) : e.createElement.apply(e, arguments)
    }
    function s(t, n, o, i) {
        var r, s, l, c, u = "modernizr", d = a("div"), p = function() {
            var t = e.body;
            return t || ((t = a(y ? "svg" : "body")).fake = !0),
            t
        }();
        if (parseInt(o, 10))
            for (; o--; )
                (l = a("div")).id = i ? i[o] : u + (o + 1),
                d.appendChild(l);
        return (r = a("style")).type = "text/css",
        r.id = "s" + u,
        (p.fake ? p : d).appendChild(r),
        p.appendChild(d),
        r.styleSheet ? r.styleSheet.cssText = t : r.appendChild(e.createTextNode(t)),
        d.id = u,
        p.fake && (p.style.background = "",
        p.style.overflow = "hidden",
        c = v.style.overflow,
        v.style.overflow = "hidden",
        v.appendChild(p)),
        s = n(d, t),
        p.fake ? (p.parentNode.removeChild(p),
        v.style.overflow = c,
        v.offsetHeight) : d.parentNode.removeChild(d),
        !!s
    }
    function l(t, e) {
        return !!~("" + t).indexOf(e)
    }
    function c(e, o) {
        var i = e.length;
        if ("CSS"in t && "supports"in t.CSS) {
            for (; i--; )
                if (t.CSS.supports(r(e[i]), o))
                    return !0;
            return !1
        }
        if ("CSSSupportsRule"in t) {
            for (var a = []; i--; )
                a.push("(" + r(e[i]) + ":" + o + ")");
            return s("@supports (" + (a = a.join(" or ")) + ") { #modernizr { position: absolute; } }", function(t) {
                return "absolute" == getComputedStyle(t, null).position
            })
        }
        return n
    }
    function u(t, e) {
        return function() {
            return t.apply(e, arguments)
        }
    }
    function d(t, e, r, s) {
        function u() {
            p && (delete _.style,
            delete _.modElem)
        }
        if (s = !o(s, "undefined") && s,
        !o(r, "undefined")) {
            var d = c(t, r);
            if (!o(d, "undefined"))
                return d
        }
        for (var p, h, m, f, g, v = ["modernizr", "tspan", "samp"]; !_.style && v.length; )
            p = !0,
            _.modElem = a(v.shift()),
            _.style = _.modElem.style;
        for (m = t.length,
        h = 0; m > h; h++)
            if (f = t[h],
            g = _.style[f],
            l(f, "-") && (f = i(f)),
            _.style[f] !== n) {
                if (s || o(r, "undefined"))
                    return u(),
                    "pfx" != e || f;
                try {
                    _.style[f] = r
                } catch (t) {}
                if (_.style[f] != g)
                    return u(),
                    "pfx" != e || f
            }
        return u(),
        !1
    }
    function p(t, e, n, i, r) {
        var a = t.charAt(0).toUpperCase() + t.slice(1)
          , s = (t + " " + $.join(a + " ") + a).split(" ");
        return o(e, "string") || o(e, "undefined") ? d(s, e, i, r) : function(t, e, n) {
            var i;
            for (var r in t)
                if (t[r]in e)
                    return !1 === n ? t[r] : o(i = e[t[r]], "function") ? u(i, n || e) : i;
            return !1
        }(s = (t + " " + x.join(a + " ") + a).split(" "), e, n)
    }
    var h = []
      , m = []
      , f = {
        _version: "3.3.1",
        _config: {
            classPrefix: "",
            enableClasses: !0,
            enableJSClass: !0,
            usePrefixes: !0
        },
        _q: [],
        on: function(t, e) {
            var n = this;
            setTimeout(function() {
                e(n[t])
            }, 0)
        },
        addTest: function(t, e, n) {
            m.push({
                name: t,
                fn: e,
                options: n
            })
        },
        addAsyncTest: function(t) {
            m.push({
                name: null,
                fn: t
            })
        }
    }
      , g = function() {};
    g.prototype = f,
    g = new g;
    var v = e.documentElement
      , y = "svg" === v.nodeName.toLowerCase()
      , w = f._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
    f._prefixes = w;
    var b = "Moz O ms Webkit"
      , x = f._config.usePrefixes ? b.toLowerCase().split(" ") : [];
    f._domPrefixes = x;
    f.prefixedCSSValue = function(t, e) {
        var n = !1
          , o = a("div").style;
        if (t in o) {
            var i = x.length;
            for (o[t] = e,
            n = o[t]; i-- && !n; )
                o[t] = "-" + x[i] + "-" + e,
                n = o[t]
        }
        return "" === n && (n = !1),
        n
    }
    ;
    var $ = f._config.usePrefixes ? b.split(" ") : [];
    f._cssomPrefixes = $;
    var C = function(e) {
        var o, i = w.length, r = t.CSSRule;
        if (void 0 === r)
            return n;
        if (!e)
            return !1;
        if ((o = (e = e.replace(/^@/, "")).replace(/-/g, "_").toUpperCase() + "_RULE")in r)
            return "@" + e;
        for (var a = 0; i > a; a++) {
            var s = w[a];
            if (s.toUpperCase() + "_" + o in r)
                return "@-" + s.toLowerCase() + "-" + e
        }
        return !1
    };
    f.atRule = C;
    var S = f.testStyles = s;
    g.addTest("touchevents", function() {
        var n;
        if ("ontouchstart"in t || t.DocumentTouch && e instanceof DocumentTouch)
            n = !0;
        else {
            var o = ["@media (", w.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join("");
            S(o, function(t) {
                n = 9 === t.offsetTop
            })
        }
        return n
    });
    var T = {
        elem: a("modernizr")
    };
    g._q.push(function() {
        delete T.elem
    });
    var _ = {
        style: T.elem.style
    };
    g._q.unshift(function() {
        delete _.style
    }),
    f.testAllProps = p;
    var I = f.prefixed = function(t, e, n) {
        return 0 === t.indexOf("@") ? C(t) : (-1 != t.indexOf("-") && (t = i(t)),
        e ? p(t, e, n) : p(t, "pfx"))
    }
    ;
    f.prefixedCSS = function(t) {
        var e = I(t);
        return e && r(e)
    }
    ,
    function() {
        var t, e, n, i, r, a;
        for (var s in m)
            if (m.hasOwnProperty(s)) {
                if (t = [],
                (e = m[s]).name && (t.push(e.name.toLowerCase()),
                e.options && e.options.aliases && e.options.aliases.length))
                    for (n = 0; n < e.options.aliases.length; n++)
                        t.push(e.options.aliases[n].toLowerCase());
                for (i = o(e.fn, "function") ? e.fn() : e.fn,
                r = 0; r < t.length; r++)
                    1 === (a = t[r].split(".")).length ? g[a[0]] = i : (!g[a[0]] || g[a[0]]instanceof Boolean || (g[a[0]] = new Boolean(g[a[0]])),
                    g[a[0]][a[1]] = i),
                    h.push((i ? "" : "no-") + a.join("-"))
            }
    }(),
    function(t) {
        var e = v.className
          , n = g._config.classPrefix || "";
        if (y && (e = e.baseVal),
        g._config.enableJSClass) {
            var o = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
            e = e.replace(o, "$1" + n + "js$2")
        }
        g._config.enableClasses && (e += " " + n + t.join(" " + n),
        y ? v.className.baseVal = e : v.className = e)
    }(h),
    delete f.addTest,
    delete f.addAsyncTest;
    for (var E = 0; E < g._q.length; E++)
        g._q[E]();
    t.Modernizr = g
}(window, document),
function(t) {
    "use strict";
    function e(t) {
        var e = "";
        for (var n in t)
            t.hasOwnProperty(n) && (e += n + ":" + t[n] + ";");
        return e
    }
    function n(e) {
        var n = function(t) {
            if (!1 === a.allowEvent(t))
                return null;
            for (var e = null, n = t.target || t.srcElement; null !== n.parentElement; ) {
                if (!(n instanceof SVGElement || -1 === n.className.indexOf("waves-effect"))) {
                    e = n;
                    break
                }
                if (n.classList.contains("waves-effect")) {
                    e = n;
                    break
                }
                n = n.parentElement
            }
            return e
        }(e);
        null !== n && (r.show(e, n),
        "ontouchstart"in t && (n.addEventListener("touchend", r.hide, !1),
        n.addEventListener("touchcancel", r.hide, !1)),
        n.addEventListener("mouseup", r.hide, !1),
        n.addEventListener("mouseleave", r.hide, !1))
    }
    var o = o || {}
      , i = document.querySelectorAll.bind(document)
      , r = {
        duration: 750,
        show: function(t, n) {
            if (2 === t.button)
                return !1;
            var o = n || this
              , i = document.createElement("div");
            i.className = "waves-ripple",
            o.appendChild(i);
            var a = function(t) {
                var e, n, o = {
                    top: 0,
                    left: 0
                }, i = t && t.ownerDocument;
                return e = i.documentElement,
                void 0 !== t.getBoundingClientRect && (o = t.getBoundingClientRect()),
                n = function(t) {
                    return function(t) {
                        return null !== t && t === t.window
                    }(t) ? t : 9 === t.nodeType && t.defaultView
                }(i),
                {
                    top: o.top + n.pageYOffset - e.clientTop,
                    left: o.left + n.pageXOffset - e.clientLeft
                }
            }(o)
              , s = t.pageY - a.top
              , l = t.pageX - a.left
              , c = "scale(" + o.clientWidth / 100 * 10 + ")";
            "touches"in t && (s = t.touches[0].pageY - a.top,
            l = t.touches[0].pageX - a.left),
            i.setAttribute("data-hold", Date.now()),
            i.setAttribute("data-scale", c),
            i.setAttribute("data-x", l),
            i.setAttribute("data-y", s);
            var u = {
                top: s + "px",
                left: l + "px"
            };
            i.className = i.className + " waves-notransition",
            i.setAttribute("style", e(u)),
            i.className = i.className.replace("waves-notransition", ""),
            u["-webkit-transform"] = c,
            u["-moz-transform"] = c,
            u["-ms-transform"] = c,
            u["-o-transform"] = c,
            u.transform = c,
            u.opacity = "1",
            u["-webkit-transition-duration"] = r.duration + "ms",
            u["-moz-transition-duration"] = r.duration + "ms",
            u["-o-transition-duration"] = r.duration + "ms",
            u["transition-duration"] = r.duration + "ms",
            u["-webkit-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
            u["-moz-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
            u["-o-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
            u["transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
            i.setAttribute("style", e(u))
        },
        hide: function(t) {
            a.touchup(t);
            var n = this
              , o = (n.clientWidth,
            null)
              , i = n.getElementsByClassName("waves-ripple");
            if (!(i.length > 0))
                return !1;
            var s = (o = i[i.length - 1]).getAttribute("data-x")
              , l = o.getAttribute("data-y")
              , c = o.getAttribute("data-scale")
              , u = 350 - (Date.now() - Number(o.getAttribute("data-hold")));
            0 > u && (u = 0),
            setTimeout(function() {
                var t = {
                    top: l + "px",
                    left: s + "px",
                    opacity: "0",
                    "-webkit-transition-duration": r.duration + "ms",
                    "-moz-transition-duration": r.duration + "ms",
                    "-o-transition-duration": r.duration + "ms",
                    "transition-duration": r.duration + "ms",
                    "-webkit-transform": c,
                    "-moz-transform": c,
                    "-ms-transform": c,
                    "-o-transform": c,
                    transform: c
                };
                o.setAttribute("style", e(t)),
                setTimeout(function() {
                    try {
                        n.removeChild(o)
                    } catch (t) {
                        return !1
                    }
                }, r.duration)
            }, u)
        },
        wrapInput: function(t) {
            for (var e = 0; e < t.length; e++) {
                var n = t[e];
                if ("input" === n.tagName.toLowerCase()) {
                    var o = n.parentNode;
                    if ("i" === o.tagName.toLowerCase() && -1 !== o.className.indexOf("waves-effect"))
                        continue;
                    var i = document.createElement("i");
                    i.className = n.className + " waves-input-wrapper";
                    var r = n.getAttribute("style");
                    r || (r = ""),
                    i.setAttribute("style", r),
                    n.className = "waves-button-input",
                    n.removeAttribute("style"),
                    o.replaceChild(i, n),
                    i.appendChild(n)
                }
            }
        }
    }
      , a = {
        touches: 0,
        allowEvent: function(t) {
            var e = !0;
            return "touchstart" === t.type ? a.touches += 1 : "touchend" === t.type || "touchcancel" === t.type ? setTimeout(function() {
                a.touches > 0 && (a.touches -= 1)
            }, 500) : "mousedown" === t.type && a.touches > 0 && (e = !1),
            e
        },
        touchup: function(t) {
            a.allowEvent(t)
        }
    };
    o.displayEffect = function(e) {
        "duration"in (e = e || {}) && (r.duration = e.duration),
        r.wrapInput(i(".waves-effect")),
        "ontouchstart"in t && document.body.addEventListener("touchstart", n, !1),
        document.body.addEventListener("mousedown", n, !1)
    }
    ,
    o.attach = function(e) {
        "input" === e.tagName.toLowerCase() && (r.wrapInput([e]),
        e = e.parentElement),
        "ontouchstart"in t && e.addEventListener("touchstart", n, !1),
        e.addEventListener("mousedown", n, !1)
    }
    ,
    t.Waves = o,
    document.addEventListener("DOMContentLoaded", function() {
        o.displayEffect()
    }, !1)
}(window),
function(t, e) {
    "function" == typeof define && define.amd ? define(e) : "object" == typeof exports ? module.exports = e() : t.PhotoSwipe = e()
}(this, function() {
    "use strict";
    return function(t, e, n, o) {
        var i = {
            features: null,
            bind: function(t, e, n, o) {
                var i = (o ? "remove" : "add") + "EventListener";
                e = e.split(" ");
                for (var r = 0; r < e.length; r++)
                    e[r] && t[i](e[r], n, !1)
            },
            isArray: function(t) {
                return t instanceof Array
            },
            createEl: function(t, e) {
                var n = document.createElement(e || "div");
                return t && (n.className = t),
                n
            },
            getScrollY: function() {
                var t = window.pageYOffset;
                return void 0 !== t ? t : document.documentElement.scrollTop
            },
            unbind: function(t, e, n) {
                i.bind(t, e, n, !0)
            },
            removeClass: function(t, e) {
                var n = new RegExp("(\\s|^)" + e + "(\\s|$)");
                t.className = t.className.replace(n, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "")
            },
            addClass: function(t, e) {
                i.hasClass(t, e) || (t.className += (t.className ? " " : "") + e)
            },
            hasClass: function(t, e) {
                return t.className && new RegExp("(^|\\s)" + e + "(\\s|$)").test(t.className)
            },
            getChildByClass: function(t, e) {
                for (var n = t.firstChild; n; ) {
                    if (i.hasClass(n, e))
                        return n;
                    n = n.nextSibling
                }
            },
            arraySearch: function(t, e, n) {
                for (var o = t.length; o--; )
                    if (t[o][n] === e)
                        return o;
                return -1
            },
            extend: function(t, e, n) {
                for (var o in e)
                    if (e.hasOwnProperty(o)) {
                        if (n && t.hasOwnProperty(o))
                            continue;
                        t[o] = e[o]
                    }
            },
            easing: {
                sine: {
                    out: function(t) {
                        return Math.sin(t * (Math.PI / 2))
                    },
                    inOut: function(t) {
                        return -(Math.cos(Math.PI * t) - 1) / 2
                    }
                },
                cubic: {
                    out: function(t) {
                        return --t * t * t + 1
                    }
                }
            },
            detectFeatures: function() {
                if (i.features)
                    return i.features;
                var t = i.createEl().style
                  , e = ""
                  , n = {};
                if (n.oldIE = document.all && !document.addEventListener,
                n.touch = "ontouchstart"in window,
                window.requestAnimationFrame && (n.raf = window.requestAnimationFrame,
                n.caf = window.cancelAnimationFrame),
                n.pointerEvent = navigator.pointerEnabled || navigator.msPointerEnabled,
                !n.pointerEvent) {
                    var o = navigator.userAgent;
                    if (/iP(hone|od)/.test(navigator.platform)) {
                        var r = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
                        r && r.length > 0 && (r = parseInt(r[1], 10)) >= 1 && 8 > r && (n.isOldIOSPhone = !0)
                    }
                    var a = o.match(/Android\s([0-9\.]*)/)
                      , s = a ? a[1] : 0;
                    (s = parseFloat(s)) >= 1 && (4.4 > s && (n.isOldAndroid = !0),
                    n.androidVersion = s),
                    n.isMobileOpera = /opera mini|opera mobi/i.test(o)
                }
                for (var l, c, u = ["transform", "perspective", "animationName"], d = ["", "webkit", "Moz", "ms", "O"], p = 0; 4 > p; p++) {
                    e = d[p];
                    for (var h = 0; 3 > h; h++)
                        l = u[h],
                        c = e + (e ? l.charAt(0).toUpperCase() + l.slice(1) : l),
                        !n[l] && c in t && (n[l] = c);
                    e && !n.raf && (e = e.toLowerCase(),
                    n.raf = window[e + "RequestAnimationFrame"],
                    n.raf && (n.caf = window[e + "CancelAnimationFrame"] || window[e + "CancelRequestAnimationFrame"]))
                }
                if (!n.raf) {
                    var m = 0;
                    n.raf = function(t) {
                        var e = (new Date).getTime()
                          , n = Math.max(0, 16 - (e - m))
                          , o = window.setTimeout(function() {
                            t(e + n)
                        }, n);
                        return m = e + n,
                        o
                    }
                    ,
                    n.caf = function(t) {
                        clearTimeout(t)
                    }
                }
                return n.svg = !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect,
                i.features = n,
                n
            }
        };
        i.detectFeatures(),
        i.features.oldIE && (i.bind = function(t, e, n, o) {
            e = e.split(" ");
            for (var i, r = (o ? "detach" : "attach") + "Event", a = function() {
                n.handleEvent.call(n)
            }, s = 0; s < e.length; s++)
                if (i = e[s])
                    if ("object" == typeof n && n.handleEvent) {
                        if (o) {
                            if (!n["oldIE" + i])
                                return !1
                        } else
                            n["oldIE" + i] = a;
                        t[r]("on" + i, n["oldIE" + i])
                    } else
                        t[r]("on" + i, n)
        }
        );
        var r = this
          , a = {
            allowPanToNext: !0,
            spacing: .12,
            bgOpacity: 1,
            mouseUsed: !1,
            loop: !0,
            pinchToClose: !0,
            closeOnScroll: !0,
            closeOnVerticalDrag: !0,
            verticalDragRange: .75,
            hideAnimationDuration: 333,
            showAnimationDuration: 333,
            showHideOpacity: !1,
            focus: !0,
            escKey: !0,
            arrowKeys: !0,
            mainScrollEndFriction: .35,
            panEndFriction: .35,
            isClickableElement: function(t) {
                return "A" === t.tagName
            },
            getDoubleTapZoom: function(t, e) {
                return t ? 1 : e.initialZoomLevel < .7 ? 1 : 1.33
            },
            maxSpreadZoom: 1.33,
            modal: !0,
            scaleMode: "fit"
        };
        i.extend(a, o);
        var s, l, c, u, d, p, h, m, f, g, v, y, w, b, x, $, C, S, T, _, I, E, A, k, M, O, L, F, N, D, R, P, z, j, q, Z, U, B, H, W, Y, V, K, X, G, Q, J, tt, et, nt, ot, it, rt, at, st, lt = {
            x: 0,
            y: 0
        }, ct = {
            x: 0,
            y: 0
        }, ut = {
            x: 0,
            y: 0
        }, dt = {}, pt = 0, ht = {}, mt = {
            x: 0,
            y: 0
        }, ft = 0, gt = !0, vt = [], yt = {}, wt = !1, bt = function(t, e) {
            i.extend(r, e.publicMethods),
            vt.push(t)
        }, xt = function(t) {
            var e = je();
            return t > e - 1 ? t - e : 0 > t ? e + t : t
        }, $t = {}, Ct = function(t, e) {
            return $t[t] || ($t[t] = []),
            $t[t].push(e)
        }, St = function(t) {
            var e = $t[t];
            if (e) {
                var n = Array.prototype.slice.call(arguments);
                n.shift();
                for (var o = 0; o < e.length; o++)
                    e[o].apply(r, n)
            }
        }, Tt = function() {
            return (new Date).getTime()
        }, _t = function(t) {
            rt = t,
            r.bg.style.opacity = t * a.bgOpacity
        }, It = function(t, e, n, o, i) {
            (!wt || i && i !== r.currItem) && (o /= i ? i.fitRatio : r.currItem.fitRatio),
            t[E] = y + e + "px, " + n + "px" + w + " scale(" + o + ")"
        }, Et = function(t) {
            tt && (t && (g > r.currItem.fitRatio ? wt || (Ke(r.currItem, !1, !0),
            wt = !0) : wt && (Ke(r.currItem),
            wt = !1)),
            It(tt, ut.x, ut.y, g))
        }, At = function(t) {
            t.container && It(t.container.style, t.initialPosition.x, t.initialPosition.y, t.initialZoomLevel, t)
        }, kt = function(t, e) {
            e[E] = y + t + "px, 0px" + w
        }, Mt = function(t, e) {
            if (!a.loop && e) {
                var n = u + (mt.x * pt - t) / mt.x
                  , o = Math.round(t - ce.x);
                (0 > n && o > 0 || n >= je() - 1 && 0 > o) && (t = ce.x + o * a.mainScrollEndFriction)
            }
            ce.x = t,
            kt(t, d)
        }, Ot = function(t, e) {
            var n = ue[t] - ht[t];
            return ct[t] + lt[t] + n - n * (e / v)
        }, Lt = function(t, e) {
            t.x = e.x,
            t.y = e.y,
            e.id && (t.id = e.id)
        }, Ft = function(t) {
            t.x = Math.round(t.x),
            t.y = Math.round(t.y)
        }, Nt = null, Dt = function() {
            Nt && (i.unbind(document, "mousemove", Dt),
            i.addClass(t, "pswp--has_mouse"),
            a.mouseUsed = !0,
            St("mouseUsed")),
            Nt = setTimeout(function() {
                Nt = null
            }, 100)
        }, Rt = function(t, e) {
            var n = He(r.currItem, dt, t);
            return e && (J = n),
            n
        }, Pt = function(t) {
            return t || (t = r.currItem),
            t.initialZoomLevel
        }, zt = function(t) {
            return t || (t = r.currItem),
            t.w > 0 ? a.maxSpreadZoom : 1
        }, jt = function(t, e, n, o) {
            return o === r.currItem.initialZoomLevel ? (n[t] = r.currItem.initialPosition[t],
            !0) : (n[t] = Ot(t, o),
            n[t] > e.min[t] ? (n[t] = e.min[t],
            !0) : n[t] < e.max[t] && (n[t] = e.max[t],
            !0))
        }, qt = function(t) {
            var e = "";
            a.escKey && 27 === t.keyCode ? e = "close" : a.arrowKeys && (37 === t.keyCode ? e = "prev" : 39 === t.keyCode && (e = "next")),
            e && (t.ctrlKey || t.altKey || t.shiftKey || t.metaKey || (t.preventDefault ? t.preventDefault() : t.returnValue = !1,
            r[e]()))
        }, Zt = function(t) {
            t && (Y || W || et || Z) && (t.preventDefault(),
            t.stopPropagation())
        }, Ut = function() {
            r.setScrollOffset(0, i.getScrollY())
        }, Bt = {}, Ht = 0, Wt = function(t) {
            Bt[t] && (Bt[t].raf && O(Bt[t].raf),
            Ht--,
            delete Bt[t])
        }, Yt = function(t) {
            Bt[t] && Wt(t),
            Bt[t] || (Ht++,
            Bt[t] = {})
        }, Vt = function() {
            for (var t in Bt)
                Bt.hasOwnProperty(t) && Wt(t)
        }, Kt = function(t, e, n, o, i, r, a) {
            var s, l = Tt();
            Yt(t);
            var c = function() {
                if (Bt[t]) {
                    if ((s = Tt() - l) >= o)
                        return Wt(t),
                        r(n),
                        void (a && a());
                    r((n - e) * i(s / o) + e),
                    Bt[t].raf = M(c)
                }
            };
            c()
        }, Xt = {
            shout: St,
            listen: Ct,
            viewportSize: dt,
            options: a,
            isMainScrollAnimating: function() {
                return et
            },
            getZoomLevel: function() {
                return g
            },
            getCurrentIndex: function() {
                return u
            },
            isDragging: function() {
                return B
            },
            isZooming: function() {
                return G
            },
            setScrollOffset: function(t, e) {
                ht.x = t,
                D = ht.y = e,
                St("updateScrollOffset", ht)
            },
            applyZoomPan: function(t, e, n, o) {
                ut.x = e,
                ut.y = n,
                g = t,
                Et(o)
            },
            init: function() {
                if (!s && !l) {
                    var n;
                    r.framework = i,
                    r.template = t,
                    r.bg = i.getChildByClass(t, "pswp__bg"),
                    L = t.className,
                    s = !0,
                    R = i.detectFeatures(),
                    M = R.raf,
                    O = R.caf,
                    E = R.transform,
                    N = R.oldIE,
                    r.scrollWrap = i.getChildByClass(t, "pswp__scroll-wrap"),
                    r.container = i.getChildByClass(r.scrollWrap, "pswp__container"),
                    d = r.container.style,
                    r.itemHolders = $ = [{
                        el: r.container.children[0],
                        wrap: 0,
                        index: -1
                    }, {
                        el: r.container.children[1],
                        wrap: 0,
                        index: -1
                    }, {
                        el: r.container.children[2],
                        wrap: 0,
                        index: -1
                    }],
                    $[0].el.style.display = $[2].el.style.display = "none",
                    function() {
                        if (E) {
                            var e = R.perspective && !k;
                            return y = "translate" + (e ? "3d(" : "("),
                            void (w = R.perspective ? ", 0px)" : ")")
                        }
                        E = "left",
                        i.addClass(t, "pswp--ie"),
                        kt = function(t, e) {
                            e.left = t + "px"
                        }
                        ,
                        At = function(t) {
                            var e = t.fitRatio > 1 ? 1 : t.fitRatio
                              , n = t.container.style
                              , o = e * t.w
                              , i = e * t.h;
                            n.width = o + "px",
                            n.height = i + "px",
                            n.left = t.initialPosition.x + "px",
                            n.top = t.initialPosition.y + "px"
                        }
                        ,
                        Et = function() {
                            if (tt) {
                                var t = tt
                                  , e = r.currItem
                                  , n = e.fitRatio > 1 ? 1 : e.fitRatio
                                  , o = n * e.w
                                  , i = n * e.h;
                                t.width = o + "px",
                                t.height = i + "px",
                                t.left = ut.x + "px",
                                t.top = ut.y + "px"
                            }
                        }
                    }(),
                    f = {
                        resize: r.updateSize,
                        scroll: Ut,
                        keydown: qt,
                        click: Zt
                    };
                    var o = R.isOldIOSPhone || R.isOldAndroid || R.isMobileOpera;
                    for (R.animationName && R.transform && !o || (a.showAnimationDuration = a.hideAnimationDuration = 0),
                    n = 0; n < vt.length; n++)
                        r["init" + vt[n]]();
                    e && (r.ui = new e(r,i)).init(),
                    St("firstUpdate"),
                    u = u || a.index || 0,
                    (isNaN(u) || 0 > u || u >= je()) && (u = 0),
                    r.currItem = ze(u),
                    (R.isOldIOSPhone || R.isOldAndroid) && (gt = !1),
                    t.setAttribute("aria-hidden", "false"),
                    a.modal && (gt ? t.style.position = "fixed" : (t.style.position = "absolute",
                    t.style.top = i.getScrollY() + "px")),
                    void 0 === D && (St("initialLayout"),
                    D = F = i.getScrollY());
                    var c = "pswp--open ";
                    for (a.mainClass && (c += a.mainClass + " "),
                    a.showHideOpacity && (c += "pswp--animate_opacity "),
                    c += k ? "pswp--touch" : "pswp--notouch",
                    c += R.animationName ? " pswp--css_animation" : "",
                    c += R.svg ? " pswp--svg" : "",
                    i.addClass(t, c),
                    r.updateSize(),
                    p = -1,
                    ft = null,
                    n = 0; 3 > n; n++)
                        kt((n + p) * mt.x, $[n].el.style);
                    N || i.bind(r.scrollWrap, m, r),
                    Ct("initialZoomInEnd", function() {
                        r.setContent($[0], u - 1),
                        r.setContent($[2], u + 1),
                        $[0].el.style.display = $[2].el.style.display = "block",
                        a.focus && t.focus(),
                        i.bind(document, "keydown", r),
                        R.transform && i.bind(r.scrollWrap, "click", r),
                        a.mouseUsed || i.bind(document, "mousemove", Dt),
                        i.bind(window, "resize scroll", r),
                        St("bindEvents")
                    }),
                    r.setContent($[1], u),
                    r.updateCurrItem(),
                    St("afterInit"),
                    gt || (b = setInterval(function() {
                        Ht || B || G || g !== r.currItem.initialZoomLevel || r.updateSize()
                    }, 1e3)),
                    i.addClass(t, "pswp--visible")
                }
            },
            close: function() {
                s && (s = !1,
                l = !0,
                St("close"),
                i.unbind(window, "resize", r),
                i.unbind(window, "scroll", f.scroll),
                i.unbind(document, "keydown", r),
                i.unbind(document, "mousemove", Dt),
                R.transform && i.unbind(r.scrollWrap, "click", r),
                B && i.unbind(window, h, r),
                St("unbindEvents"),
                qe(r.currItem, null, !0, r.destroy))
            },
            destroy: function() {
                St("destroy"),
                Ne && clearTimeout(Ne),
                t.setAttribute("aria-hidden", "true"),
                t.className = L,
                b && clearInterval(b),
                i.unbind(r.scrollWrap, m, r),
                i.unbind(window, "scroll", r),
                he(),
                Vt(),
                $t = null
            },
            panTo: function(t, e, n) {
                n || (t > J.min.x ? t = J.min.x : t < J.max.x && (t = J.max.x),
                e > J.min.y ? e = J.min.y : e < J.max.y && (e = J.max.y)),
                ut.x = t,
                ut.y = e,
                Et()
            },
            handleEvent: function(t) {
                t = t || window.event,
                f[t.type] && f[t.type](t)
            },
            goTo: function(t) {
                var e = (t = xt(t)) - u;
                ft = e,
                u = t,
                r.currItem = ze(u),
                pt -= e,
                Mt(mt.x * pt),
                Vt(),
                et = !1,
                r.updateCurrItem()
            },
            next: function() {
                r.goTo(u + 1)
            },
            prev: function() {
                r.goTo(u - 1)
            },
            updateCurrZoomItem: function(t) {
                if (t && St("beforeChange", 0),
                $[1].el.children.length) {
                    var e = $[1].el.children[0];
                    tt = i.hasClass(e, "pswp__zoom-wrap") ? e.style : null
                } else
                    tt = null;
                J = r.currItem.bounds,
                v = g = r.currItem.initialZoomLevel,
                ut.x = J.center.x,
                ut.y = J.center.y,
                t && St("afterChange")
            },
            invalidateCurrItems: function() {
                x = !0;
                for (var t = 0; 3 > t; t++)
                    $[t].item && ($[t].item.needsUpdate = !0)
            },
            updateCurrItem: function(t) {
                if (0 !== ft) {
                    var e, n = Math.abs(ft);
                    if (!(t && 2 > n)) {
                        r.currItem = ze(u),
                        wt = !1,
                        St("beforeChange", ft),
                        n >= 3 && (p += ft + (ft > 0 ? -3 : 3),
                        n = 3);
                        for (var o = 0; n > o; o++)
                            ft > 0 ? (e = $.shift(),
                            $[2] = e,
                            kt((++p + 2) * mt.x, e.el.style),
                            r.setContent(e, u - n + o + 1 + 1)) : (e = $.pop(),
                            $.unshift(e),
                            kt(--p * mt.x, e.el.style),
                            r.setContent(e, u + n - o - 1 - 1));
                        if (tt && 1 === Math.abs(ft)) {
                            var i = ze(C);
                            i.initialZoomLevel !== g && (He(i, dt),
                            Ke(i),
                            At(i))
                        }
                        ft = 0,
                        r.updateCurrZoomItem(),
                        C = u,
                        St("afterChange")
                    }
                }
            },
            updateSize: function(e) {
                if (!gt && a.modal) {
                    var n = i.getScrollY();
                    if (D !== n && (t.style.top = n + "px",
                    D = n),
                    !e && yt.x === window.innerWidth && yt.y === window.innerHeight)
                        return;
                    yt.x = window.innerWidth,
                    yt.y = window.innerHeight,
                    t.style.height = yt.y + "px"
                }
                if (dt.x = r.scrollWrap.clientWidth,
                dt.y = r.scrollWrap.clientHeight,
                Ut(),
                mt.x = dt.x + Math.round(dt.x * a.spacing),
                mt.y = dt.y,
                Mt(mt.x * pt),
                St("beforeResize"),
                void 0 !== p) {
                    for (var o, s, l, c = 0; 3 > c; c++)
                        o = $[c],
                        kt((c + p) * mt.x, o.el.style),
                        l = u + c - 1,
                        a.loop && je() > 2 && (l = xt(l)),
                        (s = ze(l)) && (x || s.needsUpdate || !s.bounds) ? (r.cleanSlide(s),
                        r.setContent(o, l),
                        1 === c && (r.currItem = s,
                        r.updateCurrZoomItem(!0)),
                        s.needsUpdate = !1) : -1 === o.index && l >= 0 && r.setContent(o, l),
                        s && s.container && (He(s, dt),
                        Ke(s),
                        At(s));
                    x = !1
                }
                v = g = r.currItem.initialZoomLevel,
                (J = r.currItem.bounds) && (ut.x = J.center.x,
                ut.y = J.center.y,
                Et(!0)),
                St("resize")
            },
            zoomTo: function(t, e, n, o, r) {
                e && (v = g,
                ue.x = Math.abs(e.x) - ut.x,
                ue.y = Math.abs(e.y) - ut.y,
                Lt(ct, ut));
                var a = Rt(t, !1)
                  , s = {};
                jt("x", a, s, t),
                jt("y", a, s, t);
                var l = g
                  , c = ut.x
                  , u = ut.y;
                Ft(s);
                var d = function(e) {
                    1 === e ? (g = t,
                    ut.x = s.x,
                    ut.y = s.y) : (g = (t - l) * e + l,
                    ut.x = (s.x - c) * e + c,
                    ut.y = (s.y - u) * e + u),
                    r && r(e),
                    Et(1 === e)
                };
                n ? Kt("customZoomTo", 0, 1, n, o || i.easing.sine.inOut, d) : d(1)
            }
        }, Gt = {}, Qt = {}, Jt = {}, te = {}, ee = {}, ne = [], oe = {}, ie = [], re = {}, ae = 0, se = {
            x: 0,
            y: 0
        }, le = 0, ce = {
            x: 0,
            y: 0
        }, ue = {
            x: 0,
            y: 0
        }, de = {
            x: 0,
            y: 0
        }, pe = function(t, e) {
            return re.x = Math.abs(t.x - e.x),
            re.y = Math.abs(t.y - e.y),
            Math.sqrt(re.x * re.x + re.y * re.y)
        }, he = function() {
            V && (O(V),
            V = null)
        }, me = function() {
            B && (V = M(me),
            Ee())
        }, fe = function(t, e) {
            return !!t && !(t.className && t.className.indexOf("pswp__scroll-wrap") > -1) && (e(t) ? t : fe(t.parentNode, e))
        }, ge = {}, ve = function(t, e) {
            return ge.prevent = !fe(t.target, a.isClickableElement),
            St("preventDragEvent", t, e, ge),
            ge.prevent
        }, ye = function(t, e) {
            return e.x = t.pageX,
            e.y = t.pageY,
            e.id = t.identifier,
            e
        }, we = function(t, e, n) {
            n.x = .5 * (t.x + e.x),
            n.y = .5 * (t.y + e.y)
        }, be = function() {
            var t = ut.y - r.currItem.initialPosition.y;
            return 1 - Math.abs(t / (dt.y / 2))
        }, xe = {}, $e = {}, Ce = [], Se = function(t) {
            for (; Ce.length > 0; )
                Ce.pop();
            return A ? (st = 0,
            ne.forEach(function(t) {
                0 === st ? Ce[0] = t : 1 === st && (Ce[1] = t),
                st++
            })) : t.type.indexOf("touch") > -1 ? t.touches && t.touches.length > 0 && (Ce[0] = ye(t.touches[0], xe),
            t.touches.length > 1 && (Ce[1] = ye(t.touches[1], $e))) : (xe.x = t.pageX,
            xe.y = t.pageY,
            xe.id = "",
            Ce[0] = xe),
            Ce
        }, Te = function(t, e) {
            var n, o, i, s, l = ut[t] + e[t], c = e[t] > 0, u = ce.x + e.x, d = ce.x - oe.x;
            return n = l > J.min[t] || l < J.max[t] ? a.panEndFriction : 1,
            l = ut[t] + e[t] * n,
            !a.allowPanToNext && g !== r.currItem.initialZoomLevel || (tt ? "h" !== nt || "x" !== t || W || (c ? (l > J.min[t] && (n = a.panEndFriction,
            J.min[t],
            o = J.min[t] - ct[t]),
            (0 >= o || 0 > d) && je() > 1 ? (s = u,
            0 > d && u > oe.x && (s = oe.x)) : J.min.x !== J.max.x && (i = l)) : (l < J.max[t] && (n = a.panEndFriction,
            J.max[t],
            o = ct[t] - J.max[t]),
            (0 >= o || d > 0) && je() > 1 ? (s = u,
            d > 0 && u < oe.x && (s = oe.x)) : J.min.x !== J.max.x && (i = l))) : s = u,
            "x" !== t) ? void (et || K || g > r.currItem.fitRatio && (ut[t] += e[t] * n)) : (void 0 !== s && (Mt(s, !0),
            K = s !== oe.x),
            J.min.x !== J.max.x && (void 0 !== i ? ut.x = i : K || (ut.x += e.x * n)),
            void 0 !== s)
        }, _e = function(t) {
            if (!("mousedown" === t.type && t.button > 0)) {
                if (Pe)
                    return void t.preventDefault();
                if (!U || "mousedown" !== t.type) {
                    if (ve(t, !0) && t.preventDefault(),
                    St("pointerDown"),
                    A) {
                        var e = i.arraySearch(ne, t.pointerId, "id");
                        0 > e && (e = ne.length),
                        ne[e] = {
                            x: t.pageX,
                            y: t.pageY,
                            id: t.pointerId
                        }
                    }
                    var n = Se(t)
                      , o = n.length;
                    X = null,
                    Vt(),
                    B && 1 !== o || (B = ot = !0,
                    i.bind(window, h, r),
                    q = at = it = Z = K = Y = H = W = !1,
                    nt = null,
                    St("firstTouchStart", n),
                    Lt(ct, ut),
                    lt.x = lt.y = 0,
                    Lt(te, n[0]),
                    Lt(ee, te),
                    oe.x = mt.x * pt,
                    ie = [{
                        x: te.x,
                        y: te.y
                    }],
                    z = P = Tt(),
                    Rt(g, !0),
                    he(),
                    me()),
                    !G && o > 1 && !et && !K && (v = g,
                    W = !1,
                    G = H = !0,
                    lt.y = lt.x = 0,
                    Lt(ct, ut),
                    Lt(Gt, n[0]),
                    Lt(Qt, n[1]),
                    we(Gt, Qt, de),
                    ue.x = Math.abs(de.x) - ut.x,
                    ue.y = Math.abs(de.y) - ut.y,
                    Q = pe(Gt, Qt))
                }
            }
        }, Ie = function(t) {
            if (t.preventDefault(),
            A) {
                var e = i.arraySearch(ne, t.pointerId, "id");
                if (e > -1) {
                    var n = ne[e];
                    n.x = t.pageX,
                    n.y = t.pageY
                }
            }
            if (B) {
                var o = Se(t);
                if (nt || Y || G)
                    X = o;
                else if (ce.x !== mt.x * pt)
                    nt = "h";
                else {
                    var r = Math.abs(o[0].x - te.x) - Math.abs(o[0].y - te.y);
                    Math.abs(r) >= 10 && (nt = r > 0 ? "h" : "v",
                    X = o)
                }
            }
        }, Ee = function() {
            if (X) {
                var t = X.length;
                if (0 !== t)
                    if (Lt(Gt, X[0]),
                    Jt.x = Gt.x - te.x,
                    Jt.y = Gt.y - te.y,
                    G && t > 1) {
                        if (te.x = Gt.x,
                        te.y = Gt.y,
                        !Jt.x && !Jt.y && function(t, e) {
                            return t.x === e.x && t.y === e.y
                        }(X[1], Qt))
                            return;
                        Lt(Qt, X[1]),
                        W || (W = !0,
                        St("zoomGestureStarted"));
                        var e = pe(Gt, Qt)
                          , n = Le(e);
                        n > r.currItem.initialZoomLevel + r.currItem.initialZoomLevel / 15 && (at = !0);
                        var o = 1
                          , i = Pt()
                          , s = zt();
                        if (i > n)
                            if (a.pinchToClose && !at && v <= r.currItem.initialZoomLevel) {
                                var l = 1 - (i - n) / (i / 1.2);
                                _t(l),
                                St("onPinchClose", l),
                                it = !0
                            } else
                                (o = (i - n) / i) > 1 && (o = 1),
                                n = i - o * (i / 3);
                        else
                            n > s && ((o = (n - s) / (6 * i)) > 1 && (o = 1),
                            n = s + o * i);
                        0 > o && (o = 0),
                        we(Gt, Qt, se),
                        lt.x += se.x - de.x,
                        lt.y += se.y - de.y,
                        Lt(de, se),
                        ut.x = Ot("x", n),
                        ut.y = Ot("y", n),
                        q = n > g,
                        g = n,
                        Et()
                    } else {
                        if (!nt)
                            return;
                        if (ot && (ot = !1,
                        Math.abs(Jt.x) >= 10 && (Jt.x -= X[0].x - ee.x),
                        Math.abs(Jt.y) >= 10 && (Jt.y -= X[0].y - ee.y)),
                        te.x = Gt.x,
                        te.y = Gt.y,
                        0 === Jt.x && 0 === Jt.y)
                            return;
                        if ("v" === nt && a.closeOnVerticalDrag && "fit" === a.scaleMode && g === r.currItem.initialZoomLevel) {
                            lt.y += Jt.y,
                            ut.y += Jt.y;
                            var c = be();
                            return Z = !0,
                            St("onVerticalDrag", c),
                            _t(c),
                            void Et()
                        }
                        (function(t, e, n) {
                            if (t - z > 50) {
                                var o = ie.length > 2 ? ie.shift() : {};
                                o.x = e,
                                o.y = n,
                                ie.push(o),
                                z = t
                            }
                        }
                        )(Tt(), Gt.x, Gt.y),
                        Y = !0,
                        J = r.currItem.bounds,
                        Te("x", Jt) || (Te("y", Jt),
                        Ft(ut),
                        Et())
                    }
            }
        }, Ae = function(t) {
            if (R.isOldAndroid) {
                if (U && "mouseup" === t.type)
                    return;
                t.type.indexOf("touch") > -1 && (clearTimeout(U),
                U = setTimeout(function() {
                    U = 0
                }, 600))
            }
            var e;
            if (St("pointerUp"),
            ve(t, !1) && t.preventDefault(),
            A) {
                var n = i.arraySearch(ne, t.pointerId, "id");
                n > -1 && (e = ne.splice(n, 1)[0],
                navigator.pointerEnabled ? e.type = t.pointerType || "mouse" : (e.type = {
                    4: "mouse",
                    2: "touch",
                    3: "pen"
                }[t.pointerType],
                e.type || (e.type = t.pointerType || "mouse")))
            }
            var o, s = Se(t), l = s.length;
            if ("mouseup" === t.type && (l = 0),
            2 === l)
                return X = null,
                !0;
            1 === l && Lt(ee, s[0]),
            0 !== l || nt || et || (e || ("mouseup" === t.type ? e = {
                x: t.pageX,
                y: t.pageY,
                type: "mouse"
            } : t.changedTouches && t.changedTouches[0] && (e = {
                x: t.changedTouches[0].pageX,
                y: t.changedTouches[0].pageY,
                type: "touch"
            })),
            St("touchRelease", t, e));
            var c = -1;
            if (0 === l && (B = !1,
            i.unbind(window, h, r),
            he(),
            G ? c = 0 : -1 !== le && (c = Tt() - le)),
            le = 1 === l ? Tt() : -1,
            o = -1 !== c && 150 > c ? "zoom" : "swipe",
            G && 2 > l && (G = !1,
            1 === l && (o = "zoomPointerUp"),
            St("zoomGestureEnded")),
            X = null,
            Y || W || et || Z)
                if (Vt(),
                j || (j = ke()),
                j.calculateSwipeSpeed("x"),
                Z)
                    if (be() < a.verticalDragRange)
                        r.close();
                    else {
                        var u = ut.y
                          , d = rt;
                        Kt("verticalDrag", 0, 1, 300, i.easing.cubic.out, function(t) {
                            ut.y = (r.currItem.initialPosition.y - u) * t + u,
                            _t((1 - d) * t + d),
                            Et()
                        }),
                        St("onVerticalDrag", 1)
                    }
                else {
                    if ((K || et) && 0 === l) {
                        if (Oe(o, j))
                            return;
                        o = "zoomPointerUp"
                    }
                    if (!et)
                        return "swipe" !== o ? void Fe() : void (!K && g > r.currItem.fitRatio && Me(j))
                }
        }, ke = function() {
            var t, e, n = {
                lastFlickOffset: {},
                lastFlickDist: {},
                lastFlickSpeed: {},
                slowDownRatio: {},
                slowDownRatioReverse: {},
                speedDecelerationRatio: {},
                speedDecelerationRatioAbs: {},
                distanceOffset: {},
                backAnimDestination: {},
                backAnimStarted: {},
                calculateSwipeSpeed: function(o) {
                    ie.length > 1 ? (t = Tt() - z + 50,
                    e = ie[ie.length - 2][o]) : (t = Tt() - P,
                    e = ee[o]),
                    n.lastFlickOffset[o] = te[o] - e,
                    n.lastFlickDist[o] = Math.abs(n.lastFlickOffset[o]),
                    n.lastFlickDist[o] > 20 ? n.lastFlickSpeed[o] = n.lastFlickOffset[o] / t : n.lastFlickSpeed[o] = 0,
                    Math.abs(n.lastFlickSpeed[o]) < .1 && (n.lastFlickSpeed[o] = 0),
                    n.slowDownRatio[o] = .95,
                    n.slowDownRatioReverse[o] = 1 - n.slowDownRatio[o],
                    n.speedDecelerationRatio[o] = 1
                },
                calculateOverBoundsAnimOffset: function(t, e) {
                    n.backAnimStarted[t] || (ut[t] > J.min[t] ? n.backAnimDestination[t] = J.min[t] : ut[t] < J.max[t] && (n.backAnimDestination[t] = J.max[t]),
                    void 0 !== n.backAnimDestination[t] && (n.slowDownRatio[t] = .7,
                    n.slowDownRatioReverse[t] = 1 - n.slowDownRatio[t],
                    n.speedDecelerationRatioAbs[t] < .05 && (n.lastFlickSpeed[t] = 0,
                    n.backAnimStarted[t] = !0,
                    Kt("bounceZoomPan" + t, ut[t], n.backAnimDestination[t], e || 300, i.easing.sine.out, function(e) {
                        ut[t] = e,
                        Et()
                    }))))
                },
                calculateAnimOffset: function(t) {
                    n.backAnimStarted[t] || (n.speedDecelerationRatio[t] = n.speedDecelerationRatio[t] * (n.slowDownRatio[t] + n.slowDownRatioReverse[t] - n.slowDownRatioReverse[t] * n.timeDiff / 10),
                    n.speedDecelerationRatioAbs[t] = Math.abs(n.lastFlickSpeed[t] * n.speedDecelerationRatio[t]),
                    n.distanceOffset[t] = n.lastFlickSpeed[t] * n.speedDecelerationRatio[t] * n.timeDiff,
                    ut[t] += n.distanceOffset[t])
                },
                panAnimLoop: function() {
                    return Bt.zoomPan && (Bt.zoomPan.raf = M(n.panAnimLoop),
                    n.now = Tt(),
                    n.timeDiff = n.now - n.lastNow,
                    n.lastNow = n.now,
                    n.calculateAnimOffset("x"),
                    n.calculateAnimOffset("y"),
                    Et(),
                    n.calculateOverBoundsAnimOffset("x"),
                    n.calculateOverBoundsAnimOffset("y"),
                    n.speedDecelerationRatioAbs.x < .05 && n.speedDecelerationRatioAbs.y < .05) ? (ut.x = Math.round(ut.x),
                    ut.y = Math.round(ut.y),
                    Et(),
                    void Wt("zoomPan")) : void 0
                }
            };
            return n
        }, Me = function(t) {
            return t.calculateSwipeSpeed("y"),
            J = r.currItem.bounds,
            t.backAnimDestination = {},
            t.backAnimStarted = {},
            Math.abs(t.lastFlickSpeed.x) <= .05 && Math.abs(t.lastFlickSpeed.y) <= .05 ? (t.speedDecelerationRatioAbs.x = t.speedDecelerationRatioAbs.y = 0,
            t.calculateOverBoundsAnimOffset("x"),
            t.calculateOverBoundsAnimOffset("y"),
            !0) : (Yt("zoomPan"),
            t.lastNow = Tt(),
            void t.panAnimLoop())
        }, Oe = function(t, e) {
            var n, o, s;
            if (et || (ae = u),
            "swipe" === t) {
                var l = te.x - ee.x
                  , c = e.lastFlickDist.x < 10;
                l > 30 && (c || e.lastFlickOffset.x > 20) ? o = -1 : -30 > l && (c || e.lastFlickOffset.x < -20) && (o = 1)
            }
            o && (0 > (u += o) ? (u = a.loop ? je() - 1 : 0,
            s = !0) : u >= je() && (u = a.loop ? 0 : je() - 1,
            s = !0),
            (!s || a.loop) && (ft += o,
            pt -= o,
            n = !0));
            var d, p = mt.x * pt, h = Math.abs(p - ce.x);
            return n || p > ce.x == e.lastFlickSpeed.x > 0 ? (d = Math.abs(e.lastFlickSpeed.x) > 0 ? h / Math.abs(e.lastFlickSpeed.x) : 333,
            d = Math.min(d, 400),
            d = Math.max(d, 250)) : d = 333,
            ae === u && (n = !1),
            et = !0,
            St("mainScrollAnimStart"),
            Kt("mainScroll", ce.x, p, d, i.easing.cubic.out, Mt, function() {
                Vt(),
                et = !1,
                ae = -1,
                (n || ae !== u) && r.updateCurrItem(),
                St("mainScrollAnimComplete")
            }),
            n && r.updateCurrItem(!0),
            n
        }, Le = function(t) {
            return 1 / Q * t * v
        }, Fe = function() {
            var t = g
              , e = Pt()
              , n = zt();
            e > g ? t = e : g > n && (t = n);
            var o, a = rt;
            return it && !q && !at && e > g ? (r.close(),
            !0) : (it && (o = function(t) {
                _t((1 - a) * t + a)
            }
            ),
            r.zoomTo(t, 0, 200, i.easing.cubic.out, o),
            !0)
        };
        bt("Gestures", {
            publicMethods: {
                initGestures: function() {
                    var t = function(t, e, n, o, i) {
                        S = t + e,
                        T = t + n,
                        _ = t + o,
                        I = i ? t + i : ""
                    };
                    (A = R.pointerEvent) && R.touch && (R.touch = !1),
                    A ? navigator.pointerEnabled ? t("pointer", "down", "move", "up", "cancel") : t("MSPointer", "Down", "Move", "Up", "Cancel") : R.touch ? (t("touch", "start", "move", "end", "cancel"),
                    k = !0) : t("mouse", "down", "move", "up"),
                    h = T + " " + _ + " " + I,
                    m = S,
                    A && !k && (k = navigator.maxTouchPoints > 1 || navigator.msMaxTouchPoints > 1),
                    r.likelyTouchDevice = k,
                    f[S] = _e,
                    f[T] = Ie,
                    f[_] = Ae,
                    I && (f[I] = f[_]),
                    R.touch && (m += " mousedown",
                    h += " mousemove mouseup",
                    f.mousedown = f[S],
                    f.mousemove = f[T],
                    f.mouseup = f[_]),
                    k || (a.allowPanToNext = !1)
                }
            }
        });
        var Ne, De, Re, Pe, ze, je, qe = function(e, n, o, s) {
            var l;
            Ne && clearTimeout(Ne),
            Pe = !0,
            Re = !0,
            e.initialLayout ? (l = e.initialLayout,
            e.initialLayout = null) : l = a.getThumbBoundsFn && a.getThumbBoundsFn(u);
            var d = o ? a.hideAnimationDuration : a.showAnimationDuration
              , p = function() {
                Wt("initialZoom"),
                o ? (r.template.removeAttribute("style"),
                r.bg.removeAttribute("style")) : (_t(1),
                n && (n.style.display = "block"),
                i.addClass(t, "pswp--animated-in"),
                St("initialZoom" + (o ? "OutEnd" : "InEnd"))),
                s && s(),
                Pe = !1
            };
            if (!d || !l || void 0 === l.x)
                return St("initialZoom" + (o ? "Out" : "In")),
                g = e.initialZoomLevel,
                Lt(ut, e.initialPosition),
                Et(),
                t.style.opacity = o ? 0 : 1,
                _t(1),
                void (d ? setTimeout(function() {
                    p()
                }, d) : p());
            !function() {
                var n = c
                  , s = !r.currItem.src || r.currItem.loadError || a.showHideOpacity;
                e.miniImg && (e.miniImg.style.webkitBackfaceVisibility = "hidden"),
                o || (g = l.w / e.w,
                ut.x = l.x,
                ut.y = l.y - F,
                r[s ? "template" : "bg"].style.opacity = .001,
                Et()),
                Yt("initialZoom"),
                o && !n && i.removeClass(t, "pswp--animated-in"),
                s && (o ? i[(n ? "remove" : "add") + "Class"](t, "pswp--animate_opacity") : setTimeout(function() {
                    i.addClass(t, "pswp--animate_opacity")
                }, 30)),
                Ne = setTimeout(function() {
                    if (St("initialZoom" + (o ? "Out" : "In")),
                    o) {
                        var r = l.w / e.w
                          , a = {
                            x: ut.x,
                            y: ut.y
                        }
                          , c = g
                          , u = rt
                          , h = function(e) {
                            1 === e ? (g = r,
                            ut.x = l.x,
                            ut.y = l.y - D) : (g = (r - c) * e + c,
                            ut.x = (l.x - a.x) * e + a.x,
                            ut.y = (l.y - D - a.y) * e + a.y),
                            Et(),
                            s ? t.style.opacity = 1 - e : _t(u - e * u)
                        };
                        n ? Kt("initialZoom", 0, 1, d, i.easing.cubic.out, h, p) : (h(1),
                        Ne = setTimeout(p, d + 20))
                    } else
                        g = e.initialZoomLevel,
                        Lt(ut, e.initialPosition),
                        Et(),
                        _t(1),
                        s ? t.style.opacity = 1 : _t(1),
                        Ne = setTimeout(p, d + 20)
                }, o ? 25 : 90)
            }()
        }, Ze = {}, Ue = [], Be = {
            index: 0,
            errorMsg: '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',
            forceProgressiveLoading: !1,
            preload: [1, 1],
            getNumItemsFn: function() {
                return De.length
            }
        }, He = function(t, e, n) {
            if (t.src && !t.loadError) {
                var o = !n;
                if (o && (t.vGap || (t.vGap = {
                    top: 0,
                    bottom: 0
                }),
                St("parseVerticalMargin", t)),
                Ze.x = e.x,
                Ze.y = e.y - t.vGap.top - t.vGap.bottom,
                o) {
                    var i = Ze.x / t.w
                      , r = Ze.y / t.h;
                    t.fitRatio = r > i ? i : r;
                    var s = a.scaleMode;
                    "orig" === s ? n = 1 : "fit" === s && (n = t.fitRatio),
                    n > 1 && (n = 1),
                    t.initialZoomLevel = n,
                    t.bounds || (t.bounds = {
                        center: {
                            x: 0,
                            y: 0
                        },
                        max: {
                            x: 0,
                            y: 0
                        },
                        min: {
                            x: 0,
                            y: 0
                        }
                    })
                }
                if (!n)
                    return;
                return function(t, e, n) {
                    var o = t.bounds;
                    o.center.x = Math.round((Ze.x - e) / 2),
                    o.center.y = Math.round((Ze.y - n) / 2) + t.vGap.top,
                    o.max.x = e > Ze.x ? Math.round(Ze.x - e) : o.center.x,
                    o.max.y = n > Ze.y ? Math.round(Ze.y - n) + t.vGap.top : o.center.y,
                    o.min.x = e > Ze.x ? 0 : o.center.x,
                    o.min.y = n > Ze.y ? t.vGap.top : o.center.y
                }(t, t.w * n, t.h * n),
                o && n === t.initialZoomLevel && (t.initialPosition = t.bounds.center),
                t.bounds
            }
            return t.w = t.h = 0,
            t.initialZoomLevel = t.fitRatio = 1,
            t.bounds = {
                center: {
                    x: 0,
                    y: 0
                },
                max: {
                    x: 0,
                    y: 0
                },
                min: {
                    x: 0,
                    y: 0
                }
            },
            t.initialPosition = t.bounds.center,
            t.bounds
        }, We = function(t, e, n, o, i, a) {
            e.loadError || o && (e.imageAppended = !0,
            Ke(e, o, e === r.currItem && wt),
            n.appendChild(o),
            a && setTimeout(function() {
                e && e.loaded && e.placeholder && (e.placeholder.style.display = "none",
                e.placeholder = null)
            }, 500))
        }, Ye = function(t) {
            t.loading = !0,
            t.loaded = !1;
            var e = t.img = i.createEl("pswp__img", "img")
              , n = function() {
                t.loading = !1,
                t.loaded = !0,
                t.loadComplete ? t.loadComplete(t) : t.img = null,
                e.onload = e.onerror = null,
                e = null
            };
            return e.onload = n,
            e.onerror = function() {
                t.loadError = !0,
                n()
            }
            ,
            e.src = t.src,
            e
        }, Ve = function(t, e) {
            return t.src && t.loadError && t.container ? (e && (t.container.innerHTML = ""),
            t.container.innerHTML = a.errorMsg.replace("%url%", t.src),
            !0) : void 0
        }, Ke = function(t, e, n) {
            if (t.src) {
                e || (e = t.container.lastChild);
                var o = n ? t.w : Math.round(t.w * t.fitRatio)
                  , i = n ? t.h : Math.round(t.h * t.fitRatio);
                t.placeholder && !t.loaded && (t.placeholder.style.width = o + "px",
                t.placeholder.style.height = i + "px"),
                e.style.width = o + "px",
                e.style.height = i + "px"
            }
        }, Xe = function() {
            if (Ue.length) {
                for (var t, e = 0; e < Ue.length; e++)
                    (t = Ue[e]).holder.index === t.index && We(t.index, t.item, t.baseDiv, t.img, 0, t.clearPlaceholder);
                Ue = []
            }
        };
        bt("Controller", {
            publicMethods: {
                lazyLoadItem: function(t) {
                    t = xt(t);
                    var e = ze(t);
                    e && (!e.loaded && !e.loading || x) && (St("gettingData", t, e),
                    e.src && Ye(e))
                },
                initController: function() {
                    i.extend(a, Be, !0),
                    r.items = De = n,
                    ze = r.getItemAt,
                    je = a.getNumItemsFn,
                    a.loop,
                    je() < 3 && (a.loop = !1),
                    Ct("beforeChange", function(t) {
                        var e, n = a.preload, o = null === t || t >= 0, i = Math.min(n[0], je()), s = Math.min(n[1], je());
                        for (e = 1; (o ? s : i) >= e; e++)
                            r.lazyLoadItem(u + e);
                        for (e = 1; (o ? i : s) >= e; e++)
                            r.lazyLoadItem(u - e)
                    }),
                    Ct("initialLayout", function() {
                        r.currItem.initialLayout = a.getThumbBoundsFn && a.getThumbBoundsFn(u)
                    }),
                    Ct("mainScrollAnimComplete", Xe),
                    Ct("initialZoomInEnd", Xe),
                    Ct("destroy", function() {
                        for (var t, e = 0; e < De.length; e++)
                            (t = De[e]).container && (t.container = null),
                            t.placeholder && (t.placeholder = null),
                            t.img && (t.img = null),
                            t.preloader && (t.preloader = null),
                            t.loadError && (t.loaded = t.loadError = !1);
                        Ue = null
                    })
                },
                getItemAt: function(t) {
                    return t >= 0 && void 0 !== De[t] && De[t]
                },
                allowProgressiveImg: function() {
                    return a.forceProgressiveLoading || !k || a.mouseUsed || screen.width > 1200
                },
                setContent: function(t, e) {
                    a.loop && (e = xt(e));
                    var n = r.getItemAt(t.index);
                    n && (n.container = null);
                    var o, l = r.getItemAt(e);
                    if (l) {
                        St("gettingData", e, l),
                        t.index = e,
                        t.item = l;
                        var c = l.container = i.createEl("pswp__zoom-wrap");
                        if (!l.src && l.html && (l.html.tagName ? c.appendChild(l.html) : c.innerHTML = l.html),
                        Ve(l),
                        He(l, dt),
                        !l.src || l.loadError || l.loaded)
                            l.src && !l.loadError && ((o = i.createEl("pswp__img", "img")).style.opacity = 1,
                            o.src = l.src,
                            Ke(l, o),
                            We(0, l, c, o));
                        else {
                            if (l.loadComplete = function(n) {
                                if (s) {
                                    if (t && t.index === e) {
                                        if (Ve(n, !0))
                                            return n.loadComplete = n.img = null,
                                            He(n, dt),
                                            At(n),
                                            void (t.index === u && r.updateCurrZoomItem());
                                        n.imageAppended ? !Pe && n.placeholder && (n.placeholder.style.display = "none",
                                        n.placeholder = null) : R.transform && (et || Pe) ? Ue.push({
                                            item: n,
                                            baseDiv: c,
                                            img: n.img,
                                            index: e,
                                            holder: t,
                                            clearPlaceholder: !0
                                        }) : We(0, n, c, n.img, 0, !0)
                                    }
                                    n.loadComplete = null,
                                    n.img = null,
                                    St("imageLoadComplete", e, n)
                                }
                            }
                            ,
                            i.features.transform) {
                                var d = "pswp__img pswp__img--placeholder";
                                d += l.msrc ? "" : " pswp__img--placeholder--blank";
                                var p = i.createEl(d, l.msrc ? "img" : "");
                                l.msrc && (p.src = l.msrc),
                                Ke(l, p),
                                c.appendChild(p),
                                l.placeholder = p
                            }
                            l.loading || Ye(l),
                            r.allowProgressiveImg() && (!Re && R.transform ? Ue.push({
                                item: l,
                                baseDiv: c,
                                img: l.img,
                                index: e,
                                holder: t
                            }) : We(0, l, c, l.img, 0, !0))
                        }
                        Re || e !== u ? At(l) : (tt = c.style,
                        qe(l, o || l.img)),
                        t.el.innerHTML = "",
                        t.el.appendChild(c)
                    } else
                        t.el.innerHTML = ""
                },
                cleanSlide: function(t) {
                    t.img && (t.img.onload = t.img.onerror = null),
                    t.loaded = t.loading = t.img = t.imageAppended = !1
                }
            }
        });
        var Ge, Qe, Je = {}, tn = function(t, e, n) {
            var o = document.createEvent("CustomEvent")
              , i = {
                origEvent: t,
                target: t.target,
                releasePoint: e,
                pointerType: n || "touch"
            };
            o.initCustomEvent("pswpTap", !0, !0, i),
            t.target.dispatchEvent(o)
        };
        bt("Tap", {
            publicMethods: {
                initTap: function() {
                    Ct("firstTouchStart", r.onTapStart),
                    Ct("touchRelease", r.onTapRelease),
                    Ct("destroy", function() {
                        Je = {},
                        Ge = null
                    })
                },
                onTapStart: function(t) {
                    t.length > 1 && (clearTimeout(Ge),
                    Ge = null)
                },
                onTapRelease: function(t, e) {
                    if (e && !Y && !H && !Ht) {
                        var n = e;
                        if (Ge && (clearTimeout(Ge),
                        Ge = null,
                        function(t, e) {
                            return Math.abs(t.x - e.x) < 25 && Math.abs(t.y - e.y) < 25
                        }(n, Je)))
                            return void St("doubleTap", n);
                        if ("mouse" === e.type)
                            return void tn(t, e, "mouse");
                        if ("BUTTON" === t.target.tagName.toUpperCase() || i.hasClass(t.target, "pswp__single-tap"))
                            return void tn(t, e);
                        Lt(Je, n),
                        Ge = setTimeout(function() {
                            tn(t, e),
                            Ge = null
                        }, 300)
                    }
                }
            }
        }),
        bt("DesktopZoom", {
            publicMethods: {
                initDesktopZoom: function() {
                    N || (k ? Ct("mouseUsed", function() {
                        r.setupDesktopZoom()
                    }) : r.setupDesktopZoom(!0))
                },
                setupDesktopZoom: function(e) {
                    Qe = {};
                    var n = "wheel mousewheel DOMMouseScroll";
                    Ct("bindEvents", function() {
                        i.bind(t, n, r.handleMouseWheel)
                    }),
                    Ct("unbindEvents", function() {
                        Qe && i.unbind(t, n, r.handleMouseWheel)
                    }),
                    r.mouseZoomedIn = !1;
                    var o, a = function() {
                        r.mouseZoomedIn && (i.removeClass(t, "pswp--zoomed-in"),
                        r.mouseZoomedIn = !1),
                        1 > g ? i.addClass(t, "pswp--zoom-allowed") : i.removeClass(t, "pswp--zoom-allowed"),
                        s()
                    }, s = function() {
                        o && (i.removeClass(t, "pswp--dragging"),
                        o = !1)
                    };
                    Ct("resize", a),
                    Ct("afterChange", a),
                    Ct("pointerDown", function() {
                        r.mouseZoomedIn && (o = !0,
                        i.addClass(t, "pswp--dragging"))
                    }),
                    Ct("pointerUp", s),
                    e || a()
                },
                handleMouseWheel: function(t) {
                    if (g <= r.currItem.fitRatio)
                        return a.modal && (!a.closeOnScroll || Ht || B ? t.preventDefault() : E && Math.abs(t.deltaY) > 2 && (c = !0,
                        r.close())),
                        !0;
                    if (t.stopPropagation(),
                    Qe.x = 0,
                    "deltaX"in t)
                        1 === t.deltaMode ? (Qe.x = 18 * t.deltaX,
                        Qe.y = 18 * t.deltaY) : (Qe.x = t.deltaX,
                        Qe.y = t.deltaY);
                    else if ("wheelDelta"in t)
                        t.wheelDeltaX && (Qe.x = -.16 * t.wheelDeltaX),
                        t.wheelDeltaY ? Qe.y = -.16 * t.wheelDeltaY : Qe.y = -.16 * t.wheelDelta;
                    else {
                        if (!("detail"in t))
                            return;
                        Qe.y = t.detail
                    }
                    Rt(g, !0);
                    var e = ut.x - Qe.x
                      , n = ut.y - Qe.y;
                    (a.modal || e <= J.min.x && e >= J.max.x && n <= J.min.y && n >= J.max.y) && t.preventDefault(),
                    r.panTo(e, n)
                },
                toggleDesktopZoom: function(e) {
                    e = e || {
                        x: dt.x / 2 + ht.x,
                        y: dt.y / 2 + ht.y
                    };
                    var n = a.getDoubleTapZoom(!0, r.currItem)
                      , o = g === n;
                    r.mouseZoomedIn = !o,
                    r.zoomTo(o ? r.currItem.initialZoomLevel : n, e, 333),
                    i[(o ? "remove" : "add") + "Class"](t, "pswp--zoomed-in")
                }
            }
        });
        var en, nn, on, rn, an, sn, ln, cn, un, dn, pn, hn, mn = {
            history: !0,
            galleryUID: 1
        }, fn = function() {
            return pn.hash.substring(1)
        }, gn = function() {
            en && clearTimeout(en),
            on && clearTimeout(on)
        }, vn = function() {
            var t = fn()
              , e = {};
            if (t.length < 5)
                return e;
            var n, o = t.split("&");
            for (n = 0; n < o.length; n++)
                if (o[n]) {
                    var i = o[n].split("=");
                    i.length < 2 || (e[i[0]] = i[1])
                }
            if (a.galleryPIDs) {
                var r = e.pid;
                for (e.pid = 0,
                n = 0; n < De.length; n++)
                    if (De[n].pid === r) {
                        e.pid = n;
                        break
                    }
            } else
                e.pid = parseInt(e.pid, 10) - 1;
            return e.pid < 0 && (e.pid = 0),
            e
        }, yn = function() {
            if (on && clearTimeout(on),
            Ht || B)
                on = setTimeout(yn, 500);
            else {
                rn ? clearTimeout(nn) : rn = !0;
                var t = u + 1
                  , e = ze(u);
                e.hasOwnProperty("pid") && (t = e.pid);
                var n = ln + "&gid=" + a.galleryUID + "&pid=" + t;
                cn || -1 === pn.hash.indexOf(n) && (dn = !0);
                var o = pn.href.split("#")[0] + "#" + n;
                hn ? "#" + n !== window.location.hash && history[cn ? "replaceState" : "pushState"]("", document.title, o) : cn ? pn.replace(o) : pn.hash = n,
                cn = !0,
                nn = setTimeout(function() {
                    rn = !1
                }, 60)
            }
        };
        bt("History", {
            publicMethods: {
                initHistory: function() {
                    if (i.extend(a, mn, !0),
                    a.history) {
                        pn = window.location,
                        dn = !1,
                        un = !1,
                        cn = !1,
                        ln = fn(),
                        hn = "pushState"in history,
                        ln.indexOf("gid=") > -1 && (ln = (ln = ln.split("&gid=")[0]).split("?gid=")[0]),
                        Ct("afterChange", r.updateURL),
                        Ct("unbindEvents", function() {
                            i.unbind(window, "hashchange", r.onHashChange)
                        });
                        var t = function() {
                            sn = !0,
                            un || (dn ? history.back() : ln ? pn.hash = ln : hn ? history.pushState("", document.title, pn.pathname + pn.search) : pn.hash = ""),
                            gn()
                        };
                        Ct("unbindEvents", function() {
                            c && t()
                        }),
                        Ct("destroy", function() {
                            sn || t()
                        }),
                        Ct("firstUpdate", function() {
                            u = vn().pid
                        });
                        var e = ln.indexOf("pid=");
                        e > -1 && "&" === (ln = ln.substring(0, e)).slice(-1) && (ln = ln.slice(0, -1)),
                        setTimeout(function() {
                            s && i.bind(window, "hashchange", r.onHashChange)
                        }, 40)
                    }
                },
                onHashChange: function() {
                    return fn() === ln ? (un = !0,
                    void r.close()) : void (rn || (an = !0,
                    r.goTo(vn().pid),
                    an = !1))
                },
                updateURL: function() {
                    gn(),
                    an || (cn ? en = setTimeout(yn, 800) : yn())
                }
            }
        }),
        i.extend(r, Xt)
    }
}),
function(t, e) {
    "function" == typeof define && define.amd ? define(e) : "object" == typeof exports ? module.exports = e() : t.PhotoSwipeUI_Default = e()
}(this, function() {
    "use strict";
    return function(t, e) {
        var n, o, i, r, a, s, l, c, u, d, p, h, m, f, g, v, y, w, b = this, x = !1, $ = !0, C = !0, S = {
            barsSize: {
                top: 44,
                bottom: "auto"
            },
            closeElClasses: ["item", "caption", "zoom-wrap", "ui", "top-bar"],
            timeToIdle: 4e3,
            timeToIdleOutside: 1e3,
            loadingIndicatorDelay: 1e3,
            addCaptionHTMLFn: function(t, e) {
                return t.title ? (e.children[0].innerHTML = t.title,
                !0) : (e.children[0].innerHTML = "",
                !1)
            },
            closeEl: !0,
            captionEl: !0,
            fullscreenEl: !0,
            zoomEl: !0,
            shareEl: !0,
            counterEl: !0,
            arrowEl: !0,
            preloaderEl: !0,
            tapToClose: !1,
            tapToToggleControls: !0,
            clickToCloseNonZoomable: !0,
            shareButtons: [{
                id: "facebook",
                label: "Share on Facebook",
                url: "https://www.facebook.com/sharer/sharer.php?u={{url}}"
            }, {
                id: "twitter",
                label: "Tweet",
                url: "https://twitter.com/intent/tweet?text={{text}}&url={{url}}"
            }, {
                id: "pinterest",
                label: "Pin it",
                url: "http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}"
            }, {
                id: "download",
                label: "Download image",
                url: "{{raw_image_url}}",
                download: !0
            }],
            getImageURLForShare: function() {
                return t.currItem.src || ""
            },
            getPageURLForShare: function() {
                return window.location.href
            },
            getTextForShare: function() {
                return t.currItem.title || ""
            },
            indexIndicatorSep: " / "
        }, T = function(t) {
            if (v)
                return !0;
            t = t || window.event,
            g.timeToIdle && g.mouseUsed && !u && N();
            for (var n, o, i = (t.target || t.srcElement).className, r = 0; r < z.length; r++)
                (n = z[r]).onTap && i.indexOf("pswp__" + n.name) > -1 && (n.onTap(),
                o = !0);
            if (o) {
                t.stopPropagation && t.stopPropagation(),
                v = !0;
                var a = e.features.isOldAndroid ? 600 : 30;
                setTimeout(function() {
                    v = !1
                }, a)
            }
        }, _ = function() {
            return !t.likelyTouchDevice || g.mouseUsed || screen.width > 1200
        }, I = function(t, n, o) {
            e[(o ? "add" : "remove") + "Class"](t, "pswp__" + n)
        }, E = function() {
            var t = 1 === g.getNumItemsFn();
            t !== f && (I(o, "ui--one-slide", t),
            f = t)
        }, A = function() {
            I(l, "share-modal--hidden", C)
        }, k = function() {
            return (C = !C) ? (e.removeClass(l, "pswp__share-modal--fade-in"),
            setTimeout(function() {
                C && A()
            }, 300)) : (A(),
            setTimeout(function() {
                C || e.addClass(l, "pswp__share-modal--fade-in")
            }, 30)),
            C || O(),
            !1
        }, M = function(e) {
            var n = (e = e || window.event).target || e.srcElement;
            return t.shout("shareLinkClick", e, n),
            !(!n.href || !n.hasAttribute("download") && (window.open(n.href, "pswp_share", "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left=" + (window.screen ? Math.round(screen.width / 2 - 275) : 100)),
            C || k(),
            1))
        }, O = function() {
            for (var t, e, n, o, i = "", r = 0; r < g.shareButtons.length; r++)
                t = g.shareButtons[r],
                e = g.getImageURLForShare(t),
                n = g.getPageURLForShare(t),
                o = g.getTextForShare(t),
                i += '<a href="' + t.url.replace("{{url}}", encodeURIComponent(n)).replace("{{image_url}}", encodeURIComponent(e)).replace("{{raw_image_url}}", e).replace("{{text}}", encodeURIComponent(o)) + '" target="_blank" class="pswp__share--' + t.id + '"' + (t.download ? "download" : "") + ">" + t.label + "</a>",
                g.parseShareButtonOut && (i = g.parseShareButtonOut(t, i));
            l.children[0].innerHTML = i,
            l.children[0].onclick = M
        }, L = function(t) {
            for (var n = 0; n < g.closeElClasses.length; n++)
                if (e.hasClass(t, "pswp__" + g.closeElClasses[n]))
                    return !0
        }, F = 0, N = function() {
            clearTimeout(w),
            F = 0,
            u && b.setIdle(!1)
        }, D = function(t) {
            var e = (t = t || window.event).relatedTarget || t.toElement;
            e && "HTML" !== e.nodeName || (clearTimeout(w),
            w = setTimeout(function() {
                b.setIdle(!0)
            }, g.timeToIdleOutside))
        }, R = function(t) {
            h !== t && (I(p, "preloader--active", !t),
            h = t)
        }, P = function(t) {
            var n = t.vGap;
            if (_()) {
                var a = g.barsSize;
                if (g.captionEl && "auto" === a.bottom)
                    if (r || ((r = e.createEl("pswp__caption pswp__caption--fake")).appendChild(e.createEl("pswp__caption__center")),
                    o.insertBefore(r, i),
                    e.addClass(o, "pswp__ui--fit")),
                    g.addCaptionHTMLFn(t, r, !0)) {
                        var s = r.clientHeight;
                        n.bottom = parseInt(s, 10) || 44
                    } else
                        n.bottom = a.top;
                else
                    n.bottom = "auto" === a.bottom ? 0 : a.bottom;
                n.top = a.top
            } else
                n.top = n.bottom = 0
        }, z = [{
            name: "caption",
            option: "captionEl",
            onInit: function(t) {
                i = t
            }
        }, {
            name: "share-modal",
            option: "shareEl",
            onInit: function(t) {
                l = t
            },
            onTap: function() {
                k()
            }
        }, {
            name: "button--share",
            option: "shareEl",
            onInit: function(t) {
                s = t
            },
            onTap: function() {
                k()
            }
        }, {
            name: "button--zoom",
            option: "zoomEl",
            onTap: t.toggleDesktopZoom
        }, {
            name: "counter",
            option: "counterEl",
            onInit: function(t) {
                a = t
            }
        }, {
            name: "button--close",
            option: "closeEl",
            onTap: t.close
        }, {
            name: "button--arrow--left",
            option: "arrowEl",
            onTap: t.prev
        }, {
            name: "button--arrow--right",
            option: "arrowEl",
            onTap: t.next
        }, {
            name: "button--fs",
            option: "fullscreenEl",
            onTap: function() {
                n.isFullscreen() ? n.exit() : n.enter()
            }
        }, {
            name: "preloader",
            option: "preloaderEl",
            onInit: function(t) {
                p = t
            }
        }];
        b.init = function() {
            e.extend(t.options, S, !0),
            g = t.options,
            o = e.getChildByClass(t.scrollWrap, "pswp__ui"),
            d = t.listen,
            function() {
                var t;
                d("onVerticalDrag", function(t) {
                    $ && .95 > t ? b.hideControls() : !$ && t >= .95 && b.showControls()
                }),
                d("onPinchClose", function(e) {
                    $ && .9 > e ? (b.hideControls(),
                    t = !0) : t && !$ && e > .9 && b.showControls()
                }),
                d("zoomGestureEnded", function() {
                    (t = !1) && !$ && b.showControls()
                })
            }(),
            d("beforeChange", b.update),
            d("doubleTap", function(e) {
                var n = t.currItem.initialZoomLevel;
                t.getZoomLevel() !== n ? t.zoomTo(n, e, 333) : t.zoomTo(g.getDoubleTapZoom(!1, t.currItem), e, 333)
            }),
            d("preventDragEvent", function(t, e, n) {
                var o = t.target || t.srcElement;
                o && o.className && t.type.indexOf("mouse") > -1 && (o.className.indexOf("__caption") > 0 || /(SMALL|STRONG|EM)/i.test(o.tagName)) && (n.prevent = !1)
            }),
            d("bindEvents", function() {
                e.bind(o, "pswpTap click", T),
                e.bind(t.scrollWrap, "pswpTap", b.onGlobalTap),
                t.likelyTouchDevice || e.bind(t.scrollWrap, "mouseover", b.onMouseOver)
            }),
            d("unbindEvents", function() {
                C || k(),
                y && clearInterval(y),
                e.unbind(document, "mouseout", D),
                e.unbind(document, "mousemove", N),
                e.unbind(o, "pswpTap click", T),
                e.unbind(t.scrollWrap, "pswpTap", b.onGlobalTap),
                e.unbind(t.scrollWrap, "mouseover", b.onMouseOver),
                n && (e.unbind(document, n.eventK, b.updateFullscreen),
                n.isFullscreen() && (g.hideAnimationDuration = 0,
                n.exit()),
                n = null)
            }),
            d("destroy", function() {
                g.captionEl && (r && o.removeChild(r),
                e.removeClass(i, "pswp__caption--empty")),
                l && (l.children[0].onclick = null),
                e.removeClass(o, "pswp__ui--over-close"),
                e.addClass(o, "pswp__ui--hidden"),
                b.setIdle(!1)
            }),
            g.showAnimationDuration || e.removeClass(o, "pswp__ui--hidden"),
            d("initialZoomIn", function() {
                g.showAnimationDuration && e.removeClass(o, "pswp__ui--hidden")
            }),
            d("initialZoomOut", function() {
                e.addClass(o, "pswp__ui--hidden")
            }),
            d("parseVerticalMargin", P),
            function() {
                var t, n, i, r = function(o) {
                    if (o)
                        for (var r = o.length, a = 0; r > a; a++) {
                            t = o[a],
                            n = t.className;
                            for (var s = 0; s < z.length; s++)
                                i = z[s],
                                n.indexOf("pswp__" + i.name) > -1 && (g[i.option] ? (e.removeClass(t, "pswp__element--disabled"),
                                i.onInit && i.onInit(t)) : e.addClass(t, "pswp__element--disabled"))
                        }
                };
                r(o.children);
                var a = e.getChildByClass(o, "pswp__top-bar");
                a && r(a.children)
            }(),
            g.shareEl && s && l && (C = !0),
            E(),
            g.timeToIdle && d("mouseUsed", function() {
                e.bind(document, "mousemove", N),
                e.bind(document, "mouseout", D),
                y = setInterval(function() {
                    2 == ++F && b.setIdle(!0)
                }, g.timeToIdle / 2)
            }),
            g.fullscreenEl && !e.features.isOldAndroid && (n || (n = b.getFullscreenAPI()),
            n ? (e.bind(document, n.eventK, b.updateFullscreen),
            b.updateFullscreen(),
            e.addClass(t.template, "pswp--supports-fs")) : e.removeClass(t.template, "pswp--supports-fs")),
            g.preloaderEl && (R(!0),
            d("beforeChange", function() {
                clearTimeout(m),
                m = setTimeout(function() {
                    t.currItem && t.currItem.loading ? (!t.allowProgressiveImg() || t.currItem.img && !t.currItem.img.naturalWidth) && R(!1) : R(!0)
                }, g.loadingIndicatorDelay)
            }),
            d("imageLoadComplete", function(e, n) {
                t.currItem === n && R(!0)
            }))
        }
        ,
        b.setIdle = function(t) {
            u = t,
            I(o, "ui--idle", t)
        }
        ,
        b.update = function() {
            $ && t.currItem ? (b.updateIndexIndicator(),
            g.captionEl && (g.addCaptionHTMLFn(t.currItem, i),
            I(i, "caption--empty", !t.currItem.title)),
            x = !0) : x = !1,
            C || k(),
            E()
        }
        ,
        b.updateFullscreen = function(o) {
            o && setTimeout(function() {
                t.setScrollOffset(0, e.getScrollY())
            }, 50),
            e[(n.isFullscreen() ? "add" : "remove") + "Class"](t.template, "pswp--fs")
        }
        ,
        b.updateIndexIndicator = function() {
            g.counterEl && (a.innerHTML = t.getCurrentIndex() + 1 + g.indexIndicatorSep + g.getNumItemsFn())
        }
        ,
        b.onGlobalTap = function(n) {
            var o = (n = n || window.event).target || n.srcElement;
            if (!v)
                if (n.detail && "mouse" === n.detail.pointerType) {
                    if (L(o))
                        return void t.close();
                    e.hasClass(o, "pswp__img") && (1 === t.getZoomLevel() && t.getZoomLevel() <= t.currItem.fitRatio ? g.clickToCloseNonZoomable && t.close() : t.toggleDesktopZoom(n.detail.releasePoint))
                } else if (g.tapToToggleControls && ($ ? b.hideControls() : b.showControls()),
                g.tapToClose && (e.hasClass(o, "pswp__img") || L(o)))
                    return void t.close()
        }
        ,
        b.onMouseOver = function(t) {
            var e = (t = t || window.event).target || t.srcElement;
            I(o, "ui--over-close", L(e))
        }
        ,
        b.hideControls = function() {
            e.addClass(o, "pswp__ui--hidden"),
            $ = !1
        }
        ,
        b.showControls = function() {
            $ = !0,
            x || b.update(),
            e.removeClass(o, "pswp__ui--hidden")
        }
        ,
        b.supportsFullscreen = function() {
            var t = document;
            return !!(t.exitFullscreen || t.mozCancelFullScreen || t.webkitExitFullscreen || t.msExitFullscreen)
        }
        ,
        b.getFullscreenAPI = function() {
            var e, n = document.documentElement, o = "fullscreenchange";
            return n.requestFullscreen ? e = {
                enterK: "requestFullscreen",
                exitK: "exitFullscreen",
                elementK: "fullscreenElement",
                eventK: o
            } : n.mozRequestFullScreen ? e = {
                enterK: "mozRequestFullScreen",
                exitK: "mozCancelFullScreen",
                elementK: "mozFullScreenElement",
                eventK: "moz" + o
            } : n.webkitRequestFullscreen ? e = {
                enterK: "webkitRequestFullscreen",
                exitK: "webkitExitFullscreen",
                elementK: "webkitFullscreenElement",
                eventK: "webkit" + o
            } : n.msRequestFullscreen && (e = {
                enterK: "msRequestFullscreen",
                exitK: "msExitFullscreen",
                elementK: "msFullscreenElement",
                eventK: "MSFullscreenChange"
            }),
            e && (e.enter = function() {
                return c = g.closeOnScroll,
                g.closeOnScroll = !1,
                "webkitRequestFullscreen" !== this.enterK ? t.template[this.enterK]() : void t.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT)
            }
            ,
            e.exit = function() {
                return g.closeOnScroll = c,
                document[this.exitK]()
            }
            ,
            e.isFullscreen = function() {
                return document[this.elementK]
            }
            ),
            e
        }
    }
}),
function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof module && module.exports ? module.exports = function(e, n) {
        return void 0 === n && (n = "undefined" != typeof window ? require("jquery") : require("jquery")(e)),
        t(n),
        n
    }
    : t(jQuery)
}(function(t) {
    return t.fn.tilt = function(e) {
        const n = function() {
            this.ticking || (requestAnimationFrame(c.bind(this)),
            this.ticking = !0)
        }
          , o = function() {
            void 0 !== this.timeout && clearTimeout(this.timeout),
            t(this).css({
                transition: `${this.settings.speed}ms ${this.settings.easing}`
            }),
            this.settings.glare && this.glareElement.css({
                transition: `opacity ${this.settings.speed}ms ${this.settings.easing}`
            }),
            this.timeout = setTimeout(()=>{
                t(this).css({
                    transition: ""
                }),
                this.settings.glare && this.glareElement.css({
                    transition: ""
                })
            }
            , this.settings.speed)
        }
          , i = function(e) {
            this.ticking = !1,
            t(this).css({
                "will-change": "transform"
            }),
            o.call(this),
            t(this).trigger("tilt.mouseEnter")
        }
          , r = function(e) {
            return void 0 === e && (e = {
                pageX: t(this).offset().left + t(this).outerWidth() / 2,
                pageY: t(this).offset().top + t(this).outerHeight() / 2
            }),
            {
                x: e.pageX,
                y: e.pageY
            }
        }
          , a = function(t) {
            this.mousePositions = r(t),
            n.call(this)
        }
          , s = function() {
            o.call(this),
            this.reset = !0,
            n.call(this),
            t(this).trigger("tilt.mouseLeave")
        }
          , l = function() {
            const e = t(this).outerWidth()
              , n = t(this).outerHeight()
              , o = t(this).offset().left
              , i = t(this).offset().top
              , r = (this.mousePositions.x - o) / e
              , a = (this.mousePositions.y - i) / n;
            return {
                tiltX: (this.settings.maxTilt / 2 - r * this.settings.maxTilt).toFixed(2),
                tiltY: (a * this.settings.maxTilt - this.settings.maxTilt / 2).toFixed(2),
                percentageX: 100 * r,
                percentageY: 100 * a,
                angle: Math.atan2(this.mousePositions.x - (o + e / 2), -(this.mousePositions.y - (i + n / 2))) * (180 / Math.PI)
            }
        }
          , c = function() {
            if (this.transforms = l.call(this),
            this.reset)
                return this.reset = !1,
                t(this).css("transform", `perspective(${this.settings.perspective}px) rotateX(0deg) rotateY(0deg)`),
                void (this.settings.glare && (this.glareElement.css("transform", "rotate(180deg) translate(-50%, -50%)"),
                this.glareElement.css("opacity", "0")));
            t(this).css("transform", `perspective(${this.settings.perspective}px) rotateX(${"x" === this.settings.disableAxis ? 0 : this.transforms.tiltY}deg) rotateY(${"y" === this.settings.disableAxis ? 0 : this.transforms.tiltX}deg) scale3d(${this.settings.scale},${this.settings.scale},${this.settings.scale})`),
            this.settings.glare && (this.glareElement.css("transform", `rotate(${this.transforms.angle}deg) translate(-50%, -50%)`),
            this.glareElement.css("opacity", `${this.transforms.percentageY * this.settings.maxGlare / 100}`)),
            t(this).trigger("change", [this.transforms]),
            this.ticking = !1
        }
          , u = function() {
            this.glareElement.css({
                width: `${2 * t(this).outerWidth()}`,
                height: `${2 * t(this).outerWidth()}`
            })
        };
        return t.fn.tilt.destroy = function() {
            t(this).each(function() {
                t(this).find(".js-tilt-glare").remove(),
                t(this).css({
                    "will-change": "",
                    transform: ""
                }),
                t(this).off("mousemove mouseenter mouseleave")
            })
        }
        ,
        t.fn.tilt.getValues = function() {
            const e = [];
            return t(this).each(function() {
                this.mousePositions = r.call(this),
                e.push(l.call(this))
            }),
            e
        }
        ,
        t.fn.tilt.reset = function() {
            t(this).each(function() {
                this.mousePositions = r.call(this),
                this.settings = t(this).data("settings"),
                s.call(this),
                setTimeout(()=>{
                    this.reset = !1
                }
                , this.settings.transition)
            })
        }
        ,
        this.each(function() {
            this.settings = t.extend({
                maxTilt: t(this).is("[data-tilt-max]") ? t(this).data("tilt-max") : 20,
                perspective: t(this).is("[data-tilt-perspective]") ? t(this).data("tilt-perspective") : 300,
                easing: t(this).is("[data-tilt-easing]") ? t(this).data("tilt-easing") : "cubic-bezier(.03,.98,.52,.99)",
                scale: t(this).is("[data-tilt-scale]") ? t(this).data("tilt-scale") : "1",
                speed: t(this).is("[data-tilt-speed]") ? t(this).data("tilt-speed") : "400",
                transition: !t(this).is("[data-tilt-transition]") || t(this).data("tilt-transition"),
                disableAxis: t(this).is("[data-tilt-disable-axis]") ? t(this).data("tilt-disable-axis") : null,
                axis: t(this).is("[data-tilt-axis]") ? t(this).data("tilt-axis") : null,
                reset: !t(this).is("[data-tilt-reset]") || t(this).data("tilt-reset"),
                glare: !!t(this).is("[data-tilt-glare]") && t(this).data("tilt-glare"),
                maxGlare: t(this).is("[data-tilt-maxglare]") ? t(this).data("tilt-maxglare") : 1
            }, e),
            null !== this.settings.axis && (console.warn("Tilt.js: the axis setting has been renamed to disableAxis. See https://github.com/gijsroge/tilt.js/pull/26 for more information"),
            this.settings.disableAxis = this.settings.axis),
            this.init = (()=>{
                t(this).data("settings", this.settings),
                this.settings.glare && function() {
                    const e = this.settings.glarePrerender;
                    if (e || t(this).append('<div class="js-tilt-glare"><div class="js-tilt-glare-inner"></div></div>'),
                    this.glareElementWrapper = t(this).find(".js-tilt-glare"),
                    this.glareElement = t(this).find(".js-tilt-glare-inner"),
                    e)
                        return;
                    this.glareElementWrapper.css({
                        position: "absolute",
                        top: "0",
                        left: "0",
                        width: "100%",
                        height: "100%"
                    }).css({
                        overflow: "hidden"
                    }),
                    this.glareElement.css({
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        "pointer-events": "none",
                        "background-image": "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",
                        width: `${2 * t(this).outerWidth()}`,
                        height: `${2 * t(this).outerWidth()}`,
                        transform: "rotate(180deg) translate(-50%, -50%)",
                        "transform-origin": "0% 0%",
                        opacity: "0"
                    })
                }
                .call(this),
                function() {
                    t(this).on("mousemove", a),
                    t(this).on("mouseenter", i),
                    this.settings.reset && t(this).on("mouseleave", s),
                    this.settings.glare && t(window).on("resize", u.bind(this))
                }
                .call(this)
            }
            ),
            this.init()
        })
    }
    ,
    t("[data-tilt]").tilt(),
    !0
}),
function(t) {
    function e(o) {
        if (n[o])
            return n[o].exports;
        var i = n[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return t[o].call(i.exports, i, i.exports, e),
        i.l = !0,
        i.exports
    }
    var n = {};
    e.m = t,
    e.c = n,
    e.d = function(t, n, o) {
        e.o(t, n) || Object.defineProperty(t, n, {
            configurable: !1,
            enumerable: !0,
            get: o
        })
    }
    ,
    e.n = function(t) {
        var n = t && t.__esModule ? function() {
            return t.default
        }
        : function() {
            return t
        }
        ;
        return e.d(n, "a", n),
        n
    }
    ,
    e.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }
    ,
    e.p = "",
    e(e.s = 0)
}([function(t, e, n) {
    (function(o) {
        var i, r, a;
        !function(n, o) {
            r = [],
            i = o(n),
            void 0 !== (a = "function" == typeof i ? i.apply(e, r) : i) && (t.exports = a)
        }(void 0 !== o ? o : this.window || this.global, function(t) {
            "use strict";
            function e() {
                for (var t = {}, e = 0; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var o in n)
                        h.call(n, o) && (t[o] = n[o])
                }
                return t
            }
            function o(t, e, n) {
                var o, i;
                return e || (e = 250),
                function() {
                    var r = n || this
                      , a = +new Date
                      , s = arguments;
                    o && a < o + e ? (clearTimeout(i),
                    i = setTimeout(function() {
                        o = a,
                        t.apply(r, s)
                    }, e)) : (o = a,
                    t.apply(r, s))
                }
            }
            var i, r, a = n(2), s = {}, l = {}, c = n(3), u = n(4);
            if ("undefined" != typeof window) {
                var d, p = !!t.document.querySelector && !!t.addEventListener, h = Object.prototype.hasOwnProperty;
                return l.destroy = function() {
                    try {
                        document.querySelector(s.tocSelector).innerHTML = ""
                    } catch (t) {
                        console.warn("Element not found: " + s.tocSelector)
                    }
                    document.removeEventListener("scroll", this._scrollListener, !1),
                    document.removeEventListener("resize", this._scrollListener, !1),
                    i && document.removeEventListener("click", this._clickListener, !1)
                }
                ,
                l.init = function(t) {
                    if (p && (s = e(a, t || {}),
                    this.options = s,
                    this.state = {},
                    s.scrollSmooth && (s.duration = s.scrollSmoothDuration,
                    l.scrollSmooth = n(5).initSmoothScrolling(s)),
                    i = c(s),
                    r = u(s),
                    this._buildHtml = i,
                    this._parseContent = r,
                    l.destroy(),
                    null !== (d = r.selectHeadings(s.contentSelector, s.headingSelector)))) {
                        var h = r.nestHeadingsArray(d).nest;
                        i.render(s.tocSelector, h),
                        this._scrollListener = o(function(t) {
                            i.updateToc(d);
                            var e = t && t.target && t.target.scrollingElement && 0 === t.target.scrollingElement.scrollTop;
                            (t && (0 === t.eventPhase || null === t.currentTarget) || e) && (i.updateToc(d),
                            s.scrollEndCallback && s.scrollEndCallback(t))
                        }, s.throttleTimeout),
                        this._scrollListener(),
                        document.addEventListener("scroll", this._scrollListener, !1),
                        document.addEventListener("resize", this._scrollListener, !1);
                        var m = null;
                        return this._clickListener = o(function(t) {
                            s.scrollSmooth && i.disableTocAnimation(t),
                            i.updateToc(d),
                            m && clearTimeout(m),
                            m = setTimeout(function() {
                                i.enableTocAnimation()
                            }, s.scrollSmoothDuration)
                        }, s.throttleTimeout),
                        document.addEventListener("click", this._clickListener, !1),
                        this
                    }
                }
                ,
                l.refresh = function(t) {
                    l.destroy(),
                    l.init(t || this.options)
                }
                ,
                t.tocbot = l,
                l
            }
        })
    }
    ).call(e, n(1))
}
, function(t, e) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || Function("return this")() || (0,
        eval)("this")
    } catch (t) {
        "object" == typeof window && (n = window)
    }
    t.exports = n
}
, function(t, e) {
    t.exports = {
        tocSelector: ".js-toc",
        contentSelector: ".js-toc-content",
        headingSelector: "h1, h2, h3",
        ignoreSelector: ".js-toc-ignore",
        linkClass: "toc-link",
        extraLinkClasses: "",
        activeLinkClass: "is-active-link",
        listClass: "toc-list",
        extraListClasses: "",
        isCollapsedClass: "is-collapsed",
        collapsibleClass: "is-collapsible",
        listItemClass: "toc-list-item",
        activeListItemClass: "is-active-li",
        collapseDepth: 0,
        scrollSmooth: !0,
        scrollSmoothDuration: 420,
        scrollEndCallback: function(t) {},
        headingsOffset: 1,
        throttleTimeout: 50,
        positionFixedSelector: null,
        positionFixedClass: "is-position-fixed",
        fixedSidebarOffset: "auto",
        includeHtml: !1,
        onClick: !1,
        orderedList: !0
    }
}
, function(t, e) {
    t.exports = function(t) {
        function e(t, i) {
            var r = i.appendChild(n(t));
            if (t.children.length) {
                var a = o(t.isCollapsed);
                t.children.forEach(function(t) {
                    e(t, a)
                }),
                r.appendChild(a)
            }
        }
        function n(e) {
            var n = document.createElement("li")
              , o = document.createElement("a");
            return t.listItemClass && n.setAttribute("class", t.listItemClass),
            t.onClick && (o.onclick = t.onClick),
            t.includeHtml && e.childNodes.length ? i.call(e.childNodes, function(t) {
                o.appendChild(t.cloneNode(!0))
            }) : o.textContent = e.textContent,
            o.setAttribute("href", "#" + e.id),
            o.setAttribute("class", t.linkClass + l + "node-name--" + e.nodeName + l + t.extraLinkClasses),
            n.appendChild(o),
            n
        }
        function o(e) {
            var n = t.orderedList ? "ol" : "ul"
              , o = document.createElement(n)
              , i = t.listClass + l + t.extraListClasses;
            return e && (i += l + t.collapsibleClass,
            i += l + t.isCollapsedClass),
            o.setAttribute("class", i),
            o
        }
        var i = [].forEach
          , r = [].some
          , a = document.body
          , s = !0
          , l = " ";
        return {
            enableTocAnimation: function() {
                s = !0
            },
            disableTocAnimation: function(e) {
                var n = e.target || e.srcElement;
                "string" == typeof n.className && -1 !== n.className.indexOf(t.linkClass) && (s = !1)
            },
            render: function(t, n) {
                var i = o(!1);
                n.forEach(function(t) {
                    e(t, i)
                });
                var r = document.querySelector(t);
                if (null !== r)
                    return r.firstChild && r.removeChild(r.firstChild),
                    0 === n.length ? r : r.appendChild(i)
            },
            updateToc: function(e) {
                var n = document.documentElement.scrollTop || a.scrollTop;
                t.positionFixedSelector && function() {
                    var e = document.documentElement.scrollTop || a.scrollTop
                      , n = document.querySelector(t.positionFixedSelector);
                    "auto" === t.fixedSidebarOffset && (t.fixedSidebarOffset = document.querySelector(t.tocSelector).offsetTop),
                    e > t.fixedSidebarOffset ? -1 === n.className.indexOf(t.positionFixedClass) && (n.className += l + t.positionFixedClass) : n.className = n.className.split(l + t.positionFixedClass).join("")
                }();
                var o, c = e;
                if (s && null !== document.querySelector(t.tocSelector) && c.length > 0) {
                    r.call(c, function(e, i) {
                        return e.offsetTop > n + t.headingsOffset + 10 ? (o = c[0 === i ? i : i - 1],
                        !0) : i === c.length - 1 ? (o = c[c.length - 1],
                        !0) : void 0
                    });
                    var u = document.querySelector(t.tocSelector).querySelectorAll("." + t.linkClass);
                    i.call(u, function(e) {
                        e.className = e.className.split(l + t.activeLinkClass).join("")
                    });
                    var d = document.querySelector(t.tocSelector).querySelectorAll("." + t.listItemClass);
                    i.call(d, function(e) {
                        e.className = e.className.split(l + t.activeListItemClass).join("")
                    });
                    var p = document.querySelector(t.tocSelector).querySelector("." + t.linkClass + ".node-name--" + o.nodeName + '[href="#' + o.id + '"]');
                    -1 === p.className.indexOf(t.activeLinkClass) && (p.className += l + t.activeLinkClass);
                    var h = p.parentNode;
                    h && -1 === h.className.indexOf(t.activeListItemClass) && (h.className += l + t.activeListItemClass);
                    var m = document.querySelector(t.tocSelector).querySelectorAll("." + t.listClass + "." + t.collapsibleClass);
                    i.call(m, function(e) {
                        -1 === e.className.indexOf(t.isCollapsedClass) && (e.className += l + t.isCollapsedClass)
                    }),
                    p.nextSibling && -1 !== p.nextSibling.className.indexOf(t.isCollapsedClass) && (p.nextSibling.className = p.nextSibling.className.split(l + t.isCollapsedClass).join("")),
                    function e(n) {
                        return -1 !== n.className.indexOf(t.collapsibleClass) && -1 !== n.className.indexOf(t.isCollapsedClass) ? (n.className = n.className.split(l + t.isCollapsedClass).join(""),
                        e(n.parentNode.parentNode)) : n
                    }(p.parentNode.parentNode)
                }
            }
        }
    }
}
, function(t, e) {
    t.exports = function(t) {
        function e(t) {
            return t[t.length - 1]
        }
        function n(t) {
            return +t.nodeName.split("H").join("")
        }
        function o(e) {
            var o = {
                id: e.id,
                children: [],
                nodeName: e.nodeName,
                headingLevel: n(e),
                textContent: e.textContent.trim()
            };
            return t.includeHtml && (o.childNodes = e.childNodes),
            o
        }
        function i(i, r) {
            for (var a = o(i), s = n(i), l = r, c = e(l), u = s - (c ? c.headingLevel : 0); u > 0; )
                (c = e(l)) && void 0 !== c.children && (l = c.children),
                u--;
            return s >= t.collapseDepth && (a.isCollapsed = !0),
            l.push(a),
            l
        }
        var r = [].reduce;
        return {
            nestHeadingsArray: function(t) {
                return r.call(t, function(t, e) {
                    return i(o(e), t.nest),
                    t
                }, {
                    nest: []
                })
            },
            selectHeadings: function(e, n) {
                var o = n;
                t.ignoreSelector && (o = n.split(",").map(function(e) {
                    return e.trim() + ":not(" + t.ignoreSelector + ")"
                }));
                try {
                    return document.querySelector(e).querySelectorAll(o)
                } catch (t) {
                    return console.warn("Element not found: " + e),
                    null
                }
            }
        }
    }
}
, function(t, e) {
    e.initSmoothScrolling = function(t) {
        function e(t) {
            return "a" === t.tagName.toLowerCase() && (t.hash.length > 0 || "#" === t.href.charAt(t.href.length - 1)) && (n(t.href) === i || n(t.href) + "#" === i)
        }
        function n(t) {
            return t.slice(0, t.lastIndexOf("#"))
        }
        document.documentElement.style;
        var o = t.duration
          , i = location.hash ? n(location.href) : location.href;
        document.body.addEventListener("click", function(n) {
            !e(n.target) || n.target.className.indexOf("no-smooth-scroll") > -1 || "#" === n.target.href.charAt(n.target.href.length - 2) && "!" === n.target.href.charAt(n.target.href.length - 1) || -1 === n.target.className.indexOf(t.linkClass) || function(t, e) {
                function n(t) {
                    i = t - o,
                    window.scrollTo(0, a.easing(i, r, l, c)),
                    i < c ? requestAnimationFrame(n) : (window.scrollTo(0, r + l),
                    "function" == typeof a.callback && a.callback())
                }
                var o, i, r = window.pageYOffset, a = {
                    duration: e.duration,
                    offset: e.offset || 0,
                    callback: e.callback,
                    easing: e.easing || function(t, e, n, o) {
                        return (t /= o / 2) < 1 ? n / 2 * t * t + e : -n / 2 * (--t * (t - 2) - 1) + e
                    }
                }, s = document.querySelector('[id="' + decodeURI(t).split("#").join("") + '"]'), l = "string" == typeof t ? a.offset + (t ? s && s.getBoundingClientRect().top || 0 : -(document.documentElement.scrollTop || document.body.scrollTop)) : t, c = "function" == typeof a.duration ? a.duration(l) : a.duration;
                requestAnimationFrame(function(t) {
                    o = t,
                    n(t)
                })
            }(n.target.hash, {
                duration: o,
                callback: function() {
                    var t, e;
                    t = n.target.hash,
                    (e = document.getElementById(t.substring(1))) && (/^(?:a|select|input|button|textarea)$/i.test(e.tagName) || (e.tabIndex = -1),
                    e.focus())
                }
            })
        }, !1)
    }
}
]),
function(t) {
    t.fn.readingTime = function(e) {
        const n = t(this);
        let o, i, r, a, s, l, c, u, d;
        this.settings = t.extend({}, {
            readingTimeTarget: ".eta",
            readingTimeAsNumber: !1,
            wordCountTarget: null,
            wordsPerMinute: 270,
            round: !0,
            lang: "en",
            lessThanAMinuteString: "",
            prependTimeString: "",
            prependWordString: "",
            remotePath: null,
            remoteTarget: null,
            success: function() {},
            error: function() {}
        }, e);
        const p = this.settings
          , h = function(e) {
            "" !== e.text ? (a = e.text.trim().split(/\s+/g).length,
            o = p.wordsPerMinute / 60,
            s = a / o,
            l = Math.floor(s / 60),
            c = Math.round(s - 60 * l),
            u = `${l}:${c}`,
            p.round ? l > 0 ? t(p.readingTimeTarget).text(p.prependTimeString + l + (p.readingTimeAsNumber ? "" : " " + r)) : t(p.readingTimeTarget).text(p.readingTimeAsNumber ? l : p.prependTimeString + i) : t(p.readingTimeTarget).text(p.prependTimeString + u),
            "" !== p.wordCountTarget && void 0 !== p.wordCountTarget && t(p.wordCountTarget).text(p.prependWordString + a),
            d = {
                wpm: p.wordsPerMinute,
                words: a,
                eta: {
                    time: u,
                    minutes: l,
                    seconds: s
                }
            },
            p.success.call(this, d)) : p.error.call(this, {
                error: "The element does not contain any text"
            })
        };
        if (!this.length)
            return p.error.call(this, {
                error: "The element could not be found"
            }),
            this;
        switch (p.lang) {
        case "ar":
            i = p.lessThanAMinuteString || "أقل من دقيقة",
            r = "دقيقة";
            break;
        case "cz":
            i = p.lessThanAMinuteString || "Méně než minutu",
            r = "min";
            break;
        case "da":
            i = p.lessThanAMinuteString || "Mindre end et minut",
            r = "min";
            break;
        case "de":
            i = p.lessThanAMinuteString || "Weniger als eine Minute",
            r = "min";
            break;
        case "es":
            i = p.lessThanAMinuteString || "Menos de un minuto",
            r = "min";
            break;
        case "fr":
            i = p.lessThanAMinuteString || "Moins d'une minute",
            r = "min";
            break;
        case "hu":
            i = p.lessThanAMinuteString || "Kevesebb mint egy perc",
            r = "perc";
            break;
        case "is":
            i = p.lessThanAMinuteString || "Minna en eina mínútu",
            r = "min";
            break;
        case "it":
            i = p.lessThanAMinuteString || "Meno di un minuto",
            r = "min";
            break;
        case "nl":
            i = p.lessThanAMinuteString || "Minder dan een minuut",
            r = "min";
            break;
        case "no":
            i = p.lessThanAMinuteString || "Mindre enn ett minutt",
            r = "min";
            break;
        case "pl":
            i = p.lessThanAMinuteString || "Mniej niż minutę",
            r = "min";
            break;
        case "ru":
            i = p.lessThanAMinuteString || "Меньше минуты",
            r = "мин";
            break;
        case "sk":
            i = p.lessThanAMinuteString || "Menej než minútu",
            r = "min";
            break;
        case "sv":
            i = p.lessThanAMinuteString || "Mindre än en minut",
            r = "min";
            break;
        case "tr":
            i = p.lessThanAMinuteString || "Bir dakikadan az",
            r = "dk";
            break;
        case "uk":
            i = p.lessThanAMinuteString || "Менше хвилини",
            r = "хв";
            break;
        case "el":
            i = p.lessThanAMinuteString || "Λιγότερο από λεπτό",
            r = "λεπτά";
            break;
        default:
            i = p.lessThanAMinuteString || "Less than a minute",
            r = "min"
        }
        return n.each(function(e) {
            null != p.remotePath && null != p.remoteTarget ? t.get(p.remotePath, function(e) {
                let n = document.createElement("div");
                n.innerHTML = e,
                h({
                    text: t(n).find(p.remoteTarget).text()
                })
            }) : h({
                text: n.text()
            })
        }),
        !0
    }
}(jQuery),
this.Stammy = {},
($Stammy = {}).videos = {},
$Stammy.inview_vids = [],
$Stammy.ratios = [],
$Stammy.pitm_tb_margin = 0,
$Stammy.imgs = {},
$Stammy.playPromise = {},
$Stammy.default_res = ["500", "1000", "2000"],
$Stammy.browser_supports_webp = !1,
$Stammy.hasDPR = !0,
void 0 === window.supported_wbp || "" === window.supported_wbp ? $Stammy.photoset_supports_webp = !1 : $Stammy.photoset_supports_webp = !!window.supported_wbp,
$Stammy.hasToc = !1,
void 0 === window.toc || "" === window.toc ? $Stammy.hasToc = !1 : $Stammy.hasToc = !!window.toc,
$Stammy.pageLayoutNS = "",
void 0 === window.pagetype || "" === window.pagetype || "postex" === window.pagetype ? $Stammy.pageLayoutNS = !1 : "default" === window.pagetype && ($Stammy.pageLayoutNS = !0),
(WebP = new Image).onload = WebP.onerror = function() {
    return 2 !== WebP.height ? $Stammy.browser_supports_webp = !1 : $Stammy.browser_supports_webp = !0
}
,
WebP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA",
$Stammy.localStorage = {},
$Stammy.localStorage.setItem = function(t, e) {
    try {
        return localStorage.setItem(t, e)
    } catch (t) {
        t
    }
}
,
$contsize = 0,
Footnotes = {
    footnotetimeout: !1,
    setup: function() {
        var t;
        return (t = $("a[rel='footnote']")).unbind("mouseover", Footnotes.footnoteover),
        t.unbind("mouseout", Footnotes.footnoteout),
        t.bind("mouseover", Footnotes.footnoteover),
        t.bind("mouseout", Footnotes.footnoteout)
    },
    footnoteover: function() {
        var t, e, n, o, i, r;
        return clearTimeout(Footnotes.footnotetimeout),
        $("#footnotediv").stop(),
        $("#footnotediv").remove(),
        n = $(this).attr("href").substr(1),
        i = $(this).offset(),
        (t = $(document.createElement("div"))).attr("id", "footnotediv"),
        t.bind("mouseover", Footnotes.divover),
        t.bind("mouseout", Footnotes.footnoteout),
        e = document.getElementById(n),
        t.html("<div class='footnote-wrap'>" + $(e).html() + "</div><div class='footnote-label'>FOOTNOTE</div>"),
        t.find("a[rev='footnote']").remove(),
        t.find("a").first().remove(),
        $("#site").append(t),
        (o = i.left) + 375 > $(window).width() + $(window).scrollLeft() && (o = $(window).width() - 375 + $(window).scrollLeft()),
        (r = i.top + 20) + t.height() > $(window).height() + $(window).scrollTop() && (r = i.top - t.height() - 15),
        t.css({
            left: o,
            top: r
        })
    },
    footnoteout: function() {
        return Footnotes.footnotetimeout = setTimeout(function() {
            return $("#footnotediv").animate({
                opacity: 0
            }, 150, function() {
                return $("#footnotediv").remove()
            })
        }, 100)
    },
    divover: function() {
        return clearTimeout(Footnotes.footnotetimeout),
        $("#footnotediv").stop(),
        $("#footnotediv").css({
            opacity: 1
        })
    }
},
$(function() {
    var t, e, n, o, i, r, a, s;
    return $("#footnotes").length && $(window).width() > 850 && Footnotes.setup(),
    $("#toggleFaves").on("click", function(t) {
        return "false" === $("#toggleFaves").attr("data-enabled") || void 0 === $("#toggleFaves").attr("data-enabled") ? ($("#toggleFaves").attr("data-enabled", !0),
        $("#photo-grid .pset").hide(),
        $("#photo-grid .collection-wrap").hide(),
        $("#photo-grid .hidden-fave").show(),
        $("#toggleFaves").addClass("enabled"),
        $("#toggleCollections").removeClass("enabled"),
        $("#toggleFaves span").text("Show all photosets"),
        $("#toggleFaves").attr("data-balloon", "Show all photosets")) : ($("#toggleFaves").attr("data-enabled", !1),
        $("#photo-grid .collection-wrap").show(),
        $("#photo-grid .pset:not(.hidden-fave").show(),
        $("#photo-grid .hidden-fave").hide(),
        $("#toggleCollections").removeClass("enabled"),
        $("#toggleFaves").removeClass("enabled"),
        $("#toggleFaves span").text("Show faves only"),
        $("#toggleFaves").attr("data-balloon", "Show faves only"))
    }),
    $("#toggleCollections").on("click", function(t) {
        return $("#toggleFaves").attr("data-enabled", !1),
        "block" === $("#photo-grid .pset").first().css("display") ? ($("#photo-grid .pset").hide(),
        $("#photo-grid .hidden-fave").hide(),
        $("#photo-grid .collection-wrap").show(),
        $("#toggleCollections").addClass("enabled"),
        $("#toggleFaves").removeClass("enabled"),
        $("#toggleCollections span").text("Show all photosets"),
        $("#toggleCollections").attr("data-balloon", "Show all photosets")) : ($("#photo-grid .pset").show(),
        $("#photo-grid .hidden-fave").hide(),
        $("#photo-grid .collection-wrap").show(),
        $("#toggleCollections").removeClass("enabled"),
        $("#toggleFaves").removeClass("enabled"),
        $("#toggleCollections span").text("Show collections only"),
        $("#toggleCollections").attr("data-balloon", "Show collections only"))
    }),
    $("#expand-photos").on("click", function(t) {
        return t.preventDefault(),
        $(".show-more-sets").hide(),
        $("#photo-archives").show()
    }),
    $(".hover-to-play").length && (Modernizr.touch ? $(".hover-to-play-wrap").each(function() {
        return $(this).addClass("mobile"),
        $(this).find("video").attr("controls", "controls")
    }) : ($(".hover-to-play video").hover(function() {
        var t;
        if ($(this).css("opacity", "1"),
        void 0 !== (t = this.play()))
            return t.then(function(t) {}).catch(function(t) {})
    }, function() {
        return $(this).css("opacity", ".25"),
        this.pause()
    }),
    $(".hover-to-play video").bind("ended", function() {
        return this.play()
    }))),
    $("#home") && lozad(document.querySelectorAll(".entry-title .hero-img"), {
        threshold: 0,
        rootMargin: "200px 0px"
    }).observe(),
    lozad(document.querySelectorAll(".hero-delayed"), {
        threshold: 0,
        rootMargin: "200px 0px"
    }).observe(),
    0,
    a = function() {
        return $(this).scrollTop(),
        $(window).height(),
        this._contentHeight = $("body").offset().top + $("body").height()
    }
    ,
    $(window).scroll($.throttle(250, a)),
    window.matchMedia("only screen and (min-width: 740px)").matches && $(window).scroll($.throttle(150, function() {
        return window.scrollY > 25 ? $("#progress-bar-container").find(".stammy-bar").show() : $("#progress-bar-container").find(".stammy-bar").hide()
    })),
    $("#tweet_compose_close").on("click", function(t) {
        return $("#tweet_it").addClass("fallout")
    }),
    $("#postex").length && (initPhotoSwipeFromDOM("#postex"),
    !0 === $Stammy.hasToc ? (n = !1 === $Stammy.pageLayoutNS ? "article" : "#postex",
    tocbot.init({
        tocSelector: ".stammytoc",
        contentSelector: n,
        headingSelector: "h1.toc, h2.toc, h3.toc, h4.toc, h5.toc, h6.toc, div.toc",
        collapseDepth: 6,
        hasInnerContainers: !0,
        activeLinkClass: "is-active-link",
        collapsibleClass: "is-collapsible",
        extraLinkClasses: "",
        extraListClasses: "",
        fixedSidebarOffset: "auto",
        includeHtml: !1,
        isCollapsedClass: "is-collapsed",
        linkClass: "toc-link",
        listClass: "toc-list",
        listItemClass: "toc-list-item",
        positionFixedClass: "is-position-fixed",
        positionFixedSelector: null,
        smoothScroll: !0,
        smoothScrollDuration: 420,
        throttleTimeout: 50,
        orderedList: !1
    }),
    $(".stammytoc").prepend("<div class='ic-stammytoc'></div><strong class='toc-heading'>TABLE OF CONTENTS</strong>"),
    $("<div class='article-stats'><div class='readtime'></div><div class='wordcount'></div></div>").appendTo(".stammytoc"),
    $("#postex").readingTime({
        readingTimeTarget: $(".readtime"),
        wordCountTarget: $(".wordcount"),
        wordsPerMinute: 250,
        success: function() {
            return $(".wordcount").text($(".wordcount").text().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")),
            $("<span> words</span>").appendTo(".wordcount"),
            $("<span> read</span>").appendTo(".readtime")
        }
    })) : $(".stammytoc").remove(),
    s = $("#tweet_it"),
    o = function() {
        return s.fadeIn(150),
        !function(t, e, n) {
            var o, i, r;
            if (i = void 0,
            o = t.getElementsByTagName(e)[0],
            r = /^http:/.test(t.location) ? "http" : "https",
            !t.getElementById(n))
                return (i = t.createElement(e)).id = n,
                i.src = r + "://platform.twitter.com/widgets.js",
                o.parentNode.insertBefore(i, o)
        }(document, "script", "twitter-wjs")
    }
    ,
    r = function() {
        var t;
        return (t = $(window).scrollTop() / $(document).height() * 100) > 50 && s.not(":visible") ? o() : t < 35 && s.is(":visible") ? s.addClass("fallout").delay(500).queue(function(t) {
            return $(this).removeClass("fallout").hide(),
            t()
        }) : void 0
    }
    ,
    window.matchMedia("only screen and (min-width: 400px)").matches && ($(window).scroll($.throttle(250, r)),
    r())),
    (e = function() {
        return this.wrap_el = $("#progress-bar-container"),
        this.wrap_el.append("<span class='stammy-bar'></span>"),
        this.bar_el = $("#progress-bar-container").find(".stammy-bar"),
        this.init()
    }
    ).prototype.init = function() {
        var t, e;
        return this.calculate(),
        this.manualScroll(),
        t = $.throttle(50, ()=>(this.calculate(),
        this.manualScroll())),
        $(window).resize(t),
        e = $.throttle(50, ()=>this.manualScroll()),
        $(window).scroll(e)
    }
    ,
    e.prototype.manualScroll = function() {
        var t, e;
        return (e = (t = ($(window).height() + $(window).scrollTop()) / this._contentHeight) * this._scrollBarMaxWidth) > this._scrollBarMaxWidth - 15 && (e = this._scrollBarMaxWidth),
        e < 0 && (e = 0),
        t > .97 ? this.bar_el.css("background", "#00b907") : t < .97 && this.bar_el.css("background", "#2196f3"),
        this.bar_el.stop().animate({
            width: e + "px"
        }, 100)
    }
    ,
    e.prototype.calculate = function() {
        return this._scrollBarMaxWidth = $(window).width(),
        this._contentHeight = $("#site").offset().top + $("#site").height()
    }
    ,
    $("#postex").hasClass("is-post") && $(window).bind("load", function() {
        return new e
    }),
    $("#postex") && $("#postex").fitVids(),
    $Stammy.onObserve = function(t, e) {
        return t.forEach(function(t) {
            var e;
            return t.isIntersecting ? ($(t.target).attr("preload", "auto"),
            void 0 !== (e = t.target.play()) && e.then(function(e) {
                if (!$(t.target).hasClass("cover-video"))
                    return t.target.controls = !1
            }).catch(function(e) {
                if (!$(t.target).hasClass("cover-video"))
                    return t.target.controls = !0
            }),
            $Stammy.inview_vids.push($(t.target))) : (t.target.pause(),
            $(t.target).attr("preload", "metadata"),
            $Stammy.inview_vids.pop($(t.target)))
        })
    }
    ,
    $Stammy.observer = new IntersectionObserver($Stammy.onObserve,{
        threshold: .6
    }),
    lozad("svg.nz-country", {
        load: function(t) {
            return $(t).addClass("animate")
        }
    }).observe(),
    lozad(".map-card", {
        load: function(t) {
            return $(t).addClass("animate")
        }
    }).observe(),
    window.innerWidth < 500 && ($("svg.nz-country").addClass("animate"),
    $(".map-card").addClass("animate")),
    $Stammy.init_tilt(),
    $Stammy.init_media_load(),
    $(".story").each(function() {
        var t, e;
        return $(this).find(".ic_jump").css("pointer-events", "none"),
        $(this).find("h6").css("pointer-events", "none"),
        $(this).find(".playbtn").css("pointer-events", "none"),
        $(this).find(".videoChrome").css("pointer-events", "none"),
        $(this).hover(function() {
            if (!$(this).find(".noload").hasClass("expanded"))
                return $(this).find("h6").css("opacity", "0"),
                $(this).find(".noload").css("opacity", "1"),
                $(this).find(".playbtn").css({
                    transform: "scale(1.3)"
                })
        }, function() {
            if (!$(this).find(".noload").hasClass("expanded"))
                return $(this).find(".playbtn").css({
                    transform: "scale(1.1)",
                    opacity: "1"
                }),
                $(this).find("h6").css("opacity", "1"),
                $(this).find(".noload").css("opacity", "0.4")
        }),
        t = $(this).find(".noload"),
        $(this).find(".back5").on("click", function(e) {
            return t[0].currentTime = t[0].currentTime - 5,
            e.preventDefault(),
            e.stopPropagation(),
            setTimeout(function() {
                return $(this).css({
                    opacity: "0.8",
                    transform: "scale(1.1)",
                    background: "none",
                    "border-color": "2px solid rgba(255,255,255,0.2)"
                })
            }, 300)
        }),
        $(this).find(".fwd5").on("click", function(e) {
            return t[0].currentTime = t[0].currentTime + 5,
            e.preventDefault(),
            e.stopPropagation(),
            setTimeout(function() {
                return $(this).css({
                    opacity: "0.8 !important",
                    transform: "scale(1.1) !important",
                    background: "none !important",
                    "border-color": "2px solid rgba(255,255,255,0.2) !important"
                })
            }, 300)
        }),
        e = $(this),
        t.on("click touchend", function(n) {
            var o;
            return n.preventDefault(),
            o = t,
            $(e).find(".videoChrome").css("display", "block").css("opacity", "1"),
            $(e).find(".ic_jump").css({
                opacity: "1",
                "pointer-events": "auto"
            }),
            $(e).find("h6").css("opacity", "0"),
            $(e).find(".noload").css("opacity", "1"),
            $(e).find(".playbtn").css({
                transform: "scale(1.5)",
                opacity: "0"
            }),
            o.addClass("expanded"),
            o.attr("preload", "auto"),
            o.prop("playsinline", !0),
            o.on("progress", function() {
                return $updateLoadProgress(o, !0)
            }),
            o.on("loadeddata", function() {
                return $updateLoadProgress(o, !0)
            }),
            o.on("canplaythrough", function() {
                return $updateLoadProgress(o, !0)
            }),
            o.on("playing", function() {
                return $updateLoadProgress(o, !0)
            }),
            o.on("timeupdate", function() {
                var t;
                return t = o[0].currentTime / o[0].duration,
                o.parent(".videoUI").find(".playbar").css("width", Math.round(1e3 * t) / 10 + "%")
            }),
            !0 === o[0].paused ? ($(e).find(".noload").css("opacity", "1"),
            $(e).find(".ic_jump").css("opacity", "0.8"),
            $(e).find(".videoChrome").css("opacity", "1"),
            $(e).find("h6").css("opacity", "0"),
            o[0].play(),
            $(e).find(".playbtn").css({
                transform: "scale(1.5)",
                opacity: "0"
            })) : (o[0].pause(),
            $(e).find(".noload").css("opacity", "0.4"),
            $(e).find(".videoChrome").css("opacity", "0"),
            $(e).find("h6").css("opacity", "1"),
            $(e).find(".ic_jump").css("opacity", "0"),
            $(e).find(".playbtn").css({
                transform: "scale(1.1)",
                opacity: "1"
            }))
        })
    }),
    $("video").each(function() {
        return $(this).prop("muted", !0),
        $(this).prop("playsinline", !0)
    }),
    $("#mute-fab").on("click", function(t) {
        return $(this).hasClass("muted") ? ($(this).removeClass("muted"),
        $(this).attr("data-balloon", "Mute"),
        $("video").each(function() {
            return $(this).prop("muted", !1)
        })) : ($(this).addClass("muted"),
        $(this).attr("data-balloon", "Unmute"),
        $("video").each(function() {
            return $(this).prop("muted", !0),
            $(this).prop("playsinline", !0)
        }))
    }),
    $("#overflow a.overflow-btn").on("click", function(t) {
        if (t.preventDefault(),
        t.target !== !this)
            return $("#overflow-drop").hasClass("open") ? $("#overflow-drop").removeClass("open") : $("#overflow-drop").addClass("open")
    }),
    $("body").on("click", function(t) {
        if (0 === $("#overflow").has($(t.target)).length && $("#overflow-drop").hasClass("open"))
            return $("#overflow-drop").removeClass("open")
    }),
    $Stammy.load_cover = function() {
        var t, e, n, o, i, r, a, s, l, c;
        if (($(".inner-site-wrap").length || $(".photoset-index-header-wrap").length) && (e = window.innerWidth,
        r = !0,
        $(".full-cover-loaded").length ? ((i = $(".full-cover-loaded").attr("src")) === $(".placeholder-cover").data("cover") && (r = !1),
        i === $(".placeholder-cover").data("large") && (e > 1501 ? (n = $(".placeholder-cover").data("cover"),
        r = !0) : r = !1),
        i === $(".placeholder-cover").data("medium") && (r = !1,
        e > 1e3 && (n = $(".placeholder-cover").data("large"),
        r = !0),
        e > 1501 && (n = $(".placeholder-cover").data("cover"),
        r = !0))) : $(".placeholder-cover").length && (e > 1501 && (n = $(".placeholder-cover").data("cover")),
        e < 1501 && e > 1e3 && (n = $(".placeholder-cover").data("large")),
        e < 1e3 && (n = $(".placeholder-cover").data("medium")),
        e < 600 && (r = !1)),
        $(".placeholder-cover").length && ("" === (o = $(".placeholder-cover").data("ratio")) && (o = 1.5),
        l = function(e) {
            var n, o;
            if (e.lengthComputable)
                return o = (e.loaded / e.total).toFixed(2),
                n = parseInt(100 * o),
                t.find(".line").css("width", n + " %")
        }
        ,
        a = function(e) {
            var i;
            return t.find(".line").css("width", "calc(100% - 6px)"),
            $(".full-cover-loaded").length ? $(".full-cover-loaded").attr("src", n) : ((i = document.createElement("img")).setAttribute("src", n),
            $(i).addClass("full-cover-loaded"),
            1 === $(".photoset-index-header-wrap").length && $(i).addClass("collection-index"),
            1.33 > o && $(i).addClass("tall-ratio"),
            $(i).attr("data-ratio", o),
            $(".photoset-header-cover-a").append(i)),
            setTimeout(function() {
                return t.fadeOut(300, function() {
                    return window.requestAnimationFrame($Stammy.swap)
                })
            }, 200)
        }
        ,
        s = function(e) {
            return t.fadeOut(300),
            $(".placeholder-cover").attr("src", n),
            $(".placeholder-cover").addClass("failed"),
            $(".placeholder-cover").removeClass("filter")
        }
        ,
        t = $("#cover_progress"),
        r ? (t.show(),
        $(".placeholder-cover").addClass("filter"),
        t.addClass("show"),
        (c = new XMLHttpRequest).onprogress = l,
        c.onload = a,
        c.onerror = s,
        c.open("GET", n, !0),
        c.send(null)) : $(".placeholder-cover").removeClass("filter")),
        $(".inner-site-wrap").length))
            return initPhotoSwipeFromDOM(".inner-site-wrap")
    }
    ,
    $Stammy.load_cover(),
    $(window).resize($.throttle(500, $Stammy.load_cover)),
    ($(".photoset-index-link").length || $(".photoset-index-header-wrap").length) && (i = $("link[rel='canonical']").attr("href").split("https://hugostamp.com")[1],
    $Stammy.localStorage.setItem(i, "true"),
    $("#photosetlist li").each(function() {
        var t;
        if (t = $(this).find("a").attr("href"),
        "true" === localStorage.getItem(t))
            return $(this).addClass("read")
    }),
    $("#photosetlist_sm li").each(function() {
        var t;
        if (t = $(this).find("a").attr("href"),
        "true" === localStorage.getItem(t))
            return $(this).addClass("read")
    })),
    Modernizr.touchevents && "Win32" !== window.navigator.platform && ((t = !0) && $(".day-stats").addClass("animate"),
    $("body").addClass("mobile")),
    t ? window.onorientationchange = function() {
        return $rerun()
    }
    : $(window).resize($.throttle(150, $rerun)),
    $rerun()
}),
$gridset = function() {
    return $(".photoset-row").each(function() {
        var t, e, n, o, i, r, a;
        for (0,
        0,
        $Stammy.photoset_width = $(this).parent(".photoset").width(),
        1 === $(this).children().length && $(this).find("figure").addClass("single"),
        t = $(this).find(".photoset-item"),
        e = $(this).parent(".photoset").width(),
        i = t.map(function() {
            return $(this).find("img").data("ratio") ? $(this).find("img").data("ratio") : "VIDEO" === $(this).prop("tagName") ? $(this).data("ratio") ? $(this).data("ratio") : 1.77777 : 1.49925
        }).get(),
        a = 0,
        r = 0,
        o = Math.min.apply(Math, i),
        n = 0; n < t.length; )
            a += i[n] / o,
            n++;
        return t.each(function() {
            return r += parseInt($(this).css("margin-left")) + parseInt($(this).css("margin-right"))
        }),
        t.each(function(t) {
            var n;
            return n = (e - r) / a,
            "VIDEO" === $(this).prop("tagName") ? $(this).height(Math.ceil(n / o)).width(Math.ceil(n / o) * i[t]) : $(this).find("video").length ? $(this).find("video").height(Math.floor(n / o)).width(Math.floor(n / o) * i[t]) : $(this).find("img").height(Math.ceil(n / o)).width(Math.ceil(n / o) * i[t])
        }),
        void 0 === window.supported_res || "" === window.res ? $Stammy.supported_res = $Stammy.default_res : $Stammy.supported_res = supported_res,
        $(this).children().length,
        $(this).parent(".photoset").width(),
        $(this).children().each(function() {
            var t, e, n, o, i, r, a, s, l, c, u, d, p, h, m, f, g, v, y, w, b, x;
            if ($(this).hasClass("photoset-video") || $(this).hasClass("videoUI")) {
                if (v = (h = $(this)).width(),
                void 0 === h.attr("data-sizes") && h.hasClass("videoUI") && (v = (h = $(this).find(".photoset-video")).width()),
                void 0 !== h.attr("data-sizes") && (o = (o = (g = (f = h.find("source").first()).attr("src").split("/"))[g.length - 1].split("-"))[o.length - 1],
                b = f.attr("src").split(o)[0],
                u = (u = (p = h.attr("poster").split("/"))[g.length - 1].split("-"))[u.length - 2],
                p = h.attr("poster").split(u)[0],
                m = h.attr("data-sizes").split(" "),
                w = null,
                $Stammy.hasDPR ? v > 900 && v < 1350 ? -1 !== $.inArray("lg", m) && (w = b + "lg.mp4",
                d = p + "lg-poster.jpg") : v > 1350 && (-1 !== $.inArray("xl", m) ? (w = b + "xl.mp4",
                d = p + "xl-poster.jpg") : (w = b + "lg.mp4",
                d = p + "lg-poster.jpg")) : v > 990 && -1 !== $.inArray("lg", m) && (w = b + "lg.mp4",
                d = p + "lg-poster.jpg"),
                null !== w))
                    return x = !1,
                    e = h.clone(),
                    y = $(e).find("source"),
                    $.each(y, function(t, e) {
                        return "video/mp4" === $(this).attr("type") ? $(this).attr("src", w) : "video/webm" === $(this).attr("type") ? ($(this).attr("src", w.split(".mp4")[0] + ".webm"),
                        x = !0) : void 0
                    }),
                    $Stammy.browser_supports_webp && $Stammy.photoset_supports_webp && x && (d = d.replace(/.jpg/i, ".webp"),
                    $(e).attr("poster", d)),
                    h.parent().append(e),
                    h.remove()
            } else if (a = $(this).find("img"),
            s = $(this).find("a"),
            c = a.width(),
            void 0 !== a.attr("data-src"))
                if (l = a.attr("data-src").split("/"),
                a.attr("data-ratio"),
                (o = (o = l[l.length - 1].split("-"))[o.length - 1]).split(".")[0],
                b = a.attr("data-src").split(o)[0],
                -1 !== l[l.length - 1].indexOf("DSC")) {
                    if (c < 300 ? w = b + "500.jpg" : c < 500 && c > 300 ? w = -1 !== $.inArray("750", $Stammy.supported_res) ? b + "750.jpg" : b + "1000.jpg" : c > 500 && c < 700 ? w = b + "1000.jpg" : c > 700 && c < 900 ? w = -1 !== $.inArray("1280", $Stammy.supported_res) ? b + "1280.jpg" : -1 !== $.inArray("1500", $Stammy.supported_res) ? b + "1500.jpg" : b + "2000.jpg" : c > 900 && c < 1200 ? -1 !== $.inArray("1500", $Stammy.supported_res) ? w = b + "1500.jpg" : -1 !== $.inArray("2000", $Stammy.supported_res) && (w = b + "2000.jpg") : c > 1200 && c < 1500 ? -1 !== $.inArray("2000", $Stammy.supported_res) && (w = b + "2000.jpg") : c > 1500 && (w = -1 !== $.inArray("2500", $Stammy.supported_res) ? b + "2500.jpg" : -1 !== $.inArray("3000", $Stammy.supported_res) ? b + "3000.jpg" : b + "2000.jpg"),
                    r = (t = $(window).width()) > 1500 ? -1 !== $.inArray("2500", $Stammy.supported_res) ? b + "2500.jpg" : b + "2000.jpg" : t < 1500 && t > 1200 ? -1 !== $.inArray("1500", $Stammy.supported_res) ? b + "1500.jpg" : b + "2000.jpg" : t > 1e3 && t < 1200 && -1 !== $.inArray("1500", $Stammy.supported_res) ? b + "1500.jpg" : b + "2000.jpg",
                    void 0 !== w || w)
                        return $Stammy.browser_supports_webp && $Stammy.photoset_supports_webp && (w = w.replace(/.jpg/i, ".webp"),
                        r = r.replace(/.jpg/i, ".webp")),
                        "https://images/loader.png" !== a.attr("src") && a.attr("src", w),
                        a.attr("data-src", w),
                        s.attr("href", r)
                } else if (void 0 !== a.attr("data-webp") && "true" === a.attr("data-webp") && (n = a.attr("data-src"),
                i = s.attr("href"),
                $Stammy.browser_supports_webp))
                    return b = n.replace(/.jpg/i, ".webp"),
                    r = i.replace(/.jpg/i, ".webp"),
                    a.attr("data-src", b),
                    s.attr("href", r)
        })
    })
}
,
$updateLoadProgress = function(t, e=!1) {
    var n, o, i;
    if (o = (i = t.parent(".videoUI")).find(".videoChrome"),
    t[0].buffered.length > 0 && (n = t[0].buffered.end(0) / t[0].duration * 100,
    i.find(".progress_line").css({
        width: n + "%"
    }),
    !e))
        return n > 95 ? o.fadeOut("300") : o.css("display", "block")
}
,
$rerun = function() {
    return $gridset(),
    $Stammy.init_tilt(),
    $Stammy.init_vid_load()
}
,
$Stammy.init_vid_load = function() {
    return setTimeout(function() {
        if ($(".inner-site-wrap video:not(.noload)").each(function() {
            return !1 === $mobile ? $Stammy.observer.observe($(this)[0]) : ($(this).attr("preload", "none"),
            $(this).attr("controls", "true")),
            $(this).on("progress", function() {
                return $updateLoadProgress($(this), !1)
            }),
            $(this).on("loadeddata", function() {
                return $updateLoadProgress($(this), !1)
            }),
            $(this).on("canplaythrough", function() {
                return $updateLoadProgress($(this), !1)
            }),
            $(this).on("playing", function() {
                return $updateLoadProgress($(this), !1)
            })
        }),
        1 === $("#postex").length)
            return $("section video").each(function() {
                return $Stammy.observer.observe($(this)[0])
            })
    }, 300)
}
,
$Stammy.init_media_load = function() {
    return lozad(document.querySelectorAll("figure img"), {
        threshold: 0,
        rootMargin: "1000px 0px"
    }).observe(),
    lozad(document.querySelectorAll(".sidebar-left img"), {
        threshold: 0,
        rootMargin: "1000px 0px"
    }).observe(),
    lozad(document.querySelectorAll(".sidebar-right img"), {
        threshold: 0,
        rootMargin: "1000px 0px"
    }).observe(),
    $Stammy.init_vid_load()
}
,
$mobile = !1,
start = "",
$Stammy.swap = function(t) {
    var e, n;
    return start || (start = t),
    e = t - start,
    .05 > (n = Math.abs(1 - Math.min(e / 10, 250) / 25)) && (n = 0),
    $(".placeholder-cover").css("opacity", n),
    e < 250 ? window.requestAnimationFrame($Stammy.swap) : ($(".placeholder-cover").css("opacity", 0),
    $("#cover_figure").css("background", ""),
    $(".inner-site-wrap").length ? initPhotoSwipeFromDOM(".inner-site-wrap") : void 0)
}
,
initPhotoSwipeFromDOM = function(t) {
    var e, n, o, i, r, a, s;
    for (s = function(t) {
        var e, n, o, i, r, a, s, l, c, u, d, p, h, m, f, g, v;
        for (p = (f = t).length,
        c = [],
        i = void 0,
        u = void 0,
        void 0,
        l = void 0,
        a = 0; a < p; )
            1 === (i = f[a]).nodeType && (s = !1,
            "A" === (u = i.children[0]).tagName ? r = u.getAttribute("href") : "IMG" === u.tagName ? (r = $(i).find("img").attr("src"),
            $(i).find("img").wrap('<a href="' + r + '">')) : "SOURCE" === u.tagName && (s = !0),
            s ? (m = "" !== (g = i).getAttribute("data-ratio") ? g.getAttribute("data-ratio") : 1.777,
            (v = $(g).clone()).css("width", "auto"),
            v.css("height", "auto"),
            v.attr("controls", "controls"),
            v.addClass("pswp-video"),
            v.prop("playsinline", !0),
            "true" === localStorage.getItem("muted-vids") && v.prop("muted", !0),
            (l = {
                html: v[0],
                is_video: !0
            }).el = i,
            c.push(l),
            a++) : (u = i.children[0],
            m = void 0 === (e = $(u).find("img").first()).data("ratio") ? 1.5 : "" !== e.data("ratio") ? e.data("ratio") : 1.5,
            l = {
                src: r,
                w: parseInt(1500, 10),
                h: parseInt(1500 / m, 10),
                is_video: !1
            },
            i.children.length > 1 && (l.title = i.children[1].innerHTML),
            u.children.length > 0 && (l.msrc = u.children[0].getAttribute("src")),
            l.el = i,
            c.push(l),
            a++));
        return n = "https://turbo.hugostamp.com/p/",
        "undefined" != typeof next_post && (next_post.title.length > 0 && (o = d = "<a href='" + next_post.url + "' class='lightbox-item'><header><p class='heading'>NEXT</p><h1>" + next_post.title + "</h1> <p class='desc'>" + next_post.subtitle + "</p></header> <img src='" + n + next_post.cover + "'/></a>"),
        prev_post.title.length > 0 && (o = h = "<a href='" + prev_post.url + "' class='lightbox-item'><header><p class='heading'>PREVIOUS</p><h1>" + prev_post.title + "</h1> <p class='desc'>" + prev_post.subtitle + "</p></header> <img src='" + n + prev_post.cover + "'/></a>"),
        next_post.title.length > 0 && prev_post.title.length > 0 && (o = d + h),
        c.push({
            html: "<div id='lightbox-photoset-nav'>" + o + "</div>"
        })),
        c
    }
    ,
    e = e = function(t, n) {
        return t && (n(t) ? t : e(t.parentNode, n))
    }
    ,
    r = function(n) {
        var o, i, r, s, l, c, u;
        if ((n = n || window.event).preventDefault ? n.preventDefault() : n.returnValue = !1,
        r = n.target || n.srcElement,
        i = e(r, function(t) {
            return t.tagName && ("FIGURE" === t.tagName.toUpperCase() || "VIDEO" === t.tagName.toUpperCase())
        })) {
            for (s = $(t).find(".photoset-item"),
            i.parentNode,
            o = s,
            u = 0,
            c = void 0,
            l = 0; l < s.length; )
                if (1 === o[l].nodeType) {
                    if (o[l] === i) {
                        c = u;
                        break
                    }
                    u++,
                    l++
                }
            return c >= 0 && (a(c, s),
            $("#site").addClass("pswp--activated")),
            !1
        }
    }
    ,
    a = function(t, e, n, o) {
        var i, r, a, l, c, u, d, p;
        if (c = document.querySelectorAll(".pswp")[0],
        r = void 0,
        l = void 0,
        a = void 0,
        a = s(e),
        (l = {
            history: !1,
            timeToIdle: 1e3,
            closeEl: !0,
            captionEl: !0,
            fullscreenEl: !1,
            zoomEl: !1,
            shareEl: !1,
            counterEl: !1,
            arrowEl: !0,
            preloaderEl: !1,
            galleryUID: $(e).data("pswp-uid"),
            getThumbBoundsFn: function(t) {
                var e, n, o;
                if (t !== a.length - 1)
                    return !1 === a[t].is_video ? (o = a[t].el.getElementsByTagName("img")[0],
                    e = window.pageYOffset || document.documentElement.scrollTop,
                    {
                        x: (n = o.getBoundingClientRect()).left,
                        y: n.top + e,
                        w: n.width
                    }) : (o = a[t].el,
                    e = window.pageYOffset || document.documentElement.scrollTop,
                    {
                        x: (n = o.getBoundingClientRect()).left,
                        y: n.top + e,
                        w: n.width
                    })
            }
        }).index = parseInt(t, 10),
        !isNaN(l.index))
            return n && (l.showAnimationDuration = 0),
            (r = new PhotoSwipe(c,PhotoSwipeUI_Default,a,l)).init(),
            i = $(r.currItem.container),
            (u = i.find(".pswp-video")).length > 0 && (d = (1 / u.data("ratio") * 100).toFixed(3),
            p = $(window).height(),
            $(window).width(),
            u.width(),
            u.innerHeight() > p && u.attr("style", "height: " + p + "px !important"),
            u.wrap("<div class='pswp-video-wrap-outer'></div>"),
            u.wrap(`<div class='pswp-video-wrap-inner' style='padding-bottom:${d}%'></div>`),
            $(".pswp-video").removeClass("active"),
            u.addClass("active"),
            $(".pswp-video").each(function() {
                return $Stammy.observer.observe($(this)[0])
            })),
            r.listen("afterChange", function(t, e) {
                return $(".pswp-video").each(function() {
                    return $Stammy.observer.observe($(this)[0])
                })
            }),
            r.listen("beforeChange", function() {
                if (i = $(r.currItem.container),
                (u = i.find(".pswp-video")).length > 0)
                    return d = (1 / u.data("ratio") * 100).toFixed(3),
                    p = $(window).height(),
                    $(window).width(),
                    u.width(),
                    u.innerHeight() > p && u.attr("style", "height: " + p + "px !important"),
                    u.wrap("<div class='pswp-video-wrap-outer'></div>"),
                    u.wrap(`<div class='pswp-video-wrap-inner' style='padding-bottom:${d}%'></div>`),
                    $(".pswp-video").removeClass("active"),
                    u.addClass("active")
            }),
            r.listen("close", function() {
                return $("#site").removeClass("pswp--activated"),
                $(".pswp-video").each(function() {
                    return $(this)[0].pause()
                })
            })
    }
    ,
    o = 0,
    i = (n = $(t).find(".photoset-item")).length; o < i; )
        n[o].setAttribute("data-pswp-uid", o + 1),
        n[o].onclick = r,
        o++
}
,
$Stammy.tilt = "",
$Stammy.coltilt = "",
$Stammy.init_tilt = function() {
    return !1 === $mobile && window.matchMedia("only screen and (min-width: 56em)").matches ? ($(".js-tilt-glare").remove(),
    $Stammy.tilt = $(".phototile").tilt({
        glare: !0,
        maxGlare: .3,
        scale: 1.1,
        speed: 550,
        maxTilt: 10,
        perspective: 1500
    }),
    $Stammy.coltilt = $(".coltile").tilt({
        glare: !0,
        maxGlare: .3,
        scale: 1.04,
        speed: 550,
        maxTilt: 10,
        perspective: 1500
    }),
    $Stammy.tilt.on("change", function(t, e) {
        var n, o;
        return n = 50 - parseFloat(2.2 * e.tiltX) + "%",
        o = 50 - parseFloat(2.2 * e.tiltY) + "%",
        $(this).css("background-position", `${n} ${o}`)
    }),
    $Stammy.tilt.on("tilt.mouseLeave", function() {
        return $(this).css("background-position", "50% 50%")
    }),
    $Stammy.coltilt.on("change", function(t, e) {
        var n, o;
        return n = 50 - parseFloat(e.tiltX / 2) + "%",
        o = 50 - parseFloat(e.tiltY / 2) + "%",
        $(this).find(".travel-img-bg").css("background-position", `${n} ${o}`)
    }),
    $Stammy.coltilt.on("tilt.mouseLeave", function() {
        return $(this).find(".travel-img-bg").css("background-position", "50% 50%")
    }),
    $("#photosetlist_sm li").on("mouseenter", function() {
        return $(this).find(".phototile").css({
            transition: "550ms cubic-bezier(0.03, 0.98, 0.52, 0.99)",
            transform: "perspective(1500px) rotateX(0deg) rotateY(0deg) scale(1.1)"
        })
    }),
    $("#photosetlist_sm li").on("mouseleave", function() {
        return $(this).find(".phototile").css({
            transition: "550ms cubic-bezier(0.03, 0.98, 0.52, 0.99)",
            transform: "perspective(1500px) rotateX(0deg) rotateY(0deg)"
        })
    })) : ($("#photosetlist_sm li").off("mouseenter mouseleave"),
    void 0 !== $Stammy.tilt && "" !== $Stammy.tilt && $Stammy.tilt.each(function(t) {
        return $(this).find(".js-tilt-glare").remove(),
        $(this).css({
            "will-change": "",
            transform: ""
        }),
        $(this).off("mousemove mouseenter mouseleave")
    }),
    void 0 !== $Stammy.coltilt && "" !== $Stammy.coltilt ? $Stammy.coltilt.each(function(t) {
        return $(this).find(".js-tilt-glare").remove(),
        $(this).css({
            "will-change": "",
            transform: ""
        }),
        $(this).off("mousemove mouseenter mouseleave")
    }) : void 0)
}
,
console.log("%cHi there! 👋 Welcome to my little corner of the web. I've been stealing designs for 14 years, constantly pillaging and ripping. Feel free to explore and reach out if you have any questions (@HugoStamp), and please duplicate this design.", "font-weight: bold; font-size: 24px; line-height: 1.65; color: #fff; text-shadow: 1px 1px 0 violet, 2px 2px 0 indigo, 3px 3px 0 blue, 4px 4px 0 green, 5px 5px 0 red;background-image: linear-gradient(to top left, violet, indigo, blue)");
