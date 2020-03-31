function $(A) {
    if (A == null) {
        return null
    }
    if (typeof(A) == "string") {
        return document.getElementById(A)
    } else {
        if (typeof(A) == "object") {
            return A
        }
    }
}
function $A() {
    var B = new Array();
    for (var C = 0; C < arguments.length; C++) {
        if (Base.isArray(arguments[C])) {
            for (var A = 0; A < arguments[C].length; A++) {
                B.push($(arguments[C][A]))
            }
        } else {
            B.push($(arguments[C]))
        }
    }
    return B
}
function $w(A) {
    if (!Object.isString(A)) {
        return []
    }
    A = A.strip();
    return A ? A.split(/\s+/) : []
}
Object.extend = function(A, C) {
    for (var B in C) {
        A[B] = C[B]
    }
    return A
};
Function.prototype.bind = function() {
    var A = this,
    C = $A(arguments),
    B = C.shift();
    return function() {
        return A.apply(B, C.concat($A(arguments)))
    }
};
var Base = {
    Browser: {
        IE: !!(window.attachEvent && !window.opera),
        Opera: !!window.opera,
        WebKit: navigator.userAgent.indexOf("AppleWebKit/") > -1,
        Gecko: navigator.userAgent.indexOf("Gecko") > -1 && navigator.userAgent.indexOf("KHTML") == -1
    },
    domCreat: function(A) {
        return document.createElement(A)
    },
    getMouseXY: function(A) {
        A = A ? A: (window.event ? window.event: null);
        if (A.pageX || A.pageY) {
            return {
                x: A.pageX,
                y: A.pageY
            }
        } else {
            return {
                x: A.clientX + document.body.scrollLeft - document.body.clientLeft,
                y: A.clientY + document.body.scrollTop - document.body.clientTop
            }
        }
    },
    getSrcDom: function(A) {
        A = A ? A: (window.event ? window.event: null);
        if (Base.Browser.IE) {
            return A.srcElement
        } else {
            return A.target
        }
    },
    addEvent: function(C, A, B) {
        if (window.addEventListener) {
            C.addEventListener(A, B, false)
        } else {
            if (window.attachEvent) {
                C.attachEvent("on" + A, B)
            } else {
                C["on" + A] = B
            }
        }
    },
    removeEvent: function(C, A, B) {
        if (C.removeEventListener) {
            C.removeEventListener(A, B, false)
        } else {
            if (C.detachEvent) {
                C.detachEvent("on" + A, B)
            } else {
                C["on" + A] = null
            }
        }
    },
    getView: function() {
        var A = self.innerHeight;
        var B = self.innerWidth;
        var C = document.compatMode;
        if ((C || Base.Browser.IE) && !Base.Browser.Opera) {
            A = (C == "CSS1Compat") ? document.documentElement.clientHeight: document.body.clientHeight
        }
        if (C || Base.Browser.IE) {
            B = (C == "CSS1Compat") ? document.documentElement.clientWidth: document.body.clientWidth
        }
        return {
            w: B,
            h: A
        }
    },
    getWindowView: function() {
        var B = (document.compatMode != "CSS1Compat") ? document.body.scrollWidth: document.documentElement.scrollWidth;
        var D = (document.compatMode != "CSS1Compat") ? document.body.scrollHeight: document.documentElement.scrollHeight;
        var A = Math.max(B, Base.getView().w);
        var C = Math.max(D, Base.getView().h);
        return {
            w: A,
            h: C
        }
    },
    getDomWH: function(C) {
        var B = $(C).offsetWidth;
        var A = $(C).offsetHeight;
        return {
            w: B,
            h: A
        }
    },
    getStyle: function(B, C) {
        if (Base.Browser.IE) {
            B = $(B);
            C = (C == "float" || C == "cssFloat") ? "styleFloat": C;
            var D = B.style[C];
            if (!D && B.currentStyle) {
                D = B.currentStyle[C]
            }
            if (C == "opacity") {
                if (D = (Base.getStyle(B, "filter") || "").match(/alpha\(opacity=(.*)\)/)) {
                    if (D[1]) {
                        return parseFloat(D[1]) / 100
                    }
                }
                return 1
            }
            return D
        } else {
            B = $(B);
            C = C == "float" ? "cssFloat": C;
            var D = B.style[C];
            if (!D) {
                var A = document.defaultView.getComputedStyle(B, null);
                D = A ? A[C] : null
            }
            if (C == "opacity") {
                return D ? parseFloat(D) : 1
            }
            return D == "auto" ? null: D
        }
    },
    setStyle: function(A, B) {
        A = $(A);
        var D = A.style;
        for (var C in B) {
            if (C == "opacity") {
                Base.setOpacity(A, B[C])
            } else {
                D[(C == "float" || C == "cssFloat") ? (D.styleFloat === undefined ? "cssFloat": "styleFloat") : C] = B[C]
            }
        }
        return A
    },
    setOpacity: function(A, D) {
        if (Base.Browser.IE) {
            A = $(A);
            var C = Base.getStyle(A, "filter"),
            B = A.style;
            if (D == 1 || D === "") {
                B.filter = C.replace(/alpha\([^\)]*\)/gi, "");
                return A
            } else {
                if (D < 0.00001) {
                    D = 0
                }
            }
            B.filter = C.replace(/alpha\([^\)]*\)/gi, "") + "alpha(opacity=" + (D * 100) + ")";
            return A
        } else {
            if (Base.Browser.Gecko) {
                A = $(A);
                A.style.opacity = (D == 1 || D === "") ? "": (D < 0.00001) ? 0 : D;
                return A
            } else {
                A = $(A);
                A.style.opacity = (D == 1 || D === "") ? "": (D < 0.00001) ? 0 : D;
                return A
            }
        }
    },
    getOpacity: function(A) {
        return Base.getStyle(elemnet, "opacity")
    },
    getScroll: function() {
        var C, B, A, D;
        if (document.documentElement && document.documentElement.scrollTop) {
            C = document.documentElement.scrollTop;
            B = document.documentElement.scrollLeft;
            A = document.documentElement.scrollWidth;
            D = document.documentElement.scrollHeight
        } else {
            if (document.body) {
                C = document.body.scrollTop;
                B = document.body.scrollLeft;
                A = document.body.scrollWidth;
                D = document.body.scrollHeight
            }
        }
        return {
            t: C,
            l: B,
            w: A,
            h: D
        }
    },
    cleanWhitespace: function(E, C) {
        var B = $(E);
        var D = B.firstChild;
        while (D) {
            var A = D.nextSibling;
            if (D.nodeType == 3 && !/\S/.test(D.nodeValue)) {
                B.removeChild(D)
            } else {
                if (D.nodeType != 3 && C) {
                    Base.cleanWhitespace(D, true)
                }
            }
            D = A
        }
        return B
    },
    domRealPos: function(D) {
        var C = 0,
        A = 0;
        var B = $(D);
        do {
            A += B.offsetTop || 0;
            C += B.offsetLeft || 0;
            B = B.offsetParent
        } while ( B );
        return [C, A]
    },
    positionOffset: function(E) {
        var A = 0,
        D = 0;
        var B = $(E);
        do {
            A += B.offsetTop || 0;
            D += B.offsetLeft || 0;
            B = B.offsetParent;
            if (B) {
                if (B.tagName == "BODY") {
                    break
                }
                var C = Element.getStyle(B, "position");
                if (C == "relative" || C == "absolute") {
                    break
                }
            }
        } while ( B );
        return [D, A]
    },
    within: function(C, A, D) {
        var B = $(C);
        this.offset = this.domRealPos(C);
        return (D >= this.offset[1] && D < this.offset[1] + B.offsetHeight && A >= this.offset[0] && A < this.offset[0] + B.offsetWidth)
    },
    setHomepage: function(B) {
        if (document.all) {
            document.body.style.behavior = "url(#default#homepage)";
            document.body.setHomePage(B)
        } else {
            if (window.sidebar) {
                if (window.netscape) {
                    try {
                        netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
                        var A = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefBranch);
                        A.setCharPref("browser.startup.homepage", B)
                    } catch(C) {
                        alert("该操作被浏览器拒绝，如果想启用该功能，请在地址栏内输入 about:config,然后将项 signed.applets.codebase_principal_support 值该为true")
                    }
                }
            }
        }
    },
    addFavorite: function(A, B) {
        if (window.external || window.external.addFavorite) {
            window.external.addFavorite(A, B)
        } else {
            if (window.sidebar) {
                window.sidebar.addPanel(B, A, "")
            }
        }
    },
    isArray: function(A) {
        return A && A.constructor === Array
    },
    isElement: function(A) {
        return A && A.nodeType == 1
    },
    isString: function(A) {
        return typeof A == "string"
    },
    isNumber: function(A) {
        return typeof A == "number"
    }
};
Object.extend(Array.prototype, {
    getMax: function() {
        return Math.max.apply(null, this)
    }
});
Object.extend(String.prototype, {
    strip: function() {
        return this.replace(/^\s+/, "").replace(/\s+$/, "")
    },
    encodeHTML: function() {
        var A = this.valueOf();
        A = A.replace(/\&/g, "&amp;");
        A = A.replace(/\>/g, "&gt;");
        A = A.replace(/\</g, "&lt;");
        A = A.replace(/\"/g, "&quot;");
        A = A.replace(/\'/g, "&#39;");
        return A
    },
    decodeHTML: function() {
        var A = this.valueOf();
        A = A.replace(/&amp;/g, "&");
        A = A.replace(/&gt;/g, ">");
        A = A.replace(/&lt;/g, "<");
        A = A.replace(/&quot;/g, '"');
        A = A.replace(/&#039;/g, "'");
        return A
    },
    isBlank: function() {
        return /^\s*$/.test(this)
    },
    stripTags: function() {
        return this.replace(/<\/?[^>]+>/gi, "")
    },
    stripScripts: function() {
        var A = "<script[^>]*>([\\S\\s]*?)<\/script>";
        return this.replace(new RegExp(A, "img"), "")
    }
});
var Ajax = {
    createXMLHttp: function() {
        if (typeof XMLHttpRequest != "undefined") {
            return new XMLHttpRequest()
        } else {
            if (window.ActiveXObject) {
                var A = ["MSXML2.XMLHttp.5.0", "MSXML2.XMLHttp.4.0", "MSXML2.XMLHttp.3.0", "MSXML2.XMLHttp", "Microsoft.XMLHttp"];
                for (var B = 0; B < A.length; B++) {
                    try {
                        var D = new ActiveXObject(A[B]);
                        return D
                    } catch(C) {}
                }
            }
        }
    },
    get: function(B, A, E, D) {
        try {
            var C = Ajax.createXMLHttp();
            if (A != "") {
                A = "?" + A
            }
            C.open("get", B + A, !D);
            C.onreadystatechange = function() {
                if (C.readyState == 4) {
                    if (C.status == 200 || C.status == 304) {
                        E(C)
                    }
                }
            };
            C.send("")
        } catch(F) {}
    },
    post: function(B, A, C, E) {
        var D = new Ajax.createXMLHttp();
        D.open("POST", B, !E);
        D.setRequestHeader("Method", "POST " + B + " HTTP/1.1");
        D.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        D.onreadystatechange = function() {
            if (D.readyState == 4) {
                if (D.status == 200 || D.status == 304) {
                    C(D)
                }
            }
        };
        D.send(A)
    }
};
var Cookie = {
    getExpDate: function(D, A, C) {
        var B = new Date();
        if (typeof(D) == "number" && typeof(A) == "number" && typeof(A) == "number") {
            B.setDate(B.getDate() + parseInt(D));
            B.setHours(B.getHours() + parseInt(A));
            B.setMinutes(B.getMinutes() + parseInt(C));
            return B.toGMTString()
        }
    },
    setCookie: function(C, J, D, K, G, A) {
        var B = C + "=" + J;
        var E = (D == null) ? "": " ;expires = " + D;
        var F = (K == null) ? "": " ;path = " + K;
        var I = (G == null) ? "": " ;domain = " + G;
        var H = (A) ? ";secure": "";
        document.cookie = B + E + F + I + H
    },
    getCookie: function(A) {
        var C = "";
        var B = A + "=";
        if (document.cookie.length > 0) {
            offset = document.cookie.indexOf(B);
            if (offset != -1) {
                offset += B.length;
                end = document.cookie.indexOf(";", offset);
                if (end == -1) {
                    end = document.cookie.length
                }
                C = unescape(document.cookie.substring(offset, end))
            }
        }
        return C
    },
    deleteCookie: function(B) {
        var A = new Date();
        A.setTime(A.getTime() - 1);
        setCookie(B, "Delete Cookie", A, null, null, false)
    }
};
