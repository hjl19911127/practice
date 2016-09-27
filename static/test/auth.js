'use strict';
var auth = {
    keys: {
        'access_token': true,
        'mac_key': true,
        'diff': false
    },
    getMacToken: function() {
        return this.getQuery();
    },
    createNonce: function(diff) {
        function rnd(min, max) {
            var arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
            var range = max ? max - min : min,
                str = '',
                i, length = arr.length - 1;
            for (i = 0; i < range; i++) {
                str += arr[Math.round(Math.random() * length)];
            }
            return str;
        }
        return new Date().getTime() + (parseInt(diff) || 0) + ':' + rnd(8);
    },
    getQuery: function() {
        this.query = location.search && location.search.substr(1);

        if (!this.query) return { code: 400, message: '参数错误' };
        this.query = this.query.split('&');

        var c = {};
        for (var i = 0, len = this.query.length; i < len; i++) {
            var a = this.query[i].split('=');
            if (c[a[0].toLowerCase()] === undefined) {
                c[a[0].toLowerCase()] = a[1];
            }
        }
        this.query = c;
        for (var j in this.keys) {
            if (this.keys[j] && (this.query[j] === undefined || this.query[j] === '')) {
                return { code: 400, message: '参数' + j + '不存在' };
            }
        }
        return this.getAuthentization();
    },
    querystring: function(key) {
        return this.query[key];
    },
    getAccessToken: function() {
        return this.querystring('access_token');
    },
    getAuthentization: function(method, url, host) {
        return ['MAC id="' + 'CFBF7AE20C029E107596DD930C31407EB5217AD17D62975E371DFD3F0562F021' + '"',
            'nonce="' + this._getNonce() + '"',
            'mac="' + this._getMac(method, url, host) + '"'
        ].join(',');
    },
    _getMacContent: function(method, url, host) {
        return [this.nonce, method, url, host, ''].join('\n');
    },
    _getMac: function(method, url, host) {
        return new window.jsSHA(this._getMacContent(method, url, host), 'TEXT')
            .getHMAC('XflQdE0neP', 'TEXT', 'SHA-256', 'B64');
    },
    _getNonce: function() {
        return (this.nonce = this.createNonce(this.querystring('diff')));
    }
};
