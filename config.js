System.config({
  "baseURL": "/",
  "transpiler": "babel",
  "babelOptions": {
    "optional": [
      "runtime"
    ],
    "stage": 0,
    "blacklist": []
  },
  "paths": {
    "*": "*.js",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js"
  }
});

System.config({
  "map": {
    "alt": "npm:alt@0.16.7",
    "axios": "npm:axios@0.5.4",
    "babel": "npm:babel-core@5.4.7",
    "babel-runtime": "npm:babel-runtime@5.4.7",
    "caniuse-api": "npm:caniuse-api@1.3.1",
    "classnames": "npm:classnames@2.1.2",
    "core-js": "npm:core-js@0.9.13",
    "css": "github:systemjs/plugin-css@0.1.11",
    "csstyle": "npm:csstyle@1.4.0",
    "debounce": "npm:debounce@1.0.0",
    "immutable": "npm:immutable@3.7.3",
    "json": "github:systemjs/plugin-json@0.1.0",
    "jsx": "github:floatdrop/plugin-jsx@1.1.0",
    "moment": "github:moment/moment@2.10.3",
    "object-assign": "npm:object-assign@2.0.0",
    "react": "npm:react@0.14.0-alpha3",
    "react-router": "github:rackt/react-router@master",
    "react13": "npm:react@0.13.3",
    "github:floatdrop/plugin-jsx@1.1.0": {
      "react-tools": "npm:react-tools@0.13.3"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.2.2"
    },
    "github:jspm/nodelibs-constants@0.1.0": {
      "constants-browserify": "npm:constants-browserify@0.0.1"
    },
    "github:jspm/nodelibs-crypto@0.1.0": {
      "crypto-browserify": "npm:crypto-browserify@3.9.14"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-http@1.7.1": {
      "Base64": "npm:Base64@0.2.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-https@0.1.0": {
      "https-browserify": "npm:https-browserify@0.0.0"
    },
    "github:jspm/nodelibs-os@0.1.0": {
      "os-browserify": "npm:os-browserify@0.1.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-string_decoder@0.1.0": {
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "github:systemjs/plugin-css@0.1.11": {
      "clean-css": "npm:clean-css@3.1.9",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:alt@0.16.7": {
      "es-symbol": "npm:es-symbol@1.1.2",
      "eventemitter3": "npm:eventemitter3@0.1.6",
      "flux": "npm:flux@2.0.3"
    },
    "npm:amdefine@0.1.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:asn1.js@2.0.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "bn.js": "npm:bn.js@2.0.5",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:ast-types@0.6.16": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:axios@0.5.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "es6-promise": "npm:es6-promise@2.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:browserify-aes@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:browserify-rsa@2.0.1": {
      "bn.js": "npm:bn.js@2.0.5",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "randombytes": "npm:randombytes@2.0.1"
    },
    "npm:browserify-sign@3.0.2": {
      "bn.js": "npm:bn.js@2.0.5",
      "browserify-rsa": "npm:browserify-rsa@2.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.1",
      "create-hmac": "npm:create-hmac@1.1.3",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@3.0.3",
      "inherits": "npm:inherits@2.0.1",
      "parse-asn1": "npm:parse-asn1@3.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:browserslist@0.2.0": {
      "caniuse-db": "npm:caniuse-db@1.0.30000177",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:buffer@3.2.2": {
      "base64-js": "npm:base64-js@0.0.8",
      "ieee754": "npm:ieee754@1.1.5",
      "is-array": "npm:is-array@1.0.1"
    },
    "npm:caniuse-api@1.3.1": {
      "browserslist": "npm:browserslist@0.2.0",
      "caniuse-db": "npm:caniuse-db@1.0.30000177",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "lodash.memoize": "npm:lodash.memoize@2.4.1",
      "lodash.uniq": "npm:lodash.uniq@2.4.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "shelljs": "npm:shelljs@0.3.0"
    },
    "npm:classnames@2.1.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:clean-css@3.1.9": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "commander": "npm:commander@2.6.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "source-map": "npm:source-map@0.1.43",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:commander@2.5.1": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:commander@2.6.0": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:commoner@0.10.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "commander": "npm:commander@2.5.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "glob": "npm:glob@4.2.2",
      "graceful-fs": "npm:graceful-fs@3.0.7",
      "iconv-lite": "npm:iconv-lite@0.4.9",
      "install": "npm:install@0.1.8",
      "mkdirp": "npm:mkdirp@0.5.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "private": "npm:private@0.1.6",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "q": "npm:q@1.1.2",
      "recast": "npm:recast@0.9.18",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:constants-browserify@0.0.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-js@0.9.13": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-util-is@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:create-ecdh@2.0.1": {
      "bn.js": "npm:bn.js@2.0.5",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@3.0.3"
    },
    "npm:create-hash@1.1.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "ripemd160": "npm:ripemd160@1.0.1",
      "sha.js": "npm:sha.js@2.4.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:create-hmac@1.1.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:crypto-browserify@3.9.14": {
      "browserify-aes": "npm:browserify-aes@1.0.1",
      "browserify-sign": "npm:browserify-sign@3.0.2",
      "create-ecdh": "npm:create-ecdh@2.0.1",
      "create-hash": "npm:create-hash@1.1.1",
      "create-hmac": "npm:create-hmac@1.1.3",
      "diffie-hellman": "npm:diffie-hellman@3.0.2",
      "inherits": "npm:inherits@2.0.1",
      "pbkdf2": "npm:pbkdf2@3.0.4",
      "public-encrypt": "npm:public-encrypt@2.0.1",
      "randombytes": "npm:randombytes@2.0.1"
    },
    "npm:csstyle@1.4.0": {
      "lodash": "npm:lodash@3.9.1"
    },
    "npm:debounce@1.0.0": {
      "date-now": "npm:date-now@1.0.1"
    },
    "npm:diffie-hellman@3.0.2": {
      "bn.js": "npm:bn.js@2.0.5",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "miller-rabin": "npm:miller-rabin@2.0.1",
      "randombytes": "npm:randombytes@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:elliptic@3.0.3": {
      "bn.js": "npm:bn.js@2.0.5",
      "brorand": "npm:brorand@1.0.5",
      "hash.js": "npm:hash.js@1.0.3",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:envify@3.4.0": {
      "jstransform": "npm:jstransform@10.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "through": "npm:through@2.3.7"
    },
    "npm:es-symbol@1.1.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:es6-promise@2.1.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:esprima-fb@10001.1.0-dev-harmony-fb": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:esprima-fb@13001.1001.0-dev-harmony-fb": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:eventemitter3@0.1.6": {
      "process": "github:jspm/nodelibs-process@0.1.1",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:glob@4.2.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inflight": "npm:inflight@1.0.4",
      "inherits": "npm:inherits@2.0.1",
      "minimatch": "npm:minimatch@1.0.0",
      "once": "npm:once@1.3.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:graceful-fs@3.0.7": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:hash.js@1.0.3": {
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:https-browserify@0.0.0": {
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:iconv-lite@0.4.9": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:inflight@1.0.4": {
      "once": "npm:once@1.3.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "wrappy": "npm:wrappy@1.0.1"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:install@0.1.8": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:jstransform@10.1.0": {
      "base62": "npm:base62@0.1.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "esprima-fb": "npm:esprima-fb@13001.1001.0-dev-harmony-fb",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "source-map": "npm:source-map@0.1.31"
    },
    "npm:lodash._basebind@2.4.1": {
      "lodash._basecreate": "npm:lodash._basecreate@2.4.1",
      "lodash._setbinddata": "npm:lodash._setbinddata@2.4.1",
      "lodash._slice": "npm:lodash._slice@2.4.1",
      "lodash.isobject": "npm:lodash.isobject@2.4.1"
    },
    "npm:lodash._basecreate@2.4.1": {
      "lodash._isnative": "npm:lodash._isnative@2.4.1",
      "lodash.isobject": "npm:lodash.isobject@2.4.1",
      "lodash.noop": "npm:lodash.noop@2.4.1"
    },
    "npm:lodash._basecreatecallback@2.4.1": {
      "lodash._setbinddata": "npm:lodash._setbinddata@2.4.1",
      "lodash.bind": "npm:lodash.bind@2.4.1",
      "lodash.identity": "npm:lodash.identity@2.4.1",
      "lodash.support": "npm:lodash.support@2.4.1"
    },
    "npm:lodash._basecreatewrapper@2.4.1": {
      "lodash._basecreate": "npm:lodash._basecreate@2.4.1",
      "lodash._setbinddata": "npm:lodash._setbinddata@2.4.1",
      "lodash._slice": "npm:lodash._slice@2.4.1",
      "lodash.isobject": "npm:lodash.isobject@2.4.1"
    },
    "npm:lodash._baseisequal@2.4.1": {
      "lodash._getarray": "npm:lodash._getarray@2.4.1",
      "lodash._objecttypes": "npm:lodash._objecttypes@2.4.1",
      "lodash._releasearray": "npm:lodash._releasearray@2.4.1",
      "lodash.forin": "npm:lodash.forin@2.4.1",
      "lodash.isfunction": "npm:lodash.isfunction@2.4.1"
    },
    "npm:lodash._baseuniq@2.4.1": {
      "lodash._baseindexof": "npm:lodash._baseindexof@2.4.1",
      "lodash._cacheindexof": "npm:lodash._cacheindexof@2.4.1",
      "lodash._createcache": "npm:lodash._createcache@2.4.1",
      "lodash._getarray": "npm:lodash._getarray@2.4.1",
      "lodash._largearraysize": "npm:lodash._largearraysize@2.4.1",
      "lodash._releasearray": "npm:lodash._releasearray@2.4.1",
      "lodash._releaseobject": "npm:lodash._releaseobject@2.4.1",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:lodash._cacheindexof@2.4.1": {
      "lodash._baseindexof": "npm:lodash._baseindexof@2.4.1",
      "lodash._keyprefix": "npm:lodash._keyprefix@2.4.2"
    },
    "npm:lodash._cachepush@2.4.1": {
      "lodash._keyprefix": "npm:lodash._keyprefix@2.4.2"
    },
    "npm:lodash._createcache@2.4.1": {
      "lodash._cachepush": "npm:lodash._cachepush@2.4.1",
      "lodash._getobject": "npm:lodash._getobject@2.4.1",
      "lodash._releaseobject": "npm:lodash._releaseobject@2.4.1"
    },
    "npm:lodash._createwrapper@2.4.1": {
      "lodash._basebind": "npm:lodash._basebind@2.4.1",
      "lodash._basecreatewrapper": "npm:lodash._basecreatewrapper@2.4.1",
      "lodash._slice": "npm:lodash._slice@2.4.1",
      "lodash.isfunction": "npm:lodash.isfunction@2.4.1"
    },
    "npm:lodash._getarray@2.4.1": {
      "lodash._arraypool": "npm:lodash._arraypool@2.4.1"
    },
    "npm:lodash._getobject@2.4.1": {
      "lodash._objectpool": "npm:lodash._objectpool@2.4.1"
    },
    "npm:lodash._releasearray@2.4.1": {
      "lodash._arraypool": "npm:lodash._arraypool@2.4.1",
      "lodash._maxpoolsize": "npm:lodash._maxpoolsize@2.4.1"
    },
    "npm:lodash._releaseobject@2.4.1": {
      "lodash._maxpoolsize": "npm:lodash._maxpoolsize@2.4.1",
      "lodash._objectpool": "npm:lodash._objectpool@2.4.1"
    },
    "npm:lodash._setbinddata@2.4.1": {
      "lodash._isnative": "npm:lodash._isnative@2.4.1",
      "lodash.noop": "npm:lodash.noop@2.4.1"
    },
    "npm:lodash._shimkeys@2.4.1": {
      "lodash._objecttypes": "npm:lodash._objecttypes@2.4.1"
    },
    "npm:lodash.bind@2.4.1": {
      "lodash._createwrapper": "npm:lodash._createwrapper@2.4.1",
      "lodash._slice": "npm:lodash._slice@2.4.1"
    },
    "npm:lodash.createcallback@2.4.3": {
      "lodash._basecreatecallback": "npm:lodash._basecreatecallback@2.4.1",
      "lodash._baseisequal": "npm:lodash._baseisequal@2.4.1",
      "lodash.isobject": "npm:lodash.isobject@2.4.1",
      "lodash.keys": "npm:lodash.keys@2.4.1",
      "lodash.property": "npm:lodash.property@2.4.1"
    },
    "npm:lodash.forin@2.4.1": {
      "lodash._basecreatecallback": "npm:lodash._basecreatecallback@2.4.1",
      "lodash._objecttypes": "npm:lodash._objecttypes@2.4.1"
    },
    "npm:lodash.isobject@2.4.1": {
      "lodash._objecttypes": "npm:lodash._objecttypes@2.4.1"
    },
    "npm:lodash.keys@2.4.1": {
      "lodash._isnative": "npm:lodash._isnative@2.4.1",
      "lodash._shimkeys": "npm:lodash._shimkeys@2.4.1",
      "lodash.isobject": "npm:lodash.isobject@2.4.1"
    },
    "npm:lodash.memoize@2.4.1": {
      "lodash._keyprefix": "npm:lodash._keyprefix@2.4.2",
      "lodash.isfunction": "npm:lodash.isfunction@2.4.1"
    },
    "npm:lodash.support@2.4.1": {
      "lodash._isnative": "npm:lodash._isnative@2.4.1"
    },
    "npm:lodash.uniq@2.4.1": {
      "lodash._baseuniq": "npm:lodash._baseuniq@2.4.1",
      "lodash.createcallback": "npm:lodash.createcallback@2.4.3",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:lodash@3.9.1": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:miller-rabin@2.0.1": {
      "bn.js": "npm:bn.js@2.0.5",
      "brorand": "npm:brorand@1.0.5"
    },
    "npm:minimatch@1.0.0": {
      "lru-cache": "npm:lru-cache@2.6.4",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "sigmund": "npm:sigmund@1.0.1"
    },
    "npm:mkdirp@0.5.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "minimist": "npm:minimist@0.0.8",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:once@1.3.2": {
      "wrappy": "npm:wrappy@1.0.1"
    },
    "npm:os-browserify@0.1.2": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:parse-asn1@3.0.1": {
      "asn1.js": "npm:asn1.js@2.0.3",
      "browserify-aes": "npm:browserify-aes@1.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.1",
      "pbkdf2": "npm:pbkdf2@3.0.4",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:pbkdf2@3.0.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "create-hmac": "npm:create-hmac@1.1.3",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:public-encrypt@2.0.1": {
      "bn.js": "npm:bn.js@2.0.5",
      "browserify-rsa": "npm:browserify-rsa@2.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "parse-asn1": "npm:parse-asn1@3.0.1",
      "randombytes": "npm:randombytes@2.0.1"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:q@1.1.2": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:randombytes@2.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:react-tools@0.13.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "commoner": "npm:commoner@0.10.1",
      "jstransform": "npm:jstransform@10.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:react@0.13.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "envify": "npm:envify@3.4.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:react@0.14.0-alpha3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "envify": "npm:envify@3.4.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:readable-stream@1.0.33": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:readable-stream@1.1.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:recast@0.9.18": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "ast-types": "npm:ast-types@0.6.16",
      "esprima-fb": "npm:esprima-fb@10001.1.0-dev-harmony-fb",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "private": "npm:private@0.1.6",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "source-map": "npm:source-map@0.1.43"
    },
    "npm:ripemd160@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:sha.js@2.4.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:shelljs@0.3.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:sigmund@1.0.1": {
      "http": "github:jspm/nodelibs-http@1.7.1",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:source-map@0.1.31": {
      "amdefine": "npm:amdefine@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:source-map@0.1.43": {
      "amdefine": "npm:amdefine@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.13"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:through@2.3.7": {
      "process": "github:jspm/nodelibs-process@0.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    }
  }
});

