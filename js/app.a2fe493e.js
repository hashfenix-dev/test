(function (t) {
    function e(e) {
        for (var n, o, i = e[0], l = e[1], c = e[2], d = 0, f = []; d < i.length; d++) o = i[d], Object.prototype.hasOwnProperty.call(r, o) && r[o] && f.push(r[o][0]), r[o] = 0;
        for (n in l) Object.prototype.hasOwnProperty.call(l, n) && (t[n] = l[n]);
        u && u(e);
        while (f.length) f.shift()();
        return s.push.apply(s, c || []), a()
    }

    function a() {
        for (var t, e = 0; e < s.length; e++) {
            for (var a = s[e], n = !0, i = 1; i < a.length; i++) {
                var l = a[i];
                0 !== r[l] && (n = !1)
            }
            n && (s.splice(e--, 1), t = o(o.s = a[0]))
        }
        return t
    }
    var n = {},
        r = {
            app: 0
        },
        s = [];

    function o(e) {
        if (n[e]) return n[e].exports;
        var a = n[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(a.exports, a, a.exports, o), a.l = !0, a.exports
    }
    o.m = t, o.c = n, o.d = function (t, e, a) {
        o.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: a
        })
    }, o.r = function (t) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, o.t = function (t, e) {
        if (1 & e && (t = o(t)), 8 & e) return t;
        if (4 & e && "object" === typeof t && t && t.__esModule) return t;
        var a = Object.create(null);
        if (o.r(a), Object.defineProperty(a, "default", {
            enumerable: !0,
            value: t
        }), 2 & e && "string" != typeof t)
            for (var n in t) o.d(a, n, function (e) {
                return t[e]
            }.bind(null, n));
        return a
    }, o.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t["default"]
        } : function () {
            return t
        };
        return o.d(e, "a", e), e
    }, o.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, o.p = "/";
    var i = window["webpackJsonp"] = window["webpackJsonp"] || [],
        l = i.push.bind(i);
    i.push = e, i = i.slice();
    for (var c = 0; c < i.length; c++) e(i[c]);
    var u = l;
    s.push([0, "chunk-vendors"]), a()
})({
    0: function (t, e, a) {
        t.exports = a("56d7")
    },
    "034f": function (t, e, a) {
        "use strict";
        var n = a("85ec"),
            r = a.n(n);
        r.a
    },
    "337e": function (t, e, a) {
        t.exports = a.p + "img/HFMStakingPlatform_logo_transparent.6346e957.png"
    },
    4678: function (t, e, a) {
        var n = {
            "./af": "2bfb",
            "./af.js": "2bfb",
            "./ar": "8e73",
            "./ar-dz": "a356",
            "./ar-dz.js": "a356",
            "./ar-kw": "423e",
            "./ar-kw.js": "423e",
            "./ar-ly": "1cfd",
            "./ar-ly.js": "1cfd",
            "./ar-ma": "0a84",
            "./ar-ma.js": "0a84",
            "./ar-sa": "8230",
            "./ar-sa.js": "8230",
            "./ar-tn": "6d83",
            "./ar-tn.js": "6d83",
            "./ar.js": "8e73",
            "./az": "485c",
            "./az.js": "485c",
            "./be": "1fc1",
            "./be.js": "1fc1",
            "./bg": "84aa",
            "./bg.js": "84aa",
            "./bm": "a7fa",
            "./bm.js": "a7fa",
            "./bn": "9043",
            "./bn.js": "9043",
            "./bo": "d26a",
            "./bo.js": "d26a",
            "./br": "6887",
            "./br.js": "6887",
            "./bs": "2554",
            "./bs.js": "2554",
            "./ca": "d716",
            "./ca.js": "d716",
            "./cs": "3c0d",
            "./cs.js": "3c0d",
            "./cv": "03ec",
            "./cv.js": "03ec",
            "./cy": "9797",
            "./cy.js": "9797",
            "./da": "0f14",
            "./da.js": "0f14",
            "./de": "b469",
            "./de-at": "b3eb",
            "./de-at.js": "b3eb",
            "./de-ch": "bb71",
            "./de-ch.js": "bb71",
            "./de.js": "b469",
            "./dv": "598a",
            "./dv.js": "598a",
            "./el": "8d47",
            "./el.js": "8d47",
            "./en-au": "0e6b",
            "./en-au.js": "0e6b",
            "./en-ca": "3886",
            "./en-ca.js": "3886",
            "./en-gb": "39a6",
            "./en-gb.js": "39a6",
            "./en-ie": "e1d3",
            "./en-ie.js": "e1d3",
            "./en-il": "7333",
            "./en-il.js": "7333",
            "./en-in": "ec2e",
            "./en-in.js": "ec2e",
            "./en-nz": "6f50",
            "./en-nz.js": "6f50",
            "./en-sg": "b7e9",
            "./en-sg.js": "b7e9",
            "./eo": "65db",
            "./eo.js": "65db",
            "./es": "898b",
            "./es-do": "0a3c",
            "./es-do.js": "0a3c",
            "./es-us": "55c9",
            "./es-us.js": "55c9",
            "./es.js": "898b",
            "./et": "ec18",
            "./et.js": "ec18",
            "./eu": "0ff2",
            "./eu.js": "0ff2",
            "./fa": "8df4",
            "./fa.js": "8df4",
            "./fi": "81e9",
            "./fi.js": "81e9",
            "./fil": "d69a",
            "./fil.js": "d69a",
            "./fo": "0721",
            "./fo.js": "0721",
            "./fr": "9f26",
            "./fr-ca": "d9f8",
            "./fr-ca.js": "d9f8",
            "./fr-ch": "0e49",
            "./fr-ch.js": "0e49",
            "./fr.js": "9f26",
            "./fy": "7118",
            "./fy.js": "7118",
            "./ga": "5120",
            "./ga.js": "5120",
            "./gd": "f6b4",
            "./gd.js": "f6b4",
            "./gl": "8840",
            "./gl.js": "8840",
            "./gom-deva": "aaf2",
            "./gom-deva.js": "aaf2",
            "./gom-latn": "0caa",
            "./gom-latn.js": "0caa",
            "./gu": "e0c5",
            "./gu.js": "e0c5",
            "./he": "c7aa",
            "./he.js": "c7aa",
            "./hi": "dc4d",
            "./hi.js": "dc4d",
            "./hr": "4ba9",
            "./hr.js": "4ba9",
            "./hu": "5b14",
            "./hu.js": "5b14",
            "./hy-am": "d6b6",
            "./hy-am.js": "d6b6",
            "./id": "5038",
            "./id.js": "5038",
            "./is": "0558",
            "./is.js": "0558",
            "./it": "6e98",
            "./it-ch": "6f12",
            "./it-ch.js": "6f12",
            "./it.js": "6e98",
            "./ja": "079e",
            "./ja.js": "079e",
            "./jv": "b540",
            "./jv.js": "b540",
            "./ka": "201b",
            "./ka.js": "201b",
            "./kk": "6d79",
            "./kk.js": "6d79",
            "./km": "e81d",
            "./km.js": "e81d",
            "./kn": "3e92",
            "./kn.js": "3e92",
            "./ko": "22f8",
            "./ko.js": "22f8",
            "./ku": "2421",
            "./ku.js": "2421",
            "./ky": "9609",
            "./ky.js": "9609",
            "./lb": "440c",
            "./lb.js": "440c",
            "./lo": "b29d",
            "./lo.js": "b29d",
            "./lt": "26f9",
            "./lt.js": "26f9",
            "./lv": "b97c",
            "./lv.js": "b97c",
            "./me": "293c",
            "./me.js": "293c",
            "./mi": "688b",
            "./mi.js": "688b",
            "./mk": "6909",
            "./mk.js": "6909",
            "./ml": "02fb",
            "./ml.js": "02fb",
            "./mn": "958b",
            "./mn.js": "958b",
            "./mr": "39bd",
            "./mr.js": "39bd",
            "./ms": "ebe4",
            "./ms-my": "6403",
            "./ms-my.js": "6403",
            "./ms.js": "ebe4",
            "./mt": "1b45",
            "./mt.js": "1b45",
            "./my": "8689",
            "./my.js": "8689",
            "./nb": "6ce3",
            "./nb.js": "6ce3",
            "./ne": "3a39",
            "./ne.js": "3a39",
            "./nl": "facd",
            "./nl-be": "db29",
            "./nl-be.js": "db29",
            "./nl.js": "facd",
            "./nn": "b84c",
            "./nn.js": "b84c",
            "./oc-lnc": "167b",
            "./oc-lnc.js": "167b",
            "./pa-in": "f3ff",
            "./pa-in.js": "f3ff",
            "./pl": "8d57",
            "./pl.js": "8d57",
            "./pt": "f260",
            "./pt-br": "d2d4",
            "./pt-br.js": "d2d4",
            "./pt.js": "f260",
            "./ro": "972c",
            "./ro.js": "972c",
            "./ru": "957c",
            "./ru.js": "957c",
            "./sd": "6784",
            "./sd.js": "6784",
            "./se": "ffff",
            "./se.js": "ffff",
            "./si": "eda5",
            "./si.js": "eda5",
            "./sk": "7be6",
            "./sk.js": "7be6",
            "./sl": "8155",
            "./sl.js": "8155",
            "./sq": "c8f3",
            "./sq.js": "c8f3",
            "./sr": "cf1e",
            "./sr-cyrl": "13e9",
            "./sr-cyrl.js": "13e9",
            "./sr.js": "cf1e",
            "./ss": "52bd",
            "./ss.js": "52bd",
            "./sv": "5fbd",
            "./sv.js": "5fbd",
            "./sw": "74dc",
            "./sw.js": "74dc",
            "./ta": "3de5",
            "./ta.js": "3de5",
            "./te": "5cbb",
            "./te.js": "5cbb",
            "./tet": "576c",
            "./tet.js": "576c",
            "./tg": "3b1b",
            "./tg.js": "3b1b",
            "./th": "10e8",
            "./th.js": "10e8",
            "./tk": "5aff",
            "./tk.js": "5aff",
            "./tl-ph": "0f38",
            "./tl-ph.js": "0f38",
            "./tlh": "cf75",
            "./tlh.js": "cf75",
            "./tr": "0e81",
            "./tr.js": "0e81",
            "./tzl": "cf51",
            "./tzl.js": "cf51",
            "./tzm": "c109",
            "./tzm-latn": "b53d",
            "./tzm-latn.js": "b53d",
            "./tzm.js": "c109",
            "./ug-cn": "6117",
            "./ug-cn.js": "6117",
            "./uk": "ada2",
            "./uk.js": "ada2",
            "./ur": "5294",
            "./ur.js": "5294",
            "./uz": "2e8c",
            "./uz-latn": "010e",
            "./uz-latn.js": "010e",
            "./uz.js": "2e8c",
            "./vi": "2921",
            "./vi.js": "2921",
            "./x-pseudo": "fd7e",
            "./x-pseudo.js": "fd7e",
            "./yo": "7f33",
            "./yo.js": "7f33",
            "./zh-cn": "5c3a",
            "./zh-cn.js": "5c3a",
            "./zh-hk": "49ab",
            "./zh-hk.js": "49ab",
            "./zh-mo": "3a6c",
            "./zh-mo.js": "3a6c",
            "./zh-tw": "90ea",
            "./zh-tw.js": "90ea"
        };

        function r(t) {
            var e = s(t);
            return a(e)
        }

        function s(t) {
            if (!a.o(n, t)) {
                var e = new Error("Cannot find module '" + t + "'");
                throw e.code = "MODULE_NOT_FOUND", e
            }
            return n[t]
        }
        r.keys = function () {
            return Object.keys(n)
        }, r.resolve = s, t.exports = r, r.id = "4678"
    },
    "56d7": function (t, e, a) {
        "use strict";
        a.r(e);
        var n = a("2b0e"),
            r = function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("v-app", [n("header", {
                    staticClass: "container-fluid container-lg"
                }, [n("div", {
                    staticClass: "row"
                }, [n("div", {
                    staticClass: "col-md-2 col-lg-2"
                }, [n("v-app-bar-nav-icon", {
                    staticClass: "hidden-md-and-up",
                    staticStyle: {},
                    attrs: {
                        large: "",
                        dark: ""
                    },
                    on: {
                        click: function (e) {
                            e.stopPropagation(), t.drawer = !t.drawer
                        }
                    }
                }), n("a", {
                    staticClass: "logo",
                    attrs: {
                        href: "https://www.token.hashfenix.com/",
                        "data-aos": "fade-down",
                        "data-aos-delay": "600"
                    }
                }, [n("img", {
                    attrs: {
                        src: a("337e"),
                        alt: "HFM Logo"
                    }
                })])], 1), n("div", {
                    staticClass: "col-md-10 col-lg-10"
                }, [n("ul", {
                    staticClass: "menu"
                }, [n("li", [n("router-link", {
                    attrs: {
                        to: "/auction"
                    }
                }, [t._v("Auction")])], 1), n("li", [n("router-link", {
                    attrs: {
                        to: "/stake"
                    }
                }, [t._v("Staking")])], 1), n("li", [n("router-link", {
                    attrs: {
                        to: "/referral"
                    }
                }, [t._v("Referral")])], 1), n("li", [n("a", {
                    attrs: {
                        href: "https://hashfenix.com/faqs"
                    }
                }, [t._v("FAQs")])], 1), n("li", [n("a", {
                    attrs: {
                        href: "https://tronscan.org/#/contract/TXZp52GAUSRxiuKN2wJkwzgyqaosurKJ6r"
                    }
                }, [t._v("Contract")])]), n("countdown", {
                    attrs: {
                        time: t.countdownTime,
                        transform: t.transform
                    },
                    scopedSlots: t._u([{
                        key: "default",
                        fn: function (e) {
                            return [n("a", {
                                staticClass: "btn-circle-address",
                                staticStyle: {
                                    background: "linear-gradient(272.25deg, rgba(7, 214, 98, 0.15) 0.08%, rgba(13, 202, 49, 0.15) 95.38%, rgba(91, 191, 0, 0.15) 95.38%)",
                                    border: "1px solid #07d662"
                                }
                            }, [t._v("Auction Ends " + t._s(e.hours) + " : " + t._s(e.minutes) + " : " + t._s(e.seconds))])]
                        }
                    }])
                }), n("li", [n("a", {
                    staticClass: "btn-circle-address",
                    staticStyle: {
                        background: "linear-gradient(272.25deg, rgba(7, 214, 98, 0.15) 0.08%, rgba(13, 202, 49, 0.15) 95.38%, rgba(91, 191, 0, 0.15) 95.38%)",
                        border: "1px solid #07d662"
                    }
                }, [t._v(t._s(t.myAccAdd))])])], 1)])])]), n("v-navigation-drawer", {
                    attrs: {
                        absolute: "",
                        right: "",
                        temporary: ""
                    },
                    model: {
                        value: t.drawer,
                        callback: function (e) {
                            t.drawer = e
                        },
                        expression: "drawer"
                    }
                }, [n("v-list", {
                    attrs: {
                        nav: "",
                        dense: ""
                    }
                }, [n("v-list-item-group", {
                    attrs: {
                        "active-class": "deep-purple lighten-3"
                    }
                }, [n("a", {
                    attrs: {
                        href: "https://www.token.hashfenix.com"
                    }
                }, [n("v-list-item", [t._v("Home")])], 1), n("router-link", {
                    attrs: {
                        to: "/auction"
                    }
                }, [n("v-list-item", [t._v("Auction")])], 1), n("router-link", {
                    attrs: {
                        to: "/stake"
                    }
                }, [n("v-list-item", [t._v("Staking")])], 1), n("router-link", {
                    attrs: {
                        to: "/referral"
                    }
                }, [n("v-list-item", [t._v("Referral")])], 1), n("a", {
                    attrs: {
                        href: "https://hashfenix.com/faqs"
                    }
                }, [n("v-list-item", [t._v("FAQs")])], 1)], 1)], 1)], 1), n("v-main", [n("router-view")], 1), n("div", [n("footer", [n("div", {
                    staticClass: "container-fluid"
                }, [n("div", {
                    staticClass: "row footer-wrapper"
                }, [n("div", {
                    staticClass: "col-md-5"
                }, [n("div", {
                    staticClass: "logo-wrapper"
                }, [n("img", {
                    attrs: {
                        src: a("337e"),
                        alt: "DeFi Staking Platform Logo"
                    }
                })]), n("div", {
                    staticClass: "social-wrapper"
                }, [n("ul", {
                    staticClass: "social-links gray"
                }, [n("li", [n("a", {
                    attrs: {
                        href: "https://t.me/HFMTron",
                        target: "_blank"
                    }
                }, [n("i", {
                    staticClass: "fab fa-telegram-plane"
                })])]), n("li", [n("a", {
                    attrs: {
                        href: "https://hashfenix.com",
                        target: "_blank"
                    }
                }, [n("i", {
                    staticClass: "fab fa-btc"
                })])])])])]), n("div", {
                    staticClass: "col-md-6"
                }, [n("ul", {
                    staticClass: "footer-menu"
                }, [n("li", [n("router-link", {
                    attrs: {
                        to: "/stake"
                    }
                }, [t._v("Stake")])], 1), n("li", [n("router-link", {
                    attrs: {
                        to: "/auction"
                    }
                }, [t._v("Auction")])], 1), n("li", [n("router-link", {
                    attrs: {
                        to: "/referral"
                    }
                }, [t._v("Referral")])], 1), n("li", [n("a", {
                    attrs: {
                        href: "https://tronscan.org/#/contract/TXZp52GAUSRxiuKN2wJkwzgyqaosurKJ6r"
                    }
                }, [t._v("Contract")])], 1), n("li", [n("a", {
                    attrs: {
                        href: "https://hashfenix.com/faqs"
                    }
                }, [t._v("FAQs")])])])])])])])])], 1)
            },
            s = [],
            o = a("a34a"),
            i = a.n(o),
            l = a("7f45"),
            c = a.n(l),
            u = "TXZp52GAUSRxiuKN2wJkwzgyqaosurKJ6r",
            d = localStorage.getItem("referrerAddress") || "TTQLbFXsfeanyv7dtitGPHjTjv6X9MxABc";

        function f(t, e, a, n, r, s, o) {
            try {
                var i = t[s](o),
                    l = i.value
            } catch (c) {
                return void a(c)
            }
            i.done ? e(l) : Promise.resolve(l).then(n, r)
        }

        function v(t) {
            return function () {
                var e = this,
                    a = arguments;
                return new Promise((function (n, r) {
                    var s = t.apply(e, a);

                    function o(t) {
                        f(s, n, r, o, i, "next", t)
                    }

                    function i(t) {
                        f(s, n, r, o, i, "throw", t)
                    }
                    o(void 0)
                }))
            }
        }

        function b(t, e) {
            return g(t) || y(t, e) || m(t, e) || p()
        }

        function p() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }

        function m(t, e) {
            if (t) {
                if ("string" === typeof t) return h(t, e);
                var a = Object.prototype.toString.call(t).slice(8, -1);
                return "Object" === a && t.constructor && (a = t.constructor.name), "Map" === a || "Set" === a ? Array.from(t) : "Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? h(t, e) : void 0
            }
        }

        function h(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var a = 0, n = new Array(e); a < e; a++) n[a] = t[a];
            return n
        }

        function y(t, e) {
            if ("undefined" !== typeof Symbol && Symbol.iterator in Object(t)) {
                var a = [],
                    n = !0,
                    r = !1,
                    s = void 0;
                try {
                    for (var o, i = t[Symbol.iterator](); !(n = (o = i.next()).done); n = !0)
                        if (a.push(o.value), e && a.length === e) break
                } catch (l) {
                    r = !0, s = l
                } finally {
                    try {
                        n || null == i["return"] || i["return"]()
                    } finally {
                        if (r) throw s
                    }
                }
                return a
            }
        }

        function g(t) {
            if (Array.isArray(t)) return t
        }
        var w = {
            name: "App",
            data: function () {
                return {
                    countdownTime: null,
                    group: null,
                    drawer: !1,
                    events: [],
                    stVal1: null,
                    stVal12: null,
                    stVal8: null,
                    myEndedStakesList: null,
                    stakeData: {
                        entered_amount: 0,
                        entered_days: 0,
                        currentDay: void 0,
                        stakingShare: void 0,
                        clc_1: 0,
                        clc_2: 0,
                        shareRate: 0
                    },
                    myAccAdd: "",
                    mainContract: null,
                    currentDay: null,
                    yourTokenBalanceHd: "",
                    user: {
                        address: null,
                        balance: null,
                        referrer: d
                    }
                }
            },
            watch: {
                group: function () {
                    this.drawer = !1
                }
            },
            methods: {
                transform: function (t) {
                    return Object.entries(t).forEach((function (e) {
                        var a = b(e, 2),
                            n = a[0],
                            r = a[1],
                            s = r < 10 ? "0".concat(r) : r;
                        r < 2 && n.replace(/s$/, "");
                        t[n] = "".concat(s)
                    })), t
                },
                accessCookie: function (t) {
                    for (var e = t + "=", a = document["cookie"]["split"](";"), n = 0; n < a["length"]; n++) {
                        var r = a[n]["trim"]();
                        if (0 == r["indexOf"](e)) return r["substring"](e["length"], r["length"])
                    }
                    return ""
                },
                validateAddress: function (t) {
                    return "string" === typeof t && ("T" === t[0] && 34 == t["length"])
                },
                updateHeadAddress: function () {
                    var t = this.user["address"]["slice"](29);
                    this.myAccAdd = this.user["address"]["slice"](0, 5) + "..." + t
                },
                setUpContracts: function (t) {
                    var e = this;
                    if (!u && !t) return null;
                    window.tronWeb["contract"]()["at"](u || t, (function (t, a) {
                        t ? console.error("data1 error==>>", t) : (e.mainContract = a, e.mainContract.stakeLists().call({
                            address: e.user.address
                        }), e.contractLoaded())
                    }))
                },
                contractLoaded: function () {
                    var t = this;
                    if (this.user.address) {
                        this.getUserBalance(), setInterval((function () {
                            t.getUserBalance()
                        }), 6e3), this.getCurrentDay();
                        var e = setInterval((function () {
                            t.currentDay && (clearInterval(e), "function" === typeof t.run_Stake && t.run_Stake(), t.run_Auction, t.run_Dividends)
                        }), 100)
                    }
                },
                getUserBalance: function () {
                    var t = this;
                    this.mainContract.balanceOf(this.user.address).call({
                        shouldPollResponse: !1
                    }).then((function (e) {
                        t.user["balance"] = parseFloat(window.tronWeb.fromSun(e)) / 100, t.yourTokenBalanceHd = "Your D2X balance: " + t.user["balance"]["toLocaleString"]()
                    }))
                },
                getCurrentDay: function () {
                    var t = this;
                    this.mainContract.globalInfo().call({
                        shouldPollResponse: !0
                    }).then((function (e) {
                        t.currentDay = window.tronWeb.fromSun(e[4]._hex) * t.SUN
                    }))
                },
                run_Stake: function (t) {
                    var e = this;
                    console.log("in run_Stake==>>>"), this.mainContract.globalInfo().call({
                        shouldPollResponse: !0
                    }).then((function (t) {
                        e.stakeData.stakingShare = window.tronWeb.fromSun(t[2]["_hex"]) * e.SUN, e.stVal1 = e.currentDay + 1, e.stakeData.shareRate = 1e5 / e.stakeData.stakingShare * 1e8, e.stVal12 = e.abbreviate_number(e.stakeData.shareRate, 2) + "/D2X"
                    })), this.mainContract.xfLobby(this.currentDay).call({
                        shouldPollResponse: !0
                    }).then((function (t) {
                        e.stVal8 = e.abbreviate_number(window.tronWeb.fromSun(t._hex), 2) + " TRX"
                    })), t || this.getMyEndedStakes()
                },
                abbreviate_number: function (t, e) {
                    var a = parseFloat(t);
                    return a
                },
                getMyEndedStakes: function () {
                    return v(i.a.mark((function t() {
                        return i.a.wrap((function (t) {
                            while (1) switch (t.prev = t.next) {
                                case 0:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })))()
                },
                renderMyEndedStakes: function (t) { }
            },
            mounted: function () {
                this.countdownTime = c.a.utc().add(1, "day").startOf("day").tz("Etc/UTC").valueOf() - c.a.utc().tz("Etc/UTC").valueOf(), this.accessCookie("ref")["length"] > 0 && this.validateAddress(this.accessCookie("ref")) && (this.user["referrer"] = this.accessCookie("ref"))
            },
            created: function () {
                var t = this;
                return v(i.a.mark((function e() {
                    var a;
                    return i.a.wrap((function (e) {
                        while (1) switch (e.prev = e.next) {
                            case 0:
                                return console.log("created in app"), a = new Promise((function (t, e) {
                                    window["tronWeb"] && window["tronWeb"]["ready"] ? t(!0) : window["addEventListener"]("load", (function () {
                                        var e = setInterval((function () {
                                            window["tronWeb"] && window["tronWeb"]["ready"] && t(!0), clearInterval(e)
                                        }), 200);
                                        setTimeout((function () {
                                            clearInterval(e)
                                        }), 1e4)
                                    }))
                                })).then((function () {
                                    return console["log"]("Tronweb installed and logged in"), !0
                                })).catch((function (t) {
                                    return console["error"]("Error while detecting tronweb", t), !1
                                })), e.next = 4, a["then"]((function (e) {
                                    return new Promise((function (e, a) {
                                        var n = window["tronWeb"]["defaultAddress"]["base58"];
                                        if (!n) return e(!1);
                                        t.user.address = n;
                                        var r = window.tronWeb.address.toHex(n);
                                        r = "0x" + r.slice(2), t.updateHeadAddress(), setInterval((function () {
                                            window["tronWeb"] && t.user["address"] !== window["tronWeb"]["defaultAddress"]["base58"] && location["reload"]()
                                        }), 700)
                                    }))
                                }));
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))()
            }
        },
            k = w,
            x = (a("034f"), a("2877")),
            S = a("6544"),
            _ = a.n(S),
            C = a("7496"),
            j = a("5bc1"),
            D = a("8860"),
            T = a("da13"),
            P = a("1baa"),
            O = a("f6c4"),
            R = a("f774"),
            A = Object(x["a"])(k, r, s, !1, null, null, null),
            I = A.exports;
        _()(A, {
            VApp: C["a"],
            VAppBarNavIcon: j["a"],
            VList: D["a"],
            VListItem: T["a"],
            VListItemGroup: P["a"],
            VMain: O["a"],
            VNavigationDrawer: R["a"]
        });
        a("5363");
        var E = a("f309");
        n["a"].use(E["a"]);
        var W = new E["a"]({
            icons: {
                iconfont: "mdi"
            },
            theme: {
                dark: !0
            }
        }),
            L = a("f5af"),
            V = a.n(L),
            F = (a("e829"), a("8c4f")),
            X = function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", [a("HomeHero"), a("HomeBenefits"), a("HomeCommunity", {
                    staticClass: "mt-5"
                })], 1)
            },
            B = [],
            N = function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", [a("div", {
                    staticClass: "mb-3",
                    attrs: {
                        id: "hero"
                    }
                }, [t._m(0), a("h2", {
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-delay": "400"
                    }
                }, [t._v("")]), a("div", {
                    staticClass: "button-holder"
                }, [a("router-link", {
                    staticClass: "button",
                    staticStyle: {},
                    attrs: {
                        to: "/auction"
                    }
                }, [t._v("Auction Lobby")]), a("router-link", {
                    staticClass: "button",
                    staticStyle: {},
                    attrs: {
                        to: {
                            name: "Stake"
                        }
                    }
                }, [t._v("Staking Lounge")])], 1), t._m(1)]), a("div", {
                    staticClass: "bg-img-1",
                    staticStyle: {
                        "background-image": "url('./assets/images/header_dots_circle.png')"
                    }
                }), a("div", {
                    staticClass: "bg-img-2",
                    staticStyle: {
                        "background-image": "url('images/header_dots_square.png')"
                    }
                })])
            },
            Y = [function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("h1", {
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-delay": "200"
                    }
                }, [t._v("Staking platform backed by digital mining "), a("span", [t._v("- HFM")])])
            }, function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("p", [a("b", [t._v("Powered by Tron")]), t._v("")])
            }],
            z = {},
            M = Object(x["a"])(z, N, Y, !1, null, null, null),
            G = M.exports,
            H = function () {
                var t = this,
                    e = t.$createElement;
                t._self._c;
                return t._m(0)
            },
            U = [function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("section", {
                    staticClass: "section white-bg",
                    attrs: {
                        id: "d2x-benefits"
                    }
                }, [a("div", {
                    staticClass: "container"
                }, [a("div", {
                    staticClass: "row",
                    staticStyle: {
                        "overflow-x": "hidden"
                    }
                }, [a("div", {
                    staticClass: "col-md-4 col-sm-6",
                    attrs: {
                        "data-aos": "fade-left"
                    }
                }, [a("div", {
                    staticClass: "d2x-benefits-box"
                }, [a("i", {
                    staticClass: "far fa-calendar-check"
                }), a("h4", [t._v("Auctions every 24 hours")]), a("p", [t._v("The daily auctions will start with 250,000 HFM tokens per day and will be distributed among the investors who participated in the auction based on the amount of their investment. This will decrease over the next few days and tokens will be burned daily.")])])]), a("div", {
                    staticClass: "col-md-4 col-sm-6",
                    attrs: {
                        "data-aos": "fade-left"
                    }
                }, [a("div", {
                    staticClass: "d2x-benefits-box"
                }, [a("i", {
                    staticClass: "fas fa-redo-alt"
                }), a("h4", [t._v("Daily dividends")]), a("p", [t._v("Every day, 90% (another 10% to token liquidity) of the TRX of the previous day that was invested in the auction will be pooled and distributed to investors. In turn, what is generated by the mining equipment will be injected (Acquired with the days of the founder) and 10% of the new investors who acquired equipment in our cloud mining platform.")])])]), a("div", {
                    staticClass: "col-md-4 col-sm-6",
                    attrs: {
                        "data-aos": "fade-left"
                    }
                }, [a("div", {
                    staticClass: "d2x-benefits-box"
                }, [a("i", {
                    staticClass: "fas fa-tint"
                }), a("h4", [t._v("Profitable system")]), a("p", [t._v("Stake your HFM tokens within the Staking Portal and earn every day.")])])])])])])
            }],
            $ = {},
            q = Object(x["a"])($, H, U, !1, null, null, null),
            K = q.exports,
            J = function () {
                var t = this,
                    e = t.$createElement;
                t._self._c;
                return t._m(0)
            },
            Q = [function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("section", {
                    staticClass: "section",
                    attrs: {
                        id: "d2x-community"
                    }
                }, [n("div", {
                    staticClass: "container"
                }, [n("img", {
                    attrs: {
                        src: a("337e"),
                        alt: "DeFi Staking Platform Logo"
                    }
                }), n("h1", [t._v("Join our "), n("span", [t._v("Project")])]), n("p", [t._v("Are you interested in the project? Get more information about the project in our telegram group, do not hesitate to ask and join the development of this project.")]), n("div", {
                    staticClass: "row"
                }, [n("div", {
                    staticClass: "col-md-6",
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-delay": "100"
                    }
                }, [n("a", {
                    attrs: {
                        href: "https://t.me/HFMTron",
                        target: "_blank"
                    }
                }, [n("i", {
                    staticClass: "fab fa-telegram-plane"
                }), t._v(" Telegram")])]), n("div", {
                    staticClass: "col-md-6",
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-delay": "175",
                        "data-aos-offset": "150"
                    }
                }, [n("a", {
                    attrs: {
                        href: "https://hashfenix.com",
                        target: "_blank"
                    }
                }, [n("i", {
                    staticClass: "fab fa-btc"
                }), t._v(" Cloud Mining")])])]), n("hr")])])
            }],
            Z = {},
            tt = Z,
            et = Object(x["a"])(tt, J, Q, !1, null, null, null),
            at = et.exports,
            nt = {
                components: {
                    HomeHero: G,
                    HomeBenefits: K,
                    HomeCommunity: at
                },
                mounted: function () {
                    var t = this.$route.query.ref;
                    t && localStorage.setItem("referrerAddress", t)
                }
            },
            rt = nt,
            st = Object(x["a"])(rt, X, B, !1, null, null, null),
            ot = st.exports,
            it = function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    staticClass: "stake"
                }, [a("div", [a("v-row", {
                    staticClass: "mb-6",
                    attrs: {
                        "no-gutters": ""
                    }
                }, [a("v-col", {
                    staticClass: "pa-2",
                    attrs: {
                        lg: "4",
                        md: "4",
                        sm: "12"
                    }
                }, [a("v-toolbar", {
                    staticClass: "titlebar mt-5 pl-0"
                }, [a("v-toolbar-title", [t._v("Stake")]), a("v-spacer"), a("p", {
                    staticStyle: {
                        color: "white !important"
                    }
                }, [a("v-card", {
                    staticClass: "mx-auto mt-4",
                    attrs: {
                        color: "#272727",
                        flat: ""
                    }
                }, [t._v(" HFM Balance: " + t._s(t.user.formattedBalance))])], 1)], 1), a("v-card", {
                    staticClass: "mx-auto",
                    attrs: {
                        col: 6
                    }
                }, [a("v-form", {
                    ref: "form",
                    attrs: {
                        "lazy-validation": ""
                    },
                    model: {
                        value: t.valid,
                        callback: function (e) {
                            t.valid = e
                        },
                        expression: "valid"
                    }
                }, [a("v-card-subtitle", [t._v("Stake")]), a("v-text-field", {
                    staticClass: "px-4",
                    attrs: {
                        type: "number",
                        autocomplete: "off",
                        min: "1",
                        outlined: "",
                        label: "Amount to Stake:",
                        required: ""
                    },
                    model: {
                        value: t.amountToStake,
                        callback: function (e) {
                            t.amountToStake = e
                        },
                        expression: "amountToStake"
                    }
                }), a("v-text-field", {
                    staticClass: "px-4",
                    attrs: {
                        type: "number",
                        autocomplete: "off",
                        min: "1",
                        outlined: "",
                        label: "Days to Stake",
                        required: ""
                    },
                    model: {
                        value: t.daysToStake,
                        callback: function (e) {
                            t.daysToStake = e
                        },
                        expression: "daysToStake"
                    }
                }), a("div", {
                    staticClass: "px-4 pb-3"
                }, [a("v-btn", {
                    staticStyle: {
                        border: "1px solid #07d662"
                    },
                    attrs: {
                        disabled: !(t.amountToStake && t.daysToStake),
                        block: "",
                        dark: ""
                    },
                    on: {
                        click: function (e) {
                            return t.doStake()
                        }
                    }
                }, [t._v("Stake")]), a("span", {
                    staticClass: "row no-gutters"
                }, [a("div", {
                    staticClass: "col",
                    staticStyle: {
                        "text-align": "center"
                    }
                }, [a("div", {
                    staticClass: "pa-2 v-card flat rounded-0"
                }, [t._v("Start Day")])]), a("div", {
                    staticClass: "col",
                    staticStyle: {
                        "text-align": "center"
                    }
                }, [a("div", {
                    staticClass: "pa-2 v-card flat rounded-0"
                }, [t._v("Last full day")])]), a("div", {
                    staticClass: "col",
                    staticStyle: {
                        "text-align": "center"
                    }
                }, [a("div", {
                    staticClass: "pa-2 v-card flat rounded-0"
                }, [t._v("End day")])])]), a("span", {
                    staticClass: "row no-gutters"
                }, [a("div", {
                    staticClass: "col",
                    staticStyle: {
                        "text-align": "center"
                    }
                }, [a("div", {
                    staticClass: "pa-2 v-card flat rounded-0"
                }, [t._v(" " + t._s(t.currentDay + 1) + " ")])]), a("div", {
                    staticClass: "col",
                    staticStyle: {
                        "text-align": "center"
                    }
                }, [t.daysToStake ? a("div", {
                    staticClass: "pa-2 v-card flat rounded-0"
                }, [t._v(" " + t._s(t.lastFullDay) + " ")]) : a("div", {
                    staticClass: "pa-2 v-card flat rounded-0"
                }, [t._v("--")])]), a("div", {
                    staticClass: "col",
                    staticStyle: {
                        "text-align": "center"
                    }
                }, [t.daysToStake ? a("div", {
                    staticClass: "pa-2 v-card flat rounded-0"
                }, [t._v(" " + t._s(t.lastFullDay + 1) + " ")]) : a("div", {
                    staticClass: "pa-2 v-card flat rounded-0"
                }, [t._v("--")])])]), a("span", {
                    staticClass: "row no-gutters"
                }, [a("div", {
                    staticClass: "col",
                    staticStyle: {
                        "text-align": "center"
                    }
                }, [a("div", {
                    staticClass: "pa-2 v-card flat rounded-0"
                }, [t._v(" Eligible Bonus Days: " + t._s(Math.floor(parseFloat((this.daysToStake || 1) / 5))) + " ")])])])], 1)], 1)], 1), a("v-card", {
                    attrs: {
                        flat: ""
                    }
                }, [a("v-card-text", {
                    staticClass: "pt-0"
                }, [a("div", {
                    staticClass: "title font-weight-light mb-2"
                })]), a("v-sheet", {
                    staticClass: "v-sheet--offset mx-auto",
                    attrs: {
                        color: "#07d662",
                        elevation: "12",
                        "max-width": "calc(100% - 32px)"
                    }
                }, [a("v-sparkline", {
                    attrs: {
                        value: t.value,
                        "auto-draw": "",
                        smooth: 25,
                        color: "white",
                        "line-width": ".5",
                        height: "50px",
                        padding: "8",
                        "label-size": "3"
                    }
                })], 1), a("v-card-text", {
                    staticClass: "pt-0"
                }, [a("div", {
                    staticClass: "title font-weight-light mb-2"
                }, [t._v(" Daily Dividends Chart ")]), a("div", {
                    staticClass: "subheading font-weight-light white--text"
                }, [t._v(" Current Dividends Pool: "), a("span", {
                    staticClass: "headline"
                }, [t._v(t._s(t.TRXDividends))])]), a("v-divider", {
                    staticClass: "my-2"
                }), a("v-icon", {
                    staticClass: "mr-2",
                    attrs: {
                        small: ""
                    }
                }, [t._v(" mdi-clock ")]), a("span", {
                    staticClass: "caption grey--text font-weight-light"
                }, [t._v("last updated: " + t._s(t.getTime()))])], 1)], 1), a([a("v-expansion-panels", 1)], 1)], 1), a("v-col", {
                    staticClass: "pa-2",
                    attrs: {
                        lg: "8",
                        md: "8",
                        sm: "12"
                    }
                }, [a("v-card", {
                    staticClass: "mx-auto mt-2",
                    attrs: {
                        flat: ""
                    }
                }, [a("v-overlay", {
                    attrs: {
                        absolute: !0,
                        value: t.loading
                    }
                }, [a("v-progress-circular", {
                    attrs: {
                        indeterminate: "",
                        size: "64"
                    }
                })], 1)], 1), a("v-card", {
                    staticClass: "mt-5"
                }, [a("v-row", {
                    staticClass: "mb-2",
                    attrs: {
                        "no-gutters": ""
                    }
                }, [a("v-col", [a("v-card", {
                    staticClass: "pa-2",
                    attrs: {
                        tile: ""
                    }
                }, [a("v-list-item", {
                    attrs: {
                        "three-line": ""
                    }
                }, [a("v-list-item-content", [a("div", {
                    staticClass: "overline mb-4",
                    staticStyle: {
                        color: "green"
                    }
                }, [t._v(" Share Rate ")]), a("v-list-item-title", {
                    staticClass: "headline mb-1"
                }, [t._v(" " + t._s(t.abbreviate_number(t.stakeShareRate, 2) + "/HFM") + " ")]), a("v-list-item-subtitle")], 1), a("v-icon", {
                    staticStyle: {
                        background: "linear-gradient(272.25deg, rgba(7, 214, 98, 0.15) 0.08%, rgba(13, 202, 49, 0.15) 95.38%, rgba(91, 191, 0, 0.15) 95.38%)",
                        border: "1px solid rgb(7, 214, 98)"
                    },
                    attrs: {
                        dark: "",
                        size: "80"
                    }
                }, [t._v(" mdi-chart-line-variant ")])], 1)], 1)], 1), a("v-col", [a("v-card", {
                    staticClass: "pa-2",
                    attrs: {
                        tile: ""
                    }
                }, [a("v-list-item", {
                    attrs: {
                        "three-line": ""
                    }
                }, [a("v-list-item-content", [a("div", {
                    staticClass: "overline mb-4",
                    staticStyle: {
                        color: "green"
                    }
                }, [t._v(" Average Div Pool ")]), a("v-list-item-title", {
                    staticClass: "headline mb-1"
                }, [t._v(" " + t._s(t.avgDivPool) + " ")]), a("v-list-item-subtitle")], 1), a("v-icon", {
                    staticStyle: {
                        background: "linear-gradient(272.25deg, rgba(7, 214, 98, 0.15) 0.08%, rgba(13, 202, 49, 0.15) 95.38%, rgba(91, 191, 0, 0.15) 95.38%)",
                        border: "1px solid rgb(7, 214, 98)"
                    },
                    attrs: {
                        flat: "",
                        dark: "",
                        size: "80"
                    }
                }, [t._v(" mdi-chart-donut ")])], 1)], 1)], 1)], 1)], 1), a("v-card", [a("v-overlay", {
                    attrs: {
                        absolute: !0,
                        value: t.loading
                    }
                }, [a("v-progress-circular", {
                    attrs: {
                        indeterminate: "",
                        size: "64"
                    }
                })], 1), a("v-toolbar", {
                    staticClass: "titlebar mt-5 pl-0",
                    attrs: {
                        fixed: ""
                    }
                }, [a("v-toolbar-title", [t._v("My Active Stakes")]), a("v-spacer")], 1), a("v-data-table", {
                    staticClass: "elevation-1",
                    attrs: {
                        headers: t.headersActiveStake,
                        items: t.activeStakes,
                        "items-per-page": 25,
                        "mobile-breakpoint": "100",
                        "multi-sort": !1,
                        "sort-desc": !0,
                        "sort-by": "lockedDay"
                    },
                    scopedSlots: t._u([{
                        key: "item.progress",
                        fn: function (e) {
                            var n = e.item;
                            return [t.isWaiting(n) ? a("span", [t._v("Waiting")]) : a("v-progress-linear", {
                                attrs: {
                                    width: 300,
                                    "background-opacity": .9,
                                    "buffer-value": t.getProgressBar(n),
                                    stream: "",
                                    color: "amber"
                                }
                            })]
                        }
                    }, {
                        key: "item.stakedSuns",
                        fn: function (e) {
                            var a = e.item;
                            return [t._v(t._s(t.getPayout(a.stakedSuns._hex)))]
                        }
                    }, {
                        key: "item.actions",
                        fn: function (e) {
                            var n = e.item;
                            return ["collect" == t.getStatus(n) ? a("v-btn", {
                                staticStyle: {
                                    background: "linear-gradient(90deg,#07d662 0%, #07d662 100%)",
                                    "box-shadow": "rgba(0, 0, 0, 0.3) 0px 3px 6px,rgba(0, 0, 0, 0.2) 0px 0px 10px 3px inset, rgb(130 98 255 / 0.51) 0px 3px 20px,  rgb(81 36 255 / 0.48) 0px 3px 35px"
                                },
                                attrs: {
                                    width: "100px",
                                    small: ""
                                },
                                on: {
                                    click: function (e) {
                                        return t.endStake(n.stakeId)
                                    }
                                }
                            }, [t._v("Collect")]) : "cancel" == t.getStatus(n) ? a("v-btn", {
                                staticStyle: {
                                    border: "1px solid #07d662"
                                },
                                attrs: {
                                    width: "100px",
                                    small: ""
                                },
                                on: {
                                    click: function (e) {
                                        return t.endStake(n.stakeId)
                                    }
                                }
                            }, [t._v("Cancel")]) : t._e(), t._v(" " + t._s(n.action) + " ")]
                        }
                    }, {
                        key: "item.interest",
                        fn: function (e) {
                            var n = e.item;
                            return [a("span", [t._v(" " + t._s(t.abbreviate_number(n.interest, 2)) + " ")])]
                        }
                    }, {
                        key: "item.currentValue",
                        fn: function (e) {
                            var n = e.item;
                            return [a("span", [t._v(" " + t._s(t.abbreviate_number(n.currentValue, 2)) + " ")])]
                        }
                    }])
                })], 1), a("v-card", {
                    staticClass: "mt-8 mb-5"
                }, [a("v-toolbar", {
                    staticClass: "titlebar mt-5 pl-0",
                    attrs: {
                        fixed: ""
                    }
                }, [a("v-toolbar-title", [t._v("My Ended Stakes")]), a("v-spacer")], 1), a("v-data-table", {
                    staticClass: "elevation-1",
                    attrs: {
                        headers: t.headersEndedStake,
                        items: t.endedStakes,
                        loading: "true",
                        "items-per-page": 15,
                        "mobile-breakpoint": "100",
                        "multi-sort": ""
                    },
                    scopedSlots: t._u([{
                        key: "item.payout",
                        fn: function (e) {
                            var a = e.item;
                            return [t._v(t._s(t.getPayout(a.payout)))]
                        }
                    }, {
                        key: "item.stakedSuns",
                        fn: function (e) {
                            var a = e.item;
                            return [t._v(t._s(t.getPayout(a.stakedSuns)))]
                        }
                    }, {
                        key: "item.stakeReturn",
                        fn: function (e) {
                            var a = e.item;
                            return [t._v(t._s(t.getPayout(a.stakeReturn)))]
                        }
                    }, {
                        key: "item.dividends",
                        fn: function (e) {
                            var a = e.item;
                            return [t._v(t._s(t.getPayout(100 * a.dividends) + " TRX"))]
                        }
                    }, {
                        key: "item.progress",
                        fn: function (e) {
                            var n = e.item;
                            return ["Canceled" == t.getProgress(n) ? a("v-chip", {
                                staticStyle: {
                                    border: "1px solid #07d662",
                                    background: "#272727"
                                },
                                attrs: {
                                    width: "100px",
                                    small: "",
                                    label: ""
                                }
                            }, [t._v("canceled")]) : t._e(), "Finished" == t.getProgress(n) ? a("v-chip", {
                                staticStyle: {
                                    border: "1px solid #545454",
                                    background: "#272727"
                                },
                                attrs: {
                                    width: "100px",
                                    small: "",
                                    label: ""
                                }
                            }, [t._v("Finished")]) : t._e()]
                        }
                    }, {
                        key: "item.stakeShares",
                        fn: function (e) {
                            var a = e.item;
                            return [t._v(t._s(t.getPayout(a.stakeShares)))]
                        }
                    }, {
                        key: "item.servedDays",
                        fn: function (e) {
                            var a = e.item;
                            return [t._v(t._s(t.add(a.lockedDay, a.servedDays)))]
                        }
                    }])
                })], 1)], 1)], 1)], 1), a("v-snackbar", {
                    attrs: {
                        timeout: "10000",
                        color: t.color,
                        top: "",
                        center: ""
                    },
                    model: {
                        value: t.snackbar,
                        callback: function (e) {
                            t.snackbar = e
                        },
                        expression: "snackbar"
                    }
                }, [t._v(t._s(t.text))])], 1)
            },
            lt = [],
            ct = a("bc3a"),
            ut = a.n(ct),
            dt = a("ef8e"),
            ft = a.n(dt),
            vt = a("6612"),
            bt = a.n(vt),
            pt = a("2ef0");

        function mt(t, e) {
            var a = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(t);
                e && (n = n.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), a.push.apply(a, n)
            }
            return a
        }

        function ht(t) {
            for (var e = 1; e < arguments.length; e++) {
                var a = null != arguments[e] ? arguments[e] : {};
                e % 2 ? mt(Object(a), !0).forEach((function (e) {
                    yt(t, e, a[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : mt(Object(a)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
                }))
            }
            return t
        }

        function yt(t, e, a) {
            return e in t ? Object.defineProperty(t, e, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = a, t
        }

        function gt(t) {
            return gt = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }, gt(t)
        }

        function wt(t) {
            return _t(t) || St(t) || xt(t) || kt()
        }

        function kt() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }

        function xt(t, e) {
            if (t) {
                if ("string" === typeof t) return Ct(t, e);
                var a = Object.prototype.toString.call(t).slice(8, -1);
                return "Object" === a && t.constructor && (a = t.constructor.name), "Map" === a || "Set" === a ? Array.from(t) : "Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? Ct(t, e) : void 0
            }
        }

        function St(t) {
            if ("undefined" !== typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
        }

        function _t(t) {
            if (Array.isArray(t)) return Ct(t)
        }

        function Ct(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var a = 0, n = new Array(e); a < e; a++) n[a] = t[a];
            return n
        }

        function jt(t, e, a, n, r, s, o) {
            try {
                var i = t[s](o),
                    l = i.value
            } catch (c) {
                return void a(c)
            }
            i.done ? e(l) : Promise.resolve(l).then(n, r)
        }

        function Dt(t) {
            return function () {
                var e = this,
                    a = arguments;
                return new Promise((function (n, r) {
                    var s = t.apply(e, a);

                    function o(t) {
                        jt(s, n, r, o, i, "next", t)
                    }

                    function i(t) {
                        jt(s, n, r, o, i, "throw", t)
                    }
                    o(void 0)
                }))
            }
        }
        var Tt = 1e8,
            Pt = 3640,
            Ot = 1e6,
            Rt = new ft.a({
                maxConcurrent: 1,
                minTime: 30
            }),
            At = {
                data: function () {
                    return {
                        limiter: null,
                        avgDivPool: 0,
                        stakeShareRate: 0,
                        daysEligible: 0,
                        clc1: 0,
                        clc2: 0,
                        timeBonus: 0,
                        valueBonus: 0,
                        total: 0,
                        effectiveT2x: 0,
                        lastUpdated: new Date,
                        labels: [0],
                        value: [0],
                        loadingCollectStake: !1,
                        valuesObj: null,
                        TRXDividends: null,
                        valid: !0,
                        snackbar: !1,
                        color: "",
                        text: "",
                        loading: !1,
                        user: {
                            address: null,
                            balance: null,
                            formattedBalance: "null",
                            referrer: d
                        },
                        mainContract: null,
                        activeStakes: [{
                            bonus: 0
                        }],
                        endedStakes: [],
                        endedStatesHeaders: [],
                        daysData: [],
                        bonus: null,
                        currentDay: null,
                        amountToStake: null,
                        daysToStake: null,
                        headersActiveStake: [{
                            text: "Start",
                            value: "lockedDay"
                        }, {
                            text: "End",
                            value: "servedDays"
                        }, {
                            text: "Progress",
                            value: "progress",
                            sortable: !1
                        }, {
                            text: "Staked Amount",
                            value: "stakedSuns",
                            align: "center"
                        }, {
                            text: "Shares",
                            value: "stakeShares",
                            align: "center"
                        }, {
                            text: "BonusDay Rewards",
                            value: "bonus",
                            align: "center"
                        }, {
                            text: "Divs Rewards",
                            value: "divRewards",
                            align: "center"
                        }, {
                            text: "Interest",
                            value: "interest",
                            align: "center"
                        }, {
                            text: "Current Value",
                            value: "currentValue",
                            align: "center"
                        }, {
                            text: "Actions",
                            value: "actions",
                            sortable: !1,
                            align: "center"
                        }],
                        headersEndedStake: [{
                            text: "Start",
                            value: "lockedDay"
                        }, {
                            text: "End",
                            value: "servedDays"
                        }, {
                            text: "Progress",
                            value: "progress"
                        }, {
                            text: "Staked Amount",
                            value: "stakedSuns",
                            align: "center"
                        }, {
                            text: "Shares",
                            value: "stakeShares"
                        }, {
                            text: "Dividends",
                            value: "dividends"
                        }, {
                            text: "BonusDay Rewards + Stake Interest",
                            value: "payout",
                            align: "center"
                        }, {
                            text: "Paid Amount",
                            value: "stakeReturn"
                        }],
                        numberRule: function (t) {
                            return !(!t || t.trim()) || (!isNaN(parseFloat(t)) && t > 0 || "Number has to be greater than 0")
                        }
                    }
                },
                created: function () {
                    return Dt(i.a.mark((function t() {
                        return i.a.wrap((function (t) {
                            while (1) switch (t.prev = t.next) {
                                case 0:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })))()
                },
                mounted: function () {
                    var t = this,
                        e = new Promise((function (t, e) {
                            window["tronWeb"] && window["tronWeb"]["ready"] ? t(!0) : window["addEventListener"]("load", (function () {
                                var e = setInterval((function () {
                                    window["tronWeb"] && window["tronWeb"]["ready"] && t(!0), clearInterval(e)
                                }), 200);
                                setTimeout((function () {
                                    clearInterval(e)
                                }), 1e4)
                            }))
                        }));
                    e["then"]((function (e) {
                        return new Promise(function () {
                            var e = Dt(i.a.mark((function e(a, n) {
                                var r, s, o, l;
                                return i.a.wrap((function (e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            if (console.log(n), r = window.tronWeb.defaultAddress.base58, r) {
                                                e.next = 4;
                                                break
                                            }
                                            return e.abrupt("return", a(!1));
                                        case 4:
                                            return t.user.address = r, s = window.tronWeb.address.toHex(r), s = "0x" + s.slice(2), e.prev = 7, e.next = 10, ut.a.get("/api/events?userAddress=".concat(s));
                                        case 10:
                                            return o = e.sent, l = o.data, t.endedStakes = l.map((function (t) {
                                                var e = Object.assign({}, t);
                                                return e.result
                                            })), t.endedStakes.sort((function (t, e) {
                                                return e.lockedDay - t.lockedDay
                                            })), e.next = 16, t.setUpContracts();
                                        case 16:
                                            return e.next = 18, t.getBalance();
                                        case 18:
                                            setInterval((function () {
                                                window.tronWeb && t.user.address !== window.tronWeb.defaultAddress.base58 && location["reload"]()
                                            }), 700), e.next = 24;
                                            break;
                                        case 21:
                                            e.prev = 21, e.t0 = e["catch"](7), console.log("err==>>", e.t0);
                                        case 24:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [7, 21]
                                ])
                            })));
                            return function (t, a) {
                                return e.apply(this, arguments)
                            }
                        }())
                    }))
                },
                watch: {
                    daysToStake: function (t) {
                        console.log("new val==>>", t);
                        var e = t - 1;
                        e > Pt && (e = Pt), this.clc1 = e / 1820, console.log("clc111==>>", this.clc1, "ammttt==>>>", this.amountToStake);
                        var a = this.abbreviate_number_cu1((this.clc1 * parseFloat(this.amountToStake)).toLocaleString(void 0, {
                            minimumFractionDigits: 8
                        }));
                        this.timeBonus = "+ " + a + " T2X", this.calculator()
                    },
                    amountToStake: function (t) {
                        console.log("new val==>>", t), this.clc2 = t * (Math.min(t, 15e7) / 15e8);
                        var e = this.abbreviate_number_cu1(this.clc2.toLocaleString(void 0, {
                            minimumFractionDigits: 8
                        }));
                        this.valueBonus = "+ " + e + " D2X", e = this.abbreviate_number_cu1((this.clc1, parseFloat(this.amountToStake)).toLocaleString(void 0, {
                            minimumFractionDigits: 8
                        })), this.timeBonus = "+ " + e + " D2X", this.calculator()
                    }
                },
                computed: {
                    lastFullDay: {
                        get: function () {
                            return null != this.daysToStake ? Number(this.daysToStake) + Number(this.currentDay) : "--"
                        },
                        set: function (t) {
                            return t
                        }
                    }
                },
                methods: {
                    estimateNextDay: function () {
                        var t = this;
                        return Dt(i.a.mark((function e() {
                            var a, n;
                            return i.a.wrap((function (e) {
                                while (1) switch (e.prev = e.next) {
                                    case 0:
                                        return a = Object(pt["range"])(t.currentDay, 1, -1), e.next = 3, Promise.all(a.map((function (e) {
                                            return Rt.schedule((function () {
                                                return t.mainContract.xfLobby(e - 1).call({
                                                    shouldPollResponse: !0
                                                }).then((function (t) {
                                                    return parseFloat(window.tronWeb.fromSun(t)) || 0
                                                }))
                                            }))
                                        })));
                                    case 3:
                                        n = e.sent, n = n.reduce((function (t, e) {
                                            return t + e
                                        }), 0), t.avgDivPool = "~" + t.abbreviate_number(n / a.length, 2) + " TRX";
                                    case 6:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    },
                    runStake: function (t) {
                        var e = this;
                        this.mainContract.globalInfo().call({
                            shouldPollResponse: !0
                        }).then((function (t) {
                            var a = window.tronWeb.fromSun(t[2]["_hex"]) * Ot;
                            e.lastFullDay = e.currentDay + 1, e.stakeShareRate = 1e5 / a * 1e8
                        })), this.mainContract.xfLobby(this.currentDay).call({
                            shouldPollResponse: !0
                        }).then((function (t) {
                            e.TRXDividends = e.abbreviate_number(window.tronWeb.fromSun(t._hex), 2) + " TRX"
                        })), t || this.estimateNextDay()
                    },
                    calculator: function () {
                        if (this.currentDay) {
                            var t = this.abbreviate_number(this.clc1 * parseFloat(this.amountToStake) + this.clc2, 2);
                            this.total = t + " D2X";
                            var e = parseFloat(this.amountToStake) + (this.clc1 * parseFloat(this.amountToStake) + this.clc2);
                            t = this.abbreviate_number(e, 2), this.effectiveT2x = t + " D2X"
                        }
                    },
                    abbreviate_number_cu1: function (t) {
                        var e, a, n = t["replace"](/,/g, ""),
                            r = n["indexOf"](".");
                        return 1 == r && "0" === n[0] ? (n = n["slice"](0, r + 9), e = 8) : 1 == r && "0" !== n[0] ? (n = n["slice"](0, r + 8), e = 7) : 2 == r ? (n = n["slice"](0, r + 6), e = 5) : 3 == r ? (n = n["slice"](0, r + 4), e = 3) : r > 3 && (n = this.abbreviate_number(parseFloat(n), 2), a = !0), a || (n = parseFloat(n)["toLocaleString"](void 0, {
                            minimumFractionDigits: e
                        })), n
                    },
                    timeAgo: function (t) {
                        c.a.updateLocale("en", {
                            relativeTime: {
                                future: "in %s",
                                past: "%s ago",
                                s: function (t) {
                                    return t + "s ago"
                                },
                                ss: "%ds ago",
                                m: "1m ago",
                                mm: "%dm ago",
                                h: "1h ago",
                                hh: "%dh ago",
                                d: "1d ago",
                                dd: "%dd ago",
                                M: "a month ago",
                                MM: "%d months ago",
                                y: "a year ago",
                                yy: "%d years ago"
                            }
                        });
                        var e = c()().diff(t, "seconds"),
                            a = c()("2018-01-01").startOf("day").seconds(e);
                        return e > 300 ? c()(t).fromNow(!0) : e < 60 ? a.format("s") + "s ago" : a.format("m:ss") + "m ago"
                    },
                    setUpContracts: function (t) {
                        var e = this;
                        return new Promise((function (a, n) {
                            if (!u && !t) return null;
                            window.tronWeb["contract"]()["at"](u || t, function () {
                                var t = Dt(i.a.mark((function t(r, s) {
                                    return i.a.wrap((function (t) {
                                        while (1) switch (t.prev = t.next) {
                                            case 0:
                                                if (r) {
                                                    t.next = 19;
                                                    break
                                                }
                                                return e.mainContract = s, t.next = 4, e.getCurrentDay();
                                            case 4:
                                                return t.next = 6, e.getDivChartData();
                                            case 6:
                                                return e.loading = !0, t.next = 9, e.getDaysData();
                                            case 9:
                                                return t.next = 11, e.myStakesCount();
                                            case 11:
                                                return t.next = 13, e.runDividends();
                                            case 13:
                                                setInterval(Dt(i.a.mark((function t() {
                                                    return i.a.wrap((function (t) {
                                                        while (1) switch (t.prev = t.next) {
                                                            case 0:
                                                                return t.next = 2, e.getCurrentDay();
                                                            case 2:
                                                                return t.next = 4, e.runDividends();
                                                            case 4:
                                                                e.lastUpdated = new Date;
                                                            case 5:
                                                            case "end":
                                                                return t.stop()
                                                        }
                                                    }), t)
                                                }))), 1e4), setInterval(Dt(i.a.mark((function t() {
                                                    return i.a.wrap((function (t) {
                                                        while (1) switch (t.prev = t.next) {
                                                            case 0:
                                                                return t.next = 2, e.myStakesCount();
                                                            case 2:
                                                            case "end":
                                                                return t.stop()
                                                        }
                                                    }), t)
                                                }))), 2e4), e.runStake(), a(), t.next = 21;
                                                break;
                                            case 19:
                                                console.error("data1 error==>>", r), n(r);
                                            case 21:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t)
                                })));
                                return function (e, a) {
                                    return t.apply(this, arguments)
                                }
                            }())
                        }))
                    },
                    myStakesCount: function () {
                        var t = this;
                        return Dt(i.a.mark((function e() {
                            var a, n;
                            return i.a.wrap((function (e) {
                                while (1) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, t.mainContract.stakeCount(t.user.address).call({
                                            shouldPollResponse: !0
                                        });
                                    case 3:
                                        return a = e.sent, n = 1e6 * parseFloat(window.tronWeb.fromSun(a._hex)), e.next = 7, t.ck1(n);
                                    case 7:
                                        t.loading = !1, e.next = 13;
                                        break;
                                    case 10:
                                        e.prev = 10, e.t0 = e["catch"](0), console.log("errrrr stake count==>>>", e.t0);
                                    case 13:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 10]
                            ])
                        })))()
                    },
                    getStatus: function (t) {
                        return t.lockedDay + t.stakedDays < this.currentDay + 1 ? "collect" : "cancel"
                    },
                    getProgressBar: function (t) {
                        var e = this.currentDay - t.lockedDay,
                            a = e / t.stakedDays * 100;
                        return a
                    },
                    getDrc: function (t) {
                        return this.mainContract.stakeLists(this.user.address, t).call({
                            shouldPollResponse: !0
                        })
                    },
                    getDaysData: function () {
                        var t = this;
                        return Dt(i.a.mark((function e() {
                            var a, n;
                            return i.a.wrap((function (e) {
                                while (1) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, ut.a.get("/api/days");
                                    case 2:
                                        a = e.sent, n = a.data, t.daysData = n;
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    },
                    runDividends: function () {
                        var t = this;
                        return Dt(i.a.mark((function e() {
                            var a, n, r;
                            return i.a.wrap((function (e) {
                                while (1) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, t.mainContract.xfLobby(t.currentDay).call({
                                            shouldPollResponse: !0
                                        });
                                    case 2:
                                        a = e.sent, n = bt()(window.tronWeb["fromSun"](a._hex)).format("0.000am").toUpperCase(), r = t.labels.slice(-1)[0], r !== t.currentDay && (t.value = [].concat(wt(t.value), [parseFloat(n.slice(0, -1))]), t.labels = [].concat(wt(t.labels), [t.currentDay]), t.TRXDividends = n + " TRX");
                                    case 6:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    },
                    ck1: function () {
                        var t = Dt(i.a.mark((function t(e) {
                            var a = this;
                            return i.a.wrap((function (t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        if (!this.limiter) {
                                            t.next = 3;
                                            break
                                        }
                                        return t.next = 3, this.limiter.stop();
                                    case 3:
                                        return this.limiter = new ft.a({
                                            maxConcurrent: 1,
                                            minTime: 30
                                        }), t.next = 6, Promise.all(Array.from(Array(e).keys()).map(function () {
                                            var t = Dt(i.a.mark((function t(e) {
                                                var n, r, s, o, l, c, u, d, f, v, b, p, m, h;
                                                return i.a.wrap((function (t) {
                                                    while (1) switch (t.prev = t.next) {
                                                        case 0:
                                                            return t.next = 2, a.limiter.schedule((function () {
                                                                return a.getDrc(e)
                                                            }));
                                                        case 2:
                                                            for (n = t.sent, r = n.lockedDay, s = n.stakedDays, o = n.stakeShares, n.servedDays = Number(r) + Number(s), n.stakeShares = "object" === gt(n.stakeShares) ? a.getPayout(o) : o, n.bonus = n.bonus || 0, l = 0, c = function (t) {
                                                                var e = a.daysData.find((function (e) {
                                                                    return e.day === t
                                                                }));
                                                                if (e) {
                                                                    var r = e.payoutTotal,
                                                                        s = e.stakeSharesTotal,
                                                                        i = parseFloat(window.tronWeb.fromSun(o._hex)) / 100,
                                                                        c = r * i / s;
                                                                    n.bonus = a.abbreviate_number(parseFloat(l) + parseFloat(c), 2), l = c
                                                                }
                                                            }, u = r + 4; u < r + s; u += 5) c(u);
                                                            for (d = 0, n.divRewards = 0, f = 0, v = parseFloat(window.tronWeb.fromSun(o._hex)) / 100, b = function (t) {
                                                                a.daysData.forEach((function (e) {
                                                                    e.day == r + t && (f += .97 * e.totalDividends * v / e.stakeSharesTotal, d = a.abbreviate_number(100 * f, 3) + " TRX")
                                                                }))
                                                            }, p = 0; p < s; p++) b(p);
                                                            for (n.divRewards = d, m = 0, h = r; h < s + r; h++) a.daysData.forEach((function (t) {
                                                                t.day == h && (m += t.payoutTotal * parseFloat(window.tronWeb.fromSun(o._hex)) / t.stakeSharesTotal)
                                                            }));
                                                            return n.interest = m / 100, n.currentValue = Number(parseInt(n.stakedSuns._hex) / Tt) + Number(n.interest), t.abrupt("return", n);
                                                        case 22:
                                                        case "end":
                                                            return t.stop()
                                                    }
                                                }), t)
                                            })));
                                            return function (e) {
                                                return t.apply(this, arguments)
                                            }
                                        }()));
                                    case 6:
                                        this.activeStakes = t.sent;
                                    case 7:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this)
                        })));

                        function e(e) {
                            return t.apply(this, arguments)
                        }
                        return e
                    }(),
                    getCurrentDay: function () {
                        var t = this;
                        this.mainContract.currentDay().call({
                            shouldPollResponse: !1
                        }).then((function (e) {
                            t.currentDay = 1e6 * window.tronWeb.fromSun(e._hex)
                        }))
                    },
                    getProgress: function (t) {
                        if (t.servedDays > 0 && "0" !== t.payout) {
                            var e = "Finished";
                            return e
                        }
                        return "Canceled"
                    },
                    getPayout: function (t) {
                        return this.abbreviate_number(parseInt(t) / Tt, 3)
                    },
                    isWaiting: function (t) {
                        return t.lockedDay == this.currentDay + 1
                    },
                    doStake: function () {
                        var t = this;
                        this.loading = !0, this.mainContract.balanceOf(this.user.address).call({
                            shouldPollResponse: !1
                        }).then((function (e) {
                            window.tronWeb.fromSun(e._hex) / 100 < parseFloat(t.amountToStake) ? (t.snackbar = !0, t.text = "Something went wrong. Remove decimal value, if present, otherwise Insufficient Balance!", t.color = "error") : t.mainContract.stakeStart(parseFloat(t.amountToStake) * Tt, parseInt(t.daysToStake)).send({
                                shouldPollResponse: !1
                            }).then((function () {
                                var e = {
                                    lockedDay: t.currentDay + 1,
                                    stakedDays: parseInt(t.daysToStake),
                                    stakedSuns: parseInt(t.amountToStake),
                                    stakeShares: "Waiting..."
                                };
                                t.activeStakes = t.activeStakes.concat(e), t.loading = !1, setTimeout((function () {
                                    return t.myStakesCount()
                                }), 5e3), t.snackbar = !0, t.color = "#07d662", t.text = "Successfully staked ".concat(parseFloat(t.amountToStake), " HFM for ").concat(parseInt(t.daysToStake), " days.")
                            })).catch((function (e) {
                                t.snackbar = !0, t.text = "Something went wrong, check input and try again.", t.color = "error", console.log(e)
                            })).finally((function () {
                                t.amountToStake = "", t.daysToStake = ""
                            }))
                        }))
                    },
                    getBalance: function () {
                        var t = this;
                        return this.mainContract.balanceOf(this.user.address).call({
                            shouldPollResponse: !0
                        }).then((function (e) {
                            t.user.balance = window.tronWeb.fromSun(e._hex) / 100, t.user.formattedBalance = t.user.balance.toFixed(2), console.log("fff==>>", t.user)
                        }))
                    },
                    abbreviate_number: function (t, e) {
                        var a = parseFloat(t);
                        if (null === a) return null;
                        if (0 === a) return "0";
                        e = !e || e < 0 ? 0 : e;
                        var n = a["toPrecision"](2)["split"]("e"),
                            r = 1 === n["length"] ? 0 : Math["floor"](Math["min"](n[1]["slice"](1), 14) / 3),
                            s = r < 1 ? a["toFixed"](0 + e) : (a / Math["pow"](10, 3 * r))["toFixed"](1 + e),
                            o = s < 0 ? s : Math["abs"](s),
                            i = o + ["", "K", "M", "B", "T"][r];
                        return i
                    },
                    add: function (t, e) {
                        var a = parseInt(t),
                            n = parseInt(e);
                        return Number(a) + Number(n)
                    },
                    getTime: function () {
                        return this.timeAgo(this.lastUpdated)
                    },
                    endStake: function (t) {
                        var e = this;
                        return Dt(i.a.mark((function a() {
                            var n, r, s;
                            return i.a.wrap((function (a) {
                                while (1) switch (a.prev = a.next) {
                                    case 0:
                                        return e.loading = !0, e.loadingCollectStake = !0, n = e.activeStakes.findIndex((function (e) {
                                            return e.stakeId === t
                                        })), a.prev = 3, r = 5e3, a.next = 7, e.mainContract.stakeEnd(n, t).send({
                                            shouldPollResponse: !1
                                        });
                                    case 7:
                                        s = a.sent, setTimeout(Dt(i.a.mark((function a() {
                                            var n, r, o;
                                            return i.a.wrap((function (a) {
                                                while (1) switch (a.prev = a.next) {
                                                    case 0:
                                                        return a.next = 2, ut.a.get("".concat("https://api.trongrid.io", "/v1/transactions/").concat(s, "/events"));
                                                    case 2:
                                                        return n = a.sent, r = n.data, o = r.data.find((function (t) {
                                                            return "StakeEnd" === t.event_name
                                                        })), a.next = 7, ut.a.post("/api/events", ht({}, o));
                                                    case 7:
                                                        e.activeStakes = e.activeStakes.filter((function (e) {
                                                            return e.stakeId !== t
                                                        })), e.endedStakes.unshift(o.result), e.loadingCollectStake = !1;
                                                    case 10:
                                                    case "end":
                                                        return a.stop()
                                                }
                                            }), a)
                                        }))), r), a.next = 18;
                                        break;
                                    case 11:
                                        a.prev = 11, a.t0 = a["catch"](3), e.snackbar = !0, e.text = "Something went wrong, " + a.t0, e.color = "error", console.log("an err occcc==>>>", a.t0), e.loadingCollectStake = !1;
                                    case 18:
                                        return a.prev = 18, e.mainContract.balanceOf(e.user.address).call({
                                            shouldPollResponse: !1
                                        }), e.loading = !1, e.loadingCollectStake = !1, a.finish(18);
                                    case 23:
                                    case "end":
                                        return a.stop()
                                }
                            }), a, null, [
                                [3, 11, 18, 23]
                            ])
                        })))()
                    },
                    getDailyBonusRewards: function (t) {
                        for (var e = t.lockedDay, a = t.stakedDays, n = parseFloat(window.tronWeb.fromSun(t.stakeShares._hex)), r = 0, s = 0, o = e; o < a + e; o++) r < 4 ? r++ : (s = this.processDailyBonus(o, s, n), r = 0);
                        return this.bonus = s, s
                    },
                    processDailyBonus: function (t, e, a) {
                        var n = this;
                        return this.daysData.forEach((function (r) {
                            if (r.day == t) {
                                var s = r.payoutTotal * a / r.stakeSharesTotal;
                                e = n.abbreviate_number(parseFloat(s), 2)
                            }
                        })), e
                    },
                    getDivChartData: function () {
                        var t = this;
                        return Dt(i.a.mark((function e() {
                            var a, n;
                            return i.a.wrap((function (e) {
                                while (1) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, ut.a.get("/api/days");
                                    case 3:
                                        a = e.sent, n = a.data, t.value = [].concat(wt(t.value), wt(n.map((function (e) {
                                            return parseFloat(t.abbreviate_number(e.totalDividends, 2).slice(0, -1))
                                        })))), t.labels = [].concat(wt(t.labels), wt(n.map((function (t) {
                                            return t.day
                                        })))), e.next = 12;
                                        break;
                                    case 9:
                                        e.prev = 9, e.t0 = e["catch"](0), console.log("an err occurred==>>>", e.t0);
                                    case 12:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 9]
                            ])
                        })))()
                    }
                }
            },
            It = At,
            Et = a("8336"),
            Wt = a("b0af"),
            Lt = a("99d9"),
            Vt = a("cc20"),
            Ft = a("62ad"),
            Xt = a("8fea"),
            Bt = a("ce7e"),
            Nt = a("cd55"),
            Yt = a("49e2"),
            zt = a("c865"),
            Mt = a("0393"),
            Gt = a("4bd4"),
            Ht = a("132d"),
            Ut = a("5d23"),
            $t = a("a797"),
            qt = a("490a"),
            Kt = a("8e36"),
            Jt = a("0fd9"),
            Qt = a("8dd9"),
            Zt = a("2db4"),
            te = a("2fa4"),
            ee = a("7f2e"),
            ae = a("8654"),
            ne = a("71d9"),
            re = a("2a7f"),
            se = Object(x["a"])(It, it, lt, !1, null, null, null),
            oe = se.exports;
        _()(se, {
            VBtn: Et["a"],
            VCard: Wt["a"],
            VCardSubtitle: Lt["a"],
            VCardText: Lt["b"],
            VChip: Vt["a"],
            VCol: Ft["a"],
            VDataTable: Xt["a"],
            VDivider: Bt["a"],
            VExpansionPanel: Nt["a"],
            VExpansionPanelContent: Yt["a"],
            VExpansionPanelHeader: zt["a"],
            VExpansionPanels: Mt["a"],
            VForm: Gt["a"],
            VIcon: Ht["a"],
            VListItem: T["a"],
            VListItemContent: Ut["a"],
            VListItemSubtitle: Ut["b"],
            VListItemTitle: Ut["c"],
            VOverlay: $t["a"],
            VProgressCircular: qt["a"],
            VProgressLinear: Kt["a"],
            VRow: Jt["a"],
            VSheet: Qt["a"],
            VSnackbar: Zt["a"],
            VSpacer: te["a"],
            VSparkline: ee["a"],
            VTextField: ae["a"],
            VToolbar: ne["a"],
            VToolbarTitle: re["a"]
        });
        var ie = function () {
            var t = this,
                e = t.$createElement,
                a = t._self._c || e;
            return a("div", [a("div", {
                staticClass: "auction"
            }, [a("div", [a("v-card", {
                staticClass: "p-2"
            }, [a("v-card-title", [t._v("Dividend Histogram")]), a("area-chart", {
                attrs: {
                    data: t.valuesObj,
                    xtitle: "Days",
                    ytitle: "Millions"
                }
            })], 1)], 1), a("div", [a("v-row", {
                staticClass: "mb-6",
                attrs: {
                    "no-gutters": ""
                }
            }, [a("v-dialog", {
                attrs: {
                    "max-width": "400"
                },
                model: {
                    value: t.dialog,
                    callback: function (e) {
                        t.dialog = e
                    },
                    expression: "dialog"
                }
            }, [a("v-system-bar", {
                attrs: {
                    color: "#2b2b33",
                    dark: ""
                }
            }, [a("v-spacer"), a("v-icon", [t._v("mdi-window-minimize")]), a("v-icon", {
                on: {
                    click: function (e) {
                        return t.close()
                    }
                }
            }, [t._v("mdi-close")])], 1), a("v-card", {
                staticClass: "p-2"
            }, [a("v-text-field", {
                staticClass: "px-4",
                attrs: {
                    outlined: "",
                    label: "Amount of TRON to Enter",
                    required: ""
                },
                model: {
                    value: t.amountToStake,
                    callback: function (e) {
                        t.amountToStake = e
                    },
                    expression: "amountToStake"
                }
            }), a("v-btn", {
                staticClass: "mb-2",
                staticStyle: {
                    background: "linear-gradient(90deg, #07d662 0%, #07d662 100%)"
                },
                attrs: {
                    block: "",
                    dark: "",
                    color: "primary"
                },
                on: {
                    click: function (e) {
                        return t.enterLobbyFinal()
                    }
                }
            }, [t._v("Enter the Auction")])], 1)], 1), a("v-col", {
                staticClass: "pa-2",
                attrs: {
                    lg: "4",
                    md: "4",
                    sm: "12"
                }
            }, [a("v-toolbar", {
                staticClass: "titlebar mt-5 pl-0",
                attrs: {
                    flat: ""
                }
            }, [a("v-toolbar-title", [t._v("Current Dividends Pool")]), a("v-spacer"), a("p", {
                staticStyle: {
                    color: "white !important"
                }
            })], 1), a("v-card", {
                attrs: {
                    flat: ""
                }
            }, [a("v-card-text", [t._v("One of the benefits of Staking HFM is TRON dividends. At the end of each day a TRON dividends pool will be calculated and allocated to all the open stakes based on their stake amount. The TRON dividends pool comes from the total daily entry of auction lobby.The only way to receive TRON Dividends is having open stakes")]), a("v-row", {
                staticClass: "ml-4 mr-4"
            }, [a("v-btn", {
                staticClass: "headline mb-4",
                staticStyle: {
                    background: "linear-gradient(90deg, #07d662 0%, #07d662 100%)"
                },
                attrs: {
                    block: ""
                }
            }, [t._v(" " + t._s(t.TRXDividends))])], 1)], 1),], 1), a("v-col", {
                staticClass: "pa-2",
                attrs: {
                    lg: "8",
                    md: "8",
                    sm: "12"
                }
            }, [t.myObj.length < 0 ? a("v-skeleton-loader", {
                staticClass: "mx-auto",
                attrs: {
                    type: "table"
                }
            }) : t._e(), t.myObj.length > 0 ? a("v-card", {
                attrs: {
                    transition: "fade-transition"
                }
            }, [a("v-toolbar", {
                staticClass: "dsp-titlebar mt-5 pl-0 pr-0",
                attrs: {
                    fixed: ""
                }
            }, [a("v-toolbar-title", {
                staticClass: "ml-1 pl-0 pr-0 mr-0"
            }, [t._v("Auction Lobby")]), a("v-spacer"), a("v-btn", {
                staticClass: "mr-4",
                staticStyle: {
                    background: "linear-gradient(272.25deg,rgba(81, 36, 255, 0.15) 0.08%,rgba(130, 98, 255, 0.15) 95.38%,rgba(138, 113, 234, 0.15) 95.38%)",
                    "background-image": "linear-gradient(272.25deg,rgba(81, 36, 255, 0.15) 0.08%,rgba(130, 98, 255, 0.15) 95.38%,rgba(138, 113, 234, 0.15) 95.38%)",
                    border: "1px solid #07d662"
                },
                attrs: {
                    small: "",
                    dark: ""
                },
                on: {
                    click: function (e) {
                        return t.enterLobby()
                    }
                }
            }, [t._v("enter auction lobby")])], 1), a("v-data-table", {
                staticClass: "elevation-1",
                attrs: {
                    headers: t.headers,
                    items: t.myObj,
                    "items-per-page": 25,
                    "default-sort": "day:desc",
                    "mobile-breakpoint": "100",
                    "multi-sort": "",
                    "loading-text": "Loading... Please wait"
                },
                scopedSlots: t._u([{
                    key: "item.status",
                    fn: function (e) {
                        var n = e.item;
                        return [n ? a("span", ["open" == n.state ? a("v-btn", {
                            staticStyle: {
                                border: "1px solid #07d662"
                            },
                            attrs: {
                                small: "",
                                dark: "",
                                "min-width": "100px"
                            },
                            on: {
                                click: function (e) {
                                    return t.enterLobby(n)
                                }
                            }
                        }, [t._v("Enter")]) : "closed" == n.state && n.entry > 0 ? a("v-btn", {
                            staticStyle: {
                                background: "linear-gradient(90deg,#07d662 0%,#07d662 100%)",
                                "box-shadow": "rgba(0, 0, 0, 0.3) 0px 3px 6px,rgba(0, 0, 0, 0.2) 0px 0px 10px 3px inset,rgb(11 43 25 / 0.51) 0px 3px 20px,rgb(81 36 255 / 0.48) 0px 3px 35px"
                            },
                            attrs: {
                                small: "",
                                dark: "",
                                "min-width": "100px"
                            },
                            on: {
                                click: function (e) {
                                    return t.collectLobby(n)
                                }
                            }
                        }, [t._v("collect")]) : "closed" == n.state ? a("v-btn", {
                            attrs: {
                                small: "",
                                color: "#757575",
                                disabled: "",
                                "min-width": "100px"
                            }
                        }, [t._v("ended")]) : t._e()], 1) : t._e()]
                    }
                }, {
                    key: "item.received",
                    fn: function (e) {
                        var n = e.item;
                        return [n.received ? a("span", {
                            staticStyle: {}
                        }, [t._v(" " + t._s(n.received) + " ")]) : a("span", {
                            attrs: {
                                vstyle: "text-align=center"
                            }
                        }, [t._v(" -- ")])]
                    }
                }, {
                    key: "item.entry",
                    fn: function (e) {
                        var n = e.item;
                        return [n.entry ? a("span", {
                            staticStyle: {}
                        }, [t._v(" " + t._s(n.entry) + " ")]) : a("span", {
                            staticStyle: {}
                        }, [t._v(" -- ")])]
                    }
                }], null, !1, 3678067178)
            })], 1) : t._e()], 1)], 1)], 1), a("v-snackbar", {
                attrs: {
                    timeout: "10000",
                    color: t.color,
                    top: "",
                    center: ""
                },
                model: {
                    value: t.snackbar,
                    callback: function (e) {
                        t.snackbar = e
                    },
                    expression: "snackbar"
                }
            }, [t._v(t._s(t.text))])], 1)])
        },
            le = [];

        function ce(t, e) {
            var a = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(t);
                e && (n = n.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), a.push.apply(a, n)
            }
            return a
        }

        function ue(t) {
            for (var e = 1; e < arguments.length; e++) {
                var a = null != arguments[e] ? arguments[e] : {};
                e % 2 ? ce(Object(a), !0).forEach((function (e) {
                    de(t, e, a[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : ce(Object(a)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
                }))
            }
            return t
        }

        function de(t, e, a) {
            return e in t ? Object.defineProperty(t, e, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = a, t
        }

        function fe(t, e, a, n, r, s, o) {
            try {
                var i = t[s](o),
                    l = i.value
            } catch (c) {
                return void a(c)
            }
            i.done ? e(l) : Promise.resolve(l).then(n, r)
        }

        function ve(t) {
            return function () {
                var e = this,
                    a = arguments;
                return new Promise((function (n, r) {
                    var s = t.apply(e, a);

                    function o(t) {
                        fe(s, n, r, o, i, "next", t)
                    }

                    function i(t) {
                        fe(s, n, r, o, i, "throw", t)
                    }
                    o(void 0)
                }))
            }
        }
        var be = 1e8,
            pe = 1e6,
            me = new ft.a({
                maxConcurrent: 25,
                minTime: 300
            }),
            he = {
                data: function () {
                    return {
                        TRXDividends: null,
                        valuesObj: {
                            0: 0
                        },
                        valuesObj2: [0],
                        limiter: null,
                        snackbar: !1,
                        color: "",
                        text: "",
                        auctionBtn: "Enter",
                        currentItemIndex: -1,
                        currentItem: null,
                        dialog: !1,
                        amountToStake: null,
                        myObj: [],
                        anotherObj: [],
                        tempdata: {
                            day: null
                        },
                        user: {
                            address: null,
                            balance: null,
                            referrer: d
                        },
                        day: null,
                        amount: null,
                        mainContract: {},
                        endedStatesHeaders: [],
                        currentDay: null,
                        daysToStake: null,
                        headers: [{
                            text: "Day",
                            value: "day"
                        }, {
                            text: "HFM Pool",
                            value: "amount"
                        }, {
                            text: "HFM/TRON",
                            value: "ratio"
                        }, {
                            text: "State",
                            value: "state"
                        }, {
                            text: "HFM Received",
                            value: "received"
                        }, {
                            text: "Your Entry",
                            value: "entry"
                        }, {
                            text: "Daily Entry",
                            value: "dayEntry"
                        }, {
                            text: "Status",
                            value: "status"
                        }]
                    }
                },
                mounted: function () {
                    var t = this,
                        e = new Promise((function (t, e) {
                            window.tronWeb && window.tronWeb.ready ? t(!0) : window.addEventListener("load", (function () {
                                var e = setInterval((function () {
                                    window.tronWeb && window.tronWeb.ready && t(!0), clearInterval(e)
                                }), 200);
                                setTimeout((function () {
                                    clearInterval(e)
                                }), 200)
                            }))
                        })).then((function () {
                            return console.log("Tronweb installed and logged in"), !0
                        })).catch((function (t) {
                            return console.error("Error while detecting tronweb", t), !1
                        }));
                    e["then"]((function (e) {
                        return new Promise(function () {
                            var e = ve(i.a.mark((function e(a) {
                                var n;
                                return i.a.wrap((function (e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            if (n = window.tronWeb.defaultAddress.base58, n) {
                                                e.next = 3;
                                                break
                                            }
                                            return e.abrupt("return", a(!1));
                                        case 3:
                                            return t.user.address = n, e.next = 6, t.setUpContracts();
                                        case 6:
                                            try {
                                                setInterval((function () {
                                                    window.tronWeb && t.user.address !== window.tronWeb.defaultAddress.base58 && location.reload()
                                                }), 700)
                                            } catch (r) {
                                                console.log("err==>>", r)
                                            }
                                        case 7:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function (t) {
                                return e.apply(this, arguments)
                            }
                        }())
                    }))
                },
                methods: {
                    setUpContracts: function (t) {
                        var e = this;
                        return new Promise((function (a, n) {
                            if (!u && !t) return a(null);
                            window.tronWeb.contract().at(u || t, function () {
                                var t = ve(i.a.mark((function t(r, s) {
                                    return i.a.wrap((function (t) {
                                        while (1) switch (t.prev = t.next) {
                                            case 0:
                                                if (r) {
                                                    t.next = 20;
                                                    break
                                                }
                                                return e.mainContract = s, t.next = 4, e.getDivChartData();
                                            case 4:
                                                return t.next = 6, e.getCurrentDay();
                                            case 6:
                                                return t.next = 8, e.runDividends();
                                            case 8:
                                                return setInterval(ve(i.a.mark((function t() {
                                                    return i.a.wrap((function (t) {
                                                        while (1) switch (t.prev = t.next) {
                                                            case 0:
                                                                return t.next = 2, e.getDivChartData();
                                                            case 2:
                                                                return t.next = 4, e.getCurrentDay();
                                                            case 4:
                                                                return t.next = 6, e.runDividends();
                                                            case 6:
                                                            case "end":
                                                                return t.stop()
                                                        }
                                                    }), t)
                                                }))), 3e4), t.prev = 9, t.next = 12, e.getLobbyTable();
                                            case 12:
                                                t.next = 17;
                                                break;
                                            case 14:
                                                t.prev = 14, t.t0 = t["catch"](9), console.log(t.t0);
                                            case 17:
                                                a(), t.next = 22;
                                                break;
                                            case 20:
                                                console.error("data1 error==>>", r), n(r);
                                            case 22:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t, null, [
                                        [9, 14]
                                    ])
                                })));
                                return function (e, a) {
                                    return t.apply(this, arguments)
                                }
                            }())
                        }))
                    },
                    getLobbyTable: function () {
                        var t = this;
                        return ve(i.a.mark((function e() {
                            return i.a.wrap((function (e) {
                                while (1) switch (e.prev = e.next) {
                                    case 0:
                                        if (t.myObj = Array.from(Array(t.currentDay).keys()).reverse().map((function (e, a) {
                                            var n = e + 1,
                                                r = {};
                                            return r.state = n === t.currentDay ? "open" : "closed", r.day = n, r.amount = t.abbreviate_number(t.calcDaysLobbyPayout(n) / be, 2), r
                                        })), !t.limiter) {
                                            e.next = 4;
                                            break
                                        }
                                        return e.next = 4, t.limiter.stop();
                                    case 4:
                                        return t.limiter = new ft.a({
                                            maxConcurrent: 1,
                                            minTime: 300
                                        }), e.next = 7, Promise.allSettled(t.myObj.map(function () {
                                            var e = ve(i.a.mark((function e(a, n) {
                                                return i.a.wrap((function (e) {
                                                    while (1) switch (e.prev = e.next) {
                                                        case 0:
                                                            return e.next = 2, t.limiter.schedule(ve(i.a.mark((function e() {
                                                                var n, r, s, o;
                                                                return i.a.wrap((function (e) {
                                                                    while (1) switch (e.prev = e.next) {
                                                                        case 0:
                                                                            return e.next = 2, t.mainContract.xfLobby(a.day).call({
                                                                                shouldPollResponse: !0
                                                                            });
                                                                        case 2:
                                                                            return n = e.sent, r = parseFloat(window.tronWeb.fromSun(n)), a.ratio = 0 === r ? "-" : (t.calcDaysLobbyPayout(a.day) / be / r)["toFixed"](3), s = 0, e.next = 8, t.mainContract.xfLobby(a.day).call({
                                                                                shouldPollResponse: !0
                                                                            }).then((function (e) {
                                                                                var a = parseFloat(window.tronWeb["fromSun"](e));
                                                                                return t.abbreviate_number(a, 2)
                                                                            }));
                                                                        case 8:
                                                                            return a.dayEntry = e.sent, e.next = 11, t.mainContract["xfLobbyMembers"](a.day, t.user.address).call({
                                                                                shouldPollResponse: !0
                                                                            });
                                                                        case 11:
                                                                            return o = e.sent, e.next = 14, Promise.allSettled(Array.from(Array(o.tailIndex).keys()).map(function () {
                                                                                var e = ve(i.a.mark((function e(n) {
                                                                                    return i.a.wrap((function (e) {
                                                                                        while (1) switch (e.prev = e.next) {
                                                                                            case 0:
                                                                                                return e.abrupt("return", me.schedule(ve(i.a.mark((function e() {
                                                                                                    var o;
                                                                                                    return i.a.wrap((function (e) {
                                                                                                        while (1) switch (e.prev = e.next) {
                                                                                                            case 0:
                                                                                                                return e.next = 2, t.mainContract.xfLobbyEntry(t.user.address, a.day, n).call({
                                                                                                                    shouldPollResponse: !1
                                                                                                                });
                                                                                                            case 2:
                                                                                                                o = e.sent, s += parseFloat(window.tronWeb["fromSun"](o["rawAmount"]._hex)), a.entry = s, a.received = t.abbreviate_number(t.calcDaysLobbyPayout(a.day) / be * s / r, 2);
                                                                                                            case 6:
                                                                                                            case "end":
                                                                                                                return e.stop()
                                                                                                        }
                                                                                                    }), e)
                                                                                                })))));
                                                                                            case 1:
                                                                                            case "end":
                                                                                                return e.stop()
                                                                                        }
                                                                                    }), e)
                                                                                })));
                                                                                return function (t) {
                                                                                    return e.apply(this, arguments)
                                                                                }
                                                                            }()));
                                                                        case 14:
                                                                        case "end":
                                                                            return e.stop()
                                                                    }
                                                                }), e)
                                                            }))));
                                                        case 2:
                                                            t.myObj.splice(n, 1, a);
                                                        case 3:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }), e)
                                            })));
                                            return function (t, a) {
                                                return e.apply(this, arguments)
                                            }
                                        }()));
                                    case 7:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    },
                    getDataEntry: function (t, e) {
                        var a = this;
                        return ve(i.a.mark((function n() {
                            var r, s, o;
                            return i.a.wrap((function (n) {
                                while (1) switch (n.prev = n.next) {
                                    case 0:
                                        return r = {}, s = 0, o = a.currentDay, n.next = 5, Promise.allSettled(Array.from(Array(t.tailIndex).keys()).map(function () {
                                            var t = ve(i.a.mark((function t(n) {
                                                return i.a.wrap((function (t) {
                                                    while (1) switch (t.prev = t.next) {
                                                        case 0:
                                                            return t.abrupt("return", me.schedule(ve(i.a.mark((function t() {
                                                                var l;
                                                                return i.a.wrap((function (t) {
                                                                    while (1) switch (t.prev = t.next) {
                                                                        case 0:
                                                                            return t.next = 2, a.mainContract.xfLobbyEntry(e, o, n).call({
                                                                                shouldPollResponse: !1
                                                                            });
                                                                        case 2:
                                                                            return l = t.sent, t.t0 = s, t.next = 6, parseFloat(window.tronWeb["fromSun"](l["rawAmount"]._hex));
                                                                        case 6:
                                                                            s = t.t0 += t.sent, r.entry = s;
                                                                        case 8:
                                                                        case "end":
                                                                            return t.stop()
                                                                    }
                                                                }), t)
                                                            })))));
                                                        case 1:
                                                        case "end":
                                                            return t.stop()
                                                    }
                                                }), t)
                                            })));
                                            return function (e) {
                                                return t.apply(this, arguments)
                                            }
                                        }()));
                                    case 5:
                                        return console.log("Entry===>", r), n.abrupt("return", r);
                                    case 7:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })))()
                    },
                    calcDaysLobbyPayout: function (t) {
                        return t <= 365 ? 25e13 - 410958904109 * (t - 1) : 1e14
                    },
                    getCurrentDay: function () {
                        var t = ve(i.a.mark((function t() {
                            var e;
                            return i.a.wrap((function (t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, this.mainContract.currentDay().call({
                                            shouldPollResponse: !0
                                        });
                                    case 2:
                                        e = t.sent, this.currentDay = 1e6 * window.tronWeb.fromSun(e._hex);
                                    case 4:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this)
                        })));

                        function e() {
                            return t.apply(this, arguments)
                        }
                        return e
                    }(),
                    runDividends: function () {
                        var t = this;
                        return ve(i.a.mark((function e() {
                            var a, n;
                            return i.a.wrap((function (e) {
                                while (1) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, t.mainContract.xfLobby(t.currentDay).call({
                                            shouldPollResponse: !0
                                        });
                                    case 2:
                                        a = e.sent, n = bt()(window.tronWeb["fromSun"](a._hex)).format("0.000am"), t.valuesObj = ue(ue({}, t.valuesObj), {}, de({}, t.currentDay, parseFloat(n.slice(0, -1)))), t.TRXDividends = n + " TRX";
                                    case 6:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    },
                    abbreviate_number: function (t, e) {
                        var a = parseFloat(t);
                        if (null === a) return null;
                        if (0 === a) return "0";
                        e = !e || e < 0 ? 0 : e;
                        var n = a["toPrecision"](2)["split"]("e"),
                            r = 1 === n["length"] ? 0 : Math["floor"](Math["min"](n[1]["slice"](1), 14) / 3),
                            s = r < 1 ? a["toFixed"](0 + e) : (a / Math["pow"](10, 3 * r))["toFixed"](1 + e),
                            o = s < 0 ? s : Math["abs"](s),
                            i = o + ["", "K", "M", "B", "T"][r];
                        return i
                    },
                    add: function (t, e) {
                        var a = parseInt(t),
                            n = parseInt(e);
                        return Number(a) + Number(n)
                    },
                    close: function () {
                        this.dialog = !1, this.amountToStake = null
                    },
                    enterLobby: function (t) {
                        this.dialog = !0, this.currentItemIndex = this.myObj.indexOf(t), this.currentItem = t
                    },
                    collectLobby: function (t) {
                        var e = this;
                        return ve(i.a.mark((function a() {
                            var n;
                            return i.a.wrap((function (a) {
                                while (1) switch (a.prev = a.next) {
                                    case 0:
                                        return a.prev = 0, a.next = 3, e.mainContract.xfLobbyExit(t.day, 0).send({
                                            shouldPollResponse: !1
                                        });
                                    case 3:
                                        n = e.myObj.findIndex((function (e) {
                                            return e.day === t.day
                                        })), e.myObj.splice(n, 1, ue(ue({}, t), {}, {
                                            received: null,
                                            entry: null,
                                            state: "closed"
                                        })), a.next = 10;
                                        break;
                                    case 7:
                                        a.prev = 7, a.t0 = a["catch"](0), console.log("err occurred", a.t0);
                                    case 10:
                                    case "end":
                                        return a.stop()
                                }
                            }), a, null, [
                                [0, 7]
                            ])
                        })))()
                    },
                    sleep: function (t) {
                        return new Promise((function (e) {
                            return setTimeout(e, t)
                        }))
                    },
                    delay: function () {
                        var t = this;
                        return ve(i.a.mark((function e() {
                            return i.a.wrap((function (e) {
                                while (1) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, t.sleep(5e3);
                                    case 2:
                                        return e.next = 4, t.getCurrentDay();
                                    case 4:
                                        return e.next = 6, t.getLobbyTable();
                                    case 6:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    },
                    getDivChartData: function () {
                        var t = this;
                        return ve(i.a.mark((function e() {
                            var a, n;
                            return i.a.wrap((function (e) {
                                while (1) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, ut.a.get("/api/days");
                                    case 3:
                                        a = e.sent, n = a.data, t.valuesObj = ue(ue({}, t.valuesObj), n.reduce((function (e, a) {
                                            return Object.assign(e, de({}, a.day, parseFloat(t.abbreviate_number(a.totalDividends, 2).slice(0, -1))))
                                        }), {})), e.next = 11;
                                        break;
                                    case 8:
                                        e.prev = 8, e.t0 = e["catch"](0), console.log("an err occurred==>>>", e.t0);
                                    case 11:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 8]
                            ])
                        })))()
                    },
                    enterLobbyFinal: function () {
                        var t = this;
                        return ve(i.a.mark((function e() {
                            var a;
                            return i.a.wrap((function (e) {
                                while (1) switch (e.prev = e.next) {
                                    case 0:
                                        return t.dialog = !1, t.snackbar = !0, t.color = "#07d662", t.text = "Confirming " + t.amountToStake + " into auction, standby...", a = localStorage.getItem("referrerAddress") || "TTQLbFXsfeanyv7dtitGPHjTjv6X9MxABc", e.prev = 5, e.next = 8, t.mainContract.xfLobbyEnter(a).send({
                                            shouldPollResponse: !1,
                                            callValue: parseInt(parseFloat(t.amountToStake * pe))
                                        }).then(function () {
                                            var e = ve(i.a.mark((function e(a) {
                                                var n;
                                                return i.a.wrap((function (e) {
                                                    while (1) switch (e.prev = e.next) {
                                                        case 0:
                                                            return e.next = 2, t.mainContract.xfLobby(t.currentItem.day).call({
                                                                shouldPollResponse: !0
                                                            });
                                                        case 2:
                                                            n = e.sent, parseFloat(window.tronWeb.fromSun(n)), t.text = t.amountToStake + " successfully entered lobby.", t.snackbar = !0;
                                                        case 6:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }), e)
                                            })));
                                            return function (t) {
                                                return e.apply(this, arguments)
                                            }
                                        }()).catch((function (t) {
                                            console["error"](t, "er")
                                        })).finally(ve(i.a.mark((function e() {
                                            return i.a.wrap((function (e) {
                                                while (1) switch (e.prev = e.next) {
                                                    case 0:
                                                        t.delay();
                                                    case 1:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }), e)
                                        }))));
                                    case 8:
                                        e.next = 13;
                                        break;
                                    case 10:
                                        e.prev = 10, e.t0 = e["catch"](5), console.log(e.t0);
                                    case 13:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [5, 10]
                            ])
                        })))()
                    }
                }
            },
            ye = he,
            ge = a("169a"),
            we = a("3129"),
            ke = a("afd9"),
            xe = Object(x["a"])(ye, ie, le, !1, null, null, null),
            Se = xe.exports;
        _()(xe, {
            VBtn: Et["a"],
            VCard: Wt["a"],
            VCardText: Lt["b"],
            VCardTitle: Lt["c"],
            VCol: Ft["a"],
            VDataTable: Xt["a"],
            VDialog: ge["a"],
            VExpansionPanel: Nt["a"],
            VExpansionPanelContent: Yt["a"],
            VExpansionPanelHeader: zt["a"],
            VExpansionPanels: Mt["a"],
            VIcon: Ht["a"],
            VRow: Jt["a"],
            VSkeletonLoader: we["a"],
            VSnackbar: Zt["a"],
            VSpacer: te["a"],
            VSystemBar: ke["a"],
            VTextField: ae["a"],
            VToolbar: ne["a"],
            VToolbarTitle: re["a"]
        });
        var _e = function () {
            var t = this,
                e = t.$createElement,
                a = t._self._c || e;
            return a("div", 1)
        },
            Ce = [];

        function je(t, e, a) {
            return e in t ? Object.defineProperty(t, e, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = a, t
        }

        function De(t, e, a, n, r, s, o) {
            try {
                var i = t[s](o),
                    l = i.value
            } catch (c) {
                return void a(c)
            }
            i.done ? e(l) : Promise.resolve(l).then(n, r)
        }

        function Te(t) {
            return function () {
                var e = this,
                    a = arguments;
                return new Promise((function (n, r) {
                    var s = t.apply(e, a);

                    function o(t) {
                        De(s, n, r, o, i, "next", t)
                    }

                    function i(t) {
                        De(s, n, r, o, i, "throw", t)
                    }
                    o(void 0)
                }))
            }
        }
        var Pe = {
            data: function () {
                return {
                    snackbar: !1,
                    values: [],
                    valuesObj: [],
                    text: "",
                    auctionBtn: "Enter",
                    currentItemIndex: -1,
                    currentItem: null,
                    TRXDividends: null,
                    dialog: !1,
                    amountToStake: null,
                    myObj: [],
                    anotherObj: [],
                    tempdata: {
                        day: null
                    },
                    user: {
                        address: null,
                        balance: null,
                        referrer: d
                    },
                    day: null,
                    amount: null,
                    mainContract: {},
                    endedStatesHeaders: [],
                    currentDay: null,
                    daysToStake: null,
                    headers: [{
                        text: "day",
                        value: "day"
                    }, {
                        text: "HFM Pool",
                        value: "amount"
                    }, {
                        text: "HFM/TRON",
                        value: "ratio"
                    }, {
                        text: "State",
                        value: "state"
                    }, {
                        text: "HFM Received",
                        value: "received"
                    }, {
                        text: "Your Entry",
                        value: "entry"
                    }, {
                        text: "Daily Entry",
                        value: "dayEntry"
                    }, {
                        text: "Status",
                        value: "status"
                    }]
                }
            },
            mounted: function () {
                var t = this,
                    e = new Promise((function (t, e) {
                        window.tronWeb && window.tronWeb.ready ? t(!0) : window.addEventListener("load", (function () {
                            var e = setInterval((function () {
                                window.tronWeb && window.tronWeb.ready && t(!0), clearInterval(e)
                            }), 200);
                            setTimeout((function () {
                                clearInterval(e)
                            }), 1e4)
                        }))
                    })).then((function () {
                        return console.log("Tronweb installed and logged in"), !0
                    })).catch((function (t) {
                        return console.error("Error while detecting tronweb", t), !1
                    }));
                e["then"]((function (e) {
                    return new Promise(function () {
                        var e = Te(i.a.mark((function e(a) {
                            var n;
                            return i.a.wrap((function (e) {
                                while (1) switch (e.prev = e.next) {
                                    case 0:
                                        if (n = window.tronWeb.defaultAddress.base58, n) {
                                            e.next = 3;
                                            break
                                        }
                                        return e.abrupt("return", a(!1));
                                    case 3:
                                        return t.user.address = n, e.next = 6, t.setUpContracts();
                                    case 6:
                                        try {
                                            setInterval((function () {
                                                window.tronWeb && t.user.address !== window.tronWeb.defaultAddress.base58 && location.reload()
                                            }), 700)
                                        } catch (r) {
                                            console.log("err==>>", r)
                                        }
                                    case 7:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function (t) {
                            return e.apply(this, arguments)
                        }
                    }())
                }))
            },
            methods: {
                setUpContracts: function (t) {
                    var e = this;
                    return new Promise((function (a, n) {
                        if (!u && !t) return a(null);
                        window.tronWeb.contract().at(u || t, function () {
                            var t = Te(i.a.mark((function t(r, s) {
                                var o;
                                return i.a.wrap((function (t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            if (r) {
                                                t.next = 11;
                                                break
                                            }
                                            return e.mainContract = s, t.next = 4, e.getCurrentDay();
                                        case 4:
                                            return o = t.sent, e.currentDay = 1e6 * window.tronWeb.fromSun(o._hex), t.next = 8, e.getDivChartData();
                                        case 8:
                                            a(), t.next = 13;
                                            break;
                                        case 11:
                                            console.error("data1 error==>>", r), n(r);
                                        case 13:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })));
                            return function (e, a) {
                                return t.apply(this, arguments)
                            }
                        }())
                    }))
                },
                getDivChartData: function () {
                    var t = this;
                    return Te(i.a.mark((function e() {
                        var a, n;
                        return i.a.wrap((function (e) {
                            while (1) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next = 3, ut.a.get("/api/datapoints");
                                case 3:
                                    a = e.sent, n = a.data, t.valuesObj = n.reduce((function (t, e) {
                                        return Object.assign(t, je({}, e.day, e.datapoint))
                                    }), {}), console.log("chart data===>", t.valuesObj), e.next = 12;
                                    break;
                                case 9:
                                    e.prev = 9, e.t0 = e["catch"](0), console.log("an err occurred==>>>", e.t0);
                                case 12:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 9]
                        ])
                    })))()
                },
                runDividends: function () {
                    var t = this;
                    return Te(i.a.mark((function e() {
                        return i.a.wrap((function (e) {
                            while (1) switch (e.prev = e.next) {
                                case 0:
                                    t.mainContract.xfLobby(t.currentDay).call({
                                        shouldPollResponse: !0
                                    }).then((function (e) {
                                        t.TRXDividends = t.abbreviate_number(window.tronWeb["fromSun"](e._hex), 2) + " TRX", console.log("DIVs===>", t.TRXDividends)
                                    }));
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))()
                },
                getCurrentDay: function () {
                    return this.mainContract.currentDay().call({
                        shouldPollResponse: !0
                    })
                },
                abbreviate_number: function (t, e) {
                    var a = parseFloat(t);
                    if (null === a) return null;
                    if (0 === a) return "0";
                    e = !e || e < 0 ? 0 : e;
                    var n = a["toPrecision"](2)["split"]("e"),
                        r = 1 === n["length"] ? 0 : Math["floor"](Math["min"](n[1]["slice"](1), 14) / 3),
                        s = r < 1 ? a["toFixed"](0 + e) : (a / Math["pow"](10, 3 * r))["toFixed"](1 + e),
                        o = s < 0 ? s : Math["abs"](s),
                        i = o + ["", "K", "M", "B", "T"][r];
                    return i
                }
            }
        },
            Oe = Pe,
            Re = Object(x["a"])(Oe, _e, Ce, !1, null, null, null),
            Ae = Re.exports;
        _()(Re, {
            VCard: Wt["a"],
            VCardSubtitle: Lt["a"],
            VCardText: Lt["b"],
            VCardTitle: Lt["c"],
            VRow: Jt["a"],
            VTextField: ae["a"]
        });
        var Ie = function () {
            var t = this,
                e = t.$createElement,
                a = t._self._c || e;
            return a("div", [a("v-card", {
                staticClass: "mx-auto",
                attrs: {
                    "max-width": "800",
                    flat: ""
                }
            }, [a("v-card-title", [t._v("Your Referral Link")]), a("v-card-text", [t._v("Your referrals will earn an extra 10% minted HFM tokens on their Auction Lobby Purchase. As a referrer you will earn an extra 10%. There are no limits on number nor the amount of referrals that you can get.")]), a("v-row", {
                staticClass: "ml-4 mr-4"
            }, [a("v-text-field", {
                staticClass: "px-4",
                attrs: {
                    id: "referralInput",
                    outlined: "",
                    label: "Referral Link",
                    readonly: "",
                    value: t.referral,
                    required: ""
                }
            }), a("v-btn", {

                staticStyle: {
                    background: "linear-gradient(90deg, #07d662 0%, #07d662 100%)"
                },
                attrs: {
                    block: ""
                },
                on: {
                    click: function (e) {
                        return t.copyLink()
                    }
                }
            }, [t._v("Copy Link")])], 1)], 1)], 1)
        },
            Ee = [];

        function We(t, e, a, n, r, s, o) {
            try {
                var i = t[s](o),
                    l = i.value
            } catch (c) {
                return void a(c)
            }
            i.done ? e(l) : Promise.resolve(l).then(n, r)
        }

        function Le(t) {
            return function () {
                var e = this,
                    a = arguments;
                return new Promise((function (n, r) {
                    var s = t.apply(e, a);

                    function o(t) {
                        We(s, n, r, o, i, "next", t)
                    }

                    function i(t) {
                        We(s, n, r, o, i, "throw", t)
                    }
                    o(void 0)
                }))
            }
        }
        var Ve = {
            data: function () {
                return {
                    address: "",
                    referral: "https://www.token.hashfenix.com?ref=".concat(this.address)
                }
            },
            mounted: function () {
                var t = this,
                    e = new Promise((function (t, e) {
                        window.tronWeb && window.tronWeb.ready ? t(!0) : window.addEventListener("load", (function () {
                            var e = setInterval((function () {
                                window.tronWeb && window.tronWeb.ready && t(!0), clearInterval(e)
                            }), 200);
                            setTimeout((function () {
                                clearInterval(e)
                            }), 200)
                        }))
                    })).then((function () {
                        return console.log("Tronweb installed and logged in"), !0
                    })).catch((function (t) {
                        return console.error("Error while detecting tronweb", t), !1
                    }));
                e["then"]((function (e) {
                    return new Promise(function () {
                        var e = Le(i.a.mark((function e(a) {
                            var n;
                            return i.a.wrap((function (e) {
                                while (1) switch (e.prev = e.next) {
                                    case 0:
                                        if (n = window.tronWeb.defaultAddress.base58, n) {
                                            e.next = 3;
                                            break
                                        }
                                        return e.abrupt("return", a(!1));
                                    case 3:
                                        t.address = n, t.referral = "https://www.token.hashfenix.com?ref=".concat(t.address);
                                        try {
                                            setInterval((function () {
                                                window.tronWeb && t.address !== window.tronWeb.defaultAddress.base58 && location.reload()
                                            }), 700)
                                        } catch (r) {
                                            console.log("err==>>", r)
                                        }
                                    case 6:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function (t) {
                            return e.apply(this, arguments)
                        }
                    }())
                }))
            },
            methods: {
                copyLink: function () {
                    var t = document.getElementById("referralInput");
                    t.focus(), t.select(), t.setSelectionRange(0, 999999), document.execCommand("copy")
                }
            }
        },
            Fe = Ve,
            Xe = Object(x["a"])(Fe, Ie, Ee, !1, null, null, null),
            Be = Xe.exports;
        _()(Xe, {
            VBtn: Et["a"],
            VCard: Wt["a"],
            VCardText: Lt["b"],
            VCardTitle: Lt["c"],
            VRow: Jt["a"],
            VTextField: ae["a"]
        }), n["a"].use(F["a"]);
        var Ne = [{
            path: "/",
            name: "Home",
            component: ot
        }, {
            path: "/auction",
            name: "Auction",
            component: Se,
            props: !0
        }, {
            path: "/stake",
            name: "Stake",
            component: oe
        }, {
            path: "/dividends",
            name: "Dividends",
            component: Ae
        }, {
            path: "/referral",
            name: "Referral",
            component: Be
        }],
            Ye = new F["a"]({
                mode: "history",
                base: "/",
                routes: Ne
            }),
            ze = Ye,
            Me = a("d842"),
            Ge = a("30ef"),
            He = a.n(Ge),
            Ue = a("407d"),
            $e = a.n(Ue),
            qe = a("3a60"),
            Ke = a.n(qe);
        n["a"].use(Ke.a), n["a"].use(Me["a"].use(He.a)), n["a"].config.productionTip = !1, n["a"].component("pulse-loader", a("8a5d")), n["a"].component($e.a.name, $e.a), new n["a"]({
            created: function () {
                V.a.init()
            },
            vuetify: W,
            router: ze,
            render: function (t) {
                return t(I)
            }
        }).$mount("#app")
    },
    "85ec": function (t, e, a) { }
});
//# sourceMappingURL=app.a2fe493e.js.map