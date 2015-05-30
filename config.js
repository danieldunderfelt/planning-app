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
    "alt": "npm:alt@0.17.0-alpha1",
    "ampersand-collection": "npm:ampersand-collection@1.4.5",
    "ampersand-model": "npm:ampersand-model@5.0.3",
    "ampersand-rest-collection": "npm:ampersand-rest-collection@4.0.0",
    "ampersand-state": "npm:ampersand-state@4.5.4",
    "axios": "npm:axios@0.5.4",
    "babel": "npm:babel-core@5.4.7",
    "babel-runtime": "npm:babel-runtime@5.4.7",
    "caniuse-api": "npm:caniuse-api@1.3.1",
    "core-js": "npm:core-js@0.9.13",
    "css": "github:systemjs/plugin-css@0.1.11",
    "csstyle": "npm:csstyle@1.4.0",
    "debounce": "npm:debounce@1.0.0",
    "immutable": "npm:immutable@3.7.3",
    "json": "github:systemjs/plugin-json@0.1.0",
    "jsx": "github:floatdrop/plugin-jsx@1.1.0",
    "moment": "github:moment/moment@2.10.3",
    "react": "npm:react@0.13.3",
    "react-router": "github:rackt/react-router@master",
    "react14": "npm:react@0.14.0-alpha3",
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
    "npm:alt@0.17.0-alpha1": {
      "es-symbol": "npm:es-symbol@1.1.2",
      "eventemitter3": "npm:eventemitter3@0.1.6",
      "flux": "npm:flux@2.0.3",
      "object-assign": "npm:object-assign@2.0.0"
    },
    "npm:amdefine@0.1.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:ampersand-class-extend@1.0.2": {
      "lodash.assign": "npm:lodash.assign@3.1.0"
    },
    "npm:ampersand-collection-lodash-mixin@2.0.1": {
      "ampersand-version": "npm:ampersand-version@1.0.2",
      "lodash.countby": "npm:lodash.countby@3.1.0",
      "lodash.difference": "npm:lodash.difference@3.2.0",
      "lodash.drop": "npm:lodash.drop@3.0.0",
      "lodash.every": "npm:lodash.every@3.2.1",
      "lodash.filter": "npm:lodash.filter@3.1.0",
      "lodash.find": "npm:lodash.find@3.2.0",
      "lodash.foreach": "npm:lodash.foreach@3.0.3",
      "lodash.groupby": "npm:lodash.groupby@3.1.0",
      "lodash.includes": "npm:lodash.includes@3.1.1",
      "lodash.indexby": "npm:lodash.indexby@3.1.0",
      "lodash.indexof": "npm:lodash.indexof@3.0.2",
      "lodash.initial": "npm:lodash.initial@3.0.0",
      "lodash.invoke": "npm:lodash.invoke@3.2.1",
      "lodash.isempty": "npm:lodash.isempty@3.0.3",
      "lodash.isfunction": "npm:lodash.isfunction@3.0.3",
      "lodash.lastindexof": "npm:lodash.lastindexof@3.0.2",
      "lodash.map": "npm:lodash.map@3.1.2",
      "lodash.max": "npm:lodash.max@3.2.0",
      "lodash.min": "npm:lodash.min@3.2.0",
      "lodash.partition": "npm:lodash.partition@3.1.0",
      "lodash.reduce": "npm:lodash.reduce@3.1.1",
      "lodash.reduceright": "npm:lodash.reduceright@3.1.1",
      "lodash.reject": "npm:lodash.reject@3.1.0",
      "lodash.rest": "npm:lodash.rest@3.0.0",
      "lodash.sample": "npm:lodash.sample@3.0.0",
      "lodash.shuffle": "npm:lodash.shuffle@3.0.0",
      "lodash.some": "npm:lodash.some@3.2.1",
      "lodash.sortby": "npm:lodash.sortby@3.1.2",
      "lodash.take": "npm:lodash.take@3.0.0",
      "lodash.without": "npm:lodash.without@3.2.0"
    },
    "npm:ampersand-collection-rest-mixin@4.1.1": {
      "ampersand-sync": "npm:ampersand-sync@3.0.7",
      "ampersand-version": "npm:ampersand-version@1.0.2",
      "lodash.assign": "npm:lodash.assign@3.1.0"
    },
    "npm:ampersand-collection@1.4.5": {
      "ampersand-class-extend": "npm:ampersand-class-extend@1.0.2",
      "ampersand-events": "npm:ampersand-events@1.1.1",
      "lodash.assign": "npm:lodash.assign@3.1.0",
      "lodash.bind": "npm:lodash.bind@3.1.0",
      "lodash.isarray": "npm:lodash.isarray@3.0.3"
    },
    "npm:ampersand-events@1.1.1": {
      "ampersand-version": "npm:ampersand-version@1.0.2",
      "lodash.assign": "npm:lodash.assign@3.1.0",
      "lodash.bind": "npm:lodash.bind@3.1.0",
      "lodash.foreach": "npm:lodash.foreach@3.0.3",
      "lodash.isempty": "npm:lodash.isempty@3.0.3",
      "lodash.keys": "npm:lodash.keys@3.1.0",
      "lodash.once": "npm:lodash.once@3.0.1",
      "lodash.uniqueid": "npm:lodash.uniqueid@3.0.0"
    },
    "npm:ampersand-model@5.0.3": {
      "ampersand-state": "npm:ampersand-state@4.5.4",
      "ampersand-sync": "npm:ampersand-sync@3.0.7",
      "ampersand-version": "npm:ampersand-version@1.0.2",
      "lodash.assign": "npm:lodash.assign@3.1.0",
      "lodash.clone": "npm:lodash.clone@3.0.1",
      "lodash.isobject": "npm:lodash.isobject@3.0.1",
      "lodash.result": "npm:lodash.result@3.1.1"
    },
    "npm:ampersand-rest-collection@4.0.0": {
      "ampersand-collection": "npm:ampersand-collection@1.4.5",
      "ampersand-collection-lodash-mixin": "npm:ampersand-collection-lodash-mixin@2.0.1",
      "ampersand-collection-rest-mixin": "npm:ampersand-collection-rest-mixin@4.1.1",
      "ampersand-version": "npm:ampersand-version@1.0.2"
    },
    "npm:ampersand-state@4.5.4": {
      "ampersand-events": "npm:ampersand-events@1.1.1",
      "ampersand-version": "npm:ampersand-version@1.0.2",
      "array-next": "npm:array-next@0.0.1",
      "key-tree-store": "npm:key-tree-store@1.2.0",
      "lodash.assign": "npm:lodash.assign@3.1.0",
      "lodash.bind": "npm:lodash.bind@3.1.0",
      "lodash.clone": "npm:lodash.clone@3.0.1",
      "lodash.defaults": "npm:lodash.defaults@3.1.1",
      "lodash.escape": "npm:lodash.escape@3.0.0",
      "lodash.foreach": "npm:lodash.foreach@3.0.3",
      "lodash.has": "npm:lodash.has@3.1.1",
      "lodash.includes": "npm:lodash.includes@3.1.1",
      "lodash.isarray": "npm:lodash.isarray@3.0.3",
      "lodash.isdate": "npm:lodash.isdate@3.0.1",
      "lodash.isempty": "npm:lodash.isempty@3.0.3",
      "lodash.isequal": "npm:lodash.isequal@3.0.3",
      "lodash.isfunction": "npm:lodash.isfunction@3.0.3",
      "lodash.isnull": "npm:lodash.isnull@3.0.0",
      "lodash.isobject": "npm:lodash.isobject@3.0.1",
      "lodash.isstring": "npm:lodash.isstring@3.0.1",
      "lodash.isundefined": "npm:lodash.isundefined@3.0.1",
      "lodash.keys": "npm:lodash.keys@3.1.0",
      "lodash.omit": "npm:lodash.omit@3.1.0",
      "lodash.result": "npm:lodash.result@3.1.1",
      "lodash.union": "npm:lodash.union@3.1.0",
      "lodash.uniqueid": "npm:lodash.uniqueid@3.0.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:ampersand-sync@3.0.7": {
      "ampersand-version": "npm:ampersand-version@1.0.2",
      "lodash.assign": "npm:lodash.assign@3.1.0",
      "lodash.defaults": "npm:lodash.defaults@3.1.1",
      "lodash.includes": "npm:lodash.includes@3.1.1",
      "lodash.result": "npm:lodash.result@3.1.1",
      "qs": "npm:qs@2.4.1",
      "xhr": "npm:xhr@1.17.1"
    },
    "npm:ampersand-version@1.0.2": {
      "find-root": "npm:find-root@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "through2": "npm:through2@0.6.5"
    },
    "npm:array-next@0.0.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
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
    "npm:find-root@0.1.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:for-each@0.3.2": {
      "is-function": "npm:is-function@1.0.1"
    },
    "npm:glob@3.2.11": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "minimatch": "npm:minimatch@0.3.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
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
    "npm:global@4.3.0": {
      "min-document": "npm:min-document@2.14.1",
      "process": "npm:process@0.5.2"
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
    "npm:key-tree-store@1.2.0": {
      "tape": "npm:tape@2.14.0"
    },
    "npm:lodash._baseassign@3.1.1": {
      "lodash._basecopy": "npm:lodash._basecopy@3.0.1",
      "lodash.isnative": "npm:lodash.isnative@3.0.2",
      "lodash.keys": "npm:lodash.keys@3.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:lodash._basebind@2.4.1": {
      "lodash._basecreate": "npm:lodash._basecreate@2.4.1",
      "lodash._setbinddata": "npm:lodash._setbinddata@2.4.1",
      "lodash._slice": "npm:lodash._slice@2.4.1",
      "lodash.isobject": "npm:lodash.isobject@2.4.1"
    },
    "npm:lodash._basecallback@3.2.1": {
      "lodash._baseisequal": "npm:lodash._baseisequal@3.0.5",
      "lodash._bindcallback": "npm:lodash._bindcallback@3.0.1",
      "lodash.isarray": "npm:lodash.isarray@3.0.3",
      "lodash.keys": "npm:lodash.keys@3.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:lodash._baseclone@3.1.0": {
      "lodash._arraycopy": "npm:lodash._arraycopy@3.0.0",
      "lodash._arrayeach": "npm:lodash._arrayeach@3.0.0",
      "lodash._baseassign": "npm:lodash._baseassign@3.1.1",
      "lodash._basefor": "npm:lodash._basefor@3.0.2",
      "lodash.isarray": "npm:lodash.isarray@3.0.3",
      "lodash.isnative": "npm:lodash.isnative@3.0.2",
      "lodash.keys": "npm:lodash.keys@3.1.0"
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
    "npm:lodash._basedifference@3.0.2": {
      "lodash._baseindexof": "npm:lodash._baseindexof@3.1.0",
      "lodash._cacheindexof": "npm:lodash._cacheindexof@3.0.1",
      "lodash._createcache": "npm:lodash._createcache@3.0.1"
    },
    "npm:lodash._baseeach@3.0.3": {
      "lodash.keys": "npm:lodash.keys@3.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:lodash._baseeachright@3.0.2": {
      "lodash._baseforright": "npm:lodash._baseforright@3.0.1",
      "lodash.keys": "npm:lodash.keys@3.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:lodash._basefilter@3.0.0": {
      "lodash._baseeach": "npm:lodash._baseeach@3.0.3"
    },
    "npm:lodash._baseflatten@3.1.2": {
      "lodash.isarguments": "npm:lodash.isarguments@3.0.3",
      "lodash.isarray": "npm:lodash.isarray@3.0.3"
    },
    "npm:lodash._basefor@3.0.2": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:lodash._baseforright@3.0.1": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:lodash._baseget@3.7.1": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:lodash._baseisequal@2.4.1": {
      "lodash._getarray": "npm:lodash._getarray@2.4.1",
      "lodash._objecttypes": "npm:lodash._objecttypes@2.4.1",
      "lodash._releasearray": "npm:lodash._releasearray@2.4.1",
      "lodash.forin": "npm:lodash.forin@2.4.1",
      "lodash.isfunction": "npm:lodash.isfunction@2.4.1"
    },
    "npm:lodash._baseisequal@3.0.5": {
      "lodash.isarray": "npm:lodash.isarray@3.0.3",
      "lodash.istypedarray": "npm:lodash.istypedarray@3.0.2",
      "lodash.keys": "npm:lodash.keys@3.1.0"
    },
    "npm:lodash._basetostring@3.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.1"
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
    "npm:lodash._baseuniq@3.0.2": {
      "lodash._baseindexof": "npm:lodash._baseindexof@3.1.0",
      "lodash._cacheindexof": "npm:lodash._cacheindexof@3.0.1",
      "lodash._createcache": "npm:lodash._createcache@3.0.1"
    },
    "npm:lodash._binaryindex@3.0.0": {
      "lodash._binaryindexby": "npm:lodash._binaryindexby@3.0.1"
    },
    "npm:lodash._cacheindexof@2.4.1": {
      "lodash._baseindexof": "npm:lodash._baseindexof@2.4.1",
      "lodash._keyprefix": "npm:lodash._keyprefix@2.4.2"
    },
    "npm:lodash._cachepush@2.4.1": {
      "lodash._keyprefix": "npm:lodash._keyprefix@2.4.2"
    },
    "npm:lodash._createaggregator@3.0.0": {
      "lodash._basecallback": "npm:lodash._basecallback@3.2.1",
      "lodash._baseeach": "npm:lodash._baseeach@3.0.3",
      "lodash.isarray": "npm:lodash.isarray@3.0.3"
    },
    "npm:lodash._createassigner@3.1.1": {
      "lodash._bindcallback": "npm:lodash._bindcallback@3.0.1",
      "lodash._isiterateecall": "npm:lodash._isiterateecall@3.0.8",
      "lodash.restparam": "npm:lodash.restparam@3.6.1"
    },
    "npm:lodash._createcache@2.4.1": {
      "lodash._cachepush": "npm:lodash._cachepush@2.4.1",
      "lodash._getobject": "npm:lodash._getobject@2.4.1",
      "lodash._releaseobject": "npm:lodash._releaseobject@2.4.1"
    },
    "npm:lodash._createcache@3.0.1": {
      "lodash.isnative": "npm:lodash.isnative@3.0.2"
    },
    "npm:lodash._createwrapper@2.4.1": {
      "lodash._basebind": "npm:lodash._basebind@2.4.1",
      "lodash._basecreatewrapper": "npm:lodash._basecreatewrapper@2.4.1",
      "lodash._slice": "npm:lodash._slice@2.4.1",
      "lodash.isfunction": "npm:lodash.isfunction@2.4.1"
    },
    "npm:lodash._createwrapper@3.0.4": {
      "lodash._arraycopy": "npm:lodash._arraycopy@3.0.0",
      "lodash._basecreate": "npm:lodash._basecreate@3.0.1",
      "lodash._replaceholders": "npm:lodash._replaceholders@3.0.0"
    },
    "npm:lodash._getarray@2.4.1": {
      "lodash._arraypool": "npm:lodash._arraypool@2.4.1"
    },
    "npm:lodash._getnative@3.9.0": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:lodash._getobject@2.4.1": {
      "lodash._objectpool": "npm:lodash._objectpool@2.4.1"
    },
    "npm:lodash._invokepath@3.7.1": {
      "lodash._baseget": "npm:lodash._baseget@3.7.1",
      "lodash._baseslice": "npm:lodash._baseslice@3.0.3",
      "lodash._topath": "npm:lodash._topath@3.8.0",
      "lodash.isarray": "npm:lodash.isarray@3.0.3",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:lodash._pickbyarray@3.0.1": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:lodash._pickbycallback@3.0.0": {
      "lodash._basefor": "npm:lodash._basefor@3.0.2",
      "lodash.keysin": "npm:lodash.keysin@3.0.7"
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
    "npm:lodash._toiterable@3.0.3": {
      "lodash._basevalues": "npm:lodash._basevalues@3.0.0",
      "lodash.keys": "npm:lodash.keys@3.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:lodash._topath@3.8.0": {
      "lodash.isarray": "npm:lodash.isarray@3.0.3",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:lodash.assign@3.1.0": {
      "lodash._baseassign": "npm:lodash._baseassign@3.1.1",
      "lodash._createassigner": "npm:lodash._createassigner@3.1.1",
      "lodash.isnative": "npm:lodash.isnative@3.0.2",
      "lodash.keys": "npm:lodash.keys@3.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:lodash.bind@2.4.1": {
      "lodash._createwrapper": "npm:lodash._createwrapper@2.4.1",
      "lodash._slice": "npm:lodash._slice@2.4.1"
    },
    "npm:lodash.bind@3.1.0": {
      "lodash._createwrapper": "npm:lodash._createwrapper@3.0.4",
      "lodash._replaceholders": "npm:lodash._replaceholders@3.0.0",
      "lodash.restparam": "npm:lodash.restparam@3.6.1"
    },
    "npm:lodash.clone@3.0.1": {
      "lodash._baseclone": "npm:lodash._baseclone@3.1.0",
      "lodash._bindcallback": "npm:lodash._bindcallback@3.0.1",
      "lodash._isiterateecall": "npm:lodash._isiterateecall@3.0.8"
    },
    "npm:lodash.countby@3.1.0": {
      "lodash._createaggregator": "npm:lodash._createaggregator@3.0.0",
      "lodash.keys": "npm:lodash.keys@3.1.0"
    },
    "npm:lodash.createcallback@2.4.3": {
      "lodash._basecreatecallback": "npm:lodash._basecreatecallback@2.4.1",
      "lodash._baseisequal": "npm:lodash._baseisequal@2.4.1",
      "lodash.isobject": "npm:lodash.isobject@2.4.1",
      "lodash.keys": "npm:lodash.keys@2.4.1",
      "lodash.property": "npm:lodash.property@2.4.1"
    },
    "npm:lodash.defaults@3.1.1": {
      "lodash.assign": "npm:lodash.assign@3.1.0",
      "lodash.restparam": "npm:lodash.restparam@3.6.1"
    },
    "npm:lodash.difference@3.2.0": {
      "lodash._basedifference": "npm:lodash._basedifference@3.0.2",
      "lodash._baseflatten": "npm:lodash._baseflatten@3.1.2",
      "lodash.restparam": "npm:lodash.restparam@3.6.1"
    },
    "npm:lodash.drop@3.0.0": {
      "lodash._baseslice": "npm:lodash._baseslice@3.0.3",
      "lodash._isiterateecall": "npm:lodash._isiterateecall@3.0.8"
    },
    "npm:lodash.escape@3.0.0": {
      "lodash._basetostring": "npm:lodash._basetostring@3.0.0"
    },
    "npm:lodash.every@3.2.1": {
      "lodash._arrayevery": "npm:lodash._arrayevery@3.0.0",
      "lodash._basecallback": "npm:lodash._basecallback@3.2.1",
      "lodash._baseeach": "npm:lodash._baseeach@3.0.3",
      "lodash._isiterateecall": "npm:lodash._isiterateecall@3.0.8",
      "lodash.isarray": "npm:lodash.isarray@3.0.3",
      "lodash.keys": "npm:lodash.keys@3.1.0"
    },
    "npm:lodash.filter@3.1.0": {
      "lodash._arrayfilter": "npm:lodash._arrayfilter@3.0.0",
      "lodash._basecallback": "npm:lodash._basecallback@3.2.1",
      "lodash._basefilter": "npm:lodash._basefilter@3.0.0",
      "lodash.isarray": "npm:lodash.isarray@3.0.3",
      "lodash.keys": "npm:lodash.keys@3.1.0"
    },
    "npm:lodash.find@3.2.0": {
      "lodash._basecallback": "npm:lodash._basecallback@3.2.1",
      "lodash._baseeach": "npm:lodash._baseeach@3.0.3",
      "lodash._basefind": "npm:lodash._basefind@3.0.0",
      "lodash._basefindindex": "npm:lodash._basefindindex@3.6.0",
      "lodash.isarray": "npm:lodash.isarray@3.0.3",
      "lodash.keys": "npm:lodash.keys@3.1.0"
    },
    "npm:lodash.foreach@3.0.3": {
      "lodash._arrayeach": "npm:lodash._arrayeach@3.0.0",
      "lodash._baseeach": "npm:lodash._baseeach@3.0.3",
      "lodash._bindcallback": "npm:lodash._bindcallback@3.0.1",
      "lodash.isarray": "npm:lodash.isarray@3.0.3"
    },
    "npm:lodash.forin@2.4.1": {
      "lodash._basecreatecallback": "npm:lodash._basecreatecallback@2.4.1",
      "lodash._objecttypes": "npm:lodash._objecttypes@2.4.1"
    },
    "npm:lodash.groupby@3.1.0": {
      "lodash._createaggregator": "npm:lodash._createaggregator@3.0.0",
      "lodash.keys": "npm:lodash.keys@3.1.0"
    },
    "npm:lodash.has@3.1.1": {
      "lodash._baseget": "npm:lodash._baseget@3.7.1",
      "lodash._baseslice": "npm:lodash._baseslice@3.0.3",
      "lodash._topath": "npm:lodash._topath@3.8.0",
      "lodash.isarray": "npm:lodash.isarray@3.0.3",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:lodash.includes@3.1.1": {
      "lodash._baseindexof": "npm:lodash._baseindexof@3.1.0",
      "lodash._basevalues": "npm:lodash._basevalues@3.0.0",
      "lodash._isiterateecall": "npm:lodash._isiterateecall@3.0.8",
      "lodash.isarray": "npm:lodash.isarray@3.0.3",
      "lodash.isstring": "npm:lodash.isstring@3.0.1",
      "lodash.keys": "npm:lodash.keys@3.1.0"
    },
    "npm:lodash.indexby@3.1.0": {
      "lodash._createaggregator": "npm:lodash._createaggregator@3.0.0",
      "lodash.keys": "npm:lodash.keys@3.1.0"
    },
    "npm:lodash.indexof@3.0.2": {
      "lodash._baseindexof": "npm:lodash._baseindexof@3.1.0",
      "lodash._binaryindex": "npm:lodash._binaryindex@3.0.0"
    },
    "npm:lodash.initial@3.0.0": {
      "lodash._baseslice": "npm:lodash._baseslice@3.0.3",
      "lodash._isiterateecall": "npm:lodash._isiterateecall@3.0.8"
    },
    "npm:lodash.invoke@3.2.1": {
      "lodash._baseeach": "npm:lodash._baseeach@3.0.3",
      "lodash._invokepath": "npm:lodash._invokepath@3.7.1",
      "lodash.isarray": "npm:lodash.isarray@3.0.3",
      "lodash.restparam": "npm:lodash.restparam@3.6.1",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:lodash.isarray@3.0.3": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:lodash.isempty@3.0.3": {
      "lodash.isarguments": "npm:lodash.isarguments@3.0.3",
      "lodash.isarray": "npm:lodash.isarray@3.0.3",
      "lodash.isfunction": "npm:lodash.isfunction@3.0.3",
      "lodash.isstring": "npm:lodash.isstring@3.0.1",
      "lodash.keys": "npm:lodash.keys@3.1.0"
    },
    "npm:lodash.isequal@3.0.3": {
      "lodash._baseisequal": "npm:lodash._baseisequal@3.0.5",
      "lodash._bindcallback": "npm:lodash._bindcallback@3.0.1"
    },
    "npm:lodash.isfunction@3.0.3": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:lodash.isnative@3.0.2": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:lodash.isobject@2.4.1": {
      "lodash._objecttypes": "npm:lodash._objecttypes@2.4.1"
    },
    "npm:lodash.keys@2.4.1": {
      "lodash._isnative": "npm:lodash._isnative@2.4.1",
      "lodash._shimkeys": "npm:lodash._shimkeys@2.4.1",
      "lodash.isobject": "npm:lodash.isobject@2.4.1"
    },
    "npm:lodash.keys@3.1.0": {
      "lodash._getnative": "npm:lodash._getnative@3.9.0",
      "lodash.isarguments": "npm:lodash.isarguments@3.0.3",
      "lodash.isarray": "npm:lodash.isarray@3.0.3"
    },
    "npm:lodash.keysin@3.0.7": {
      "lodash.isarguments": "npm:lodash.isarguments@3.0.3",
      "lodash.isarray": "npm:lodash.isarray@3.0.3"
    },
    "npm:lodash.lastindexof@3.0.2": {
      "lodash._binaryindex": "npm:lodash._binaryindex@3.0.0"
    },
    "npm:lodash.map@3.1.2": {
      "lodash._arraymap": "npm:lodash._arraymap@3.0.0",
      "lodash._basecallback": "npm:lodash._basecallback@3.2.1",
      "lodash._baseeach": "npm:lodash._baseeach@3.0.3",
      "lodash.isarray": "npm:lodash.isarray@3.0.3",
      "lodash.keys": "npm:lodash.keys@3.1.0"
    },
    "npm:lodash.max@3.2.0": {
      "lodash._arraymax": "npm:lodash._arraymax@3.0.0",
      "lodash._basecallback": "npm:lodash._basecallback@3.2.1",
      "lodash._baseeach": "npm:lodash._baseeach@3.0.3",
      "lodash._isiterateecall": "npm:lodash._isiterateecall@3.0.8",
      "lodash._toiterable": "npm:lodash._toiterable@3.0.3",
      "lodash.isarray": "npm:lodash.isarray@3.0.3",
      "lodash.isstring": "npm:lodash.isstring@3.0.1",
      "lodash.keys": "npm:lodash.keys@3.1.0"
    },
    "npm:lodash.memoize@2.4.1": {
      "lodash._keyprefix": "npm:lodash._keyprefix@2.4.2",
      "lodash.isfunction": "npm:lodash.isfunction@2.4.1"
    },
    "npm:lodash.min@3.2.0": {
      "lodash._arraymin": "npm:lodash._arraymin@3.0.0",
      "lodash._basecallback": "npm:lodash._basecallback@3.2.1",
      "lodash._baseeach": "npm:lodash._baseeach@3.0.3",
      "lodash._isiterateecall": "npm:lodash._isiterateecall@3.0.8",
      "lodash._toiterable": "npm:lodash._toiterable@3.0.3",
      "lodash.isarray": "npm:lodash.isarray@3.0.3",
      "lodash.isstring": "npm:lodash.isstring@3.0.1",
      "lodash.keys": "npm:lodash.keys@3.1.0"
    },
    "npm:lodash.omit@3.1.0": {
      "lodash._arraymap": "npm:lodash._arraymap@3.0.0",
      "lodash._basedifference": "npm:lodash._basedifference@3.0.2",
      "lodash._baseflatten": "npm:lodash._baseflatten@3.1.2",
      "lodash._bindcallback": "npm:lodash._bindcallback@3.0.1",
      "lodash._pickbyarray": "npm:lodash._pickbyarray@3.0.1",
      "lodash._pickbycallback": "npm:lodash._pickbycallback@3.0.0",
      "lodash.keysin": "npm:lodash.keysin@3.0.7",
      "lodash.restparam": "npm:lodash.restparam@3.6.1"
    },
    "npm:lodash.once@3.0.1": {
      "lodash.before": "npm:lodash.before@3.0.2"
    },
    "npm:lodash.partition@3.1.0": {
      "lodash._createaggregator": "npm:lodash._createaggregator@3.0.0",
      "lodash.keys": "npm:lodash.keys@3.1.0"
    },
    "npm:lodash.reduce@3.1.1": {
      "lodash._basecallback": "npm:lodash._basecallback@3.2.1",
      "lodash._baseeach": "npm:lodash._baseeach@3.0.3",
      "lodash._basereduce": "npm:lodash._basereduce@3.0.1",
      "lodash.isarray": "npm:lodash.isarray@3.0.3",
      "lodash.keys": "npm:lodash.keys@3.1.0"
    },
    "npm:lodash.reduceright@3.1.1": {
      "lodash._basecallback": "npm:lodash._basecallback@3.2.1",
      "lodash._baseeachright": "npm:lodash._baseeachright@3.0.2",
      "lodash._basereduce": "npm:lodash._basereduce@3.0.1",
      "lodash.isarray": "npm:lodash.isarray@3.0.3",
      "lodash.keys": "npm:lodash.keys@3.1.0"
    },
    "npm:lodash.reject@3.1.0": {
      "lodash._arrayfilter": "npm:lodash._arrayfilter@3.0.0",
      "lodash._basecallback": "npm:lodash._basecallback@3.2.1",
      "lodash._basefilter": "npm:lodash._basefilter@3.0.0",
      "lodash.isarray": "npm:lodash.isarray@3.0.3",
      "lodash.keys": "npm:lodash.keys@3.1.0"
    },
    "npm:lodash.rest@3.0.0": {
      "lodash._baseslice": "npm:lodash._baseslice@3.0.3",
      "lodash._isiterateecall": "npm:lodash._isiterateecall@3.0.8"
    },
    "npm:lodash.result@3.1.1": {
      "lodash._baseget": "npm:lodash._baseget@3.7.1",
      "lodash._baseslice": "npm:lodash._baseslice@3.0.3",
      "lodash._topath": "npm:lodash._topath@3.8.0",
      "lodash.isarray": "npm:lodash.isarray@3.0.3",
      "lodash.isfunction": "npm:lodash.isfunction@3.0.3",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:lodash.sample@3.0.0": {
      "lodash._baserandom": "npm:lodash._baserandom@3.0.0",
      "lodash._isiterateecall": "npm:lodash._isiterateecall@3.0.8",
      "lodash._toiterable": "npm:lodash._toiterable@3.0.3",
      "lodash.shuffle": "npm:lodash.shuffle@3.0.0"
    },
    "npm:lodash.shuffle@3.0.0": {
      "lodash._baserandom": "npm:lodash._baserandom@3.0.0",
      "lodash._toiterable": "npm:lodash._toiterable@3.0.3"
    },
    "npm:lodash.some@3.2.1": {
      "lodash._basecallback": "npm:lodash._basecallback@3.2.1",
      "lodash._baseeach": "npm:lodash._baseeach@3.0.3",
      "lodash._isiterateecall": "npm:lodash._isiterateecall@3.0.8",
      "lodash.isarray": "npm:lodash.isarray@3.0.3",
      "lodash.keys": "npm:lodash.keys@3.1.0"
    },
    "npm:lodash.sortby@3.1.2": {
      "lodash._basecallback": "npm:lodash._basecallback@3.2.1",
      "lodash._basecompareascending": "npm:lodash._basecompareascending@3.0.1",
      "lodash._baseeach": "npm:lodash._baseeach@3.0.3",
      "lodash._basesortby": "npm:lodash._basesortby@3.0.0",
      "lodash._isiterateecall": "npm:lodash._isiterateecall@3.0.8",
      "lodash.isarray": "npm:lodash.isarray@3.0.3",
      "lodash.keys": "npm:lodash.keys@3.1.0"
    },
    "npm:lodash.support@2.4.1": {
      "lodash._isnative": "npm:lodash._isnative@2.4.1"
    },
    "npm:lodash.take@3.0.0": {
      "lodash._baseslice": "npm:lodash._baseslice@3.0.3",
      "lodash._isiterateecall": "npm:lodash._isiterateecall@3.0.8"
    },
    "npm:lodash.union@3.1.0": {
      "lodash._baseflatten": "npm:lodash._baseflatten@3.1.2",
      "lodash._baseuniq": "npm:lodash._baseuniq@3.0.2",
      "lodash.restparam": "npm:lodash.restparam@3.6.1"
    },
    "npm:lodash.uniq@2.4.1": {
      "lodash._baseuniq": "npm:lodash._baseuniq@2.4.1",
      "lodash.createcallback": "npm:lodash.createcallback@2.4.3",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:lodash.uniqueid@3.0.0": {
      "lodash._basetostring": "npm:lodash._basetostring@3.0.0"
    },
    "npm:lodash.without@3.2.0": {
      "lodash._basedifference": "npm:lodash._basedifference@3.0.2",
      "lodash.restparam": "npm:lodash.restparam@3.6.1"
    },
    "npm:lodash@3.9.1": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:miller-rabin@2.0.1": {
      "bn.js": "npm:bn.js@2.0.5",
      "brorand": "npm:brorand@1.0.5"
    },
    "npm:min-document@2.14.1": {
      "dom-walk": "npm:dom-walk@0.1.1"
    },
    "npm:minimatch@0.3.0": {
      "lru-cache": "npm:lru-cache@2.6.4",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "sigmund": "npm:sigmund@1.0.1"
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
    "npm:parse-headers@2.0.0": {
      "for-each": "npm:for-each@0.3.2",
      "trim": "npm:trim@0.0.1"
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
    "npm:recast@0.9.18": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "ast-types": "npm:ast-types@0.6.16",
      "esprima-fb": "npm:esprima-fb@10001.1.0-dev-harmony-fb",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "private": "npm:private@0.1.6",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "source-map": "npm:source-map@0.1.43"
    },
    "npm:resumer@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.1",
      "through": "npm:through@2.3.7"
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
      "readable-stream": "npm:readable-stream@1.0.33"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:tape@2.14.0": {
      "deep-equal": "npm:deep-equal@0.2.2",
      "defined": "npm:defined@0.0.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "glob": "npm:glob@3.2.11",
      "has": "npm:has@0.0.1",
      "inherits": "npm:inherits@2.0.1",
      "object-inspect": "npm:object-inspect@1.0.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "resumer": "npm:resumer@0.0.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "through": "npm:through@2.3.7"
    },
    "npm:through2@0.6.5": {
      "process": "github:jspm/nodelibs-process@0.1.1",
      "readable-stream": "npm:readable-stream@1.0.33",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "xtend": "npm:xtend@4.0.0"
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
    },
    "npm:xhr@1.17.1": {
      "global": "npm:global@4.3.0",
      "once": "npm:once@1.1.1",
      "parse-headers": "npm:parse-headers@2.0.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    }
  }
});

