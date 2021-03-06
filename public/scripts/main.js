!(function(r) {
  var o = {};
  function n(t) {
    if (o[t]) return o[t].exports;
    var e = (o[t] = { i: t, l: !1, exports: {} });
    return r[t].call(e.exports, e, e.exports, n), (e.l = !0), e.exports;
  }
  (n.m = r),
    (n.c = o),
    (n.d = function(t, e, r) {
      n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
    }),
    (n.r = function(t) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(t, '__esModule', { value: !0 });
    }),
    (n.t = function(e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var o in e)
          n.d(
            r,
            o,
            function(t) {
              return e[t];
            }.bind(null, o)
          );
      return r;
    }),
    (n.n = function(t) {
      var e =
        t && t.__esModule
          ? function() {
              return t.default;
            }
          : function() {
              return t;
            };
      return n.d(e, 'a', e), e;
    }),
    (n.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (n.p = ''),
    n((n.s = 0));
})([
  function(t, e, r) {
    t.exports = r(4);
  },
  function(t, e, r) {},
  ,
  function(t, e) {
    function r(t) {
      var e = new Error("Cannot find module '" + t + "'");
      throw ((e.code = 'MODULE_NOT_FOUND'), e);
    }
    (r.keys = function() {
      return [];
    }),
      (r.resolve = r),
      ((t.exports = r).id = 3);
  },
  function(t, e, r) {
    'use strict';
    r.r(e);
    r(1);
    var o = 'URLSearchParams' in self,
      n = 'Symbol' in self && 'iterator' in Symbol,
      a =
        'FileReader' in self &&
        'Blob' in self &&
        (function() {
          try {
            return new Blob(), !0;
          } catch (t) {
            return !1;
          }
        })(),
      i = 'FormData' in self,
      s = 'ArrayBuffer' in self;
    if (s)
      var u = [
          '[object Int8Array]',
          '[object Uint8Array]',
          '[object Uint8ClampedArray]',
          '[object Int16Array]',
          '[object Uint16Array]',
          '[object Int32Array]',
          '[object Uint32Array]',
          '[object Float32Array]',
          '[object Float64Array]'
        ],
        f =
          ArrayBuffer.isView ||
          function(t) {
            return t && -1 < u.indexOf(Object.prototype.toString.call(t));
          };
    function d(t) {
      if (
        ('string' != typeof t && (t = String(t)),
        /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t))
      )
        throw new TypeError('Invalid character in header field name');
      return t.toLowerCase();
    }
    function h(t) {
      return 'string' != typeof t && (t = String(t)), t;
    }
    function c(e) {
      var t = {
        next: function() {
          var t = e.shift();
          return { done: void 0 === t, value: t };
        }
      };
      return (
        n &&
          (t[Symbol.iterator] = function() {
            return t;
          }),
        t
      );
    }
    function l(e) {
      (this.map = {}),
        e instanceof l
          ? e.forEach(function(t, e) {
              this.append(e, t);
            }, this)
          : Array.isArray(e)
            ? e.forEach(function(t) {
                this.append(t[0], t[1]);
              }, this)
            : e &&
              Object.getOwnPropertyNames(e).forEach(function(t) {
                this.append(t, e[t]);
              }, this);
    }
    function y(t) {
      if (t.bodyUsed) return Promise.reject(new TypeError('Already read'));
      t.bodyUsed = !0;
    }
    function p(r) {
      return new Promise(function(t, e) {
        (r.onload = function() {
          t(r.result);
        }),
          (r.onerror = function() {
            e(r.error);
          });
      });
    }
    function b(t) {
      var e = new FileReader(),
        r = p(e);
      return e.readAsArrayBuffer(t), r;
    }
    function m(t) {
      if (t.slice) return t.slice(0);
      var e = new Uint8Array(t.byteLength);
      return e.set(new Uint8Array(t)), e.buffer;
    }
    function v() {
      return (
        (this.bodyUsed = !1),
        (this._initBody = function(t) {
          var e;
          (this._bodyInit = t)
            ? 'string' == typeof t
              ? (this._bodyText = t)
              : a && Blob.prototype.isPrototypeOf(t)
                ? (this._bodyBlob = t)
                : i && FormData.prototype.isPrototypeOf(t)
                  ? (this._bodyFormData = t)
                  : o && URLSearchParams.prototype.isPrototypeOf(t)
                    ? (this._bodyText = t.toString())
                    : s && a && ((e = t) && DataView.prototype.isPrototypeOf(e))
                      ? ((this._bodyArrayBuffer = m(t.buffer)),
                        (this._bodyInit = new Blob([this._bodyArrayBuffer])))
                      : s && (ArrayBuffer.prototype.isPrototypeOf(t) || f(t))
                        ? (this._bodyArrayBuffer = m(t))
                        : (this._bodyText = t = Object.prototype.toString.call(
                            t
                          ))
            : (this._bodyText = ''),
            this.headers.get('content-type') ||
              ('string' == typeof t
                ? this.headers.set('content-type', 'text/plain;charset=UTF-8')
                : this._bodyBlob && this._bodyBlob.type
                  ? this.headers.set('content-type', this._bodyBlob.type)
                  : o &&
                    URLSearchParams.prototype.isPrototypeOf(t) &&
                    this.headers.set(
                      'content-type',
                      'application/x-www-form-urlencoded;charset=UTF-8'
                    ));
        }),
        a &&
          ((this.blob = function() {
            var t = y(this);
            if (t) return t;
            if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
            if (this._bodyArrayBuffer)
              return Promise.resolve(new Blob([this._bodyArrayBuffer]));
            if (this._bodyFormData)
              throw new Error('could not read FormData body as blob');
            return Promise.resolve(new Blob([this._bodyText]));
          }),
          (this.arrayBuffer = function() {
            return this._bodyArrayBuffer
              ? y(this) || Promise.resolve(this._bodyArrayBuffer)
              : this.blob().then(b);
          })),
        (this.text = function() {
          var t,
            e,
            r,
            o = y(this);
          if (o) return o;
          if (this._bodyBlob)
            return (
              (t = this._bodyBlob),
              (e = new FileReader()),
              (r = p(e)),
              e.readAsText(t),
              r
            );
          if (this._bodyArrayBuffer)
            return Promise.resolve(
              (function(t) {
                for (
                  var e = new Uint8Array(t), r = new Array(e.length), o = 0;
                  o < e.length;
                  o++
                )
                  r[o] = String.fromCharCode(e[o]);
                return r.join('');
              })(this._bodyArrayBuffer)
            );
          if (this._bodyFormData)
            throw new Error('could not read FormData body as text');
          return Promise.resolve(this._bodyText);
        }),
        i &&
          (this.formData = function() {
            return this.text().then(g);
          }),
        (this.json = function() {
          return this.text().then(JSON.parse);
        }),
        this
      );
    }
    (l.prototype.append = function(t, e) {
      (t = d(t)), (e = h(e));
      var r = this.map[t];
      this.map[t] = r ? r + ', ' + e : e;
    }),
      (l.prototype.delete = function(t) {
        delete this.map[d(t)];
      }),
      (l.prototype.get = function(t) {
        return (t = d(t)), this.has(t) ? this.map[t] : null;
      }),
      (l.prototype.has = function(t) {
        return this.map.hasOwnProperty(d(t));
      }),
      (l.prototype.set = function(t, e) {
        this.map[d(t)] = h(e);
      }),
      (l.prototype.forEach = function(t, e) {
        for (var r in this.map)
          this.map.hasOwnProperty(r) && t.call(e, this.map[r], r, this);
      }),
      (l.prototype.keys = function() {
        var r = [];
        return (
          this.forEach(function(t, e) {
            r.push(e);
          }),
          c(r)
        );
      }),
      (l.prototype.values = function() {
        var e = [];
        return (
          this.forEach(function(t) {
            e.push(t);
          }),
          c(e)
        );
      }),
      (l.prototype.entries = function() {
        var r = [];
        return (
          this.forEach(function(t, e) {
            r.push([e, t]);
          }),
          c(r)
        );
      }),
      n && (l.prototype[Symbol.iterator] = l.prototype.entries);
    var w = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];
    function _(t, e) {
      var r,
        o,
        n = (e = e || {}).body;
      if (t instanceof _) {
        if (t.bodyUsed) throw new TypeError('Already read');
        (this.url = t.url),
          (this.credentials = t.credentials),
          e.headers || (this.headers = new l(t.headers)),
          (this.method = t.method),
          (this.mode = t.mode),
          (this.signal = t.signal),
          n || null == t._bodyInit || ((n = t._bodyInit), (t.bodyUsed = !0));
      } else this.url = String(t);
      if (
        ((this.credentials =
          e.credentials || this.credentials || 'same-origin'),
        (!e.headers && this.headers) || (this.headers = new l(e.headers)),
        (this.method = ((r = e.method || this.method || 'GET'),
        (o = r.toUpperCase()),
        -1 < w.indexOf(o) ? o : r)),
        (this.mode = e.mode || this.mode || null),
        (this.signal = e.signal || this.signal),
        (this.referrer = null),
        ('GET' === this.method || 'HEAD' === this.method) && n)
      )
        throw new TypeError('Body not allowed for GET or HEAD requests');
      this._initBody(n);
    }
    function g(t) {
      var n = new FormData();
      return (
        t
          .trim()
          .split('&')
          .forEach(function(t) {
            if (t) {
              var e = t.split('='),
                r = e.shift().replace(/\+/g, ' '),
                o = e.join('=').replace(/\+/g, ' ');
              n.append(decodeURIComponent(r), decodeURIComponent(o));
            }
          }),
        n
      );
    }
    function E(t, e) {
      e || (e = {}),
        (this.type = 'default'),
        (this.status = void 0 === e.status ? 200 : e.status),
        (this.ok = 200 <= this.status && this.status < 300),
        (this.statusText = 'statusText' in e ? e.statusText : 'OK'),
        (this.headers = new l(e.headers)),
        (this.url = e.url || ''),
        this._initBody(t);
    }
    (_.prototype.clone = function() {
      return new _(this, { body: this._bodyInit });
    }),
      v.call(_.prototype),
      v.call(E.prototype),
      (E.prototype.clone = function() {
        return new E(this._bodyInit, {
          status: this.status,
          statusText: this.statusText,
          headers: new l(this.headers),
          url: this.url
        });
      }),
      (E.error = function() {
        var t = new E(null, { status: 0, statusText: '' });
        return (t.type = 'error'), t;
      });
    var A = [301, 302, 303, 307, 308];
    E.redirect = function(t, e) {
      if (-1 === A.indexOf(e)) throw new RangeError('Invalid status code');
      return new E(null, { status: e, headers: { location: t } });
    };
    var T = self.DOMException;
    try {
      new T();
    } catch (t) {
      ((T = function(t, e) {
        (this.message = t), (this.name = e);
        var r = Error(t);
        this.stack = r.stack;
      }).prototype = Object.create(Error.prototype)),
        (T.prototype.constructor = T);
    }
    function x(n, s) {
      return new Promise(function(o, t) {
        var e = new _(n, s);
        if (e.signal && e.signal.aborted)
          return t(new T('Aborted', 'AbortError'));
        var i = new XMLHttpRequest();
        function r() {
          i.abort();
        }
        (i.onload = function() {
          var t,
            n,
            e = {
              status: i.status,
              statusText: i.statusText,
              headers: ((t = i.getAllResponseHeaders() || ''),
              (n = new l()),
              t
                .replace(/\r?\n[\t ]+/g, ' ')
                .split(/\r?\n/)
                .forEach(function(t) {
                  var e = t.split(':'),
                    r = e.shift().trim();
                  if (r) {
                    var o = e.join(':').trim();
                    n.append(r, o);
                  }
                }),
              n)
            };
          e.url =
            'responseURL' in i ? i.responseURL : e.headers.get('X-Request-URL');
          var r = 'response' in i ? i.response : i.responseText;
          o(new E(r, e));
        }),
          (i.onerror = function() {
            t(new TypeError('Network request failed'));
          }),
          (i.ontimeout = function() {
            t(new TypeError('Network request failed'));
          }),
          (i.onabort = function() {
            t(new T('Aborted', 'AbortError'));
          }),
          i.open(e.method, e.url, !0),
          'include' === e.credentials
            ? (i.withCredentials = !0)
            : 'omit' === e.credentials && (i.withCredentials = !1),
          'responseType' in i && a && (i.responseType = 'blob'),
          e.headers.forEach(function(t, e) {
            i.setRequestHeader(e, t);
          }),
          e.signal &&
            (e.signal.addEventListener('abort', r),
            (i.onreadystatechange = function() {
              4 === i.readyState && e.signal.removeEventListener('abort', r);
            })),
          i.send(void 0 === e._bodyInit ? null : e._bodyInit);
      });
    }
    (x.polyfill = !0),
      self.fetch ||
        ((self.fetch = x),
        (self.Headers = l),
        (self.Request = _),
        (self.Response = E));
    var B;
    (B = r(3)).keys().forEach(B);
    var O;
    (O = function() {
      fetch(
        ''.concat(
          document.documentElement.dataset.assetsBaseUrl || '/',
          'images/icons.svg'
        )
      )
        .then(function(t) {
          if (!t.ok) throw Error(''.concat(t.statusText, ': ').concat(t.url));
          return t.text();
        })
        .then(function(t) {
          var e = document.createElement('div');
          (e.innerHTML = t),
            (e.style.display = 'none'),
            document.body.appendChild(e);
        });
    }),
      (document.attachEvent
      ? 'complete' === document.readyState
      : 'loading' !== document.readyState)
        ? O()
        : document.addEventListener('DOMContentLoaded', O);
  }
]);
